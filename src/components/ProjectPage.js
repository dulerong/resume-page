import React from 'react'
import JapanPop from './projects/JapanPop.js'
import EmailUI from './projects/EmailUI.js'
import Calculator from './projects/Calculator.js'
import DrumMachine from './projects/DrumMachine.js'

class ProjectPage extends React.Component {
    render(){
        let slideBox = this.props.showProject? 
        'position-absolute top-150 left-50 transform bg-white border-5px-pink border-radius height-90vh width-90vw transition overflow box-shadow' :
        'position-absolute top-150 left-150 transform bg-white border-5px-pink border-radius height-90vh width-90vw transition overflow box-shadow'

        let pageDisplay = this.props.nextPage?
        'position-relative flex-space-between box-sizing width-200pct height-100pct transition margin-l-minus100pct':
        'position-relative flex-space-between box-sizing width-200pct height-100pct transition'

        let nextPageButton = this.props.nextPage?
        'position-absolute left-100 top-0 transform-x width-150px padding-y-10px bg-black font-color-white hover transition':
        'position-absolute left-50 top-0 transform-x width-150px padding-y-10px bg-black font-color-white hover transition'

        let closePageButton = this.props.nextPage?
        'position-absolute left-100 bottom-0 transform-x width-150px padding-y-10px bg-black font-color-white hover transition':
        'position-absolute left-50 bottom-0 transform-x width-150px padding-y-10px bg-black font-color-white hover transition'

        let nextButtonDisplay = this.props.nextPage?
        'Previous Page':'Next Page'

        let nextArrowDisplay = this.props.nextPage?
        'display-none':''

        let prevArrowDisplay = this.props.nextPage?
        '':'display-none'

        return(
        <div className={slideBox}>
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
                  CLICK TO CLOSE
              </button>
            </div>
        </div>
        )
    }
}

export default ProjectPage