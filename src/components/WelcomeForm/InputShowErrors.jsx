import React from 'react'

function InputShowErrors(props) { 
    return (
        <React.Fragment>
            <div className="formik-show-errors" style={(props.styled)?props.styled:{}}>
                {props.errors?<div className="help-block">{props.errors}</div>:null}
            </div>
        </React.Fragment>
    )
}

export default InputShowErrors
