import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';

const SUPABASE_URL = 'https://kvpdattmfcidabljlitf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2cGRhdHRtZmNpZGFibGpsaXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4OTkyMTksImV4cCI6MjA2NjQ3NTIxOX0.TG5aoVoLPkDuscxOP9eP5vs9rb8OG-hot0e-d42V9IY';
const BRAPI_TOKEN = '6VjwF1rwmFcDbWduyA5DpB';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Exemplo resumido de ativos — substitua por lista completa depois
const ativos = [
  { simbolo: 'VALE3', nome: 'Vale', tipo: 'acao' },
  { simbolo: 'PETR4', nome: 'Petrobras', tipo: 'acao' },
  { simbolo: 'ITUB4', nome: 'Itaú', tipo: 'acao' },
  { simbolo: 'BBDC4', nome: 'Bradesco', tipo: 'acao' },
  { simbolo: 'HGLG11', nome: 'CSHG Logística', tipo: 'fii' },
  { simbolo: 'MXRF11', nome: 'Maxi Renda', tipo: 'fii' },
  { simbolo: 'AAPL34', nome: 'Apple BDR', tipo: 'bdr' },
  { simbolo: 'MSFT34', nome: 'Microsoft BDR', tipo: 'bdr' },
  { simbolo: 'BOVA11', nome: 'ETF Ibovespa', tipo: 'etf' },
  { simbolo: 'IVVB11', nome: 'ETF S&P 500', tipo: 'etf' },
  { simbolo: 'BTC-USD', nome: 'Bitcoin', tipo: 'cripto' }
];

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function atualizaAtivos() {
  for (let ativo of ativos) {
    const url = `https://brapi.dev/api/quote/${ativo.simbolo}?token=${BRAPI_TOKEN}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (!result || !result.results || !result.results[0]) {
        console.error(`❌ Erro na resposta para ${ativo.simbolo}:`, result);
        continue;
      }

      const dados = result.results[0];
      console.log(`🔎 Dados recebidos para ${ativo.simbolo}:`, dados);

      const preco = parseFloat(dados.regularMarketPrice ?? 0);
      const atualizado_em = new Date();

      const { data, error } = await supabase
        .from('ativos')
        .upsert({
          simbolo: ativo.symbol ?? ativo.simbolo,
          nome: ativo.nome,
          preco,
          atualizado_em,
          tipo: ativo.tipo
        }, { onConflict: 'simbolo' });

      if (error) {
        console.error(`❌ Erro ao atualizar ${ativo.simbolo}:`, error);
      } else {
        console.log(`✅ ${ativo.simbolo} atualizado com sucesso!`);
      }

      // Aguarda 1 segundo entre requisições para não estourar o plano
      await delay(1000);
    } catch (e) {
      console.error(`❌ Erro na requisição para ${ativo.simbolo}:`, e);
    }
  }
}

atualizaAtivos();