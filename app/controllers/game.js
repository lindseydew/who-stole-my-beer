// setup suspects
//var data = [];
var stdLeftVal = 100;
var multiplier = 0;
var leftVal;
var j = 0;
var topVal = 0;

for (i = 0; i < 9; i++) {     
	
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