import { useRef } from 'react'
import { useNavigate } from 'react-router'
import './index.css'
const Menu = ({ title }) => {
    const navigate = useNavigate()
    const ref = useRef(null)
    //在after伪元素里添加链接列表
    return (
        <div className='menu-list' ref={ref}>
            <h4 style={{ display: 'inline-block' }}>{title}</h4>
            <div className='detail'>
                <p><a href='https://kun-blog.github.io/webpack5-docs/' target='blank'>Webpack</a></p>
                <p><a href='https://kun-blog.github.io/webpack5-docs/' target='blank'>React</a></p>
                <p><a href='https://kun-blog.github.io/webpack5-docs/' target='blank'>JavaScript</a></p>
                <p><a onClick={() => navigate('/hc')}> htmlcss</a></p>
                <p><a href='https://kun-blog.github.io/webpack5-docs/' target='blank'>Solidity</a></p>

            </div>
        </div >
    )
}

export default Menu