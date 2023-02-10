import { React, useEffect, useState} from "react";
import {Grid,Paper,Box, Typography} from '@mui/material';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { ListAlt, ManageSearch } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";
import apiCorridors from "../../services/apiCorridors";












function Dashboard() {

  const getData=()=>{
    fetch(apiCorridors.getCorridors
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
                    data && data.length>0 && data.map((corridor)=>
                    <Grid container spacing={3} key={corridor._id}>
                    <Grid item md={6} xs={12}    >
                
                      <Paper sx={{ p: 2 }} >
                        <Box>
                          <Button component={Link} to={`/destinations/${corridor._id}`}>
                            <ListAlt />
                            
                             <p>{corridor.corridorName}</p>
                             <p>{corridor._id}</p>
                            
          
                          
          
                          </Button> 
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>)
                  }

</Grid>       

               

      )


 












    
  
}


export default Dashboard;