import React, { useCallback } from 'react';
import * as dateFns from 'date-fns';

import './Select.scss';

const Select = (props) => {
    const dateFormat = "dd MMMM yyyy";
    let selectedValue = `${dateFns.format(props.selectedValue, dateFormat)}`;
    let values = [];
    props.values.forEach(value=> {
        let temp = `${dateFns.format(value, dateFormat)}`;
        values = [...values, temp];
    });
    const onSelectClick = useCallback((event) => {
        let select = event.target.value;
        console.log(select);
        let date
        values.forEach((val, index) => {
            if(val === select) {
                date = props.values[index];    
            }
        })
        props.selectChange(date);
      }, [props])    
    return(
        <div className="select-container">
        <select className="border-no bg-white" value={selectedValue} onChange={onSelectClick}>
            {values.map((value, key) => (
            <option key={key} value={value.key}> {value}</option>
            ))}
        </select>
    </div>
    );
}

export default Select;