function bmiCalculator (){
    var h = prompt("height");
    var w = prompt("weight");
   var bmi = h/(w*w);
   alert(bmi);
   document.getElementById("pil").innerText=bmi;
};

bmiCalculator();

