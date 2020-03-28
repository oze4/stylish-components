import React, { Component } from 'react';
import { generateAlphabeticName, makeStylesheet, getStylesheet } from './utils';

const StylishComponents = (TargetComponent) => (strs, ...exprs) => {
  return class extends Component {
    interpolateStyle() {
      const style = exprs.reduce((result, expr, index) => {
        const isFunc = typeof expr === 'function';
        const value = isFunc ? expr(this.props) : expr;
        return result + value + strs[index + 1];
      }, strs[0]);

      const randomNumbers = Math.floor(Math.random() * (9999999999999));
      const className = generateAlphabeticName(randomNumbers);

      let existingSheet = getStylesheet();
      if (!existingSheet) {
        makeStylesheet();
        existingSheet = getStylesheet();
      }
      
      this.element.setAttribute('class', className);
      existingSheet.textContent += `.${className}{${style}}`;;
    }

    componentDidMount() {
      this.interpolateStyle();
    }

    componentDidUpdate() {
      this.interpolateStyle();
    }

    render() {
      return <TargetComponent {...this.props} ref={(element) => (this.element = element)} />;
    }
  };
}

export default StylishComponents;
