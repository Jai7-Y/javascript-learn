function add2Numbers(number1, number2) {
    console.log(number1+number2);
    return number1+number2;
}

const result =  add2Numbers(3,null)

console.log(result);

function loginUserMessage(username){
    return `${username} just logged in`;
}

console.log(loginUserMessage("JAI"))