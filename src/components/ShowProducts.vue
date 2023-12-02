<template>
  <!-- PRODUTOS -->
  <div class="produtos pt-32 pb-64">
    <div class="container">
      <h3>Produtos</h3>
      <div  class="product text-align-center gap-16 pt-16">
      <div v-for="product in products" :key="product.id">
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
    name: 'ShowProducts',
    data(){
     return{
         products:[]
 
     }
     
    },
    props: {
      cat: String,
    },
    
 mounted(){
 this.resq()
 },updated(){
     this.resq()
 
 },
 methods:{
     resq(){
         fetch('https://api.escuelajs.co/api/v1/products')
         .then(resp=> resp.json())
         .then(data=> {
          if(this.cat == 'all'){
            return this.products = data 
          }else{
            const produtosFiltrados = data.filter(
              product => {
                return product.category.name === this.cat;
              }
            )
            this.products = produtosFiltrados;
          }
           }        )
         .catch(error =>{
             console.log("casa caiu",error);
         })
     },adicionar(produto){
      fetch(
                'http://localhost:3000/products/',{
                  method: 'POST',
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify(produto)
                }
            ).then(
                response => {
                  if(!response.ok){
                    console.log("Deu ruim! Falha na requisição");
                  }
                  return response.json();
                }
            ).then(
                () => {
                  alert("Socio adicionado com sucesso");
                }
            ).catch(
                error => {
                  console.log('Erro ao adicionar', error);
                }
            );
     }

 }
 
  }
  </script>
  
  <style>
  </style>