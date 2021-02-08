'use strict';

/***
  * The function formats the given numbers into several columns 
  *
  * @param {Array} array - array of numbers
  * @param {Number} columns - number of colums
  * @returns {String}
  */

const format = (array, columns) => {
    const rows = [...Array(Math.ceil(array.length / columns))].map((item, index) => array.map(item => String(item)).slice(index * columns, (index + 1) * columns));
    const cols = [...Array(columns)].map((_, index) => array.map(item => String(item)).filter((n, i) => i % columns === index))
    const widths = cols.map((item, index) => Math.max(...item.map(i => i.length)))

    return rows.map(n => n.map((m, i) => m.padStart(widths[i], ' ')).join(' ')).join('\n');
}
