import React from 'react'
import ProjectPage from './ProjectPage.js'

class ProjectSection extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <div className='flex-center position-relative height-100vh box-sizing border-b-1px' id='projects'>
            <p className='font-family-lobster font-size-30px'>{text[language].projectSection.mainTitle}<i className="fa fa-wrench"></i></p>
            <p>
              <button 
                id='project'
                className='padding-x-30px padding-y-10px bg-black font-color-white hover'
                onClick={this.props.handleButton}>
                  {text[language].clickToSeeProjects}
              </button>
            </p>
            <ProjectPage
              text={text}
              language={language}
              showProject={this.props.showProject}
              nextPage={this.props.nextPage}
              handleButton={this.props.handleButton}
              JapanPopulation={this.props.JapanPopulation}
              EmailViewer={this.props.EmailViewer}
              Calculator={this.props.Calculator}
              DrumMachine={this.props.DrumMachine}/>
        </div>
        )
    }
}

export default ProjectSection