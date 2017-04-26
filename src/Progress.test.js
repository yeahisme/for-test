import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Progress from './Progress.js'


test('it should has a greater class when real > plan ',()=>{
  const progress = shallow(
    <Progress plan={0.5} real={0.6}/>
  );
  expect(progress.find('.greater').length).toEqual(1);
});
test('it should has a equal class when real = plan ',()=>{
  const progress = shallow(
    <Progress plan={0.5} real={0.5}/>
  );
  expect(progress.find('.equal').length).toEqual(1);
});
test('it should has a less class when real < plan ',()=>{
  const progress = shallow(
    <Progress plan={0.6} real={0.5}/>
  );
  expect(progress.find('.less').length).toEqual(1);
});

