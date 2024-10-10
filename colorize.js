/**
 * Colorizer class to colorize output messages.
 * 
 * Available colors:
 * - black
 * - red
 * - green
 * - yellow
 * - blue
 * - magenta
 * - cyan
 * - white
 * - gray
 * - grey
 * 
 * @class Colorizer
 * @property {string} color - The default color for the output message.
 * @property {boolean} bold - Whether the output message should be bold.
 * 
 * @method colorizeOutput
 * @param {string} msg - The message to colorize.
 * @returns {string} The colorized message.
 */
import colors from 'colors';



class Colorizer {

    static color = "blue"
    static bold = true
    /**
     * Colorizes the output message with the specified color.
     * @param {string} msg - The message to colorize.
    */
    static colorizeOutput(msg, color = this.color) {
        try {
            // @ts-ignore
            let colorize = colors[color] ? colors[color] : colors.blue;

            colorize = this.bold ? colorize.bold : colorize
            console.log(colorize(msg));
            return msg;
        } catch (error) {
            console.error('Error:', error);
            process.exit(1);
        }
    }
}



// Example usage with different colors
// Colorizer.colorizeOutput('hi', 'red');
// Colorizer.colorizeOutput('hello', 'green');
// Colorizer.colorizeOutput('welcome', 'yellow');
// Colorizer.colorizeOutput('goodbye', 'cyan');
// Colorizer.colorizeOutput('error', 'red');
// Colorizer.colorizeOutput('info', 'blue');
// Colorizer.colorizeOutput('success', 'green');

// Colorizer.colorizeOutput('hiii', 'cyan')

export { Colorizer }


// Example usage with different colors
// colorizeOutput('hi', 'red');
// colorizeOutput('hello', 'green');
// colorizeOutput('welcome', 'yellow');
// colorizeOutput('goodbye', 'cyan');
// colorizeOutput('error', 'red');
// colorizeOutput('info', 'blue');
// colorizeOutput('success', 'green');

// console.log(colors['green']('hi'));