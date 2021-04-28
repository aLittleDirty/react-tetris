import React from 'react'
import cn from 'classnames'
import propTypes from 'prop-types'
import style from './index.less'

export default class Pause extends React.Component {
  constructor() {
    super();
    this.state = {
      showPause: false
    };
  }
  componentDidMount() {
    this.setShake(this.props.data)
  }
  componentWillReceiveProps({ data }) {
    this.setShake(data)
  }
  shouldComponentUpdate({ data }) {
    if(data) {
      return true
    }
    return data !== this.props.data
  }
  setShake(bool) {
    if(bool && !Pause.timeout) {
      Pause.timeout = setInterval(() => {
        this.setState({
          showPause: !this.state.showPause
        })
      }, 250)
    }
    if(!bool && Pause.timeout) {
      clearInterval(Pause.timeout);
      this.setState({
        showPause: false
      })
    }
  }
  render() {
    return (
      <div
        className={cn({
          bg: true,
          [style.pause]: true,
          [style.c]: this.state.showPause
        })}>
      </div>
    )
  }
}

// static对象允许你定义静态的方法，静态方法可在类上调用或获取（唯一性）
Pause.statics = {
  timeout: null
}

// 对父组件传进来的值进行类型限制，并强制必传，否则报错
Pause.propTypes = {
  data: propTypes.bool.isRequired
}

// 在父子组件传值的过程中，如果父组件不给子组件传值，这时，子组件就显示默认值
Pause.defaultProps = {
  data: false
}