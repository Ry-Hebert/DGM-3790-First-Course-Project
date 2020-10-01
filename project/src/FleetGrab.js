import React from 'react'
import axios from 'axios'
import FleetDis from './FleetDis'

const ShipData = val => {
    if(val === 1){
        return (
            <div className='objList'>
                {
                ShipList.forEach(element => {
                    return (<div className='shipCard'>
                        <h4>{element.name}</h4>
                        </div>
                    )
                })
                }
            </div>
        )
    }
    else{
        return (<div></div>)
    }
}

export default ShipData