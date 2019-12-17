function changeVocals (str) {
    //code di sini
    var newStr='';

    for(var i=0;i<str.length;i++){
        var c=str.charCodeAt(i);
        if((c>=65 && c<90) || (c>=97 && c<122))
            c++;
        newStr+=String.fromCharCode(c);
    }
    return newStr;
  }
  
  function reverseWord (str) {
    //code di sini
    var strArr=str.split('');
    var strReverse=strArr.reverse();
    return strReverse.join('');
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var newStr='';
    for(var i=0;i<str.length;i++){
        var c=str.charCodeAt(i);
        if(c>=65 && c<=90 )
            c=String.fromCharCode(c).toLowerCase();
        else if(c>=97 && c<=122)
            c=String.fromCharCode(c).toUpperCase();
        
        newStr+=c;
    }
    return newStr;
  }
  
  function removeSpaces (str) {
    //code di sini
    return str.trim();
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length<5)
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
        
    var newVocal=changeVocals(name);
    var reverseStr=reverseWord(newVocal);
    var changeUpperLower=setLowerUpperCase(reverseStr);
    var noSpaces=removeSpaces(changeUpperLower);
    //console.log('newVocal-'+name+': ',newVocal);

    return noSpaces;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
