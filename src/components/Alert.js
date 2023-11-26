import React from 'react'
const captalizing=(word)=>{
    let lower=word.toLowerCase()
    return lower.charAt(0).toUpperCase()+lower.slice(1);

}

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
   {props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{captalizing(props.alert.stat)}</strong>:{props.alert.msg}
    
    </div>}
  </div>
  )
}
