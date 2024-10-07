import colors from 'colors';

/**
 * @param {string} msg
 * @param {string} color
 */
async function colorizeOutput(msg, color = 'blue') {
    try {

        const colorize = colors[color] ? colors[color].bold : colors.blue.bold;
        console.log(colorize(msg));
        return msg;
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

// Example usage with different colors
// colorizeOutput('hi', 'red');
// colorizeOutput('hello', 'green');
// colorizeOutput('welcome', 'yellow');
// colorizeOutput('goodbye', 'cyan');
// colorizeOutput('error', 'red');
// colorizeOutput('info', 'blue');
// colorizeOutput('success', 'green');

export { colorizeOutput }