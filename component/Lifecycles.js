//getDerivedStateFromProps(props, state) is a static method that is called just before render() method in both mounting and updating phase in React. It takes updated props and the current state as arguments. We have to return an object to update state or null to indicate that nothing has changed.12
//The getSnapshotBeforeUpdate() method is invoked just before the DOM is being rendered. It is used to store the previous values of the state after the DOM is updated
//componentDidMount. The componentDidMount() method is called after the component is rendered.(initial render)
//componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

import React, { Component } from 'react'

export default class Lifecycles extends Component {
    constructor(props) {
        super(props);
        this.state = { location: "kerala" };
        console.log("this is constructor");
    }
    //----------------------------------------------------------
    static getDerivedStateFromProps(props, sta) {
        console.log("getDerivedstate is executed" + "country is" +
            props.country + "......    " + "state is " + sta.location);
        return null;
        //derived tsate is called before and after the mount

    }
    //-----------------------------------------------------------
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate executed!")
        return true;
        //if the return is false it doesn't render the updated changes
    }
    //----------------------------------------------
    render() {
        return (
            <div>lifecycle
                location:{this.state.location}
                <button onClick={() => { this.setState({ location: "Hyderabad" }) }} > Change location?</button>
            </div>
        )
    }

    //------------------------------------------------
    componentDidMount() {
        console.log("ComponentDid Mount executed!")
    }
    //-------------------------------------------
    getSnapshotBeforeUpdate(prevprops, prevState) {
        console.log(`getSnapshotBeforeUpdate executed :
    previous country:${prevprops.country}
    previous location:${prevState.location}`);
        return null;
    }
    //---------------------------------------------
    componentDidUpdate() {
        console.log("componentDidUpdate executed")
    }
}
