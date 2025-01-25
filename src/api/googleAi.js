import model from '../lib/googleAi';

const getConversationTitle = async (userPrompt) => {
  try {
    const result = await model.generateContent(
      `Given a user prompt, generate a concise and informative title that accurately describes the conservation. Consider keywords, topics, and the overall intent of the prompt. Response in plain text format, not markdown.
            Prompt: ${userPrompt}`,
    );
    return result.response.text();
  } catch (err) {
    console.log(`Error generating conversation title: ${err.message}`);
  }
};

const getAirResponse = async (userPrompt, chats = []) => {
  try {
    model.generationConfig = { temperature: 1.5 };
    const chat = model.startChat( { history: chats });
    const result = await chat.sendMessage(userPrompt);

    return result.response.text();
  } catch (err) {
    console.log(`Error generating AI responce: ${err.message}`);
  }
};

export { getConversationTitle, getAirResponse };
