<template>
<div class="sales-report-page-wrapper">
  <Navbar />
  <ProductOption @brand-selection="showBrandStat" />
  <ProductChart :brand="brandData"/>
</div>  
</template>

<script>

import Navbar from '../components/Navbar'
import ProductOption from '../components/ProductOption'
import ProductChart from '../components/ProductChart'

export default {
  name: 'SalesReportPage',
  components: {
    Navbar,
    ProductOption,
    ProductChart
  },
  data() {
    return {
      brandData: null
    }
  },
  methods:{
    showBrandStat(brand){
      this.brandData = brand[0]
    }
  }
}
</script>

<style scoped>
  .sales-report-page-wrapper{
    top: 0px;
    left: 0px;
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    border: 2px blue;
    border-style: solid;
  }
</style>