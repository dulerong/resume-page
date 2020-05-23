import React from 'react'

class PersonalBackground extends React.Component {
    render(){
        let text = this.props.text
        let language = this.props.language
        return(
        <span className='introFrame'>
            <h1>{text[language].personalBackground.title}</h1>
            <ul>
              <li>{text[language].personalBackground[1]}</li>
              <li>{text[language].personalBackground[2]}</li>
              <li>{text[language].personalBackground[3]}</li>
              <li>{text[language].personalBackground[4]}</li>
              <li>{text[language].personalBackground[5]}</li>
            </ul>
            <div className='myPhoto'><img src={this.props.CodeyDu} alt=''/></div>
        </span>
        )
    }
}

export default PersonalBackground