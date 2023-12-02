<template>
    <!-- PRODUTOS -->
    <div class="produtos pt-32 pb-64">
      <div class="container">
        <h3>Carrinho</h3>
        <div class="display-flex flex-direction-row text-align-center gap-16 pt-16">
            <div v-for="product in products" :key="product.id" >
                <div class="produto">
                    <img :src="`${product.images[0]}`" alt="Categoria X">
                    <div class="detalhes">
                    <p class="nome-produto">{{product.title}}</p>
                    <p class="categoria">{{product.category.name}}</p>
                    <p class="preco">R$ {{product.price}}</p>
                    <button class="no-carrinho" @click="adicionar(product)">Adicionado</button>
                    </div>
                </div>
            </div>
         
  
        </div>
      </div>
    </div><!-- FIM DOS PRODUTOS -->
    </template>
    
    <script>
    export default {
      name: 'ShowCar',
      data(){
       return{
           products:[]
   
       }
       
      },
      
   mounted(){
   this.resq()
   },
   methods:{
       resq(){
           fetch('http://localhost:3000/products/')
           .then(resp=> resp.json())
           .then(data=> this.products = data,         )
           .catch(error =>{
               console.log("casa caiu",error);
           })
       }
  
   }
   
    }
    </script>
    
    <style>
    </style>