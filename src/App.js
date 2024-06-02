import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter , Route,Routes } from "react-router-dom";

function App() {

  const [Mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (massage, type)=>{
    setalert({
      msg:massage,
      type: type

    })
    setTimeout(() => {
      setalert(null);
      
    }, 2000);

  }

  let toggleMode = ()=>{
    if(Mode ==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#2b3136';
      showAlert("Dark mode enabled" , "success");
      //dynamically changes the title
      document.title = 'TextUtils - Dark';
    }
    else{
      setMode('light') ;
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled" , "success");
      document.title = 'TextUtils - Light';
    }
  }
  return (
    <> 
    <BrowserRouter>  
    <Navbar title = "TextUtils" about = "About" mode ={Mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
      <Routes>
            <Route  exact path="/About" element={<About mode = {Mode}/>}>
            </Route>
            <Route exact path="/" element={
              <TextForm   showAlert = {showAlert}heading = " Analyze your text " mode = {Mode}/>
              }
            ></Route>
      </Routes>
    </div>
    </BrowserRouter> 
    </>
 
  );
}

export default App;
