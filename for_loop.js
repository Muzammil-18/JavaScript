// let i = 1

// while (i <= 10)
// {
//     console.log(i)
//     i++ // i = i+1
// }
// let a = 1
// let num = 8
// while (a <=10)
// {
//     console.log(num,"X",a,"=",num*a)
//     a++
// }
// let num2 = 8
// for (let j=1;j<=10;j++)
// {
//     console.log(num2,"X",j,"=",num2*j)
// }

// for (let k=10;k>0;k--)
// {
//     console.log(k)
// }

let objects = {
    haseeb:56,
    aziz:44,
    muzammil:54,
    hamza:20
}

for (let object in objects)
{
    if (object == "aziz")
    {
        console.log(object,objects[object])
    }
}