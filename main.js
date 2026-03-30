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
export function main(inputNumber, inputNumberSystem, outputNumberSystem) { // This function converts the input number from base 10 to base 2
let vysledneCislo = ""; // stores the final binary result
    let zbytek; // stores remainder after division by 2

    if (inputNumberSystem !== 10) { // input system must be decimal
        return "Chyba: vstupní soustava musí být 10.";
    } else if (outputNumberSystem !== 2) { // output system must be binary
        return "Chyba: výstupní soustava musí být 2.";
    } else if (inputNumber === null) { // nothing was entered
        return "Chyba: nebylo zadáno žádné číslo.";
    } else {
        inputNumber = inputNumber.trim(); // removes spaces from start and end

        if (inputNumber === "") { // empty input after removing spaces
            return "Chyba: nebylo zadáno žádné číslo.";
        } else if (isNaN(inputNumber)) { // checks if input is not a number
            return "Chyba: musíš zadat pouze číslo.";
        } else {
            inputNumber = Number(inputNumber); // converts text to number

            if (inputNumber < 0) { // negative numbers are not allowed
                return "Chyba: záporné číslo nelze převést.";
            } else if (inputNumber === 0) { // zero stays zero in binary
                return "0";
            } else {
                while (inputNumber > 0) { // repeats until number becomes 0
                    zbytek = inputNumber % 2; // gets remainder after division by 2
                    vysledneCislo = zbytek + vysledneCislo; // adds new digit to the front
                    inputNumber = Math.floor(inputNumber / 2); // divides by 2 and keeps whole part
                }

                return vysledneCislo; // returns final binary number
            }
        }
    }
}

/**
 * TODO - Change this to contain all input number systems that your application can convert from.
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() { // Returns that only decimal system is allowed on input
	return [10];
}

/**
 * TODO - Change this to contain all output number systems that your application can convert to.
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() { // Returns that only binary system is allowed on output
	return [2];
}
