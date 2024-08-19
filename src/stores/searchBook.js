import { defineStore } from 'pinia';
import axios from 'axios';

export const useSearchBook = defineStore('searchBook', {
  state: () => ({
    launchBooks: [],
    bestSellerBooks: [],
    newBooks: [],
    recommendedBooks: [],
    imagePadding: 20,
    scrollPerClick: 0,
  }),
  actions: {
    async fetchBooks(query, type) {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;
      try {
        const result = await axios.get(url);
        const books = result.data.items;
        if (type === 'launch') {
          this.launchBooks = books;
        } else if (type === 'bestSeller') {
          this.bestSellerBooks = books;
        } else if (type === 'new') {
          this.newBooks = books;
        } else if (type === 'recommended') {
          this.recommendedBooks = books;
        }
        if (books.length > 0) {
        const firstImage = books[0]?.volumeInfo.imageLinks?.thumbnail;
        if (firstImage) {
          this.scrollPerClick = document.querySelector('.slider-img')?.clientWidth + this.imagePadding || 0;
          }
        } 
      }
    catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    },
    sliderScrollLeft(slider) {
      if (!slider) return;
      let scrollAmount = slider.scrollLeft;
      slider.scrollTo({
        top: 0,
        left: (scrollAmount -= this.scrollPerClick),
        behavior: 'smooth'
      });
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
    },
    sliderScrollRight(slider) {
      if (!slider) return;
      let scrollAmount = slider.scrollLeft;
      if (scrollAmount <= slider.scrollWidth - slider.clientWidth) {
        slider.scrollTo({
          top: 0,
          left: (scrollAmount += this.scrollPerClick),
          behavior: 'smooth'
        });
      }
    }
  }
});
