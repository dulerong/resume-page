import React from 'react'

class EmailUI extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <span className='projectFrame'>
            <h1>{text[language].projectEmailUI[0]}</h1>
            <div className='projectImg'>
              <img src={this.props.EmailViewer} alt=''/>
            </div>
            <div className='imgDetail'>
                <h2>{text[language].projectEmailUI[1]}</h2>
                <p>{text[language].projectEmailUI[2]}</p>
                <p>{text[language].projectEmailUI[3]}</p>
                <p>{text[language].projectEmailUI[4]}</p>
                <p>{text[language].projectEmailUI[5]}</p>
                <div className='link'>
                  <a 
                    href="https://dulerong.github.io/email-user-interface/"
                    target="_blank"
                    rel="noopener noreferrer">
                    {text[language].projectEmailUI[6]}
                  </a>
                </div>
              </div>
        </span>
        )
    }
}

export default EmailUI