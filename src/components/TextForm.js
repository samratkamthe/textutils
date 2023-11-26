import React,{useState}from 'react'

export default function TextForm(props) {
const UpperCase=()=>{
    console.log("the button is clicked ");
    let ConText= text.toUpperCase();
    setText(ConText)
    props.Alert("Text is successfully converted to UpperCase ","info")

}
const LowerCase=()=>{
    console.log("the button is clicked ");
    let ConText= text.toLowerCase();
    setText(ConText)
    props.Alert("Text is successfully converted to LowerCase","info")

}
const ClearCase=()=>{
    console.log("the button is clicked ");
    let ConText= '';
    setText(ConText)
    props.Alert("TextArea is Successfully cleared","info")

}
const handle=(event)=>{
    console.log("hello")
    setText(event.target.value)
}
const copyToClipboard=() =>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.Alert("Text is Copied","success");
   
  }
  const [newly, setNewly] = useState('lon');
  const togglefontss = () => {
    setNewly((prevNewly) => (prevNewly === 'fon' ? 'don' : 'fon'));
  };


    const [text ,setText]=useState('')
  return (
    <>
    <div>
<div className="mb-3">
    <h1 className={"line"} style={{color:props.mode==='light'?'black':'#afdfff'}}>{props.heading}</h1>
  <label for="myBox" className="form-label"></label>
  <textarea  className={`form-control `}value={text} onChange={handle} style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder='Write your text here...'></textarea>
</div>
<button disabled={text.length===0} className={`btn btn-primary mx-2 my-2 `} onClick={UpperCase}>convert to Upper case </button>
<button disabled={text.length===0} className={`btn btn-primary mx-2 my-2`}  onClick={LowerCase}>convert to Lower case </button>
<button disabled={text.length===0} className={`btn btn-primary mx-2 my-2`}  onClick={ClearCase}>Clear case            </button>
<button disabled={text.length===0} className={`btn btn-primary mx-2 my-2`}  onClick={copyToClipboard}>Copy Text       </button>
    </div>
    <div className=" container mb-3">
        <h1 className={`text-${props.mode==='light'?'dark':'light'} line `}>Text Calculator</h1>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}><strong>Total Words: </strong>{text.split(/\s+/).filter(word => word !== '').length }<strong> Total Characters: </strong> {text.length} </p>
        <p className={`text-${props.mode==='light'?'dark':'light'}`}><strong>This text will be read in the following minutes: </strong> {0.008*text.split(' ').length}</p>
        <h2 className={`text-${props.mode==='light'?'dark':'light'} line`}>Preview</h2>
        <p className={`text-${props.mode==='light'?'dark':'light'} ${newly}`}>{text.length>0?text:"Enter Something in Textarea!"}</p>
        <button disabled={text.length===0} className={`btn btn-primary mx-2 my-2`}  onClick={togglefontss}> Try fonts </button>


    </div>
    </>

  )
}
