// setup suspects
//var data = [];
var stdVal = 40;
var multiplier = 0;
var leftVal;
var j = 0;
var topVal = 10;

for (i = 0; i < 9; i++) {     
	
	multiplier++;
	
  leftVal = stdVal * multiplier;
  
  Ti.API.info('leftVal ='+leftVal);
	
	Ti.API.info("J"+ j)
	
	if (j === 2){
		j = 0;
		topVal = topVal + 75;
		multiplier = 0;
	}
	
	j ++;
	
	Ti.API.info("topVal"+topVal);
	
	var suspectsTile = Alloy.createController('suspectsTile', {
  	pk : i,
    backgroundImage : "/images/suspects/suspect1.jpg",
    backgroundColor: "#222",
    left:leftVal,
    top:topVal,               
	}).getView();
  $.gameView.add(suspectsTile);
}
$.gameView.backgroundColor = 'pink';


//Ti.API.info('data :' + data);
//$.gameView.setData(data);