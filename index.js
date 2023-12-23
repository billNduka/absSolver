const disp = document.getElementById("display-el")
const btn = document.getElementById("submit-btn")
const input = document.getElementById("input-el")
const power = document.getElementById("input-sq")
btn.addEventListener("click", solve)
let a
let b
let letters
let digits
let coefficient
// const appear = setInterval(() => {input.placeholder = "_"},1000)
// const disappear = setInterval(() => {input.placeholder = " "},1500)

// function cursor(){
//     clearInterval(appear)
//     clearInterval(disappear)
// }

/*function solve(){
    let a = Number(prompt("What is your a?"))
    let b = Number(prompt("What is your b?"))
    let n = Number(prompt("What is your n?"))
    if(a !== NaN || b !== NaN || n !== NaN){
        expand(a,b,n)
    } else{
        disp.innerHTML = "please use a number as your a, b or n"
    }
    

}*/
function solve(){
    letters = input.value.match( /[a-zA-Z]/g)
    digits = input.value.match( /[\d]+/g)
    coefficient = letters[0]
    a = Number(digits[0])
    b = Number(digits[1])
    let n = power.value
    expand(a,b,n)
}
function factorial(n){
    let result = 1
    for(let i=n; i > 0; i--){
      result = result*i
    }
    return (result)
}
function combine(n,r){
    let answer = factorial(n)/(factorial(n-r)*factorial(r))
    return(answer)
}
function formatting(a){
        a.slice(0,-2)
}



const add = (x, y) => {
    while(y !== 0){
       let carry = x & y;
       x = x ^ y;
       y = carry << 1;
    }
    return x;
 };

function expand(a,b,n){
    if(/\^\d+/.test(input.value)){
        if(input.value.match(/[a-zA-Z]/g).length > 1){
            let expansion = ""
            coefficient = letters[0]
            let power1 = input.value.match(/\^\d+/)[0]
            let power2 = input.value.match(/\^\d+/g)[1]
            let inc2
                for(i=n; i>=0;i--){
                let increment = Number(power1[1])               
                if(input.value.match(/\^\d+/g).length == 1){
                    expansion += combine(n,i)*(a**(n-i))*(b**i) + `${coefficient}<sup>${1+add(increment,i)}</sup>+ `
                } else {
                    inc2 = Number(power2[1])
                    expansion += combine(n,i)*(a**(n-i))*(b**i) + `${coefficient}<sup>${inc2+add(increment,i)}</sup>+ `
                } 
                }
            expansion = expansion.slice(0,-2)
            disp.innerHTML = expansion
            console.log(expansion)
        } else{
            let expansion = ""
            coefficient = letters[0]
            let power1 = input.value.match(/\^\d+/)[0]
                for(i=n; i>=0;i--){
                let increment = Number(power1[1])
                expansion += combine(n,i)*(a**(n-i))*(b**i) + `${coefficient}<sup>${add(increment,i)}</sup>+ `
                }
            expansion = expansion.slice(0,-2)
            disp.innerHTML = expansion
            console.log(expansion)
        }
    } else {
        let expansion = ""
        coefficient = letters[0]
        for(i=n; i>=0;i--){
        expansion += combine(n,i)*(a**(n-i))*(b**i) + `${coefficient}<sup>${i}</sup>+ `
       }
    expansion = expansion.slice(0,-2)
    disp.innerHTML = expansion
    console.log(expansion)
   
} 
}

