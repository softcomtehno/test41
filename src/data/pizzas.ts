import { Pizza } from '../types';

export const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Маргарита',
    description: 'Классическая пицца с томатным соусом, моцареллой и базиликом',
    price: 280,
    imageUrl: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg',
    category: 'classic'
  },
  {
    id: 2,
    name: 'Пепперони',
    description: 'Пицца с томатным соусом, моцареллой и пикантной пепперони',
    price: 350,
    imageUrl: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg',
    category: 'spicy'
  },
  {
    id: 3,
    name: 'Четыре сыра',
    description: 'Пицца с томатным соусом, моцареллой, дор блю, пармезаном и гауда',
    price: 400,
    imageUrl: 'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg',
    category: 'cheese'
  },
  {
    id: 4,
    name: 'Мясная',
    description: 'Пицца с томатным соусом, моцареллой, ветчиной, беконом и пепперони',
    price: 450,
    imageUrl: 'https://i.pinimg.com/736x/93/4b/a7/934ba7de03f310523df05056081d2d89.jpg',
    category: 'classic'
  },
  {
    id: 5,
    name: 'Вегетарианская',
    description: 'Пицца с томатным соусом, моцареллой, грибами, перцем, луком и оливками',
    price: 320,
    imageUrl: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
    category: 'vegetarian'
  },
  {
    id: 6,
    name: 'Грибная',
    description: 'Пицца с томатным соусом, моцареллой и разными видами грибов',
    price: 350,
    imageUrl: 'https://i.pinimg.com/736x/c1/53/2f/c1532f5b5daffa967ac4c45e3f132624.jpg',
    category: 'vegetarian'
  },
  {
    id: 7,
    name: 'Дьябло',
    description: 'Острая пицца с томатным соусом, моцареллой, острым перцем, пепперони и халапеньо',
    price: 380,
    imageUrl: 'https://images.pexels.com/photos/5792329/pexels-photo-5792329.jpeg',
    category: 'spicy'
  },
  {
    id: 8,
    name: 'Сырная',
    description: 'Пицца с сырным бортиком, томатным соусом, моцареллой и ветчиной',
    price: 420,
    imageUrl: 'https://i.pinimg.com/736x/3a/70/69/3a70691930a56032090259b567efaf15.jpg',
    category: 'cheese'
  }
];

export const categories = [
  { id: 'all', name: 'Все' },
  { id: 'classic', name: 'Классические' },
  { id: 'spicy', name: 'Острые' },
  { id: 'cheese', name: 'Сырные' },
  { id: 'vegetarian', name: 'Вегетарианские' }
];