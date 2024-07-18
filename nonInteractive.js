import { answer_chain } from './commandr'

/**
 * Handles non-interactive mode.
 * @param {string} question - The question to be answered.
 */
export function handle_non_interactive(question) {
  return answer_chain.invoke({ question: question, history: '' })
}
