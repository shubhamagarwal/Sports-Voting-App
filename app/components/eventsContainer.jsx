import React, { Component } from "react";
import { EventsList } from "./eventsList.jsx";
import { VoteOptions } from "./voteOptions.jsx";
import { LoadEvents } from "./loadEvents.jsx";
import {data, randamEvent} from './config/matchData.js';

export class SportsEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: data,
      oneSportData:[],
      voteStep: 1,
      fields:{
        id:'',
        group:'',
        awayName:'',
        homeName:''
      }
    };
    this.getVotePage = this.getVotePage.bind(this);
    this.getSteps = this.getSteps.bind(this);
  }

  componentDidMount() {
    let footBallData = this.state.allEvents.filter((data,key)=> {
        return data.sport === randamEvent;
    });
    this.setState({oneSportData:footBallData});             
  };

  getVotePage(data,e){
    this.state.fields.id = data.id;
    this.state.fields.group = data.group;
    this.state.fields.awayName = data.awayName;
    this.state.fields.homeName = data.homeName;
    this.state.voteStep = 2;

    this.setState(this.state);
  }

  getSteps(){
     switch(this.state.voteStep) {
        case 1:
            return <LoadEvents oneSportData={this.state.oneSportData} getVote={this.getVotePage} randamEvent={randamEvent}/>
        case 2: 
            return <VoteOptions fields={this.state.fields}/>
        default:
            return(<div>No Page Found</div>)
      }
  }

  render() {
    console.log(this.state);  
    return (
      <React.Fragment>
        <div className="events-data">
          <div className="heading">Sports Voting Site</div>
          {this.getSteps()}
        </div>
      </React.Fragment>
    );
  }
}
