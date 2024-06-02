import { useState,useEffect } from "react";

export default function Saved(){
    const[giphs,setgiphs]=useState([]);
    const giphys = localStorage.getItem('getgiphys');
    useEffect(()=>{
        if(giphys){
            setgiphs(JSON.parse(giphys));

         } 
    },[])
    function handleRemove(src){
        const ls=JSON.parse(giphys);
        console.log(ls);
      for(let i=0;i<ls.length;i++){
        if(ls[i]===src){
          ls.splice(i,1);
        }
      }
      localStorage.setItem('getgiphys',JSON.stringify(ls));
      window.location.reload();
    }
    return(
        <>
     {(giphs.length>0)?giphs.map(e=>(
        <div>
         <img key={e} src={e} height="500" width="500" alt="no giphy"/>
         <button onClick={() =>handleRemove(e)}>Remove</button>
         </div>)):<div>No Items Found</div>}
         </>
    );
}