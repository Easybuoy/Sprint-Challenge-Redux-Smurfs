import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf, getSmurfById, updateSmurf } from "../../actions/";

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    const { smurfId } = this.props.match.params;
    if (smurfId) {
      this.props.getSmurfById(smurfId);
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = event => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(payload);
  };

  updateSmurf = e => {
    e.preventDefault();
    const { smurfId } = this.props.match.params;
    const { smurf } = this.props.smurfs;
    const payload = {
      name: this.state.name || smurf.name,
      age: this.state.age || smurf.age,
      height: this.state.height || smurf.height
    };
    this.props.updateSmurf(smurfId, payload);
  };

  render() {
    const { addingSmurf, smurf, updatingSmurf } = this.props.smurfs;

    if (addingSmurf) {
      this.props.history.push("/");
    }

    if (updatingSmurf) {
      this.props.history.push("/");
    }

    const { smurfId } = this.props.match.params;
    let eventText = "Add to the village";
    let eventHandler = this.addSmurf;
    if (smurfId) {
      eventText = "Update Smurf";
      eventHandler = this.updateSmurf;
    }

    return (
      <div className="SmurfForm">
        <form onSubmit={eventHandler}>
          <input
            placeholder="Name"
            name="name"
            defaultValue={smurf.name}
            onChange={this.handleInputChange}
          />
          <input
            name="age"
            defaultValue={smurf.age}
            onChange={this.handleInputChange}
            placeholder="Age"
          />
          <input
            name="height"
            defaultValue={smurf.height}
            onChange={this.handleInputChange}
            placeholder="Height"
          />
          <button type="submit">{eventText}</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfReducer
});

export default connect(
  mapStateToProps,
  { addSmurf, getSmurfById, updateSmurf }
)(SmurfForm);
