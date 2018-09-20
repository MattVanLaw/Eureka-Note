import React from 'react'
import { connect } from 'react-redux';
import { createTag } from './../../../actions/tag_actions';
import Tag from './tag.jsx';
// # should allow nested attributes on create
// # params = { tag: {
// # name: 'funny', taggings_attributes: [
// #   { tag_id: 1, note_id: 2 }
// # ]
// # }}
class TaggingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      taggings_attributes: [
        {
          note_id: this.props.note.id,
        }
      ]
    };
    this.update = this.update.bind(this);
  }

  update(e, field) {
    this.setState({
      [field]: e.currentTarget.value,
    });
  }

  render () {
    const tags = this.props.tags;
    const tag_ids = this.props.note.tag_ids;
    const noteTags = tags.filter(tag => tag_ids.includes(tag.id));
    return(
      <footer className="tag-footer-container">
        <div className="tag-footer">
          <i className="fas fa-tag"></i>
          {noteTags.map((tag, key) => {
            return <Tag key={key} note={this.props.note} tag={tag}/>;
          })}
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.update(e, "name")}
            onKeyPress = {e => {
              if (e.key === 'Enter') {
                this.props.createTag(this.state);
                this.setState({ name: ""});
              }
            }}/>
        </div>
      </footer>
    );
  }
}

const mdp = dispatch => {
  return {
    createTag: tag => dispatch(createTag(tag)),
  };
};

export default connect(null, mdp)(TaggingBar);
