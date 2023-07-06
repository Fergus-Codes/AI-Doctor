require("dotenv").config();
const { OpenAI } = require("langchain/llms/openai");
const inquirer = require("inquirer");
const { PromptTemplate } = require("langchain/prompts");
const { StructuredOutputParser } = require("langchain/output_parsers");

const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  model: "gpt-3.5-turbo",
});

const parser = StructuredOutputParser.fromNamesAndDescriptions({
  illnesses: "the illnesses that the user is likely to have",
  explanation: "detailed explanation of the example provided",
  treatment: "treatment for the illness",
  sources: "sources used to determine the illnesses",
});

const formatInstructions = parser.getFormatInstructions();

const promptFunc = async (input) => {
  try {
    const prompt = new PromptTemplate({
      template:
        "You are a general practitioner (doctor) and will take the user's symptoms. Then, using only reliable sources, you will determine likely ilnesses, explain in easy to understand words and give accurate treatment advise. You will the provide the sources used to gather information.\n{format_instructions}\n{question}",
      inputVariables: ["question"],
      partialVariables: { format_instructions: formatInstructions },
    });
    const promptInput = await prompt.format({
      question: input,
    });
    const res = await model.call(promptInput);
    console.info(await parser.parse(res));
  } catch (err) {
    console.error(err);
  }
};

const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message:
          "Please enter your symptoms as detailed and as clear as possible:",
      },
    ])
    .then((inquirerResponse) => {
      promptFunc(inquirerResponse.name);
    });
};

init();
