import React from "react";
import PropTypes from "prop-types";
import DisplayPostCard from "./DisplayPostCard/";
import DisplayError from "./../../Shared/DisplayError";
import * as sharedData from "./../../../SharedData";
import Request from "./../../../Utilities/Request/";

class PostedFeedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: props.feed,
      cardsPostContent: "",
      showCardsPostContentFlag: false,
      showLoader: false,
      showError: false
    };

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (nextProps.feed.id !== prevState.feed.id) {
      return { feed: nextProps.feed };
    }
    return null;
  };

  fetchPostContent = () => {
    this.setState({ showLoader: true });
    let request = new Request();
    let id = this.state.feed.object.split(":")[1];
    request.fetch(`posts/${id}`, "GET").then(
      data => {
        this.setState({
          showLoader: false,
          cardsPostContent: data.content,
          showCardsPostContentFlag: true
        });
      },
      err => {
        this.setState({ showLoader: false, showError: true });
      }
    );
  };

  handleCardClick = () => {
    if (this.state.showCardsPostContentFlag) {
      this.setState({ showCardsPostContentFlag: false });
    } else {
      if (this.state.cardsPostContent) {
        this.setState({ showCardsPostContentFlag: true });
      } else {
        this.fetchPostContent();
      }
    }
  };

  render() {
    let {
      feed,
      cardsPostContent,
      showCardsPostContentFlag,
      showError,
      showLoader
    } = this.state;

    return (
      <div className={"feed-card"} onClick={this.handleCardClick}>
        <DisplayPostCard
          feed={feed}
          cardsPostContent={cardsPostContent}
          showCardsPostContentFlag={showCardsPostContentFlag}
          showLoader={showLoader}
        />
        {showError ? <DisplayError message="Sorry unable to show post" /> : ""}
      </div>
    );
  }
}

PostedFeedCard.propTypes = {
  feed: PropTypes.shape(sharedData.FeedStruct).isRequired
};

export default PostedFeedCard;
