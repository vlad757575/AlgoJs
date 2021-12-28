// let numberOFCats = 2;
// let numberOfDogs = 6;
// numberOfDogs = 8;
//  console.log(numberOfDogs+numberOFCats);

// const { ok } = require("assert");
// const { age } = require("./age");

 
//  let totalCDs = 67;
//  let totalVinyls = 34;
//  let totalMusic = totalCDs + totalVinyls;
//  console.log(totalMusic);


// let cookiesInJar = 10;
// let cookiesRemoved = 2;
// cookiesRemoved= 5;
// let cookiesLeftInJar = cookiesInJar - cookiesRemoved;
// console.log(cookiesLeftInJar);

// {
// let cookiesInJar = 10;
// cookiesInJar -= 2;  
// cookiesInJar += 12; 
// cookiesInJar += 25;
// console.log(cookiesInJar);
// }

// let numberOfLikes = 10;
// numberOfLikes++;  // cela fait 11
// numberOfLikes--; // et on revient à 10...qui n'a pas aimé mon article ?
// numberOfLikes++;
// console.log(numberOfLikes);


// // let costPerProduct = 20;
// // let numberOfProducts = 5;
// // let totalCost = costPerProduct * numberOfProducts;
// // let averageCostPerProduct = totalCost / numberOfProducts;
// // console.log(totalCost,averageCostPerProduct);

// let numberOfSeasons = 6;
// let numberOfEpisodes = 12;
// let episodeTime = 45;
// let commercialTime = 5;
// let totalEpisodes = numberOfSeasons*numberOfEpisodes;
// // console.log(totalEpisodes);
// // let commercialTotalTime = commercialTime*totalEpisodes;
// // console.log(commercialTotalTime);
// // let totalEpisodesTime = episodeTime*totalEpisodes;
// // console.log(totalEpisodesTime);
// // let lastTotal = totalEpisodesTime + commercialTotalTime;
// // console.log(lastTotal);
// // let totalShowTime = (episodeTime+commercialTime)*numberOfSeasons*numberOfEpisodes;
// // console.log(totalShowTime);

// let compteur = 0;
// for (compteur; compteur < 10;compteur ++) {
//     console.log(compteur);
// }


// compteur ++
// console.log(compteur);

// let weirdCalculation = (0.34 + 0.87)*1011.13;
// console.log(weirdCalculation);

// let firstname = "Vladimir";
// let lastName = "Lavrentiev";
// let wholeName = firstname + " " + lastName;
// console.log(wholeName);

// const myName = `Vladimir`;
// const salutation = `bienvenue sur mon site web ${myName}!`
// console.log(salutation);

// let myBook ={
//     title: "Le jour ou j'ai appris à vivre",
//     author: "Laurent Gounelle",
//     numberOfPages: 300,
//     isAvailable: true
// };
// let bookTitle = myBook.title;
// let bookPages = myBook.numberOfPages;

// console.log(bookTitle,bookPages);

// let episode ={
//     title:'Intro',
//     duration: 45,
//     hasBeenWatched: true
// };


// let artistProfile = {
//     name: "Tao Perkington",
//     age: 27,
//     available: true
//     };
//     let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus
//     artistProfile.available = false; // modification de l'objet
//     console.log(allProfiles)

// const currentDate = new Date();
// let d = currentDate.toDateString();
// console.log(d);



// function assurance(a){
//     let result;
//     if (a>2011){
//         result ="assurance";
//     }else{
//         result ="pas d'assurance loser"
//     }
//     return result
// }console.log(assurance(2012))


//training array //
// let guests = ["vladimir lavrentiev","john mccain","donald trump","barack obama","emmanuel macron","nicolas sarkozy", "marine le pen"];
// let firstGuest = guests[0];
// let fifthGuest = guests[4];
// guests.unshift("jacques chirac");
// guests.push("francois mitterand");
// let howManyGuests = guests.length; //ajout  d'un nom (a la fin de la liste)
// console.log(howManyGuests);

// let episodesT =["Dark beginnings","The mistery continues","An unexpeccted climax"];
// 16
// let secondEpisode =episodesT[0];
// console.log(secondEpisode);

// let guests = ["vladimir lavrentiev","john mccain","donald trump","barack obama","emmanuel macron","nicolas sarkozy", "marine le pen"];
// let firstGuest = guests [4];
// guests.push ("joseph staline","fidel castro","raoul castro","angela merkel","boris johnson");
// let howManyGuests = guests.length;
// console.log(howManyGuests);

// let UserLoggedIn = false;
// if (UserLoggedIn) {
//    console.log("Utilisateur connecté!");
// } else {
//    console.log("Alerte, intrus!");
// }
// const numberOfSeats = 30;
// const numberOfGuests = 25;
// if (numberOfGuests < numberOfSeats) {
// // autoriser plus d'invités
// } else {
// // ne pas autoriser de nouveaux invités
// }
// function age
// const ageMajorite = 18 ;
// if (age<ageMajorite){
//     denied();
// }else{
//     ok();
// }
// console.log(ageMajorite);

// let userConnected = true;
// if(userConnected) {
//     console.log("user is connected");
// } else{
//     console.log("not yet");
// }

// let minimumAge = 18;
// let theUserIsAnAdult = 22;
// if(theUserIsAnAdult>minimumAge){
//     console.log("access agreed");
// } else{
//     console.log("access denied");
// }

// function goodAge
// let age = 18
// let ageMajorite = 18;
// let isControlParentalActive = true;
// if (age > ageMajorite && isControlParentalActive){
//     valider();
//   } else {
//     refuser();
//   }

//   let userISConnected = false;
//   let welcomeMessage ='';
//   if (userISConnected) {
//      welcomeMessage = 'Welcome dear';
//   } else {
//      welcomeMessage = 'What do you do here ?';
//   }
//   console.log(welcomeMessage);

// let firstUser = {
//     name: "Vladimir Lavrentiev",
//     age: 29,
//     accountLevel: "normal"
//     };
    
//     let secondUser = {
//     name: "Mohammed Dubois",
//     age: 21,
//     accountLevel: "premium"
//     };
    
//     let thirdUser = {
//     name: "Simon Cohen",
//     age: 27,
//     accountLevel: "mega-premium"
//     };
//     switch (firstUser.accountLevel){
//         case 'normal':
//             console.log("You have a normal account");
//             break;
//         case 'premium':
//             console.log("You have a premium account, bravo!");
//             break;
//         case "mega premium":
//             console.log("You have a mega premium account, you are the best");
//         break;
//         default:
//         console.log("You are an unknown person, get out");    
    // }

//     const numberOfPassengers = 153;
//     for ( let i = 0; i < numberOfPassengers; i++) {
//         console.log("Passenger on board");
//     }
// console.log("All passengers are on board, the plane could take off!");

// const passengers = [
//     {
//     name: "Will Alexander",
//     ticketNumber: 209542
//     },
    
//     {
//     name: "Sarah Kate",
//     ticketNumber: 169336
//     },
    
//     {
//     name: "Audrey Simon",
//     ticketNumber: 779042
//     },
    
//     {
//     name: "Tao Perkington",
//     ticketNumber: 703911
//     }
//     ]
    
//     for (let passenger of passengers) {
//        console.log("Embarquement du passager " + passenger.name +"Avec le ticket numero"+ passenger.ticketNumber);
//     }
//     console.log("All passengers are on board, the plane can take off!!");

  
// let seatsLeft = 10;
// let passengersStillToBoard = 8;
// let passengersBoarded = 0;

// while (seatsLeft > 0 && passengersStillToBoard > 0) {
// passengersBoarded++; // un passager embarque
// passengersStillToBoard--; // donc il y a un passager de moins à embarquer
// seatsLeft--; // et un siège de moins
// }

// console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges

// let age = 18
// let ageMajorite = 18;
// let isControlParentalActive = true;

// if (age >= ageMajorite && isControlParentalActive){
//     console.log("you can enter");
//   } else {
//     console.log("keep stay out");
//   }
// let firstName = "Vladimir ";
// let lastName = ' lavrentiev';
// let wholeName = firstName +  ""  + lastName + "" ; 
// console.log(wholeName);

// const myName = `Vladimir Lavrentiev`;
// const salutation = `Bienvenue sur mon site ${myName}!`;
// console.log(salutation);   //retournera “Bienvenue sur mon site Alexander!” 



// let theNewEpisode = {
//     title: "The best episode",
//     duration: 45,
//     hasBeenWatched: false
// };
// console.log(theNewEpisode);


// const numberOfPassengers = 153;
//     for ( let i = 0; i < numberOfPassengers; i++) {
//         console.log("Passenger on board");
//     }
// console.log("All passengers are on board, the plane could take off!");

// let result;
//     if (a < 18) {
//       result = 'pas autorise';
//     } else {
//       result = ' autorise';
//     }
//     return result;
//   }
//   console.log(age(16));
  

//   let str1 = "/tache1";
//   let str2 = str1.substring(1);
//   console.log(str2);

// let userloggedIn = true;
// if(userloggedIn) {
//     console.log("Bienvenue !");
// } else{
//     console.log("not yet");
// }

// const majorityAge = 18;
// var ageOfVisitor = 21;
//  if(ageOfVisitor=>majorityAge){
//  console.log("Welcome");
//  } else{
//      console.log("Access denied !!");
//  }
//  const currentDate = new Date();
// let d = currentDate.toDateString();
// console.log(d);

// const currentDate = new Date();
// let e = currentDate.toDateString();
// console.log(" Aujourd'hui on est le " + e);

// const numberOfSeats = 1850;
// let numberOfGuests = 1850;

// if(numberOfGuests<numberOfSeats){
//     console.log("Autoriser plus de reservations");
// }
// else if ( numberOfGuests==numberOfSeats) {
//     console.log("La salle est pleine !");
// }

//      else {
//     console.log("La salle est pleine, plus de reservations possible !");
// } ;


// let numberOfFreeSeats = numberOfSeats-numberOfGuests;
// console.log("Nombre de places restantes " + numberOfFreeSeats);


// var prompt = require('prompt');

//   //
//   // Start the prompt
//   //
//   prompt.start();

//   //
//   // Get two properties from the user: username and email
//   //
//   prompt.get(['username', 'email'], function (err, result) {
//     //
//     // Log the results.
//     //
//     console.log('Command-line input received:');
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);
//   });

// user name & password training //

// const userName = "vlado9375";
// const password = 123456789;
// const minimumAge = 18;
// const welcomeMessage = "Bienvenue :-)";

// let clientAge = 19;
// let clientUsersnameWrote = "vlado9375";
// let clientPasswordWrote = 123456789;

// if (userName==clientUsersnameWrote && password==clientPasswordWrote && minimumAge<=clientAge ){
//     console.log(welcomeMessage)
// } else {
//     console.log("Go out !!!!")
// };


// const passengers = [
//      {
//         name: "Julius Caesar",
//     ticketNumber: 349826
// },
//     {name:"Charles De Gaulle",
//     ticketNumber: 234623958659
// },
//     {name:"Emmanuel Macron",
// ticketNumber: 57395733457557
// },
//     {name:"Angela Merkel",
// ticketNumber: 2372847295357
// },
//     {name:"Vladimir Lavrentiev",
// ticketNumber: 2463574839
// },
//     {name:"Mohammed Ali",
// ticketNumber: 678594030987}
//     ]
    
//     for (let passenger of passengers) {
//        console.log("Embarquement du passager " + passenger.name + " Numero de billet " + passenger.ticketNumber );
//     }

//     let numberOfSeats = 436;
//     let passengersStillToBoard = 182;
//     let passengersBoarded = 0;

//     while (numberOfSeats > 0 && passengersStillToBoard > 0) {
//         passengersBoarded++;
//         numberOfSeats--;
//     }
// console.log(passengersBoarded);

// let seatsLeft = 10;
// let passengersStillToBoard = 8;
// let passengersBoarded = 0;

// while (seatsLeft > 0 && passengersStillToBoard > 0) {
// passengersBoarded++; // un passager embarque
// passengersStillToBoard--; // donc il y a un passager de moins à embarquer
// seatsLeft--; // et un siège de moins
// }

// console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges


// let numberOfEpisodes = 12;
// let duration = 53;

// function maPremiereFonction(numberOfEpisodes,duration){
// return duration*numberOfEpisodes;
// }
// maPremiereFonction(12,53);

const calculateAverageRating = (ratings) => {

    if(ratings.length === 0) {
      return 0;
    }
    
    let sum = 0;
    for (let rating of ratings) {
      sum += rating;
    }
    
    return sum / ratings.length;
  
  }

