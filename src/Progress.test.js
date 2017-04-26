import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Progress from './Progress.js'


test('it should has greater class when real > plan ',()=>{
  const progress = shallow(
    <Progress plan={0.5} real={0.6}/>
  );
  expect(progress.find('.greater').length).toEqual(1);
})
