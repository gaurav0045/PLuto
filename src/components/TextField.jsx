import PropTypes from 'prop-types';

import React from 'react';

const TextField = ({
  classes ='',
  helperText,
  label,
  name,
  placeholder = '',
  fieldClass='',
  ...rest
}) => {
  return (
    <div className={`text-field-wrapper ${classes}`}>
      <label
        htmlFor={name}
        className='label-text'
      >
        {label}
      </label>

      <input
        // type='text'
        className={`text-field ${fieldClass}`}
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />

      {helperText && <p className='helper-text'>{helperText}</p>}
    </div>
  );
};

TextField.propTypes = {
  classes: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  fieldClass: PropTypes.string,
};

export default TextField;
