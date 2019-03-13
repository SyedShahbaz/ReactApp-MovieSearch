import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainSearch from "./Components/MainSearch"
import Test from "./Components/Test"
import SearchResult from "./Components/SearchResult"
import LoginForm from "./Components/LoginForm"
import { PageHeader } from 'react-bootstrap';

import { Button,Modal } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      // _PicturesToSend: [],
      _Case : 0,
      show:false
      
    }

    // this.setPicturesState = this.setPicturesState.bind(this);
    this.loginIsSuccessful = this.loginIsSuccessful.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    
  }

  loginIsSuccessful(){
    this.setState({
      _Case : 1
    })
  }

  handleShow(){
    this.setState({
      show:true
    })
  }

  handleClose() {
    this.setState({ show: false });
  }

  // setPicturesState(result){
  //   this.setState({
  //     _PicturesToSend : result
  //   })
  // }

 render() {

 

    const {_Case} = this.state;
    switch(_Case){
      case 0:
            return(
              <LoginForm 
                loginIsSuccessful = {this.loginIsSuccessful}/>
            ) 
      case 1 : 
            return (
              <div className="App-header">
              <div style={{position:"relative", top:"10px", left:"10px"}}>
         <Button  bsStyle="primary" onClick={this.handleShow} style={{background: '#DE6262', color: '#fff', borderColor: '#DE6262'}}>Contact US</Button>
         </div>
         <Modal key="modal2" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div style={{height: 120, marginTop:"20px"}} className="col-md-12">
                    <h1>Hochschule für Technik Stuttgart</h1>
                    <tr>Schellingstr. 24, 70174 Stuttgart</tr>
                    <tr>Software Technology Master Program</tr>
                    </div>
                    </Modal.Body>
                    <Modal.Footer style={{marginBottom:"0px"}}>
                    <Button bsStyle="success" style={{marginTop:"25px", background: '#DE6262', color: '#fff', borderColor: '#DE6262'}} 
                    onPress={this.handleEmail}
                    title="support@example.com"
                    >Send a message</Button>
                    <Button style={{marginTop:"25px"}} 
                    onClick={this.handleClose}>Close</Button>
        
                    </Modal.Footer>
        </Modal> 
               
                <MainSearch />
                {/* <SearchResult Pictures = {this.state._PicturesToSend} /> */}
              </div>
               
            )
    }
    
  }
}

export default App;
