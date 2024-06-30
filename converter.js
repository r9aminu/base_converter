function convertNumber(number, inputBase, outputBase) {
    const inputBaseInt = parseInt(inputBase, 10);
    const outputBaseInt = parseInt(outputBase, 10);

    if (inputBaseInt < 2 || inputBaseInt > 16) {
        return "Input base must be between 2 and 16.";
    }

    if (outputBaseInt < 2 || outputBaseInt > 16) {
        return "Output base must be between 2 and 16.";
    }

    const numToInt = parseInt(number, inputBaseInt);
    if (isNaN(numToInt)) {
        return "Invalid number.";
    }

    const intToStr = numToInt.toString(outputBaseInt).toUpperCase();
    return `${number} from base ${inputBase} to base ${outputBase} is ${intToStr}`;
}

const args = process.argv.slice(2);
if (args.length !== 3) {
    console.log("enter numbers");
    process.exit(1);
}

const [number, inputBase, outputBase] = args;

const result = convertNumber(number, inputBase, outputBase);
console.log(result);
