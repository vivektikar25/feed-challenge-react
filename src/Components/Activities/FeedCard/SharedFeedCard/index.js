import React from "react";

import { Card, CardHeader, CardText } from "material-ui/Card";
import CircularProgress from "material-ui/CircularProgress";

class SharedFeedCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: props.feed
    };
    debugger;
  }

  render() {
    let { feed } = this.state;

    return (
      <Card expanded={true} style={{ margin: "1% 15%" }}>
        <CardHeader
          title={
            <span>
              Shared by:<h3 style={{ marginBottom: 0 }}>{feed.actor}</h3>
            </span>
          }
          subtitle={feed.created_at}
          actAsExpander={true}
          showExpandableButton={false}
        />
        <CardText expandable={true}>
          <CircularProgress />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}

export default SharedFeedCard;
