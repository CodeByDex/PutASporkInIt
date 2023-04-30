const convert = require("convert-units");
const qty = "qty";

function GetAllIngredientUOMs() {
    let uom = [{
        abbr: qty,
        measure: "count",
        system: "N/A",
        singular: "Quantity",
        plural: "Quantities"
    }];

    convert().list("mass").map(x => uom.push(x));
    convert().list("volume").map(x => uom.push(x));

    return uom;
}

function GetTimeUOMs() {
    return convert().list("time");
}

/**
 * Function expects a number value to convert from one unit to another
 * @param {number} value 
 * @param {string} from 
 * @param {string} to 
 * @returns {number}
 */
function ConvertValue(value, from, to) {
    if (isNaN(value)) {
        throw new Error("Value must be numeric");
    }

    //qty is not a convertable unit
    if (from === qty || to === qty){
        return value;
    };

    return convert(value).from(from).to(to);
}

module.exports = {
    GetAllIngredientUOMs,
    GetTimeUOMs,
    ConvertValue
}