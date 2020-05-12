import React from 'react'

class EmailUI extends React.Component {
    render(){
        return(
        <span className='border-1px width-25pct inline-block box-sizing'>
            <p className='margin-20px font-family-lobster font-size-30px'>Email Viewer UI</p>
            <div className='flex-center overflow position-relative hover-display-detail hover-transform-scale font-family-arial'>
              <img className='projectImg' src={this.props.EmailViewer} alt=''/>
              <div className='imgDetail'>
                <h1>Title: Email Viewer UI</h1>
                <p className='margin-b-10px'>Views emails, available in both desktop and mobile view</p>
                <p>Front-End: React.js</p>
                <div className='text-align'>
                  <a 
                    className='inline-block bg-white font-color-black padding-10px '>
                    Currently under review for interview!
                  </a>
                </div>
              </div>
            </div>
        </span>
        )
    }
}

export default EmailUI