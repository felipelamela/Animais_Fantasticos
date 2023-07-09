export interface Texto {
  texto: string;
}

export interface Links {
  nome: string;
  href: string;
}

export interface AnimaisDescricao {
  titulo: string;
  texto: string;
  ativo: string;
}

export interface Descricao {
  tituloDescri: string;
  textoDescri: string;
}

export interface Animal {
  id: number;
  animal: string;
  paragrafo: string;
}

export interface FetchData {
  loading: boolean;
  error: Error | null;
  data: Animal[];
  setAnimalAtual: Function;
  animalAtual: number;
}
