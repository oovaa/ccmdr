import { createInterface } from 'readline'
import { readFile } from 'fs/promises'
// import colors from 'colors'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

// /**
//  * @param {string} msg
//  */
// async function colorizeOutput(msg) {
//   try {
//     const data = await readFile('./conf.json', 'utf8')
//     const json = JSON.parse(data)

//     const key = "ResponseColor"
//     if (!(key in json)) {
//       console.error(`Key "${key}" not found in JSON file.`)
//       rl.close()
//       process.exit(1)
//     }

//     const origin = msg

//     // @ts-ignore
//     if (json.bold) msg = msg.bold

//     const colorFunctions = {
//       red: colors.red,
//       green: colors.green,
//       yellow: colors.yellow,
//       blue: colors.blue,
//       magenta: colors.magenta,
//       cyan: colors.cyan
//     }

//     // @ts-ignore
//     const colorize = colorFunctions[json[key]] || ((text) => text)

//     console.log(colorize(msg))
//     rl.close()
//     return origin
//   } catch (error) {
//     console.error('Error reading JSON file:', error)
//     rl.close()
//     process.exit(1)
//   }
// }

// console.log(await colorizeOutput("hi"))

export { rl }