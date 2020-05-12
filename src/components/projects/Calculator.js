import React from 'react'

class Calculator extends React.Component {
    render(){
        return(
        <span className='border-1px width-25pct inline-block box-sizing'>
            <p className='margin-20px font-family-lobster font-size-30px'>Calculator</p>
            <div className='flex-center overflow position-relative hover-display-detail hover-transform-scale font-family-arial'>
              <img className='projectImg' src={this.props.Calculator} alt=''/>
              <div className='imgDetail'>
                <h1>Title: Calculator UI</h1>
                <p className='margin-b-10px'>Modeled to work as a real Calculator</p>
                <p>Front-End: React.js</p>
                <div className='text-align'>
                  <a 
                    className='inline-block bg-white font-color-black padding-10px ' 
                    href="https://codepen.io/dulerong/full/OJJdVaz/" 
                    target="_blank">
                    CLICK TO SEE
                  </a>
                </div>
              </div>
            </div>
        </span>
        )
    }
}

export default Calculator