import React, { Component } from 'react'
import Square from './Square'
import './PlayerInfo.css' 

class PlayerInfo extends Component {
    render(){
        const { curPlayer } = this.props
        return (<div className="playerInfo">
            Next Player:{curPlayer}
        </div>)
    }
}

export defauld PlayerInfo