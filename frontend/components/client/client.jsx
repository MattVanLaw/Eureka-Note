import React    from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from './../../util/route_util';
import MenuContainer from './menu/menu_container';
import NotesIndex from './notes_index/notes_index';
import NotebooksIndex from './notebooks_index/notebooks_index';
import TagsIndex from './tags/tags_index';

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
      </header>)
  }
}

export default Client;
