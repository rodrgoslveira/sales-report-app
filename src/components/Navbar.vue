<template>
<div class="navbar-container">
  <div class="left-item">
  <h2 class="navbar-menu-item">Menu</h2>
  <h2 class="navbar-username">User Name</h2>
  </div>
  <div class="right-item">
    <h2 class="navbar-item">Sales Report</h2>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
  .navbar-container{
    padding: 1px;
    width: 100%;
    background-color: rgb(54, 162, 235);
    color:aliceblue;
    display: flex;
    flex-direction: row;
    align-items:baseline;
    gap:50%;
  }
  .left-item{
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    align-items:baseline;
    gap:10%;
  }
  .navbar-username::before{
    content: '';
    display: inline-block;
    width: 2rem;
    height: 2rem;
    -moz-border-radius:80%;
    -webkit-border-radius: 80%;
    border-radius: 80%;
    background-color: rgb(248, 30, 30);
    margin-right: 10px;
  }
</style>