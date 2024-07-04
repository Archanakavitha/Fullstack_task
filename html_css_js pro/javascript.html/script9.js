// function add(num1,num2){
//     let result = num1+num2;
//     console.log(result);
// }

// function mul(num1,num2){
//     let result = num1*num2;
//     console.log(result);
// }

// function mod(num1,num2){
//     let result = num1%num2;
//     console.log(result);
      
// }

// function div(num1,num2){
//     let result = num1/num2;
//     console.log(result);
      
// }


// function calculation(num1, num2, callback){
//     callback(num1,num2);
// }

// calculation(12,32,add)


// function add(num){
//     console.log(num);
//      if(num<10){
//         add(++num);
//      }
// }
// add(1);

// function start(){
//     console.log("start");
// }
// setInterval(start,5000)

// function running(){
//     console.log("running");
// }

// running();


// let d = new Date();
let  num=1;
function start(){
    // let d = new Date();//
    document.getElementById("time").innerHTML=++num;
}
setInterval(start,1000)