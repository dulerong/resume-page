import React from 'react'

class EmailUI extends React.Component {
    render(){
        return(
        <span className='projectFrame hover-display-detail hover-transform-scale font-family-arial'>
            <p className='margin-20px font-family-lobster font-size-30px'>Email Viewer UI</p>
            <div className='flex-center overflow position-relative'>
              <img className='projectImg' src={this.props.EmailViewer} alt=''/>
            </div>
            <div className='imgDetail'>
                <h1>Title: Email Viewer UI</h1>
                <p className='margin-b-10px'>Views emails, available in both desktop and mobile view</p>
                <p className='margin-b-10px'>Sorts email list by sender/receiver/subject/date by clicking each</p>
                <p className='margin-b-10px'>Filters email by dates, using search bar</p>
                <p>Front-End: React.js</p>
                <div className='text-align margin-10px'>
                  <a 
                    href="https://dulerong.github.io/email-user-interface/"
                    className='inline-block bg-white font-color-black padding-10px'
                    target="_blank"
                    rel="noopener noreferrer">
                    CLICK TO SEE!
                  </a>
                </div>
              </div>
        </span>
        )
    }
}

export default EmailUI