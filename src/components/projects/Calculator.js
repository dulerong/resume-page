import React from 'react'

class Calculator extends React.Component {
    render(){
        return(
        <span className='projectFrame hover-display-detail hover-transform-scale font-family-arial'>
            <p className='margin-20px font-family-lobster font-size-30px'>Calculator</p>
            <div className='flex-center overflow position-relative'>
              <img className='projectImg' src={this.props.Calculator} alt=''/>  
            </div>
            <div className='imgDetail'>
                <h1>Title: Calculator UI</h1>
                <p className='margin-b-10px'>Modeled to work as a real Calculator</p>
                <p>Front-End: React.js</p>
                <div className='text-align margin-10px'>
                  <a 
                    className='inline-block bg-white font-color-black padding-10px' 
                    href="https://codepen.io/dulerong/full/OJJdVaz/" 
                    target="_blank"
                    rel="noopener noreferrer">
                    CLICK TO SEE
                  </a>
                </div>
              </div>
        </span>
        )
    }
}

export default Calculator