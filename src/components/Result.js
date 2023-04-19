import React from 'react';

const Result = (props) => {
    return(
    <div className='calculator__result'>
        <span className='calculator__result-first-span'>{props.firstSpanResult}</span>
        <span className='calculator__result-second-span'>{props.secondSpanResult}</span>
    </div>
    )
}



export default Result;