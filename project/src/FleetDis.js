import React, { Component } from 'react'
import FleetGrab from './FleetGrab'
import axios from 'axios'

// const ShipData = val => {
//     if(val === 1){
//         return (
//             ShipList.forEach(element => {
//                 return(
//                 <div className='shipCard'>
//                     <h4>{element.name}</h4>
//                 </div>
//                 )
//             })
//         )
//     }
//     else {
//         return (<div></div>)
//     }
// }

let fleetDis = () => {
    
    shipDisplayToggle1 = () =>{
        this.setState({
            displayTog: 1
        })
        console.log(this.state.displayTog)
        return (
            <div className='objList'>
                {
                ShipList.forEach(element => {
                    console.log('This is: ' + element.name)
                    return (
                        <div className='shipCard'>
                            <h4>{element.name}</h4>
                        </div>
                    )
                })
                }
            </div>
    )} 

    shipDisplayToggle2 = () =>{
        this.setState({
            displayTog: 2
        })
        console.log(this.state.displayTog)
    }

    render()
    {
        return (
            <main>
                <div>
                    <h1>Star Citizen Ship List</h1>
                    <h2>This App displays a list of ships from the game Star Citizen, which is produced by Roberts Space Industries</h2>
                </div>
                <div>
                    <button onClick={this.shipDisplayToggle1}>Display all Ships</button>
                    <button onClick={this.shipDisplayToggle2}>Display Ships With Brochure</button>
                </div>
                <div>
                    <ShipData val={disTog}></ShipData>
                </div>
            </main>
        )
    }
}

export default fleetDis