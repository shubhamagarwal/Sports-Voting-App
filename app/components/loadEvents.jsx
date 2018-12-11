import React, { Component } from "react";
import PropTypes from 'prop-types';
import { EventsList } from "./eventsList.jsx";

export class LoadEvents extends Component {
    getVote(data,e){
        this.props.getVote(data,e);
    }
    render() {
        return(
            <React.Fragment>
            {this.props.oneSportData.length ? 
            (<div className="row">
              {this.props.oneSportData.map((data,i) => {
                return(
                  <EventsList matchData={data} key={i} getVote={this.getVote.bind(this)} randamEvent={this.props.randamEvent}/>
                  )
              })}
            
            </div>) : ''}
            </React.Fragment>
        )
    }

}

LoadEvents.propTypes = {
  oneSportData: PropTypes.array
};