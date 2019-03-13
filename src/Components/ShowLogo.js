import React, {Component} from 'react';
import { Carousel} from 'react-bootstrap';
export class ShowLogo extends Component {
    constructor(props){
        super(props);

        this.state={

        }
    }



    render() { 
    
        return ( 
            <div style={{position:"static", marginTop: "5px"}} >

                     <table>
                       <tr><td style={{width: "50px", height: "80"}}>
                     <Carousel style={{marginLeft: 400}}
                         interval={1000}
                         indicators={false}
                         >
                 
                         <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover1.jpg')} />
                             </Carousel.Item>
                             {/* <Carousel.Item><h2 style={{fontSize: 45, textAlign: "center"}}>C</h2></Carousel.Item> */}
                         <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover2.jpg')} />
                             
                         </Carousel.Item>
                         <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover3.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td><td style={{width: "50px", height: "80"}}>
                     <Carousel
                         interval={1000}
                         indicators={false}
                         >
                
                         <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover1_copy.jpg')} />
                             </Carousel.Item>
                             {/* <Carousel.Item><h2 style={{fontSize: 45, textAlign: "center"}}>C</h2></Carousel.Item> */}
                         <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover2.jpg')} />
                             
                         </Carousel.Item>
                         <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover3.jpg')} />
                             
                         </Carousel.Item>
                         <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover4.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td>
                       <td style={{width: "50px", height: "80"}}>
                       <Carousel
                         interval={1000}
                         indicators={false}
                         >
                 
                       <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover2_copy.jpg')} />
                             </Carousel.Item>
                             {/* <Carousel.Item><h2 style={{fontSize: 45, textAlign: "center"}}>C</h2></Carousel.Item> */}
                         <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover3.jpg')} />
                             
                         </Carousel.Item>
                         <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover14.jpg')} />
                             
                         </Carousel.Item>
                         <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover5.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td><td style={{width: "50px", height: "80"}}>
                       <Carousel
                           interval={1000}
                           indicators={false}>
                           
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover3_copy.jpg')} />
                               
                           </Carousel.Item>
                           {/* <Carousel.Item><h2 style={{fontSize: 45}}>I</h2></Carousel.Item> */}
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover4.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover5.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover16.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td><td style={{width: "50px", height: "80"}}> 
                       <Carousel
                           interval={1000}
                           indicators={false}>
                           
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover4_copy.jpg')} />
                               
                           </Carousel.Item>
                           {/* <Carousel.Item><h2 style={{fontSize: 45}}>N</h2></Carousel.Item> */}
                           <Carousel.Item>
                               <img width={50} height={80}alt="900x500" src={require('./covers/cover5.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover6.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover7.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td><td style={{width: "50px", height: "80"}}>
                       <Carousel
                           interval={1000}
                           indicators={false}>
                           
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover5_copy.jpg')} />
                               
                           </Carousel.Item>
                           {/* <Carousel.Item><h2 style={{fontSize: 45}}>E</h2></Carousel.Item> */}
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover16.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                               <img width={50} height={80}alt="900x500" src={require('./covers/cover7.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover18.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td><td style={{width: "50px", height: "80"}}>
                       <Carousel
                           interval={1000}
                           indicators={false}>
                           
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover6_copy.jpg')} />
    
                           </Carousel.Item>
                           {/* <Carousel.Item><h2 style={{fontSize: 45}}>M</h2></Carousel.Item> */}
                           <Carousel.Item>
                               <img width={50} height={80}alt="900x500" src={require('./covers/cover19.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover18.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover19.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td><td style={{width: "50px", height: "80"}}>
                       <Carousel
                           interval={1000}
                           indicators={false}>
                           
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover7_copy.jpg')} />
                               
                           </Carousel.Item>
                           {/* <Carousel.Item><h2 style={{fontSize: 45}}>A</h2></Carousel.Item> */}
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover8.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover9.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover10.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td><td style={{width: "50px", height: "80"}}>
                       <Carousel
                           interval={1000}
                           indicators={false}>
                           
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover4_copy.jpg')} />
                               
                           </Carousel.Item>
                           {/* <Carousel.Item><h2 style={{fontSize: 45}}>P</h2></Carousel.Item> */}
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover19.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover10.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover16.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td><td style={{width: "50px", height: "80"}}>
                       <Carousel
                           interval={1000}
                           indicators={false}>
                           
                           <Carousel.Item>
                               <img width={50} height={80}alt="900x500" src={require('./covers/cover9_copy.jpg')} />
                               
                           </Carousel.Item>
                           {/* <Carousel.Item><h2 style={{fontSize: 45}}>E</h2></Carousel.Item> */}
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover10.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                               <img width={50} height={80}alt="900x500" src={require('./covers/cover11.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover12.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td><td style={{width: "50px", height: "80"}}>
                       <Carousel
                           interval={1000}
                           indicators={false}>
                           
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover2_copy.jpg')} />
                               
                           </Carousel.Item>
                           {/* <Carousel.Item><h2 style={{fontSize: 45}}>D</h2></Carousel.Item> */}
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover12.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover16.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover14.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td><td style={{width: "50px", height: "80"}}>
                       <Carousel
                           interval={1000}
                           indicators={false}>
                           
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover6_copy.jpg')} />
                               
                           </Carousel.Item>
                           {/* <Carousel.Item><h2 style={{fontSize: 45}}>I</h2></Carousel.Item> */}
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover13.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                               <img width={50} height={80} alt="900x500" src={require('./covers/cover14.jpg')} />
                               
                           </Carousel.Item>
                           <Carousel.Item>
                             <img width={50} height={80} alt="900x500" src={require('./covers/cover15.jpg')} />
                             
                         </Carousel.Item>
                       </Carousel>
                       </td></tr>
             </table>
 
            </div>
         );
    }
}
 
export default ShowLogo;