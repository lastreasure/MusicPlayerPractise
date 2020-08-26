import React from 'react';
import AudioControls from './components/Controls/AudioControls';
import SongImage from './components/SongDisplay/SongImage';
import Header from './components/Layout/Header';
import createActivityDetector from 'activity-detector'

import store from './store';
import { getSongs } from './store/slices';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App()  {

  React.useEffect(() => {
    store.dispatch(getSongs())
  }, [] )
  // Passing effect empty array so that the hook only ever runs on mount

  const classes = useStyles();

  // Idle mode
  function useIdle(options) {
    const [isIdle, setIdle] = React.useState(false)
    // Only render on mount
    React.useEffect((options) => {
      const activityDetector = createActivityDetector(options)
      activityDetector.on('idle', () => setIdle(true))
      activityDetector.on('active', () => setIdle(false))
      //remove all event handlers from body - set by activity detector
      return () => activityDetector.stop()
    }, [])
    return isIdle
  }

  const isIdle = useIdle({timeToIdle: 3000});

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" justify="center" alignItems="center">
        <Grid container item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <SongImage />
        </Grid>
        <Grid item xs={12}>
          <AudioControls/>
        </Grid>
        <Grid item xs={12}>
          Insert Table
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
      {isIdle ? 'are you still there?' : 'hi!'}
    </div>
  );
}

export default App;



// return (
//   // Provider takes the store and the store holds the state
//     <div className="App">
//       <SongImage />
//       <AudioControls />
//     </div>
// );