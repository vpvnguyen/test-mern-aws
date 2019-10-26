import React, { Component } from "react";
import MaterialTable from "material-table";
import axios from 'axios';

class MaterialTableDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        { title: "Name", field: "name" },
        { title: "Descripton", field: "description" },
        { title: "Quantity", field: "quantity", type: "numeric" }
      ],
      data: [],
      businessId: '',
    }
  }


  componentDidUpdate() {
    if (this.props.businessId !== this.state.businessId) {
      console.log(this.props.businessId)
      let url = 'http://localhost:5000/api/promotion/all/business/' + this.props.businessId
      axios
        .get(url)
        .then(response => {
          console.log(response)
          this.setState({
            data: response.data,
            businessId: this.props.businessId
          })
        })
        .catch(err => console.log(err));
    }

  };



  render() {
    return (
      <>
        <MaterialTable
          style={{ marginTop: "100px" }}
          title="Promotions"
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...this.state.data];
                  data.push(newData);
                  this.setState({ ...this.state, data });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>

              new Promise(resolve => {
                console.log(newData)
                setTimeout(() => {
                  resolve();
                  const data = [...this.state.data];
                  data[data.indexOf(oldData)] = newData;
                  this.setState({ ...this.state, data });
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  const data = [...this.state.data];
                  data.splice(data.indexOf(oldData), 1);
                  this.setState({ ...this.state, data });
                }, 600);
              })
          }}
        />
      </>
    );
  }

}

export default MaterialTableDemo; 