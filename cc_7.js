
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