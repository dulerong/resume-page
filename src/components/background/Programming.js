import React from 'react'

class ProgrammingBackground extends React.Component {
    render(){
        let text = this.props.text
        let language = this.props.language
        return(
        <span className='introFrame'>
            <p className='margin-10px font-family-lobster font-size-30px'>{text[language].programmingBackground.title}</p>
            <ul className='margin-20px'>
              <li className='margin-b-10px'>{text[language].programmingBackground[1]}</li>
              <li className='margin-b-10px'>{text[language].programmingBackground[2]}</li>
              <li className='margin-b-10px'>{text[language].programmingBackground[3]}</li>
              <li className='margin-b-10px'>{text[language].programmingBackground[4]}</li>
              <li className='margin-b-10px'>{text[language].programmingBackground[5]}</li>
            </ul>
            <p className='margin-10px font-family-lobster font-size-20px'>{text[language].programmingBackground[6]}</p>
            <p className='margin-l-20px'>{text[language].programmingBackground[7]}</p>
            <p className='margin-10px font-family-lobster font-size-20px'>{text[language].programmingBackground[8]}</p>
            <p className='margin-l-20px'>
                {text[language].programmingBackground[9]}
            </p>
        </span>
        )
    }
}

export default ProgrammingBackground