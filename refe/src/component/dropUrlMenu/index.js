import { useEffect, useRef } from 'react';
import './index.css';

const Menu = ({ title, list }) => {
    const ref = useRef(null);
    const dRef = useRef(null);
    const tRef = useRef(null);

    useEffect(() => {
        if (!list) {
            tRef.current.style.display = 'none';
        }
    }, [list]); // 依赖项数组中添加 list，确保在 list 变化时重新执行 effect

    return (
        <div className='menu-list' ref={ref}>
            <h4 style={{ display: 'inline-block' }}>{title}</h4>
            <div className='tangle' ref={tRef}></div>
            <div className='detail' ref={dRef}>
                {
                    list && list.map((item, index) => {
                        return <p key={item.id}><a href={item.url} target='_blank'>{item.name}</a></p>
                    })
                }
            </div>
        </div >
    );
};

export default Menu;
