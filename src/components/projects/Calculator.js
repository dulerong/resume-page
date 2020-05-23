import React from 'react'

class Calculator extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <span className='projectFrame'>
            <h1>{text[language].projectCalculator[0]}</h1>
            <div className='projectImg'>
              <img src={this.props.Calculator} alt=''/>  
            </div>
            <div className='imgDetail'>
                <h2>{text[language].projectCalculator[1]}</h2>
                <p>{text[language].projectCalculator[2]}</p>
                <p>{text[language].projectCalculator[3]}</p>
                <div className='link'>
                  <a
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