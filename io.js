// @ts-nocheck
import { createInterface } from 'readline'

/**
 * Readline interface for input/output operations.
 * @type {readline.Interface}
 */
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

// rl.input.on('keypress', (char, key) => {
//   if (key && key.ctrl && key.name === 'enter') {
//     rl.write('\n') // Move to a new line
//   }
// })

export { rl }
