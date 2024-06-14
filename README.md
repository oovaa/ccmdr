# CLI Tool: Command R+ AI Assistant

This CLI tool allows you to create a command-line AI assistant using the Command R+ model from Cohere and the Langchain framework.

## Installation

To install the CLI tool, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/oovaa/ccmdr.git
    ```
2. Navigate to the project directory:
    ```sh
    cd ccmdr
    ```
3. Run the install script (optionally passing your `COHERE_API_KEY`):
    ```sh
    . ./install <optional COHERE_API_KEY>
    ```

## Updating

To update the tool, navigate to its location and run:
```sh
./update
```

## Usage

### Interactive Mode

To use the CLI tool in interactive mode, follow these steps:

1. Open a terminal and navigate to the project directory.
2. Run the CLI tool:
    ```sh
    ccmdr
    ```
3. Follow the on-screen instructions to interact with the AI assistant.

### Non-Interactive Mode

To use the CLI tool in non-interactive mode, follow these steps:

1. Open a terminal and navigate to the project directory.
2. Run the CLI tool with your question:
    ```sh
    ccmdr tell me about Palestine
    ```

## Configuration

Before using the CLI tool, make sure to configure the necessary settings by uploading the `COHERE_API_KEY` to your environment. You can do this manually or pass it to the install script as mentioned in the Installation section.

---

This format should be easy to copy and paste as a single block.