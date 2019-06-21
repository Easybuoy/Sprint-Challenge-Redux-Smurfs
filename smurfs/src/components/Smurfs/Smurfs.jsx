import React, { Component } from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../../actions/";
import Smurf from "./Smurf";

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
    // console.log(this.props);
  }

  deleteSmurf = id => {
    if (window.confirm("Are you sure you want to delete this smurf")) {
      //   axios
      //     .delete(`http://localhost:3333/smurfs/${id}`)
      //     .then(res => this.setState({ smurfs: res.data }));
    }
  };

  render() {
    console.log(this.props.smurfs);
    const { smurfs } = this.props.smurfs;
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>

        {smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
              deleteSmurf={this.deleteSmurf}
            />
          );
        })}
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

const mapStateToProps = state => ({
  smurfs: state.smurfReducer
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(Smurfs);
