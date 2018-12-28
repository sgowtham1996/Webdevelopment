// here var is used for declaration of variables but when we use var inside a scope that is inside some if else conditions it temporarily keep on changing values if we need change we can use "var" if not we must be using "let" a global declaration for declaring the variable beacuse it dont do changes if its declared globally and inside variable

let iAmGlobal = 'Global'

if (true) {
    let iAmLocal = 'Local'
    iAmGlobal = 'ScopeGlobal'
    console.log(iAmGlobal);
}
//console.log(iAmLocal);
console.log(iAmGlobal);