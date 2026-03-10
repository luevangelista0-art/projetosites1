// src/pages/Sobre.jsx
function Sobre() {
  const valores = [
    { icone:'🎯', titulo:'Missão',  texto:'Oferecer soluções inovadoras que transformem a vida dos nossos clientes.' },
    { icone:'👁️', titulo:'Visão',   texto:'Ser reconhecida como referência de qualidade e inovação até 2030.' },
    { icone:'💎', titulo:'Valores', texto:'Ética, transparência, respeito às pessoas e compromisso com resultados.' },
  ];

  return (
    <div style={{ maxWidth:'900px', margin:'0 auto', padding:'48px 24px' }}>

      {/* Título da página */}
      <div style={{ borderLeft:'5px solid #eb2525', paddingLeft:'20px', marginBottom:'40px' }}>
        <h1 style={{ color:'#5f1e1e', fontSize:'2rem' }}>Formação Acadêmica</h1>
        <p style={{ color:'#8b6464' }}>Um pouco mais sobre mim.</p>
      </div>

      {/* História */}
      <section style={{ marginBottom:'48px' }}>
        <h2 style={{ color:'#5f1e1e', marginBottom:'16px' }}>1. Ensino Médio Técnico em Informática</h2>
        <p style={{ lineHeight:'0.5', color:'#865c5c', marginBottom:'16px' }}>
         Instituição: Escola Técnica Estadual de São Paulo
        </p>
        <p style={{ lineHeight:'0.5', color:'#865c5c', marginBottom:'16px' }}>
          Início: 2019
        </p>
        <p style={{ lineHeight:'0.5', color:'#865c5c', marginBottom:'16px' }}>
          Conclusão: 2021
        </p>
        <p style={{ lineHeight:'2.0', color:'#865c5c', marginBottom:'16px' }}>
        Descrição:
        Curso técnico focado em fundamentos de programação, redes de computadores e desenvolvimento de sistemas.
        </p>
        <h2 style={{ color:'#5f1e1e', marginBottom:'16px' }}>2. Bacharelado em Engenharia de Software</h2>
        <p style={{ lineHeight:'0.5', color:'#865c5c', marginBottom:'16px' }}>
          Instituição: FIAP – Faculdade de Informática e Administração Paulista.
        </p>
        <p style={{ lineHeight:'0.5', color:'#865c5c', marginBottom:'16px' }}>
          Início: 2022
        </p>
        <p style={{ lineHeight:'0.5', color:'#865c5c', marginBottom:'16px' }}>
          Conclusão: Em andamento.
        </p>
        <p style={{ lineHeight:'2.0', color:'#865c5c', marginBottom:'16px' }}>
          Descrição: Graduação voltada para desenvolvimento de software, 
          algoritmos, banco de dados e engenharia de software.
        </p>
        <h2 style={{ color:'#5f1e1e', marginBottom:'16px' }}>3. Curso Superior de Tecnologia em Desenvolvimento Web</h2>
        <p style={{ lineHeight:'0.5', color:'#865c5c', marginBottom:'16px' }}>
          Instituição: USP - Universidade de São Paulo.
        </p>
        <p style={{ lineHeight:'0.5', color:'#865c5c', marginBottom:'16px' }}>
          Início: 2023
        </p>
        <p style={{ lineHeight:'0.5', color:'#865c5c', marginBottom:'16px' }}>
          Conclusão: 2025(previsto)
        </p>
        <p style={{ lineHeight:'2.0', color:'#865c5c', marginBottom:'16px' }}>
          Descrição: Formação focada em desenvolvimento front-end e back-end,
          frameworks modernos e arquitetura de aplicações web.
        </p>
      </section>


    </div>
  );
}

export default Sobre;
