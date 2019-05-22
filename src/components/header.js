import React from "react";
import ReactModal from "./modalForm";

class Header extends React.Component {
  state = {
    modalIsOpen: false,
    showSaveBtn: false
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
    if (this.state.showSaveBtn) {
      this.setState({ showSaveBtn: false });
    }
  };
  changeShowSaveBtn = () => {
    this.setState({ showSaveBtn: !this.state.showSaveBtn });
  };
  render() {
    return (
      <div className="header">
        <ReactModal
          state={this.state}
          closeModal={this.closeModal}
          onAddRecipe={this.props.onAddRecipe}
          changeShowSaveBtn={this.changeShowSaveBtn}
          forEditState={this.props.forEditState}
        />
        <div className="header-radius-box">
          <span onClick={this.openModal}>
            <i className="fas fa-plus-circle" />
          </span>
          <p className="header-paragraph">Add New Recipe</p>
        </div>
      </div>
    );
  }
}
export default Header;
