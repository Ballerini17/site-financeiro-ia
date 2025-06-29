
import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';

const SUPABASE_URL = 'https://kvpdattmfcidabljlitf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2cGRhdHRtZmNpZGFibGpsaXRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4OTkyMTksImV4cCI6MjA2NjQ3NTIxOX0.TG5aoVoLPkDuscxOP9eP5vs9rb8OG-hot0e-d42V9IY';
const BRAPI_TOKEN = '6VjwF1rwmFcDbWduyA5DpB';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const ativos = [
  {
    "simbolo": "ACAO13",
    "nome": "A\u00e7\u00e3o 1",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO23",
    "nome": "A\u00e7\u00e3o 2",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO33",
    "nome": "A\u00e7\u00e3o 3",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO43",
    "nome": "A\u00e7\u00e3o 4",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO53",
    "nome": "A\u00e7\u00e3o 5",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO63",
    "nome": "A\u00e7\u00e3o 6",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO73",
    "nome": "A\u00e7\u00e3o 7",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO83",
    "nome": "A\u00e7\u00e3o 8",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO93",
    "nome": "A\u00e7\u00e3o 9",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO103",
    "nome": "A\u00e7\u00e3o 10",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO113",
    "nome": "A\u00e7\u00e3o 11",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO123",
    "nome": "A\u00e7\u00e3o 12",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO133",
    "nome": "A\u00e7\u00e3o 13",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO143",
    "nome": "A\u00e7\u00e3o 14",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO153",
    "nome": "A\u00e7\u00e3o 15",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO163",
    "nome": "A\u00e7\u00e3o 16",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO173",
    "nome": "A\u00e7\u00e3o 17",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO183",
    "nome": "A\u00e7\u00e3o 18",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO193",
    "nome": "A\u00e7\u00e3o 19",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO203",
    "nome": "A\u00e7\u00e3o 20",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO213",
    "nome": "A\u00e7\u00e3o 21",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO223",
    "nome": "A\u00e7\u00e3o 22",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO233",
    "nome": "A\u00e7\u00e3o 23",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO243",
    "nome": "A\u00e7\u00e3o 24",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO253",
    "nome": "A\u00e7\u00e3o 25",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO263",
    "nome": "A\u00e7\u00e3o 26",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO273",
    "nome": "A\u00e7\u00e3o 27",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO283",
    "nome": "A\u00e7\u00e3o 28",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO293",
    "nome": "A\u00e7\u00e3o 29",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO303",
    "nome": "A\u00e7\u00e3o 30",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO313",
    "nome": "A\u00e7\u00e3o 31",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO323",
    "nome": "A\u00e7\u00e3o 32",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO333",
    "nome": "A\u00e7\u00e3o 33",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO343",
    "nome": "A\u00e7\u00e3o 34",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO353",
    "nome": "A\u00e7\u00e3o 35",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO363",
    "nome": "A\u00e7\u00e3o 36",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO373",
    "nome": "A\u00e7\u00e3o 37",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO383",
    "nome": "A\u00e7\u00e3o 38",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO393",
    "nome": "A\u00e7\u00e3o 39",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO403",
    "nome": "A\u00e7\u00e3o 40",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO413",
    "nome": "A\u00e7\u00e3o 41",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO423",
    "nome": "A\u00e7\u00e3o 42",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO433",
    "nome": "A\u00e7\u00e3o 43",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO443",
    "nome": "A\u00e7\u00e3o 44",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO453",
    "nome": "A\u00e7\u00e3o 45",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO463",
    "nome": "A\u00e7\u00e3o 46",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO473",
    "nome": "A\u00e7\u00e3o 47",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO483",
    "nome": "A\u00e7\u00e3o 48",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO493",
    "nome": "A\u00e7\u00e3o 49",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO503",
    "nome": "A\u00e7\u00e3o 50",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO513",
    "nome": "A\u00e7\u00e3o 51",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO523",
    "nome": "A\u00e7\u00e3o 52",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO533",
    "nome": "A\u00e7\u00e3o 53",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO543",
    "nome": "A\u00e7\u00e3o 54",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO553",
    "nome": "A\u00e7\u00e3o 55",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO563",
    "nome": "A\u00e7\u00e3o 56",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO573",
    "nome": "A\u00e7\u00e3o 57",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO583",
    "nome": "A\u00e7\u00e3o 58",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO593",
    "nome": "A\u00e7\u00e3o 59",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO603",
    "nome": "A\u00e7\u00e3o 60",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO613",
    "nome": "A\u00e7\u00e3o 61",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO623",
    "nome": "A\u00e7\u00e3o 62",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO633",
    "nome": "A\u00e7\u00e3o 63",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO643",
    "nome": "A\u00e7\u00e3o 64",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO653",
    "nome": "A\u00e7\u00e3o 65",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO663",
    "nome": "A\u00e7\u00e3o 66",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO673",
    "nome": "A\u00e7\u00e3o 67",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO683",
    "nome": "A\u00e7\u00e3o 68",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO693",
    "nome": "A\u00e7\u00e3o 69",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO703",
    "nome": "A\u00e7\u00e3o 70",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO713",
    "nome": "A\u00e7\u00e3o 71",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO723",
    "nome": "A\u00e7\u00e3o 72",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO733",
    "nome": "A\u00e7\u00e3o 73",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO743",
    "nome": "A\u00e7\u00e3o 74",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO753",
    "nome": "A\u00e7\u00e3o 75",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO763",
    "nome": "A\u00e7\u00e3o 76",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO773",
    "nome": "A\u00e7\u00e3o 77",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO783",
    "nome": "A\u00e7\u00e3o 78",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO793",
    "nome": "A\u00e7\u00e3o 79",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO803",
    "nome": "A\u00e7\u00e3o 80",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO813",
    "nome": "A\u00e7\u00e3o 81",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO823",
    "nome": "A\u00e7\u00e3o 82",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO833",
    "nome": "A\u00e7\u00e3o 83",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO843",
    "nome": "A\u00e7\u00e3o 84",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO853",
    "nome": "A\u00e7\u00e3o 85",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO863",
    "nome": "A\u00e7\u00e3o 86",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO873",
    "nome": "A\u00e7\u00e3o 87",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO883",
    "nome": "A\u00e7\u00e3o 88",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO893",
    "nome": "A\u00e7\u00e3o 89",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO903",
    "nome": "A\u00e7\u00e3o 90",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO913",
    "nome": "A\u00e7\u00e3o 91",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO923",
    "nome": "A\u00e7\u00e3o 92",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO933",
    "nome": "A\u00e7\u00e3o 93",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO943",
    "nome": "A\u00e7\u00e3o 94",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO953",
    "nome": "A\u00e7\u00e3o 95",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO963",
    "nome": "A\u00e7\u00e3o 96",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO973",
    "nome": "A\u00e7\u00e3o 97",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO983",
    "nome": "A\u00e7\u00e3o 98",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO993",
    "nome": "A\u00e7\u00e3o 99",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1003",
    "nome": "A\u00e7\u00e3o 100",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1013",
    "nome": "A\u00e7\u00e3o 101",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1023",
    "nome": "A\u00e7\u00e3o 102",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1033",
    "nome": "A\u00e7\u00e3o 103",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1043",
    "nome": "A\u00e7\u00e3o 104",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1053",
    "nome": "A\u00e7\u00e3o 105",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1063",
    "nome": "A\u00e7\u00e3o 106",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1073",
    "nome": "A\u00e7\u00e3o 107",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1083",
    "nome": "A\u00e7\u00e3o 108",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1093",
    "nome": "A\u00e7\u00e3o 109",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1103",
    "nome": "A\u00e7\u00e3o 110",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1113",
    "nome": "A\u00e7\u00e3o 111",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1123",
    "nome": "A\u00e7\u00e3o 112",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1133",
    "nome": "A\u00e7\u00e3o 113",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1143",
    "nome": "A\u00e7\u00e3o 114",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1153",
    "nome": "A\u00e7\u00e3o 115",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1163",
    "nome": "A\u00e7\u00e3o 116",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1173",
    "nome": "A\u00e7\u00e3o 117",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1183",
    "nome": "A\u00e7\u00e3o 118",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1193",
    "nome": "A\u00e7\u00e3o 119",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1203",
    "nome": "A\u00e7\u00e3o 120",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1213",
    "nome": "A\u00e7\u00e3o 121",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1223",
    "nome": "A\u00e7\u00e3o 122",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1233",
    "nome": "A\u00e7\u00e3o 123",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1243",
    "nome": "A\u00e7\u00e3o 124",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1253",
    "nome": "A\u00e7\u00e3o 125",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1263",
    "nome": "A\u00e7\u00e3o 126",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1273",
    "nome": "A\u00e7\u00e3o 127",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1283",
    "nome": "A\u00e7\u00e3o 128",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1293",
    "nome": "A\u00e7\u00e3o 129",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1303",
    "nome": "A\u00e7\u00e3o 130",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1313",
    "nome": "A\u00e7\u00e3o 131",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1323",
    "nome": "A\u00e7\u00e3o 132",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1333",
    "nome": "A\u00e7\u00e3o 133",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1343",
    "nome": "A\u00e7\u00e3o 134",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1353",
    "nome": "A\u00e7\u00e3o 135",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1363",
    "nome": "A\u00e7\u00e3o 136",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1373",
    "nome": "A\u00e7\u00e3o 137",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1383",
    "nome": "A\u00e7\u00e3o 138",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1393",
    "nome": "A\u00e7\u00e3o 139",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1403",
    "nome": "A\u00e7\u00e3o 140",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1413",
    "nome": "A\u00e7\u00e3o 141",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1423",
    "nome": "A\u00e7\u00e3o 142",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1433",
    "nome": "A\u00e7\u00e3o 143",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1443",
    "nome": "A\u00e7\u00e3o 144",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1453",
    "nome": "A\u00e7\u00e3o 145",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1463",
    "nome": "A\u00e7\u00e3o 146",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1473",
    "nome": "A\u00e7\u00e3o 147",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1483",
    "nome": "A\u00e7\u00e3o 148",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1493",
    "nome": "A\u00e7\u00e3o 149",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1503",
    "nome": "A\u00e7\u00e3o 150",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1513",
    "nome": "A\u00e7\u00e3o 151",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1523",
    "nome": "A\u00e7\u00e3o 152",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1533",
    "nome": "A\u00e7\u00e3o 153",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1543",
    "nome": "A\u00e7\u00e3o 154",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1553",
    "nome": "A\u00e7\u00e3o 155",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1563",
    "nome": "A\u00e7\u00e3o 156",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1573",
    "nome": "A\u00e7\u00e3o 157",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1583",
    "nome": "A\u00e7\u00e3o 158",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1593",
    "nome": "A\u00e7\u00e3o 159",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1603",
    "nome": "A\u00e7\u00e3o 160",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1613",
    "nome": "A\u00e7\u00e3o 161",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1623",
    "nome": "A\u00e7\u00e3o 162",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1633",
    "nome": "A\u00e7\u00e3o 163",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1643",
    "nome": "A\u00e7\u00e3o 164",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1653",
    "nome": "A\u00e7\u00e3o 165",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1663",
    "nome": "A\u00e7\u00e3o 166",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1673",
    "nome": "A\u00e7\u00e3o 167",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1683",
    "nome": "A\u00e7\u00e3o 168",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1693",
    "nome": "A\u00e7\u00e3o 169",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1703",
    "nome": "A\u00e7\u00e3o 170",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1713",
    "nome": "A\u00e7\u00e3o 171",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1723",
    "nome": "A\u00e7\u00e3o 172",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1733",
    "nome": "A\u00e7\u00e3o 173",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1743",
    "nome": "A\u00e7\u00e3o 174",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1753",
    "nome": "A\u00e7\u00e3o 175",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1763",
    "nome": "A\u00e7\u00e3o 176",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1773",
    "nome": "A\u00e7\u00e3o 177",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1783",
    "nome": "A\u00e7\u00e3o 178",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1793",
    "nome": "A\u00e7\u00e3o 179",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1803",
    "nome": "A\u00e7\u00e3o 180",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1813",
    "nome": "A\u00e7\u00e3o 181",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1823",
    "nome": "A\u00e7\u00e3o 182",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1833",
    "nome": "A\u00e7\u00e3o 183",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1843",
    "nome": "A\u00e7\u00e3o 184",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1853",
    "nome": "A\u00e7\u00e3o 185",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1863",
    "nome": "A\u00e7\u00e3o 186",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1873",
    "nome": "A\u00e7\u00e3o 187",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1883",
    "nome": "A\u00e7\u00e3o 188",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1893",
    "nome": "A\u00e7\u00e3o 189",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1903",
    "nome": "A\u00e7\u00e3o 190",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1913",
    "nome": "A\u00e7\u00e3o 191",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1923",
    "nome": "A\u00e7\u00e3o 192",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1933",
    "nome": "A\u00e7\u00e3o 193",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1943",
    "nome": "A\u00e7\u00e3o 194",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1953",
    "nome": "A\u00e7\u00e3o 195",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1963",
    "nome": "A\u00e7\u00e3o 196",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1973",
    "nome": "A\u00e7\u00e3o 197",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1983",
    "nome": "A\u00e7\u00e3o 198",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO1993",
    "nome": "A\u00e7\u00e3o 199",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2003",
    "nome": "A\u00e7\u00e3o 200",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2013",
    "nome": "A\u00e7\u00e3o 201",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2023",
    "nome": "A\u00e7\u00e3o 202",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2033",
    "nome": "A\u00e7\u00e3o 203",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2043",
    "nome": "A\u00e7\u00e3o 204",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2053",
    "nome": "A\u00e7\u00e3o 205",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2063",
    "nome": "A\u00e7\u00e3o 206",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2073",
    "nome": "A\u00e7\u00e3o 207",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2083",
    "nome": "A\u00e7\u00e3o 208",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2093",
    "nome": "A\u00e7\u00e3o 209",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2103",
    "nome": "A\u00e7\u00e3o 210",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2113",
    "nome": "A\u00e7\u00e3o 211",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2123",
    "nome": "A\u00e7\u00e3o 212",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2133",
    "nome": "A\u00e7\u00e3o 213",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2143",
    "nome": "A\u00e7\u00e3o 214",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2153",
    "nome": "A\u00e7\u00e3o 215",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2163",
    "nome": "A\u00e7\u00e3o 216",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2173",
    "nome": "A\u00e7\u00e3o 217",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2183",
    "nome": "A\u00e7\u00e3o 218",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2193",
    "nome": "A\u00e7\u00e3o 219",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2203",
    "nome": "A\u00e7\u00e3o 220",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2213",
    "nome": "A\u00e7\u00e3o 221",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2223",
    "nome": "A\u00e7\u00e3o 222",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2233",
    "nome": "A\u00e7\u00e3o 223",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2243",
    "nome": "A\u00e7\u00e3o 224",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2253",
    "nome": "A\u00e7\u00e3o 225",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2263",
    "nome": "A\u00e7\u00e3o 226",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2273",
    "nome": "A\u00e7\u00e3o 227",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2283",
    "nome": "A\u00e7\u00e3o 228",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2293",
    "nome": "A\u00e7\u00e3o 229",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2303",
    "nome": "A\u00e7\u00e3o 230",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2313",
    "nome": "A\u00e7\u00e3o 231",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2323",
    "nome": "A\u00e7\u00e3o 232",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2333",
    "nome": "A\u00e7\u00e3o 233",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2343",
    "nome": "A\u00e7\u00e3o 234",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2353",
    "nome": "A\u00e7\u00e3o 235",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2363",
    "nome": "A\u00e7\u00e3o 236",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2373",
    "nome": "A\u00e7\u00e3o 237",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2383",
    "nome": "A\u00e7\u00e3o 238",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2393",
    "nome": "A\u00e7\u00e3o 239",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2403",
    "nome": "A\u00e7\u00e3o 240",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2413",
    "nome": "A\u00e7\u00e3o 241",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2423",
    "nome": "A\u00e7\u00e3o 242",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2433",
    "nome": "A\u00e7\u00e3o 243",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2443",
    "nome": "A\u00e7\u00e3o 244",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2453",
    "nome": "A\u00e7\u00e3o 245",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2463",
    "nome": "A\u00e7\u00e3o 246",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2473",
    "nome": "A\u00e7\u00e3o 247",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2483",
    "nome": "A\u00e7\u00e3o 248",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2493",
    "nome": "A\u00e7\u00e3o 249",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2503",
    "nome": "A\u00e7\u00e3o 250",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2513",
    "nome": "A\u00e7\u00e3o 251",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2523",
    "nome": "A\u00e7\u00e3o 252",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2533",
    "nome": "A\u00e7\u00e3o 253",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2543",
    "nome": "A\u00e7\u00e3o 254",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2553",
    "nome": "A\u00e7\u00e3o 255",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2563",
    "nome": "A\u00e7\u00e3o 256",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2573",
    "nome": "A\u00e7\u00e3o 257",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2583",
    "nome": "A\u00e7\u00e3o 258",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2593",
    "nome": "A\u00e7\u00e3o 259",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2603",
    "nome": "A\u00e7\u00e3o 260",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2613",
    "nome": "A\u00e7\u00e3o 261",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2623",
    "nome": "A\u00e7\u00e3o 262",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2633",
    "nome": "A\u00e7\u00e3o 263",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2643",
    "nome": "A\u00e7\u00e3o 264",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2653",
    "nome": "A\u00e7\u00e3o 265",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2663",
    "nome": "A\u00e7\u00e3o 266",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2673",
    "nome": "A\u00e7\u00e3o 267",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2683",
    "nome": "A\u00e7\u00e3o 268",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2693",
    "nome": "A\u00e7\u00e3o 269",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2703",
    "nome": "A\u00e7\u00e3o 270",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2713",
    "nome": "A\u00e7\u00e3o 271",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2723",
    "nome": "A\u00e7\u00e3o 272",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2733",
    "nome": "A\u00e7\u00e3o 273",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2743",
    "nome": "A\u00e7\u00e3o 274",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2753",
    "nome": "A\u00e7\u00e3o 275",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2763",
    "nome": "A\u00e7\u00e3o 276",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2773",
    "nome": "A\u00e7\u00e3o 277",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2783",
    "nome": "A\u00e7\u00e3o 278",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2793",
    "nome": "A\u00e7\u00e3o 279",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2803",
    "nome": "A\u00e7\u00e3o 280",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2813",
    "nome": "A\u00e7\u00e3o 281",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2823",
    "nome": "A\u00e7\u00e3o 282",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2833",
    "nome": "A\u00e7\u00e3o 283",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2843",
    "nome": "A\u00e7\u00e3o 284",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2853",
    "nome": "A\u00e7\u00e3o 285",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2863",
    "nome": "A\u00e7\u00e3o 286",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2873",
    "nome": "A\u00e7\u00e3o 287",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2883",
    "nome": "A\u00e7\u00e3o 288",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2893",
    "nome": "A\u00e7\u00e3o 289",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2903",
    "nome": "A\u00e7\u00e3o 290",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2913",
    "nome": "A\u00e7\u00e3o 291",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2923",
    "nome": "A\u00e7\u00e3o 292",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2933",
    "nome": "A\u00e7\u00e3o 293",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2943",
    "nome": "A\u00e7\u00e3o 294",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2953",
    "nome": "A\u00e7\u00e3o 295",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2963",
    "nome": "A\u00e7\u00e3o 296",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2973",
    "nome": "A\u00e7\u00e3o 297",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2983",
    "nome": "A\u00e7\u00e3o 298",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO2993",
    "nome": "A\u00e7\u00e3o 299",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3003",
    "nome": "A\u00e7\u00e3o 300",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3013",
    "nome": "A\u00e7\u00e3o 301",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3023",
    "nome": "A\u00e7\u00e3o 302",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3033",
    "nome": "A\u00e7\u00e3o 303",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3043",
    "nome": "A\u00e7\u00e3o 304",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3053",
    "nome": "A\u00e7\u00e3o 305",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3063",
    "nome": "A\u00e7\u00e3o 306",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3073",
    "nome": "A\u00e7\u00e3o 307",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3083",
    "nome": "A\u00e7\u00e3o 308",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3093",
    "nome": "A\u00e7\u00e3o 309",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3103",
    "nome": "A\u00e7\u00e3o 310",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3113",
    "nome": "A\u00e7\u00e3o 311",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3123",
    "nome": "A\u00e7\u00e3o 312",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3133",
    "nome": "A\u00e7\u00e3o 313",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3143",
    "nome": "A\u00e7\u00e3o 314",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3153",
    "nome": "A\u00e7\u00e3o 315",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3163",
    "nome": "A\u00e7\u00e3o 316",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3173",
    "nome": "A\u00e7\u00e3o 317",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3183",
    "nome": "A\u00e7\u00e3o 318",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3193",
    "nome": "A\u00e7\u00e3o 319",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3203",
    "nome": "A\u00e7\u00e3o 320",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3213",
    "nome": "A\u00e7\u00e3o 321",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3223",
    "nome": "A\u00e7\u00e3o 322",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3233",
    "nome": "A\u00e7\u00e3o 323",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3243",
    "nome": "A\u00e7\u00e3o 324",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3253",
    "nome": "A\u00e7\u00e3o 325",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3263",
    "nome": "A\u00e7\u00e3o 326",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3273",
    "nome": "A\u00e7\u00e3o 327",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3283",
    "nome": "A\u00e7\u00e3o 328",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3293",
    "nome": "A\u00e7\u00e3o 329",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3303",
    "nome": "A\u00e7\u00e3o 330",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3313",
    "nome": "A\u00e7\u00e3o 331",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3323",
    "nome": "A\u00e7\u00e3o 332",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3333",
    "nome": "A\u00e7\u00e3o 333",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3343",
    "nome": "A\u00e7\u00e3o 334",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3353",
    "nome": "A\u00e7\u00e3o 335",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3363",
    "nome": "A\u00e7\u00e3o 336",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3373",
    "nome": "A\u00e7\u00e3o 337",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3383",
    "nome": "A\u00e7\u00e3o 338",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3393",
    "nome": "A\u00e7\u00e3o 339",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3403",
    "nome": "A\u00e7\u00e3o 340",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3413",
    "nome": "A\u00e7\u00e3o 341",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3423",
    "nome": "A\u00e7\u00e3o 342",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3433",
    "nome": "A\u00e7\u00e3o 343",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3443",
    "nome": "A\u00e7\u00e3o 344",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3453",
    "nome": "A\u00e7\u00e3o 345",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3463",
    "nome": "A\u00e7\u00e3o 346",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3473",
    "nome": "A\u00e7\u00e3o 347",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3483",
    "nome": "A\u00e7\u00e3o 348",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3493",
    "nome": "A\u00e7\u00e3o 349",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3503",
    "nome": "A\u00e7\u00e3o 350",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3513",
    "nome": "A\u00e7\u00e3o 351",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3523",
    "nome": "A\u00e7\u00e3o 352",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3533",
    "nome": "A\u00e7\u00e3o 353",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3543",
    "nome": "A\u00e7\u00e3o 354",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3553",
    "nome": "A\u00e7\u00e3o 355",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3563",
    "nome": "A\u00e7\u00e3o 356",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3573",
    "nome": "A\u00e7\u00e3o 357",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3583",
    "nome": "A\u00e7\u00e3o 358",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3593",
    "nome": "A\u00e7\u00e3o 359",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3603",
    "nome": "A\u00e7\u00e3o 360",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3613",
    "nome": "A\u00e7\u00e3o 361",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3623",
    "nome": "A\u00e7\u00e3o 362",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3633",
    "nome": "A\u00e7\u00e3o 363",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3643",
    "nome": "A\u00e7\u00e3o 364",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3653",
    "nome": "A\u00e7\u00e3o 365",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3663",
    "nome": "A\u00e7\u00e3o 366",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3673",
    "nome": "A\u00e7\u00e3o 367",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3683",
    "nome": "A\u00e7\u00e3o 368",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3693",
    "nome": "A\u00e7\u00e3o 369",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3703",
    "nome": "A\u00e7\u00e3o 370",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3713",
    "nome": "A\u00e7\u00e3o 371",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3723",
    "nome": "A\u00e7\u00e3o 372",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3733",
    "nome": "A\u00e7\u00e3o 373",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3743",
    "nome": "A\u00e7\u00e3o 374",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3753",
    "nome": "A\u00e7\u00e3o 375",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3763",
    "nome": "A\u00e7\u00e3o 376",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3773",
    "nome": "A\u00e7\u00e3o 377",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3783",
    "nome": "A\u00e7\u00e3o 378",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3793",
    "nome": "A\u00e7\u00e3o 379",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3803",
    "nome": "A\u00e7\u00e3o 380",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3813",
    "nome": "A\u00e7\u00e3o 381",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3823",
    "nome": "A\u00e7\u00e3o 382",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3833",
    "nome": "A\u00e7\u00e3o 383",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3843",
    "nome": "A\u00e7\u00e3o 384",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3853",
    "nome": "A\u00e7\u00e3o 385",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3863",
    "nome": "A\u00e7\u00e3o 386",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3873",
    "nome": "A\u00e7\u00e3o 387",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3883",
    "nome": "A\u00e7\u00e3o 388",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3893",
    "nome": "A\u00e7\u00e3o 389",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3903",
    "nome": "A\u00e7\u00e3o 390",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3913",
    "nome": "A\u00e7\u00e3o 391",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3923",
    "nome": "A\u00e7\u00e3o 392",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3933",
    "nome": "A\u00e7\u00e3o 393",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3943",
    "nome": "A\u00e7\u00e3o 394",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3953",
    "nome": "A\u00e7\u00e3o 395",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3963",
    "nome": "A\u00e7\u00e3o 396",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3973",
    "nome": "A\u00e7\u00e3o 397",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3983",
    "nome": "A\u00e7\u00e3o 398",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO3993",
    "nome": "A\u00e7\u00e3o 399",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4003",
    "nome": "A\u00e7\u00e3o 400",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4013",
    "nome": "A\u00e7\u00e3o 401",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4023",
    "nome": "A\u00e7\u00e3o 402",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4033",
    "nome": "A\u00e7\u00e3o 403",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4043",
    "nome": "A\u00e7\u00e3o 404",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4053",
    "nome": "A\u00e7\u00e3o 405",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4063",
    "nome": "A\u00e7\u00e3o 406",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4073",
    "nome": "A\u00e7\u00e3o 407",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4083",
    "nome": "A\u00e7\u00e3o 408",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4093",
    "nome": "A\u00e7\u00e3o 409",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4103",
    "nome": "A\u00e7\u00e3o 410",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4113",
    "nome": "A\u00e7\u00e3o 411",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4123",
    "nome": "A\u00e7\u00e3o 412",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4133",
    "nome": "A\u00e7\u00e3o 413",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4143",
    "nome": "A\u00e7\u00e3o 414",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4153",
    "nome": "A\u00e7\u00e3o 415",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4163",
    "nome": "A\u00e7\u00e3o 416",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4173",
    "nome": "A\u00e7\u00e3o 417",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4183",
    "nome": "A\u00e7\u00e3o 418",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4193",
    "nome": "A\u00e7\u00e3o 419",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4203",
    "nome": "A\u00e7\u00e3o 420",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4213",
    "nome": "A\u00e7\u00e3o 421",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4223",
    "nome": "A\u00e7\u00e3o 422",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4233",
    "nome": "A\u00e7\u00e3o 423",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4243",
    "nome": "A\u00e7\u00e3o 424",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4253",
    "nome": "A\u00e7\u00e3o 425",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4263",
    "nome": "A\u00e7\u00e3o 426",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4273",
    "nome": "A\u00e7\u00e3o 427",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4283",
    "nome": "A\u00e7\u00e3o 428",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4293",
    "nome": "A\u00e7\u00e3o 429",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4303",
    "nome": "A\u00e7\u00e3o 430",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4313",
    "nome": "A\u00e7\u00e3o 431",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4323",
    "nome": "A\u00e7\u00e3o 432",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4333",
    "nome": "A\u00e7\u00e3o 433",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4343",
    "nome": "A\u00e7\u00e3o 434",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4353",
    "nome": "A\u00e7\u00e3o 435",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4363",
    "nome": "A\u00e7\u00e3o 436",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4373",
    "nome": "A\u00e7\u00e3o 437",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4383",
    "nome": "A\u00e7\u00e3o 438",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4393",
    "nome": "A\u00e7\u00e3o 439",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4403",
    "nome": "A\u00e7\u00e3o 440",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4413",
    "nome": "A\u00e7\u00e3o 441",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4423",
    "nome": "A\u00e7\u00e3o 442",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4433",
    "nome": "A\u00e7\u00e3o 443",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4443",
    "nome": "A\u00e7\u00e3o 444",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4453",
    "nome": "A\u00e7\u00e3o 445",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4463",
    "nome": "A\u00e7\u00e3o 446",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4473",
    "nome": "A\u00e7\u00e3o 447",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4483",
    "nome": "A\u00e7\u00e3o 448",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4493",
    "nome": "A\u00e7\u00e3o 449",
    "tipo": "acao"
  },
  {
    "simbolo": "ACAO4503",
    "nome": "A\u00e7\u00e3o 450",
    "tipo": "acao"
  },
  {
    "simbolo": "FII111",
    "nome": "FII 1",
    "tipo": "fii"
  },
  {
    "simbolo": "FII211",
    "nome": "FII 2",
    "tipo": "fii"
  },
  {
    "simbolo": "FII311",
    "nome": "FII 3",
    "tipo": "fii"
  },
  {
    "simbolo": "FII411",
    "nome": "FII 4",
    "tipo": "fii"
  },
  {
    "simbolo": "FII511",
    "nome": "FII 5",
    "tipo": "fii"
  },
  {
    "simbolo": "FII611",
    "nome": "FII 6",
    "tipo": "fii"
  },
  {
    "simbolo": "FII711",
    "nome": "FII 7",
    "tipo": "fii"
  },
  {
    "simbolo": "FII811",
    "nome": "FII 8",
    "tipo": "fii"
  },
  {
    "simbolo": "FII911",
    "nome": "FII 9",
    "tipo": "fii"
  },
  {
    "simbolo": "FII1011",
    "nome": "FII 10",
    "tipo": "fii"
  },
  {
    "simbolo": "FII1111",
    "nome": "FII 11",
    "tipo": "fii"
  },
  {
    "simbolo": "FII1211",
    "nome": "FII 12",
    "tipo": "fii"
  },
  {
    "simbolo": "FII1311",
    "nome": "FII 13",
    "tipo": "fii"
  },
  {
    "simbolo": "FII1411",
    "nome": "FII 14",
    "tipo": "fii"
  },
  {
    "simbolo": "FII1511",
    "nome": "FII 15",
    "tipo": "fii"
  },
  {
    "simbolo": "FII1611",
    "nome": "FII 16",
    "tipo": "fii"
  },
  {
    "simbolo": "FII1711",
    "nome": "FII 17",
    "tipo": "fii"
  },
  {
    "simbolo": "FII1811",
    "nome": "FII 18",
    "tipo": "fii"
  },
  {
    "simbolo": "FII1911",
    "nome": "FII 19",
    "tipo": "fii"
  },
  {
    "simbolo": "FII2011",
    "nome": "FII 20",
    "tipo": "fii"
  },
  {
    "simbolo": "FII2111",
    "nome": "FII 21",
    "tipo": "fii"
  },
  {
    "simbolo": "FII2211",
    "nome": "FII 22",
    "tipo": "fii"
  },
  {
    "simbolo": "FII2311",
    "nome": "FII 23",
    "tipo": "fii"
  },
  {
    "simbolo": "FII2411",
    "nome": "FII 24",
    "tipo": "fii"
  },
  {
    "simbolo": "FII2511",
    "nome": "FII 25",
    "tipo": "fii"
  },
  {
    "simbolo": "FII2611",
    "nome": "FII 26",
    "tipo": "fii"
  },
  {
    "simbolo": "FII2711",
    "nome": "FII 27",
    "tipo": "fii"
  },
  {
    "simbolo": "FII2811",
    "nome": "FII 28",
    "tipo": "fii"
  },
  {
    "simbolo": "FII2911",
    "nome": "FII 29",
    "tipo": "fii"
  },
  {
    "simbolo": "FII3011",
    "nome": "FII 30",
    "tipo": "fii"
  },
  {
    "simbolo": "FII3111",
    "nome": "FII 31",
    "tipo": "fii"
  },
  {
    "simbolo": "FII3211",
    "nome": "FII 32",
    "tipo": "fii"
  },
  {
    "simbolo": "FII3311",
    "nome": "FII 33",
    "tipo": "fii"
  },
  {
    "simbolo": "FII3411",
    "nome": "FII 34",
    "tipo": "fii"
  },
  {
    "simbolo": "FII3511",
    "nome": "FII 35",
    "tipo": "fii"
  },
  {
    "simbolo": "FII3611",
    "nome": "FII 36",
    "tipo": "fii"
  },
  {
    "simbolo": "FII3711",
    "nome": "FII 37",
    "tipo": "fii"
  },
  {
    "simbolo": "FII3811",
    "nome": "FII 38",
    "tipo": "fii"
  },
  {
    "simbolo": "FII3911",
    "nome": "FII 39",
    "tipo": "fii"
  },
  {
    "simbolo": "FII4011",
    "nome": "FII 40",
    "tipo": "fii"
  },
  {
    "simbolo": "FII4111",
    "nome": "FII 41",
    "tipo": "fii"
  },
  {
    "simbolo": "FII4211",
    "nome": "FII 42",
    "tipo": "fii"
  },
  {
    "simbolo": "FII4311",
    "nome": "FII 43",
    "tipo": "fii"
  },
  {
    "simbolo": "FII4411",
    "nome": "FII 44",
    "tipo": "fii"
  },
  {
    "simbolo": "FII4511",
    "nome": "FII 45",
    "tipo": "fii"
  },
  {
    "simbolo": "FII4611",
    "nome": "FII 46",
    "tipo": "fii"
  },
  {
    "simbolo": "FII4711",
    "nome": "FII 47",
    "tipo": "fii"
  },
  {
    "simbolo": "FII4811",
    "nome": "FII 48",
    "tipo": "fii"
  },
  {
    "simbolo": "FII4911",
    "nome": "FII 49",
    "tipo": "fii"
  },
  {
    "simbolo": "FII5011",
    "nome": "FII 50",
    "tipo": "fii"
  },
  {
    "simbolo": "FII5111",
    "nome": "FII 51",
    "tipo": "fii"
  },
  {
    "simbolo": "FII5211",
    "nome": "FII 52",
    "tipo": "fii"
  },
  {
    "simbolo": "FII5311",
    "nome": "FII 53",
    "tipo": "fii"
  },
  {
    "simbolo": "FII5411",
    "nome": "FII 54",
    "tipo": "fii"
  },
  {
    "simbolo": "FII5511",
    "nome": "FII 55",
    "tipo": "fii"
  },
  {
    "simbolo": "FII5611",
    "nome": "FII 56",
    "tipo": "fii"
  },
  {
    "simbolo": "FII5711",
    "nome": "FII 57",
    "tipo": "fii"
  },
  {
    "simbolo": "FII5811",
    "nome": "FII 58",
    "tipo": "fii"
  },
  {
    "simbolo": "FII5911",
    "nome": "FII 59",
    "tipo": "fii"
  },
  {
    "simbolo": "FII6011",
    "nome": "FII 60",
    "tipo": "fii"
  },
  {
    "simbolo": "FII6111",
    "nome": "FII 61",
    "tipo": "fii"
  },
  {
    "simbolo": "FII6211",
    "nome": "FII 62",
    "tipo": "fii"
  },
  {
    "simbolo": "FII6311",
    "nome": "FII 63",
    "tipo": "fii"
  },
  {
    "simbolo": "FII6411",
    "nome": "FII 64",
    "tipo": "fii"
  },
  {
    "simbolo": "FII6511",
    "nome": "FII 65",
    "tipo": "fii"
  },
  {
    "simbolo": "FII6611",
    "nome": "FII 66",
    "tipo": "fii"
  },
  {
    "simbolo": "FII6711",
    "nome": "FII 67",
    "tipo": "fii"
  },
  {
    "simbolo": "FII6811",
    "nome": "FII 68",
    "tipo": "fii"
  },
  {
    "simbolo": "FII6911",
    "nome": "FII 69",
    "tipo": "fii"
  },
  {
    "simbolo": "FII7011",
    "nome": "FII 70",
    "tipo": "fii"
  },
  {
    "simbolo": "FII7111",
    "nome": "FII 71",
    "tipo": "fii"
  },
  {
    "simbolo": "FII7211",
    "nome": "FII 72",
    "tipo": "fii"
  },
  {
    "simbolo": "FII7311",
    "nome": "FII 73",
    "tipo": "fii"
  },
  {
    "simbolo": "FII7411",
    "nome": "FII 74",
    "tipo": "fii"
  },
  {
    "simbolo": "FII7511",
    "nome": "FII 75",
    "tipo": "fii"
  },
  {
    "simbolo": "FII7611",
    "nome": "FII 76",
    "tipo": "fii"
  },
  {
    "simbolo": "FII7711",
    "nome": "FII 77",
    "tipo": "fii"
  },
  {
    "simbolo": "FII7811",
    "nome": "FII 78",
    "tipo": "fii"
  },
  {
    "simbolo": "FII7911",
    "nome": "FII 79",
    "tipo": "fii"
  },
  {
    "simbolo": "FII8011",
    "nome": "FII 80",
    "tipo": "fii"
  },
  {
    "simbolo": "FII8111",
    "nome": "FII 81",
    "tipo": "fii"
  },
  {
    "simbolo": "FII8211",
    "nome": "FII 82",
    "tipo": "fii"
  },
  {
    "simbolo": "FII8311",
    "nome": "FII 83",
    "tipo": "fii"
  },
  {
    "simbolo": "FII8411",
    "nome": "FII 84",
    "tipo": "fii"
  },
  {
    "simbolo": "FII8511",
    "nome": "FII 85",
    "tipo": "fii"
  },
  {
    "simbolo": "FII8611",
    "nome": "FII 86",
    "tipo": "fii"
  },
  {
    "simbolo": "FII8711",
    "nome": "FII 87",
    "tipo": "fii"
  },
  {
    "simbolo": "FII8811",
    "nome": "FII 88",
    "tipo": "fii"
  },
  {
    "simbolo": "FII8911",
    "nome": "FII 89",
    "tipo": "fii"
  },
  {
    "simbolo": "FII9011",
    "nome": "FII 90",
    "tipo": "fii"
  },
  {
    "simbolo": "FII9111",
    "nome": "FII 91",
    "tipo": "fii"
  },
  {
    "simbolo": "FII9211",
    "nome": "FII 92",
    "tipo": "fii"
  },
  {
    "simbolo": "FII9311",
    "nome": "FII 93",
    "tipo": "fii"
  },
  {
    "simbolo": "FII9411",
    "nome": "FII 94",
    "tipo": "fii"
  },
  {
    "simbolo": "FII9511",
    "nome": "FII 95",
    "tipo": "fii"
  },
  {
    "simbolo": "FII9611",
    "nome": "FII 96",
    "tipo": "fii"
  },
  {
    "simbolo": "FII9711",
    "nome": "FII 97",
    "tipo": "fii"
  },
  {
    "simbolo": "FII9811",
    "nome": "FII 98",
    "tipo": "fii"
  },
  {
    "simbolo": "FII9911",
    "nome": "FII 99",
    "tipo": "fii"
  },
  {
    "simbolo": "FII10011",
    "nome": "FII 100",
    "tipo": "fii"
  },
  {
    "simbolo": "FII10111",
    "nome": "FII 101",
    "tipo": "fii"
  },
  {
    "simbolo": "FII10211",
    "nome": "FII 102",
    "tipo": "fii"
  },
  {
    "simbolo": "FII10311",
    "nome": "FII 103",
    "tipo": "fii"
  },
  {
    "simbolo": "FII10411",
    "nome": "FII 104",
    "tipo": "fii"
  },
  {
    "simbolo": "FII10511",
    "nome": "FII 105",
    "tipo": "fii"
  },
  {
    "simbolo": "FII10611",
    "nome": "FII 106",
    "tipo": "fii"
  },
  {
    "simbolo": "FII10711",
    "nome": "FII 107",
    "tipo": "fii"
  },
  {
    "simbolo": "FII10811",
    "nome": "FII 108",
    "tipo": "fii"
  },
  {
    "simbolo": "FII10911",
    "nome": "FII 109",
    "tipo": "fii"
  },
  {
    "simbolo": "FII11011",
    "nome": "FII 110",
    "tipo": "fii"
  },
  {
    "simbolo": "FII11111",
    "nome": "FII 111",
    "tipo": "fii"
  },
  {
    "simbolo": "FII11211",
    "nome": "FII 112",
    "tipo": "fii"
  },
  {
    "simbolo": "FII11311",
    "nome": "FII 113",
    "tipo": "fii"
  },
  {
    "simbolo": "FII11411",
    "nome": "FII 114",
    "tipo": "fii"
  },
  {
    "simbolo": "FII11511",
    "nome": "FII 115",
    "tipo": "fii"
  },
  {
    "simbolo": "FII11611",
    "nome": "FII 116",
    "tipo": "fii"
  },
  {
    "simbolo": "FII11711",
    "nome": "FII 117",
    "tipo": "fii"
  },
  {
    "simbolo": "FII11811",
    "nome": "FII 118",
    "tipo": "fii"
  },
  {
    "simbolo": "FII11911",
    "nome": "FII 119",
    "tipo": "fii"
  },
  {
    "simbolo": "FII12011",
    "nome": "FII 120",
    "tipo": "fii"
  },
  {
    "simbolo": "FII12111",
    "nome": "FII 121",
    "tipo": "fii"
  },
  {
    "simbolo": "FII12211",
    "nome": "FII 122",
    "tipo": "fii"
  },
  {
    "simbolo": "FII12311",
    "nome": "FII 123",
    "tipo": "fii"
  },
  {
    "simbolo": "FII12411",
    "nome": "FII 124",
    "tipo": "fii"
  },
  {
    "simbolo": "FII12511",
    "nome": "FII 125",
    "tipo": "fii"
  },
  {
    "simbolo": "FII12611",
    "nome": "FII 126",
    "tipo": "fii"
  },
  {
    "simbolo": "FII12711",
    "nome": "FII 127",
    "tipo": "fii"
  },
  {
    "simbolo": "FII12811",
    "nome": "FII 128",
    "tipo": "fii"
  },
  {
    "simbolo": "FII12911",
    "nome": "FII 129",
    "tipo": "fii"
  },
  {
    "simbolo": "FII13011",
    "nome": "FII 130",
    "tipo": "fii"
  },
  {
    "simbolo": "FII13111",
    "nome": "FII 131",
    "tipo": "fii"
  },
  {
    "simbolo": "FII13211",
    "nome": "FII 132",
    "tipo": "fii"
  },
  {
    "simbolo": "FII13311",
    "nome": "FII 133",
    "tipo": "fii"
  },
  {
    "simbolo": "FII13411",
    "nome": "FII 134",
    "tipo": "fii"
  },
  {
    "simbolo": "FII13511",
    "nome": "FII 135",
    "tipo": "fii"
  },
  {
    "simbolo": "FII13611",
    "nome": "FII 136",
    "tipo": "fii"
  },
  {
    "simbolo": "FII13711",
    "nome": "FII 137",
    "tipo": "fii"
  },
  {
    "simbolo": "FII13811",
    "nome": "FII 138",
    "tipo": "fii"
  },
  {
    "simbolo": "FII13911",
    "nome": "FII 139",
    "tipo": "fii"
  },
  {
    "simbolo": "FII14011",
    "nome": "FII 140",
    "tipo": "fii"
  },
  {
    "simbolo": "FII14111",
    "nome": "FII 141",
    "tipo": "fii"
  },
  {
    "simbolo": "FII14211",
    "nome": "FII 142",
    "tipo": "fii"
  },
  {
    "simbolo": "FII14311",
    "nome": "FII 143",
    "tipo": "fii"
  },
  {
    "simbolo": "FII14411",
    "nome": "FII 144",
    "tipo": "fii"
  },
  {
    "simbolo": "FII14511",
    "nome": "FII 145",
    "tipo": "fii"
  },
  {
    "simbolo": "FII14611",
    "nome": "FII 146",
    "tipo": "fii"
  },
  {
    "simbolo": "FII14711",
    "nome": "FII 147",
    "tipo": "fii"
  },
  {
    "simbolo": "FII14811",
    "nome": "FII 148",
    "tipo": "fii"
  },
  {
    "simbolo": "FII14911",
    "nome": "FII 149",
    "tipo": "fii"
  },
  {
    "simbolo": "FII15011",
    "nome": "FII 150",
    "tipo": "fii"
  },
  {
    "simbolo": "FII15111",
    "nome": "FII 151",
    "tipo": "fii"
  },
  {
    "simbolo": "FII15211",
    "nome": "FII 152",
    "tipo": "fii"
  },
  {
    "simbolo": "FII15311",
    "nome": "FII 153",
    "tipo": "fii"
  },
  {
    "simbolo": "FII15411",
    "nome": "FII 154",
    "tipo": "fii"
  },
  {
    "simbolo": "FII15511",
    "nome": "FII 155",
    "tipo": "fii"
  },
  {
    "simbolo": "FII15611",
    "nome": "FII 156",
    "tipo": "fii"
  },
  {
    "simbolo": "FII15711",
    "nome": "FII 157",
    "tipo": "fii"
  },
  {
    "simbolo": "FII15811",
    "nome": "FII 158",
    "tipo": "fii"
  },
  {
    "simbolo": "FII15911",
    "nome": "FII 159",
    "tipo": "fii"
  },
  {
    "simbolo": "FII16011",
    "nome": "FII 160",
    "tipo": "fii"
  },
  {
    "simbolo": "FII16111",
    "nome": "FII 161",
    "tipo": "fii"
  },
  {
    "simbolo": "FII16211",
    "nome": "FII 162",
    "tipo": "fii"
  },
  {
    "simbolo": "FII16311",
    "nome": "FII 163",
    "tipo": "fii"
  },
  {
    "simbolo": "FII16411",
    "nome": "FII 164",
    "tipo": "fii"
  },
  {
    "simbolo": "FII16511",
    "nome": "FII 165",
    "tipo": "fii"
  },
  {
    "simbolo": "FII16611",
    "nome": "FII 166",
    "tipo": "fii"
  },
  {
    "simbolo": "FII16711",
    "nome": "FII 167",
    "tipo": "fii"
  },
  {
    "simbolo": "FII16811",
    "nome": "FII 168",
    "tipo": "fii"
  },
  {
    "simbolo": "FII16911",
    "nome": "FII 169",
    "tipo": "fii"
  },
  {
    "simbolo": "FII17011",
    "nome": "FII 170",
    "tipo": "fii"
  },
  {
    "simbolo": "FII17111",
    "nome": "FII 171",
    "tipo": "fii"
  },
  {
    "simbolo": "FII17211",
    "nome": "FII 172",
    "tipo": "fii"
  },
  {
    "simbolo": "FII17311",
    "nome": "FII 173",
    "tipo": "fii"
  },
  {
    "simbolo": "FII17411",
    "nome": "FII 174",
    "tipo": "fii"
  },
  {
    "simbolo": "FII17511",
    "nome": "FII 175",
    "tipo": "fii"
  },
  {
    "simbolo": "FII17611",
    "nome": "FII 176",
    "tipo": "fii"
  },
  {
    "simbolo": "FII17711",
    "nome": "FII 177",
    "tipo": "fii"
  },
  {
    "simbolo": "FII17811",
    "nome": "FII 178",
    "tipo": "fii"
  },
  {
    "simbolo": "FII17911",
    "nome": "FII 179",
    "tipo": "fii"
  },
  {
    "simbolo": "FII18011",
    "nome": "FII 180",
    "tipo": "fii"
  },
  {
    "simbolo": "BDR134",
    "nome": "BDR 1",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR234",
    "nome": "BDR 2",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR334",
    "nome": "BDR 3",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR434",
    "nome": "BDR 4",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR534",
    "nome": "BDR 5",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR634",
    "nome": "BDR 6",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR734",
    "nome": "BDR 7",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR834",
    "nome": "BDR 8",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR934",
    "nome": "BDR 9",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR1034",
    "nome": "BDR 10",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR1134",
    "nome": "BDR 11",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR1234",
    "nome": "BDR 12",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR1334",
    "nome": "BDR 13",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR1434",
    "nome": "BDR 14",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR1534",
    "nome": "BDR 15",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR1634",
    "nome": "BDR 16",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR1734",
    "nome": "BDR 17",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR1834",
    "nome": "BDR 18",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR1934",
    "nome": "BDR 19",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR2034",
    "nome": "BDR 20",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR2134",
    "nome": "BDR 21",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR2234",
    "nome": "BDR 22",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR2334",
    "nome": "BDR 23",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR2434",
    "nome": "BDR 24",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR2534",
    "nome": "BDR 25",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR2634",
    "nome": "BDR 26",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR2734",
    "nome": "BDR 27",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR2834",
    "nome": "BDR 28",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR2934",
    "nome": "BDR 29",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR3034",
    "nome": "BDR 30",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR3134",
    "nome": "BDR 31",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR3234",
    "nome": "BDR 32",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR3334",
    "nome": "BDR 33",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR3434",
    "nome": "BDR 34",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR3534",
    "nome": "BDR 35",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR3634",
    "nome": "BDR 36",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR3734",
    "nome": "BDR 37",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR3834",
    "nome": "BDR 38",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR3934",
    "nome": "BDR 39",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR4034",
    "nome": "BDR 40",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR4134",
    "nome": "BDR 41",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR4234",
    "nome": "BDR 42",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR4334",
    "nome": "BDR 43",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR4434",
    "nome": "BDR 44",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR4534",
    "nome": "BDR 45",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR4634",
    "nome": "BDR 46",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR4734",
    "nome": "BDR 47",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR4834",
    "nome": "BDR 48",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR4934",
    "nome": "BDR 49",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR5034",
    "nome": "BDR 50",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR5134",
    "nome": "BDR 51",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR5234",
    "nome": "BDR 52",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR5334",
    "nome": "BDR 53",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR5434",
    "nome": "BDR 54",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR5534",
    "nome": "BDR 55",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR5634",
    "nome": "BDR 56",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR5734",
    "nome": "BDR 57",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR5834",
    "nome": "BDR 58",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR5934",
    "nome": "BDR 59",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR6034",
    "nome": "BDR 60",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR6134",
    "nome": "BDR 61",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR6234",
    "nome": "BDR 62",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR6334",
    "nome": "BDR 63",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR6434",
    "nome": "BDR 64",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR6534",
    "nome": "BDR 65",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR6634",
    "nome": "BDR 66",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR6734",
    "nome": "BDR 67",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR6834",
    "nome": "BDR 68",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR6934",
    "nome": "BDR 69",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR7034",
    "nome": "BDR 70",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR7134",
    "nome": "BDR 71",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR7234",
    "nome": "BDR 72",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR7334",
    "nome": "BDR 73",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR7434",
    "nome": "BDR 74",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR7534",
    "nome": "BDR 75",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR7634",
    "nome": "BDR 76",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR7734",
    "nome": "BDR 77",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR7834",
    "nome": "BDR 78",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR7934",
    "nome": "BDR 79",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR8034",
    "nome": "BDR 80",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR8134",
    "nome": "BDR 81",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR8234",
    "nome": "BDR 82",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR8334",
    "nome": "BDR 83",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR8434",
    "nome": "BDR 84",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR8534",
    "nome": "BDR 85",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR8634",
    "nome": "BDR 86",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR8734",
    "nome": "BDR 87",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR8834",
    "nome": "BDR 88",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR8934",
    "nome": "BDR 89",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR9034",
    "nome": "BDR 90",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR9134",
    "nome": "BDR 91",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR9234",
    "nome": "BDR 92",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR9334",
    "nome": "BDR 93",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR9434",
    "nome": "BDR 94",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR9534",
    "nome": "BDR 95",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR9634",
    "nome": "BDR 96",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR9734",
    "nome": "BDR 97",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR9834",
    "nome": "BDR 98",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR9934",
    "nome": "BDR 99",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR10034",
    "nome": "BDR 100",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR10134",
    "nome": "BDR 101",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR10234",
    "nome": "BDR 102",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR10334",
    "nome": "BDR 103",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR10434",
    "nome": "BDR 104",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR10534",
    "nome": "BDR 105",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR10634",
    "nome": "BDR 106",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR10734",
    "nome": "BDR 107",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR10834",
    "nome": "BDR 108",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR10934",
    "nome": "BDR 109",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR11034",
    "nome": "BDR 110",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR11134",
    "nome": "BDR 111",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR11234",
    "nome": "BDR 112",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR11334",
    "nome": "BDR 113",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR11434",
    "nome": "BDR 114",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR11534",
    "nome": "BDR 115",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR11634",
    "nome": "BDR 116",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR11734",
    "nome": "BDR 117",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR11834",
    "nome": "BDR 118",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR11934",
    "nome": "BDR 119",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR12034",
    "nome": "BDR 120",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR12134",
    "nome": "BDR 121",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR12234",
    "nome": "BDR 122",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR12334",
    "nome": "BDR 123",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR12434",
    "nome": "BDR 124",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR12534",
    "nome": "BDR 125",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR12634",
    "nome": "BDR 126",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR12734",
    "nome": "BDR 127",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR12834",
    "nome": "BDR 128",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR12934",
    "nome": "BDR 129",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR13034",
    "nome": "BDR 130",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR13134",
    "nome": "BDR 131",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR13234",
    "nome": "BDR 132",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR13334",
    "nome": "BDR 133",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR13434",
    "nome": "BDR 134",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR13534",
    "nome": "BDR 135",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR13634",
    "nome": "BDR 136",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR13734",
    "nome": "BDR 137",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR13834",
    "nome": "BDR 138",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR13934",
    "nome": "BDR 139",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR14034",
    "nome": "BDR 140",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR14134",
    "nome": "BDR 141",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR14234",
    "nome": "BDR 142",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR14334",
    "nome": "BDR 143",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR14434",
    "nome": "BDR 144",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR14534",
    "nome": "BDR 145",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR14634",
    "nome": "BDR 146",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR14734",
    "nome": "BDR 147",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR14834",
    "nome": "BDR 148",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR14934",
    "nome": "BDR 149",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR15034",
    "nome": "BDR 150",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR15134",
    "nome": "BDR 151",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR15234",
    "nome": "BDR 152",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR15334",
    "nome": "BDR 153",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR15434",
    "nome": "BDR 154",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR15534",
    "nome": "BDR 155",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR15634",
    "nome": "BDR 156",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR15734",
    "nome": "BDR 157",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR15834",
    "nome": "BDR 158",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR15934",
    "nome": "BDR 159",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR16034",
    "nome": "BDR 160",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR16134",
    "nome": "BDR 161",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR16234",
    "nome": "BDR 162",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR16334",
    "nome": "BDR 163",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR16434",
    "nome": "BDR 164",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR16534",
    "nome": "BDR 165",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR16634",
    "nome": "BDR 166",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR16734",
    "nome": "BDR 167",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR16834",
    "nome": "BDR 168",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR16934",
    "nome": "BDR 169",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR17034",
    "nome": "BDR 170",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR17134",
    "nome": "BDR 171",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR17234",
    "nome": "BDR 172",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR17334",
    "nome": "BDR 173",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR17434",
    "nome": "BDR 174",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR17534",
    "nome": "BDR 175",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR17634",
    "nome": "BDR 176",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR17734",
    "nome": "BDR 177",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR17834",
    "nome": "BDR 178",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR17934",
    "nome": "BDR 179",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR18034",
    "nome": "BDR 180",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR18134",
    "nome": "BDR 181",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR18234",
    "nome": "BDR 182",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR18334",
    "nome": "BDR 183",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR18434",
    "nome": "BDR 184",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR18534",
    "nome": "BDR 185",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR18634",
    "nome": "BDR 186",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR18734",
    "nome": "BDR 187",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR18834",
    "nome": "BDR 188",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR18934",
    "nome": "BDR 189",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR19034",
    "nome": "BDR 190",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR19134",
    "nome": "BDR 191",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR19234",
    "nome": "BDR 192",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR19334",
    "nome": "BDR 193",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR19434",
    "nome": "BDR 194",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR19534",
    "nome": "BDR 195",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR19634",
    "nome": "BDR 196",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR19734",
    "nome": "BDR 197",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR19834",
    "nome": "BDR 198",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR19934",
    "nome": "BDR 199",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR20034",
    "nome": "BDR 200",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR20134",
    "nome": "BDR 201",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR20234",
    "nome": "BDR 202",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR20334",
    "nome": "BDR 203",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR20434",
    "nome": "BDR 204",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR20534",
    "nome": "BDR 205",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR20634",
    "nome": "BDR 206",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR20734",
    "nome": "BDR 207",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR20834",
    "nome": "BDR 208",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR20934",
    "nome": "BDR 209",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR21034",
    "nome": "BDR 210",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR21134",
    "nome": "BDR 211",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR21234",
    "nome": "BDR 212",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR21334",
    "nome": "BDR 213",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR21434",
    "nome": "BDR 214",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR21534",
    "nome": "BDR 215",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR21634",
    "nome": "BDR 216",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR21734",
    "nome": "BDR 217",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR21834",
    "nome": "BDR 218",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR21934",
    "nome": "BDR 219",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR22034",
    "nome": "BDR 220",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR22134",
    "nome": "BDR 221",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR22234",
    "nome": "BDR 222",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR22334",
    "nome": "BDR 223",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR22434",
    "nome": "BDR 224",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR22534",
    "nome": "BDR 225",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR22634",
    "nome": "BDR 226",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR22734",
    "nome": "BDR 227",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR22834",
    "nome": "BDR 228",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR22934",
    "nome": "BDR 229",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR23034",
    "nome": "BDR 230",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR23134",
    "nome": "BDR 231",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR23234",
    "nome": "BDR 232",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR23334",
    "nome": "BDR 233",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR23434",
    "nome": "BDR 234",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR23534",
    "nome": "BDR 235",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR23634",
    "nome": "BDR 236",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR23734",
    "nome": "BDR 237",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR23834",
    "nome": "BDR 238",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR23934",
    "nome": "BDR 239",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR24034",
    "nome": "BDR 240",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR24134",
    "nome": "BDR 241",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR24234",
    "nome": "BDR 242",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR24334",
    "nome": "BDR 243",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR24434",
    "nome": "BDR 244",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR24534",
    "nome": "BDR 245",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR24634",
    "nome": "BDR 246",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR24734",
    "nome": "BDR 247",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR24834",
    "nome": "BDR 248",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR24934",
    "nome": "BDR 249",
    "tipo": "bdr"
  },
  {
    "simbolo": "BDR25034",
    "nome": "BDR 250",
    "tipo": "bdr"
  },
  {
    "simbolo": "ETF111",
    "nome": "ETF 1",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF211",
    "nome": "ETF 2",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF311",
    "nome": "ETF 3",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF411",
    "nome": "ETF 4",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF511",
    "nome": "ETF 5",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF611",
    "nome": "ETF 6",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF711",
    "nome": "ETF 7",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF811",
    "nome": "ETF 8",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF911",
    "nome": "ETF 9",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF1011",
    "nome": "ETF 10",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF1111",
    "nome": "ETF 11",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF1211",
    "nome": "ETF 12",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF1311",
    "nome": "ETF 13",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF1411",
    "nome": "ETF 14",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF1511",
    "nome": "ETF 15",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF1611",
    "nome": "ETF 16",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF1711",
    "nome": "ETF 17",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF1811",
    "nome": "ETF 18",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF1911",
    "nome": "ETF 19",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF2011",
    "nome": "ETF 20",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF2111",
    "nome": "ETF 21",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF2211",
    "nome": "ETF 22",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF2311",
    "nome": "ETF 23",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF2411",
    "nome": "ETF 24",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF2511",
    "nome": "ETF 25",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF2611",
    "nome": "ETF 26",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF2711",
    "nome": "ETF 27",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF2811",
    "nome": "ETF 28",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF2911",
    "nome": "ETF 29",
    "tipo": "etf"
  },
  {
    "simbolo": "ETF3011",
    "nome": "ETF 30",
    "tipo": "etf"
  },
  {
    "simbolo": "BTC-USD",
    "nome": "Bitcoin",
    "tipo": "cripto"
  },
  {
    "simbolo": "ETH-USD",
    "nome": "Ethereum",
    "tipo": "cripto"
  },
  {
    "simbolo": "XRP-USD",
    "nome": "XRP",
    "tipo": "cripto"
  },
  {
    "simbolo": "SOL-USD",
    "nome": "Solana",
    "tipo": "cripto"
  },
  {
    "simbolo": "USDBRL=X",
    "nome": "D\u00f3lar Comercial",
    "tipo": "moeda"
  }
];

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function atualizaAtivos() {
  for (let ativo of ativos) {
    const url = `https://brapi.dev/api/quote/${ativo.simbolo}?token=${BRAPI_TOKEN}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (!result || !result.results || !result.results[0]) {
        console.error(`âŒ Erro na resposta para ${ativo.simbolo}:`, result);
        continue;
      }

      const dados = result.results[0];
      console.log(`ðŸ”Ž Dados recebidos para ${ativo.simbolo}:`, dados);

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
        console.error(`âŒ Erro ao atualizar ${ativo.simbolo}:`, error);
      } else {
        console.log(`âœ… ${ativo.simbolo} atualizado com sucesso!`);
      }

      await delay(1000);
    } catch (e) {
      console.error(`âŒ Erro na requisiÃ§Ã£o para ${ativo.simbolo}:`, e);
    }
  }
}

atualizaAtivos();