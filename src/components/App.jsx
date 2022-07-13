import React, { useState } from "react";
import Header from './header';
import Footer from './footer';
import Note from './note';
import notescont from "../notes.js";
import CreateArea from "./createarea";


function  App ()
{

    var inmyown = 11;
    var noop = [] ;
    var [notesc   , setnotesc] = useState([]);

    // {
    //     key: 1,
    //    title: "Delegation",
    //   content:"Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
    //   }


    function ondeletego(e)
    {
              
        console.log(e);
        var todeleteindex = e  ;

      setnotesc(  notesc.filter(function (elem,index) { 
               
            return elem.key != todeleteindex;

        }))

    }

       function syncthrough(e)
       {
        e.key = (notesc.length  + 1);
         
              console.log(noop);
              console.log(e);
               
               
              console.log(noop);
              
              setnotesc([...notesc,...[e]]);
             
        
        
        
       }
       

    return(

        <div>
        <Header/>
        <CreateArea tosyncf={syncthrough}/>
         {
            notesc.map(function (tmp){


           return( <Note
                  key = {tmp.key}
                  notkey = {tmp.key}
                  title={tmp.title}
                  content={tmp.content}
                  deletethis = {ondeletego}
/>)

         }) }  
            <Footer/>
        </div>
    )
}



export default App;