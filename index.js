//Prompt for the user to enter froyo flavors
const userInput = prompt("Enter a list of comma-seperated froyo flavours.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// Parse the user input into an array 
const froyoFlavours = userInput.split(",");
console.log(froyoFlavours);


//Created an object to track the flavours
const orders = {
    vanilla: 0,
    strawberry:0,
    coffee: 0
}

const countOrders = Object.values(orders);


  //The logic for counting the frequencies of elements in an array is organized into a function that returns an object.

  function froyo(froyoFlavours){
  
    for (let i = 0; i < froyoFlavours.length; i++) {
   
      if (froyoFlavours[i] === "vanilla") { 
         orders.vanilla += 1;
        }
        else if  (froyoFlavours[i] === "strawberry"){
         orders.strawberry += 1;
        }
        else if  (froyoFlavours[i] === "coffee"){
          orders.coffee += 1;
        }
    }
    return orders;
  }
  console.log(froyo(froyoFlavours));
  console.table(orders);

 
