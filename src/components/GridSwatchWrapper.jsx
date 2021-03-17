import React, { useState } from 'react';
import styled from 'styled-components';

import ColorGrid from './ColorGrid';
import LeftSwatch from './LeftSwatch';
import RightSwatch from './RightSwatch';

function GridSwatchWrapper({className}) {

  const [bgColor, setBgColor] = useState('rgb(255,255,255)');

  const updateSwatchColor = value => {
    setBgColor(value);
  }

  return (
    <div className={className}>
      <LeftSwatch  bgColor={bgColor} />
      <ColorGrid updateSwatchColor={updateSwatchColor} />
      <RightSwatch bgColor={bgColor} />
    </div>
  );
}

export default styled(GridSwatchWrapper)`
  display: flex;
  .left-swatch, .right-swatch {
    flex: 1 1 calc(50vw - 512px);
  }
  .color-grid {
    flex: 0 0 1024px;
  }
`;