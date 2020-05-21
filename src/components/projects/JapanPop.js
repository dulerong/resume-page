import React from 'react'

class JapanPop extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <span className='projectFrame hover-display-detail hover-transform-scale font-family-arial'>
            <p className='margin-20px font-family-lobster font-size-30px'>{text[language].projectJapanPop[0]}</p>
            <div className='flex-center overflow position-relative'>
              <img className='projectImg' src={this.props.JapanPopulation} alt=''/>
            </div>
            <div className='imgDetail'>
                <h1>{text[language].projectJapanPop[1]}</h1>
                <p className='margin-b-10px'>{text[language].projectJapanPop[2]}</p>
                <p className='margin-b-10px'>{text[language].projectJapanPop[3]}</p>
                <p>{text[language].projectJapanPop[4]}</p>
                <p>{text[language].projectJapanPop[5]}</p>
                <p>{text[language].projectJapanPop[6]}</p>
                <div className='text-align margin-10px'>
                  <a 
                    className='inline-block bg-white font-color-black padding-10px ' 
                    href="https://dulerong.github.io/japan-population/" 
                    target="_blank"
                    rel="noopener noreferrer">
                    {text[language].projectJapanPop[7]}
                  </a>
                </div>
              </div>
        </span>
        )
    }
}

export default JapanPop