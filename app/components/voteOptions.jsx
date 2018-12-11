import React, { Component } from "react";
import PropTypes from 'prop-types';

export class VoteOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            draw: false,
            awayName:false,
            homeName:false,
            drawCount:0,
            homeCount:0,
            awayCount:0
        };
        this.submitVote = this.submitVote.bind(this);
        this.getTotalVoteCount = this.getTotalVoteCount.bind(this);
    }

    componentDidMount(){
        this.getTotalVoteCount();
    }

    onVote(value,e) {
        if(value == 1){
            this.setState({awayName: true,draw: false, homeName:false});
        } else if(value == 2) {
            this.setState({draw: true, awayName: false, homeName:false});
        } else {
            this.setState({homeName: true, draw: false, awayName: false});
        }
    }

    getTotalVoteCount(){
        let allMatchRecord = JSON.parse(localStorage.getItem("voteRecord"));
        let filterByMatch = allMatchRecord.filter(data => {
            return data.id === this.props.fields.id;
        });
        if(filterByMatch.length){
            let val = filterByMatch.reduce(function(previousValue, currentValue) {
            return {
                awayName: previousValue.awayName + currentValue.awayName,
                draw: previousValue.draw + currentValue.draw,
                homeName: previousValue.homeName + currentValue.homeName
            }
            });
            this.setState({drawCount: val.draw, homeCount: val.homeName, awayCount: val.awayName});
        }
    }

    submitVote(id,e){
        if(this.state.draw || this.state.awayName || this.state.homeName){
            let matchObj = {};
            matchObj = {
                    id:id,
                    draw:this.state.draw*1,
                    awayName:this.state.awayName*1,
                    homeName:this.state.homeName*1,
                }
            if (localStorage.getItem('voteRecord') === null) {
                let allMatchRecord = [];
                allMatchRecord.push(matchObj);
                localStorage.setItem('voteRecord', JSON.stringify(allMatchRecord));
            } else {
                let allMatchRecord = JSON.parse(localStorage.getItem("voteRecord"));
                allMatchRecord.push(matchObj);
                localStorage.setItem('voteRecord', JSON.stringify(allMatchRecord));
                
            }
            window.location.reload();
        }
    }

    render() {
        return (
            <div className="voteOptions">
                <h2><input type="radio" name="site_name"
                    value={this.props.fields.awayName}
                    checked={this.state.awayName}
                    onChange={this.onVote.bind(this,1)}
                />{this.props.fields.awayName} <span className="voteCount">(Vote :{this.state.awayCount})</span></h2>
                <h2><input type="radio" name="address"
                    value="Draw"
                    checked={this.state.draw}
                    onChange={this.onVote.bind(this,2)} />Draw <span className="voteCount">(Vote :{this.state.drawCount})</span></h2>
                <h2><input type="radio" name="address"
                    value={this.props.fields.homeName}
                    checked={this.state.homeName}
                    onChange={this.onVote.bind(this,3)} />{this.props.fields.homeName} <span className="voteCount">(Vote :{this.state.homeCount})</span></h2>
                <button className="button" onClick={this.submitVote.bind(this,this.props.fields.id)}>Vote</button>
            </div>

        )
    }

}

VoteOptions.propTypes = {
  id: PropTypes.string,
  fields: PropTypes.object
};