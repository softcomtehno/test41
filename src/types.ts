export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'classic' | 'spicy' | 'cheese' | 'vegetarian';
}

export interface OrderFormData {
  name: string;
  phone: string;
  address: string;
  comments?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}