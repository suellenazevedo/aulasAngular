//Criando a classe e exportando 
export class Comments {

//criando construtor e dando parametros para ele
    constructor(
        //atributos da classe Comments
        public postId: number,
        public id: number,
        public name: string,
        public email: string,
        public body: string
    ) {}

}