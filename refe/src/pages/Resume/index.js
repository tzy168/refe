import './index.css'

const Resume = () => {
    const age = new Date().getFullYear() - 2003
    return (
        <div className="main">
            <div className="head">
                <div>
                    <h1 style={{ marginBottom: '10px' }}>谭子悦</h1>
                    <h4>意向岗位：前端开发</h4>
                    <p>年龄：{age}岁  性别：男</p>
                    <p>邮箱：<a href="mailto:3265577395@qq.com">3265577395@qq.com</a></p>
                    <p>电话：15708199035</p>
                </div>
                <div className='headimg'></div>
            </div>
            <hr />
            <div className='item-1'>
                <h2>教育经历</h2>
                <p>成都信息工程大学 2021.09 - 2025.06</p>
                <p><strong>本科 | 区块链工程</strong></p>
                <p><strong>主修课程：</strong>数据结构、java基础、区块链原理、dapp开发、web开发等</p>
                <hr />
            </div>

            <div className='item-1'>
                <h2>实习经历</h2>
                <p><strong>2024.0 - 2024.06 弗都成科技有限公司(兼职)</strong></p>
                前端开发：<br />
                <ol>
                    <li>参与卡片的前端设计及逻辑代码实现，涉及卡片前端设计细节。</li>
                    <li>完成使用 React 框架实现卡片前端代码，确保代码可复用和组件化。</li>
                    {/* <li>通过与 Web3.js 库交互区块链区域获取球员卡片详细信息，管理组件生命周期（如组件状态管理、数据获取时机等），提高代码的可维护性和复用性</li> */}
                    <li>编写异步方法，使用 Web3.js 完成与智能合约交互功能，从区块链上获取卡片相关信息，确保卡片信息的真实性和可验证性。</li>
                    <li>确保数据在前端组件中的准确性和实时性展示。</li>
                </ol>
            </div>
            <hr />

            <div className='item-1'>
                <h2 >项目经历</h2>
                <div style={{ marginBottom: '10px' }}>
                    <p>
                        <a href='https://github.com/tzy168/BMS'>
                            <strong> 通用后台管理系统 </strong>
                        </a>2022.08 - 2022.09
                    </p>

                    <p>技术栈：React、Redux、Ant Design、Axios、react-router、echarts</p>
                    <p>项目描述：开发一个全功能的后台管理系统，提供用户管理、权限配置和数据展示功能。</p>
                    <ul>
                        <li>负责项目的路由搭建及配置，确保页面导航顺畅。</li>
                        <li>使用 Flex 布局和栅格系统，实现自适应布局。</li>
                        <li>使用 Redux 和 React 管理应用状态，实现兄弟组件间的数据传递。</li>
                        <li>封装 Axios，实现请求拦截、响应拦截，提高 HTTP 请求的可维护性，处理错误。</li>
                        <li>利用 Mock.js 拦截 Ajax 请求，生成随机数据，进行前端数据模拟。</li>
                        <li>集成 Echarts 库，展示动态图表，提升数据可视化效果。设计并实现用户权限鉴权和菜单权限配置，确保系统安全性。</li>
                    </ul>
                </div>

                <div>
                    <p>
                        <a href='https://github.com/tzy168/CMS' target='blank'>
                            <strong> 内容管理系统 </strong>
                        </a>2022.09 - 2022.10
                    </p>
                    <p>技术栈：React、Redux、react-router、Axios、Ant Design</p>
                    <p>项目描述：</p>
                    <ul>
                        <li>开发一个 React 内容管理系统，具备用户管理和文章管理功能。</li>
                        <li>文章管理包括创建、编辑、删除、查看详情，支持封面上传和列表筛选分页。</li>
                        <li>用户管理通过 Redux 管理登录状态和信息，包括注册、登录、查看个人信息。</li>
                    </ul>
                    <p>主要职责</p>
                    <ul>
                        <li>确定技术方案，确保路由配置顺畅，保障系统的可维护性和可扩展性。</li>
                        <li>开发文章页面，包括详情页和列表页，具备数据获取、展示、分页、筛选等功能，以及文章的创建和编辑功能。</li>
                        <li>开发用户模块，包括用户信息管理、注册、登录，利用 Redux 更新登录状态和信息。</li>
                        <li>使用 Ant Design 搭建页面布局，进行界面设计。</li>
                        <li>设置请求拦截，处理错误，封装与后端的数据交互（Axios）。</li>
                    </ul>
                </div>



            </div>
            <hr />

            <div className='item-1'>
                <h2>相关技能</h2>
                <ul>
                    <li>熟练掌握 JavaScript、CSS、HTML。</li>
                    <li>熟练使用React进行项目开发,熟悉组件式开发。</li>
                    <li>能够管理应用数据和状态（如 Redux、React Redux）。</li>
                    <li>使用 Axios 进行网络请求、处理错误及调用 API</li>
                    <li>运用 Git 进行团队协作与版本管理。</li>
                    <li>乐于接受新技术挑战，具备快速学习新知识的能力。</li>
                </ul>
            </div>
            <hr />

            <div className='item-1'>
                <h2>自我评价</h2>
                <ul>
                    <li>学习能力强，能够快速适应新环境，学习新知识。</li>
                    <li>勇于尝试新技术，积极寻求解决方案，乐于接受挑战。</li>
                    <li>能够有效与团队成员协作，推动项目进展，擅长沟通。</li>
                    <li>注重细节，做事勤勉，确保工作效率和质量。</li>
                </ul>
            </div>
            <hr />

            <div className='item-1'>
                <h3>荣誉证书：</h3>
                <ul>
                    <li>大学英语四级。</li>
                </ul>
            </div>

        </div >
    )
}

export default Resume