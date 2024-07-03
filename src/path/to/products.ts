import ivecoImage1 from '/Iveco/Iveco 1.png';
import fordCargo1 from '/src/assets/ford cargo/ford 1.fw.png';
import fordCargo2 from '/src/assets/ford cargo/ford 2.fw.png';
import fordCargo3 from '/src/assets/ford cargo/ford 3.fw.png';
import fordCargo4 from '/src/assets/ford cargo/ford 4.fw.png';
import mercedes1 from '/mercedes/merces 3.png';
import mercedes2 from '/mercedes/merces.png';
import mercedes3 from '/mercedes/merces 2.png';
import mercedes4 from '/mercedes/merces 4.png';
import cruze1 from '/src/assets/cruze/cruze1.png';
import cruze2 from '/src/assets/cruze/cruze2.png';
import cruze3 from '/src/assets/cruze/cruze3.png';
import cruze4 from '/src/assets/cruze/cruze4.png';
import landhover1 from '/src/assets/caminhao2.jpg'



export interface Product {
  id: number;
  name: string;
  brand: string;
  type: string;
  ano: string;
  km: string;
  price: number;
  images: string[]; // Alteração para suportar múltiplas imagens
  description: string;
  additionalInfo: string; // Informações adicionais sobre o produto
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Iveco Daily 35 S14',
    brand: 'Iveco',
    type: 'Caminhão',
    ano: '2012',
    km: '430.000',
    price: 115000,
    images: [ivecoImage1], // Exemplo de imagem
    description: 'Caminhão de alta qualidade, economico e pronto para atender você cliente',
    additionalInfo: 'Usado, totalmente preservado, segundo dono',
  },
  {
    id: 2,
    name: 'Ford Cargo 1119',
    brand: 'Ford',
    type: 'Caminhão',
    ano: '2018',
    km: '230.000',
    price: 270000,
    images: [fordCargo1,fordCargo2,fordCargo3,fordCargo4], // Exemplo de imagem
    description: 'Caminhão em perfeito estado. Bau seco.',
    additionalInfo: 'Usado, totalmente preservado, Unico dono',
  },
  {
    id: 3,
    name: 'Mercedes Benz Axor 2544',
    brand: 'Mercedes',
    type: 'Caminhão',
    ano: '2012',
    km: '',
    price: 260000,
    images: [mercedes1,mercedes2,mercedes3,mercedes4], // Exemplo de imagem
    description: 'Caminhão de alta qualidade. Automatico. Tração 6x2.',
    additionalInfo: 'Usado, totalmente preservado, segundo dono',
  },
  {
    id: 4,
    name: 'Cruze RS 1.4 Turbo',
    brand: 'Cruze',
    type: 'Automotivo',
    ano: '2022',
    km: '28.000',
    price: 129000,
    images: [cruze1,cruze2,cruze3,cruze4], // Exemplo de imagem
    description: 'Carro forte e economico',
    additionalInfo: 'Usado, totalmente preservado, segundo dono   ',
  },
  {
    id: 5,
    name: 'Land Rover Discovery Sport Diesel',
    brand: 'Land Rover',
    type: 'Automotivo',
    ano: '2019',
    km: '79.000',
    price: 195000,
    images: [landhover1], // Exemplo de imagem
    description: 'Carro forte e economico',
    additionalInfo: 'Usado, totalmente preservado, segundo dono   ',
  },


  // Outros produtos aqui
];
