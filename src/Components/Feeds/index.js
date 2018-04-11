import React from "react";
import Layout from "./../Layout";
import SharedFeedCard from "./SharedFeedCard";
import PostedFeedCard from "./PostedFeedCard";
import DisplayError from "./../Shared/DisplayError";
import * as service from "./Service";
import * as sharedData from "./../../SharedData";
import Request from "./../../Utilities/Request/";

import CircularProgress from "material-ui/CircularProgress";

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsList: [],
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

  shouldComponentUpdate = (nextProps, nextState) => {
    if (
      nextState.filterFeedsBy !== this.state.filterFeedsBy ||
      nextState.hasError !== this.state.hasError ||
      nextState.feedsList !== this.state.feedsList ||
      nextState.feedsList.length !== this.state.feedsList.length
    ) {
      return true;
    } else {
      return false;
    }
  };

  updateFilterFeedsBy = filterFeedsBy => {
    this.setState({ filterFeedsBy });
  };

  fetchFeeds = () => {
    let request = new Request();
    request.fetch("activities", "GET").then(
      data => {
        let feedsList = service.getFeedsList(data);
        this.setState({ feedsList: feedsList });
      },
      err => {}
    );
  };

  getFeedsToDisplay = feedsList => {
    let filterFeedsBy = this.state.filterFeedsBy;
    return this.state.feedsList
      .filter(feed => {
        if (filterFeedsBy === "all") {
          return true;
        } else {
          return filterFeedsBy === feed.verb;
        }
      })
      .map(feed => {
        if (feed.verb === "posted") {
          return <PostedFeedCard key={feed.id} feed={feed} />;
        } else if (feed.verb === "shared") {
          return <SharedFeedCard key={feed.id} feed={feed} />;
        } else {
          return null;
        }
      });
  };

  render() {
    let { filterFeedsBy, hasError, feedsList } = this.state;

    return (
      <div style={{ backgroundColor: "#fdfdfd" }}>
        {hasError ? (
          <DisplayError message="Opps | Something went wrong" />
        ) : (
          <div>
            <Layout updateFilterFeedsBy={this.updateFilterFeedsBy} />
            <div className={"heading-placement"}>
              <span className={"heading"}>
                {sharedData.feedsLabelMap[filterFeedsBy]} Feeds
              </span>
            </div>
            {feedsList.length ? (
              this.getFeedsToDisplay()
            ) : (
              <div className={"app-loader"}>
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
