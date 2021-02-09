'use strict';


/***
  * The function find last element for every columns 
  *
  * @param {Array} rows - rows
  * @param {Number} columns - number of colums
  * @returns {String}
  */
const findEndLine = (rows, columns) => {
    let endLine = new Array(columns)
    for (let i = 0; i < columns; i++) {
        if (rows[rows.length - 1].length > i)
            endLine[i] = rows[rows.length - 1][i]
        else
            endLine[i] = rows[rows.length - 2][i]
    }
    return endLine
}

/***
  * The function formats the given numbers into several columns 
  *
  * @param {Array} array - array of numbers
  * @param {Number} columns - number of colums
  * @returns {String}
  */
const format = (array, columns) => {
    if (columns < 0) {
        return null;
    }
    const rows = Array(Math.ceil(array.length / columns)).fill(0).map((item, index) => array.map(item => String(item)).slice(index * columns, (index + 1) * columns));
    const cols = Array(columns).fill(0).map((_, index) => array.map(item => String(item)).filter((n, i) => i % columns === index))
    const widths = cols.map((item, index) => Math.max(...item.map(i => i.length)))
    
    const endLine = findEndLine(rows, columns)
    let finalResult = ''

    rows.forEach(function (item, index){
        item.forEach(function (item2, index2) {
            let repeat = endLine[index2].length - item2.length
            if (columns !== 1 && index2 % columns !== 0) {
                repeat++
            }
            if (repeat > 0) {
                finalResult += ' '.repeat(repeat)
            }
            finalResult += item2
        });
        if (index !== rows.length - 1) {
            finalResult += '\n'
        }
    });
    return finalResult
}
