import React, { Component } from "react";
import PropTypes from 'prop-types';
import {API_PATH} from './config/matchData.js';

export class EventsList extends Component {
    goToVote(id,e){
        let data = {
            group     : this.groupField.innerText,
            awayName : this.awayName.innerText,
            homeName    : this.homeName.innerText,
            id:id
        } 
        e.preventDefault();
        this.props.getVote(data);
    }
    render() {
        return(
            <div className="column" key={this.props.matchData.id}>
                 <img src={`${API_PATH}/app/aasets/images/${this.props.randamEvent}.png`} alt="Football"/> 
                <h1 className="away-name" ref={ (input) => { this.groupField = input } }>{this.props.matchData.group}</h1>
                <h2 className="away-name" ref={ (input) => { this.awayName = input } }>{this.props.matchData.awayName}</h2>
                <h2 className="vs">vs</h2>
                <h2 className="home-name" ref={ (input) => { this.homeName = input } }>{this.props.matchData.homeName}</h2>
                <button className="button" onClick={this.goToVote.bind(this,this.props.matchData.id)}>Vote</button>
            </div>
        )
    }

}

EventsList.propTypes = {
  randamEvent: PropTypes.string,
  group: PropTypes.string
};