import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Aside from "./components/aside";
import Section from "./components/section";
import "./styles.scss";
class App extends React.Component {
  state = {
    recipe: [],
    index: 0,
    IndexFedit: undefined
  };
  onAddRecipe = element => {
    if (this.state.IndexFedit) {
      const recipe = [...this.state.recipe];
      recipe[this.state.IndexFedit] = element;
      return this.setState({ recipe, IndexFedit: undefined });
    }
    let exist = false;
    this.state.recipe.map(recipe => {
      if (recipe.recipeName === element.recipeName) {
        return (exist = true);
      }
    });
    if (!exist) {
      this.setState({
        recipe: [...this.state.recipe].concat(element),
        index: 0
      });
    } else {
      alert("This recipe exist");
    }
  };
  onHandleDeleteRecipe = shouldBeDelted => {
    const confi = confirm(
      `Are you sure you want to delete "${shouldBeDelted}"`
    );
    if (shouldBeDelted && confi) {
      this.setState({
        recipe: this.state.recipe.filter(
          ({ recipeName }) => recipeName !== shouldBeDelted
        ),
        index: 0
      });
    }
  };
  onHandleEditRecipe = IndexFedit => {
    if (IndexFedit !== -1) {
      this.setState({ IndexFedit });
      this.refs.header.openModal();
      this.refs.header.changeShowSaveBtn();
    }
  };
  onChangeRecipe = index => {
    this.setState({ index });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.recipe.length > 0) {
      localStorage.setItem("recipe", JSON.stringify(this.state.recipe));
    }
  };
  componentDidMount = () => {
    const stringRecipe = localStorage.getItem("recipe");
    if (stringRecipe) {
      const recipe = JSON.parse(stringRecipe);
      this.setState({ recipe });
    }
  };

  render() {
    const recipe = this.state.recipe;
    return (
      <div className="App">
        <div className="container">
          <Header
            onAddRecipe={this.onAddRecipe}
            ref="header"
            forEditState={this.state}
          />
          <div>
            <div className="recipe-wrapper">
              <Aside recipe={recipe} onChangeRecipe={this.onChangeRecipe} />
              <Section
                state={this.state}
                onHandleDeleteRecipe={this.onHandleDeleteRecipe}
                onHandleEditRecipe={this.onHandleEditRecipe}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
