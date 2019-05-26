import React, { Component } from 'react'; // 首先在头部引入Component组件，然后通过class方式继承Component，最后将组件导出即可成为单独组件使用。
import logo from './logo.svg';
import './App.css';

// 组件首字母一定要大写

class App extends Component {

  // react 生命周期函数
  componentWillMount() {
    // 组件挂载前
  }
  componentDidMount() {
    // 组件挂载完执行
  }
  componentWillReceiveProps() {
    // 组件更新数据时执行，props、state
  }
  shouldComponentUpdate() {
    // 组件需要更新时执行
  }
  componentWillUpdate() {
    // 组件更新前执行
  }
  componentDidUpdate() {
    // 组件更新后执行
  }
  componentWillUnmount() {
    // 组件销毁前执行
  }

  // 通过render函数可以将JSX语法渲染成真是dom
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// 子组件
class Child extends Component {
  render() {
    return (
      // 获取父组件的传值
      <p>{this.props.parentProp}</p>
    )
  }
}

// 父组件
class Parent extends Component {
  render() {
      // 通过父组件传递参数
      return <Child parentProp = "我是父级props" />
  }
}

// 使用setState()这个异步函数来变更state
class TestOfState extends Component {
  // constructor(): 创建对象初始化state
  consturtion(){
      this.state={
          count: 0
      }
  }
  render() {
      return (
        <div>
          <button onClick={()=>{
            //点击后可修改state值
            
            this.setState({
              count: this.state.count + 1,
            })
          }}>加1</button>
          <p>{this.state.count}</p>
        </div>
      )
  }
}

// 导出组件
export default App;
