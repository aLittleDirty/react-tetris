import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import propTypes from 'prop-types'

import style from './index.less'

import Pause from '../components/pause'
import { transform } from 'babel-core'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight
    }
  }
  render() {
    let filling = 0;
    // size是一个css对象
    const size = (() => {
      const w = this.state.w
      const h = this.state.h
      const ratio = h / w
      let scale;
      let css = {}
      // 适应手机还是适应PC端？
      if(ratio < 1.5) {
        scale = h / 960;
      } else {
        scale = w / 640;
        filling = (h - (960 * scale)) / scale / 3;
        css = {
          paddingTop: Math.floor(filling) + 42,
          paddingBottom: Math.floor(filling),
          marginTop: Math.floor(-480 - (filling * 1.5))
        }
      }
      css[transform] = `scale(${scale})`
      return css
    })();

    return (
      <div
        className={style.app}
        style={size}
      >
        <div className={classnames({ [style.rect]: true, [style.drop]: this.props.drop})}>
          <div className={style.screen}>
            <div className={style.panel}>
              <Pause data={this.props.pause}></Pause>
            </div>
          </div>
        </div>
      </div>
    )
  }
}