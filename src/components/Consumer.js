import React, { Component } from "react";
import { ConsumerValue } from "./Context";

class Consumer extends Component {
    render() {
        return (
            <ConsumerValue>
                { name => {
                    return <div>Welcome { name }</div>
                }}
            </ConsumerValue>
        )
    }
}

export default Consumer;