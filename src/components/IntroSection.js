import React from 'react'

class IntroSection extends React.Component{
    render(){
        return(
        <div className='flex-center height-100vh box-sizing border-b-1px' id='about'>
            <p className='font-family-lobster font-size-30px'>My name is Codey...<i className="fa fa-bug"></i></p>
            <p>
              <button 
                id='intro'
                className='padding-x-30px padding-y-10px bg-black font-color-white hover'
                onClick={this.props.handleButton}>
                  CLICK TO KNOW MORE ABOUT CODEY
              </button>
            </p>
        </div>
        )
    }
}

export default IntroSection