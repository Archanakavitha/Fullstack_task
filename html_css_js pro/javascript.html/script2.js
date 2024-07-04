// Conditional flow statement
// 1. control flow
// 2. Looping
// 3. Jump

// var age = 13;
// if(18>age && age<60){
//     if(age>=55){
//         console.log("Thank you for your valuable time")
//     }else {
//         console.log("Thank you!");
//     }
// } else{
//     console.log("Your not eligible.")
// }




// let mark = 50;

// switch(true) {
//     case mark<50:
//     console.log("fail");
//     break;
//     case mark>=50:
//         console.log("pass");
//         break;
//      case 3:
//         console.log("case3");
//         break;

//         default:
//             console.log("invalid");
//             break;
// }


// let star =  "";
// for(var row=0;row<5;row++){
//     for (let col = 0; col < 5; col++){
//         star+="*"
//     }
// console.log(star);
// star ="";
// }


var on = true;
let count = 1;
while(on){
    console.log("executed");
    console.log(count);
    if(count == 3){
        continue;
    }
    count++;
}