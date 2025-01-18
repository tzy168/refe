import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import axios from 'axios';
import './index.css';


const MarkdownViewer = ({ md }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // 使用 axios 从 public 文件夹加载本地 Markdown 文件
    axios.get(`/docs/${md}`)
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        console.error('加载 Markdown 文件失败:', error);
      });
  }, []);
  console.log(content);
  return (
    <div className='md-box'>
      <h1>{md}</h1>
      <ReactMarkdown
        className="prose prose-zinc max-w-none dark:prose-invert"
        rehypePlugins={[rehypeHighlight]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
