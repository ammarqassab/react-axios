import React from "react";
import {useParams} from "react-router-dom";
import { MyNavLink } from "./App";

export default function Userview(props) {
    const value = props.value;
    let params = useParams();
    return (
        <div>
            <h3>user id {params.id} view</h3>
            {
                value.id > 0 ? (
                <div>
                    <div>Name: {value.name}</div>
                    <div>Email: {value.email}</div>
                </div>
            ) : (<div>please select a view</div>)
            }
            <br/>
            <MyNavLink to={"/"}>return to Page Home</MyNavLink>
        </div>
    ) ;
}