export interface IProduto  {
    id: number;
    name: string;
    price: number;
    description: string;
    imUrl: string;
    quantities: number;
    categories: ICategory[];
    
}
export interface ICategory {
    id: number;
    name: string;
  }

export interface IProdutoCarrinho extends IProduto{
    quantidade: number
}

export interface produtofiltro{
    name:string;
}
