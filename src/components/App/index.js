import React from 'react'
import styles from './index.css'
import classnames from 'classnames'

export class App extends React.Component {
  state = {
    data: this.props.data,
    count: 0
  }

  setCount(){
    let input = this.refs.count.getDOMNode()
    let count = $(input).val()
    this.setState({count})
  }

  generateText(count){
    let textArray = this.props.data.text
    let paragraphs = []
    // TODO - account for sentences and punctuation
    for (let i = 0; i < count; i++) { // each paragraph
      let charLimit = 200
      let charCount = 0
      let string = ''
      while (charCount < charLimit) {
        // maybe make string an array so that we can check for back-to-back duplicates
          // we can also make the first phrase capitalised
        // then we can join them with ' ' and append a '.' as a final step
        // then flatten the array for use in the <p> tags
        let word = textArray[Math.floor(Math.random() * textArray.length)]
        string += word
        charCount += word.length
        string += charCount >= 200 ? '.' : ' '
      }
      // paragraphs.push(this.formatParagraph(paragraph)) could be an alternative, split up logic
      paragraphs.push(
        <p key={i}>{string}</p>
      )
    }
    return paragraphs
  }

  render(){
    let count = this.state.count
    let paragraphs = count > 0 ? this.generateText(count) : null

    return (
      <div className={styles.container}>
        <h1>Arsene Wenger Ipsum</h1>
        <h3>"He'd probably be injured anyway..."</h3>
        <p>How many paragraphs do you want?</p>
        <input ref='count' type='text' />
        <button onClick={::this.setCount}>Go!</button>
        <div>
          {paragraphs}
        </div>
      </div>
    )
  }
}

