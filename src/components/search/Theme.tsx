import { createTheme } from '@mui/material/styles';

const primaryColor = '#A7AEB3';
const secondaryColor = '#FFEB3B';
const textColor = '#000';
const inputBorderColor = primaryColor;
const hoverBorderColor = '#fff';
const transitionDuration = '0.3s';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    text: {
      primary: primaryColor,
    },
  },
  typography: {
    fontSize: 18,
    h1: { fontSize: '4rem' },
    h2: { fontSize: '2rem' },
    body1: { fontSize: '0.9rem' },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: primaryColor,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '75%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: inputBorderColor,
            },
            '&:hover fieldset': {
              borderColor: inputBorderColor,
            },
            '&.Mui-focused fieldset': {
              borderColor: secondaryColor,
              transition: `border-color ${transitionDuration}`,
            },
          },
          '& .MuiInputLabel-root': {
            color: primaryColor,
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: secondaryColor,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: hoverBorderColor,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: textColor,
          backgroundColor: primaryColor,
          width: '70%',
          fontSize: '16px',
          transition: `background-color ${transitionDuration}, color ${transitionDuration}`,
          '&:hover': {
            backgroundColor: secondaryColor,
            color: textColor,
          },
        },
      },
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: primaryColor,
          '&.Mui-checked': {
            color: secondaryColor,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: primaryColor,
        },
        icon: {
          color: primaryColor,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: primaryColor,
          '&.Mui-focused': {
            color: secondaryColor,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: primaryColor,
        },
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: hoverBorderColor,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: secondaryColor,
            transition: `border-color ${transitionDuration}`,
          },
        },
      },
    },
  },
});

export default theme;
