const units = require("./Units");

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear() + 5
      }`;
  },
  isNewRecipe: function (value, options) {
    if (value == 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },
  DisplayTimeValue(value, uom) {
    return units.ConvertValueToBest(value, uom).val;
  },
  DisplayTimeUnit(value, uom) {
    return units.ConvertValueToBest(value, uom).singular;
  }
};