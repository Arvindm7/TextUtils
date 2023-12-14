import React from 'react'

export default function About(props) {

    // const [mystyle,setMystyle] = useState( {
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let mystyle = {
        color: props.mode === 'dark'? 'white':'rgb(43, 49, 54)',
        backgroundColor : props.mode === 'dark' ? 'rgb(43, 49, 54)':'white'
    }
    
  return (
    <div className='container' style={mystyle}>
        <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle}>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze your text</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
            </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={mystyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={mystyle}>
            Texutils is a free character counter tool that provide instant character count and word count statics for a given text. Textutils reports the number of words and characters. Thus it is sweetable for writing text with character/word limit.
            </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"  style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <strong> Browser compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
            This software works on every browser. It suits to count charcters in facebookm blog, books, any doucment, pdf, essay etc.
            </div>
             </div>
            </div>
            </div>            
    </div>
  )
}
