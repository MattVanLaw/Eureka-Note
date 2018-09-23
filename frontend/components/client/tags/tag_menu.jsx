import React from 'react';
import { connect } from 'react-redux';
import { deleteTag, deleteTagging } from './../../../actions/tag_actions';

class TagMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tagging = {
      tag_id: this.props.tag.id,
      note_id: this.props.note.id,
    };
    return(
      <div className="tag-menu-container">
        <div className="tag-menu">
          <div onClick={() => this.props.deleteTagging(tagging)}>
            Remove
          </div>
          <div onClick={() => this.props.deleteTag(this.props.tag.id)}>
            Delete from All Notes
          </div>
        </div>
      </div>
    );
  }
}

const mdp = dispatch => ({
  deleteTagging: tagging => dispatch(deleteTagging(tagging)),
  deleteTag: tagId => dispatch(deleteTag(tagId)),
});

export default connect(null, mdp)(TagMenu);
