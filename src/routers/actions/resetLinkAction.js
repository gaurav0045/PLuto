import { account } from '../../lib/appwrite';

const resetLinkAction = async ({ request }) => {
  try {
    // Parse form data to get the email
    const formData = await request.formData();
    const email = formData.get('email');

    // Validate email presence
    if (!email) {
      throw new Error('Email is required.');
    }

    // Create password recovery link
    await account.createRecovery(email, `${location.origin}/reset-password`);
    return {
      ok: true,
      message:
        'You will receive a password reset link shortly. Please check your email and follow the instructions to reset your password.',
    };
  } catch (err) {
    // Improved error logging
    console.log(`Error getting password reset link: ${err.message || 'Unknown error'}`);
    return {
      ok: false,
      message: err.message || 'An unexpected error occurred.',
    };
  }
};

export default resetLinkAction;
