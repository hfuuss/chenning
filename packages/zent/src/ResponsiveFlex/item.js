import React from 'react';
import PT from 'prop-types';

const ResponsiveFlexItem = props => {
  const { children, width, height } = props;

  return (
    <div className="ResponsiveFlexItem" style={{ width }}>
      <div
        className="ResponsiveFlexItem__placeholder"
        style={{ paddingTop: height }}
      />
      <div className="ResponsiveFlexItem__main">{children}</div>
    </div>
  );
};

ResponsiveFlexItem.propTypes = {
  width: PT.string.isRequired,
  height: PT.string.isRequired,
  children: PT.node.isRequired,
};

export default ResponsiveFlexItem;
