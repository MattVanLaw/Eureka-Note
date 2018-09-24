import React from "react";
import TagMenu from "./tag_menu";

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  render () {
    return(
      <div 
        tabIndex="0"
        onBlur={() => this.setState({ display: false })}
        className={`note-tag-item ${ this.state.display ? "selected-tag" : "" }`}>
        {this.props.tag.name}
        <img
          className="note-tag-arrow"
          onClick={() => this.setState({ display: !this.state.display })}
          src={window.dropArrow} />
        {
          this.state.display ?
            <TagMenu tag={this.props.tag} note={this.props.note}/>
            :
            null
        }
      </div>
    );
  }
}

export default Tag;
