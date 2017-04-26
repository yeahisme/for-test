import React, { Component } from 'react';
import _ from 'underscore';
import {formatDate} from './tools.js'
import Progress from './Progress.js'
import './Building.css'

var colClass = "col-xs-3 Building-d";

class Building extends Component{
  constructor(props){
    super(props);
    this.state={
      //展开的建筑物key
      unfold:[]
    }
    this.handleClick = this.handleClick.bind(this);

  }
  
  buildingItem(data){
    function parts(data){
      return _.map(data,function(item,index) {
        return (
          <li key={index}>
            <h5>{item.name}</h5>
            <div className="row">
              <div className={colClass}>
                <div>计划开始</div>
                <p>{formatDate(item.start_date)}</p>
              </div>
              <div className={colClass}>
                <div>计划完成</div>
                <p>{formatDate(item.end_date)}</p>
              </div>
              <div className={colClass}>
                <div>计划工期</div>
                <p>{item.total_duration}</p>
              </div>
              <div className={colClass}>
                <div>已经施工</div>
                <p>{item.total_elapsed || 0}</p>
              </div>
            </div>
            <Progress plan={item.plan_progress} real={item.real_progress} />
          </li>
        )
      })
    }

    return _.map(data,(item,index) => {
      var unfold = this.state.unfold.length && (_.indexOf(this.state.unfold, index)!== -1);
      return (
        <div key={index} className="Building-item">
          <h3>{item.name}</h3> 
          <div className="row">
            <div className={colClass}>
              <div>计划开始</div>
              <p>{formatDate(item.start_date)}</p>
            </div>
            <div className={colClass}>
              <div>计划完成</div>
              <p>{formatDate(item.end_date)}</p>
            </div>
            <div className={colClass}>
              <div>计划工期</div>
              <p>{item.total_duration}</p>
            </div>
            <div className={colClass}>
              <div>已经施工</div>
              <p>{item.total_elapsed || 0}</p>
            </div>
          </div>
          <Progress plan={item.plan_progress} real={item.real_progress} />
          {unfold
            ?<div className="unfold" onClick={this.handleClick} data-key={index}>收起分部工程进度<br/><span className="Building-caret-up"></span></div>
            :<div className="unfold" onClick={this.handleClick} data-key={index}>显示分部工程进度<br/><span className="Building-caret"></span></div>
          }
          <div className={unfold?"Building-parts show":"Building-parts hide"}>
            <h4>分布工程</h4> 
            <ul>{parts(item.parts)}</ul>
          </div>
        </div>
      );
    });
  }
  handleClick(e){
    var unfold = this.state.unfold.slice(0);
    var value = e.target.dataset.key;
    if(_.indexOf(unfold,value)>-1){
      unfold = _.without(unfold,value);
    }else{
      unfold.push(e.target.dataset.key)
    }
    this.setState({unfold:unfold});
  }
  render(){
    var buildingData =this.props.data;



    return (
      <div className="Building">
        {this.buildingItem.call(this,buildingData)}
      </div>
    )
  }
}

export default Building;