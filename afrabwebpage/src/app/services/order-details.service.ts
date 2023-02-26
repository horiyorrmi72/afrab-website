import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  
  productDetails = [
    {
      id: 1,
      pdName: 'Product 1',
      pdPrice: 100,
      pdQuantity: 1,
      pdDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      pdImg: 'https://images.unsplash.com/photo-1588718889344-f7bd7a565d20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id: 2,
      pdName: 'Product 2',
      pdPrice: 200,
      pdQuantity: 1,
      pdDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      pdImg: 'https://images.unsplash.com/photo-1622227922682-56c92e523e58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

    },  
    {
      id: 3,
      pdName: 'Product 3',
      pdPrice: 300,
      pdQuantity: 1,
      pdDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      pdImg: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80'

    },
    {
      id: 4,
      pdName: 'Product 4',
      pdPrice: 400,
      pdQuantity: 1,
      pdDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      pdImg: 'https://images.unsplash.com/photo-1544991936-9464fa9919d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id: 5,
      pdName: 'Product 5',
      pdPrice: 500,
      pdQuantity: 1,
      pdDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      pdImg: 'https://images.unsplash.com/photo-1573883430697-4c3479aae6b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id: 6,
      pdName: 'Product 6',
      pdPrice: 600,
      pdQuantity: 1,
      pdDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      pdImg: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80'
    }
  ]
}