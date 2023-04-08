'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = require('@mui/material/styles');

var theme = (0, _styles.createTheme)({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }
      }
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'].join(',')
  }
});

exports.default = theme;