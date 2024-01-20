export class Usuario {
    public name: string;
    public login: string;
    public password: string;
    
   

    constructor(name: string="", login: string = "", password: string = "") {
        this.name=name;
        this.login = login;
        this.password = password;
        
        
    }
}

// Exemplo de uso
const usuario: Usuario = new Usuario();
