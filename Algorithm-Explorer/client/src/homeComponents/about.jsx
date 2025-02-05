import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

export default function About() {
  return (
    <Box sx={{textAlign:'center', backgroundColor: '#f5f5f5', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
        <h2 className='aboutusheading' style={{ color: '#333', fontWeight: 'bold', marginBottom: '20px' }}>ABOUT US</h2>
    <Box
    sx={{alignItems:'center',
    display: 'inline-flex',
    flexDirection: 'row',
    flexWrap:'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    width:'100%',
    }}
    >
    <Card sx={{ maxWidth: 400, m: 2, boxShadow: '0 4px 16px rgba(0,0,0,0.2)', borderRadius: '12px', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="developer.jpg"
          alt="Shivam_Pratap_Raj"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            SHIVAM PRATAP RAJ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Computer Science Engineer <br />
            <em>Email : </em>shivampratpa54451@gmail.com <br />
            <em>Address : </em>Kurukshetra, Haryana <br />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </Box>
  );
}
