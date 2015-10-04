import React from 'react'
import styles from './index.css'
import classnames from 'classnames'
import { CountInput } from 'CountInput'

export class App extends React.Component {
  state = {
    data: this.props.data,
    count: 0
  }

  setCount(count){
    this.setState({count})
  }

  sampleArray(array){
    return array[Math.floor(Math.random() * array.length)]
  }

  formatParagraph(paragraph, key){
    // TODO - will these become important enough to have their own components?
    let string = paragraph.join(' ')
    string = string.charAt(0).toUpperCase() + string.slice(1)
    string += '.'

    return (
      <p key={key}>{string}</p>
    )
  }

  generateText(count){
    let textArray = this.props.data.text
    let paragraphs = []
    // TODO:
    // - account for sentences and punctuation
    // - make paragraph size more dynamic (e.g. random number between 200-300 chars so there are varying lengths)
    // - clean up creation process below
    for (let i = 0; i < count; i++) {
      let charLimit = 200
      let charCount = 0
      let paragraph = []
      let word
      while (charCount < charLimit) {
        do {
          word = this.sampleArray(textArray)
        } while (paragraph[paragraph.length - 1] === word)
        paragraph.push(word)
        charCount += word.length
      }

      paragraphs.push(this.formatParagraph(paragraph, i))
    }
    return paragraphs
  }

  render(){
    let count = this.state.count
    let paragraphs = count > 0 ? this.generateText(count) : null

    return (
      <div className={styles.container}>
        <h1>{this.props.data.title}</h1>
        <h3>{this.props.data.description}</h3>
        <p>{this.props.data.prompt}</p>
        <CountInput setCount={::this.setCount} text={this.props.data.buttonText} />
        <div>
          {paragraphs}
        </div>
      </div>
    )
  }
}
