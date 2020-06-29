import React, { Component } from 'react';
import { getSearch } from '../common/utils.ts';
import './app.less';

function timeStampFormat(timeStamp) {
}

export default class App extends Component {
    state = {
        menuList: [
            { name: '1', show: this.isAdmin, url: '/child_project/docs/src/.vuepress/dist/index.html' },
            { name: '文档', show: true, url: '/child_project/docs/dist/index.html' },
            { name: '2', show: true },
            { name: '2', show: true },
            { name: '2', show: true },
            { name: '2', show: true },
        ],
        messageList: [],
        robotTyping: false,
    }

    get isAdmin() {
        return !!getSearch(window.location.href, 'admin');
    }

    componentDidMount() {
        window.app = this;
    }

    openUrl(url) {
        if (!url) return;
        const { location } = window;
        location.pathname = url;
    }

    autoResponse(message) {
        const { menuList = '' } = this.state;
        const res = menuList.find((item) => message.indexOf(item.name) !== -1);
        if (res && res.show) {
            return <a href={res.url}>{res.name}</a>;
        }
        return '你个憨八🐢，给👴爬';
    }

    sendMessage(e) {
        const { input: inputDiv } = this.refs;
        if (inputDiv && inputDiv.innerText && e.which === 13) {
            const message = inputDiv.innerText;
            this.setMessage({ message, time: +new Date(), sender: 'usr' }, () => {
                setTimeout(() => {
                    this.setState({
                        robotTyping: false,
                    });
                    this.setMessage({ message: this.autoResponse(message), time: +new Date(), sender: 'robot' });
                }, 500);
            });
            this.setState({
                robotTyping: true,
            });
            setTimeout(() => {
                inputDiv.innerHTML = '';
            }, 0);
        }
    }

    setMessage(message, callback = () => {}) {
        const messageList = [...this.state.messageList];
        messageList.push(message);
        this.setState({
            messageList,
        }, callback);
        const { message: messageDiv } = this.refs;
        setTimeout(() => {
            messageDiv.scrollTop = messageDiv.scrollHeight;
        }, 0);
    }

    quickReply() {}

    render() {
        const { menuList, messageList } = this.state;
        return <div className="background">
            <div className={['chat-room', window.deviceInfo.isPc ? '' : 'phone'].join(' ')}>
                <div className="usr-info">
                    <img className='left-info' src="./src/hanbag.png" onClick={() => { window.open('./src/hanbag.png'); }}></img>
                    <div className="right-info">
                        <div className="name">精神小伙杰尼🐢</div>
                        <div className="sign">{this.state.robotTyping ? '正在输入中...' : '大🍔批，真🦷么真🍔批'}</div>
                    </div>
                </div>
                <div className="chat-info">
                    <div className="send-info" ref="message">
                        {this.isAdmin && <div className="admin-power">
                            {menuList.map((item) => <a style={{ padding: '0 10px' }} href={item.url}>{item.name}</a>)}
                        </div> }
                        {messageList.map((item, index) => {
                            const { sender = 'usr' } = item;
                            return (<div key={index} className={[sender, 'message'].join(' ')}>
                                <img
                                    src={sender === 'robot' ? './src/hanbag.png' : './src/daidais.png'}
                                    onClick={() => { window.open(`${sender === 'robot' ? './src/hanbag.png' : './src/daidais.png'}`); }}/>
                                <div style={{ display: 'flex' }}>
                                    <span className="bubble-box">{item.message}</span>
                                </div>
                            </div>);
                        })}
                    </div>
                    <div className="drive-line"></div>
                    <div contentEditable={true} ref="input" onKeyDown={this.sendMessage.bind(this)} className="edit-info"/>
                    <div className="button-area">
                        <button>快捷消息</button>
                        <button onClick={() => { this.sendMessage({ which: 13 }); }}>发送(Enter)</button>
                    </div>
                </div>
            </div>
        </div>;
    }
}
