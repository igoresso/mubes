import React from 'react';
import PropTypes from 'prop-types';
import { Button, useAccordionButton } from 'react-bootstrap';

function CustomToggle({ children, eventKey, activeIndex, updateIndex }) {
  const customOnClick = useAccordionButton(eventKey, () => {
    updateIndex(eventKey === activeIndex ? null : eventKey);
  });

  const customClass = eventKey === activeIndex ? 'pe-4 text-start' : 'pe-4 text-start collapsed';

  return (
    <Button variant='link' className={customClass} onClick={customOnClick}>
      {children}
    </Button>
  );
}

CustomToggle.propTypes = {
  children: PropTypes.string.isRequired,
  eventKey: PropTypes.string.isRequired,
  activeIndex: PropTypes.string.isRequired,
  updateIndex: PropTypes.func.isRequired,
};

export default CustomToggle;
