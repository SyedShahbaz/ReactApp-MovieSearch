import React, { Component } from 'react'
import { Button,Modal, DropdownButton, MenuItem, FormGroup, ControlLabel, FormControl,Glyphicon } from 'react-bootstrap';
import SearchResult from "./SearchResult";
import GraphCluster from "./GraphCluster";
import cover1 from "./covers/cover1.jpg";
import cover2 from "./covers/cover2.jpg";
import ReactTimeout from 'react-timeout';

export class MainSearch extends Component {
    constructor(props){
      super(props)

      this.state = {
        show:false,
        searchQuery : "",
        Dummy : 1,
        resultType : 0, // 0 means default search result , 1 means Graphs
        resultReceived: [],
        pic: cover1
     }


      this.userEnterText = this.userEnterText.bind(this);
      this.sendDataToApi = this.sendDataToApi.bind(this);
      this.toggleDisplay = this.toggleDisplay.bind(this);
      
      
    }

  userEnterText(event){

    let text = event.target.value;
    console.log(text)
    this.setState({
        searchQuery : text
    })
  }

  sendDataToApi(){
    let _Query = this.state.searchQuery
    console.log("Query " + _Query);
    

    // Send and Get Request from Dummy API
    fetch ('https://randomuser.me/api/?results=10')
      .then(result => {
        return result.json();
      }).then(data => {
        let dataFromServer = data;
        console.log(dataFromServer);
        let FinalResult = [];
        let pics = dataFromServer.results.map((pic) => {
          let JObj = {}
          JObj["URL"] = pic.picture.large;
          JObj["Name"] = pic.login.username;
          FinalResult.push(JObj);

        })

        this.setState({
            resultReceived : FinalResult
        })

        
    })

  }

    toggleDisplay(){
        console.log(this.state.resultType);
        var toggleVal = this.state.resultType === 0 ? 1 : 0;
        this.setState({
            resultType : toggleVal
        })
    }

    

      onCountrySelected(eventKey){
        let indexSelected = eventKey;
        let CountrySelected = this.state.Countries[indexSelected]
        this.setState({
            selectedCountry : CountrySelected
        })
      }
 

  render() {

    const {resultType} = this.state;

    let displayToUser = "";
    switch (resultType){
        case 0:
            displayToUser = <SearchResult resultToRender = {this.state.resultReceived} />
            break;
        case 1:
            displayToUser = <GraphCluster />
            break;
    }


    return (
        <div className="App">


                


            <div>
                <div className="container">
                    <table className="table table-condensed">
                        <tr>
                            <td className="col-md-11" style={{background:"", paddingTop:"13px"}}>
                                <textarea onChange = {this.userEnterText}  style={{color:'black', fontSize:'20px', width:"100%", border:"2px solid", borderColor: "grey", borderRadius:"25px", marginTop: "20px"}}   />
                            </td>
                             
                            <td style={{background:""}}>
                                <Button bsSize="medium" bsStyle="primary" onClick={this.sendDataToApi} style={{background: '#DE6262', color: '#fff', borderColor: '#DE6262'}}>
                                        Search <Glyphicon glyph="search" />
                                </Button>
                            </td>
                        </tr>
                    </table>
                 </div>
                        { this.state.resultReceived.length > 1 &&
                                <div style={{marginLeft:"2px", marginRight:"2px"}}>
                                    <Button bsSize="medium" bsStyle="primary" onClick={this.toggleDisplay}>
                                        Toggle <Glyphicon glyph="sort" />
                                    </Button>
                                </div>
                        }
                    {displayToUser}
            </div>

    </div>
    )
  }
}

export default MainSearch
