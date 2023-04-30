const convert = require("convert-units");

function GetAllIngredientUOMs() {
    let uom = [{
        abbr: "qty",
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

module.exports = {
    GetAllIngredientUOMs,
    GetTimeUOMs
}