import React from 'react'

class JapanPop extends React.Component {
    render(){
      let text = this.props.text
      let language = this.props.language
        return(
        <span className='projectFrame'>
            <h1>{text[language].projectJapanPop[0]}</h1>
            <div className='projectImg'>
              <img src={this.props.JapanPopulation} alt=''/>
            </div>
            <div className='imgDetail'>
                <h2>{text[language].projectJapanPop[1]}</h2>
                <p>{text[language].projectJapanPop[2]}</p>
                <p>{text[language].projectJapanPop[3]}</p>
                <p>{text[language].projectJapanPop[4]}</p>
                <p>{text[language].projectJapanPop[5]}</p>
                <p>{text[language].projectJapanPop[6]}</p>
                <div className='link'>
                  <a  
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