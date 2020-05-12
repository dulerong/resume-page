import React from 'react'

class ProjectSection extends React.Component {
    render(){
        return(
        <div className='flex-center height-100vh box-sizing border-b-1px' id='projects'>
            <p className='font-family-lobster font-size-30px'>Here are my projects...<i className="fa fa-wrench"></i></p>
            <p>
              <button 
                id='project'
                className='padding-x-30px padding-y-10px bg-black font-color-white hover'
                onClick={this.props.handleButton}>
                  CLICK TO SEE MY PAST PROJECTS
              </button>
            </p>
        </div>
        )
    }
}

export default ProjectSection