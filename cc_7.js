
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
