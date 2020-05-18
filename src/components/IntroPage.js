import React from 'react'
import Personal from './background/Personal.js'
import Programming from './background/Programming.js'


class IntroPage extends React.Component {
    render(){
        let slideBox = this.props.showIntro? 
        'position-absolute left-50 top-50 transform bg-white border-5px-pink border-radius height-75vh width-75vw transition box-shadow' :
        'position-absolute left-150 top-50 transform bg-white border-5px-pink border-radius height-75vh width-75vw transition box-shadow'

        let text = this.props.text
        let language = this.props.language
        return(
        <div className={slideBox}>
            <div className='desktop position-relative flex-space-between box-sizing height-100pct'>
              <Personal
                text={this.props.text}
                language={this.props.language}
                CodeyDu={this.props.CodeyDu}/>
              <Programming                 
                text={this.props.text}
                language={this.props.language}/>
              <button 
                id='intro'
                className='position-absolute right-0 bottom-0 padding-x-30px padding-y-10px bg-black font-color-white hover' 
                onClick={this.props.handleButton}>
                  {text[language].clickToClose}
              </button>
            </div>
            <div className='mobile position-relative box-sizing height-100pct overflow-scroll'>
              <Personal
                text={this.props.text}
                language={this.props.language}
                CodeyDu={this.props.CodeyDu}/>
              <Programming 
                text={this.props.text}
                language={this.props.language}/>
              <div
                className='position-absolute left-100 top-0 transform-x font-size-30px hover-cursor' 
                onClick={this.props.handleButton}>
                  <i id='intro' className="fa fa-window-close"></i>
              </div>
            </div>
        </div>
        )
    }
}

export default IntroPage