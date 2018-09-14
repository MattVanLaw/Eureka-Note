import React    from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from './../../util/route_util';
import MenuContainer from './menu/menu_container';
import NotesIndex    from './notes_index/notes_index';
import NotebooksIndex from './notebooks_index/notebooks_index';

class Client extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotes();
    this.props.fetchNotebooks();
  }

  render () {
    return (
      <header className="header-group">
        <MenuContainer />
        <Switch>
          <ProtectedRoute path="/client/notes"
            component={() => <NotesIndex notes={this.props.notes} />}
          />
          <ProtectedRoute path="/client/notebooks"
            component={() => <NotebooksIndex notebooks={this.props.notebooks} />}
          />
        </Switch>
      </header>)
  }
}

export default Client;
