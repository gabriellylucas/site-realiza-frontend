import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export type TipoEquipamento = 'ABT' | 'ACF' | 'ABTS' | 'AT' | 'KIT';

export interface Equipamento {
  tipo: TipoEquipamento;
  litragem?: number; 
  quantidade: number;
  observacao?: string;
}

export const VALOR_POR_KG = 3960;
export const DOSAGEM_PADRAO_G_L = 0.5;