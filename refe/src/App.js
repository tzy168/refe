import React from 'react'
import Type from './component/type/index'
import './App.css';
import { useNavigate } from 'react-router';
import { head } from '../src/router/index'
function App() {
  const content1 = 'Welcome Here!';
  const content2 = '个人学习网站 :)';
  const content3 = 'I am a web developer.';
  const content4 = 'Hello World! :)';
  const content = [content1, content2, content3, content4];
  const [show, setShow] = React.useState(false)
  let navigate = useNavigate()

  const handleClick = () => {
    document.querySelector('.bar').classList.toggle('bar-active')
    document.querySelector('.side-navbar').classList.toggle('side-navbar-active')
    setShow(!show)
  }
  return (
    <div className="App">
      <header>
        <div className='head-navbar'>
          <span onClick={() => navigate(`${head}/hc`)}>Html&Css</span>
          <span>Resume</span>
          <span>学习路线图</span>
          <span>Photo</span>
          <span onClick={() => navigate(`${head}/myelement`)}>MyElement</span>
        </div>

        <div className='bar-btn'>
          {show ? <i className='bar' onClick={() => handleClick()}>&#xe621;</i>
            :
            <i className='bar' onClick={() => handleClick()}>&#xe666;</i>
          }
        </div>
      </header>
      <div className='side-navbar'>
        <span onClick={() => navigate(`${head}/hc`)}>Html&Css</span>
        <span>Resume</span>
        <span>学习路线图</span>
        <span>Photo</span>
        <span onClick={() => navigate(`${head}/myelement`)}>MyElement</span>
      </div>
      <div className='container'>
        <span className='type'><Type content={content} /></span>
      </div>
    </div>
  );
}

export default App;
