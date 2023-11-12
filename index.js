import Profissisonal from "./modelo/profissional.js";

const profissional = new Profissisonal(0, 
                                        "555.555.555-55", 
                                        "Ana Souza", 
                                        "15.08.1990", 
                                        "ana@email.com", 
                                        "31 9 8888-5547", 
                                        "55.555-555", 
                                        "Rua Vinte de maio", 
                                        "45 - apto 02", 
                                        "Outono", 
                                        "São Paulo"
                                        );


/*
profissional.gravar().then(() => {
    console.log("Profissional gravado com sucesso!");
}).catch((erro) => {
    console.log(`Não foi possível gravar o profissional: ${erro.message}.`);
});
*/

/*
profissional.atualizar().then(() => {
    console.log("Profissional atualizado com sucesso!");
}).catch((erro) => {
    console.log(`Não foi possível atualizar o profissional: ${erro.message}.`);
});
*/

/*
profissional.excluir().then(() => {
    console.log("Profissional excluído com sucesso!");
}).catch((erro) => {
    console.log(`Não foi possível excluir o profissional: ${erro.message}.`);
});
*/

profissional.consultar().then((listaProfissionais) => {
    for (const profissional of listaProfissionais) {
        console.log(profissional.toJason());
    }
}).catch((erro) => {
    console.log(`Não foi possível consultar o profissional: ${erro.message}.`);
});
