// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens){
    let answer = true
    let count = []
    let arr = parens.split('')
    arr.forEach(par => {
        par === '(' ? count.push('Open') : null
        !count.includes('Open') && par === ')' ? count.push('Close') : null
        par === ')' && count.includes('Open') ? count.splice(arr.indexOf('Open'),1) : null
    })
    parens[0] ===')' ? answer = false : null
    count.length > 0 ? answer = false : null
    return answer 
} 

console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);
console.log(validParentheses( "()))))()" ), false);
console.log(validParentheses( "())(()(())" ), false);
console.log(validParentheses( "())" ), false);