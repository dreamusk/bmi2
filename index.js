function bmiCalculator (){
    var h = prompt("height");
    var w = prompt("weight");
   var bmi = h/(w*w);
   alert(" your bmi is " + bmi);
   document.getElementById("pil").innerText=bmi;
};

bmiCalculator();

