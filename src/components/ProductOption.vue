<template>
<div class="product-option-container">
  <div class="item">
    <label for="category">Categoria: </label>
    <select id="category" v-model="selectedCategory" >
      <option v-for="category in categories" :key=" category.id" :value="category.id">{{category.name}}</option>
    </select>
  </div>
  <div class="item">
    <label for="product">Producto: </label>
    <select id="product" v-model="selectedProduct">
      <option v-for="product in products" :key=" product.id" :value="product.id">{{product.name}}</option>
    </select>
  </div>
  <div class="item">
    <label for="brand">Marca: </label>
    <select id="brand" v-model="selectedBrand">
      <option v-for="brand in brands" :key=" brand.id" :value="brand.id">{{brand.name}}</option>
    </select>
  </div>
</div>  
</template>

<script>

import {getCategories,getProductsByCategory,getBrandsByProduct,getBrandsById} from '@/helpers/ProductsService.js'
console.log(getCategories())
export default {
  name: 'ProductOption',
    data() {
    return {
      selectedCategory: null,
      selectedProduct: null,
      selectedBrand: null,
      categories: null,
      products: null,
      brands: null
    }
  },
   watch: {
     selectedCategory(category,oldValue){
       this.products = getProductsByCategory(category)
       this.selectedProduct = this.products[0].id
     },
     selectedProduct(product,oldValue){
       this.brands = getBrandsByProduct(product)
       this.selectedBrand = this.brands[0].id
     },
     selectedBrand(brand,oldValue){
        this.$emit('brand-selection',getBrandsById(brand))
     }

   },
  mounted () {
      this.categories = getCategories()
      this.selectedCategory = this.categories[0].id
      }  
}
</script>

<style >
  .product-option-container{
    padding-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:baseline;
  }
</style>