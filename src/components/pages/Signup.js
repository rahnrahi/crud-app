import {Row, Form, Button, Col} from "react-bootstrap";
import React from 'react';
import validator from 'validator';
const emailState = {
    email: '',
    error: ''
}

class SignUpForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {  
            fname: '',
            email:'',
            pass:'',
            cpass:'',
        } 
    }
    
    // validate = () => {
    // const [emailError, setEmailError] = useState('')
    // const validateEmail = (ev) => {
    //   var email = ev.target.value
    
    //   if (validator.isEmail(email)) {
    //     setEmailError('Valid Email :)')
    //   } else {
    //     setEmailError('Enter valid Email!')
    //   }
    // }
    //   if (validator.isEmail(email)) {
    //     setEmailError('Valid Email :)')
    //   } else {
    //     setEmailError('Enter valid Email!')
    //   }
    // }

// --------------------------------------------------

    emailValidation(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                error: "Email is not valid"
            });
            return false;
        }
        return true;
    }
    handlechangeEmail(ev){
        this.setState({'email': ev.target.value})
      }
    onSubmit(){
        if(this.emailValidation()){
            console.log(this.state);
            this.setState(emailState);
        }
    }
    
    
    handlechangeName(e){
      this.setState({'fname': e.target.value})
    }
   
    handlechangePassword(evn){
        this.setState({"pass" : evn.target.value})
    }
    handlechangeCPassword(evnt){
        this.setState({"cpass" : evnt.target.value})
    }

    render() { 
        return (
        <Form>
            <h3>{this.props.title}</h3>
            <hr/>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name<span style={{color:'red',fontSize:'20px'}}>*</span></Form.Label>
                <Form.Control type="text" name="fname" onChange={(e)=>this.handlechangeName(e)} value={this.state.fname} placeholder="Full name" />
                {this.state.fname=='' && (<div style={{color:"red"}}>required</div>)}
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address<span style={{color:'red',fontSize:'20px'}}>*</span></Form.Label>
                <Form.Control type="text" name="email" onChange={(ev)=>this.handlechangeEmail(ev)} value={this.state.email}  placeholder="Enter email" />
                {this.state.email=='' && (<div style={{color:"red"}}>required</div>)}
                <span className="text-danger">{this.state.error}</span>
                {/* <div>{emailError}</div> */}
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password<span style={{color:'red',fontSize:'20px'}}>*</span></Form.Label>
                <Form.Control type="password" name="pass" onChange={(evn)=>this.handlechangePassword(evn)} value={this.state.pass} placeholder="Password" />
                {this.state.pass=='' && (<div style={{color:"red"}}>required</div>)}
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password<span style={{color:'red',fontSize:'20px'}}>*</span></Form.Label>
                <Form.Control type="password" name="cpass" onChange={(evnt)=>this.handlechangeCPassword(evnt)} value={this.state.cpass} placeholder="Confirm Password" />
                {this.state.cpass=='' && (<div style={{color:"red"}}>required</div>)}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={()=>this.onSubmit()}>
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