import React from 'react'
import styles from './index.css'
import classnames from 'classnames'

export class CountInput {
  handleClick(){
    // TODO - set limit for number of paragraphs?
    let input = this.refs.count.getDOMNode()
    let count = $(input).val()
    this.props.setCount(count)
  }

  render(){
    return (
      <div className={styles.container}>
        <form>
          <input ref='count' type='number' />
          <button onClick={::this.handleClick}>{this.props.text}</button>
        </form>
      </div>
    )
  }
}