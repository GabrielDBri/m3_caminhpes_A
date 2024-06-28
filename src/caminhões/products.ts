export interface Product {
  id: number;
  name: string;
  brand: string;
  type: string;
  model: string;
  price: string;
  images: string[]; // Alteração para suportar múltiplas imagens
  description: string;
  additionalInfo: string; // Informações adicionais sobre o produto
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Iveco Daily 35 S14',
    brand: 'Iveco',
    type: 'truck',
    model: 'ssd',
    price: 'R$ 150.000,00',
    images: ['/Iveco/Iveco 1.png'], // Exemplo de imagem
    description: 'Caminhão de alta qualidade, com grndes formas de trasnporte, robusto economico, e pronto para atender voce cliente',
    additionalInfo: 'Usado, totalmente preservado, segundo dono',
  },
  {
    id: 2,
    name: 'Ford Cargo 1119',
    brand: 'Ford',
    type: 'Caminhão',
    model: 'ssd',
    price: 'R$ 270.000,00',
    images: ['/ford cargo/ford 1.fw.png','/ford cargo/ford 2.fw.png','/ford cargo/ford 3.fw.png','/ford cargo/ford 4.fw.png'], // Exemplo de imagem
    description: 'Caminhão de alta qualidade, com grndes formas de trasnporte, robusto economico, e pronto para atender voce cliente',
    additionalInfo: 'Usado, totalmente preservado, segundo dono',
  },
  {
    id: 3,
    name: 'Mercedes Bens',
    brand: 'Mercedes',
    type: 'Caminhão',
    model: 'ssd',
    price: 'R$ 270.000,00',
    images: ['/mercedes/merces 3.png','/mercedes/merces 2.png','/mercedes/merces.png','/mercedes/merces 4.png'], // Exemplo de imagem
    description: 'Caminhão de alta qualidade, com grndes formas de trasnporte, robusto economico, e pronto para atender voce cliente',
    additionalInfo: 'Usado, totalmente preservado, segundo dono',
  },

  // Outros produtos aqui
];
