function Notificacao(props) {
    const notificacoes = props.mensagens || [];

    return (
        <>
            {
                props.mensagens && props.mensagens.lenght > 0 &&
                <p>Você tem { props.mensagens.lenght } notificações</p>
            }   
        </>
    );
}