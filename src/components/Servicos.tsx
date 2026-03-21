import { ShieldCheck, HardHat, Users, ClipboardCheck } from 'lucide-react';

const meusServicos = [
  { id: 1, titulo: "PGR", icon: <ShieldCheck size={32} color="#38bdf8" /> },
  { id: 2, titulo: "PCMSO", icon: <ClipboardCheck size={32} color="#38bdf8" /> },
  { id: 3, titulo: "Consultoria", icon: <Users size={32} color="#38bdf8" /> },
  { id: 4, titulo: "Treinamentos", icon: <HardHat size={32} color="#38bdf8" /> },
];

function Servicos() {
  return (
    <section className="servicos">
      <h2>Serviços</h2>
      <div className="servicos-grid">
        {meusServicos.map((s) => (
          <div key={s.id} className="card-servico">
            <div className="icon-container">{s.icon}</div>
            <h3>{s.titulo}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;