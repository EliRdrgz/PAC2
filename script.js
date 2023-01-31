let num1 = parseInt(prompt("Introdueix el primer número (1 a 50):"));
let num2 = parseInt(prompt("Introdueix el segon número (1 a 50):"));

while (num1 < 1 || num1 > 50 || num2 < 1 || num2 > 50) {
        alert("El número ha de ser entre 1 i 50. Torna a introduir els números.");
        num1 = parseInt(prompt("Introdueix el primer número:"));
        num2 = parseInt(prompt("Introdueix el segon número:"));
}

    console.log('El primer número es: '+num1);
    console.log('El segon número es: '+num2);

    if (num1 >= 1 && num1 <= 50 && num2 >= 1 && num2 <= 50) {
      console.log("La suma és: " + (num1 + num2));

      let isNum1Prime = true;
      let isNum2Prime = true;
      for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
          isNum1Prime = false;
          break;
        }
      }
      for (let i = 2; i < num2; i++) {
        if (num2 % i === 0) {
          isNum2Prime = false;
          break;
        }
      }
      if (isNum1Prime && isNum2Prime) {
        console.log("Tots dos números són primers.");
      } else if (!isNum1Prime && !isNum2Prime) {
        console.log("Cap número es primer.");
      } else if(isNum1Prime && !isNum2Prime){
        console.log("Només el número " + num1 + ' és primer.')
      }else if(!isNum1Prime && isNum2Prime){
        console.log("Només el número "+num2 + ' és primer.')
      }


      

      if (num1 % 2 === 0 && num2 % 2 === 0) {
        console.log("Tots dos números són parells.");
      } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
        console.log("Tots dos números són imparells.");
      } else if(num1 % 2 === 0 && num2 % 2 !== 0){
        console.log('Només el número '+ num1+ ' és parell.')
      } else if(num1 % 2 !== 0 && num2 %2  ===0)
        console.log('Només el número '+ num2+ ' és parell.')
      {
        console.log("Només un número és parell.");
      }

      if (num1 < num2) {
        console.log("Nombres parells en rang ascendent:");
        for (let i = num1 + 1; i < num2; i++) {
          if (i % 2 === 0) {
            console.log(i);
          }
        }
      } else if (num1 > num2) {
        console.log("Nombres imparells en rang descendent:");
        for (let i = num1 - 1; i > num2; i--) {
          if (i % 2 !== 0) {
            console.log(i);
          }
        }
      } else {
        console.log("Números iguals:");
        if (num1 % 2 === 0) {
          console.log(num1 + " és parell.");
        } else {
          console.log(num1 + " és imparell.");
        }
        if (isNum1Prime) {
          console.log("Només un número és primer.");
        }
    }
}
