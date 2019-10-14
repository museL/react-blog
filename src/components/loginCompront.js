import React from "react"
import { connect } from "react-redux"
import { increment } from "../store/action";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

function Login({ count, increment }) {
    console.log({ count, increment })
    return (
        <div className="login">
            <Button >-</Button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button >reset</button>
        </div>
    )
}


const mapStateToProps = state => ({
    count: state.count
})


const mapDispatchToProps = {
    increment
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);