import React, { Component } from 'react'
import {Table} from './App'



interface Props {
    rows: Table[]
}

interface State {
    array: Table[]
}

export default class TableShow extends Component<Props, State> {
    constructor(props:  Props) {    
        super(props);    
          this.state = { 
              array: props.rows   
          };        
      }   
      handleAddRow=()=>{

        const inValue = {
            id: this.state.array.length,
            name: "test planet",
            email: "test@test.com",
            date: "24.09.2020"
        }
      
        this.setState(state=>{
            const array = state.array.concat(inValue);
            return{array};
        });
        console.log(this.state.array);
        
      };
      

      handleRemoveRow = (id: number) => {

        this.setState(state => {
            // const array = state.array.filter(item => item.id !== id);
            const array = state.array.filter((item, j) => id !== j);
            return {
              array,
            };
        });
      };
    render() {
        return (
            <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> id </th>
                    <th className="text-center"> Name </th>
                    <th className="text-center"> Email </th>
                    <th className="text-center"> Birthday </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.array.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>
                        <input
                          type="text"
                          name="id"
                          value={this.state.array[idx].id}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.array[idx].name}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.array[idx].email}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.array[idx].date}
                          className="form-control"
                        />
                      </td>
                      <button
                        type="button"
                        onClick={() => this.handleRemoveRow(idx)}>
                            Remove
                      </button>
                    </tr>
                   
                  ))}
                </tbody>
              </table>
              

              <button
                onClick={this.handleAddRow}
                className="btn btn-default pull-left"
              >
                Add Row
              </button>
             
            </div>
          </div>
        </div>
      </div>
        );
    }

}
