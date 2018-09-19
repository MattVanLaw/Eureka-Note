//removeTagging - to remove pass {note_id: #, tag_id: #}
//deleteTag
//assume it will be passed tag and note from tagging bar
//also needs to handle the submenu display
import React from 'react'
import TagMenu from './tag_menu';
class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  handleSelect() {

  }

  render () {
    return(
      <div tabIndex="0"
           onBlur={() => this.setState({ display: false })}
           className={`note-tag-item ${ this.state.display ? "selected-tag" : "" }`}>
        {this.props.tag.name}
        <img
          onClick={() => this.setState({ display: !this.state.display })}
          className="note-tag-arrow"
          src={window.dropArrow} />
        {
          this.state.display ?
          <TagMenu tag={this.props.tag} note={this.props.note}/>
            :
          null
        }
      </div>
    )
  }
}

export default Tag;
