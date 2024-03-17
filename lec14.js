// const a = 23;
// const b = 34;
// const c = " ali Shabbir"

// const arr = [1,23,3,34,56,"Ali Shbabbir", true]


// console.log(arr[3])


// const a = 45;
// const b = 34;
// let sum = a+b

// const c = 78;
// const d = 34;
// let sum2 = c+d

// console.log(a)
// var a = 34
// sum(23,45)
// function sum(a,b){
// return console.log(a+b)
// }

// // console.log(a)

// sum(2,45)

// let product = (a,b) =>{
//     return console.log(a*b)
// }
// product(12,23)

// let arr = [101,32,1043, 43,34,54,56,37,78,90,123,456]

// console.log(arr.length)
// arr.push("Cr")
// console.log(arr)
// console.log(arr.pop())
// console.log(arr.sort((a,b)=>b-a))

// console.log(arr[1])

// for(let i = 0; i<arr.length;i++){
// console.log(arr[i])
// }

// let a = arr.forEach((v,i,arry) => {
//     // console.log(v,i,arry)
//     return v+1
// });
// console.log(a)
// let b = arr.map((v,i,arry) => {
//     // console.log(v,i,arry)
//     return v+1
// });
// console.log(b)


// let obj = {
//     name:{
//         fname:"ALi",
//         lname:"Shabbir"
//     },
//     rollNo:123,
//     classed:"Web Applications",
//     arr :[
//         1,23,4,56,67,78,8,{name:"Ahmad"}
//     ]
// }

// console.log(obj.name.lname)



let arr = [
    {
        name: "Ali Shabbir",
        roll: 1,
        phy: 89,
        maths: 90,
        comp: 80,
        eng: 80
    },
    {
        name: "Ali Shabbir",
        roll: 1,
        phy: 89,
        maths: 90,
        comp: 80,
        eng: 80
    },{
        name: "Ali Shabbir",
        roll: 1,
        phy: 89,
        maths: 90,
        comp: 80,
        eng: 80
    },{
        name: "Ali Shabbir",
        roll: 1,
        phy: 89,
        maths: 90,
        comp: 80,
        eng: 80
    },{
        name: "Ali Shabbir",
        roll: 1,
        phy: 89,
        maths: 90,
        comp: 80,
        eng: 80
    },{
        name: "Ali Shabbir",
        roll: 1,
        phy: 89,
        maths: 90,
        comp: 80,
        eng: 80
    },{
        name: "Ali Shabbir",
        roll: 1,
        phy: 89,
        maths: 90,
        comp: 80,
        eng: 80
    },{
        name: "Ali Shabbir",
        roll: 1,
        phy: 89,
        maths: 90,
        comp: 80,
        eng: 80
    },
]

document.write(`    <center>
<h1>School Sheet</h1>
<table border="">
    <thead>
<tr>
<th>Sr</th>
<th>Name</th>
<th>Roll No</th>
<th>Physics</th>
<th>Maths</th>
<th>Computer</th>
<th>English</th>
<th>Obtained Marks</th>
<th>Avrage Marks</th>
<th>Percentage</th>

</tr>
    </thead>
    <tbody>
${arr.map((v,i)=>{
  
return `<tr>
<td>${i+1}</td>
<td>${v.name}</td>
<td>${i+1}</td>
<td>${v.phy}</td>
<td>${v.maths}</td>
<td>${v.comp}</td>
<td>${v.eng}</td>
<td>${v.phy+v.comp+v.maths+v.eng}</td>
<td>${(v.phy+v.comp+v.maths+v.eng)/4}</td>
<td>${((v.phy+v.comp+v.maths+v.eng)/400)*100}</td>



</tr>`
})}
    </tbody>
</table>
</center>`)