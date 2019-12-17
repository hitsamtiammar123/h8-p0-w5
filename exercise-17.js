function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var angkaStr=angka.toString();
    if(angkaStr.length===1)
        return angka;
    else{
        var splitStr=angkaStr.split('');
        var totalPerkalian=splitStr.reduce((p,f) => p*Number(f));
        return kaliTerusRekursif(totalPerkalian);
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6