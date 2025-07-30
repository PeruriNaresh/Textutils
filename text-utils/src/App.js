  import './App.css';
  import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
  import TextUtils from './components/TextUtils';
  import About from './components/About';
  import NavBar from './components/NavBar';
  import { useState } from 'react';
  import Alert from './components/Alert';
  function App() {
    const [mode, setMode]=useState('light');
    const [color,setColor]=useState('black');
    const [alert, setAlert]=useState(null);
    const [imgSrc, setSrc]= useState('/sun.svg');
    function showAlert(message, type){
        const alrt= {
          message:message,
          type:type
        }
        setAlert(alrt);
        setTimeout(() => {
          setAlert(null)
        }, 2000);
    }
    function toggleMode(){
      if(mode==='light'){
        setMode('dark')
        setColor('white')
        document.body.style.backgroundColor='black';
        showAlert("dark mode enabled","success")
        document.body.style.transition='backGround 1.5s'
        setSrc('/moon-fill.svg')
      }else{
        setMode('light')
        setColor('black')
        document.body.style.backgroundColor='white';
        showAlert("light mode enabled","success")
        setSrc('/sun.svg')
      }
    }
    return (
      <>
          <Router>
          <NavBar mode={mode} toggleMode={toggleMode} color={color} imgSrc={imgSrc} />
          <div className='mt-3' style={{color:color}}>
          <Alert alert={alert}/>
            <Routes>
              <Route path="/" element={<TextUtils showAlert={showAlert}/>}/>
            </Routes>
            <Routes>
              <Route path="/about" element={<About/>}/>
            </Routes>
          </div>
          </Router>
      </>
    );
  }
  export default App;
