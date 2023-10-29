function  bmiCalculator_876() {
	var weight_876 = document.getElementById("weight_876").value;
	var height_876= document.getElementById("height_876").value;
	var wUnit_876= document.getElementsByName('wUnit_876');
	var i;
	for(i = 0; i < wUnit_876.length; i++) { 
		if(wUnit_876[i].checked) 
			weight_876= weight_876* wUnit_876[i].value; 
	}
	var hUnit_876=document.getElementsByName('hUnit_876');
	for (i=0; i<hUnit_876.length;i++){
		if(hUnit_876[i].checked)
			height_876=height_876*hUnit_876[i].value;
	}
	var bmi_876=weight_876/ (height_876*height_876);
  document.getElementById("bmi_876").innerHTML = "Answer: "+ bmi_876.toFixed(1);

}