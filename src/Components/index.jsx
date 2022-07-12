import React from "react";

export default function Greeting(props) {
    return (
        <>
            <p>Greeting Component</p>
            <p>Hello {props.userName}, {props.userSurname}</p>
        </>
    );
}