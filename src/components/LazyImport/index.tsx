import { Spin } from "antd";
import React, { LazyExoticComponent } from "react";

const LazyImport = (props: {
  lazyChildren: LazyExoticComponent<() => JSX.Element>;
}) => {
  return (
    <React.Suspense fallback={<Spin spinning={true} />}>
      <props.lazyChildren />
    </React.Suspense>
  );
};
export default LazyImport;
