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
let vysledneCislo = "";
    let zbytek;

    if (inputNumberSystem !== 10) {
        return "Chyba: vstupní soustava musí být 10.";
    } else if (outputNumberSystem !== 2) {
        return "Chyba: výstupní soustava musí být 2.";
    } else if (inputNumber === null) {
        return "Chyba: nebylo zadáno žádné číslo.";
    } else {
        inputNumber = inputNumber.trim();

        if (inputNumber === "") {
            return "Chyba: nebylo zadáno žádné číslo.";
        } else if (isNaN(inputNumber)) {
            return "Chyba: musíš zadat pouze číslo.";
        } else {
            inputNumber = Number(inputNumber);

            if (inputNumber < 0) {
                return "Chyba: záporné číslo nelze převést.";
            } else if (inputNumber === 0) {
                return "0";
            } else {
                while (inputNumber > 0) {
                    zbytek = inputNumber % 2;
                    vysledneCislo = zbytek + vysledneCislo;
                    inputNumber = Math.floor(inputNumber / 2);
                }

                return vysledneCislo;
            }
        }
    }
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
