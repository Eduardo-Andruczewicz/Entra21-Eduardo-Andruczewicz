const { sequelize, Usuario } = require("./db/models");

(async () => {
    try {

        await sequelize.sync({ force: true });

        await sequelize.authenticate();
        console.log("Conexão bem-sucedida!")

        // Inserindo um usuário
        const pedro = await Usuario.create({
            nome: "Pedro",
            email: "pedro@email.com",
            senha: "123456"
        });
            console.log("Usuario criado com sucesso!");

            // Inserindo um endereço
            pedro.createEndereco({
                rua: "Rua 01",
                numero: 123
            });

    } catch (error) {
        console.error("Erro", error);
    } finally {
        sequelize.close();
    }
})();