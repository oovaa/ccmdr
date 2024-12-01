import { $ } from 'bun'

async function update() {
  const output = await $`./update`.text()
  console.log(output)
  process.exit(0)
}

async function uninstall() {
  const output = await $`./uninstall`.text()
  console.log(output)
  process.exit(0)
}

export { update, uninstall }
