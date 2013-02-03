// setup suspects


var data = require('data-layer');
var stdLeftVal = 100;
var multiplier = 0;
var leftVal;
var j = 0;
var topVal = 10;
var data = data.people
for (i = 0; i < len(data.people); i++) {     
	
	leftVal = stdLeftVal * multiplier;
    multiplier++;
	
	Ti.API.info("-> topVal="+topVal+" leftVal= "+leftVal);
	
	var suspectsTile = Alloy.createController('suspectsTile', {
  	pk : i,
    backgroundImage : "/images/suspects/suspect"+i+".jpg",
    backgroundColor: "#222",
    left:leftVal,
    top:topVal,               
	}).getView();
  $.gameView.add(suspectsTile);
  
  j ++;
	Ti.API.info("j now"+ j)
	
	if (j === 3){
		j = 0;
		topVal = topVal + 100;
		multiplier = 0;
	}
	
}

//$.gameView.backgroundColor = 'pink';


//Ti.API.info('data :' + data);
//$.gameView.setData(data);


var Timer;
var TotalSeconds;

time = 30;

var si;


function CreateTimer(TimerID, Time) {
    si = setInterval(function(){Tick(TimerID)},1000);
}

function Tick(TimerID) {
	Ti.API.info('tick called');
		if (time === 0){
			clearInterval(si);
			//alert('time up');
			var controller = Alloy.createController('leaderboard');
			var win = controller.getView();
			win.open();
			$.game.close();
			
		}else{
	    time--;
	    Ti.API.info('time'+time);
	    TimerID.text = time;
   }
}

function UpdateTimer() {
	Ti.API.info('UpdateTimer called');
    Timer.text = TotalSeconds;
}


CreateTimer($.timerLabel, 30);





