import React from 'react'

export default function Alert(props) {
  const capitalizeFirstLetter = (word)=>{
    let temp = word.toLowerCase();
    return temp.charAt(0).toUpperCase() + temp.slice(1);
  }
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalizeFirstLetter(props.alert.type)}</strong> : {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
  )
}
