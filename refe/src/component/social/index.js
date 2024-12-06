import './social.css'

const SocialBox = () => {
    return (
        <div className='social-box'>
            <div className='social-item'>
                <span className='iconfont icon-QQ'></span>
                <span>QQ</span>
            </div>
            <div className='social-item'>
                <span className='iconfont icon-weixin'></span>
                <span>微信</span>
            </div>
            <div className='social-item'>
                <span className='iconfont icon-github'></span>
                <span>GitHub</span>
            </div>
            <div className='social-item'>
                <span className='iconfont icon-zhihu'></span>
                <span>知乎</span>
            </div>
        </div>
    )
}

export default SocialBox;