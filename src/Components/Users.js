import React from 'react'

export default function Users(props) {



  function handleClick(){
    console.log("Compnent Clicked");
  }
  return (
    <div className='grid-container'>   
    {props.data &&  props.data.map((val)=>{
        if(val.tag!=="user")
        {
          return;  
        }
          return(    
          <div>   
            
              <div onClick={handleClick} className='grid-item' key={val.id}>
                <div className='div1'>
                {<img className='img2' src={val.icon_url} />}
                <span className='title'>{val.title}</span>
                <span className='category' >{val.category}</span>
                </div>
               <div>
               <span className='link'>{val.link}</span> 
               <span className='description'>{val. description}</span> 
               
               </div>
             
              
              </div>
             </div>
          )
      })}
        </div> 
  )
}
