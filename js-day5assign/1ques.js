let n=prompt("Enter a positive number");
let arr=[];
for(let i=0;i<n;i++)
{
    let q=prompt("enter a number");
    arr.push(q);
}
console.log(arr);
let odd=arr.filter(el=>el%2!=0);
console.log(odd);
odd.forEach(el=>console.log(el**3));
