import React, { Component } from 'react'
import { Button,Modal,Glyphicon,Panel } from 'react-bootstrap';
import YouTube from 'react-youtube';
export class SearchResult extends Component {
  constructor(props){
      super(props)
      this.state = {
        _PlayVideoId : "",
        Show : false
      }

    this.PlayVideo = this.PlayVideo.bind(this);
    this.PlayVideo2 = this.PlayVideo2.bind(this);
    this.handleClose = this.handleClose.bind(this);
       
  }


  PlayVideo(){

    this.setState({
      _PlayVideoId : "2g811Eo7K8U",
      Show : true
    })

  }

  PlayVideo2(){

    this.setState({
      _PlayVideoId : "qkAvyxZNOvo",
      Show : true
    })

  }

  handleClose(){
    this.setState({ Show: false });
  }



  render() {

    const opts = {
        height: '500',
        width: '565',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };



      let ReceivedPictures;
      let PicsToRender = this.props.resultToRender;

      if(PicsToRender.length>0){
          console.log("Pictures received")
          console.log(PicsToRender)

          ReceivedPictures = PicsToRender.map((value) => {
              return (
                  <tr className="col-md-12">
                      <td className="col-md-3">
                        <img src={value.URL} />
                      </td>
                      <td className="col-md-7">
                          {value.Name}
                      </td>
                      <td className="col-md-2">
                      <Button bsStyle="danger" onClick={this.PlayVideo2} bsSize="large">
                            <Glyphicon glyph="play" /> Trailer
                      </Button>
                      </td>
                  </tr>
              )
          })

      }
       
    
       let RenderPictures = (this.props.resultToRender.length > 0 ? true : false)
        
    return (
      <div>
          { this.props.resultToRender.length > 1 &&

                // <Panel>
                // <Panel.Heading>
                //   <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
                // </Panel.Heading>
                // <Panel.Body>Panel content</Panel.Body>
                // </Panel>


                <div className="container" style={{float: "center", marginLeft:'30px', width:"95%", }}>
                    
                    <div style={{float:"left", width:"60%", height:"650px", overflow:"auto",background:"white"}}> 
                      
                        <Panel>
                          <Panel.Heading>
                            <Panel.Title componentClass="h3">Movies</Panel.Title>
                          </Panel.Heading>
                          <Panel.Body style={{background:"white"}}>
                          <table table className="table table-condensed table-hover">
                                 
                                <tbody>
                                    {ReceivedPictures}
                                </tbody>
                            </table>
                          </Panel.Body>
                       </Panel>
                      
                     
                    </div>
                    <div style={{float:"right", width:"40%", height:"650px", overflow:"auto", background:"white"}}> 

                        <Panel>
                              <Panel.Heading>
                                <Panel.Title componentClass="h3">Recommendation</Panel.Title>
                              </Panel.Heading>
                              <Panel.Body style={{background:"white"}}>
                              <table className="table table-condensed table-hover">
                                
                                <tbody>
                                {ReceivedPictures}
                                </tbody>
                            </table>
                              </Panel.Body>
                        </Panel>


                      
                    </div>
                </div>
          }


        <Modal show={this.state.Show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Advance Search</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <YouTube
                      videoId={this.state._PlayVideoId}
                      opts={opts}
                      onReady={this._onReady}
                    />
                        
                    </Modal.Body>
                    <Modal.Footer style={{marginBottom:"0px"}}>
                        <Button style={{marginTop:"25px"}} onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
          </Modal> 




          <h1>{this.props.Val} </h1>



        
      </div>
    )
  }
}

export default SearchResult
