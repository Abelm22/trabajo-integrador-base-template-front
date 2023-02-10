// @mui material components
import Container from "@mui/material/Container";
import { ListAlt, ManageSearch } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import apiDestinations from "../../services/apiDestinations";
import { Grid, Paper, Box} from '@mui/material';




function Destinations() {
  const {id}= useParams(); 

  const getData=()=>{
    fetch(apiDestinations.getDestinations + id
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }     



  
  useEffect(()=>{
    getData()
  },[])
  const [data,setData]=useState([]);
 
  
  return (
    
    <Grid container spacing={3}>
    {
      data && data.length>0 && data.map((destination)=>
      <Grid container spacing={3} key={destination._id}>
      <Grid item md={6} xs={12}    >
  
        <Paper sx={{ p: 2 }} >
          <Box>
            
              <ListAlt />
              
               <p>{destination.destinationName}</p>
               <p>{destination.destinationPosition.latitude}</p>
               <p>{destination.destinationPosition.longitude}</p>

            

             
          </Box>
        </Paper>
      </Grid>
    </Grid>)
    }

</Grid>
    
    );  
  
}

export default Destinations;