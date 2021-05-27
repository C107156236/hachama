import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Button ,ButtonGroup ,Checkbox ,FormControlLabel } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles ,ThemeProvider ,createMuiTheme} from '@material-ui/core/styles';
import { pink ,green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary:{
      main: pink[400],
      }
    },
});

const useStyles = makeStyles ({
  root: {
    background: 'linear-gradient(45deg ,#333 ,#999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
    marginBottom: 10,
  },
})

function ButtonStyled() {
  const classes = useStyles();
  return(
    <Button className={classes.root}>
      Haachama Cookong~
    </Button>
  )
}

function CheckboxEx(){
  const [checked, setChecked] = React.useState(true);
  return (
      <FormControlLabel
      control={<Checkbox
        icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />}
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)} 
      />}
      label="haachama"
      />
  );
}

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton>
              <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <Typography variant="h6" >
              Hololive
            </Typography>
            <Button color="secondary">Login</Button>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h3"  >
            Haachama chama
          </Typography>
          <Typography variant="subtitle" >
            Akaihaato 赤井はあと
          </Typography>
          <ButtonStyled />
          <TextField  label="Email" variant="outlined" type="email" placeholder="haachama@gmail.com" 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}/>   
          <CheckboxEx />
          <ButtonGroup>
          <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
            >
            Save
          </Button>
          <Button
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
          </ButtonGroup>
        </header>
      </div>
    </ThemeProvider>
  );
}
export default App;
