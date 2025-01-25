import React from 'react';

import { useNavigation, useNavigate, useLoaderData } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import logout from '../utils/logout';

import { useToggle } from '../hooks/useToggle';

import PropTypes from 'prop-types';

// import { logoLight, logoDark } from '../assets/assets';

import { IconBtn } from './Button';
import Avatar from './Avatar';
import Menu from './Menu';
import MenuItems from './MenuItems';
import { LinearProgress } from './Progress';
import Logo from './logo';

const TopAppBar = ({ toggleSidebar }) => {
  const navigation = useNavigation();

  const navigate = useNavigate();

  const { user } = useLoaderData();
  // console.log(user);

  const [showMenu, setShowMenu] = useToggle();

  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;
  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-1'>
        <IconBtn
          icon='menu'
          title='Menu'
          classes='lg:hidden'
          onClick={toggleSidebar}
        />
        <Logo classes='lg:hidden' />
        {/* <Link
          to='/'
          className='min-w-max max-w-max h-[24px]'
        >
          <img
            src={logoLight}
            width={133}
            height={24}
            alt='PLuto logo'
            className='dark:hidden'
          />

          <img
            src={logoDark}
            width={133}
            height={24}
            alt='PLuto logo'
            className='hidden dark:block'
          />
        </Link> */}
      </div>

      <div className='menu-wrapper'>
        <IconBtn onClick={setShowMenu}>
          <Avatar name={user.name} />
        </IconBtn>
        <Menu classes={showMenu ? 'active' : ''}>
          <MenuItems
            labelText='Log out'
            onClick={() => logout(navigate)}
          />
        </Menu>
      </div>

      <AnimatePresence>
        {isNormalLoad && (
          <LinearProgress classes='absolute top-full left-0 right-0 z-10' />
        )}
      </AnimatePresence>
    </header>
  );
};

TopAppBar.propTypes = {
  toggleSidebar: PropTypes.func,
};

export default TopAppBar;
