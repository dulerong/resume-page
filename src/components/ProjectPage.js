import React from 'react'
import JapanPop from './projects/JapanPop.js'
import EmailUI from './projects/EmailUI.js'
import Calculator from './projects/Calculator.js'
import DrumMachine from './projects/DrumMachine.js'
import TimerClock from './projects/TimerClock.js'
import RandomQuote from './projects/RandomQuote.js'

class ProjectPage extends React.Component {
    render(){
        let text = this.props.text
        let language = this.props.language

        let slideBox = this.props.showProject?
        'projectSlideBox left-50' : 'projectSlideBox left-150'

        let pageDisplay = 'pageDisplay page'+this.props.projectPageNumber
        
        let prevPage = this.props.projectPageNumber === this.props.projectFirstPage ? 'display-none' : 'prevPage'
        let nextPage = this.props.projectPageNumber === this.props.projectLastPage ? 'display-none' : 'nextPage'
        
        let dot1 = this.props.projectPageNumber === 1 ? 'dot bg-black' : 'dot'
        let dot2 = this.props.projectPageNumber === 2 ? 'dot bg-black' : 'dot'
        let dot3 = this.props.projectPageNumber === 3 ? 'dot bg-black' : 'dot'
        let dot4 = this.props.projectPageNumber === 4 ? 'dot bg-black' : 'dot'
        let dot5 = this.props.projectPageNumber === 5 ? 'dot bg-black' : 'dot'
        let dot6 = this.props.projectPageNumber === 6 ? 'dot bg-black' : 'dot'

        return(
        <div className={slideBox}>
          <div className='dotDisplay'>
            <span id ='projectpage1' className={dot1} onClick={this.props.handlePage}></span>
            <span id ='projectpage2' className={dot2} onClick={this.props.handlePage}></span>
            <span id ='projectpage3' className={dot3} onClick={this.props.handlePage}></span>
            <span id ='projectpage4' className={dot4} onClick={this.props.handlePage}></span>
            <span id ='projectpage5' className={dot5} onClick={this.props.handlePage}></span>
            <span id ='projectpage6' className={dot6} onClick={this.props.handlePage}></span>
          </div>
          <div onClick={this.props.handlePage} id='projectPrevPage' className={prevPage}>
            <i id='projectPrevPage' className="fa fa-arrow-left" />
          </div>
          <div onClick={this.props.handlePage} id='projectNextPage' className={nextPage}>
            <i id='projectNextPage' className="fa fa-arrow-right" />
          </div>
          <div
            className='closeButton' 
            onClick={this.props.handleButton}>
              <i id='project' className="fa fa-window-close"></i>
          </div>
          <div className='projectContainer'>
            <div className={pageDisplay}>
              <JapanPop JapanPopulation={this.props.JapanPopulation} text={text} language={language}/>
              <EmailUI EmailViewer={this.props.EmailViewer} text={text} language={language}/>
              <Calculator Calculator={this.props.Calculator} text={text} language={language}/>
              <DrumMachine DrumMachine={this.props.DrumMachine} text={text} language={language}/>
              <TimerClock TimerClock={this.props.TimerClock} text={text} language={language}/>
              <RandomQuote RandomQuote={this.props.RandomQuote} text={text} language={language}/>
            </div>
          </div>
        </div>
        )
    }
}

export default ProjectPage