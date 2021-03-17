import React from 'react';
import styled from 'styled-components';

const LeftSwatch = ({className, bgColor}) => {
  return (
    <div className={`${className} left-swatch`}>

    </div>
  )
};

export default styled(LeftSwatch)`
  background-color: ${props => props.bgColor};
`;