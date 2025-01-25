import React from 'react';

import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';
import { Button } from '../components/Button';
import { CircularProgress, LinearProgress } from '../components/Progress';
import Logo from '../components/logo';

import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import { useEffect } from 'react';

import { banner } from '../assets/assets';

import { useSnackbar } from '../hooks/useSnackbar';

import { AnimatePresence } from 'framer-motion';

const Login = () => {
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
      <PageTitle title='Login' />
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
              Welcome back to PLuto
            </h2>
            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Enter your PLuto account details.
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
                required={true}
                autoFocus={true}
              />

              <TextField
                type='password'
                name='password'
                label='Password'
                placeholder='Enter your password'
                required={true}
              />

              <div className='text-right'>
                <Link
                  to='/reset-link'
                  className='link text-labelLarge'
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type='submit'
                disabled={navigation.state === 'submitting'}
              >
                {/* <CircularProgress size='small' /> */}
                {navigation.state === 'submitting' ? (
                  <CircularProgress size='small' />
                ) : (
                  'Sing in'
                )}
              </Button>
            </Form>

            <p className='text-bodyMedium text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-center mt-4'>
              don't have an account?
              <Link
                to='/register'
                className='link text-labelLarge inline-block ms-1 text-light-onSurface dark:text-dark-onSurface'
              >
                Create an account
              </Link>
            </p>
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

export default Login;
