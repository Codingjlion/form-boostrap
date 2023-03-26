import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function NewForm () {

    return(
        <div>

                    
            <Form className="main-cont">
            <div className="main-cont2">
                <div className="log"> 
                <h3>Member Login</h3>
                <p>Login to our store and start shopping<br></br>br your favorite wears </p>
                </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Username or Email address:</label>
                <input type="email" className="control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label"><span>Password:</span></label>
                <input type="password" className="control" id="exampleInputPassword1"></input>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <div className="space">
                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                <a className='Forgot' href="#">Forgot Password?</a>
                </div>
                
            </div>
            <Button type="submit" className="btn btn-primary"> Submit </Button>
            <h6>Not Registered? <a className="clickhere" href="#">Click Here</a> to Register</h6>
            </div>
            
        
            </Form>
        </div>
    )
}

export default NewForm;