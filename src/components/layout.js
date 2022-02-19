
import Navbar from './Navbar'
import {Container} from "react-bootstrap";
function Layout(props) {
  
    return (
       <>
        <Navbar/>
          <Container style={{minHeight: '80vh'}}>
            {props.children}
          </Container>
          
        <Navbar/>
       </> 
        
    );
}

export default Layout;