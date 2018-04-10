import React from "react";
import AppBar from "material-ui/AppBar";
import { APPLICATION_NAME } from "./../../Constants/";

import Drawer from "material-ui/Drawer";
import { List, ListItem } from "material-ui/List";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterFeedsBy: "all",
      isSidebarOpen: false,
      filterFeedsBy: props.filterFeedsBy
    };
  }

  componentWillReceiveProps = nextProps => {
    if (this.state.filterFeedsBy !== nextProps.filterFeedsBy) {
      this.setState({ filterFeedsBy: nextProps.filterFeedsBy });
    }
  };

  openSideBar = () => {
    this.setState({ isSidebarOpen: true });
  };

  handleSidebarOptionClick = e => {
    let filterFeedsBy = e.currentTarget.dataset.option;
    this.setState({ isSidebarOpen: false, filterFeedsBy });
  };

  render() {
    return (
      <div>
        <AppBar
          title={APPLICATION_NAME}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onClick={this.openSideBar}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.isSidebarOpen}
          onRequestChange={isSidebarOpen => this.setState({ isSidebarOpen })}
        >
          {" "}
          <List>
            <ListItem
              onClick={this.handleSidebarOptionClick}
              data-option="all"
              primaryText="All Feeds"
              leftIcon={<i className="material-icons">home</i>}
            />
            <ListItem
              onClick={this.handleSidebarOptionClick}
              data-option="share"
              primaryText="Shared"
              leftIcon={<i className="material-icons">screen_share</i>}
            />
            <ListItem
              onClick={this.handleSidebarOptionClick}
              data-option="post"
              primaryText="Posts"
              leftIcon={<i className="material-icons">local_post_office</i>}
            />
          </List>
        </Drawer>
      </div>
    );
  }
}

export default Layout;
