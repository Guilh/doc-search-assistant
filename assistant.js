// Script to create the assistant
require('dotenv').config();
const OpenAI = require('openai');
const fs = require('fs');

const configuration = new OpenAI.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI.OpenAIApi(configuration);