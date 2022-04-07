import React from "react";

export default function Editview(props) {
    const value = props.value;
    return (
        <div>
            <h3>edit user</h3>
            <form onSubmit={props.edituserSubmit}>
                <label>
                    Name : 
                </label>
                <br/>
                <input type="text" value={value.name} onChange={props.handleChange} />
                <br/>
                <label>
                    Email : 
                </label>
                <br/>
                <input type="email" value={value.email} onChange={props.handleChange} />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    ) ;
}