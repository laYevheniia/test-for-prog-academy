var buttonResult = document.getElementById("buttonResult");


function onButtonResultClick() {
  console.log("onButtonResultClick");
  var input1 = document.getElementById("num1");
  var input2 = document.getElementById( "num2");
  


  var num1 = Number(input1.value);
  var num2 = Number(input2.value);

  let summ = num2 / num1;
  i.value = summ;

//   window.alert(summ);

    

}
var i = document.querySelector(".result");


buttonResult.addEventListener("click", onButtonResultClick); //кнопка для результата
