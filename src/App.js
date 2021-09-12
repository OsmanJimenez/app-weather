import './App.css';
import Axios from 'axios';
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/styles';
import { Navbar } from './Components/Navbar'
import { Feed } from './Components/Feed'
import { Grid } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },

  table: {
    minWidth: 650,
  },
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


function App() {
  const baseUrl = "https://localhost:44336/api/Info";
  const baseUrl2 = "https://localhost:44336/api/Weather";
  const [data, setData]=useState([]);
  const [data2, setClima]=useState([]);

  const peticionNew= async() =>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log("este es el error ", error);
    })
  }

  const peticionWeather= async() =>{
    await axios.get(baseUrl2)
    .then(response=>{
      setClima(response.data);
    }).catch(error=>{
      console.log("este es el error ", error);
    })
  }

  useEffect(()=>{
    peticionNew();
    peticionWeather();
  },[])

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Paper className={classes.root}>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Ciudad</TableCell>
              <TableCell align="right">Fecha</TableCell>
              <TableCell align="right">Temperatura</TableCell>
              <TableCell align="right">Velocidad del Aire</TableCell>

              
              <TableCell align="right">Dirección Viento</TableCell>
              <TableCell align="right">Humedad</TableCell>
              <TableCell align="right">Descripción Tiempo</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {data2.map(row => (
              <TableRow key={row.id_Weather}>
                <TableCell component="th" scope="row">
                  {row.id_Weather}
                </TableCell>
                <TableCell align="right">{row.observation_Time}</TableCell>
                <TableCell align="right">{row.temperature }°</TableCell>
                <TableCell align="right">{row.wind_Speed }</TableCell>
                <TableCell align="right">{row.wind_Dir}</TableCell>
                <TableCell align="right">{row.humidity}</TableCell>
                <TableCell align="right">{row.weather_Descriptions }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        </Paper>

        <Grid container spacing={3}>
          {data.map(row => (
            <Grid item xs={3} key={row.Ciudad}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    O
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={row.title}
                subheader={row.published_At}
              />
              <CardMedia
                className={classes.media}
                image={row.url_To_Image}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {row.description_New }
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share" href={row.url_New } >
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="Mostrar Mas"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Información:</Typography>
                  <Typography paragraph>
                  {row.content}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          ))} 
          

        </Grid>

    </div>
    

    
  );
}

export default App;
