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

        let pageDisplay = 'pageDisplay page'+this.props.mobilePageNumber
        
        let prevPage = this.props.mobilePageNumber === this.props.mobileFirstPage ? 'display-none' : 'prevPage'
        let nextPage = this.props.mobilePageNumber === this.props.mobileLastPage ? 'display-none' : 'nextPage'
        
        let dot1 = this.props.mobilePageNumber === 1 ? 'dot bg-black' : 'dot'
        let dot2 = this.props.mobilePageNumber === 2 ? 'dot bg-black' : 'dot'
        let dot3 = this.props.mobilePageNumber === 3 ? 'dot bg-black' : 'dot'
        let dot4 = this.props.mobilePageNumber === 4 ? 'dot bg-black' : 'dot'
        let dot5 = this.props.mobilePageNumber === 5 ? 'dot bg-black' : 'dot'
        let dot6 = this.props.mobilePageNumber === 6 ? 'dot bg-black' : 'dot'

        return(
        <div className={slideBox}>
          <div className='dotDisplay'>
            <span className={dot1}></span>
            <span className={dot2}></span>
            <span className={dot3}></span>
            <span className={dot4}></span>
            <span className={dot5}></span>
            <span className={dot6}></span>
          </div>
          <div onClick={this.props.handlePage} id='mobilePrevPage' className={prevPage}>
            <i id='mobilePrevPage' className="fa fa-arrow-left" />
          </div>
          <div onClick={this.props.handlePage} id='mobileNextPage' className={nextPage}>
            <i id='mobileNextPage' className="fa fa-arrow-right" />
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