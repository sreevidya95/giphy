import { useState } from "react";
export default function Search(){
    const[image,setImage]=useState([]);
    const[datas,setData]=useState('');
    function getGiphs(){
        setData(i=>i='');
        fetch(`https://api.giphy.com/v1/gifs/search?rating=g&api_key=xUzTLyaAiiOo2yMDbVtOFEJMNhogPBn3&q=${datas}`,{
            method:"get"
        }).then(response=>response.json())
        .then(data=>{
            // console.log(data.data.length)
            if(data.data.length>0){
                setImage(data.data);
            }
            else{
                alert("no images matches with given search");
            }
            // console.log(data);
            // setImage(data);
        });
    }
    
    return(
        <div>
          <input type="text" value={datas} onChange={(e)=>setData(e.target.value)}/>
          <input type="button" onClick={getGiphs} value="submit"/>
          <div>{image.map(element=>
    <img key={element.id} src={element.images.original.url} height="500" width="500" alt="no giphy"/>)}</div> 
        </div>
    );
}