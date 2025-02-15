
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