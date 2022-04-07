import React from "react";

export default function Editview(props) {
    const valueuser = props.valueuser;
    return (
        <div>
            <h3>Edit user</h3>
            <form onSubmit={props.edituserSubmit}>
                <label>
                    Name : 
                </label>
                <br/>
                <input type="text" value={valueuser.name === null ? "":valueuser.name} onChange={props.handleChange} />
                <br/>
                <label>
                    Email : 
                </label>
                <br/>
                <input type="email" value={valueuser.email === null ? "":valueuser.email} onChange={props.handleChange} />
                <br/>
                <input type="submit" value="Edit" />
            </form>
        </div>
    ) ;
}