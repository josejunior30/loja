export class Login {
    [x: string]: string;
   
    public login: string;
    public password: string;
    public token: string;

    constructor( login: string = "", password: string = "", token: string="") {
    
        this.login = login;
        this.password = password;
        this.token=token;
    }
}

// Exemplo de uso
const myLogin: Login = new Login();

