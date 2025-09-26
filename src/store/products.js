import { ref } from 'vue'


import sportsSocks1 from '../assets/images/sports-socks1.jpg'
import niceSocks from '../assets/images/nice_socks.jpg'
import gentlemansTouchSocks from '../assets/images/gentlemans-touch-socks.jpg'

export const products = ref ([
    {
        id: 1,
        name: 'Gentlemans Touch',
        image: gentlemansTouchSocks,
        price: 198,
        inventory: 100,
        color: 'grey',
        material: 'cotton',
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [{ id: 1, color: 'Black'}],
        cart: 0,
    },
    {
        id: 2,
        name: 'Sports Socks',
        image: sportsSocks1,
        price: 257,
        inventory: 0,
        color: 'white',
        material: 'cotton',
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [{ id: 2, color: 'Grey' }],
        cart: 0,
    },
    {
        id: 3,
        name: 'Nice Socks',
        image: niceSocks,
        price: 318,
        inventory: 9,
        color: 'colorful',
        material: 'wool',
        details: ['80% cotton', '20% polyester'],
        variants: [{ id: 3, color: 'Colorful'}],
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
