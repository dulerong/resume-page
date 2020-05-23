import React from 'react'

class ProgrammingBackground extends React.Component {
    render(){
        let text = this.props.text
        let language = this.props.language
        return(
        <span className='introFrame'>
            <h1>{text[language].programmingBackground.title}</h1>
            <ul>
              <li>{text[language].programmingBackground[1]}</li>
              <li>{text[language].programmingBackground[2]}</li>
              <li>{text[language].programmingBackground[3]}</li>
              <li>{text[language].programmingBackground[4]}</li>
              <li>{text[language].programmingBackground[5]}</li>
            </ul>
            <h3>{text[language].programmingBackground[6]}</h3>
            <p>{text[language].programmingBackground[7]}</p>
            <h3>{text[language].programmingBackground[8]}</h3>
            <p>{text[language].programmingBackground[9]}</p>
        </span>
        )
    }
}

export default ProgrammingBackground