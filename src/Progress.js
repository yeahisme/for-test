import React, { Component } from 'react';
import classNames from 'classnames';
import './Progress.css';


function ProgressBar(props) {
  var plan = Math.round(props.plan*100);
  var real = Math.round(props.real*100);

  var classList = {
    'Progress': true,
    //real > plan
    'greater': false,
    //real == plan
    'equal': false,
    //real < plan
    'less': false
  }

  if(real > plan) {
    classList.greater = true;
  }else if(real == plan){
    classList.equal = true;
  }else{
    classList.less = true;
  }

  plan= plan+"%";
  real = real+"%";

  return (
    <div className={classNames(classList)}>
      <div className="Progress-real" style={{"width":real}}>实际进度<span>{real}</span></div>
      <div className="Progress-bar">
        <div className="Progress-bar-plan" style={{"width":plan}}></div>
        <div className="Progress-bar-real" style={{"width":real}}></div>
      </div>
      <div className="Progress-plan" style={{"width":plan}}>计划进度<span>{plan}</span></div>
    </div>
  );
}

export default ProgressBar;