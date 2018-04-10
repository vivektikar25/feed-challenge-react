import React from "react";
import SharedFeedCard from "./SharedFeedCard";
import PostedFeedCard from "./PostedFeedCard";

class FeedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: props.feed
    };
  }

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

export default FeedCard;