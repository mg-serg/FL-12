let x;

const a = (x = prompt('For identify triangle type:\nenter your lenth of the first side')) === ''
            ? NaN 
            : +x;
const b = (x = prompt('For identify triangle type:\nenter your lenth of the second side')) === ''
            ? NaN 
            : +x;
const c = (x = prompt('For identify triangle type:\nenter your lenth of the third side')) === ''
            ? NaN 
            : +x;

if(
    !isFinite(a) || 
    !isFinite(b) || 
    !isFinite(c)
){
    alert('Input values should be ONLY numbers');
}else if(
    a <= 0 ||
    b <= 0 ||
    c <= 0
){
    alert('A triangle must have 3 sides with a positive definite length');
}else if(
    a + b < c ||
    b + c < a ||
    a + c < b 
){
    alert('Triangle doesn’t exist');
}else if(
    a === b &&
    b === c &&
    c === a
){
    console.log('Equilateral triangle');
}else if(
    a === b || 
    b === c || 
    c === a
){
    console.log('Isosceles triangle');
}else if(
    a !== b && 
    b !== c && 
    c !== a
){
    console.log('Scalene triangle');
}