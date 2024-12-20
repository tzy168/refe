import React from 'react'
import {
  Type,
  Skillcard,
  Timer,
  FirstShow,
  Menu
} from './component/index'
import './App.css';
import { useNavigate } from 'react-router';
function App() {
  const content1 = 'Welcome Here! ';
  const content2 = 'This is personal Web :) ';
  const content3 = 'This is a web developer.';
  const content4 = 'Hello World! :) ';
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
        <strong style={{ fontSize: '20px' }}>@REFE</strong>
        <div className='head-navbar'>
          <span onClick={() => navigate(`/resume`)}>Resume</span>
          <span>Photo</span>
          <span onClick={() => navigate(`/myelement`)}>MyElement</span>
          <span><Menu title={'Skill'} /></span>
        </div>
        <p className='bar-btn'>
          {show ? <b className='bar' onClick={() => handleClick()}>&#xe621;</b>
            :
            <b className='bar' onClick={() => handleClick()}>&#xe666;</b>
          }
        </p>

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
        <FirstShow />
        <div className='skill-box'>
          {/* <Skillcard /> */}
        </div>
      </div>
    </div >
  );
}

export default App;
