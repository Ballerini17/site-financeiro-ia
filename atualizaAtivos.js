import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';

const SUPABASE_URL = 'https://kvpdattmfcidabljlitf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2cGRhdHRtZmNpZGFibGpsaXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4OTkyMTksImV4cCI6MjA2NjQ3NTIxOX0.TG5aoVoLPkDuscxOP9eP5vs9rb8OG-hot0e-d42V9IY';
const BRAPI_TOKEN = '6VjwF1rwmFcDbWduyA5DpB';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const simbolos = [
  { simbolo: 'VALE3', nome: 'Vale', tipo: 'acao' },
  { simbolo: 'PETR4', nome: 'Petrobras', tipo: 'acao' },
  { simbolo: 'ITUB4', nome: 'Itaú', tipo: 'acao' },
  { simbolo: 'BBDC4', nome: 'Bradesco', tipo: 'acao' }
];

async function atualizaAtivos() {
  for (let ativo of simbolos) {
    const url = `https://brapi.dev/api/quote/${ativo.simbolo}?token=${BRAPI_TOKEN}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (!result || !result.results || !result.results[0]) {
        console.error(`❌ Erro na resposta para ${ativo.simbolo}:`, result);
        continue;
      }

      const dados = result.results[0];

      if (!dados.regularMarketPrice) {
        console.error(`❌ Dados inválidos para ${ativo.simbolo}:`, dados);
        continue;
      }

      const preco = parseFloat(dados.regularMarketPrice);
      const atualizado_em = new Date();

      const { data, error } = await supabase
        .from('ativos')
        .upsert({
          simbolo: ativo.simbolo,
          nome: ativo.nome,
          preco,
          atualizado_em,
          tipo: ativo.tipo
        }, { onConflict: 'simbolo' });

      console.log(`Resposta supabase para ${ativo.simbolo}:`, { data, error });

      if (error) {
        console.error(`❌ Erro ao atualizar ${ativo.simbolo}:`, error);
        console.error('Detalhes completos do erro:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
      } else {
        console.log(`✅ ${ativo.simbolo} atualizado com sucesso!`);
      }
    } catch (e) {
      console.error(`❌ Erro na requisição para ${ativo.simbolo}:`, e);
    }
  }
}

atualizaAtivos();
