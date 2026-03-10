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
      <div style={{ borderLeft:'5px solid #2563EB', paddingLeft:'20px', marginBottom:'40px' }}>
        <h1 style={{ color:'#1E3A5F', fontSize:'2rem' }}>Nossa Empresa</h1>
        <p style={{ color:'#64748B' }}>Conheça quem somos e o que nos move.</p>
      </div>

      {/* História */}
      <section style={{ marginBottom:'48px' }}>
        <h2 style={{ color:'#1E3A5F', marginBottom:'16px' }}>Nossa História</h2>
        <p style={{ lineHeight:'1.8', color:'#374151', marginBottom:'16px' }}>
          Fundada em 2010, a MinhaEmpresa nasceu do sonho de três amigos que acreditavam
          que era possível oferecer produtos de alta qualidade a preços justos.
        </p>
        <p style={{ lineHeight:'1.8', color:'#374151' }}>
          Ao longo dos anos, crescemos de uma pequena loja para uma rede com filiais
          em várias cidades, sempre mantendo o compromisso com a satisfação dos clientes.
        </p>
      </section>

      {/* Números */}
      <section style={{
        background:'linear-gradient(135deg, #1E3A5F, #2563EB)',
        borderRadius:'12px', padding:'40px', marginBottom:'48px',
        display:'flex', justifyContent:'space-around', flexWrap:'wrap', gap:'20px'
      }}>
        {[
          { numero:'13+', label:'Anos de mercado' },
          { numero:'50k', label:'Clientes atendidos' },
          { numero:'12',  label:'Lojas no Brasil' },
          { numero:'98%', label:'Satisfação dos clientes' },
        ].map((item, i) => (
          <div key={i} style={{ textAlign:'center', color:'white' }}>
            <div style={{ fontSize:'2rem', fontWeight:'bold' }}>{item.numero}</div>
            <div style={{ fontSize:'0.85rem', opacity:0.8 }}>{item.label}</div>
          </div>
        ))}
      </section>

      {/* Missão, Visão, Valores */}
      <section>
        <h2 style={{ color:'#1E3A5F', marginBottom:'24px' }}>Missão, Visão e Valores</h2>
        <div style={{ display:'flex', gap:'20px', flexWrap:'wrap' }}>
          {valores.map((v, i) => (
            <div key={i} style={{
              flex:'1', minWidth:'220px',
              border:'1px solid #E2E8F0', borderRadius:'10px',
              padding:'24px', background:'white',
            }}>
              <div style={{ fontSize:'2rem', marginBottom:'10px' }}>{v.icone}</div>
              <h3 style={{ color:'#2563EB', marginBottom:'8px' }}>{v.titulo}</h3>
              <p style={{ color:'#64748B', lineHeight:'1.6', fontSize:'0.9rem' }}>{v.texto}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Sobre;
