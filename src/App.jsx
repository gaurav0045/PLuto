import React from 'react';

import { useToggle } from './hooks/useToggle';

import PageTitle from './components/PageTitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';
import PromptField from './components/PromptField';

import Greetings from './pages/Greetings';

import { motion } from 'framer-motion';
import { Outlet, useParams } from 'react-router-dom';

const App = () => {
  const params = useParams();

  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <>
      <PageTitle title='PLuto - Experience the power of AI with PLuto.' />

      <div className='lg:grid lg:grid-cols-[320px,1fr]'>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className='h-dvh grid grid-rows-[max-content,minmax(0,1fr),max-content]'>
          <TopAppBar toggleSidebar={toggleSidebar} />
          <div className='px-5 pb-5 flex-flex-col-overflow-y-auto'>
            <div className='max-w-[840px] w-full mx-auto grow'>
              {params.conversationId ? (
                <Outlet/>
              ) : (
                <Greetings/>
              )}
            </div>
          </div>

          <div className='bg-light-background dark:bg-dark-background'>
            <div className='max-w-[870px] px-5 w-full mx-auto'>
              <PromptField />

              <motion.p
                initial={{ opacity: 0, translateY: '-4px' }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2, delay: 0.8, ease: 'easeOut' }}
                className='text-bodySmall text-center text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant p-3'
              >
                PLuto may display inaccurate info, including about people, so
                double check its responses.
                <a
                  href='https://support.google.com/gemini?p=privacy_notice'
                  target='_blank'
                  className='inline underline ms-1'
                >
                  Your privacy & PLuto Apps
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
