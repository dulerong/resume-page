import React from 'react'

class TimerClock extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <span className='projectFrame'>
            <h1>{text[language].projectRandomQuote[0]}</h1>
            <div className='projectImg'>
              <img src={this.props.RandomQuote} alt=''/>
            </div>
            <div className='imgDetail'>
                <h2>{text[language].projectRandomQuote[1]}</h2>
                <p>{text[language].projectRandomQuote[2]}</p>
                <p>{text[language].projectRandomQuote[3]}</p>
                <div className='link'>
                  <a 
                    href="https://codepen.io/dulerong/full/yLBaXQZ" 
                    target="_blank"
                    rel="noopener noreferrer">
                    {text[language].projectRandomQuote[4]}
                  </a>
                </div>
              </div>
        </span>
        )
    }
}

export default TimerClock