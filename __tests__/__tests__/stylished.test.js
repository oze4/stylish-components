import React from 'react';
import { configure, mount } from 'enzyme';
import 'jest';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import tlr, { render, cleanup } from '@testing-library/react';
import stylished from '../../src/stylished.jsx';

// configure({ adapter: new Adapter() });

const TestComponent = stylished('div')`
    background-color: red;
    &:hover {
        background-color: blue;
    }
    @media (min-width: 700px) {{
        background-color: green;
    }}
`;

test('It has to contain TestComponent', () => {
    const tc = render(
        <div>
            <TestComponent />
        </div>
    );
    tlr.
    console.log(tc)
})

/*
describe('Render a stylished-component', () => {
  it('should have background-color of red', () => {
    const wrapper = mount(<TestComponent />);
    const el = wrapper.find('div').getDOMNode();
    wrapper

    const bgColor = getComputedStyle(el).getPropertyValue('background-color');
    expect(bgColor).toBe('red');
  });

  it('should fire onMouseOver event', () => {
    const wrapper = mount(<TestComponent />);
    const spy = spyOn(wrapper.instance(), 'onMouseOver');
    expect(spy).toHaveBeenCalled();
  });

  // it('should change background-color when hovered', () => {
  //   const wrapper = mount(<TestComponent />);
  //   const el = wrapper.find('div').getDOMNode();
  //   const bgColorBeforeHover = getComputedStyle(el).getPropertyValue('background-color');
  //   expect(bgColorBeforeHover).toBe('red');
  //   wrapper.simulate('mouseover');
  //   expect(getComputedStyle(el).getPropertyValue('background-color')).toBe('blue');
  // });
});
*/
