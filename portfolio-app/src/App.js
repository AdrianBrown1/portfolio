import React, { Component } from 'react';
import me from './Adrian-bitmoji.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='Adrian__container'>
        <div className='Adrian__avatar'>
          <img src={me} alt='Adrian Brown' className='Adrian__img'/>
        </div>
        <div className='Adrian__name'>Adrian Brown</div>
        <div className='Adrian__role'>Software Engineer</div>
        <div className='Adrian__links-container'>
          <div className='Adrian__links-container-div'>
            <a className='Adrian__link' href='https://tfweather.surge.sh'>Weather</a>
            <a className='Adrian__link' href='https://github.com/AdrianBrown1'>Github</a>
            <a className='Adrian__link' href='https://medium.com/@adrian.angel.brown'>Blog</a>
          </div>
          <div className='Adrian__links-continer-div'>
            <a className='Adrian__link' href='mailto:adrian.angel.brown@gmail.com'>Email</a>
            <a className='Adrian__link' href='https://www.linkedin.com/in/adrianangelbrown/'>LinkedIn</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
