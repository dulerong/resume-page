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

        let pageDisplay = 'pageDisplay page'+this.props.pageNumber
        let mobilePageDisplay = 'pageDisplay page'+this.props.mobilePageNumber

        let projectPrevPage = this.props.pageNumber === this.props.firstPage ? 'display-none' : 'projectPrevPage'
        let projectNextPage = this.props.pageNumber === this.props.lastPage ? 'display-none' : 'projectNextPage'
        
        let mobileProjectPrevPage = this.props.mobilePageNumber === this.props.mobileFirstPage ? 'display-none' : 'projectPrevPage'
        let mobileProjectNextPage = this.props.mobilePageNumber === this.props.mobileLastPage ? 'display-none' : 'projectNextPage'

        return(
        <div className={slideBox}>
            <div className='desktop height-100pct'>
              <div className={pageDisplay}>
                <JapanPop JapanPopulation={this.props.JapanPopulation} text={text} language={language}/>
                <EmailUI EmailViewer={this.props.EmailViewer} text={text} language={language}/>
                <Calculator Calculator={this.props.Calculator} text={text} language={language}/>
                <DrumMachine DrumMachine={this.props.DrumMachine} text={text} language={language}/>
                <TimerClock TimerClock={this.props.TimerClock} text={text} language={language}/>
                <RandomQuote RandomQuote={this.props.RandomQuote} text={text} language={language}/>
                <div
                  className='position-absolute left-50 bottom-0 transform-x-50pct font-size-30px hover-cursor' 
                  onClick={this.props.handleButton}>
                    <i id='project' className="fa fa-window-close"></i>
                </div>
                <div onClick={this.props.handlePage} id='prevPage' className={projectPrevPage}>
                  <i id='prevPage' className="fa fa-arrow-left" />
                </div>
                <div onClick={this.props.handlePage} id='nextPage' className={projectNextPage}>
                  <i id='nextPage' className="fa fa-arrow-right" />
                </div>
              </div>
            </div>
            <div className='mobile height-100pct'>
              <div className={mobilePageDisplay}>
                <JapanPop JapanPopulation={this.props.JapanPopulation} text={text} language={language}/>
                <EmailUI EmailViewer={this.props.EmailViewer} text={text} language={language}/>
                <Calculator Calculator={this.props.Calculator} text={text} language={language}/>
                <DrumMachine DrumMachine={this.props.DrumMachine} text={text} language={language}/>
                <TimerClock TimerClock={this.props.TimerClock} text={text} language={language}/>
                <RandomQuote RandomQuote={this.props.RandomQuote} text={text} language={language}/>
                <div
                  className='position-absolute left-50 bottom-0 transform-x-50pct font-size-30px hover-cursor' 
                  onClick={this.props.handleButton}>
                    <i id='project' className="fa fa-window-close"></i>
                </div>
                <div onClick={this.props.handleMobilePage} id='mobilePrevPage' className={mobileProjectPrevPage}>
                  <i id='mobilePrevPage' className="fa fa-arrow-left" />
                </div>
                <div onClick={this.props.handleMobilePage} id='mobileNextPage' className={mobileProjectNextPage}>
                  <i id='mobileNextPage' className="fa fa-arrow-right" />
                </div>
              </div>
            </div>
        </div>
        )
    }
}

export default ProjectPage