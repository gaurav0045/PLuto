import {
    createContext,
    useState,
    useRef,
    useCallback,
    useMemo,
  } from 'react';
  import PropTypes from 'prop-types';
  import Snackbar from '../components/Snackbar';
  
  const initialCtxValue = {
    Snackbar: {
      open: false,
      message: '',
      type: 'info',
    },
    showSnackbar: ({ message, type = 'info', timeOut = 5000 }) => {},
    hideSnackbar: () => {},
  };
  
  export const SnackbarContext = createContext(initialCtxValue);
  
  const SnackbarProvider = ({ children }) => {
    const [snackbarState, setSnackbarState] = useState({
      open: false,
      message: '',
      type: 'info',
    });
  
    const timeOutRef = useRef();
  
    const showSnackbar = useCallback(
      ({ message, type = 'info', timeOut = 5000 }) => {
        if (!message) return;
        if (timeOutRef.current) clearTimeout(timeOutRef.current);
  
        setSnackbarState({ open: true, message, type });
  
        timeOutRef.current = setTimeout(() => {
          setSnackbarState((prev) => {
            return { ...prev, open: false };
          });
        }, timeOut);
      },
      []
    );
  
    const hideSnackbar = useCallback(() => {
      if (timeOutRef.current) clearTimeout(timeOutRef.current);
      setSnackbarState({ open: false, message: '', type: 'info' });
    }, []);
  
    const contextValue = useMemo(() => {
      return { showSnackbar, hideSnackbar };
    }, [showSnackbar, hideSnackbar]);
  
    return (
      <SnackbarContext.Provider value={contextValue}>
        {children}
        <Snackbar Snackbar={snackbarState} />
      </SnackbarContext.Provider>
    );
  };
  
  SnackbarProvider.propTypes = {
    children: PropTypes.any,
  };
  
  export default SnackbarProvider;
  