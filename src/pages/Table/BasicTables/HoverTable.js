import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Data from "../../../data";
import styles from "./tableColumnStyle";

const HoverTable = () => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {/* Table Hover */}
          Report 3
        </Typography>
        <Divider />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.columns.id}>ID</TableCell>
              <TableCell style={styles.columns.name}>Company Name</TableCell>
              <TableCell style={styles.columns.price}>Fee </TableCell>
              <TableCell style={styles.columns.category}>Request</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.tablePage.items.slice(0, 5).map(item => (
              <TableRow key={item.id} hover={true}>
                <TableCell style={styles.columns.id}>{item.id}</TableCell>
                <TableCell style={styles.columns.name}>
                  {item.companyName}
                </TableCell>
                <TableCell style={styles.columns.price}>{item.Fee}</TableCell>
                <TableCell style={styles.columns.category}>
                  {item.request}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default HoverTable;
