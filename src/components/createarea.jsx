import React, { useState } from "react";

function CreateArea(props) {

    const [inputw , setinput] = useState(  {
        key: 0,
        title: "",
        content:""
      } );



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

    
  return (
    <div>
      <form>
        <input name="title" placeholder="Title"   onChange={   handlechange    }  value={inputw.title} />
        <textarea name="content" placeholder="Take a note..." rows="3" value={inputw.content}  onChange={ (eq) => { handlechange(eq) }}  />
        <button onClick={handlesubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
