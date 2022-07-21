import React from 'react'
import Button from 'ui-kit/Button/Button'

export const ButtonPage = () => {
  return (
    <div>
        <Button children={"Button"} disableStyle={''} hoverStyle={''} activeStyle={''}/>
        <Button children={"Button"} disabled={true} disableStyle={''} hoverStyle={''} activeStyle={''}/>
        <Button children={"aidar"} disableStyle={''} hoverStyle={''} activeStyle={''} variant={'secondary'} size={"large"}/>
    </div>
  )
}
