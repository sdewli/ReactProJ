import React from 'react';

export default function Request(props) 
{   
    
  return (
    <div className='grid-container'>   
    {props.data &&  props.data.map((val)=>{
        if(val.tag!=="request")
        {
          return;  
        }
          return(    
          <div>   
              <div className='grid-item' key={val.id}>
                 {console.log(val)}
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
