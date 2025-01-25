import { redirect } from 'react-router-dom';

import { account, databases } from '../../lib/appwrite';

import { getConversationTitle, getAirResponse } from '../../api/googleAi';

import generateID from '../../utils/generateID';

const userPromptAction = async (formData) => {
  const userPrompt = formData.get('user_prompt');

  const user = await account.get();

  const conversationTitle = await getConversationTitle(userPrompt);

  let conversation = null;

  try {
    conversation = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'conversations_db',
      generateID(),
      {
        title: conversationTitle,
        user_id: user.$id,
      },
    );
  } catch (err) {
    console.log(`Error creating conversation: ${err.message}`);
  }

  const aiResponse = await getAirResponse(userPrompt);
  
  try {
    await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        'chats_db',
        generateID(),
        {
            user_prompt: userPrompt,
            ai_response: aiResponse,
            conversation: [conversation.$id],  
        },
    );
  } catch (err) {
    console.log(`Error creating chat: ${err.message}`);
  }

  return redirect(`/${conversation.$id}`);
};

const appAction = async ({ request }) => {
  const formData = await request.formData();
  const requestType = formData.get('request_type');

  if (requestType === 'user_prompt') {
    return await userPromptAction(formData);
  }
};

export default appAction;
