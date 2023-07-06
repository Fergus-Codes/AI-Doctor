# AI-Doctor - Artificial Intelligence Symptom Checker CLI Application

The AI-Doctor is a command line interface program that acts as an intelligent symptom checker. It allows users to input their symptoms and receive potential illness suggestions, along with descriptions and treatment advice. This application is built using Node.js and utilizes the inquirer, langchain, and dotenv packages for user interaction, natural language processing, and environment variable management. ** This application requires that the user has a valid API key for OpenAI**

## Installation 
Clone the repository from GitHub:
```
git clone https://github.com/fergus-codes/ai-doctor.git
```

Navigate to the project directory:

```cd ai-doctor```

Install the dependencies:

```npm install inquirer langchain dotenv```

## Usage
Set up your environment variables:

## Create a .env file in the project directory.
Add the following line to the .env file:

Copy code

```API_KEY=your-api-key```

Replace your-api-key with the API key you obtained from OpenAI API you are using.

## Start the AI-Doctor application:

```node index.js```

The application will guide you through a series of questions to gather information about your symptoms. Answer each question to the best of your ability.

Once you have provided all the necessary information, the AI-Doctor will process the data using natural language processing techniques and display potential illnesses along with their descriptions and treatment advice.

## Dependencies

The AI-Doctor application has the following dependencies:

Node.js (version 12 or above)
inquirer (version 8.1.0 or above)
langchain (version 1.0.0 or above)
dotenv (version 10.0.0 or above)
To install the required dependencies, navigate to the project directory and run the following command:

## Contributing

If you would like to contribute to the AI-Doctor application, please follow these steps:

Fork the repository on GitHub.

Create a new branch for your feature/bug fix.

Make your changes and ensure they are well-tested.

Commit your changes and push them to your forked repository.

Submit a pull request, describing your changes in detail and referencing any relevant issues.

## License
The AI-Doctor application is open source and available under the MIT License. Feel free to modify and distribute the application according to the terms of the license.

## Contact
If you have any questions or suggestions regarding the AI-Doctor application, please feel free to contact the maintainer at fergus.coding@gmail.com.
