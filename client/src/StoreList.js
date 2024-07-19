import React, { useState, useEffect } from "react";
import axios from "axios";
import './Grid.css';

const StoreList = () => {
  const [stores, setStores] = useState({});

  const fetchStores = async () => {
    const res = await axios.get("http://localhost:4000/stores");

    setStores(res.data);
  };

  useEffect(() => {
    fetchStores();
  }, []);
  
  const renderedStores = Object.values(stores).map((store) => {
    const storeName = (store.name === 'Brighton') ? store.name + ' - ' + store.name2 : store.name;

    return (
      <div className="grid-item" key={store.storeId}>
        <div className="image-container">
          <img src={`${store.mainImageUrl}`} alt="Store Pic" className="responsive-image" />
        </div>
        
        <div>
          <span className="responsive-font">{storeName}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="grid-container">
      {renderedStores}
    </div>
  );
};

export default StoreList;
