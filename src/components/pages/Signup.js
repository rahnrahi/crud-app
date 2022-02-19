import {Row, Form, Button, Col} from "react-bootstrap";
import React from 'react'

class SignUpForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {  
            fname: ''
        } 
    }

    handlechangeName(e){
      this.setState({'fname': e.target.value})
    }
    
    render() { 
        return (
        <Form>
            <h3>{this.props.title}</h3>
            <hr/>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="fname" onChange={(e)=>this.handlechangeName(e)} value={this.state.fname} placeholder="Full name" />
                {this.state.fname=='' && (<>Name is required</>)}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

        </Form>
      );
    }
}
 


function Signup() {
    
    return ( 
        <Row  style={{marginTop:'40px'}}>
             
            <Col md={6}>
                <SignUpForm title="Sign Up Form"/>
            </Col> 
            <Col md={6}>
                <img src="https://picsum.photos/id/237/600/400"/>
               <p>To add upon Sebastien's answer, this seems to work for me, including a not 
                   found route and dynamic subroutes. The examples below make my 
                   LayoutAuthenticated and LayoutAnonymous just render once, 
                   not on every route change within routes that use that same layout. 
                   Also added the PageSettings example to show nested routes within 
                   this architecture. Hope this might help others!
                   </p>
            </Col>
             
        </Row> 
    );
}

export default Signup;