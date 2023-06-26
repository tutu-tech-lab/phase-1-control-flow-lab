function scuberGreetingForFeet(feet){
  // Write your code here!
  
  if(feet <= 400){
    return "This one is on me!";
  } else if(feet <= 2000) {
    return "I will gladly take your thirty bucks.";
  } else if (feet >= 2500) {
    return  "No can do.";
  }

}

console.log(scuberGreetingForFeet(3000));
  
function ternaryCheckCity(city){
  // Write your code here!
 return city === "NYC"? "Ok, sounds good." : "No go."
}
console.log(ternaryCheckCity("Pittsburg"));

function switchOnCharmFromTip(greetings){
  // Write your code here!
  switch (greetings){
    case "generous":
      return "Thank you so much.";
      case "not as generous":
      return "Thank you.";
      default:
      return "Bye.";


     

  }
}