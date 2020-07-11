import React, { useEffect, useState } from 'react';

const Main = () => {

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
      return (<div key={randB} title={`rgb(${singleSquare.a},${singleSquare.b},0)`} style={{backgroundColor: `rgb(${singleSquare.a},${singleSquare.b},0)`, display: "inline-block", width: "4px", height: "20px"}}></div>);
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


  return (
    <div className="main">
    YO
      {buildGrid(twoFiftySixSquared)}
    </div>
  );
};

export default Main;


//   <input type="number" min="0" max="255" name="red" />
//   <input type="number" min="0" max="255" name="green" />
//   <input type="number" min="0" max="255" name="blue" />