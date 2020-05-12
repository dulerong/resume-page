import React from 'react';

class NavBar extends React.Component {
    render(){
        return(
        <nav>
            <span className='line-height-75px font-color-white font-family-arial'>LET'S HELP CODEY FIND A JOB!</span>
            <span className='font-color-white'>
              <ul className='flex-space-between height-100pct font-family-arial'>
                <li className='padding-x-10px hover line-height-75px'><a href="#about">ABOUT ME</a></li>
                <li className='padding-x-10px hover line-height-75px'><a href="#projects">PROJECTS</a></li>
                <li className='width-100px hover hover-display-dropDownList line-height-75px position-relative text-align'>LANGUAGE
                  <ul className='dropDownList display-none'>
                    <li className='hover text-align'>ENGLISH</li>
                    <li className='hover text-align'>中文</li>
                    <li className='hover text-align'>日本語</li>
                  </ul>
                </li>
              </ul>
            </span>
        </nav>
        )
    }
}

export default NavBar