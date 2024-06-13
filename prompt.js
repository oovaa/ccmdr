import { formatConv } from './format.js'
import promptSync from 'prompt-sync'
import { answer_chain } from './commandr.js'

const prompt = promptSync()
const RESPONSE_COLOR = '\x1b[32m%s\x1b[0m' // Green

/**
 * Runs the chat CLI application to test the bot response.
 *
 * @returns {Promise<void>} A promise that resolves when the chat CLI application is finished.
 */
async function run() {
  const history = []

  /**
   * Asks a question to the user and processes the response.
   */
  async function ask() {
    let inputLines = []

    console.log('You (press Enter on an empty line to finish):')

    while (true) {
      const line = prompt('')

      if (line.trim() === '') {
        const msg = inputLines.join(' ').trim()

        if (msg.toLowerCase() === 'exit') {
          console.log(RESPONSE_COLOR, 'Goodbye!')
          break
        } else if (msg) {
          try {
            const response = await answer_chain.invoke({
              question: msg,
              // @ts-ignore
              history: formatConv(history)
            })
            history.push(msg)
            history.push(response)
            console.log(RESPONSE_COLOR, response)
          } catch (error) {
            console.error('Error:', error.message)
          }
          inputLines = [] // Reset input lines for next question
          console.log('You (press Enter on an empty line to finish):')
        }
      } else {
        inputLines.push(line)
      }
    }
  }

  // Start the asking loop
  await ask()
}

// Run the application
run()
