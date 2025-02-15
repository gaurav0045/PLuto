import React from 'react';

import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';
import { Button } from '../components/Button';
import { CircularProgress, LinearProgress } from '../components/Progress';
import Logo from '../components/logo';

import { Form, useNavigation, useActionData } from 'react-router-dom';
import { useEffect } from 'react';

import { banner } from '../assets/assets';

import { useSnackbar } from '../hooks/useSnackbar';

import { AnimatePresence } from 'framer-motion';

const ResetPassword = () => {
  const error = useActionData();
  // console.log(error);

  const navigation = useNavigation();
  // console.log(navigation.state);

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (error?.message) {
      showSnackbar({
        message: error.message,
        type: 'error',
        // timeOut: 5000,
      });
    }
  }, [error, showSnackbar]);

  return (
    <>
      <PageTitle title='New Password' />
      <div className='relative w-screen h-dvh grid grid-cols-1 lg:grid-cols-[1fr,1fr] lg:gap-0'>
        {/* Left Section */}
        <div className='flex flex-col p-4'>
          <Logo classes='mb-auto mx-auto lg:mx-0'/>
          {/* <Link
            to='/'
            className='max-w-max '
          >
            <img
              src={logoLight}
              alt='PLuto logo'
              width={133}
              height={36}
              className='dark:hidden'
            />
            <img
              src={logoDark}
              alt='PLuto logo'
              width={133}
              height={36}
              className='hidden dark:block'
            />
          </Link> */}

          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground dark:text-dark-onBackground text-center'>
              Set a new password
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Please choose a password that hasn't been udes before, Must be at
              least 8 characters.
            </p>

            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='New password'
                required={true}
                autoFocus={true}
              />

              <Button
                type='submit'
                disabled={navigation.state === 'submitting'}
              >
                {/* <CircularProgress size='small' /> */}
                {navigation.state === 'submitting' ? (
                  <CircularProgress size='small' />
                ) : (
                  'Reset password'
                )}
              </Button>
            </Form>
          </div>

          <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2024 gaurav0045. All right reserved.
          </p>
        </div>

        {/* Right Section (Banner) */}
        <div className='relative h-full hidden lg:block overflow-hidden lg:rounded-large img-box'>
          <img
            src={banner}
            alt='Banner'
            className='w-full h-full object-cover'
          />
          <p className='absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-background drop-shadow-sm 2xl:text-[72px]'>
            Experience the power of AI with PLuto.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {navigation.state === 'loading' && (
          <LinearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  );
};

export default ResetPassword;
