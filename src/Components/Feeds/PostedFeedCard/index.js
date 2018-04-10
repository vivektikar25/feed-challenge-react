import React from "react";
import * as sharedService from "./../../../SharedService/";
import Request from "./../../../Utilities/Request/";

import { Card, CardHeader, CardText } from "material-ui/Card";
import CircularProgress from "material-ui/CircularProgress";

class PostedFeedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: props.feed,
      cardsPostContent: "",
      showCardsPostContentFlag: false,
      filterFeedsBy: props.filterFeedsBy,
      showLoader: false
    };

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  getFormattedDate = date => {
    let formattedDate = sharedService.getFormattedDate(date);
    return formattedDate;
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
        this.setState({ showLoader: false });
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
    let { feed, cardsPostContent, showCardsPostContentFlag } = this.state;

    return (
      <div style={{ margin: "1% 20%" }} onClick={this.handleCardClick}>
        <Card expanded={showCardsPostContentFlag}>
          <CardHeader
            style={{ paddingBottom: 5 }}
            title={
              <span>
                <h3 style={{ marginBottom: 0 }}>
                  {feed.actor} |{" "}
                  <span style={{ fontSize: 16, fontWeight: 200 }}>Posted</span>
                </h3>
              </span>
            }
            subtitle={`Published: ${this.getFormattedDate(feed.created_at)}`}
            actAsExpander={true}
            showExpandableButton={false}
          />
          <div
            style={{
              padding: "0px 15px",
              fontSize: "small",
              fontWeight: 100,
              paddingBottom: 10
            }}
          >
            {feed.actor} is an English poet, playwright and actor, widely
            regarded as the greatest writer in the English language.
          </div>
          {this.state.showLoader ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "5%"
              }}
            >
              <CircularProgress />
            </div>
          ) : (
            ""
          )}
          <CardText expandable={true}>
            <span>Post: {cardsPostContent}</span>
            <span
              style={{
                color: "rgba(0, 0, 0, 0.54)",
                display: "block",
                fontSize: 14
              }}
            >
              Updated: {this.getFormattedDate(feed.updated_at)}
            </span>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default PostedFeedCard;
