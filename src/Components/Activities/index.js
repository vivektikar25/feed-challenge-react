import React from "react";
import Layout from "./../Layout";
import FeedCard from "./FeedCard";
import "./Activities.css";
import Request from "./../../Utilities/Request";

import CircularProgress from "material-ui/CircularProgress";

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsList: [],
      filterFeedsBy: props.filterFeedsBy
    };
  }

  componentDidMount = () => {
    this.fetchFeeds();
  };

  componentWillReceiveProps = nextProps => {
    if (this.state.filterFeedsBy !== nextProps.filterFeedsBy) {
      this.setState({ filterFeedsBy: nextProps.filterFeedsBy });
    }
  };

  fetchFeeds = () => {
    let request = new Request();
    request.fetch("activities", "GET").then(
      data => {
        this.setState({ feedsList: data.slice(0, 5) });
      },
      err => {}
    );
  };

  displayFeeds = () => {
    return this.state.feedsList.map(feed => (
      <FeedCard key={feed.id} feed={feed} />
    ));
  };

  render() {
    return (
      <div className="activitiesContainer">
        <Layout />

        {this.state.feedsList.length ? (
          this.displayFeeds()
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

export default Activities;
