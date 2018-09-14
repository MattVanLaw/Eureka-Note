import React    from 'react';
import { Link } from 'react-router-dom';
import MenuContainer from './menu/menu_container';
import NotesIndex    from './notes_index/notes_index'
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
        <NotesIndex notes={this.props.notes} />

      </header>)
  }
}

export default Client;
