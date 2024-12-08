import React from 'react'
// import { Type, BtnChange } from './component/index'
import './App.css';
import { useNavigate } from 'react-router';
// import { head } from '../src/router/index'
import logo from './asstes/images/logo.png'
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
        <span className='logo'></span>
        <div className='head-navbar'>
          <span>@REFE</span>
          <span onClick={() => navigate(`/hc`)}>Html&Css</span>
          <span onClick={() => navigate(`/resume`)}>Resume</span>
          <span>Photo</span>
          <span onClick={() => navigate(`/myelement`)}>MyElement</span>
        </div>
        <div className='bar-btn'>
          {/* <BtnChange /> */}
          {show ? <i className='bar' onClick={() => handleClick()}>&#xe621;</i>
            :
            <i className='bar' onClick={() => handleClick()}>&#xe666;</i>
          }
        </div>

      </header>
      <div className='side-navbar'>
        <span onClick={() => navigate(`/hc`)}>Html&Css</span>
        <span onClick={() => navigate(`/resume`)}>Resume</span>
        <span>学习路线图</span>
        <span>Photo</span>
        <span onClick={() => navigate(`/myelement`)}>MyElement</span>
      </div>
      {!show && <div className='container'>
        <span className='type'>
          {/* <Type content={content} /> */}
        </span>
      </div>}
    </div>
  );
}

export default App;
