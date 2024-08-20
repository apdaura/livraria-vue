import { defineStore } from 'pinia';

export const useBookVisibility = defineStore('bookVisibility', {
  state: () => ({
    descriptionsVisible: {}
  }),
  actions: {
    toggleDescription(index) {
      this.descriptionsVisible[index] = !this.descriptionsVisible[index];
    },
    setDescriptionVisibility(index, visible) {
      this.descriptionsVisible[index] = visible;
    }
  }
});