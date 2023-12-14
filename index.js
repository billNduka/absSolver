const disp = document.getElementById("display-el")
const btn = document.getElementById("submit-btn")
const appear = setInterval(() => {disp.innerHTML = "<b>_</b>"},1000)
const disappear = setInterval(() => {disp.innerText = " "},2000)

function solve(){
    let a = prompt("What is your a?")
    let b = prompt("What is your b?")
    let n = prompt("What is your n?")
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
    if(a[a.length-2] == "+ "){
        a.slice(0,-2)
    }
}
function expand(a,bx,n){
    clearInterval(appear)
    clearInterval(disappear)
    let expansion = ""
    if (typeof(a) === "number" && typeof(bx) === "number"){
        for(i=0;i<=n;i++){
        expansion += combine(n,i)*(a**(n-i))*(bx**i) + `x<sup>${i}</sup>+ `
        }
    expansion = expansion.slice(0,-2)
    expansion = expansion.replace("x<sup>0</sup>", " ")
    expansion = expansion.replace("<sup>1</sup>", " ")
    disp.innerHTML = expansion
    } else {
        disp.innerHTML = "lol"
    }
}
