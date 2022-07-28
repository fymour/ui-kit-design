import React, {useState} from 'react'
import { Checkbox } from 'ui-kit/Checkbox/Checkbox'
import './CheckboxPage.scss'


export const CheckboxPage: React.FC = () => {
    const [checkedBox, setcheckedBox] = useState(false);
    const handleChangeCheckedBox =(event:React.ChangeEvent<HTMLInputElement>) => {setcheckedBox(event.target.checked)}
  
  return (
    <div className='CheckboxPage'>
        <div className="header-checkbox">
            <div className="left">

            </div>
            <div className="right">
                <p>Default</p>
                <p>Hover</p>
                <p>Focused</p>
                <p>Inactive</p>
            </div>
        </div>
        <div className="main-checkbox">
            <div className="first">
                <h2>S</h2>
                <p>Deselected</p>
                <Checkbox 
                id={'1'} 
                isChecked={checkedBox}
                label="Single"
                onChange={handleChangeCheckedBox}/>
                <Checkbox 
                id={'1'} 
                isChecked={checkedBox}
                label="Single"
                onChange={handleChangeCheckedBox}/>
                <Checkbox 
                id={'1'} 
                isChecked={checkedBox}
                label="Single"
                onChange={handleChangeCheckedBox}/>
                <Checkbox 
                id={'1'} 
                isChecked={checkedBox}
                label="Single"
                onChange={handleChangeCheckedBox}/>
            </div>
            <div className="second">
                <h2>S</h2>
                <p>Selected</p>
                <Checkbox 
                id={'1'} 
                isChecked={checkedBox}
                label="Single"
                onChange={handleChangeCheckedBox}/>
                <Checkbox 
                id={'2'} 
                isChecked={checkedBox}
                label="Single"
                onChange={handleChangeCheckedBox}/>
                <Checkbox 
                id={'4'} 
                isChecked={checkedBox}
                label="Single"
                onChange={handleChangeCheckedBox}/>
                <Checkbox 
                id={'11'} 
                isChecked={checkedBox}
                label="Single"
                onChange={handleChangeCheckedBox}/>
            </div>
            <div className="third">

            </div>
        </div>
        <Checkbox 
        id={'1'} 
        isChecked={checkedBox}
        label="Single"
        onChange={handleChangeCheckedBox}/>
    </div>
  );
}
