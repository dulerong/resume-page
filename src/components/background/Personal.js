import React from 'react'

class PersonalBackground extends React.Component {
    render(){
        let text = this.props.text
        let language = this.props.language
        return(
        <span className='introFrame'>
            <p className='margin-10px font-family-lobster font-size-30px'>{text[language].personalBackground.title}</p>
            <ul className='margin-l-20px'>
              <li className='margin-b-10px'>{text[language].personalBackground[1]}</li>
              <li className='margin-b-10px'>{text[language].personalBackground[2]}</li>
              <li className='margin-b-10px'>{text[language].personalBackground[3]}</li>
              <li className='margin-b-10px'>{text[language].personalBackground[4]}</li>
              <li className='margin-b-10px'>{text[language].personalBackground[5]}</li>
            </ul>
            <div className='text-align'><img className='max-w-40pct box-shadow ' src={this.props.CodeyDu} alt=''/></div>
        </span>
        )
    }
}

export default PersonalBackground