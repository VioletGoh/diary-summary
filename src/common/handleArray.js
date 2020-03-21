/**
 * make a string that the answer and the code to an array, then return a new array
 * @param {*} array
 */
export function handleArray(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        newArr[i] = array[i];
        for(const key in newArr[i]) {
            if(Object.prototype.hasOwnProperty.call(newArr[i], key)) {
                if(key == 'answer') {
                    const el = newArr[i][key];
                    newArr[i][key] = el.split(';');
                } else if(key == 'code') {
                    const el = newArr[i][key];
                    newArr[i][key] = el.split(';');
                }
            }
        }
    }
    return newArr;
}
