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
import { rl } from './io';

class StyleConfig {
    constructor() {
        this.colorsList = [
            'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey',
            'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite'
        ];

        // @ts-ignore
        this.prompt = `choose your color: ${this.colorsList.map((color, index) => `${index + 1}.${colors[color](color)}`).join(' ')}`;
    }

    /**
     * @param {string} question
     */
    static async askQuestion(question) {
        return new Promise((resolve) => rl.question(question, resolve));
    }

    async getStyleConfig() {
        try {
            const colorAnswer = await StyleConfig.askQuestion(this.prompt + '\n');
            if (isNaN(Number(colorAnswer)) || colorAnswer > this.colorsList.length || colorAnswer < 1) {
                throw new Error("unsupported choice, the range is 1-18 and must be a number");
            }

            const choosenColor = this.colorsList[colorAnswer - 1];
            const boldAnswer = await StyleConfig.askQuestion(`Do you want the color to be ${colors.bold('bold')}? (y/n)\n`);
            const bold = boldAnswer.toLowerCase() === 'y';
            const result = { color: choosenColor, bold: bold };
            // @ts-ignore
            console.log(`You chose: ${colors[choosenColor](bold ? colors.bold(choosenColor) : choosenColor)}`);
            return result;
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error:', error.message);
            } else {
                console.error('Unknown error:', error);
            }
            return null;
        } finally {
            rl.close();
        }
    }

    /**
     * @param {{ color: string; bold: boolean; } | null } config
     */
    static async writeConfigToFile(config) {
        try {
            const jsonString = JSON.stringify(config, null, 2);
            const configPath = path.join(__dirname, 'conf.json');
            await fs.promises.writeFile(configPath, jsonString, 'utf8');
            console.log('Configuration saved to conf.json');
        } catch (error) {
            console.error('Error writing to file:', error);
        }
    }
}


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

// (async () => {
//     const styleConfig = new StyleConfig();
//     const result = await styleConfig.getStyleConfig();
//     if (result)
//         // console.log('Result:', result);
//         await StyleConfig.writeConfigToFile(result);
// })();


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

export { Colorizer, StyleConfig }


// Example usage with different colors
// colorizeOutput('hi', 'red');
// colorizeOutput('hello', 'green');
// colorizeOutput('welcome', 'yellow');
// colorizeOutput('goodbye', 'cyan');
// colorizeOutput('error', 'red');
// colorizeOutput('info', 'blue');
// colorizeOutput('success', 'green');

// console.log(colors['green']('hi'));