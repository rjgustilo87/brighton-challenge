import React from "react";
import StoreList from "./StoreList";

const App = () => {
  return (
    <div className="container">
      <br />
      <img srcset="//www.brighton.com/cdn/shop/files/logo_20170309_180x.png?v=1657243126 1x, //www.brighton.com/cdn/shop/files/logo_20170309_180x@2x.png?v=1657243126 2x, //www.brighton.com/cdn/shop/files/logo_20170309_180x@3x.png?v=1657243126 3x" src="//www.brighton.com/cdn/shop/files/logo_20170309_180x.png?v=1657243126" loading="lazy" class="header__heading-logo medium-hide small-hide" width="180" height="47" alt="Brighton"></img>
      <hr />
      <StoreList />
    </div>
  );
};
export default App;
