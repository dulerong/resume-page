import React from 'react'

class PersonalBackground extends React.Component {
    render(){
        return(
        <span className='border-1px width-50pct inline-block box-sizing'>
            <p className='margin-20px font-family-lobster font-size-30px'>Personal Background</p>
            <ul className='margin-20px'>
              <li className='margin-b-10px'>Born in Taiwan, immigrated to Canada at age 13, year 2000</li>
              <li className='margin-b-10px'>Lived, studied in Canada until age 25, year 2012</li>
              <li className='margin-b-10px'>University of British Columbia, Bachelor of Chemical Engineering</li>
              <li className='margin-b-10px'>Been living in Japan since 2014</li>
              <li className='margin-b-10px'>Speaks 3 humans languages (Chinese, English, and Japanese)</li>
            </ul>
            <div className='text-align'><img className='max-w-40pct box-shadow ' src={this.props.CodeyDu} alt=''/></div>
        </span>
        )
    }
}

export default PersonalBackground