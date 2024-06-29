import ivecoImage1 from '/Iveco/Iveco 1.png';
import fordCargo1 from '/ford cargo/ford 1.fw.png';
import fordCargo2 from '/ford cargo/ford 2.fw.png';
import fordCargo3 from '/ford cargo/ford 3.fw.png';
import fordCargo4 from '/ford cargo/ford 4.fw.png';
import mercedes1 from '/mercedes/merces 3.png';
import mercedes2 from '/mercedes/merces.png';
import mercedes3 from '/mercedes/merces 2.png';
import mercedes4 from '/mercedes/merces 4.png';
import cruze1 from '/cruze/cruze1.png';
import cruze2 from '/cruze/cruze2.png';
import cruze3 from '/cruze/cruze3.png';
import cruze4 from '/cruze/cruze4.png';



export interface Product {
  id: number;
  name: string;
  brand: string;
  type: string;
  model: string;
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
    model: 'ssd',
    price: 115000,
    images: [ivecoImage1], // Exemplo de imagem
    description: 'Caminhão de alta qualidade, com grndes formas de trasnporte, robusto economico, e pronto para atender voce cliente',
    additionalInfo: 'Usado, totalmente preservado, segundo dono',
  },
  {
    id: 2,
    name: 'Ford Cargo 1119',
    brand: 'Ford',
    type: 'Caminhão',
    model: 'ssd',
    price: 230000,
    images: [fordCargo1,fordCargo2,fordCargo3,fordCargo4], // Exemplo de imagem
    description: 'Caminhão de alta qualidade, com grndes formas de trasnporte, robusto economico, e pronto para atender voce cliente',
    additionalInfo: 'Usado, totalmente preservado, segundo dono',
  },
  {
    id: 3,
    name: 'Mercedes Benz',
    brand: 'Mercedes',
    type: 'Caminhão',
    model: 'ssd',
    price: 260000,
    images: [mercedes1,mercedes2,mercedes3,mercedes4], // Exemplo de imagem
    description: 'Caminhão de alta qualidade, com grandes formas de trasnporte, robusto economico, e pronto para atender voce cliente',
    additionalInfo: 'Usado, totalmente preservado, segundo dono',
  },
  {
    id: 4,
    name: 'Cruze RS 1.4 Turbo',
    brand: 'Cruze',
    type: 'Automotivo',
    model: 'ssd',
    price: 129000,
    images: [cruze1,cruze2,cruze3,cruze4], // Exemplo de imagem
    description: 'Caminhão de alta qualidade, com grndes formas de trasnporte, robusto economico, e pronto para atender voce cliente',
    additionalInfo: 'Usado, totalmente preservado, segundo dono   ',
  },

  // Outros produtos aqui
];
