/**
 * Make a string that the answer and the code to an Array, then return a new Array. When the new Array's value is null, it'll return code: [0: '']
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