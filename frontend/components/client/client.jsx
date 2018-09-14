import React    from 'react';
import { Link } from 'react-router-dom';
import MenuContainer from './notes_index_components/menu/menu_container';

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
        <section className="all-notes">

        </section>
        <article className="note-show">

        </article>
      </header>)
  }
}

export default Client;
