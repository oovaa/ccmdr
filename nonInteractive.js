import { answer_chain } from './commandr'
import { StyleConfig } from './conf';
import { uninstall, update } from './scripts';

/**
 * Handles non-interactive mode.
 * @param { string[] } args
 * @returns  string
 */
export async function handle_args(args) {
  const question = args.slice(2).join(' ')
  switch (question) {
    case '-sc':
      const sc = new StyleConfig()
      const new_conf_obj = await sc.getStyleConfig()
      await StyleConfig.writeConfigToFile(new_conf_obj)
      process.exit(0)
    case '-update':
      await update()
      return 'Update completed successfully.'
    case '-uninstall':
      await uninstall()
      return 'Uninstall completed successfully.'
    default:
      let ans = await answer_chain.invoke({ question: question, history: '' })
      return ans
  }
}