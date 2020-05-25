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
import gozenzakiFront from './images/gozenzaki-front-compressed-25.JPG'

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
      projectPageNumber: 1,
      projectFirstPage: 1,
      projectLastPage: 6,
      toggleList: false,
      language: 'english',
      prevScrollpos: window.pageYOffset,
      visible: true
    }
    this.handleButton = this.handleButton.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
    this.handlePage = this.handlePage.bind(this)
    this.handleToggleList = this.handleToggleList.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handlePage(e){
    if(e.target.id.slice(0,11) === 'projectpage'){
      let page = Number(e.target.id.slice(-1))
      this.setState({projectPageNumber: page})
    }
    if(e.target.id.slice(0,9) === 'intropage'){
      let page = Number(e.target.id.slice(-1))
      this.setState({introPageNumber: page})
    }
    if(e.target.id === 'introNextPage'){
      this.setState({introPageNumber: this.state.introPageNumber+1})
    }
    if(e.target.id === 'introPrevPage'){
      this.setState({introPageNumber: this.state.introPageNumber-1})
    }
    if(e.target.id === 'projectNextPage'){
        this.setState({projectPageNumber: this.state.projectPageNumber+1})
    }
    if(e.target.id === 'projectPrevPage'){
        this.setState({projectPageNumber: this.state.projectPageNumber-1})
    }
  }
  handleScroll() {
    const prevScrollpos = this.state.prevScrollpos

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible: visible
    })
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
          visible={this.state.visible}
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
          projectFirstPage={this.state.projectFirstPage}
          projectLastPage={this.state.projectLastPage}
          projectPageNumber={this.state.projectPageNumber}
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
