// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     // we cannot return more than one tag so here we are returning div tag but if we still want to return the any other thing then we can enclose it in a <> </> for eg
//     //also we write whole code in one file in react 
//     <>
//     <h1>HI SAMRAT</h1>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with samrat
//         </a>
//       </header>
//     </div>
//     </>
//   );
// }

// export default App;

// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';//here we are importing the css file 
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name="samrat"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      // document.title='TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Enabled light mode ","success")
      // document.title='TextUtils - light Mode'


      

    }
  }
  const RtoggleMode=()=>{
   
      setMode('light');
      document.body.style.backgroundColor='pink'
      showAlert("Special Rose Mode on ","success")
  }

  return (
    <>
<Router>
<Navbar title="Text Manipulator" aboutText="About" mode={mode} toggleMode={toggleMode} RtoggleMode={RtoggleMode}/>
<Alert alert={alert}/>
{/* if we do isrequired then we have to compulsoruy send values  */}
{/* <Navbar/> */}

<div class="container my-3">



      <Routes>
        <Route exact path="/" element={ <TextForm heading="TEXT MANIPULATOR"  mode={mode} toggleMode={toggleMode} Alert={showAlert}/>} />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
   



{/* <TextForm heading="TEXT MANIPULATOR"  mode={mode} toggleMode={toggleMode} Alert={showAlert}/> */}
{/* <About/> */}

</div>
</Router>
</>
    // class = className 
    // for = htmlFor 
    // tabindex=tabIndex
// whatever is present in the curly bracket is termed as a javascript or we can say it will be resolve as javascript 
  //  <div className="blank">lovely</div>
  //Babel compile JSX in proper javascript
  //some tag which doesnt close by its own then we end it by putting / at the end before the bracket 
  );
}

export default App;
