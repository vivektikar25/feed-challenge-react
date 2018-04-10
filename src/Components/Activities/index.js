import React from "react";
import Layout from "./../Layout";
import "./Activities.css";

import { Card, CardHeader, CardText } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

class Activities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterFeedsBy: props.filterFeedsBy,
      isSidebarOpen: false
    }
  }

  componentWillReceiveProps = nextProps => {
    if (this.state.filterFeedsBy !== nextProps.filterFeedsBy) {
      this.setState({ filterFeedsBy: nextProps.filterFeedsBy });
    }
  }

  openSideBar = () => {
    this.setState({ isSidebarOpen: true })
  }

  handleSidebarOptionClick = (e) => {
    let filterFeedsBy = e.currentTarget.dataset.option;
    this.setState({ isSidebarOpen: false, filterFeedsBy })
  }

  render() {
    return (
      <div className="activitiesContainer">
        <Layout />
        <Card expanded={true} style={{ "margin": "1% 15%" }}>
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={false}

          />
          <CardText expandable={true}>
            <CircularProgress />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
        </Card>
      </div>);
  }
}


export default Activities;