// src/pages/Home.jsx
import { Link } from 'react-router-dom';

function Home() {
  // Dados dos cards de destaque
  const destaques = [
    {icone: '👤', titulo:'Nome Completo',  texto:'Luísa Silva Evangelista' },
    {icone: '📍', titulo:'Endereço',   texto:'Rua das Palmeiras, 245 – São Paulo, SP' },
    {icone:'📞',  titulo:'Telefone',    texto:'(11) 98765-4321' },
    {icone:'✉️',  titulo:'Email',    texto:'luisa.evangelista@gmail.com' },
  ];

  return (
    <div>

      {/* ── Banner principal ── */}
      <section style={{
        background: 'linear-gradient(135deg, #610909 0%, #C62828 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize:'2.8rem', marginBottom:'16px' }}>
          Bem-vindo ao Meu Currículo
        </h1>
        <p style={{ fontSize:'1.2rem', opacity:0.85, maxWidth:'600px', margin:'0 auto 32px' }}>
          Aqui você poderá conhecer um pouco mais sobre minha trajetória acadêmica, minhas experiências profissionais
          e os cursos que contribuíram para o meu desenvolvimento pessoal e profissional.
        </p>
        <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap' }}>
          <Link to='/sobre' style={{
            background:'white', color:'#5f1e1e',
            padding:'12px 28px', borderRadius:'8px', fontWeight:'bold'
          }}>
            Formação Acadêmica
          </Link>
          <Link to='/lojas' style={{
            background:'transparent', color:'white',
            padding:'12px 28px', borderRadius:'8px', fontWeight:'bold',
            border:'2px solid white'
          }}>
            Cursos
          </Link>
        </div>
      </section>

      {/* ── Cards de destaque ── */}
      <section style={{
        maxWidth:'900px', margin:'0 auto',
        padding:'60px 24px',
      }}>
        <h2 style={{ textAlign:'center', color:'#5f1e1e', marginBottom:'40px' }}>
          Dados Pessoais:
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
              <h3 style={{ color:'#5f1e1e', marginBottom:'8px' }}>{item.titulo}</h3>
              <p style={{ color:'#8b6464', fontSize:'0.9rem', lineHeight:'1.6' }}>{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Chamada para ação ── */}
      <section style={{
        background:'#F5E6C8', padding:'50px 40px', textAlign:'center'
      }}>
        <h2 style={{ color:'#8d0000', marginBottom:'12px' }}>
          Sobre mim
        </h2>
        <p style={{ color:'#9c7373', marginBottom:'24px' }}>
        Sou uma estudante de tecnologia apaixonado por desenvolvimento web e criação de interfaces modernas.<br />
        Tenho interesse em aprender novas ferramentas, trabalhar em equipe e desenvolver soluções <br />
        que facilitem a vida das pessoas através da tecnologia.
        </p>
        <Link to='/lojas' style={{
          background:'#970909', color:'white',
          padding:'12px 32px', borderRadius:'8px', fontWeight:'bold',
          display:'inline-block'
        }}>
          Ver mais
        </Link>
      </section>

    </div>
  );
}

export default Home;
