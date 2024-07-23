/**
 * Formats the conversation history by adding a prefix to each message indicating whether it was sent by a human or an AI.
 * @param {string[]} messages - The array of messages in the conversation.
 * @returns {string} - The formatted conversation history.
 */
function formatConv(messages) {
  const formattedMessages = messages
    .map((message, i) => `${i % 2 === 0 ? 'Human' : 'AI'}: ${message}`)
    .join('\n')

  return formattedMessages
}

export { formatConv }
