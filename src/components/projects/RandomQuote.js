import React from 'react'

class TimerClock extends React.Component {
    render(){
        return(
        <span className='projectFrame hover-display-detail hover-transform-scale font-family-arial'>
            <p className='margin-20px font-family-lobster font-size-30px'>Random Quote Machine</p>
            <div className='flex-center overflow position-relative'>
              <img className='projectImg' src={this.props.RandomQuote} alt=''/>
            </div>
            <div className='imgDetail'>
                <h1>Title: Random Quote Machine</h1>
                <p className='margin-b-10px'>Randomly displays Codey's favorite quotes in life</p>
                <p>Front-End: jQuery</p>
                <div className='text-align margin-10px'>
                  <a 
                    className='inline-block bg-white font-color-black padding-10px ' 
                    href="https://codepen.io/dulerong/full/yLBaXQZ" 
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

export default TimerClock