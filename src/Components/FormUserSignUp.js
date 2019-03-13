import React, { Component } from 'react'
import {ToastContainer, ToastStore} from 'react-toasts';

export class FormUserSignUp extends Component {
  constructor(props){
      super(props);

        this.state = {
          firstName : "",
          lastName: "",
          password: "",
          email : ""
        }


    this.goBack = this.goBack.bind(this);
    this.submitSignUpRequest = this.submitSignUpRequest.bind(this);
    
    this.checkEmail = this.checkEmail.bind(this);

    this.asUserEntersEmail = this.asUserEntersEmail.bind(this);
    this.asUserEntersFName = this.asUserEntersFName.bind(this);
    this.asUserEntersLName = this.asUserEntersLName.bind(this);
    this.asUserEntersPassword = this.asUserEntersPassword.bind(this);
   }

   checkEmail(emailAddress){
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
   }

   asUserEntersEmail(e){
      var _Email = e.target.value;
      this.setState({
          email : _Email
      })
   }

  goBack(){
      this.props.prevStep();
  }

  submitSignUpRequest(e){
      e.preventDefault();
      var UserEmail = this.state.email;
      if(!this.checkEmail(UserEmail)){
        ToastStore.error("InValid Email Format");
      }else{
        ToastStore.success("Request Submitted");
      }

      console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.email);
      console.log(this.state.password);
      
  }

  asUserEntersFName(arg){
    var _userFN = arg.target.value;
     
    this.setState({
        firstName : _userFN
    })
  }

  asUserEntersLName(args){
      var _userLN = args.target.value;
      this.setState({
        lastName : _userLN
    })
  }

  asUserEntersPassword(args){
      var _userPW = args.target.value;
      this.setState({
          password : _userPW
      })
  }

  render() {
    return (
      <div>
          <div className="login-block">
            <div className="container">
                <div className="row">
                    <div style={{marginLeft:'25%', marginTop:'-60px'}} className="col-md-6 login-sec center">
                        <h2 class="text-center">Sign Up</h2>
                            <form  className="login-form">
                                <div>
                                    <label for="exampleInputPassword1">First Name</label>
                                    <input onChange={this.asUserEntersFName} type="text" className="form-control" placeholder="" />
                                </div>

                                <div>
                                    <label for="exampleInputPassword1" >Last Name</label>
                                    <input onChange={this.asUserEntersLName} type="text" className="form-control" placeholder="" />
                                </div>
                                <div >
                                    <label for="exampleInputPassword1" >Password</label>
                                    <input onChange={this.asUserEntersPassword} type="password" class="form-control" placeholder=""/>
                                </div>

                                <div >
                                    <label for="exampleInputPassword1" >Email</label>
                                    <input onChange={this.asUserEntersEmail} type="email" class="form-control" placeholder=""/>
                                </div>

                                <div style={{marginTop:'10px'}} className="form-check">
                                    <button onClick={this.goBack} className="btn btn-login">Go Back</button>
                                    <button onClick={this.submitSignUpRequest} className="btn btn-login pull-right">Submit</button>
                                </div>



                            </form>

                            {/* <button onClick={() => ToastStore.error("There is an error :'(")}>Click me !</button> */}
                            <ToastContainer position={ToastContainer.POSITION.TOP_LEFT} store={ToastStore}/>
                    </div>
                </div>
            </div>
        </div>


      </div>
    )
  }
}

export default FormUserSignUp
