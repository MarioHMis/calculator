const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

// Function to handle click event for buttons
function handleClick(button) {
  const pushbutton = button.textContent;

  if (button.id === 'clear') {
    clearScreen();
    return;
  }

  if (button.id === 'delete') {
    deleteFromScreen();
    return;
  }

  if (button.id === 'equal') {
    evaluateExpression();
    return;
  }

  appendToScreen(pushbutton);
}

// Function to clear the screen
function clearScreen() {
  screen.textContent = '0';
}

// Function to delete the last character from the screen
function deleteFromScreen() {
  if (screen.textContent.length === 1 || screen.textContent === 'Error') {
    clearScreen();
  } else {
    screen.textContent = screen.textContent.slice(0, -1);
  }
}

// Function to evaluate the mathematical expression on the screen
function evaluateExpression() {
  try {
    screen.textContent = eval(screen.textContent);
  } catch {
    screen.textContent = 'Error';
  }
}

// Function to append characters to the screen
function appendToScreen(pushbutton) {
  if (screen.textContent === '0' || screen.textContent === 'Error') {
    screen.textContent = pushbutton;
  } else {
    screen.textContent += pushbutton;
  }
}

// Add click event to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    handleClick(button);
  });
});
