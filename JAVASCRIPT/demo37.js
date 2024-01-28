let n=parseInt(prompt("Enter number",0))
let temp=n
let digit=0
let sum=0
while(n!=0){
    digit=parseInt(n%10)
    sum=sum+Math.pow(digit,3)
    n=parseInt(n/10)
}
if(sum==temp){
    document.writeln(`<h3 align='center'><b>${temp} is an armstrong number</b></br></h3>`)
}
else{
    document.writeln(`<h3 align='center'><b>${temp} is not an armstrong number</b></br></h3>`)
}
