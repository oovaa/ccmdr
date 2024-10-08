import { PromptTemplate } from '@langchain/core/prompts'
import { ChatCohere } from '@langchain/cohere'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { RunnableSequence } from '@langchain/core/runnables'

const q_template = `You are Omar, a friendly and helpful AI assistant. Given some conversation history (if any) and a question, answer the question using the conversation history to improve the answer. Always maintain a friendly tone.

# Your answer will be displayed in a CLI terminal. Make sure it's clear, compatible, and not messy.
# Don't respond in markdown.

Conversation History: {history}
Question: {question} 
AI Answer: `;

const q_prompt = PromptTemplate.fromTemplate(q_template)

const llm = new ChatCohere({ model: 'command-r-plus',temperature : 0.5 })

// @ts-ignore
const answer_chain = RunnableSequence.from([
  q_prompt,
  llm,
  new StringOutputParser()
  // (prevResult) => console.log(prevResult),
])

export { answer_chain }
