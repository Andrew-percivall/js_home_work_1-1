const inputHours = +prompt("яку кількість годин перевести у секунди ?")

if (isNaN(inputHours) || inputHours <= 0) {
  alert("помилка: введено літери або пустий рядок, вводити можна лише числа");
} else {
  const result = inputHours * 60 * 60;
    if (inputHours < 2) {
      alert(`результат: у ${inputHours} часі кількість секунд = ${result} секунд`);
    } else {
      alert(`результат: у ${inputHours} годинах кількість секунд = ${result} секунд`);
    }
}

//! OLD style
// const timeSecond = +prompt('welcome! to TIME-COLLAPS' +
// '\n\nhow much hours? \n\nEnter Hours:');

// if (timeSecond >= 0){
//   alert(`IN: ${timeSecond} Hour(s) ${timeSecond*60*60} seconds`);
// }
// else {
//   alert('please RELOAD PAGE and enter only NUMBERS!');
// }
