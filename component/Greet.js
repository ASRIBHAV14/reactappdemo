import React, { Component } from 'react'
import Login from './Login'

export default class Greet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "happy workkkkking day",
            cityList: ["Hyderabad", "pune", "chennai", "Kolkata", "Kerala"],
            Emplist: [
                { empid: 101, empname: "chandu", salary: 50000 },
                { empid: 102, empname: "gira", salary: "550000" },
                { empid: 99, empname: "nura", salary: 560000 },
            ]
        }
        this.handleclick = this.handleclick.bind(this)
    }
    handleclick = function () {
        this.setState({ message: "Happy Birthday" })

    }
    render() {
        var newCityList = this.state.cityList.map((city, index) => {
            return <h4 key={index}>City:{city}</h4>
        })

        var newEmpList = this.state.Emplist.map((emp, empindex) => {
            return <li key={empindex}>Employee id:{emp.empid}, name:{emp.empname},  Salary{emp.salary}:</li>
        })
        return (
            <div>
                <p> {this.state.message}{this.state.year} {this.props.firstName}{this.props.lastName}</p>
                <button onClick={this.handleclick}>Click Me</button>
                <br />
                <Login />
                <br />
                {newCityList}
                <br />
                {newEmpList}
            </div>
        )
    }
}

/* export default class Greet extends Component {
    constructor(props) {
        super(props)
        this.state = { message: "happy workkkkking day" }
        this.handleclick = () => {
            this.setState({ message: "happy birthday" })
        };

    }

    render() {
        return (
            <div>
                <p> {this.state.message}{this.state.year} {this.props.firstName}{this.props.lastName}</p>
                <button onClick={this.handleclick}>Click Me</button>

                <br />
                <Login />

            </div>
        )
    }
} */
//in fc render is not needed
//we never use "this" in functional component
//we can use state only in class component
//component using state is mutable i.e.,changable
/* import React from 'react'

export default function Greet(props) {
    return (
        <div>
            <p>Happy WorkDay {props.firstName} {props.lastName}</p>
        </div>
    )
}
 */