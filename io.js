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

export { rl }
