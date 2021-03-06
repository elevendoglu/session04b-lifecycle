import React, { Component } from 'react'

var myT;

export default class TestComponent extends Component {
    constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
        name: "Michael",
        color: "blue",
        count: 0,
    };
    console.log("Hello from TestComponent constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Hello from getDerivedStateFromProps")
        console.log("Props: ", props)
        console.log("state: ", state)
        // return {model: "new model"}
        return null

    }

    componentDidMount(){
        console.log("Hello from TestComponent componentDidMount")
        // console.log(this.state)
        myT = setTimeout(() => {
            this.setState({count: this.state.count + 1 })
        }, 3000)
    }

    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate!....")
        return this.state.count < 3 ? true : false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("TestComp componentDidUpdate")
        console.log("Prevprops: ", prevProps)
        console.log("Prevstate: ", prevState)
    }

    componentWillUnmount() {
        console.log("component BYE BYE...")
        clearTimeout(myT)
    }

    HandleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        console.log("Hello from TestComponent Render")
        return (
            <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <p> {this.state.count} </p>
                <button onClick={this.HandleClick}>increase</button>
            </div>
        )
    }
}
