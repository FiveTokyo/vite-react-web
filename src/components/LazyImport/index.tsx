import { Spin } from "antd";
import React, { FC, LazyExoticComponent, ReactElement } from "react";

const LazyImport = (LazyChildren: FC) => {
  return (
    <React.Suspense fallback={<Spin spinning={true} />}>
      <LazyChildren />
    </React.Suspense>
  );
};
export default LazyImport;
