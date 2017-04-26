import React, { Component } from 'react';
import Search from './Search.js';
import Progress from './Progress.js';
import Building from './Building.js';
import _ from 'underscore';
import ajax from 'superagent';
import logo from './logo.svg';
import './App.css'

const dataUrl = "./progress.json";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:{},
      holdData:{},
      search:false
    };
    this.handleSearch= this.handleSearch.bind(this);
  }
  saveData(data) {
    data = data || {};
    var buildingData = data.buildings || {};
    this.setState({ data: buildingData, holdData: buildingData});
  }
  fetchData(url){
    ajax.get(url)
      .end((error, response) => {
        if (!error && response) {
          this.saveData(response.body);
        } else {
          console.log('Error fetching data', error);
        }
      }
    );
  }
  componentWillMount() {
    this.fetchData(dataUrl);
  }
  handleSearch(v){
    var search = this.state.seach;
    var holdData = this.state.holdData;

    if(!search){
      search = true;
    }

    if(v.length===0){
      search = false;
      this.setState({data:holdData,search:search});
      return;
    }
    var filterData = {};
    _.each(holdData,function(val,key){
      if(val.name.indexOf(v) > -1){
        filterData[key] = val;
      }
    })
    this.setState({data:filterData,search:search});
  }

  render() {
    return (
      <div className="container-fluid App">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>热电厂二期项目</h2>
        <Search handleSearch={this.handleSearch} />
        <Building data={this.state.data} search={this.state.search} />
      </div>
    );
  }
}

export default App;