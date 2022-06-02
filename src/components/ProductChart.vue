<template>
<div class="chart-container">
   <Bar v-if="loaded" 
    :chart-options="chartOptions"
    :chart-data="chartData"
    :plugins="plugins"
    style="position:relative;height:40vh; width:100%;"
    />
</div>  
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {

  name: 'ProductChart',
  components: { Bar },
  chartData:'',
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    styles: {
      type: Object,
      default: () => {}
    },
    brand: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loaded:false,
      chartData: null,
      chartOptions: {
      responsive:true,  
      maintainAspectRatio:false,
      plugins: {
        title: {
          display: true,
          text: 'Sales By Month for: ',
            },
      legend: {
        labels: {
          usePointStyle: true,
        },
        position: 'bottom'
      }    
      },
      scales: {
          y: { // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 700
          }
      }
    },

    }  
  },
   watch: {
    brand(value){
      this.plugins = {
        title : {
            display: true,
            text: 'Sales By Month for: ' + value.name,
         }
         
        }
        console.log(this.plugins)
      this.chartData =  {
        labels: [ 'January', 'February', 'March', 'April'],
        datasets: [
          {
            label: 'Ventas',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            data: [value.sales.January, value.sales.February, value.sales.March,value.sales.April]
          }
        ]
      }

    }
   },
  mounted () {
      this.loaded = false
      this.chartData =  {
        labels: [ 'January', 'February', 'March', 'April'],
        datasets: [
          {
            label: 'Ventas',
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgb(54, 162, 235)',
            data: [0, 0, 0,0]
          }
        ]
      }
      this.loaded = true

  }
}
</script>

<style >
  .chart-container{
    margin:2px 0px 2px 0px;
    position: relative; 
    width: 100%;
  }

</style>