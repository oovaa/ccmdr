import { answer_chain } from './commandr'

/**
 * Handles non-interactive mode.
 * @param {string} questio - The question to be answered.
 */
export function handle_non_interactive(questio) {
  return answer_chain.invoke({ question: questio, history: '' })
}
