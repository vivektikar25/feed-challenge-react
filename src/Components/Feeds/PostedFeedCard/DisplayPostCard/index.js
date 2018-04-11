import React from "react";
import PropTypes from "prop-types";
import * as sharedService from "./../../../../SharedService/";
import * as sharedData from "./../../../../SharedData";

import { Card, CardHeader, CardText } from "material-ui/Card";
import CircularProgress from "material-ui/CircularProgress";

const getFormattedDate = date => {
  let formattedDate = sharedService.getFormattedDate(date);
  return formattedDate;
};

const DisplayPostCard = props => {
  return (
    <Card expanded={props.showCardsPostContentFlag}>
      <CardHeader
        style={{ paddingBottom: 5 }}
        title={
          <span>
            <h3 style={{ marginBottom: 0 }}>
              {props.feed.actor} |{" "}
              <span style={{ fontSize: 16, fontWeight: 200 }}>Posted</span>
            </h3>
          </span>
        }
        subtitle={`Published: ${getFormattedDate(props.feed.created_at)}`}
        actAsExpander={true}
        showExpandableButton={false}
      />
      <div className={"actor-bio"}>
        {props.feed.actor} is an English poet, playwright and actor, widely
        regarded as the greatest writer in the English language.
      </div>

      {props.showLoader ? (
        <div className={"loader"}>
          <CircularProgress />
        </div>
      ) : (
        ""
      )}
      {props.showCardsPostContentFlag ? (
        <CardText expandable={true}>
          <span>Post: {props.cardsPostContent}</span>
          <span className={"feed-updated-date"}>
            Updated: {getFormattedDate(props.feed.updated_at)}
          </span>
          <span className={"feed-card-show-less"}>show less</span>
        </CardText>
      ) : (
        <div className={"feed-card-show-more"}>
          {!props.showLoader ? "show more" : ""}
        </div>
      )}
    </Card>
  );
};

DisplayPostCard.propTypes = {
  feed: PropTypes.shape(sharedData.FeedStruct).isRequired,
  cardsPostContent: PropTypes.string.isRequired,
  showCardsPostContentFlag: PropTypes.bool.isRequired,
  showLoader: PropTypes.bool.isRequired
};
export default DisplayPostCard;
