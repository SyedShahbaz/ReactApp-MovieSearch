import React, { Component } from 'react'
import { Form,FormGroup,Col,FormControl} from 'react-bootstrap'; 
import {ToastContainer, ToastStore} from 'react-toasts';

export class FormUserDetails extends Component {

 constructor(props){
     super(props);
     this.signUpPage = this.signUpPage.bind(this);
     this.submitLoginRequest = this.submitLoginRequest.bind(this);

     this.asUserEntersUserName = this.asUserEntersUserName.bind(this);
     this.asUserEntersPassWord = this.asUserEntersPassWord.bind(this);


     this.state = {
         userName : "",
         passWord : ""
     }
 }

 continue = e => {
     e.preventDefault();
     this.props.nextStep();
 }

 signUpPage(){
     this.props.nextStep();
 }

 asUserEntersUserName(e){
    var _userName = e.target.value;
    console.log(_userName);
    this.setState({
        userName : _userName
    })
 }

 asUserEntersPassWord(e){
    var _passWord = e.target.value;
    console.log(_passWord);
    this.setState({
        passWord : _passWord
    })
 }

 submitLoginRequest(e){
    e.preventDefault();
    ToastStore.success("Login Success");

    // send request to API

    var _userN = this.state.userName;
    var _passW = this.state.passWord;

    console.log(_userN);
    console.log(_passW);

    // fetch ('http://localhost:65486/api/values')
    //   .then(result => {
    //     return result.json();
    //   }).then(data => {
    //     let dataFromServer = data;
    //     console.log(dataFromServer);
    // })



    // Called if Login Is successful
    this.props.loginIsSuccessful();
 }

  render() {
    const  { values, handleChange } = this.props;
    return (

        <div className="login-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 login-sec">
                        <h2 class="text-center">Login Now</h2>
                            <form className="login-form">
                                <div>
                                    <label for="exampleInputEmail1">Username</label>
                                    <input onChange={this.asUserEntersUserName} type="text" className="form-control" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input onChange={this.asUserEntersPassWord} type="password" class="form-control" placeholder=""/>
                                </div>

                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                        <small style={{marginLeft:"5px"}}>Remember Me</small>
                                    </label>
                                    <button onClick={this.submitLoginRequest} className="btn btn-login pull-right">Submit</button>
                                </div>

                                <div class="form-group">
                                    <small href={"#"} onClick={this.signUpPage} style={{marginLeft:"5px"}}><u>Not a Member - Sign Up</u></small>
                                </div>



                            </form>
                            <ToastContainer position={ToastContainer.POSITION.TOP_LEFT} store={ToastStore}/>
                    </div>
                </div>
            </div>
        </div>
            
    );
  }
}

export default FormUserDetails
