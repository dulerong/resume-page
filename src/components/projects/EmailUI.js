import React from 'react'

class EmailUI extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <span className='projectFrame hover-display-detail hover-transform-scale font-family-arial'>
            <p className='margin-20px font-family-lobster font-size-30px'>{text[language].projectEmailUI[0]}</p>
            <div className='flex-center overflow position-relative'>
              <img className='projectImg' src={this.props.EmailViewer} alt=''/>
            </div>
            <div className='imgDetail'>
                <h1>{text[language].projectEmailUI[1]}</h1>
                <p className='margin-b-10px'>{text[language].projectEmailUI[2]}</p>
                <p className='margin-b-10px'>{text[language].projectEmailUI[3]}</p>
                <p className='margin-b-10px'>{text[language].projectEmailUI[4]}</p>
                <p>{text[language].projectEmailUI[5]}</p>
                <div className='text-align margin-10px'>
                  <a 
                    href="https://dulerong.github.io/email-user-interface/"
                    className='inline-block bg-white font-color-black padding-10px'
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