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

const DisplaySharedCard = props => {
  return (
    <Card expanded={props.showCardsSharedUrlFlag}>
      <CardHeader
        style={{ paddingBottom: 5 }}
        title={
          <span>
            <h3 style={{ marginBottom: 0 }}>
              {props.feed.actor} |{" "}
              <span style={{ fontSize: 16, fontWeight: 200 }}>Shared</span>
            </h3>
          </span>
        }
        subtitle={`Published: ${getFormattedDate(props.feed.created_at)}`}
        actAsExpander={true}
        showExpandableButton={false}
      />
      <div className={"actor-bio"}>
        {props.feed.actor} is an English writer and social critic. He created
        some of the world's best-known fictional characters and is regarded by
        many as the greatest novelist.
      </div>
      {props.showLoader ? (
        <div className={"loader"}>
          <CircularProgress />
        </div>
      ) : (
        ""
      )}
      {props.showCardsSharedUrlFlag ? (
        <CardText expandable={true}>
          <span>
            Shared:{" "}
            <a href={props.cardsSharedUrl} target="_blank">
              {props.cardsSharedUrl}
            </a>
          </span>
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

DisplaySharedCard.propTypes = {
  feed: PropTypes.shape(sharedData.FeedStruct).isRequired,
  cardsSharedUrl: PropTypes.string.isRequired,
  showCardsSharedUrlFlag: PropTypes.bool.isRequired,
  showLoader: PropTypes.bool.isRequired
};

export default DisplaySharedCard;
