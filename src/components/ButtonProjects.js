import React from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RaisedButton from 'material-ui/RaisedButton'

// const {
//   RaisedButton,
//   MuiThemeProvider,
//   getMuiTheme,
// };

const ButtonProjects = ({ id, backgroundColor, labelColor }) => {
  // 450ms cubic-bezier(0.23, 1, 0.32, 1)
  // const transition = `background-color 450ms 0ms`;

  const buttonStyle = {
  boxShadow: 'none !important',
  height: '30px !important',
  borderRadius: '50px !important',
  border: 'none',
  fontSize: '17px',
  backgroundColor: '#fff !important'

  }

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0) !important',
    // lineHeight: '40px !important'
  }


	return (
    <div style={{ display: 'inline-block' }}>
        <style>
          {`
            
            #${id}:hover {
              transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms !important;
              box-shadow: none !important;
              background-color: ${labelColor} !important;
              color: ${backgroundColor} !important;
              border: 2px solid #FFC400 !important;       
              border-radius: 50px !important;           
            }

            #${id} {
              transition: background-color 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms !important;
              height: 30px !important;
              box-shadow: none !important;
              background-color: ${backgroundColor} !important;
              color: ${labelColor} !important;  
              border-radius: 50px !important;           
            } 

          `}
        </style>
        <RaisedButton id={id} disableTouchRipple={false} style={buttonStyle} overlayStyle={overlayStyle}  backgroundColor={labelColor} labelColor={backgroundColor} className="test">VIEW</RaisedButton>
      </div>  
  );
};

export default ButtonProjects