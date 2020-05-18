import React from 'react';

class NavBar extends React.Component {
    render(){
        let toggleList = this.props.toggleList?
        'mobile position-absolute top-75px left-0 font-color-white bg-gray width-100pct font-family-arial transition' :
        'mobile position-absolute top-75px left-minus100 font-color-white bg-gray width-100pct font-family-arial transition'

        let text = this.props.text
        let language = this.props.language
        return(
        <nav>
            <span className='line-height-75px font-color-white font-family-arial'>{text[language].logo}</span>
            <span className='font-color-white desktop'>
              <ul className='flex-space-between height-100pct font-family-arial'>
                <li className='hover line-height-75px'><a className='inline-block padding-x-10px width-100pct' href="#about">{text[language].aboutMe}</a></li>
                <li className='hover line-height-75px'><a className='inline-block padding-x-10px width-100pct' href="#projects">{text[language].project}</a></li>
                <li className='width-100px hover hover-display-dropDownList line-height-75px position-relative text-align'>{text[language].language}
                  <ul className='dropDownList'>
                    <li className='hover text-align' id='english' onClick={this.props.handleLanguage}>ENGLISH</li>
                    <li className='hover text-align' id='chinese' onClick={this.props.handleLanguage}>中文</li>
                    <li className='hover text-align' id='japanese' onClick={this.props.handleLanguage}>日本語</li>
                  </ul>
                </li>
              </ul>
            </span>
            <div className='menu-toggle font-size-30px'>
                <i id='toggleList' className="fa fa-bars hover" onClick={this.props.handleToggleList}/>
            </div>
            <ul className={toggleList}>
              <li className='border-b-1px text-align hover' onClick={this.props.handleButton}>
                <a className='padding-y-10px inline-block width-100pct' href="#about">{text[language].aboutMe}</a>
              </li>
              <li className='border-b-1px text-align hover' onClick={this.props.handleButton}>
                <a className='padding-y-10px inline-block width-100pct' href="#projects">{text[language].project}</a>
              </li>
              <li className='border-b-1px text-align box-sizing' onClick={this.props.handleButton}>
                <a 
                  className='inline-block margin-x-20px padding-10px hover' 
                  id='english' onClick={this.props.handleLanguage} href='###'>ENGLISH</a>
                <a 
                  className='inline-block margin-x-20px padding-10px hover' 
                  id='chinese' onClick={this.props.handleLanguage} href='###'>中文</a>
                <a 
                  className='inline-block margin-x-20px padding-10px hover' 
                  id='japanese' onClick={this.props.handleLanguage} href='###'>日本語</a>
              </li>
            </ul>
        </nav>
        )
    }
}

export default NavBar