var buttonResult = document.getElementById('buttonResult');

//var elemet = document.querySelector ('div.convert_block_item input [convert_result]');

function onButtonResultClick (){
  console.log('onButtonResultClick');
  var input1 = document.getElementById(id='num1');
  var input2 = document.getElementById(id='num2');

  var num1 = Number (imput1.value);
  var num2 = Number (imput2.value);

  var summ = num2 / num1;
  window.alert(summ);
  ButtonResult.addEventListener('click',onButtonResultClick); //
 //ButtonResult = document.getElementById('convert_result');
}

//ButtonResult = document.getElementById('convert_result'); // поле для результата 
//buttonResult.addEventListener('click',onButtonResultClick); //кнопка для результата
