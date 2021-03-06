const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data', //folder name
    'products.json'); //file name

const getProductFromFile = (cb) =>{
   
    fs.readFile( p, (err , fileContent)=>{
        if(err){
             cb([]);
        } else {
           cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        this.id = Math.random().toString();
        getProductFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err=>{
                console.log(err);
            });
        });
    }
    //static mean call directly this method without instentiating object of Product class 
    static fetchAll(cb){
       getProductFromFile(cb);
    }

    static findById(id, cb){
        getProductFromFile(products =>{
            const product = products.find(p => p.id === id); // the second id is the first argument of this line static findById(id, cb) 
            cb(product);
        });
    }
};