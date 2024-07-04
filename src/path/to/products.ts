import ivecoImage1 from '/src/assets/Iveco/iveco.webp';
import fordCargo1 from '/src/assets/ford cargo/ford 1.fw.webp';
import fordCargo2 from '/src/assets/ford cargo/ford 2.fw.webp';
import fordCargo3 from '/src/assets/ford cargo/ford 3.fw.webp';
import fordCargo4 from '/src/assets/ford cargo/ford 4.fw.webp';
import mercedes1 from '/src/assets/mercedes/mercedes1.webp';
import mercedes2 from '/src/assets/mercedes/mercedes2.webp';
import mercedes3 from '/src/assets/mercedes/mercedes3.webp';
import mercedes4 from '/src/assets/mercedes/mercedes4.webp';
import cruze1 from '/src/assets/cruze/cruze1.webp';
import cruze2 from '/src/assets/cruze/cruze2.webp';
import cruze3 from '/src/assets/cruze/cruze3.webp';
import cruze4 from '/src/assets/cruze/cruze4.webp';
import landhover1 from '/src/assets/land hover/landhover1.webp';
import landhover2 from '/src/assets/land hover/landhover2.webp';
import landhover3 from '/src/assets/land hover/landhover3.webp';
import landhover4 from '/src/assets/land hover/landhover4.webp';
import landhover5 from '/src/assets/land hover/landhover5.webp';
import landhover6 from '/src/assets/land hover/landhover6.webp';
import landhover7 from '/src/assets/land hover/landhover7.webp';
import jetta1 from '/src/assets/jetta/jetta.webp';
import jetta2 from '/src/assets/jetta/jetta2.webp';
import jetta3 from '/src/assets/jetta/jetta3.webp';
import jetta4 from '/src/assets/jetta/jetta4.webp';
import kia1 from '/src/assets/kia/kiabongo1.webp';
import kia2 from '/src/assets/kia/kiabongo2.webp';
import kia3 from '/src/assets/kia/kiabongo3.webp';
import kia4 from '/src/assets/kia/kiabongo1.webp';



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
    images: [landhover1,landhover2,landhover3,landhover4,landhover5,landhover6,landhover7], // Exemplo de imagem
    description: 'Carro forte e economico',
    additionalInfo: 'Usado, totalmente preservado, segundo dono   ',
  },
  {
    id: 6,
    name: 'Kia Bombo K 2500',
    brand: 'Kia',
    type: 'Caminhão',
    ano: '2020',
    km: '200.000',
    price: 128000,
    images: [kia1,kia2,kia3,kia4], // Exemplo de imagem
    description: 'Caminhão forte e economico',
    additionalInfo: 'Usado, totalmente preservado, Unico dono   ',
  },
  {
    id: 7,
    name: 'Jetta Confortline 1.4 turbo',
    brand: 'Volkswagen',
    type: 'Automotivo',
    ano: '2019',
    km: '60.000',
    price: 100000,
    images: [jetta1,jetta2,jetta3,jetta4], // Exemplo de imagem
    description: 'Carro forte e economico',
    additionalInfo: 'Usado, totalmente preservado, Unico dono   ',
  },


  // Outros produtos aqui
];
