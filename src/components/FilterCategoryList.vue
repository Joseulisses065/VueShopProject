<template>
 <!-- CATEGORIAS -->
 <div  class="categorias pt-32 pb-64">
    <div class="container">
      <h3>Categorias</h3>
      <div class="display-flex gap-8 text-align-center pt-16 pb-16">
        <div  v-for="categor in categorys" :key="categor.id">
          <img :src="`${categor.image}`" alt="Categoria X">
          <a href="/">{{categor.name}}</a>
        </div>
       
      </div>
    </div>
  </div><!-- FIM DAS CATEGORIAS -->

 
 </template>
 
 <script>
 export default {
   name: 'FilterCategoryShop',
   data(){
    return{
        categorys:[]

    }
    
   },
   
mounted(){
this.resq()
},
methods:{
    resq(){
        fetch('https://api.escuelajs.co/api/v1/categories')
        .then(resp=> resp.json())
        .then(data=> this.categorys = data,
        this.categorys = this.categorys.slice(0,5))
        .catch(error =>{
            console.log("casa caiu",error);
        })
    }
}

 }
 </script>
 
 <style>
 </style>