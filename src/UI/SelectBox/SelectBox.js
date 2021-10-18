import React from 'react';

const SelectBox = (props) => (
    <div style={{margin:'5px'}} onClick={props.clicked}>
        {props.req ? <input value={props.value} id={props.value} type='checkbox'defaultChecked/>:<input value={props.value} id={props.value} type='checkbox'/>}
        <label style={{fontSize: '13px',fontWeight:'bold',paddingLeft:'2px'}}>{props.value}</label>
    </div>
);
export default SelectBox;