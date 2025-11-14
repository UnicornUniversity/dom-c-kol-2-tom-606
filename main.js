//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * TODO - Please, add specific description here for the application purpose.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  // decimal --> binary convertion
  // inicializace vstupu
  const vstup = inputNumber;
  let vystup = "";
  // kontrola, zdali jsme v režimu decimálního vstupu
  if (inputNumberSystem !==10) {
    console.log("ERROR: inputNumberSystem is not decimal");
    // Pauza 5 sekund, ukončit program.
    setTimeout(() => {
    return null;
    }, 5000);
  }
  // kontrola, zdali jsme v řežimu binárního výstupu
  if (outputNumberSystem !==2 ) {
    console.log("ERROR: outputNumberSystem is not binary");
    // Pauza 5 sekund, ukončit program.
    setTimeout(() => {
    return null;
    }, 5000);
  }
  // validace vstupu
  if (isNaN(vstup)) {
    console.log("ERROR: Unexpected characters in input.")
    // Pauza 5 sekund, ukončit program.
    setTimeout(() => {
    return null;
    }, 5000);
  }
  // Výpočet maximálně potřebných mocnin dvojky
  let maxBits;
  let i = 0;
  while (maxBits === undefined) {
    if (2**i >= vstup) {
      maxBits = i;
    } else {
      i = i + 1
      }
  }
  let cislo = vstup;
  // convertion
  const cyklus = maxBits;
  for (let i = 0; i <= cyklus; i++) {
    if (cislo >= 2**maxBits) {
      vystup = vystup + "1";
      cislo = cislo - 2**maxBits;
      maxBits = maxBits-1;
    } else {
      maxBits = maxBits-1;
      // ošetření, že nezačínáme nulou, aby se dobře provedly automatické testy
      if (vystup!=="") {
        vystup = vystup + "0";
      }
    }
  }
  // ošetření nuly
  if (vstup==0) {
    vystup = "0";
  }
  // vypsat výsledek do konzole
  console.log("Číslo v desítkové soustavě " + vstup + " je číslo " + vystup + " v soustavě dvojkové");
  return vystup;
}

/**
 * TODO - Change this to contain all input number systems that your application can convert from.
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [10];
}

/**
 * TODO - Change this to contain all output number systems that your application can convert to.
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [2];

}
