import React from "react";
import AppBar from "material-ui/AppBar";
import { APPLICATION_NAME } from "./../../Constants/";

import Drawer from "material-ui/Drawer";
import { List, ListItem } from "material-ui/List";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false
    };
  }

  openSideBar = () => {
    this.setState({ isSidebarOpen: true });
  };

  handleSidebarOptionClick = e => {
    let filterFeedsBy = e.currentTarget.dataset.option;
    this.props.updateFilterFeedsBy(filterFeedsBy);
    this.setState({ isSidebarOpen: false });
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
              data-option="shared"
              primaryText="Shared"
              leftIcon={<i className="material-icons">screen_share</i>}
            />
            <ListItem
              onClick={this.handleSidebarOptionClick}
              data-option="posted"
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
