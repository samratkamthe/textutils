import React from 'react'

export default function About(props) {
    
    let myStyle={
      color:props.mode==='dark'?'white':'#343a40',
      backgroundColor:props.mode==='dark'?'#343a40':'white',
      outline:'none'
    }

  return (
    <div className="container" style={myStyle}>
        <h2>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong> Whats Textutiles? </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
        <strong>Textutiles</strong> is simply a text editor in the needed format on just onclick <code>Start Your Journey now!</code>.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Whats it Offers? </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
        <strong>MUltiple Functions Such as .</strong> UpperCase connversion,LowerCase conversion and Clearing the text space . <code>Try them</code>.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong> INFO  </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle} >
        <strong>Developed by <code>Samrat Kamthe</code> </strong> Various and Multiple Versatile inbuilt function working Since 2023.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
