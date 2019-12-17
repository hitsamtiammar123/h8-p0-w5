function totalDigitRekursif(angka) {
    // you can only write your code here!

    var angkaStr=angka.toString();
    var firstAngka=angkaStr[0];
    if(angkaStr.length===1)
        return Number(firstAngka);
    var sisaAngka=angkaStr.slice(1,angkaStr.length);
    return Number(firstAngka)+totalDigitRekursif(Number(sisaAngka));

  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5