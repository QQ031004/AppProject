import React,{Component} from 'react'
import Square from './Square'
import './Board.css' 

class Board extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    genSquareUI(pos){
        const { squares } = this.props
        return (<Square 
                 pos={pos} 
                 info={squares[pos]}
                 onClick={this.props.onClickSquare} 
               />)
     }
    render(){
       
        return (
            <div className="board">
               <div className="row">
                    {this.genSquareUI(0)}
                    {this.genSquareUI(1)}
                    {this.genSquareUI(2)}
               </div> 
               <div className="row">
                    {this.genSquareUI(3)}
                    {this.genSquareUI(4)}
                    {this.genSquareUI(5)}
               </div> 
               <div className="row">
                    {this.genSquareUI(6)}
                    {this.genSquareUI(7)}
                    {this.genSquareUI(8)}
               </div> 
            </div>
        )
    }

}


//Följande kan förenklas som rad:19 20 21, efter tilläget rad:9 10 11
//  <Square pos={0} info={squares[0]}/>
//  <Square pos={1} info={squares[1]}/>
//  <Square pos={2} info={squares[2]}/>
export default Board