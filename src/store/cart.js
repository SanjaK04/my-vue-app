
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";


import niceSocks from "../assets/images/nice_socks.jpg";
import gentlemansTouchSocks from "../assets/images/gentlemans-touch-socks.jpg";
import homeSocks2 from "../assets/images/home-socks2.jpg";
import homeSocks3 from "../assets/images/home-socks3.jpg";
import cavi1 from "../assets/images/cavi1.jpg";
import cavi2 from "../assets/images/cavi2.jpg";
import cavi3 from "../assets/images/cavi3.jpg";
import cavi4 from "../assets/images/cavi4.jpg";
import be1 from "../assets/images/be1.jpg";
import be2 from "../assets/images/be2.jpg";
import be3 from "../assets/images/be3.jpg";
import be4 from "../assets/images/be4.jpg";
import geta1 from "../assets/images/geta1.jpg";
import geta2 from "../assets/images/geta2.jpg";
import geta3 from "../assets/images/geta3.jpg";
import geta4 from "../assets/images/geta4.jpg";
import ws1 from "../assets/images/ws1.jpg";
import ws2 from "../assets/images/ws2.jpg";
import ws3 from "../assets/images/ws3.jpg";
import ws4 from "../assets/images/ws4.jpg";
import stripedSocks from '../assets/images/striped-socks.jpg';
import classicSocks from '../assets/images/classic-socks.jpg';
import blackClassicSocks from '../assets/images/black-classic-socks.jpg';



export const useCartStore = defineStore("cart", () => {
  
  const products = ref([
    {
      id: 1,
      name: "Gentlemans Touch",
      image: gentlemansTouchSocks,
      category: "gentleman",
      featured: true,
      inventory: 100,
      description: "For those who want to look flawless in every business occasion.",
      cart: 0,
      color: "white",
      material: "cotton",
      collectionRoute: "Elegant"

    },
    {
      id: 2,
      name: "Casual Vibes",
      image: homeSocks2,
      category: "sports",
      featured: true,
      inventory: 0,
      description: "For energetic moments – socks that move with every step.",
      cart: 0,
      color: "grey",
      material: "cotton",
      collectionRoute: "Sports"
    },
    {
      id: 3,
      name: "Business Elegance",
      image: homeSocks3,
      category: "elegant",
      featured: true,
      inventory: 9,
      description: "Perfect for every day – comfort you don’t notice, but feel.",
      cart: 0,
      color: "black",
      material: "polyester",
      price: 350,
      collectionRoute: "Elegant"
    },
    {
      id: 4,
      name: "Winter Essentials",
      image: niceSocks,
      category: "winter",
      featured: true,
      inventory: 34,
      description: "Warmth and style – because winter calls for more than just comfort.",
      cart: 0,
      color: "red",
      material: "wool",
      collectionRoute: "Winter"
    },

    {
      id: 5,
      name: "Running Socks",
      image: cavi1,
      category: "sports",
      inventory: 20,
      description: "With attention to fit and comfort, these socks turn everyday wear into a refined, effortless experience.",
      cart: 0,
      color: "white",
      material: "cotton"
    },

    {
      id: 6,
      name: "Everyday Step",
      image: cavi2,
      category: "sports",
      inventory: 38,
      description: "Durable and flexible, they are made to handle both active days and relaxed weekends.",
      color: "grey",
      material: "polyester"
    },

    {
      id: 7,
      name: "Soft Walk",
      image: cavi3,
      category: "sports",
      inventory: 29,
      description:  "Designed for movement, they stay in place while keeping your feet cool and dry during activity.",
      color: "black",
      material: "cotton"

    },
    {
      id: 8,
      name: "Shoe Fit",
      image: cavi4,
      category: "sports",
      inventory: 88,
      description: "Classic, versatile pieces for the modern professional.",
      color: "grey",
      material: "polyester"
    },

    {
      id: 9,
      name: "Elegance",
      image: be1,
      category: "elegant",
      inventory: 63,
      description: "With attention to detail and understated elegance, these socks are the silent signature of a true gentleman.",
      color: "",
      material: "cotton",
      price: 299
    },

    {
      id: 10,
      name: "Sofisticity",
      image: be2,
      category: "gentleman",
      inventory: 27,
      description: "Minimalist lines, refined details, functional elegance.",
      color:"",
      material: "polyester"
    },

    {
      id: 11,
      name: "Productivity",
      image: be3,
      category: "elegant",
      inventory: 72,
      description: "Every stitch and seam is meticulously crafted to ensure quality and sophistication.",
      color: "",
      material: "wool",
      price: 459
    },

    {
      id: 12,
      name: "Bold",
      image: be4,
      category: "elegant",
      inventory: 39,
      description: "We prioritize eco-conscious materials and ethical practices, so your style is as responsible as it is refined.",
      color: "",
      material: "cotton",
      price: 240
    },

    {
      id: 13,
      name: "Emanci",
      image: geta1,
      category: "gentleman",
      inventory: 77,
      description: "Designed with subtle patterns and classic colors, they add a refined accent to any formal or business attire.",
      color: "",
      material: "polyester"
    },

    {
      id: 14,
      name: "Mighty",
      image: geta2,
      category: "gentleman",
      inventory: 92,
      description: "Every pair is carefully finished to ensure a perfect fit, eliminating discomfort and maintaining a polished look.",
      color: "",
      material: "cotton"
    },

    {
      id: 15,
      name: "Intelectuall",
      image: geta3,
      category: "gentleman",
      inventory: 98,
      description: "Our socks are crafted from the finest cotton and merino blends, combining softness with durability for all-day comfort.",
      color: "",
      material: "wool"
    },

    {
      id: 16,
      name: "Working",
      image: geta4,
      category: "gentleman",
      inventory: 72,
      description: "Lightweight yet resilient, they complement tailored suits and smart-casual outfits alike.",
      color: "",
      material: "polyester"
    },

    {
      id: 17,
      name: "Snow",
      image: ws1,
      category: "winter",
      inventory: 76,
      description: "Our winter socks are crafted from soft wool blends, keeping your feet warm and cozy in cold weather.",
      color: "",
      material: "cotton"
    },

    {
      id: 18,
      name: "Snowflake",
      image: ws2,
      category: "winter",
      inventory: 78,
      description: "Designed with subtle patterns and classic colors, they combine functionality with timeless style.",
      color: "",
      material: "wool"

    },
     {
      id: 19,
      name: "Playing",
      image: ws3,
      category: "winter",
      inventory: 79,
      description: "Breathable yet insulating, they maintain the perfect temperature without overheating.",
      color: "",
      material: "cotton"

     },

     {
      id: 20,
      name: "Snow",
      image: ws4,
      category: "winter",
      inventory: 76,
      description: "Extra cushioning provides comfort for long walks, cozy evenings, or outdoor adventures.",
      color: "",
      material: "polyester"
     },

     {
    id: 21,
    name: 'Classic Black',
    image: blackClassicSocks, // importaj ga na vrhu cart.js
    category: 'elegant',
    featured: true,
    showOnHome: false,
    inventory: 50,
    description: 'Elegant black socks, perfect for formal attire.',
    price: 79,
    cart: 0,
    color: "black",
    material: "cotton"
},
{
    id: 22,
    name: 'Striped Elegance',
    image: stripedSocks,
    category: 'elegant',
    featured: true,
    showOnHome: false,
    inventory: 40,
    description: 'Subtle stripes for a touch of sophistication.',
    price: 89,
    cart: 0,
    color: "grey",
    material: "cotton"
},
{
  id: 23,
  name: 'Luxury Cotton',
  image: classicSocks,
  category: 'elegant',
  featured: true,
  showOnHome: false,
  inventory: 60,
  description: 'Soft cotton with a comfortable fit for all-day wear.',
  price: 99,
  cart: 0,
  color: "white",
  material: "cotton"
}



  ]);

  const router = useRouter()
  const cart = ref([]);




  const addToCart = (product) => {
    const existing = cart.value.find(p => p.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        cart.value.push({
          ...product, quantity: 1
        })
      }
  }

  const removeFromCart = (productId) => {
    cart.value = cart.value.filter(item => item.id !== productId)
  }
  
  const totalQuantity = computed (() => 
  cart.value.reduce((sum, item) => sum + item.quantity, 0)
)


const totalPrice = computed (() => 
cart.value.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)
)

  return { products, cart, addToCart, removeFromCart, totalQuantity, totalPrice};
});
