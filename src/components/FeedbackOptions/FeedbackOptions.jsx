import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from './FeedbackOptions.module';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleButtonClick = option => {
    onLeaveFeedback(option);
  };

  return (
    <>
      {options.map(option => (
        <Button
          key={uuidv4()}
          type="button"
          name={option}
          onClick={() => handleButtonClick(option)}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
