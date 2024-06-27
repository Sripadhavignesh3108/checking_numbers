const prompt = require("prompt-sync")();
let big=prompt("enter a number :");
evensum=0;
oddsum=0;
for(i=0;i<big.length;i++)
{
    if(big[i]%2==0)
   {
    evensum+=Number(big[i])
   } 
   else if(big[i]%2==1)
   {
    oddsum+=Number(big[i])
   }
}
if(evensum>oddsum)
console.log("EVEN sum is bigger")
else
console.log("ODD sum is bigger")