//This JS use only for Print Product

const productOperations = {
    products:[],
    searchById(id){
      return this.products.find(product=>product.id==id);
    },
    countItemInCarts(){
      return this.products.filter(product=>product.isAdded).length;
    },
    toggleCart(id){
      this.searchById(id).toggle();
      // var currentProduct = this.searchById(id);
      // currentProduct.toggle();
    },
    read(){
          // BackEnd  
          for(let i = 1; i<=10; i++){
              let url = i%2==0?"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/A/68608_1544866199.jpg":"http://aux4.iconspalace.com/uploads/846839393214911502.png";
              let product = new Product(i ,"Apple"+i, 1000*i, "Apple Phone", url);
            this.products.push(product);
          }
          console.log('All Products are ',this.products);
          return this.products;
    },
    add(){

    },
    remove(){

    },
    search(price){
      return this.products.filter(product=>product.price>=price);
    },
    update(){

    },
    sort(){

    }
}