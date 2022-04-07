import React from "react";

export default function Adduser(props) {
    const valueuser = props.valueuser;
    return (
        <div>
            <h3>Add user</h3>
            <form onSubmit={props.adduserSubmit}>
                <label>
                    Name : 
                </label>
                <br/>
                <input type="text" value={valueuser.name === null ? "":valueuser.name} onChange={props.handleaddChange} />
                <br/>
                <label>
                    Email : 
                </label>
                <br/>
                <input type="email" value={valueuser.email === null ? "":valueuser.email} onChange={props.handleaddChange} />
                <br/>
                <input type="submit" value="Add" />
            </form>
        </div>
    ) ;
}