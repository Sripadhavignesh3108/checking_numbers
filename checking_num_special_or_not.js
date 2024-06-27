const prompt = require("prompt-sync")();
let num=prompt("enter a number:")
let number=prompt("enter a specific number :")
let count=0;
for(i=0;i<num.length;i++)
{
    if(number==num[i])
    {
        count++;
    }
}
if(count>=3)
{
    console.log(`${number} is a special number`)
}
else
    console.log(`${number} is not a special number`)