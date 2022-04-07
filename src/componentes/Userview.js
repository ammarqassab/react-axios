import React from "react";

export default function Userview(props) {
    const value = props.value;
    return (
        <div>
            <h3>user view</h3>
            {
                value.id > 0 ? (
                <div>
                    <div>Name: {value.name}</div>
                    <div>Email: {value.email}</div>
                </div>
            ) : (<div>please select a view</div>)
            }
        </div>
    ) ;
}