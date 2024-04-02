/* this loop is used to iterate on arrayas and also used for strings
(for of)  its give the (values of array)*/
// it can be used as a destructure
arr =[1,2,3,4,5,6];
for(const i of arr){
        console.log(i);
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
      console.log(`key is ${key} and value of key is ${student[key]}`)
}

/* forEach loop is most important and it used to iterate on (loops)
syntax == arrayName.forEach(callbackfunction){ instruction}
it returnsvalue ,index,arr)*/
const arr1 =["hi","hello","who","im"];

arr1.forEach((item)=>{
    console.log(item);
});
arr1.forEach((key,index,arr)=>{
 console.log(`value is-${key} and index is-${index} and ${arr}`);
})