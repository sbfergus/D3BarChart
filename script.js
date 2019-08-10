/*document.addEventListener('DOMContentLoaded',function() {
    req=new XMLHttpRequest();
    req.open("GET",'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',true);
    req.send();
    req.onload=function(){
    json=JSON.parse(req.responseText);
    const dataset = json.data;
    for (let i = 0; i < dataset.length; i++) {
    	if (dataset[i][0].substring(5,7) === '01') {
    		dataset[i][0] = dataset[i][0].substring(0,4) + ' Q1';
    	} else if (dataset[i][0].substring(5,7) === '04') {
    		dataset[i][0] = dataset[i][0].substring(0,4) + ' Q2';
    	} else if (dataset[i][0].substring(5,7) === '07') {
    		dataset[i][0] = dataset[i][0].substring(0,4) + ' Q3';
    	} else if (dataset[i][0].substring(5,7) === '10') {
    		dataset[i][0] = dataset[i][0].substring(0,4) + ' Q4';
    	}
    }
    console.log(dataset[10]);
     
 };
});*/
var w=960,h=500,
svg=d3.select("body")
.append("svg")
.attr("width",w)
.attr("height",h);
 


