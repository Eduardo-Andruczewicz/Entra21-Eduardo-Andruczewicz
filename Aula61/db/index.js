(async () => {
        try {
            const res = await pool.query("SELECT NOW()");
            console.log(res.rows[0].now);
        } catch (error) {
            console.log(error.message);
        } finally {
            pool.end();
        }
    })();

    // try {
    //     await pool.query(`
    //     CREATE TABLE IF NOT EXISTS clientes (
    //         id SERIAL PRIMARY KEY,
    //         nome text NOT NULL,
    //         email text NOT NULL UNIQUE,
    //         telefone text NOT NULL UNIQUE,
    //         numero_doc text NOT NULL UNIQUE,
    //         tipo_pessoas integer NOT NULL,
    //         pontos text NOT NULL
    //     );

    //     CREATE TABLE IF NOT EXISTS enderecos (
    //         id SERIAL PRIMARY KEY,
    //         rua text NOT NULL,
    //         numero integer NOT NULL,
    //         cidade text NOT NULL,
    //         estado text NOT NULL,
    //         cep text NOT NULL
    //         id_cliente integer NOT NULL REFERENCES cliente
    //     );

    //     CREATE TEBLE IF NOT EXISTS livros (
    //         id SERIAL PRIMARY KEY,
    //         isbn text NOT NULL,
    //         nome_autor text NOT NULL,
    //         assunto text NOT NULL,
    //         quantidade_estoque text NOT NULL,
    //         preco text NOT NULL,
    //         id_editora NOT NULL
    //     )