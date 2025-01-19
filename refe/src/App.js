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
function App () {
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

  const menuList = [
    {
      id: 1,
      name: 'webPack',
      url: 'https://kun-blog.github.io/webpack5-docs/'
    },
    {
      id: 2,
      name: '面试题',
      url: 'https://2xiao.github.io/'
    },
    {
      id: 3,
      name: 'myReact',
      url: 'https://pomb.us/build-your-own-react/'
    }
  ]

  return (
    <div className="App">
      <header>
        <strong style={{ fontSize: '20px' }}>@REFE</strong>
        <div className='head-navbar'>
          <span onClick={() => navigate(`/resume`)}>Resume</span>
          <span>Photo</span>
          <span onClick={() => navigate(`/myelement`)}>MyElement</span>
          <span><Menu title={'Learn'} list={menuList} /></span>
          <span onClick={() => navigate(`/note`)}><Menu title={'Note'} /></span>
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
        <span><Menu title={'Learn'} list={menuList} /></span>
        <span><Menu title={'Note'} /></span>
        <span>Photo</span>
        <span onClick={() => navigate(`/myelement`)}>MyElement</span>
      </div>
      <div className='container'>
        <Timer />
        <Type content={content} />
        <FirstShow />
      </div>
    </div >
  );
}

export default App;
