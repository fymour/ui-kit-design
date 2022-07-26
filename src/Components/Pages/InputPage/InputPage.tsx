import React from 'react'
import { Input } from '../../../ui-kit/Input/Input'

const InputPage = () => {
  return (
    <div>
        <Input id={'1'} label={'Empty'} placeholder={'Enter your value'} size={'medium'} onChange={function (str: string): void {
              throw new Error('Function not implemented.')
          } }/>
    </div>
  )
}

export default InputPage