import React from 'react';

let Image = function statelessFunctionComponentClass(props) {
  // let source = './images/' + props.source;
  let source = props.source;

  
  let style = {
  	verticalAlign: 'top',
  	maxWidth: '100%',
  	minWidth: '100%',
  	width: '100%'
  };

  return (
    <img src={source} alt={source} style={style}/>
  );
};

export default Image;