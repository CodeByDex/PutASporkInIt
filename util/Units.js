const convert = require("convert-units");
const qty = "qty";
const excludedUOMs = [
    // "mcg",
    // "mg",
    // "mt",
    // "t",
    // "m3",
    // "c3",
    "cl",
    "dc",
    "kl",
    "m3",
    "km3",
    "krm",
    "tsk",
    "msk",
    "kkp",
    "glas",
    "kanna",
    "in3",
    "ft3",
    "yd3",
    // "ns",
    // "mu",
    // "ms"
];

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
};

function ConvertValueToBestMetric(value, from){
    return ConvertValueToSystem(value, from, "metric");
}

function ConvertValueToBestImperial(value, from){
    return ConvertValueToSystem(value, from, "imperial");
}

function ConvertValueToBest(value, from){
    return convert(value).from(from).toBest({exclude: excludedUOMs});
}

function ConvertValueToSystem(value, from, system){
    return convert(value).from(from).toBest({system: system, exclude: excludedUOMs});
}

module.exports = {
    GetAllIngredientUOMs,
    GetTimeUOMs,
    ConvertValue,
    ConvertValueToBest,
    ConvertValueToBestImperial,
    ConvertValueToBestMetric
}