import React from "react";
import Modal from "react-modal";

class ReactModal extends React.Component {
  state = {
    recipeName: "",
    ingredients: "",
    directions: "",
    isEdit: true
  };
  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onHandleSubmit = e => {
    e.preventDefault();
    if (this.state.recipeName) {
      this.props.onAddRecipe(this.state);
      this.props.closeModal();
      if (this.props.state.showSaveBtn) {
        this.props.changeShowSaveBtn();
      }
      this.setState({
        recipeName: "",
        ingredients: "",
        directions: "",
        isEdit: true
      });
    } else {
      return alert("Add recipe name");
    }
  };
  componentDidUpdate = () => {
    const recipe = this.props.forEditState.recipe;
    const { IndexFedit } = this.props.forEditState;
    if (recipe[IndexFedit] && this.state.isEdit) {
      this.setState({
        recipeName: recipe[IndexFedit].recipeName,
        ingredients: recipe[IndexFedit].ingredients,
        directions: recipe[IndexFedit].directions
      });
      this.setState({ isEdit: false });
    }
  };

  render() {
    const { modalIsOpen, showSaveBtn } = this.props.state;
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={false}
        closeTimeoutMS={2000}
        ariaHideApp={false}
        className="myModal"
      >
        <div className="modal-from-wrapper">
          <h2>{showSaveBtn ? "Edit Recipe" : "Add Recipe"}</h2>
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <label htmlFor="recipeName">Recipe name:</label>
              <input
                onChange={this.onHandleChange}
                type="text"
                className="form-control"
                name="recipeName"
                id="recipeName"
                placeholder="Add your recipe name"
                value={this.state.recipeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Ingredients">Ingredients:</label>
              <textarea
                onChange={this.onHandleChange}
                className="form-control"
                name="ingredients"
                id="Ingredients"
                placeholder="Seperate your ingredients by ' / ' to have a list"
                value={this.state.ingredients}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Directions">Directions:</label>
              <textarea
                onChange={this.onHandleChange}
                className="form-control"
                placeholder="Seperate your directions by ' / ' to have a list"
                id="Directions"
                name="directions"
                value={this.state.directions}
              />
            </div>
            <div className="form-group form-buttons">
              <button type="submit" className="btn btn-success">
                {showSaveBtn ? "Save" : "Add"}
              </button>
              <button
                type="button"
                onClick={this.props.closeModal}
                className="btn btn-warning"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}
export default ReactModal;
