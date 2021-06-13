import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

import about from "../../videos/bg1.mp4";
import ReactLoading from "react-loading";
import {NavLink} from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import cards from "../../card.js";
import Anime from 'react-anime'

const useStyles = makeStyles({

  media: {
    height: 200,
  },
  container: {
    paddingTop:60,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const [done,setDone] = useState(true);

  setTimeout(() => {  setDone(false) }, 4000);

  return (
      <>
      {
          done ?<div className="loading-screen"> <ReactLoading type={"cylon"} color={"aqua"} height={200} width={200} /></div>
           :  
    <div>
    <video autoPlay loop muted className="bg-video about-video">
        <source src={about} type="video/mp4" />
    </video>
    <div className="header-about">
          <NavLink to='/' className="back-work"><KeyboardBackspaceIcon fontSize="large" /></NavLink>
        </div>
    <Container className={classes.container}>
    
    <div className="row">    
    {cards.map((card) => 
        <div className='col-lg-4 col-md-6 col-sm-10'>
          <Anime
              opacity={[0,1]}
              duration={[12000]}
          >
          <Card className="root12">
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={card.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {card.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {card.content}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <a href={card.link} target="_blank"  rel="noreferrer" className="button9">Source</a>
    <a href={card.live} target="_blank"  rel="noreferrer" className="button10">Live</a>
    </CardActions>
  </Card>
    </Anime>
    </div>
    
    )}
    </div>
    </Container>
    </div>
}
    </>
  );
}
