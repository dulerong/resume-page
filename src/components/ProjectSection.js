import React from 'react'
import ProjectPage from './ProjectPage.js'

class ProjectSection extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <div className='projectSection' id='projects'>
            <p className='title'>{text[language].projectSection.mainTitle}<i className="fa fa-wrench"></i></p>
            <button id='project' onClick={this.props.handleButton}>
                {text[language].clickToSeeProjects}
            </button>
            <ProjectPage
              text={text}
              language={language}
              handlePage={this.props.handlePage}
              mobileFirstPage={this.props.mobileFirstPage}
              mobileLastPage={this.props.mobileLastPage}
              mobilePageNumber={this.props.mobilePageNumber}
              showProject={this.props.showProject}
              nextPage={this.props.nextPage}
              handleButton={this.props.handleButton}
              JapanPopulation={this.props.JapanPopulation}
              EmailViewer={this.props.EmailViewer}
              Calculator={this.props.Calculator}
              DrumMachine={this.props.DrumMachine}
              TimerClock={this.props.TimerClock}
              RandomQuote={this.props.RandomQuote}/>
        </div>
        )
    }
}

export default ProjectSection