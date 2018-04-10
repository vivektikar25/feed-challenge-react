import React from "react";
import SharedFeedCard from "./SharedFeedCard";
import PostedFeedCard from "./PostedFeedCard";

class FeedCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: props.feed
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.feed.id !== this.state.feed.id) {
      this.setState({ feed: nextProps.feed });
    }
  };

  getFeedCard = feed => {
    if (feed.verb === "posted") {
      return <PostedFeedCard feed={feed} />;
    } else if (feed.verb === "shared") {
      return <SharedFeedCard feed={feed} />;
    } else {
      return null;
    }
  };

  render() {
    let { feed } = this.state;
    return this.getFeedCard(feed);
  }
}

export default FeedCards;
