import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { grey } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import PageBase from "../components/Dashboard/PageBase";

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
  render() {
    return (
      <div>
        <br />
        <PageBase
          title="Equipment Switch"
          navigation="Admin Tools / Equipment Switch"
        >
          <form>
            <TextField
              hintText="Tracking No"
              label="Enter Tracking No"
              margin="normal"
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
      </div>
    );
  }
}

export default EquipmentSwitch;
