import { Layout } from "./components/Layout";
import { ResumeBox } from "./components/ResumeBox";
import { Title } from "./components/Title";
//Número de agendamentos do dia, número de pacientes atendidos no dia,
function App() {
  return (
    <Layout>
      <Title title="Bem-vindo Fábio." />
      <div className="gap-3 p-3 row">
        <ResumeBox
          title="Número de agendamentos do dia"
          quantity={10}
          link="/schedule-consultation"
          porcentagem={30}
          porcentagemDescription="desde o último mês"
        />
        <ResumeBox
          title="Número de pacientes atendidos no dia"
          quantity={2}
          link="/appointment-scheduling"
          porcentagem={-5}
          porcentagemDescription="desde ontem"
        />
      </div>
    </Layout>
  );
}

export default App;
