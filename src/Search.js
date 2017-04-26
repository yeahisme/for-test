import React, { Component } from 'react';
import {FormGroup, FormControl} from 'react-bootstrap'
import {trim} from './tools.js'

class Search extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.handleSearch(trim(e.target.value));
  }
  render(){
    return(
      <form>
        <FormGroup>
          <FormControl onChange={this.handleChange} type="text" className="gray" placeholder="搜索建筑物" />
        </FormGroup>
      </form>
    );
  }
}

export default Search;