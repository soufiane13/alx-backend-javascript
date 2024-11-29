// Prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('readable', () => {
  // Read the input
  const chunk = process.stdin.read();

  // Display the user's name
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Notify when software is closing
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
