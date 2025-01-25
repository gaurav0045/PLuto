import { redirect } from 'react-router-dom';

import { account } from '../../lib/appwrite';

const resetLinkLoader = async () => {
  try {
    await account.get();
    console.log(user);
  } catch (err) {
    console.log(`Error getting user sessions: ${err.message}`);
    return null;
  }

  return redirect('/');

};

export default resetLinkLoader;
