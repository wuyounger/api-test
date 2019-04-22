module.exports = totalCost
// Compute the total cost of banana purchases for numberOfDays
// beginning on startDate.
function totalCost(startDate, numberOfDays) {
    let date = new Date(startDate)
    let total = 0;
    for (let i = 0; i < numberOfDays; i++) {
        total += dailyCost(date);
        date.setDate(date.getDate() + 1);
    }
    return formatCost(total);
}

function dailyCost(date) {
    // Saturday and Sunday have a budget of 0 cents.
    if (date.getDay() === 0 || date.getDay() === 6) {
        return 0;
    }
    // Bananas cost $0.05 * number of weeks that have passed in the month.
    return 5 * (1 + Math.floor((date.getDate() - 1) / 7));
}

function formatCost(cents) {
    const dollars = cents / 100;
    return dollars.toLocaleString("en-US", {style:"currency", currency:"USD"});
}
