import React from "react";
import * as sharedService from "./../../../../SharedService/";
import Request from "./../../../../Utilities/Request/";

import { Card, CardHeader, CardText } from "material-ui/Card";
import CircularProgress from "material-ui/CircularProgress";

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

  shouldComponentUpdate = (nextProps, nextState) => {
    return true;
  };

  getFormattedDate = date => {
    let formattedDate = sharedService.getFormattedDate(date);
    return formattedDate;
  };

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
        <Card expanded={showCardsSharedUrlFlag}>
          <CardHeader
            style={{ paddingBottom: 5 }}
            title={
              <span>
                <h3 style={{ marginBottom: 0 }}>
                  {feed.actor} |{" "}
                  <span style={{ fontSize: 16, fontWeight: 200 }}>Shared</span>
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
            <span>
              Shared:{" "}
              <a href={cardsSharedUrl} target="_blank">
                {cardsSharedUrl}
              </a>
            </span>
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

export default SharedFeedCard;
