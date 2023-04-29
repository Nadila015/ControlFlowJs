// TUGAS MEMBUAT CONTOH KODE KONTROL FLOW JAVA SCRIPT
// NADILA SUMARDIATI

//Block Statement
var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// Expected output: 2

console.log(y);
// Expected output: 1

//if...else statement
if (true) {
    console.log('hello world');
  }
  if (false) {
    console.log('hello world');
  }

const inputKataSandi = 'rahasiaaja';

if (inputKataSandi === 'rahasia123') {
  console.log('Selamat Anda berhasil login.');
} else {
  console.log('Ops! Kata sandi salah.');
}

//falsy values
console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0

//switch statement
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

//break statement
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}

//thrown statement
//try catch statement
try {
    adddlert("Welcome guest!");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.message;
  }

//loop statement
  for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

//do...while statement
  i = 0;
do {
  cout << i << "\n";
  i++;
}
while (i < 5);

//while statement
i = 0;
while (i < 5) {
  cout << i << "\n";
  i++;
}

//break
i = 0;
while (i < 10) {
  cout << i << "\n";
  i++;
  if (i == 4) {
    break;
  }
}

//continue
i = 0;
while (i < 10) {
  if (i == 4) {
    i++;
    continue;
  }
  cout << i << "\n";
  i++;
}