import React,{ Component , useState } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import './Folio/gallery.css';





class Highlight extends Component{

    
  
    render(){
        
        let itemList1 = this.props.items_a.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image" onClick={()=>getImg(item.img)}>
                            <img src={item.img} alt={item.title} style={{width: '100%'}}/>
                        </div>
                 </div>
            )
        });
       
        return(
            
                <highlight>
                    
                    
                        <div className="gallery">
                            <h2>My Gallery</h2>
                            <div className="pics" >
                                {itemList1} 
                            </div>
                        </div>
                   
                </highlight>
        )
    }
}
const getImg=(img)=>{
    console.warn(img)
}
const mapStateToProps = (state1)=>{
    return {
      items_a: state1.items_a,
     
    }
}


export default connect(mapStateToProps)(Highlight)

