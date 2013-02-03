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