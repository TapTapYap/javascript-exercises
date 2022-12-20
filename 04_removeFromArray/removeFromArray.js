const removeFromArray = function(itemArray, itemsToRemove) {
    return itemArray.filter(element => !itemsToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
