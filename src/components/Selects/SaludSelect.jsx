import React from 'react';
//import PropTypes from 'prop-types'
import './_SaludSelect.scss';
import Select, { components } from 'react-select';

const SaludSelect = ({
  options = [],
  isMulti = false,
  isSearchable = false,
  handleChange = () => {},
  isDisabled = false,
  isLoading = false,
  isClearable = false,
  isRtl = false,
  defaultValue,
  placeholder = 'Select...',
}) => {
  const SelectContainer = props => {
    return (
      <div className="SaludSelect__SelectContainer">
        <components.SelectContainer {...props} />
      </div>
    );
  };

  return (
    <Select
      options={options}
      isMulti={isMulti}
      onChange={e => handleChange(e)}
      value={defaultValue}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      placeholder={placeholder}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: '#FC842D',
        },
      })}
      components={{ SelectContainer }}
    />
  );
};

SaludSelect.propTypes = {};

export default SaludSelect;
