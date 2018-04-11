import React from "react";
import PropTypes from "prop-types";
import * as sharedService from "./../../../../SharedService/";

import { Card, CardHeader, CardText } from "material-ui/Card";
import CircularProgress from "material-ui/CircularProgress";

const getFormattedDate = date => {
    let formattedDate = sharedService.getFormattedDate(date);
    return formattedDate;
};

const DisplaySharedCard = (props) => {
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
            <div
                style={{
                    padding: "0px 15px",
                    fontSize: "small",
                    fontWeight: 100,
                    paddingBottom: 10
                }}
            >
                {props.feed.actor} is an English writer and social critic. He created some of the world's best-known fictional characters and is regarded by many as the greatest novelist.
          </div>
            {props.showLoader ? (
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
            {props.showCardsSharedUrlFlag ? (
                <CardText expandable={true}>
                    <span>
                        Shared:{" "}
                        <a href={props.cardsSharedUrl} target="_blank">
                            {props.cardsSharedUrl}
                        </a>
                    </span>
                    <span
                        style={{
                            color: "rgba(0, 0, 0, 0.54)",
                            display: "block",
                            marginBottom: "5px",
                            fontSize: 14
                        }}
                    >
                        Updated: {getFormattedDate(props.feed.updated_at)}
                    </span>
                    <span>
                        <a href="#">show less</a>
                    </span>
                </CardText>
            ) : (
                    <div
                        style={{
                            padding: "0px 15px",
                            fontSize: "small",
                            fontWeight: 100,
                            paddingBottom: 10
                        }}>
                        {!props.showLoader ? <a href="#">show more</a> : ""}
                    </div>
                )}
        </Card>
    )
}

export default DisplaySharedCard;