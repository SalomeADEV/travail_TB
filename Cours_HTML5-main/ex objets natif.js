
var number = [];
 var total = 0
for (var i = 0; i<100;i++)
{
    number[i] = window.prompt ("")
    if(number [i]==0)
    {
       number.pop()
        break
    }
    total=total + parseInt(number[i]);
}
console.log(number.length);
console.log(total);
console.log(total/number.length);
console.log(number)