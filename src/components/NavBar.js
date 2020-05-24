import React from 'react';

class NavBar extends React.Component {
    render(){
        let toggleList = this.props.toggleList? 'active' : ''

        let menuClass = this.props.toggleList? '' : 'fa fa-bars'
        let closeClass = this.props.toggleList? 'fa fa-times' : ''

        let text = this.props.text
        let language = this.props.language
        return(
        <nav>
            <span className='logo'>{text[language].logo}</span>
            <ul className={toggleList}>
              <li><a href="#about" onClick={this.props.handleButton} id='intro'>{text[language].aboutMe}</a></li>
              <li><a href="#projects" onClick={this.props.handleButton}>{text[language].project}</a></li>
              <li><a href="###">{text[language].language}</a>
                <ul className='dropDownList'>
                  <li id='english' onClick={this.props.handleLanguage}>ENGLISH</li>
                  <li id='chinese' onClick={this.props.handleLanguage}>中文</li>
                  <li id='japanese' onClick={this.props.handleLanguage}>日本語</li>
                </ul>
              </li>
            </ul>
            <div className='menu-toggle'>
                <i id='toggleList' className={menuClass} onClick={this.props.handleToggleList}/>
                <i id='toggleList' className={closeClass} onClick={this.props.handleToggleList}/>
            </div>
        </nav>
        )
    }
}

export default NavBar