
//Task 1: Function Declaration

function calculateInvoice(subtotal, taxRate, discount) {
    //1st: Calculate tax amount 
    let taxAmount = subtotal * taxRate;

    //2nd: Calculate total before discount 
    let totalBeforeDiscount = subtotal +taxAmount;

    //3rd: Apply discount
    let finalTotal = totalBeforeDiscount - discount;

    //4th: Format the output to 2 decimal places
    return `Total Invoice: $${finalTotal.toFixed(2)}`;
}

//test data
console.log(calculateInvoice(100, 0.08, 5)); //Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected output: "Total Invoice: $530.00"


//Task 2: Function Expression

// Function expression to calculate hourly wage
const calculateHourlyWage = function(salary, hoursPerWeek) {
    
    //1st: Calculate total annual hourly wage
    let totalAnnualHours = hoursPerWeek * 52;

    //2nd: Calculate hourly wage 
    let hourlyWage = salary / totalAnnualHours;

    //3rd: Format the output to two decimal places
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

//Test data
console.log(calculateHourlyWage(52000, 40)); // Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected output: "Hourly Wage: $41.21"


//Task 3: Arrow Function

// Arrow function for loyalty discount calculation
const calculateLoyaltyDiscount = (amount, years) => {
    // Determine the discount rate based on years
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;

    // Calculate the discounted price
    let discountedPrice = amount - (amount * discountRate);

    // Format to 2 decimal places and return result
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Test data
console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"


//Task 4: Parameters and Arguments

// Function to calculate shipping cost
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost, perPoundRate;

    // Determine shipping cost based on location
    if (location === "USA") {
        baseCost = 5;
        perPoundRate = 0.5;
    } else if (location === "Canada") {
        baseCost = 10;
        perPoundRate = 0.7;
    } else {
        return "Invalid location"; // Error handling for unsupported locations
    }

    // Calculate total shipping cost
    let totalCost = baseCost + (weight * perPoundRate);

    // Add expedited shipping fee if true
    if (expedited) {
        totalCost += 10;
    }

    // Format to 2 decimal places
    return `Shipping Cost: $${totalCost.toFixed(2)}`;
}

// Test data
console.log(calculateShippingCost(10, "USA", true));  // Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping Cost: $13.50"


//Task 5: Returning Values

// Function to calculate loan interest
function calculateLoanInterest(principal, rate, years) {
    // Step 1: Calculate total interest
    let interest = principal * rate * years;

    // Step 2: Format the output to 2 decimal places
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Test data
console.log(calculateLoanInterest(1000, 0.05, 3));  // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5));  // Expected output: "Total Interest: $1750.00"


//Task 6: Higher-Order Functions

//1st: Declare an array of transactions
let transactions = [500, 1200, 3000, 800, 2200];

//2nd: Higher-order function to filter transactions
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

//3rd: Call the function with a filtering condition
let highValueTransactions = filterHighValueTransactions(transactions, amount => amount > 1000);

//4th: Output the result
console.log(highValueTransactions); // Expected output: [1200, 3000, 2200]


//Task 7: Closures

//1st: Create a function that returns another function
function createBudgetTracker() {
    let balance = 0; // Initial balance (starting at zero)

    //2nd: Return a function to track expenses
    return function(expense) {
        balance -= expense; // Subtract the expense from balance
        console.log(`Current Balance: -$${balance}`); // Print the updated balance
    };
}

//3rd: Create a budget tracker instance
let budget = createBudgetTracker();

//4th: Test data
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"


//Task 8: Recursion in JavaScript

//1st: Define the recursive function
function calculateGrowth(years, revenue) {
    //2nd: Base Case - Stop when years reach 10
    if (years >= 10) {
        return `Projected Revenue: $${revenue.toFixed(2)}`;
    }

    //3rd: Recursive Case - Increase revenue by 5% and call function again
    return calculateGrowth(years + 1, revenue * 1.05);
}

//4th: Test data
console.log(calculateGrowth(8, 1000));  // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000));  // Expected output: "Projected Revenue: $6381.41"