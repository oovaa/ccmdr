# CLI Tool: Command R+ AI Assistant

This CLI tool allows you to create a command-line AI assistant using the Command R+ model from Cohere and the Langchain framework.

## Installation

To install the CLI tool, follow these steps:

1. Clone the repository: `git clone https://github.com/oovaa/ccmdr.git`
2. Navigate to the project directory: `cd ccmdr`
3. Install the dependencies: `npm install`

## Usage

To use the CLI tool, follow these steps:

1. Open a terminal and navigate to the project directory.
2. Run the CLI tool: `node index.js`
3. Follow the on-screen instructions to interact with the AI assistant.

## Configuration

Before using the CLI tool, make sure to configure the necessary settings. Open the `config.js` file and update the following:

```javascript
module.exports = {
    cohereApiKey: 'YOUR_COHERE_API_KEY',
    langchainFramework: 'YOUR_LANGCHAIN_FRAMEWORK',
};
```

Replace `YOUR_COHERE_API_KEY` with your Cohere API key and `YOUR_LANGCHAIN_FRAMEWORK` with the desired Langchain framework.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
