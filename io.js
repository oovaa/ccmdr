import { createInterface } from 'readline'
import colors from 'colors'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

export { rl }