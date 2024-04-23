
export const getOrders = () => {
    return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  };
  
  export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
  };
  
  export const getInventory = () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  };
  
  export const getCustomers = () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
  };
  export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
  };

export const salseData = [
    { year: 2012, dropouts: 35 }, { year: 2013, dropouts: 28 },
    { year: 2014, dropouts: 34 }, { year: 2015, dropouts: 32 },
    { year: 2016, dropouts: 40 }, { year: 2017, dropouts: 32 },
    { year: 2018, dropouts: 35 }, { year: 2019, dropouts: 55 },
    { year: 2020, dropouts: 38 }, { year: 2021, dropouts: 30 },
    { year: 2022, dropouts: 25 }, { year: 2023, dropouts: 32 }
];