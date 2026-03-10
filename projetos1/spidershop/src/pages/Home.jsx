// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  // Dados dos cards de destaque
  const destaques = [
    { icone:'⭐', titulo:'Qualidade',  texto:'Produtos selecionados com alto padrão de qualidade.' },
    { icone:'🚀', titulo:'Agilidade',  texto:'Entrega rápida para todo o Brasil.' },
    { icone:'💬', titulo:'Suporte',    texto:'Atendimento humanizado 7 dias por semana.' },
  ];

  return (
    <div>

      {/* ── Banner principal ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize:'2.8rem', marginBottom:'16px' }}>
          Bem-vindo à MinhaEmpresa
        </h1>
        <p style={{ fontSize:'1.2rem', opacity:0.85, maxWidth:'600px', margin:'0 auto 32px' }}>
          Soluções de qualidade para o seu negócio crescer cada vez mais.
        </p>
        <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
          <Link to='/sobre' style={{
            background:'white', color:'#1E3A5F',
            padding:'12px 28px', borderRadius:'8px', fontWeight:'bold'
          }}>
            Conheça a empresa
          </Link>
          <Link to='/contato' style={{
            background:'transparent', color:'white',
            padding:'12px 28px', borderRadius:'8px', fontWeight:'bold',
            border:'2px solid white'
          }}>
            Fale conosco
          </Link>
        </div>
      </section>

      {/* ── Cards de destaque ── */}
      <section style={{
        maxWidth:'900px', margin:'0 auto',
        padding:'60px 24px',
      }}>
        <h2 style={{ textAlign:'center', color:'#1E3A5F', marginBottom:'40px' }}>
          Por que nos escolher?
        </h2>

        <div style={{ display:'flex', gap:'24px', flexWrap:'wrap', justifyContent:'center' }}>
          {destaques.map((item, i) => (
            <div key={i} style={{
              background:'white', borderRadius:'12px',
              padding:'28px', width:'240px',
              textAlign:'center',
              boxShadow:'0 2px 12px rgba(0,0,0,0.08)',
              border:'1px solid #E2E8F0',
            }}>
              <div style={{ fontSize:'2.5rem', marginBottom:'12px' }}>{item.icone}</div>
              <h3 style={{ color:'#1E3A5F', marginBottom:'8px' }}>{item.titulo}</h3>
              <p style={{ color:'#64748B', fontSize:'0.9rem', lineHeight:'1.6' }}>{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Chamada para ação ── */}
      <section style={{
        background:'#EFF6FF', padding:'50px 40px', textAlign:'center'
      }}>
        <h2 style={{ color:'#1E3A5F', marginBottom:'12px' }}>
          Pronto para começar?
        </h2>
        <p style={{ color:'#64748B', marginBottom:'24px' }}>
          Encontre a loja mais próxima de você.
        </p>
        <Link to='/lojas' style={{
          background:'#2563EB', color:'white',
          padding:'12px 32px', borderRadius:'8px', fontWeight:'bold',
          display:'inline-block'
        }}>
          Ver nossas lojas
        </Link>
      </section>

    </div>
  );
}

export default Home;
