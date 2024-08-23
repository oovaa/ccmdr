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
    `
    . ./install <COHERE_API_KEY>
    `
> **Note:** The `COHERE_API_KEY` will be stored in `/etc/environment`.

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


## uninstall
to uninstall just run `. ./uninstall` and it will take care of everything it will unset the env var and remove it from `/etc/environment` remove the `node_modules` folder  and remove `ccmdr` command from your path