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

        let mobilePageDisplay = 'border-1px box-sizing width-100pct height-100pct'

        let closePageButton = this.props.nextPage?
        'position-fixed left-50 bottom-0 transform-x-50pct width-150px padding-y-10px bg-black font-color-white hover transition':
        'position-fixed left-50 bottom-0 transform-x-50pct width-150px padding-y-10px bg-black font-color-white hover transition'

        let projectPrevPage = this.props.pageNumber === this.props.firstPage ? 'display-none' : 'projectPrevPage'
        let projectNextPage = this.props.pageNumber === this.props.lastPage ? 'display-none' : 'projectNextPage'

        return(
        <div className={slideBox}>
            <div className='desktop height-100pct'>
              <div className={pageDisplay}>
                <JapanPop JapanPopulation={this.props.JapanPopulation}/>
                <EmailUI EmailViewer={this.props.EmailViewer}/>
                <Calculator Calculator={this.props.Calculator}/>
                <DrumMachine DrumMachine={this.props.DrumMachine}/>
                <TimerClock TimerClock={this.props.TimerClock}/>
                <RandomQuote RandomQuote={this.props.RandomQuote}/>
                <button
                  id='project'
                  className={closePageButton}
                  onClick={this.props.handleButton}>
                    {text[language].clickToClose}
                </button>
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
                <JapanPop JapanPopulation={this.props.JapanPopulation}/>
                <EmailUI EmailViewer={this.props.EmailViewer}/>
                <Calculator Calculator={this.props.Calculator}/>
                <DrumMachine DrumMachine={this.props.DrumMachine}/>
                <TimerClock TimerClock={this.props.TimerClock}/>
                <RandomQuote RandomQuote={this.props.RandomQuote}/>
                <div
                  className='position-absolute left-100 top-0 transform-x-100pct font-size-30px hover-cursor' 
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