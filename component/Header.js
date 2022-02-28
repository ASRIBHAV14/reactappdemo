import React from "react";

class Header extends React.Component {

    constructor(props) {
        super(props)
        //super-when we need variables of parents class
        //props-properties.used for passing data from 1 component to another

    }

    render() {

        const hrStyle = { backgroundColor: "black" }
        return (
            <div>
                <marquee><h2><i>welcome to {this.props.compName}</i></h2></marquee>
                <href>Home</href>
                <href>Career</href>
                <hr style={hrStyle} size="3"></hr>
            </div>

        )

    }
}
export default Header;