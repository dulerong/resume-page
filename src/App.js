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

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showIntro: false,
      showProject: false,
      nextPage: false,
      pageNumber: 1,
      firstPage: 1,
      lastPage: 3,
      toggleList: false,
      language: 'english'
    }
    this.handleButton = this.handleButton.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
    this.handlePage = this.handlePage.bind(this)
    this.handleToggleList = this.handleToggleList.bind(this)
  }
  handlePage(e){
    if(e.target.id === 'nextPage'){
      this.state.pageNumber === this.state.lastPage ?
        this.setState({pageNumber: this.state.firstPage}) :
        this.setState({pageNumber: this.state.pageNumber+1})
    }
    if(e.target.id === 'prevPage'){
      this.state.pageNumber === this.state.firstPage ?
        this.setState({pageNumber: this.state.lastPage}) :
        this.setState({pageNumber: this.state.pageNumber-1})
    }
  }
  handleLanguage(e){
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
          showIntro={this.state.showIntro} 
          handleButton={this.handleButton}
          windowClose={windowClose}
          CodeyDu={CodeyDu}/>
        <ProjectSection 
          text={text}
          language={this.state.language}
          firstPage={this.state.firstPage}
          lastPage={this.state.lastPage}
          pageNumber={this.state.pageNumber}
          showProject={this.state.showProject}
          nextPage={this.state.nextPage}
          handlePage={this.handlePage}
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
