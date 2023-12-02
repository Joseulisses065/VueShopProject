<template>
   <!-- MENU NAVEGAÇÃO -->
  <nav>
    <div class="container display-flex align-items-center justify-content-space-between pt-16 pb-16" >
        <div v-for="categor in categorys" :key="categor.id">
            <router-link :to="`/category/${categor.name}`">{{categor.name}}</router-link>
        </div>
    </div>
  </nav><!-- FIM DA NAVEGAÇÃO -->
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
        this.categorys = this.categorys.slice(0,5)
        )
        .catch(error =>{
            console.log("casa caiu",error);
        })
    }
}

 }
 </script>
 
 <style>
 </style>