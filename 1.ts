Abbreviate a Two Word Name
const abbrevName = (name) => {
    return name.split(' ').map(el => el.at(0).toUpperCase()).join('.')

}

console.log(abbrevName('Sam Harris'))// => S.H
console.log(abbrevName('patrick feeney'))// => P.F