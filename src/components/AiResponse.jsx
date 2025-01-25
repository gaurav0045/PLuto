import PropTypes from 'prop-types';
import { iconLogo } from '../assets/assets';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { hopscotch, coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import React from 'react';

const AiResponse = ({ aiResponse, children }) => {
  const code = ({ children, className, ...rest }) => {
    const match = className?.match(/language-(\w+)/);

    return match ? (
      <>
        <div className='code-block'>
          <div className=''>{match[0]}</div>

          <SyntaxHighlighter
            {...rest}
            preTag='div'
            language={match[1]}
            style={hopscotch}
            customStyle={{
              padding: '2px',
              marginBlock: '0',
            }}
            codeTagProps={{
              style: {
                padding: '14px',
                fontWeight: '600',
              },
            }}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      </>
    ) : (
      <code className='{className}'>{children}</code>
    );
  };

  return (
    <div className='grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content,minmax(0,1fr)] md:gap-5'>
      <figure className='w-8 h-8 grid place-items-center'>
        <img
          src={iconLogo}
          width={32}
          height={32}
          alt='PLuto logo'
        />
      </figure>
      {children}

      <div className='markdown-content'>
        <Markdown remarkPlugins={[remarkGfm]}>{aiResponse}</Markdown>
      </div>
    </div>
  );
};

AiResponse.propTypes = {
  aiResponse: PropTypes.string,
  children: PropTypes.any,
};

export default AiResponse;
