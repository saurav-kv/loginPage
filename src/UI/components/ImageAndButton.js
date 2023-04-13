import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  "./ImageAndButton.css";
import card from "../ProImages/MathCo_logo.png"
import UserNameField from "./UserNameField";

export default function ImageAndButton() {
  return (
    <div>
      <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="src/ProImages/MathCo_logo.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button id="shareButton" size="small">Share</Button>
      </CardActions>
      
    </Card>
    </div>
  );
}