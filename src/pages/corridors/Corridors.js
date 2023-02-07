import { React, useEffect} from "react";
import {Grid,Paper,Box, Typography} from '@mui/material';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { ListAlt, ManageSearch } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";





const Dashboard = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(appActions.setPageName('TABLERO'))
  },)
  const todo = useSelector(appSelector.todo)
  return (
   <Grid container spacing={3}>
    
    
    
    <Grid item md={6} xs={12}>
     <Paper sx={{p: 2}}>
       <Box>
         <Button component={Link} to="/destinations">
         <ListAlt/>
            Destinations
          </Button>
        </Box>
     </Paper>
    </Grid>
    <Grid item md={6} xs={12}>
     <Paper sx={{p: 2}}>
       <Box>
        <Button component={Link} to="/destinations">
          <ManageSearch/>
          Destinations
        </Button>
       </Box>
     </Paper>
    </Grid>
   </Grid>
  );
};


export default Dashboard;