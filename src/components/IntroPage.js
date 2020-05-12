import React from 'react'
import Personal from './background/Personal.js'
import Programming from './background/Programming.js'

class IntroPage extends React.Component {
    render(){
        let slideBox = this.props.showIntro? 
        'position-absolute top-50 left-50 transform bg-white border-5px-pink border-radius height-75vh width-75vw transition box-shadow' :
        'position-absolute top-50 left-150 transform bg-white border-5px-pink border-radius height-75vh width-75vw transition box-shadow'

        return(
        <div className={slideBox}>
            <div className='position-relative flex-space-between box-sizing height-100pct'>
              <Personal CodeyDu={this.props.CodeyDu}/>
              <Programming />
              <button 
                id='intro'
                className='position-absolute right-0 bottom-0 padding-x-30px padding-y-10px bg-black font-color-white hover' 
                onClick={this.props.handleButton}>
                  CLICK TO CLOSE
              </button>
            </div>
        </div>
        )
    }
}

export default IntroPage