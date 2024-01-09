import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function VideoCard({ marca, modelo, fabricante, memoria, stock, img }) {




  return (
    <Card className="card" sx={{ display: 'flex', maxWidth: 320, my:'20px', px:'1rem',}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {modelo}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {marca}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {fabricante}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {memoria}
          </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                {stock}
            </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={img}
        alt="Video card image"
      />
    </Card>
  );
}