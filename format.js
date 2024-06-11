/**
 * Formats the conversation history by adding a prefix to each message indicating whether it was sent by a human or an AI.
 * @param {string[]} messages - The array of messages in the conversation.
 * @returns {string} - The formatted conversation history.
 */
function formatConv(messages) {
  return messages
    .map((message, i) => {
      if (i % 2 === 0) {
        return `Human: ${message}`
      } else {
        return `AI: ${message}`
      }
    })
    .join('\n')
}

export { formatConv }
