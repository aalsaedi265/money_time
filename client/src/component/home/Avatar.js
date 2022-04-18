import React, {useRef} from 'react';

function Avatar({picture,name}){

  const fileInput =useRef(null)
    
  // function handleUpload(e){

    
  //   }

  return (

    <div className="file-uploader">
        
        <input type="file" onChange={this.handleUpload}/>

        <input type="text" onChange={this.handleUpload}/>
        
    </div>

  )
}


export default Avatar;