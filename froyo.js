//Prompt users for list of froyo flavors separated by a comma
const userString = prompt (
    "Please enter desired froyo orders separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//Split user's array into an array of strings
const stringArray = userString.split(",");

//Creates function to iterate through array of flavors 
const countOrders = (flavors) => {
    let totalOrders = {}; // Creates object to store counts
    
    //Loops through the array and updates object values accordingly
    for (const froyoFlavor of flavors) {
        if (totalOrders[froyoFlavor]) {
            totalOrders[froyoFlavor]++;
        } else {
            totalOrders[froyoFlavor] = 1;
        }
    }
    
    return totalOrders; //Function returns object
}

//Calls the function and stores result in variable
const orderSummary = countOrders(stringArray);

//Prints output to console in table
console.table(orderSummary);
