import React from 'react'

class DrumMachine extends React.Component {
    render(){
        return(
        <span className='projectFrame hover-display-detail hover-transform-scale font-family-arial'>
            <p className='margin-20px font-family-lobster font-size-30px'>Drum Machine</p>
            <div className='flex-center overflow position-relative'>
              <img className='projectImg' src={this.props.DrumMachine} alt=''/>
            </div>
            <div className='imgDetail'>
                <h1>Title: Drum machine</h1>
                <p className='margin-b-10px'>Modeled after an imaginary DJ table</p>
                <p>Front-End: React.js</p>
                <p>Sound: AWS</p>
                <div className='text-align margin-10px'>
                  <a 
                    className='inline-block bg-white font-color-black padding-10px ' 
                    href="https://codepen.io/dulerong/full/MWYxWWe" 
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

export default DrumMachine