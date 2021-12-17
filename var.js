const { callbackify } = require("util");

// var x =  5 ;
// var y =  6 ;
// var z = x + y ;
//     console.log (z)

// var price1 = 100;
// var price2 = 6;
// var total = price1 + price2;
// console.log (total)

// var pi = 3.14; //decimal
// var person ="Michel";
// var answer ="quarente-deux";

// console.log("En voyant"+pi+"," +person +" a eu la bonne idee de calculer"+ answer);

// var person="jack", carName="lamborghini", price="200000 euros"

// console.log( person + " a acheté une " + carName + " a " + price +".");

// var x = 5 + 3 + 2
// console.log (x)

// var x = 2 + 3 + "5"
// console.log (x)

// var x = 10 ;
// console.log(x)





// var x = 22 ;
// var y = 72 ;
// var a = 2 ;
// var z = ( x + y )/ a ;
// console.log(z)

// var carName = " Lamborghini ";
// var verb = " roule";
// var how = " super vite";
// console.log("une " + carName  + "" + verb + ""  + how);

// const cars = ["saab", "volvo", "bmw"];
// cars [2] = "Lamborghini";
// cars.push("audi");
// console.log (cars);



// var supercars = ["Saab", "volvo", "Ferarri"];
// supercars [2] = "Bugatti";
// console.log(supercars);
// {
// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Toyota";
// cars.push("Audi");
// console.log (cars);
// }
// {
// let a = 5;
// let b = 25;
// let c = a * b;
// console.log(c);
// }
// {
// let x = 15;
// x += 5 ;
// console.log(x);
// }
// var x = "5" + 5;
// console.log(x);

// console.log(25+12);


// var carc = "objet";

// function mafonction(data) {

//     console.log(data);
// }
// mafonction(carc);


// var carsk ="Renault";
// var supercarsk ="bugatti";
// var bycicle ="decathlon";
// var trotinette ="GoSport";
// function newfonction(data){

//     console.log(data);
// }
// newfonction(bycicle);

// {
//     let x = 100*2000;
//     console.log(x);

// }

// {
//     let carname1 = "honda prius";
//     let carname2 = "Citroen C3";
//     console.log(carname1,carname2);  
// }
// {
//     const a = 10;
//     const b = a * 2;
//     const c = b + 5 ;
//     const x = c - 15;
//     const y = x / 3;

// var total = [a,b,c,x,y]

// var i = 0
// for(i;i<total.length;i++){ 
//     console.log(total[i])
// }
// function myFunction(data) {

//     console.log(data)
// }

// myFunction(total[2]);
  
// function testNum(a) {
//     let result;
//     if (a > 18) {
//       result = 'positive';
//     } else {
//       result = 'NOT positive';
//     }
//     return result;
//   }
  
//   console.log(testNum(17));

//   function myAge(a) {
//       let result;
//       if (a> 25) {
//           result = 'positive';
//       }else{
//           result='not positive';
//       }
//       return result;
//   }
//   console.log(myAge(21))

  function born(b){
      let result;
      if (b> 2003){
          result = 'not autorized';
      } else {
          result ='autorized';
      }
            return result;
  }
  console.log(born(2004));