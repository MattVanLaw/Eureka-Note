import React from "react";
import MenuContainer from "./../menu/menu_container";

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const tags = this.props.tags;
    return (
      <div>
        <MenuContainer />
        <div className="tag-index-container">
          <div className="tag-index-title">Tags</div>
          <div className="tag-index-item-container">
            {
              tags.map((tag, key) => {
                return (
                  <div key={key} className="tag-index-wrapper">
                    <div className="tag-initial">{tag.name[0]}</div>
                    <div className="tag-index-item">{tag.name}</div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TagsIndex;
