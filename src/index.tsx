import React from 'react'
import { render } from 'react-dom'

const App = ({ test }: { test: string }) => <div>{test}</div>

render(<App test="Hello World" />, document.getElementById('app'))
