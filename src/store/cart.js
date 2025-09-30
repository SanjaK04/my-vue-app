
import { defineStore } from "pinia";
import { ref } from "vue";

import niceSocks from "../assets/images/nice_socks.jpg";
import gentlemansTouchSocks from "../assets/images/gentlemans-touch-socks.jpg";
import homeSocks2 from "../assets/images/home-socks2.jpg";
import homeSocks3 from "../assets/images/home-socks3.jpg";

export const useCartStore = defineStore("cart", () => {
  
  const products = ref([
    {
      id: 1,
      name: "Gentlemans Touch",
      image: gentlemansTouchSocks,
      inventory: 100,
      description: "For those who want to look flawless in every business occasion.",
      cart: 0,
      color: "white",
      material: "cotton"

    },
    {
      id: 2,
      name: "Casual Vibes",
      image: homeSocks2,
      inventory: 0,
      description: "For energetic moments – socks that move with every step.",
      cart: 0,
      color: "grey",
      material: "cotton"
    },
    {
      id: 3,
      name: "Business Elegance",
      image: homeSocks3,
      inventory: 9,
      description: "Perfect for every day – comfort you don’t notice, but feel.",
      cart: 0,
      color: "black",
      material: "polyester"
    },
    {
      id: 4,
      name: "Winter Essentials",
      image: niceSocks,
      inventory: 34,
      description: "Warmth and style – because winter calls for more than just comfort.",
      cart: 0,
      color: "red",
      material: "wool"
    },
  ]);

  // košarica
  const cart = ref([]);

  function exploreCollection(product) {
    console.log("Explore collection:", product.name);
  }

  // metode
  const addToCart = (product) => {
    if (product.inventory > product.cart) {
      product.cart++;
      const exists = cart.value.find((p) => p.id === product.id);
      if (!exists) cart.value.push(product);
    } else {
      alert("Not enough stock");
    }
  };

  const removeFromCart = (product) => {
    if (product.cart > 0) {
      product.cart--;
      if (product.cart === 0) {
        cart.value = cart.value.filter((p) => p.id !== product.id);
      }
    }
  };

  const clearCart = () => {
    cart.value.forEach((p) => (p.cart = 0));
    cart.value = [];
  };

  return { products, cart, exploreCollection, addToCart, removeFromCart, clearCart };
});
