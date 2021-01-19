import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Rocket',
      url: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Jungle',
      url: 'https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8anVuZ2xlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Soccer',
      url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Rocket',
      url: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Jungle',
      url: 'https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8anVuZ2xlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Soccer',
      url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Rocket',
      url: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Jungle',
      url: 'https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8anVuZ2xlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Soccer',
      url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Rocket',
      url: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Jungle',
      url: 'https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8anVuZ2xlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Soccer',
      url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Rocket',
      url: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Jungle',
      url: 'https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8anVuZ2xlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Soccer',
      url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Rocket',
      url: 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Jungle',
      url: 'https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8anVuZ2xlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'Soccer',
      url: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c29jY2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }
  ];

  checkWindowIndex(index:number) {
    return Math.abs(this.currentPage - index) < 5;
  } 
}
