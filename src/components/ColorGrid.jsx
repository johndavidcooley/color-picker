import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ColorGrid = ({className, updateSwatchColor}) => {

  const [twoFiftySixSquared, setTwoFiftySixSquared] = useState([]);

  const setNewVals = () => {
    let grid = [];
    for(let i = 0; i < 256; i++) {
      let row = [];
      for (let j = 0; j < 256; j++) {
        const square = {
          a: i,
          b: j,
        };
        row.push(square);
        if (j === 255) {
          grid.push(row);
          row = [];
        }
      }
    }
    setTwoFiftySixSquared(grid);
  };

  useEffect(()=> {
    setNewVals();
  }, []);


  const buildRow = row => {
    console.log('build row');
    return row.map(singleSquare => {
      const randB = Math.random();
      return (<div key={randB} data-color={`rgb(${singleSquare.a},${singleSquare.b},0)`} style={{backgroundColor: `rgb(${singleSquare.a},${singleSquare.b},0)`, display: "inline-block", width: "4px", height: "20px"}}></div>);
    })
  }

  const buildGrid = outerArray  => {
    console.log('build grid');
    return outerArray.map(innerArray => {
      const randA = Math.random();
      return (
        <div key={randA} className="row">
           {buildRow(innerArray)}
        </div>
      )
    });
  };

  const handleMouseMove = e => {
    updateSwatchColor(e.target.dataset.color);
  }


  return (
    <div className={`${className} color-grid`} onMouseMove={handleMouseMove}>
    YO
      {buildGrid(twoFiftySixSquared)}
    </div>
  );
};

export default styled(ColorGrid)`
  display: inline-block;
`;


// Make a slider range thin for rgb color values
// show color when hovering in big grid
// left side changes color as you hover
// right side keeps color on a click