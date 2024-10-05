

// Function to calculate total price
function calculateTotalPrice() {
    // Get all price elements
    const prices = document.querySelectorAll('.price');

    // Initialize total price
    let totalPrice = 0;

    // Iterate over prices and add to total
    prices.forEach((price) => {
        const priceValue = parseFloat(price.textContent.replace('$', ''));
        totalPrice += priceValue;
    });

    // Create new row for total price
    const totalRow = document.createElement('tr');
    totalRow.className = 'total-row';
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2; // Span two columns
    totalCell.textContent = `Total: $${totalPrice.toFixed(2)}`;
    totalRow.appendChild(totalCell);

    // Add total row to table
    const table = document.querySelector('table');
    table.appendChild(totalRow);
}

// Call function to calculate and display total price
calculateTotalPrice();

