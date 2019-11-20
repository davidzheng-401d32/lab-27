import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter';

Enzyme.configure({ adapter: new Adapter() });

describe('testing the Counter', () => {
  it('can click down', () => {
    let app = mount(<Counter />);
    let downClicker = app.find('.down');
    expect (downClicker).toBeDefined();
    expect(app.state('count')).toBe(0);
    downClicker.simulate('click');
    expect(app.state('count')).toBe(-1);
  })

  it('can click up', () => {
    let app = mount(<Counter />);
    let upClicker = app.find('.up');
    expect (upClicker).toBeDefined();
    expect(app.state('count')).toBe(0);
    upClicker.simulate('click');
    expect(app.state('count')).toBe(1);
  })

  it('can check that state is being transferred to the DOM', () => {
    let app = mount(<Counter />);
    let span = app.find('.counter');
    expect(span).toBeDefined();
  })

  it('can assert DOM stability via snapshot testing', () => {
    const renderTree = renderer.create(<Counter />).toJSON();
    expect(renderTree).toMatchSnapshot();
  })
})
