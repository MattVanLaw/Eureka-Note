import React from "react";
import { Switch } from "react-router";
import { ProtectedRoute } from "./../../util/route_util";
import NotebooksIndex from "./notebooks_index/notebooks_index";
import TagsIndex from "./tags/tags_index";

class Client extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchNotebooks();
    this.props.fetchTags();
  }

  render () {
    return (
      <header className="header-group">
        <Switch>
          <ProtectedRoute
            exact path="/client/notebooks"
            component={
              () => <NotebooksIndex
                notes={this.props.notes}
                notebooks={this.props.notebooks} />
            }
          />
          <ProtectedRoute
            exact path="/client/tags"
            component={() => <TagsIndex tags={this.props.tags}/>}
          />
        </Switch>
      </header>
    );
  }
}

export default Client;
