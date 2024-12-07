import React from 'react';
import './index.css';

const Hc = () => {
    // 使用 useCallback 来缓存事件处理函数，避免每次渲染都重新创建这些函数
    const handleDragStart = (e) => {
        e.dataTransfer.setData("Text", e.target.id);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        try {
            var data = e.dataTransfer.getData("Text");
            e.target.appendChild(document.getElementById(data));
        } catch (err) {
            console.log(err);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // 必须阻止默认行为才能触发 drop 事件
    };

    return (
        <div className="main" onDrop={handleDrop}
            onDragOver={handleDragOver}>
            <h1
                id="drag-item" // 给元素一个 id，方便拖动时获取
                className="start"
                draggable="true"
                onDragStart={handleDragStart}
            >
                Html & Css
            </h1 >

            <fieldset
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <legend>fieldset</legend>
                <p>fieldset</p>
            </fieldset>
            <fieldset
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <legend>fieldset</legend>
                <p>fieldset</p>
            </fieldset>
        </div >
    );
}

export default Hc;
