import React, {useState} from 'react'
import { Checkbox } from 'ui-kit/Checkbox/Checkbox'
import './CheckboxPage.scss'


export const CheckboxPage: React.FC = () => {
    const [checkedBox, setcheckedBox] = useState(false);
    const handleChangeCheckedBox =(event:React.ChangeEvent<HTMLInputElement>) => {setcheckedBox(event.target.checked)}
  
  return (
    <div className='CheckboxPage'>
        <Checkbox 
            id={'1'}
            isChecked={checkedBox}
            label="Single"
            onChange={handleChangeCheckedBox}
            hoverStyle={''} activeStyle={''}/>
    </div>
  );
}
