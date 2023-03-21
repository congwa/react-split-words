import React from 'react'

const escapeRegExp = (regExp) => {
  var specialChars = [
    '$',
    '^',
    '*',
    '(',
    ')',
    '+',
    '[',
    ']',
    '{',
    '}',
    '\\',
    '|',
    '.',
    '?',
    '/'
  ]
  var regex = new RegExp('(\\' + specialChars.join('|\\') + ')', 'g')
  return regExp.replace(regex, '\\$1')
}

export const SplitWords = React.forwardRef(
  ({ children, wrapper, delimiter = ' ' }, ref) => {
    if (typeof children !== 'string') {
      throw new Error('SplitWords only accepts a string as child.')
    }
    const words = children.split(
      new RegExp(`(${escapeRegExp(delimiter)})`, 'g')
    )
    return (
      <>
        {words.map((word, i) => {
          if (delimiter === ' ' && word === delimiter) {
            return <React.Fragment key={i}> </React.Fragment>
          }
          return React.cloneElement(wrapper, { ref, key: i }, word)
        })}
      </>
    )
  }
)
