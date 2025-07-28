//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar.js'
import React, {useState} from 'react';
import TextForm from './components/TextForm.js'
import About from './components/About.js'
import Alert from './components/Alert.js';
function App() {
  const [mode, setMode] =useState('light');
  const [col, setColor] = useState('black');
  const [alerts, setAlert] = useState(null);
  function showAlert(message, type){
    setAlert({msg:message, typ:type})
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  function toggleMode(){
    if(mode === 'light'){
      setMode('dark')
      setColor('white')
      document.body.style.backgroundColor='black';
      showAlert("dark mode enabled", "success")
      document.title="textutils - dark Mode"
    }else{
      document.body.style.backgroundColor='white';
      document.body.style.transition = 'background 1s'
      setMode('light')
      setColor('black')
      showAlert("light mode enabled", "success")
      document.title="textutils - light Mode"
    }
  }
  return (
    <>
      <Router>
      <NavBar title="TextUtils" aboutText="about us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alerts}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/"
              element={<TextForm style={{color: col}} heading="Enter Text Here To Analyze" showAlert={showAlert}/>}/>
            <Route exact path="/about"
              element={<About heading="about us" />}
            />
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
