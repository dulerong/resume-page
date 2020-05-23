import React from 'react'

class TimerClock extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <span className='projectFrame'>
            <h1>{text[language].projectTimerClock[0]}</h1>
            <div className='projectImg'>
              <img src={this.props.TimerClock} alt=''/>
            </div>
            <div className='imgDetail'>
                <h2>{text[language].projectTimerClock[1]}</h2>
                <p>{text[language].projectTimerClock[2]}</p>
                <p>{text[language].projectTimerClock[3]}</p>
                <div className='link'>
                  <a 
                    href="https://codepen.io/dulerong/full/wvBweEG" 
                    target="_blank"
                    rel="noopener noreferrer">
                    {text[language].projectTimerClock[4]}
                  </a>
                </div>
              </div>
        </span>
        )
    }
}

export default TimerClock