import React from "react";
import Layout from "./../Layout";
import FeedCard from "./FeedCard";
import "./Feeds.css";
import Request from "./../../Utilities/Request/";

import CircularProgress from "material-ui/CircularProgress";

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsList: [],
      feedsDisplayList: [],
      filterFeedsBy: "all"
    };
  }

  componentDidMount = () => {
    this.fetchFeeds();
  };

  fetchFeeds = () => {
    let request = new Request();
    request.fetch("activities", "GET").then(
      data => {
        let feedsDisplayList = this.getFeedsToDisplay(data);
        this.setState({ feedsList: data, feedsDisplayList });
      },
      err => {}
    );
  };

  getFeedsToDisplay = feedsList => {
    return feedsList.map(feed => <FeedCard key={feed.id} feed={feed} />);
  };

  render() {
    let { filterFeedsBy } = this.state;

    return (
      <div className="activitiesContainer">
        <Layout filterFeedsBy={filterFeedsBy} />
        {this.state.feedsList.length ? (
          this.state.feedsDisplayList
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "25%"
            }}
          >
            <CircularProgress size={60} thickness={6} />
          </div>
        )}
      </div>
    );
  }
}

export default Feeds;
