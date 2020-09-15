import React, { Component } from 'react'
import FleetGrab from './FleetGrab'

class fleetDis extends Component {
    
    state = {
        displayTog: 0
    }

    shipDisplayToggle1 = () =>{
        this.setState({
            displayTog: 1
        })
    }

    shipDisplayToggle2 = () =>{
        this.setState({
            displayTog: 1
        })
    }

    render(){
        return (
            <main>
                <div>
                    <h1>Star Citizen Ship List</h1>
                    <h2>This App displays a list of ships from the game Star Citizen</h2>
                </div>
                <div>
                    <button onClick={this.shipDisplayToggle1}>Display all Ships</button>
                    <button onClick={this.shipDisplayToggle2}>Display Ships With Brochure</button>
                </div>
                <div>
                    <FleetGrab val={this.state.displayTog}></FleetGrab>
                </div>
            </main>
        )
    }
}

export default fleetDis