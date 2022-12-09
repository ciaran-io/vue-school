import { defineStore } from 'pinia'
import { groupBy } from 'lodash'
import { useAuthUserStore } from '@/stores/AuthUserStore'
export const useCartStore = defineStore('cartStore', {
  state: () => ({
    items: [],
  }),

  // computed state
  getters: {
    // return cart length
    count: (state) => state.items.length,
    // return cart count if length is equal to 0
    isEmpty: (state) => state.count === 0,
    // return grouped products that are the same product
    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.name)
      // soryt grouped order
      const sorted = Object.keys(grouped).sort()
      const inOrder = {}
      // add stored group key value to inOrder object
      sorted.forEach(key => inOrder[key] = grouped[key])
      return inOrder

    },

    groupCount: (state) => (name) => state.grouped[name].length,

    cartTotal: (state) =>
      state.items.reduce((prevValue, currentValue) =>
        prevValue + currentValue.price, 0)

  },
  // mautate state
  actions: {

    checkout() {
      const authUserStore = useAuthUserStore()
      console.log(authUserStore, authUserStore.username);
      alert(`${authUserStore.username} just bought ${this.count} for a total of ${this.cartTotal}`)
    },

    addCartItem(count, item) {
      count = parseInt(count)
      for (let i = 0; i < count; i++) {
        // spread operator clones item
        // passes object by value not by reference
        this.items.push({ ...item })
      }
    },

    removeCartItem(itemName) {
      this.items = this.items.filter(item => item.name !== itemName)
    },

    setItemCount(item, count) {
      this.removeCartItem(item.name)
      this.addCartItem(count, item)
    }
  }


})