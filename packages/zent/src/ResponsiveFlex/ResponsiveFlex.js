import React, { Component, Children, isValidElement } from 'react';
import cx from 'classnames';
import PT from 'prop-types';
import Item from './item';

export default class ResponsiveFlex extends Component {
  render() {
    const { className, children, gutter, rowVolume, aspectRatio } = this.props;
    const itemWidth = `calc(100% / ${rowVolume} - (${rowVolume} - 1) * ${gutter}px / ${rowVolume})`;
    const itemHeight = `${100 / aspectRatio}%`;
    return (
      <div className={cx('ResponsiveFlex', className)}>
        {Children.map(children, child => {
          if (!isValidElement(child)) {
            return null;
          }
          return (
            <Item width={itemWidth} height={itemHeight}>
              {child}
            </Item>
          );
        })}
        {Array.from(Array(rowVolume)).map((_, idx) => (
          <div
            className="ResponsiveFlex__placeholder"
            style={{ width: itemWidth }}
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
          />
        ))}
      </div>
    );
  }
}

ResponsiveFlex.propTypes = {
  className: PT.string,
  gutter: PT.number,
  rowVolume: PT.number,
  aspectRatio: PT.number,
  children: PT.node.isRequired,
};

ResponsiveFlex.defaultProps = {
  className: '',
  gutter: 10,
  rowVolume: 3,
  aspectRatio: 1,
};
