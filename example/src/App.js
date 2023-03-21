import React from 'react'
import './index.css'

import { SplitWords } from 'react-split-words'
const App = () => {
  return <SplitWords wrapper={<span className='text'></span>}>
    This component can wrap a string into individual words tags.
  </SplitWords>
}

export default App
