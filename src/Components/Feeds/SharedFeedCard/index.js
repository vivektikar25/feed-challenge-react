import React from "react";
import PropTypes from "prop-types";
import * as sharedData from "./../../../SharedData";
import Request from "./../../../Utilities/Request/";
import DisplaySharedCard from "./DisplaySharedCard";

class SharedFeedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: props.feed,
      cardsSharedUrl: "",
      showCardsSharedUrlFlag: false,
      showLoader: false
    };

    this.handleCardClick = this.handleCardClick.bind(this);
    this.fetchSharedUrl = this.fetchSharedUrl.bind(this);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.feed.id !== prevState.feed.id) {
      return { feed: nextProps.feed }
    }
    return null
  }

  fetchSharedUrl = () => {
    this.setState({ showLoader: true });
    let id = this.state.feed.object.split(":")[1];
    let request = new Request();
    request.fetch(`shares/${id}`, "GET").then(
      data => {
        this.setState({
          showLoader: false,
          cardsSharedUrl: data.url,
          showCardsSharedUrlFlag: true
        });
      },
      err => {
        this.setState({ showLoader: false });
      }
    );
  };

  handleCardClick = () => {
    if (this.state.showCardsSharedUrlFlag) {
      this.setState({ showCardsSharedUrlFlag: false });
    } else {
      if (this.state.cardsSharedUrl) {
        this.setState({ showCardsSharedUrlFlag: true });
      } else {
        this.fetchSharedUrl();
      }
    }
  };

  render() {
    let { feed, cardsSharedUrl, showCardsSharedUrlFlag } = this.state;

    return (
      <div style={{ margin: "1% 20%" }} onClick={this.handleCardClick}>
        <DisplaySharedCard
          feed={feed}
          cardsSharedUrl={cardsSharedUrl}
          showCardsSharedUrlFlag={showCardsSharedUrlFlag}
          showLoader={this.state.showLoader} />
      </div>
    );
  }
}

SharedFeedCard.propTypes = {
  feed: PropTypes.shape(sharedData.FeedStruct).isRequired
};

export default SharedFeedCard;
