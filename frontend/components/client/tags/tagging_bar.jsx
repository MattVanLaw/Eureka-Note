import React from 'react'
import { connect } from 'react-redux';
import { createTag, addTagging } from './../../../actions/tag_actions';
import Tag from './tag.jsx';

class TaggingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      taggings_attributes: [{ note_id: this.props.note.id }],
    };

    this.update = this.update.bind(this);
  }

  update(e, field) {
    this.setState({
      [field]: e.currentTarget.value,
    });
  }

  render () {
    const tag_ids = this.props.note.tag_ids;
    const noteTags = this.props.tags.filter(tag => tag_ids.includes(tag.id));
    const matchingTag = this.props.tags.filter(tag => tag.name === this.state.name) || [];
    const tagExists = matchingTag.length > 0;
    return(
      <footer className="tag-footer-container">
        <div className="tag-footer">
          <i className="fas fa-tag"></i>
          {
            noteTags.map((tag, key) => {
              return <Tag key={key} note={this.props.note} tag={tag}/>;
            })
          }
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.update(e, "name")}
            onKeyPress = {e => {
              if (e.key === 'Enter') {
                tagExists ?
                  this.props.addTagging({
                    tag_id: matchingTag[0].id,
                    note_id: this.props.note.id,
                  }) : this.props.createTag(this.state);
                this.setState({ name: "" });
              }
            }}/>
        </div>
      </footer>
    );
  }
}

const msp = state => ({
  tags: Object.values(state.entities.tags),
});

const mdp = dispatch => ({
  createTag: tag => dispatch(createTag(tag)),
  addTagging: tagging => dispatch(addTagging(tagging)),
});

export default connect(null, mdp)(TaggingBar);
