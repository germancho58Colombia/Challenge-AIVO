import { Imagen } from './images';

export interface Movie {

    title?: string;
    description: string;
    programType: string;
    releaseYear: number;
    images: Imagen[];

  }
  
