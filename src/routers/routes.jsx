import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

import registerLoader from './loaders/registerLoders';
import loginLoader from './loaders/loginLoders';
import resetLinkLoader from './loaders/resetLinkLoader';
import resetPasswordLoader from './loaders/resetPasswordLoader';
import appLoader from './loaders/appLoader';
import conversationLoader from './loaders/ConversationLoader';

import loginAction from './actions/loginAction';
import registerAction from './actions/registerAction';
import resetLinkAction from './actions/resetLinkAction';
import resetPasswordAction from './actions/resetPasswordActions';
import appAction from './actions/appAction';

import Login from '../pages/login';
import Register from '../pages/Register';
import ResetLink from '../pages/ResetLink';
import ResetPassword from '../pages/ResetPassword';
import Conversation from '../pages/Conversation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    action: appAction,
    children: [
      {
        path: '/:conversationId',
        element: <Conversation />,
        loader: conversationLoader,
      },
    ],
  },

  {
    path: '/register',
    element: <Register />,
    loader: registerLoader,
    action: registerAction,
  },

  {
    path: '/login',
    element: <Login />,
    loader: loginLoader,
    action: loginAction,
  },

  {
    path: '/reset-link',
    element: <ResetLink />,
    loader: resetLinkLoader,
    action: resetLinkAction,
  },

  {
    path: '/reset-password',
    element: <ResetPassword />,
    loader: resetPasswordLoader,
    action: resetPasswordAction,
  },
]);

export default router;
