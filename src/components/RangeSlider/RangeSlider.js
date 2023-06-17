import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@mui/material/Slider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: 'grey',
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFC000',
    },
  },
});

const minDistance = 10;

export default function RangeSlider({ payRange, setPayRange }) {
  const classes = useStyles();

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPayRange([
        Math.min(newValue[0], payRange[1] - minDistance),
        payRange[1],
      ]);
    } else {
      setPayRange([
        payRange[0],
        Math.max(newValue[1], payRange[0] + minDistance),
      ]);
    }
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Slider
          getAriaLabel={() => 'Minimum distance'}
          value={payRange}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={10}
          min={10}
          max={100000}
        />
      </ThemeProvider>
    </div>
  );
}
