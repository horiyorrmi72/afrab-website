import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollUpService {

  constructor() { }

  initScrollUpButton() {
    const button = document.getElementById('scrollUpButton');
  
    if (button) {
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  
      const toggleButtonVisibility = () => {
        if (document.documentElement.scrollTop > 200) {
          button.classList.add('show');
        } else {
          button.classList.remove('show');
        }
      };
  
      button.addEventListener('click', scrollToTop);
      window.addEventListener('scroll', toggleButtonVisibility);
    }
  }
  
}
