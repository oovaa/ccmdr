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
import fs from 'fs';
import path from 'path';


class Colorizer {

    color = "blue"
    bold = true

    constructor() {
        const configPath = path.join(__dirname, 'conf.json');
        let config = {};

        try {
            const data = fs.readFileSync(configPath, 'utf8');
            config = JSON.parse(data);
            // @ts-ignore
            this.color = config.color || this.color;
            // @ts-ignore
            this.bold = config.bold && this.bold;
        } catch (error) {
        }
    }
    /**
     * Colorizes the output message with the specified color.
     * @param {string} msg - The message to colorize.
    */
    colorizeOutput(msg, color = this.color, bold = this.bold) {
        try {
            // @ts-ignore
            let colorize = colors[color] ? colors[color] : colors.blue;

            colorize = bold ? colorize.bold : colorize
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

// let colorize = new Colorizer()
// colorize.colorizeOutput('hiii')

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