import React from 'react'

class Calculator extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <span className='projectFrame hover-display-detail hover-transform-scale font-family-arial'>
            <p className='margin-20px font-family-lobster font-size-30px'>{text[language].projectCalculator[0]}</p>
            <div className='flex-center overflow position-relative'>
              <img className='projectImg' src={this.props.Calculator} alt=''/>  
            </div>
            <div className='imgDetail'>
                <h1>{text[language].projectCalculator[1]}</h1>
                <p className='margin-b-10px'>{text[language].projectCalculator[2]}</p>
                <p>{text[language].projectCalculator[3]}</p>
                <div className='text-align margin-10px'>
                  <a 
                    className='inline-block bg-white font-color-black padding-10px' 
                    href="https://codepen.io/dulerong/full/OJJdVaz/" 
                    target="_blank"
                    rel="noopener noreferrer">
                    {text[language].projectCalculator[4]}
                  </a>
                </div>
              </div>
        </span>
        )
    }
}

export default Calculator