import React from 'react'
import IntroPage from './IntroPage.js'

class IntroSection extends React.Component{
    render(){
        let text = this.props.text
        let language = this.props.language
        return(
        <div className='flex-center position-relative height-100vh box-sizing border-b-1px' id='about'>
            <p className='font-family-lobster font-size-30px'>{text[language].myNameIs}<i className="fa fa-bug" /></p>
            <p>
              <button 
                id='intro'
                className='padding-x-30px padding-y-10px bg-black font-color-white hover'
                onClick={this.props.handleButton}>
                  {text[language].clickToKnowCodey}
              </button>
            </p>
            <IntroPage
              text={text}
              language={language}
              windowClose={this.props.windowClose}
              showIntro={this.props.showIntro} 
              handleButton={this.props.handleButton}
              CodeyDu={this.props.CodeyDu}/>
        </div>
        )
    }
}

export default IntroSection