# Progress Bar Project - README

This project is a simple progress bar implementation using HTML, CSS, and JavaScript. The progress bar displays multiple circles, and the user can navigate through the circles using the "Prev" and "Next" buttons. The active circle and progress bar update accordingly as the user clicks the buttons.

## How to Use

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. You will see a progress bar with four circles and "Prev" and "Next" buttons below it.
4. By default, the first circle is active, and the progress bar is empty.
5. Click the "Next" button to move to the next circle. The active circle will update, and the progress bar will fill up gradually as you move forward.
6. Click the "Prev" button to move to the previous circle. The active circle will update, and the progress bar will adjust accordingly.

## File Description

1. `index.html`: The main HTML file that contains the structure of the progress bar and the buttons.
2. `style.css`: The CSS file that styles the progress bar and buttons.
3. `app.js`: The JavaScript file that handles the logic of the progress bar.

## JavaScript Functions

### `update()`

This function updates the progress bar and active circles based on the current step.

#### Parameters:

None

#### Description:

- The function iterates through all the circles and adds the `active` class to circles that come before or are equal to the current active circle. This highlights the active steps.
- The width of the progress bar is updated based on the progress made, i.e., the percentage of completed steps.
- The "Prev" and "Next" buttons are enabled or disabled based on the current step. If the user is on the first step, the "Prev" button is disabled, and if the user is on the last step, the "Next" button is disabled.

### Event Listeners

- `next`: This event listener listens for a click on the "Next" button. When clicked, it increments the `currentCircle` variable and calls the `update()` function to update the progress bar and active circles.
- `prev`: This event listener listens for a click on the "Prev" button. When clicked, it decrements the `currentCircle` variable and calls the `update()` function to update the progress bar and active circles.

Please note that the JavaScript code is provided within the HTML file itself in this project. In a real-world application, it's generally better to have the JavaScript code in a separate `.js` file and include it using the `<script>` tag in the HTML file. However, for simplicity in this example, the code is kept within the same file.

Sure! Here's an expanded description of the `update()` function and how it utilizes the `classList.add()` and `classList.remove()` methods:

### `update()`

This function is responsible for updating the progress bar and active circles based on the current step. It leverages the `classList.add()` and `classList.remove()` methods to add and remove the `active` class from the circles.

#### Parameters:

None

#### Description:

1. **Circle Activation:**
   The function iterates through all the circles using a `forEach` loop. For each circle, it checks its index in the loop against the `currentCircle` variable.
   - If the index is less than `currentCircle`, it means the circle should be marked as "active," so the `active` class is added to the circle using `classList.add('active')`.
   - If the index is greater than or equal to `currentCircle`, it means the circle should not be marked as "active" anymore, so the `active` class is removed from the circle using `classList.remove('active')`.

2. **Progress Bar Update:**
   The width of the progress bar is updated based on the progress made. To calculate the width, the function counts the number of circles that have the `active` class (excluding the current circle). It divides this count by the total number of circles (excluding the last one, as it's the final step) and multiplies it by `85`. This gives a percentage value for the width, and it's applied to the `progressBar` element's style using `progressBar.style.width`.

3. **Button State Management:**
   The function also manages the state of the "Prev" and "Next" buttons. If the current step is the first step, the "Prev" button is disabled by setting its `disabled` attribute to `true`. Similarly, if the current step is the last step, the "Next" button is disabled by setting its `disabled` attribute to `true`. If the current step is in the middle of the progress, both buttons are enabled by setting their `disabled` attributes to `false`.

The `classList.add()` method is used to add the `active` class to the circles, and the `classList.remove()` method is used to remove the `active` class from the circles. These methods are part of the `classList` property of DOM elements, which allows manipulation of the CSS classes associated with the element.

In this project, the `active` class is used to visually highlight the active circles and differentiate them from the inactive ones. The dynamic application and removal of the `active` class to the circles give the appearance of progress through the steps. The progress bar's width is also adjusted dynamically to indicate the completion level of the steps.
