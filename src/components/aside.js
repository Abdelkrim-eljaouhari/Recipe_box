import React from "react";
export default class Aside extends React.Component {
  render() {
    return (
      <aside>
        <div className="aside_wrapper">
          <ul
            className="aside-list"
            onClick={e => this.props.onChangeRecipe(e.target.id)}
          >
            {this.props.recipe.length > 0 &&
              this.props.recipe.map((recipe, i) => {
                return (
                  <li key={recipe.recipeName + i} id={i}>
                    {recipe.recipeName}
                  </li>
                );
              })}
          </ul>
        </div>
      </aside>
    );
  }
}
