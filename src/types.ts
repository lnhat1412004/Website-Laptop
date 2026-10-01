export interface Product {
  id: string;
  name: string;
  brand: 'HP' | 'Lenovo' | 'Asus' | 'Dell';
  category: 'ultrabook' | 'workstation' | 'gaming' | 'accessory';
  categoryLabel: string;
  tag?: string;
  screenSize: string;
  subtitle: string;
  description: string;
  basePrice: number;
  highlightSpecs: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
    label3: string;
    val3: string;
  };
  image: string;
  images?: string[];
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    display: string;
    weight: string;
    battery: string;
    ports: string;
    chassis: string;
    security: string;
    warranty: string;
  };
  finishes: {
    id: string;
    name: string;
    colorHex: string;
    material: string;
  }[];
  customizable: {
    cpus?: { name: string; addPrice: number }[];
    rams?: { name: string; addPrice: number }[];
    storages?: { name: string; addPrice: number }[];
    displays?: { name: string; addPrice: number }[];
  };
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  brand: string;
  image: string;
  finish: string;
  cpu: string;
  ram: string;
  storage: string;
  display: string;
  unitPrice: number;
  quantity: number;
}

export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  location: string;
  date: string;
  timeSlot: string;
  interestedModel: string;
  note?: string;
}
