import { defineStore } from 'pinia'
export const useProductStore = defineStore('ProductStore', {
  state: () => ({
    products: []
  }),

  actions: {
    async addProducts() {
      this.products = (await import('@/data/products.json')).default
    }
  }
})