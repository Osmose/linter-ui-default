/* @flow */
/** @jsx React.h */

import * as React from 'preact'
import type { Message } from '../types'

export default class MessageElement extends React.Component {
  props: {
    message: Message,
    showProviderName: boolean,
  };

  openLink: (() => void) = () => {
    // TODO: Remove this when new panel is implemented
    const range = this.props.message.location.position
    if (range) {
      const textEditor = atom.workspace.getActiveTextEditor()
      console.log(range.start)
      if (textEditor) {
        textEditor.setCursorBufferPosition(range.start)
      }
    }
  };

  render() {
    const { message, showProviderName } = this.props

    return (<linter-message className={message.severity}>
      <linter-excerpt>
        { showProviderName ? `${message.linterName}: ` : '' }
        { message.excerpt }
      </linter-excerpt>{' '}
      <a href="#" onClick={this.openLink}>
        <span className="icon icon-code linter-icon"></span>
      </a>
    </linter-message>)
  }
}
