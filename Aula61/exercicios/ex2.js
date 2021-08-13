const db = require("./db");

const query = `
    CREATE TABLE IF NOT EXISTS clientes (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        nome text NOT NULL,
        email text NOT NULL UNIQUE,
        telefone text NOT NULL UNIQUE,
        numero_doc numeric NOT NULL UNIQUE,
        tipo_pessoas integer NOT NULL,
        pontos integer DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS editora (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        nome_gerente text NOT NULL,
        telefone text NOT NULL 
    );



    CREATE TABLE IF NOT EXISTS enderecos (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        rua text NOT NULL,
        numero integer NOT NULL,
        cidade text NOT NULL,
        estado text NOT NULL,
        cep text NOT NULL
        id_cliente uuid NOT NULL REFERENCES cliente
    );

    CREATE TABLE IF NOT EXISTS livros (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        isbn text NOT NULL,
        nome_autor text NOT NULL,
        assunto text NOT NULL,
        quantidade_estoque text NOT NULL,
        preco text NOT NULL,
        id_editora uuid NOT NULL
    );

    CREATE TABLE IF NOT EXISTS compras (
        id_cliente uuid,
        id_livro uuid,
        data timestamp NOT NULL,
        valor numeric NOT NULL,
        PRIMARY KEY (id_cliente,id_livro,data),
        FOREIGN KEY (id_cliente) REFERENCES clientes (id),
        FOREIGN KEY (id_livro) REFERENCES livros (isbn)
    );
   );`
(async () => {
    try {
        await db.query(query);
        console.log("Tabelas foram criadas com sucesso!");
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
})();