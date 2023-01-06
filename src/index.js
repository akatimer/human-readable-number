module.exports = function toReadable (number) {
  let x
  function switchHundreds(number){
  switch (Math.floor(number/100)) {
    case 1: return "one hundred"; break;
    case 2: return "two hundred"; break;
    case 3: return "three hundred"; break;
    case 4: return "four hundred"; break;
    case 5: return "five hundred"; break;
    case 6: return "six hundred"; break;
    case 7: return "seven hundred"; break;
    case 8: return "eight hundred"; break;
    case 9: return "nine hundred"; break;
    case 0: return "" ; break;
  }}
  
  function switchNumbers (number) {
    switch (number%10) {
      case 1: return "one"; break;
      case 2: return "two"; break;
      case 3: return "three"; break;
      case 4: return "four"; break;
      case 5: return "five"; break;
      case 6: return "six"; break;
      case 7: return "seven"; break;
      case 8: return "eight"; break;
      case 9: return "nine"; break;
      case 0: return " "; break;
    }
  }

    x=Math.floor(number%100);
    if (number===0) { 
      return 'zero'
    }  else if (number===10 || (Math.floor((number/10)%10)===1 && number%10===0 )) {
      return (switchHundreds(number) + " ten").trim();
    }
     else if (x<20 && x>10) {
    switch (x) {
      case 11: return (switchHundreds(number) + " eleven").trim(); break;
      case 12: return (switchHundreds(number) + " twelve").trim(); break;
      case 13: return (switchHundreds(number) + " thirteen").trim(); break;
      case 14: return (switchHundreds(number) + " fourteen").trim(); break;
      case 15: return (switchHundreds(number) + " fifteen").trim(); break;
      case 16: return (switchHundreds(number) + " sixteen").trim(); break;
      case 17: return (switchHundreds(number) + " seventeen").trim(); break;
      case 18: return (switchHundreds(number) + " eighteen").trim(); break;
      case 19: return (switchHundreds(number) + " nineteen").trim(); break;
    }
  } else if (Math.floor(x/10)===2) {
      return (`${switchHundreds(number)} twenty ${switchNumbers(number)}`).trim()
  } else if (Math.floor(x/10)===3) {
      return (`${switchHundreds(number)} thirty ${switchNumbers(number)}`).trim()
  } else if (Math.floor(x/10)===4) {
      return (`${switchHundreds(number)} forty ${switchNumbers(number)}`).trim()
  } else if (Math.floor(x/10)===5) {
      return (`${switchHundreds(number)} fifty ${switchNumbers(number)}`).trim()
  } else if (Math.floor(x/10)===6) {
    return (`${switchHundreds(number)} sixty ${switchNumbers(number)}`).trim()
  } else if (Math.floor(x/10)===7) {
    return (`${switchHundreds(number)} seventy ${switchNumbers(number)}`).trim()
  } else if (Math.floor(x/10)===8) {
    return (`${switchHundreds(number)} eighty ${switchNumbers(number)}`).trim()
  } else if (Math.floor(x/10)===9) {
    return (`${switchHundreds(number)} ninety ${switchNumbers(number)}`).trim()
  }  else if (Math.floor(x/10)===0) {
      return (`${switchHundreds(number)} ${switchNumbers(number)}`).trim()
      }
} 