import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Soom from '@mui/material/Zoom';



function CreateArea(props) {


    var flag = 0;
     
    const [inputw , setinput] = useState(  {
        key: 0,
        title: "",
        content:""
      } );

      const [rowx , setrowx] = useState(1);

     

      
      const MyComponent = React.forwardRef((props, ref) => {
        return (
          <div id="iuo" className="pop" ref={ref} {...props}>
             <Fab  id="iuo2"  onClick={handlesubmit}>  <AddIcon /> </Fab>  
          </div>
        );
      })
       

     function handlesubmit(e)
      {
             

        

        e.preventDefault();
              
        
           var temp34 = inputw;

           setinput({
            key: 0,
            title: "",
            content:""
          });
           
           
            props.tosyncf(temp34);

            
            console.log(flag)
               
         

      }


     function  handlechange(e)
      {
         e=e.target;
        console.log(e );
        
       
        console.log(inputw);
        if(e.name == "title")
        {
            var tmpcont = inputw.content;
            var tmptitle = e.value;
            var tmppkg = {key: 0, title: tmptitle , content: tmpcont} ;
    
            setinput(tmppkg);
        }
        if(e.name == "content")
        {
            var tmpcont = e.value;
            var tmptitle = inputw.title;
            var tmppkg = {key: 0, title: tmptitle , content: tmpcont} ;
    
            setinput(tmppkg);
        }
            
      }
      
      if(flag == 0)
      {

        var ignoreClickOnMeElement = document.getElementById('bbody');

        document.addEventListener('click', function(event) {
            var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
          

                if (!isClickInsideElement  ) {
                    setrowx(1);
                }

            
            
        });

      flag =1;
      
      }
    
  return (

    <div id="bbody">
    
      <form onsubmit="return false;" className="create-note">

      {
        
        
        (rowx==4)? <input name="title" placeholder="Title"   onChange={   handlechange    }  value={inputw.title} /> : <none></none>
        
      }
        <textarea name="content" id="opio" placeholder="Take a note..." rows={rowx} value={inputw.content}   onClick={()=>{setrowx(4)}} onChange={ (eq) => { handlechange(eq) ; console.log(flag) }}  />
       {

        (rowx==4)? <Soom in={true} style={{ transitionDelay:   '200ms'   }}><MyComponent    /></Soom> : <none></none>

       }
        
      </form>
       
    </div>
  );
}

export default CreateArea;
