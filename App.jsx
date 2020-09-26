import React, { Component } from 'react';
import Header from './components/Header'
import './App.css'
import BasicTextFields from './components/text_field'
/*Class components
class App extends Component{
  render(){ //method
      let name="Ammara"                        
    return(    return j6   compain html and javascript


      <div>
        <h1>Hello world{name}</h1>
      </div>
    )
  }
}



function App(){
  return(
    <div>
      <h1>
        Hello World
      </h1>
    </div>
  )
}

class App extends Component {

  render() {
    let todo = [{ text: "Ammara" }, { text: "Atiqa" }]; // two objects
    return (
      <div>
        <ul>
          {todo.map((item, index) => {

            return <li key={index}>{item.text}</li>
           // console.log(item)
          })}
        </ul>
      </div>
    )
  }
}*/


class App extends Component{  

  render(){ // attribute=prop   App say data pass karan toh wo prop hota hai
    return(
      <div  >
        <Header/>
        <h1 style={{backgroundColor:'red' , textAlign:"center"}} >Hello World</h1>  
         <BasicTextFields/>
        <button type="button" className="btn btn-primary">Primary</button>
        
        <Footer/>
      </div>
      

      
    )
  }
}


class Footer extends Component{

  render(){
    return(
      <div  className="footer">
       
        <h1>Footer</h1>
      </div>

      
    )
  }
}





export default App;
