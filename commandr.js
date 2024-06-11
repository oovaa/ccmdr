import { PromptTemplate } from '@langchain/core/prompts'
import { ChatCohere } from '@langchain/cohere'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { RunnableSequence } from '@langchain/core/runnables'

const q_template = `Given some conversation history (if any) and a question, answer the question using the Conversation history to improve the answer. 

Conversation History: {history}
Original Question: {question}
: `

const q_prompt = PromptTemplate.fromTemplate(q_template)

const llm = new ChatCohere({ model: 'command-r-plus' })

// @ts-ignore
const answer_chain = RunnableSequence.from([
  q_prompt,
  llm,
  new StringOutputParser()
  // (prevResult) => console.log(prevResult),
])

export { answer_chain }
