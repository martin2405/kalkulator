import React from 'react';

const Buttons = (props) => {

    const buttonsText = ['AC', 'DEL', '/', '1', '2', '3', '*', '4', '5', '6', '+', '7', '8', '9', '-', '.', '0', '='];

    const buttons = buttonsText.map(button => <button key={button} onClick={() => props.click(button)}>{button}</button>)

    return (
        <>
        {buttons}
        </>
    )
}


export default Buttons;