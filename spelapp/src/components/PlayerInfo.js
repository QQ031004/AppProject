import React,{Component} from 'react'
import Square from './Square'
import './PlayerInfo.css' 

class PlayerInfo extends Component {
    render(){
        const { curPlayer,winInfo } = this.props
        console. log("PlayerInfo:winInfo->",winInfo)
        if(winInfo.isWin){
          return (<div className="playInfo">Player
            {winInfo.winPlayer}-Vunnit!</div>)
        }else{
            return (<div className="playInfo">Next Player:
            {curPlayer}</div>)
        }
     }
   }
export defauld PlayerInfo