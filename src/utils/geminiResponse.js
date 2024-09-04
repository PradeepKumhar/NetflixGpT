import { GoogleGenerativeAI } from '@google/generative-ai';

const getGeminiResponse = async (prompt) => {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (!apiKey) {
      throw new Error("API key is not set in environment variables");
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
};

export default getGeminiResponse;