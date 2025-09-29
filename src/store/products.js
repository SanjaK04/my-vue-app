import { ref } from 'vue'



import niceSocks from '../assets/images/nice_socks.jpg'
import gentlemansTouchSocks from '../assets/images/gentlemans-touch-socks.jpg'
import homeSocks2 from '../assets/images/home-socks2.jpg'
import homeSocks3 from '../assets/images/home-socks3.jpg'

export const products = ref ([
    {
        id: 1,
        name: 'Gentlemans Touch',
        image: gentlemansTouchSocks,
        price: 198,
        inventory: 100,
        description: 'For those who want to look flawless in every business occasion.',
        cart: 0,
    },
    {
        id: 2,
        name: 'Casual Vibes',
        image: homeSocks2,
        price: 257,
        inventory: 0,
       
        description: 'For energetic moments – socks that move with every step.',
        cart: 0,
    },
    {
        id: 3,
        name: 'Business Elegance',
        image: niceSocks,
        price: 318,
        inventory: 9,
        description: 'Perfect for every day – comfort you don’t notice, but feel.',
    
        cart: 0,
    },

    {
        id: 4, 
        name: 'Winter Essentials',
        image: homeSocks3,
        price: 510,
        inventory: 34,
        description: 'Warmth and style – because winter calls for more than just comfort.' ,
        cart: 0,
    }
])


export const addToCart = (product) => {
    if (product.inventory > product.cart) {
        product.cart++
    } else {
        alert('Not enough stock')
    }
        
}
