import React,{Component} from 'react'
import Square from './Square'
import './History.css' 

class History extends Component {

    handleChangeRecord=(curStepCount,record)=>{
        const { onClickRecord } = this.props;
        if(onClickRecord){
            onClickRecord(curStepCount,record)
        }
    }
    genRecordItemUI(record,index){
        return (
            <div key={`record-item-${index}`}
            className="recordItem">
                {index+1}.<button onClick=
                {this.handleChangeRecord.bind(this,index,record)}
                className="btnRecord">{record.player}Put it in #
                {record.pos}Position</button>
            </div>
        )
    }
    handleRestartGame=()=>{
        const { onClickRestartGame } = this.props
        if(onClickRestartGame){
            onClickRestartGame()
        }
    }
    genRestartGameItemUI(){
        return (
            <div className="recordItem">
                0.<button onClick=
                {this.genRestartGmaeItemUI()} 
                className="btnRecord">Replay
                </button>              
            </div>
        )
    }
    render(){
        const { history } = this.props
        if(hostory&& history.length>0){
        return (
          <div className="history">
            {this.genRestartGmaeItemUI()} 
            {history.map((record,index)=>this.genRecordItemUI(record,index))}
         </div>)
        }else{
            return (<div className="history">Ej Närvarande Historik</div>)
        }
    }
 }
 
                
export defauld History