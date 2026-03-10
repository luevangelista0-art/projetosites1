// src/pages/Contato.jsx
import { useState } from 'react';

function Contato() {
  const [form, setForm] = useState({ nome:'', email:'', assunto:'', mensagem:'' });
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro]    = useState('');

  function atualizar(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function enviar(e) {
    e.preventDefault();
    // Validação básica
    if (!form.nome || !form.email || !form.mensagem) {
      setErro('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    setErro('');
    setEnviado(true);
  }

  const inputStyle = {
    width:'100%', padding:'10px 14px',
    border:'1px solid #CBD5E1', borderRadius:'6px',
    fontSize:'1rem', fontFamily:'Arial',
    marginBottom:'16px', outline:'none',
  };

  if (enviado) {
    return (
      <div style={{ maxWidth:'600px', margin:'80px auto', textAlign:'center', padding:'0 24px' }}>
        <div style={{ fontSize:'4rem' }}>✅</div>
        <h2 style={{ color:'#16A34A', margin:'16px 0 8px' }}>Mensagem enviada!</h2>
        <p style={{ color:'#64748B' }}>
          Obrigado, {form.nome}! Retornaremos em até 24 horas.
        </p>
        <button
          onClick={() => { setEnviado(false); setForm({nome:'',email:'',assunto:'',mensagem:''}); }}
          style={{
            marginTop:'24px', background:'#2563EB', color:'white',
            border:'none', padding:'10px 24px', borderRadius:'6px',
            cursor:'pointer', fontSize:'1rem',
          }}
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth:'900px', margin:'0 auto', padding:'48px 24px' }}>

      <div style={{ borderLeft:'5px solid #2563EB', paddingLeft:'20px', marginBottom:'40px' }}>
        <h1 style={{ color:'#1E3A5F', fontSize:'2rem' }}>Contato</h1>
        <p style={{ color:'#64748B' }}>Ficou com dúvidas? Manda uma mensagem!</p>
      </div>

      <div style={{ display:'flex', gap:'40px', flexWrap:'wrap' }}>

        {/* Formulário */}
        <form onSubmit={enviar} style={{ flex:'2', minWidth:'280px' }}>
          {erro && (
            <div style={{
              background:'#FEE2E2', color:'#991B1B', padding:'12px 16px',
              borderRadius:'6px', marginBottom:'16px', fontSize:'0.9rem'
            }}>
              ⚠️ {erro}
            </div>
          )}

          <label style={{ fontWeight:'bold', fontSize:'0.9rem', color:'#374151' }}>
            Nome *
          </label>
          <input
            style={inputStyle}
            type='text' name='nome'
            value={form.nome} onChange={atualizar}
            placeholder='Seu nome completo'
          />

          <label style={{ fontWeight:'bold', fontSize:'0.9rem', color:'#374151' }}>
            E-mail *
          </label>
          <input
            style={inputStyle}
            type='email' name='email'
            value={form.email} onChange={atualizar}
            placeholder='seuemail@exemplo.com'
          />

          <label style={{ fontWeight:'bold', fontSize:'0.9rem', color:'#374151' }}>
            Assunto
          </label>
          <select
            style={inputStyle} name='assunto'
            value={form.assunto} onChange={atualizar}
          >
            <option value=''>Selecione um assunto</option>
            <option value='duvida'>Dúvida</option>
            <option value='suporte'>Suporte técnico</option>
            <option value='parceria'>Parceria</option>
            <option value='outro'>Outro</option>
          </select>

          <label style={{ fontWeight:'bold', fontSize:'0.9rem', color:'#374151' }}>
            Mensagem *
          </label>
          <textarea
            style={{ ...inputStyle, height:'120px', resize:'vertical' }}
            name='mensagem'
            value={form.mensagem} onChange={atualizar}
            placeholder='Escreva sua mensagem aqui...'
          />

          <button type='submit' style={{
            background:'#2563EB', color:'white', border:'none',
            padding:'12px 32px', borderRadius:'6px', fontSize:'1rem',
            cursor:'pointer', width:'100%', fontWeight:'bold',
          }}>
            Enviar mensagem
          </button>
        </form>

        {/* Informações de contato */}
        <aside style={{ flex:'1', minWidth:'200px' }}>
          <h3 style={{ color:'#1E3A5F', marginBottom:'20px' }}>Outras formas</h3>
          {[
            { icone:'📞', titulo:'Telefone', info:'(11) 98765-4321' },
            { icone:'📧', titulo:'E-mail',   info:'contato@minhaempresa.com' },
            { icone:'🕐', titulo:'Horário',  info:'Seg–Sex: 9h às 18h' },
            { icone:'📍', titulo:'Endereço', info:'Av. Paulista, 1000 — SP' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom:'20px' }}>
              <div style={{ fontSize:'1.4rem' }}>{item.icone}</div>
              <strong style={{ color:'#1E3A5F' }}>{item.titulo}</strong>
              <p style={{ color:'#64748B', fontSize:'0.9rem' }}>{item.info}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

export default Contato;
