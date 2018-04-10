import React from "react";
import Layout from "./../Layout";
import FeedCards from "./FeedCards";
import DisplayError from "./../Shared/DisplayError";
import * as service from "./Service";
import "./Feeds.css";
import Request from "./../../Utilities/Request/";

import CircularProgress from "material-ui/CircularProgress";
import Snackbar from "material-ui/Snackbar";
import RaisedButton from "material-ui/RaisedButton";

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsList: [],
      feedsDisplayList: [],
      filterFeedsBy: "all",
      hasError: false
    };
  }

  componentDidMount = () => {
    this.fetchFeeds();
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  updateFilterFeedsBy = filterFeedsBy => {
    let feedsDisplayList = this.getFeedsToDisplay(
      this.state.feedsList,
      filterFeedsBy
    );
    this.setState({ filterFeedsBy, feedsDisplayList });
  };

  fetchFeeds = () => {
    let request = new Request();
    request.fetch("activities", "GET").then(
      data => {
        let feedsList = service.getFeedsList(data);
        let feedsDisplayList = this.getFeedsToDisplay(
          feedsList,
          this.state.filterFeedsBy
        );
        this.setState({ feedsList: feedsList, feedsDisplayList });
      },
      err => {}
    );
  };

  getFeedsToDisplay = (feedsList, filterFeedsBy) => {
    return feedsList
      .filter(feed => {
        if (filterFeedsBy === "all") {
          return true;
        } else {
          return feed.verb === filterFeedsBy;
        }
      })
      .map(feed => <FeedCards key={feed.id} feed={feed} />);
  };

  render() {
    let { filterFeedsBy } = this.state;

    return (
      <div className="activitiesContainer">
        {this.state.hasError ? (
          <DisplayError message="Opps | Something went wrong" />
        ) : (
          <div>
            <Layout updateFilterFeedsBy={this.updateFilterFeedsBy} />
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
        )}
      </div>
    );
  }
}

export default Feeds;
