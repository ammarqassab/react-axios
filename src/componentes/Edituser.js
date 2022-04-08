import React from "react";
import {useParams} from "react-router-dom";
import { MyNavLink } from "./App";

export default function Edituser(props) {
    const valueuser = props.valueuser;
    let params = useParams();
    return (
        <div>
            <h3>Edit id {params.id} user</h3>
            {valueuser.id > 0 ?
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
                : "please select a view"
            } 
            <br/><br/>
            <MyNavLink to={"/"}>return to Page Home</MyNavLink>
        </div>
    ) ;
}