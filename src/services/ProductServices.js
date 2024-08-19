import Product from '../models/Product.js'

class ProductService {
    async createProduct(data){
        try {
            const product = await Product.create(data);
            return product;
        } catch (error) {
            throw new Error('error al crear el producto')
        }
    }
    async getAllProduct(){
        try {
            return await Product.findAll();
        } catch (error) {
            throw new Error('error al mostrar los productos')
        }
    }
    async updateProduct(id, data) {
        try {
          const product = await Product.findByPk(id);
          if (!product) throw new Error('Se actualizo el producto');
          await product.update(data);
          return product;
        } catch (error) {
          throw new Error('Error al actualizar el producto');
        }
      }
    
      async deleteProduct(id) {
        try {
          const product = await Product.findByPk(id);
          if (!product) throw new Error('El producto fue eliminado');
          await product.destroy();
          return product;
        } catch (error) {
          throw new Error('Error al eliminar el producto');
        }
      }
}

export default new ProductService();