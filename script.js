let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";  // Initialize the string variable

// Convert the NodeList to an array
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.textContent.trim(); // Use textContent instead of innerHTML

        if (value === '=') {
            try {
                // Evaluate the expression and handle errors
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = ""; // Clear the string on error
            }
        } else if (value === 'AC') {
            // Clear the input field and reset string
            string = "";
            input.value = string;
        } else if (value === 'DEL') {
            // Remove the last character
            string = string.slice(0, -1);
            input.value = string;
        } else {
            // Append the button value to the string
            string += value;
            input.value = string;
        }
    });
});
