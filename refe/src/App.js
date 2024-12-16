import React, { useEffect } from 'react'
import { Type, Skillcard, Timer } from './component/index'
import './App.css';
import { useNavigate } from 'react-router';
import { getHistoryToday } from './apis/historyToday'
import TodayHistory from './component/todayHistory';
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

  const handleGetHistoryToday = () => {
    getHistoryToday({ type: 0 }).then(res => {
      console.log(res)
    })
  }

  const date = new Date().toString().split(' ')
  const dateymd = new Date().toLocaleDateString()
  const weekday = date[0]
  const time = date[4]
  return (
    <div className="App">
      <header>
        <span><strong>@REFE</strong></span>
        <div className='head-navbar'>

          <span onClick={() => navigate(`/hc`)}>Html&Css</span>
          <span onClick={() => navigate(`/resume`)}>Resume</span>
          <span>Photo</span>
          <span onClick={() => navigate(`/myelement`)}>MyElement</span>
        </div>
        <div className='bar-btn'>
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
      <div className='container'>
        <Timer />
        <TodayHistory />
        <span className='type'>
          <Type content={content} />
        </span>

        <div className='skill-box'>
          <Skillcard />
        </div>
      </div>
    </div >
  );
}

export default App;
