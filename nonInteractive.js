import { answer_chain } from './commandr'

/**
 * Handles non-interactive mode.
 * @param { string[] } args
 * @returns  string
 */
export async function handle_non_interactive(args) {
  const question = args.slice(2).join(' ')

  let ans = await answer_chain.invoke({ question: question, history: '' })

  return ans
}
