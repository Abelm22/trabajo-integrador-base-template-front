// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Destinations from "../destinations/Destinations";
import Maps from "../destinations/Maps";





function Destination() {
  return (
    
        <Container>
            <Container>
              <Grid container flexDirection="row" alignItems="center">destination container</Grid>
            </Container>
           <Destinations></Destinations>
           <Maps></Maps>
            
              
        </Container>
        
    
    );  
  
}

export default Destination;