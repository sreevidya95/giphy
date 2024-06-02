import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function App() {
  const[gihs,setGipgy]=useState([]);
  useEffect(()=>{
       fetch(`https://api.giphy.com/v1/gifs/trending?rating=g&api_key=xUzTLyaAiiOo2yMDbVtOFEJMNhogPBn3`,{
            method:'get'
       }).then(response=>response.json())
       .then(data=>{
        // console.log(data.data);
      //  data.data.forEach(element => {
      //         // console.log(element.images.original.url);
      //         // setMyArray(oldArray => [...oldArray, newElement]);
      //       //  gihs.push({'src':element.images.original.url,'id':element.id});
      //       });
           setGipgy(data.data);
           });
  },[]);
  // console.log(gihs);
  function handleSave(src){
    let itemsList = []

        const getgiphys = localStorage.getItem('getgiphys');
        if(getgiphys){
            itemsList = JSON.parse(localStorage.getItem('getgiphys'));
            itemsList.push(src)
            localStorage.setItem('getgiphys', JSON.stringify(itemsList));
        }else{
            itemsList.push(src)
            localStorage.setItem('getgiphys', JSON.stringify(itemsList));
        }
       alert("added image successfully");
  }
  return (
    <>
   <h1>Home Page that Displays all giphys</h1><br/>
   <Link to='/search'>search for the image you want</Link><br/>
   <Link to='/saved'>saved images</Link><br/>
   <div>
    {gihs.map(element=>(
   <div>
    <img key={element.id} src={element.images.original.url} height="500" width="500" alt="no giphy"/>
    <button onClick={() =>handleSave(element.images.original.url)}>Save</button>
    </div>))}
    </div> 
   </>
  );
}

export default App;
