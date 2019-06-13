import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import PageBase from "../components/Dashboard/PageBase";
import Table from "@material-ui/core/Table";
import { connect } from "react-redux";
import {
  getEquipmentByTrackingNo,
  updateRegTypesByTrackingNo
} from "../actions/actionsEquipmentSwitch";

import { regSubSubTypes, regSubTypes } from "../data";

const styles = {
  toggleDiv: {
    marginTop: 20,
    marginBottom: 5
  },
  toggleLabel: {
    color: grey[400],
    fontWeight: 100
  },
  buttons: {
    marginTop: 30
  },
  saveButton: {
    marginLeft: 5
  }
};

class EquipmentSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackingNo: "",
      regitemSubsubtypes: 0,
      regitemSubtypes: 0,
      errors: {},
      onsub: false,
      updated: false,
      equipType: true
    };
    this.searchTracking = this.searchTracking.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onUpdateRegDetails = this.onUpdateRegDetails.bind(this);
  }

  searchTracking = e => {
    e.preventDefault();
    const trackingNo = {
      trackingNo: this.state.trackingNo
    };
    // add dispatch method for searching reg by tracking
    this.props.getEquipmentByTrackingNo(trackingNo);
    this.setState({ onsub: true });
  };

  componentWillReceiveProps(props) {
    console.log(props.registration.regitemSubtypes);

    if (
      props.registration.regitemSubtypes === 1 ||
      props.registration.regitemSubtypes === 2 ||
      (props.registration.regitemSubtypes === 7 ||
        props.registration.regitemSubtypes === 9)
    ) {
      this.setState({ equipType: false });
    } else {
      this.setState({ equipType: true });
    }

    if (typeof props.registration.regitemSubsubtypes !== "undefined") {
      this.setState({
        regitemSubtypes: props.registration.regitemSubtypes,
        regitemSubsubtypes: props.registration.regitemSubsubtypes
      });
    } else {
      this.setState({
        regitemSubtypes: props.registration.regitemSubtypes,
        regitemSubsubtypes: "null"
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  selectOptionsRegSubTypes = e => {
    return regSubTypes.map(rsubtypes => (
      <option key={rsubtypes.value} value={rsubtypes.value}>
        {rsubtypes.option}
      </option>
    ));
  };

  selectOptionsRegSubSubTypes = e => {
    return regSubSubTypes.map(rsubsubtypes => (
      <option key={rsubsubtypes.value} value={rsubsubtypes.value}>
        {rsubsubtypes.option}
      </option>
    ));
  };

  onUpdateRegDetails = e => {
    e.preventDefault();
    const regitemSubtypes = this.getRegSubType.value;
    const regitemSubsubtypes = this.getRegSubSubType.value;
    const trackingNo = this.state.trackingNo;
    const updateRegdetails = {
      trackingNo,
      regitemSubtypes,
      regitemSubsubtypes
    };
    // add dispatch method for updating regdetails by tracking
    this.props.updateRegTypesByTrackingNo(updateRegdetails);
    // this.props.getEquipmentByTrackingNo(updateRegdetails);

    this.setState({ onsub: false, updated: true });
  };

  displayRegDetails = e => {
    const { registration } = this.props;

    if (this.props.error) {
      return <div>Tracking not found</div>;
    } else if (!this.state.equipType) {
      return <div>Not an Equipment Type</div>;
    } else if (this.state.onsub && registration.length !== 0) {
      return (
        <div>
          <form onSubmit={this.onUpdateRegDetails}>
            <Table striped="true" bordered="true">
              <thead>
                <tr>
                  <th>Tracking No</th>
                  <th>Equipment types</th>
                  <th>Equipment Subtypes</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr key={0}>
                  <th scope="row">
                    <input
                      id="trackingNo"
                      type="number"
                      disabled="disabled"
                      className="form-control"
                      value={this.state.trackingNo}
                    />
                  </th>
                  <td>
                    <select
                      type="select"
                      className="form-control"
                      id="regitemSubtypes"
                      ref={select => (this.getRegSubType = select)}
                      onChange={this.handleChange}
                      value={this.state.regitemSubtypes}
                    >
                      <option value="null">Select </option>
                      {this.selectOptionsRegSubTypes()}
                    </select>

                    {/* <select
                      type="select"
                      className="form-control"
                      id="regitemSubtypes"
                      ref={select => (this.getRegSubType = select)}
                      onChange={this.handleChange}
                      value={registration.regitemSubtypes}
                    >
                      <option value="">Select</option>
                      {this.selectOptionsRegSubTypes()}
                    </select> */}
                  </td>
                  <td>
                    <select
                      type="select"
                      className="form-control"
                      id="regitemSubsubtypes"
                      ref={select => (this.getRegSubSubType = select)}
                      onChange={this.handleChange}
                      value={this.state.regitemSubsubtypes}
                    >
                      <option value="null">Select </option>
                      {this.selectOptionsRegSubSubTypes()}
                    </select>
                  </td>
                  <td style={styles.buttons}>
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      value="Update"
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </form>
        </div>
      );
    } else if (this.state.updated) {
      return (
        <div>
          Tracking No : {this.state.trackingNo} updated with given details
        </div>
      );
    } else {
      return <div>Tracking not found</div>;
    }
  };

  render() {
    return (
      <div>
        <br />
        <PageBase
          title="Equipment Switch"
          navigation="Admin Tools / Equipment Switch"
        >
          <form onSubmit={this.searchTracking}>
            <TextField
              name="trackingNo"
              id="trackingNo"
              label="Enter Tracking No"
              value={this.state.trackingNo}
              margin="normal"
              onChange={this.handleChange}
            />
            <Divider />

            <div style={styles.buttons}>
              <Button variant="contained">Cancel</Button>
              <Button
                style={styles.saveButton}
                variant="contained"
                type="submit"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </form>
        </PageBase>

        <br />
        {this.displayRegDetails()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registration: state.equip.regItemDetails,
  auth: state.auth,
  error: state.equip.error
});

const mapDispatchToProps = dispatch => ({
  getEquipmentByTrackingNo: trackingNo =>
    dispatch(getEquipmentByTrackingNo(trackingNo)),

  updateRegTypesByTrackingNo: updateRegdetails =>
    dispatch(updateRegTypesByTrackingNo(updateRegdetails))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentSwitch);
