import React from 'react'
import d3 from 'd3'
import queue from 'queue-async'
import { App } from 'App'
import ipsumText from 'data/test.js'

window.jQuery = window.$ = require("jquery")


if (typeof document !== 'undefined'){
  React.render(<App data={ipsumText} />, document.body)
}
