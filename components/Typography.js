import React from 'react'
import { Text } from 'react-native'

export const P = props => {
  const { children, style, ...otherProps } = props

  let fontFamily = 'calibre'
  if (props.normal) fontFamily = 'calibre'
  if (props.medium) fontFamily = 'calibre-medium'
  if (props.semibold) fontFamily = 'calibre-semibold'
  if (props.bold) fontFamily = 'calibre-bold'
  if (props.light) fontFamily = 'calibre-light'

  return (
    <Text
      style={[
        {
          fontSize: props.size || 15,
          fontFamily: fontFamily,
          color: props.color || 'black',
          textAlign: props.centered ? 'center' : undefined,
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  )
}
