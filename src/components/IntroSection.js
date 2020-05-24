import React from 'react'
import IntroPage from './IntroPage.js'

class IntroSection extends React.Component{
    render(){
        let text = this.props.text
        let language = this.props.language
        return(
        <div className='introSection' id='about'>
            <IntroPage
              text={text}
              language={language}
              handlePage={this.props.handlePage}
              introPageNumber={this.props.introPageNumber}
              introFirstPage={this.props.introFirstPage}
              introLastPage={this.props.introLastPage}
              windowClose={this.props.windowClose}
              showIntro={this.props.showIntro} 
              handleButton={this.props.handleButton}
              CodeyDu={this.props.CodeyDu}/>
            <img className='coverImage' src={this.props.gozenzakiFront} alt='' />
            <h1 className='textEffectTop'>{text[language].coverImage}</h1>
            <h1 className='textEffectMiddleTop'>{text[language].coverImage}</h1>
            <h1 className='textEffectMiddleBottom'>{text[language].coverImage}</h1>
            <h1 className='textEffectBottom'>{text[language].coverImage}</h1>
            <p className='title'>{text[language].myNameIs}<i className="fa fa-bug" /></p>
            <button 
              id='intro'
              onClick={this.props.handleButton}>
                {text[language].clickToKnowCodey}
            </button>
        </div>
        )
    }
}

export default IntroSection