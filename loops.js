/* this loop is used to iterate on arrayas and also used for strings
(for of)  its give the (values of array)*/
// it can be used as a destructure
arr =[1,2,3,4,5,6];
for(const i of arr){
       // console.log(i);
}
// for of cant be used on objects

//new loops is used for iterating on objects 
// (for in) its return (keys of object) to get key vlue use objectname[key]
const student = {
    name : "shivam",
    age:20,
    class:"cybersecurity"
}
for(const key in student){
      //console.log(`key is ${key} and value of key is ${student[key]}`)
}

/* forEach loop is most important and it used to iterate on (loops)
syntax == arrayName.forEach(callbackfunction){ instruction}
it returnsvalue ,index,arr)*/
const arr1 =["hi","hello","who","im"];

arr1.forEach((item)=>{
    //console.log(item);
});
arr1.forEach((key,index,arr)=>{
 // console.log(`value is-${key} and index is-${index} and ${arr}`);
})

/* for each loop is mostly used on iterationg data base with same key name */
const data =[
    {
        name:"shivam",
        marks:45
    },
    {
        name:"2ndperson",
        marks:45478
    },
    {
        name:"3rdperson",
        marks:454545
    },
    {
        name:"4thperson",
        marks:4500
    }
]

data.forEach((item)=>{
  // console.log(`name of student ${item.name} and marks is ${item.marks}`);
});



/* filter method arrr.filter it return the value of array which is true in defined conditions;*/

const arr3 = [1,2,3,4,5,6,7,8,9,11,54,45];
let newVal = arr3.filter((item)=>  { return item >= 5} );
    //  console.log(newVal);

 const person =[
    {
        expense:450,
        saving:150
    },
    {
        expense:550,
        saving:1010
    },
    {
        expense:900,
        saving:1004
    },
    {
        expense:4500,
        saving:10056
    }
 ]   

 const savIng = person.filter((item)=>{return item.expense < 1000 && item.saving >=500});
 console.log(savIng);

 /* filter and map are loops are same but filter use to extract some values from a given data but map loop is used to change the 
 whole by performing define function and returns new array both loops return new array and both can be used on objects
 
 both return same type of data which is used for operations */

 const person2 =[
    {
        expense:450,
        saving:150
    },
    {
        expense:550,
        saving:1010
    },
    {
        expense:900,
        saving:1004
    },
    {
        expense:4500,
        saving:10056
    }
 ] 

 const person3 = person.map(( items)=> { return items.saving *10})
 console.log(person3);