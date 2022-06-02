const getCategories = () => {
  return [{id:1,name:'Ropa'},
   {id:2,name:'Tecnologia'},
   {id:3,name:'Inmuebles'},
   {id:4,name:'House'}]
}
const getProducts = () => {
  return [{id:1,categoryId:1,name:'Remera'},
   {id:2,categoryId:1,name:'Pantalon'},
   {id:3,categoryId:1,name:'Camisa'},
   {id:4,categoryId:1,name:'Bermuda'},
   {id:5,categoryId:2,name:'Netbook'},
   {id:6,categoryId:2,name:'Celular'},
   {id:8,categoryId:3,name:'Sofa'},
   {id:9,categoryId:3,name:'Escritorio'},
   {id:10,categoryId:4,name:'Vaso'},
   {id:11,categoryId:4,name:'Plato'},
   {id:12,categoryId:4,name:'Cubierto'},]
}
const getBrands = () => {
  return [{
    id: 2,
    name: "Remera0",
    productId: 1,
    sales: {
      April: 659,
      February: 595,
      January: 412,
      March: 552
    }
  }, {
    id: 3,
    name: "Remera1",
    productId: 1,
    sales: {
      April: 351,
      February: 129,
      January: 88,
      March: 230
    }
  }, {
    id: 4,
    name: "Remera2",
    productId: 1,
    sales: {
      April: 30,
      February: 480,
      January: 103,
      March: 94
    }
  }, {
    id: 5,
    name: "Pantalon0",
    productId: 2,
    sales: {
      April: 484,
      February: 164,
      January: 546,
      March: 302
    }
  }, {
    id: 6,
    name: "Camisa0",
    productId: 3,
    sales: {
      April: 151,
      February: 295,
      January: 657,
      March: 631
    }
  }, {
    id: 7,
    name: "Camisa1",
    productId: 3,
    sales: {
      April: 557,
      February: 638,
      January: 134,
      March: 689
    }
  }, {
    id: 8,
    name: "Camisa2",
    productId: 3,
    sales: {
      April: 439,
      February: 8,
      January: 547,
      March: 111
    }
  }, {
    id: 9,
    name: "Camisa3",
    productId: 3,
    sales: {
      April: 633,
      February: 613,
      January: 343,
      March: 590
    }
  }, {
    id: 10,
    name: "Bermuda0",
    productId: 4,
    sales: {
      April: 345,
      February: 560,
      January: 75,
      March: 99
    }
  }, {
    id: 11,
    name: "Bermuda1",
    productId: 4,
    sales: {
      April: 142,
      February: 635,
      January: 609,
      March: 106
    }
  }, {
    id: 12,
    name: "Netbook0",
    productId: 5,
    sales: {
      April: 259,
      February: 146,
      January: 438,
      March: 368
    }
  }, {
    id: 13,
    name: "Celular0",
    productId: 6,
    sales: {
      April: 170,
      February: 184,
      January: 387,
      March: 527
    }
  }, {
    id: 14,
    name: "Celular1",
    productId: 6,
    sales: {
      April: 490,
      February: 152,
      January: 253,
      March: 399
    }
  }, {
    id: 15,
    name: "Sofa0",
    productId: 8,
    sales: {
      April: 99,
      February: 699,
      January: 287,
      March: 11
    }
  }, {
    id: 16,
    name: "Sofa1",
    productId: 8,
    sales: {
      April: 62,
      February: 124,
      January: 668,
      March: 692
    }
  }, {
    id: 17,
    name: "Sofa2",
    productId: 8,
    sales: {
      April: 520,
      February: 204,
      January: 602,
      March: 26
    }
  }, {
    id: 18,
    name: "Sofa3",
    productId: 8,
    sales: {
      April: 103,
      February: 658,
      January: 204,
      March: 226
    }
  }, {
    id: 19,
    name: "Escritorio0",
    productId: 9,
    sales: {
      April: 510,
      February: 349,
      January: 419,
      March: 73
    }
  }, {
    id: 20,
    name: "Escritorio1",
    productId: 9,
    sales: {
      April: 216,
      February: 566,
      January: 271,
      March: 17
    }
  }, {
    id: 21,
    name: "Escritorio2",
    productId: 9,
    sales: {
      April: 595,
      February: 120,
      January: 588,
      March: 33
    }
  }, {
    id: 22,
    name: "Vaso0",
    productId: 10,
    sales: {
      April: 159,
      February: 488,
      January: 427,
      March: 529
    }
  }, {
    id: 23,
    name: "Vaso1",
    productId: 10,
    sales: {
      April: 35,
      February: 668,
      January: 622,
      March: 117
    }
  }, {
    id: 24,
    name: "Vaso2",
    productId: 10,
    sales: {
      April: 576,
      February: 114,
      January: 394,
      March: 281
    }
  }, {
    id: 25,
    name: "Plato0",
    productId: 11,
    sales: {
      April: 89,
      February: 263,
      January: 6,
      March: 139
    }
  }, {
    id: 26,
    name: "Plato1",
    productId: 11,
    sales: {
      April: 616,
      February: 446,
      January: 512,
      March: 186
    }
  }, {
    id: 27,
    name: "Plato2",
    productId: 11,
    sales: {
      April: 262,
      February: 455,
      January: 235,
      March: 30
    }
  }, {
    id: 28,
    name: "Cubierto0",
    productId: 12,
    sales: {
      April: 154,
      February: 460,
      January: 469,
      March: 363
    }
  }]
  }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getProductsByCategory = (id) => {
  return getProducts().filter(product => product.categoryId == id);
}

const getBrandsByProduct = (id) => {
  return getBrands().filter(brand => brand.productId == id);
}

const getBrandsById = (id) => {
  return getBrands().filter(brand => brand.id == id);
}

export {getCategories, getProducts,getBrands,getProductsByCategory,getBrandsByProduct,getBrandsById}; 