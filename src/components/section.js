import React from "react";
export default class Section extends React.Component {
  render() {
    const recipe = this.props.state.recipe;
    const index =
      this.props.state.index === 0 ? recipe.length - 1 : this.props.state.index;
    return (
      <section>
        <div className="section-header">
          <h3>{recipe.length > 0 && recipe[index].recipeName}</h3>
          <span
            onClick={() =>
              this.props.onHandleDeleteRecipe(recipe[index].recipeName)
            }
          >
            <i className="fas fa-trash-alt" />
          </span>
          <span onClick={() => this.props.onHandleEditRecipe(index)}>
            <i className="far fa-edit" />
          </span>
        </div>
        <div className="section-list-wrapper">
          <h4>Ingredients:</h4>
          <ul className="section-list">
            {recipe.length > 0 &&
              recipe[index].ingredients.split("/").map(ingred => {
                return <li key={ingred}>{ingred}</li>;
              })}
          </ul>
          <h4>Directions:</h4>
          <ol className="section-list">
            {recipe.length > 0 &&
              recipe[index].directions.split("/").map(direc => {
                return <li key={direc}>{direc}</li>;
              })}
          </ol>
        </div>
      </section>
    );
  }
}
