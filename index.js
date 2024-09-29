//Prompt for the user to enter froyo flavors
const userInput = prompt("Enter a list of comma-seperated froyo flavours.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// Parse the user input into an array 
const array = userInput.split(",");
console.log(array);



//Created an object to track the flavours
const orders = {
    vanilla: 0,
    strawberry:0,
    coffee: 0
}

const countOrders = Object.values(orders);

for (let i = 0; i < array.length; i++) {
   
    if (array[i] === "vanilla") { 
       orders.vanilla += 1;
      }
      else if  (array[i] === "strawberry"){
       orders.strawberry += 1;
      }
      else if  (array[i] === "coffee"){
        orders.coffee += 1;
      }
  }
  console.log(orders);
  console.table(orders);

