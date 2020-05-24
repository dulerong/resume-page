import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import 'font-awesome/css/font-awesome.min.css'
import BottomBanner from './components/BottomBanner.js'
import IntroSection from './components/IntroSection.js'
import ProjectSection from './components/ProjectSection.js'
import JapanPopulation from './images/japan-population.png'
import EmailViewer from './images/emailViewer.png'
import Calculator from './images/calculator.png'
import DrumMachine from './images/drum-machine.png'
import TimerClock from './images/timer-clock.png'
import RandomQuote from './images/random-quote.png'
import CodeyDu from './images/codeydu.jpg'
import windowClose from './images/window-close-solid.svg'
import text from './text.js'
import gozenzakiFront from './images/gozenzaki-front-compressed.jpg'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showIntro: false,
      showProject: false,
      nextPage: false,
      introPageNumber: 1,
      introFirstPage: 1,
      introLastPage: 2,
      mobilePageNumber: 1,
      mobileFirstPage: 1,
      mobileLastPage: 6,
      toggleList: false,
      language: 'english'
    }
    this.handleButton = this.handleButton.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
    this.handlePage = this.handlePage.bind(this)
    this.handleToggleList = this.handleToggleList.bind(this)
  }
  handlePage(e){
    if(e.target.id === 'introNextPage'){
      this.setState({introPageNumber: this.state.introPageNumber+1})
    }
    if(e.target.id === 'introPrevPage'){
      this.setState({introPageNumber: this.state.introPageNumber-1})
    }
    if(e.target.id === 'mobileNextPage'){
        this.setState({mobilePageNumber: this.state.mobilePageNumber+1})
    }
    if(e.target.id === 'mobilePrevPage'){
        this.setState({mobilePageNumber: this.state.mobilePageNumber-1})
    }
  }
  handleLanguage(e){
    this.setState({toggleList: false})
    this.setState({language: e.target.id})
  }
  handleToggleList(e){
    this.setState({
      showIntro: false,
      showProject: false,
      toggleList: !this.state.toggleList
    })
  }
  handleButton(e){
    this.setState({toggleList: false})
    if(e.target.id === 'intro'){
      this.setState({showIntro: !this.state.showIntro})
    }
    if(e.target.id === 'project'){
      this.setState({showProject: !this.state.showProject})
    }
    if(e.target.id === 'nextPage'){
      this.setState({nextPage: !this.state.nextPage})
    }
  }

  render(){
  
  return (
      <div className="App">
        <NavBar 
          text={text}
          language={this.state.language}
          handleLanguage={this.handleLanguage}
          handleButton={this.handleButton}
          handleToggleList={this.handleToggleList}
          toggleList={this.state.toggleList}/>
        <IntroSection
          text={text}
          language={this.state.language}
          handlePage={this.handlePage}
          introPageNumber={this.state.introPageNumber}
          introFirstPage={this.state.introFirstPage}
          introLastPage={this.state.introLastPage}
          showIntro={this.state.showIntro} 
          handleButton={this.handleButton}
          windowClose={windowClose}
          CodeyDu={CodeyDu}
          gozenzakiFront={gozenzakiFront}/>
        <ProjectSection 
          text={text}
          language={this.state.language}
          handlePage={this.handlePage}
          mobileFirstPage={this.state.mobileFirstPage}
          mobileLastPage={this.state.mobileLastPage}
          mobilePageNumber={this.state.mobilePageNumber}
          showProject={this.state.showProject}
          nextPage={this.state.nextPage}
          handleButton={this.handleButton}
          JapanPopulation={JapanPopulation}
          EmailViewer={EmailViewer}
          Calculator={Calculator}
          DrumMachine={DrumMachine}
          TimerClock={TimerClock}
          RandomQuote={RandomQuote}/>
        <BottomBanner/>
      </div>
    );
  }
}

export default App;
