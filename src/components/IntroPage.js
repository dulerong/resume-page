import React from 'react'
import Personal from './background/Personal.js'
import Programming from './background/Programming.js'


class IntroPage extends React.Component {
    render(){
        let slideBox = this.props.showIntro?
        'introSlideBox left-50' : 'introSlideBox left-150'

        let introPageDisplay = 'introPageDisplay page'+this.props.introPageNumber 

        let dot1 = this.props.introPageNumber === 1 ? 'dot bg-black' : 'dot'
        let dot2 = this.props.introPageNumber === 2 ? 'dot bg-black' : 'dot'

        let prevPage = this.props.introPageNumber === this.props.introFirstPage ? 'display-none' : 'prevPage'
        let nextPage = this.props.introPageNumber === this.props.introLastPage ? 'display-none' : 'nextPage'

        return(
        <div className={slideBox}>
          <div className='dotDisplay'>
            <span id ='intropage1' className={dot1} onClick={this.props.handlePage}></span>
            <span id ='intropage2' className={dot2} onClick={this.props.handlePage}></span>
          </div>
          <div onClick={this.props.handlePage} id='introPrevPage' className={prevPage}>
            <i id='introPrevPage' className="fa fa-arrow-left" />
          </div>
          <div onClick={this.props.handlePage} id='introNextPage' className={nextPage}>
            <i id='introNextPage' className="fa fa-arrow-right" />
          </div>
          <div
            className='closeButton' 
            onClick={this.props.handleButton}>
              <i id='intro' className="fa fa-window-close"></i>
          </div>
          <div className='introContainer'>
            <div className={introPageDisplay}>
              <Personal
                text={this.props.text}
                language={this.props.language}
                CodeyDu={this.props.CodeyDu}/>
              <Programming                 
                text={this.props.text}
                language={this.props.language}/>
            </div>
          </div>
        </div>
        )
    }
}

export default IntroPage