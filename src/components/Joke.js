import React, { Component } from "react";
import "./Joke.scss";

export default class Joke extends Component {
  getColor = () => {
    if (this.props.votes >= 15) {
      return "#4CAF50";
    } else if (this.props.votes >= 12) {
      return "#8BC34A";
    } else if (this.props.votes >= 9) {
      return "#CDDC39";
    } else if (this.props.votes >= 6) {
      return "#FFEB3B";
    } else if (this.props.votes >= 3) {
      return "#FFC107";
    } else if (this.props.votes >= 0) {
      return "#FF9800";
    } else {
      return "red";
    }
  };
  getEmoji = () => {
    if (this.props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.votes >= 12) {
      return "em em-laughing";
    } else if (this.props.votes >= 9) {
      return "em em-smiley";
    } else if (this.props.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.votes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  };

  render() {
    return (
      <div className="joke">
        <div className="joke__buttons">
          <i className="fa fa-arrow-up" onClick={this.props.upVote} />
          <span
            style={{ borderColor: this.getColor() }}
            className="joke__votes"
          >
            {this.props.votes}
          </span>
          <i className="fa fa-arrow-down" onClick={this.props.downVote} />
        </div>
        <div className="joke__text">{this.props.text}</div>
        <div className="joke__emoji">
          <i className={this.getEmoji()} />
        </div>
      </div>
    );
  }
}
