import { Injectable } from '@angular/core';
import { Menu } from 'src/app/_models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuList: Menu[] = [
    {
      title: 'pizza de peperoni',
      image: '../../assets/p-pequeña.jpg',
      description: 'Peperoni, queso.'
    },
    {
      title: 'pizza MarioBross',
      image: '../../assets/Menu-Munchill.jpg',
      description: 'champiñon, jamon.'
    },
    {
      title: 'Pizza Mandaloriana',
      image: '../../assets/Logo-munchill.jpg',
      description: 'Queso, chile morron, champiñon, tocino, salchicha italiana.'
    },
    {
      title: 'Pizza Gondor ',
      image: '../../assets/p-v.jpg',
      description: 'Filadeplia, elote amarillo, espinaca.'
    }
  ];

  constructor() { }

  getMenuList() :Menu[] {
    return this.menuList;
  }
}
