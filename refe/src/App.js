import React from 'react'
import {
  Type,
  Skillcard,
  Timer,
  Firstshow,
  Menu
} from './component/index'
import './App.css';
import { useNavigate } from 'react-router';
function App() {
  const content1 = 'This is Welcome Here! ';
  const content2 = 'This is personal Web :) ';
  const content3 = 'This is a web developer.';
  const content4 = 'This is Hello World! :) ';
  const content5 = 'This is REFE :)';
  const content = [content1, content2, content3, content4, content5];

  const [show, setShow] = React.useState(false)
  let navigate = useNavigate()

  const handleClick = () => {
    document.querySelector('.side-navbar').classList.toggle('side-navbar-active')
    setShow(!show)
  }

  return (
    <div className="App">
      <header>
        <span><strong>@REFE</strong></span>
        <div className='head-navbar'>

          {/* <span onClick={() => navigate(`/hc`)}>Html&Css</span> */}
          <span onClick={() => navigate(`/resume`)}>Resume</span>
          <span>Photo</span>
          <span onClick={() => navigate(`/myelement`)}>MyElement</span>
          <span><Menu title={'Skill'} /></span>
        </div>
        <div className='bar-btn'>
          {show ? <i className='bar' onClick={() => handleClick()}>&#xe621;</i>
            :
            <i className='bar' onClick={() => handleClick()}>&#xe666;</i>
          }
        </div>

      </header >
      <div className='side-navbar'>
        {/* <span onClick={() => navigate(`/hc`)}>Html&Css</span> */}
        <span onClick={() => navigate(`/resume`)}>Resume</span>
        <span>学习路线图</span>
        <span>Photo</span>
        <span onClick={() => navigate(`/myelement`)}>MyElement</span>
      </div>
      <div className='container'>
        <Timer />
        <Type content={content} />
        <Firstshow />
        <div className='skill-box'>
          <Skillcard />
        </div>
      </div>
    </div >
  );
}

export default App;
