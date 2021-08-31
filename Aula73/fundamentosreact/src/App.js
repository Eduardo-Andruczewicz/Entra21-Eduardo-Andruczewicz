import './App.css';
import { ListaAlunos } from './components/ListaAlunos';
import { ComProps } from './components/ComProps';
import { PrimeiroComponente } from './components/PrimeiroComponente';
import { Familia } from './components/Familia';
import { MembroFamilia } from './components/MembroFamilia';
import { Card } from './components/Card';
import { ParOuImpar } from './components/ParOuImpar';
import { ValorAleatorio } from './components/ValorAleatorio';
import { ComponenteControlado } from './components/ComponentesControlados';


function App() {
  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <div className="cards">
        <Card titulo="Primeiro componente" cor="#F24464">
          <PrimeiroComponente />
        </Card>
        <Card titulo="Componente com props">
          <ComProps mensagem="Estou sendo enviado pelas props" />
          <ComProps mensagem="Outra mensagem..." />
        </Card>
        <Card titulo="Lista de alunos" cor="#424255">
          <ListaAlunos />
        </Card>
        <Card titulo="Children" cor="#37A6A6">
          <Familia sobrenome="da Silva">
            <MembroFamilia nome="Ana" />
            <MembroFamilia nome="Marcos" />
            <MembroFamilia nome="Josué" />
          </Familia>
        </Card>
        <Card titulo="Renderização condicional">
          <ParOuImpar numero={10} />
          <ParOuImpar numero={5} />
          <hr />        
          <Notificacao mensagens={["Oi"]}/>
        </Card>
        <Card titulo="Manipulando eventos">
          <ManipulandoEventos />
        </Card>
        <Card titulo="State">
          <Relogio />
          <hr />
          <ValorAleatorio max={100} />
        </Card>
        <Card titulo="Componente controlado">
          <ComponenteControlado />
        </Card>
        <Card titulo="State Assíncrono">
          <Contador />
        </Card>
      </div>
    </div>
  );
}

export default App;