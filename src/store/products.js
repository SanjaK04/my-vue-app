import { ref } from 'vue'

import greenSocks from '../assets/images/green_socks.jpg'
import blueSocks from '../assets/images/blue_socks.jpg'
import niceSocks from '../assets/images/nice_socks.jpg'

export const products = ref ([
    {
        id: 1,
        name: 'Green Socks',
        image: greenSocks,
        inventory: 100,
        color: 'green',
        material: 'cotton',
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [{ id: 1, color: 'Blue'}],
        cart: 0,
    },
    {
        id: 2,
        name: 'Blue socks',
        image: blueSocks,
        inventory: 0,
        color: 'blue',
        material: 'cotton',
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [{ id: 2, color: 'Green' }],
        cart: 0,
    },
    {
        id: 3,
        name: 'Nice Socks',
        image: niceSocks,
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
