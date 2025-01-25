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

const ResetLink = () => {
  const actionData = useActionData();
  // console.log(error);

  const navigation = useNavigation();
  // console.log(navigation.state);

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (actionData) {
      showSnackbar({
        message: actionData.message,
        type: actionData.ok ? 'info' : 'error',
        timeOut: 8000,
      });
    }
  }, [actionData, showSnackbar]);

  return (
    <>
      <PageTitle title='Reset Password' />
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
              Forgot your password?
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Enter your email,and we'll send a password reset link.
            </p>

            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
            >
              <TextField
                type='email'
                name='email'
                label='Email'
                placeholder='Email'
                helperText='The verification link send to your email address will be valid for 1 hour.'
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
                  'Get link'
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

export default ResetLink;
