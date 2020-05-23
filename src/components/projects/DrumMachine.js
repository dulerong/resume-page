import React from 'react'

class DrumMachine extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <span className='projectFrame'>
            <h1>{text[language].projectDrumMachine[0]}</h1>
            <div className='projectImg'>
              <img src={this.props.DrumMachine} alt=''/>
            </div>
            <div className='imgDetail'>
                <h2>{text[language].projectDrumMachine[1]}</h2>
                <p>{text[language].projectDrumMachine[2]}</p>
                <p>{text[language].projectDrumMachine[3]}</p>
                <div className='link'>
                  <a
                    href="https://codepen.io/dulerong/full/MWYxWWe" 
                    target="_blank"
                    rel="noopener noreferrer">
                    {text[language].projectDrumMachine[4]}
                  </a>
                </div>
              </div>
        </span>
        )
    }
}

export default DrumMachine