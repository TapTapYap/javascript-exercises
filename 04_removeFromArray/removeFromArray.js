const removeFromArray = function(itemArray, itemsToRemove) {
    return itemArray.filter(itemArray => !itemsToRemove.includes(itemsToRemove));
};

// Do not edit below this line
module.exports = removeFromArray;
