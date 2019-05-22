import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import PageBase from "../components/Dashboard/PageBase";
import Table from "@material-ui/core/Table";
import { connect } from "react-redux";
import { getEquipmentByTrackingNo } from "../actions/actionsEquipmentSwitch";
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
      updated: false
    };
    this.searchTracking = this.searchTracking.bind(this);
  }

  searchTracking = e => {
    e.preventDefault();
    const trackingNo = {
      trackingNo: this.state.trackingNo
    };

    // add dispatch method for searching reg by tracking
    this.setState({ onsub: true });
    this.props.getEquipmentByTrackingNo(trackingNo);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onUpdateRegDetails = e => {
    e.preventDefault();
    const regitemSubtypes = this.getRegSubType.value;
    const regitemSubsubtypes = this.getRegSubSubType.value;
    const trackingNo = this.state.trackingNo;
    const updatedRegdetails = {
      trackingNo,
      regitemSubtypes,
      regitemSubsubtypes
    };
    console.log(updatedRegdetails);

    // add dispatch method for updating regdetails by tracking
    this.setState({ onsub: false, updated: true });
    //this.props.updateRegTypesByTrackingNo(updatedRegdetails);
  };

  displayRegDetails = e => {
    const { registration } = this.props;

    if (this.state.onsub) {
      return (
        <div>
          <form onSubmit={this.onUpdateRegDetails}>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Tracking No</th>
                  <th>Regitem types</th>
                  <th>Regitem Subtypes</th>
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
                      defaultValue={this.state.trackingNo}
                    />
                  </th>
                  <td>
                    <select
                      type="select"
                      className="form-control"
                      id="regitemSubtypes"
                      ref={select => (this.getRegSubType = select)}
                      defaultValue={registration.regitemSubtypes}
                      onChange={this.onChange}
                    >
                      <option value="1">Compression Ignition (Diesel)</option>
                      <option value="2">Spark Ignition</option>
                      <option value="3">
                        Sand & Gravel Screening and Rock Crushing
                      </option>
                      <option value="4">Concrete Batch Plant</option>
                      <option value="5">Abrasive Blasting</option>
                      <option value="7">Tactical Support Equipment</option>
                      <option value="8">Miscellaneous</option>
                      <option value="9">Pile Driver</option>
                      <option value="10">Wood Processing</option>
                      <option value="11">Storage Silo</option>
                      <option value="12">Rock Drill</option>
                      <option value="13">Slurry Mixer</option>
                      <option value="14">
                        Road Surface Processing (Pavement Crushing & Recycling)
                      </option>
                      <option value="15">Converted Data</option>
                      <option value="16">Unknown</option>
                    </select>
                  </td>
                  <td>
                    <select
                      type="select"
                      className="form-control"
                      id="regitemSubsubtypes"
                      ref={select => (this.getRegSubSubType = select)}
                      defaultValue={registration.regitemSubsubtypes}
                      onChange={this.onChange}
                    >
                      <option value="1">Tub Grinder</option>
                      <option value="2">Trommel Screen</option>
                      <option value="3">Hammer Mill</option>
                      <option value="4">Horizontal Grinder</option>
                      <option value="5">Wood Chipper</option>
                      <option value="8">Transfer Conveyor</option>
                      <option value="10">Compost Turner</option>
                      <option value="11">Shredder</option>
                      <option value="12">Cement Slurry Mixer</option>
                      <option value="13">Lime Slurry Mixer</option>
                      <option value="14">Crushing plant</option>
                      <option value="15">Screening plant</option>
                      <option value="16">Grinder </option>
                      <option value="17">Planer</option>
                      <option value="18">Truck Mix</option>
                      <option value="19">Central Mix</option>
                      <option value="20">Trenching Machine</option>
                      <option value="21">Cold Planer</option>
                      <option value="22">Crushing and screening plant</option>
                      <option value="23">Wood/Misc Processing Screen</option>
                      <option value="24">Milling Machine</option>
                      <option value="25">Pavement Grinder</option>
                      <option value="26">Conveyor</option>
                      <option value="27">Aggregate Slurry Mixer</option>
                      <option value="28">Reclaimer Machine</option>
                      <option value="29">Mixing Plant</option>
                      <option value="30">Stump Cutter</option>
                      <option value="31">Soil Stabilizer</option>
                      <option value="32">Radial Stacker</option>
                      <option value="33">Blending Plant</option>
                      <option value="34">Rip Rap Plant</option>
                    </select>
                  </td>
                  <td style={styles.buttons}>
                    <input
                      style={styles.saveButton}
                      variant="contained"
                      color="secondary"
                      type="submit"
                      value="Update"
                    />
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
              hintText="Tracking No"
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
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  getEquipmentByTrackingNo: trackingNo =>
    dispatch(getEquipmentByTrackingNo(trackingNo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentSwitch);
