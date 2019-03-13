import React, { Component } from 'react'
import Graph from "react-graph-vis";


const graph = {
    nodes: [
      { id: 1, label: "Node 1", color: "#e04141" , shape:'circle'},
      { id: 2, label: "Node 2", color: "#e09c41",shape:'star'},
      { id: 3, label: "Node 3", color: "#e0df41",shape:'diamond' },
      { id: 4, label: "Node 4", color: "#7be041",shape:'database'},
      { id: 5, label: "Node 5", color: "#41e0c9" },
      { id: 6, label: "Node 6", color: "#DEFDEF" },
      { id: 7, label: "Node 7", color: "#defea0" },
      { id: 8, label: "Node 8", color: "#00ccaa" },
      { id: 9, label: "Node 9", color: "#Dadaaa" },
      { id: 10, label: "Node 10", color: "#ffaa2a" },
      { id: 11, label: "Node 11", color: "#41c091" },
      { id: 12, label: "Node 12", color: "#DEFDEF" },
      { id: 13, label: "Node 13", color: "#DEFDEF" },
      { id: 14, label: "Node 14", color: "#DEFDEF" },
      { id: 15, label: "Node 15", color: "#DEFDEF" },
      { id: 16, label: "Node 16", color: "#DEFDEF" }
    ],
    edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 },{ from: 2, to: 12 }, { from: 2, to: 5 }, { from: 3, to: 6 },
      { from: 6, to: 15 },{ from: 3, to: 7 },{ from: 3, to: 8 },{ from: 4, to: 9 },{ from: 10, to: 11 },{ from: 2, to: 10 },
      { from: 3, to: 11 },{ from: 3, to: 9 },{ from: 15, to: 15 },{ from: 3, to: 5 },{ from: 3, to: 12 },{ from: 3, to: 14 },{ from: 3, to: 16 },{ from: 3, to: 13 }]
  };
  
  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    },

    groups: {
        myGroup: {color:{background:'pink'}, borderWidth:3}
      },
    //autoResize: true,
    clickToUse: true,
  };
  
  const moveToOptions = {
    position: {x:0, y:0},    // position to animate to (Numbers)
    scale: 1,              // scale to animate to  (Number)
    offset: {x:0, y:0},      // offset from the center in DOM pixels (Numbers)
    animation: {             // animation object, can also be Boolean
      duration: 100,                 // animation duration in milliseconds (Number)
      easingFunction: "easeOutQuad" // Animation easing function, available are:
    }                                   // linear, easeInQuad, easeOutQuad, easeInOutQuad,
  } 
  
  const events = {
    select: function(event) {
      var { nodes, edges } = event;
      this.moveTo(moveToOptions)
      console.log("Selected nodes:");
      console.log(nodes);
      console.log("Selected edges:");
      console.log(edges);
    }
  };



class GraphCluster extends Component {
    constructor(props){
      super(props)
  
      this.state = {
       
      }
   
    }
  
     
  
   render() {
      
    return (
        <div className="container" style={{backgroundColor:"#F5F5F5"}}>
        <Graph graph={graph} options={options} events={events} style={{ height: "740px", color:'#defdef' }} />
        </div>
      )
      
    }
  }
  
  export default GraphCluster;