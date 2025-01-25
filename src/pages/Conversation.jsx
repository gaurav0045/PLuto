import { motion } from 'framer-motion';

import PageTitle from '../components/PageTitle';

import { useLoaderData } from 'react-router-dom';

import UserPrompt from '../components/UserPrompt';
import AiResponse from '../components/AiResponse';

const Conversation = () => {
  const {
    conversation: { chats, title },
  } = useLoaderData() || {};

  return (
    <>
      <PageTitle title={`${title} | PLuto`} />

      <motion.div className=''>
        {chats.map((chat) => (
          <div key={chat.$id}>
            <UserPrompt text={chat.user_prompt}/>
            <AiResponse text={chat.ai_response}/>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Conversation;
