import React from 'react'
import JapanPop from './projects/JapanPop.js'
import EmailUI from './projects/EmailUI.js'
import Calculator from './projects/Calculator.js'
import DrumMachine from './projects/DrumMachine.js'

class ProjectPage extends React.Component {
    render(){
        let text = this.props.text
        let language = this.props.language

        let slideBox = this.props.showProject? 
        'position-absolute top-150 left-50 transform bg-white border-5px-pink border-radius height-75vh width-75vw transition overflow-responsive box-shadow' :
        'position-absolute top-150 left-150 transform bg-white border-5px-pink border-radius height-75vh width-75vw transition overflow-responsive box-shadow'

        let pageDisplay = this.props.nextPage?
        'position-relative flex-space-between box-sizing width-200pct height-100pct transition margin-l-minus100pct':
        'position-relative flex-space-between box-sizing width-200pct height-100pct transition'

        let mobilePageDisplay = 'border-1px box-sizing width-100pct height-400pct'

        let nextPageButton = this.props.nextPage?
        'position-absolute left-100 top-0 transform-x width-150px padding-y-10px bg-black font-color-white hover transition':
        'position-absolute left-50 top-0 transform-x width-150px padding-y-10px bg-black font-color-white hover transition'

        let closePageButton = this.props.nextPage?
        'position-absolute left-100 bottom-0 transform-x width-150px padding-y-10px bg-black font-color-white hover transition':
        'position-absolute left-50 bottom-0 transform-x width-150px padding-y-10px bg-black font-color-white hover transition'

        let nextButtonDisplay = this.props.nextPage?
        text[language].projectSection.prevPageButton : text[language].projectSection.nextPageButton

        let nextArrowDisplay = this.props.nextPage?
        'display-none':''

        let prevArrowDisplay = this.props.nextPage?
        '':'display-none'

        return(
        <div className={slideBox}>
            <div className='desktop'>
              <div className={pageDisplay}>
                <JapanPop JapanPopulation={this.props.JapanPopulation}/>
                <EmailUI EmailViewer={this.props.EmailViewer}/>
                <Calculator Calculator={this.props.Calculator}/>
                <DrumMachine DrumMachine={this.props.DrumMachine}/>
                <button 
                  id='nextPage'
                  onClick={this.props.handleButton}
                  className={nextPageButton}>
                    <span className={prevArrowDisplay}><i className="fa fa-arrow-left" /></span> {nextButtonDisplay} <span className={nextArrowDisplay}><i className="fa fa-arrow-right" /></span>
                </button>
                <button
                  id='project'
                  className={closePageButton}
                  onClick={this.props.handleButton}>
                    {text[language].clickToClose}
                </button>
              </div>
            </div>
            <div className='mobile height-100pct'>
              <div className={mobilePageDisplay}>
                <JapanPop JapanPopulation={this.props.JapanPopulation}/>
                <EmailUI EmailViewer={this.props.EmailViewer}/>
                <Calculator Calculator={this.props.Calculator}/>
                <DrumMachine DrumMachine={this.props.DrumMachine}/>
                <div
                  className='position-absolute left-100 top-0 transform-x font-size-30px hover-cursor' 
                  onClick={this.props.handleButton}>
                    <i id='project' className="fa fa-window-close"></i>
                </div>
              </div>
            </div>
        </div>
        )
    }
}

export default ProjectPage