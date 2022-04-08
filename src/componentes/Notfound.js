import React from "react";
import { MyNavLink } from "./App";

export default function Notfound () {
    return (
    <>
        <h1>404 , Not Found</h1>
        <MyNavLink to={"/"}>return to Page Home</MyNavLink>
    </>
    );
}