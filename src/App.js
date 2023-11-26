
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]=useState('light');
  const [alert ,setAlert]=useState(null)
  const showAlert=(message,type )=>{
    setAlert({
      msg:message,
      type:type,
      stat:"successfully"

    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40'
      showAlert("Enabled Dark mode ","info")
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Enabled light mode ","success")
     


      

    }
  }
  const RtoggleMode=()=>{
   
      setMode('light');
      document.body.style.backgroundColor='pink'
      showAlert("Special Rose Mode on ","success")
  }

  return (
    <>

<Navbar title="Text Manipulator" aboutText="About" mode={mode} toggleMode={toggleMode} RtoggleMode={RtoggleMode}/>
<Alert alert={alert}/>


<div class="container my-3">

<TextForm heading="TEXT MANIPULATOR"  mode={mode} toggleMode={toggleMode} Alert={showAlert}/>
{/* <About mode={mode} /> */}
     
</div>
</>
  
  );
}

export default App;
