import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Assets
export const createAsset = async (assetData) => {
  const response = await api.post('/assets/', assetData);
  return response.data;
};

export const getAssets = async () => {
  const response = await api.get('/assets/');
  return response.data;
};

export const getAsset = async (id) => {
  const response = await api.get(`/assets/${id}`);
  return response.data;
};

export const deleteAsset = async (id) => {
  await api.delete(`/assets/${id}`);
};

// Hazards
export const assessHazards = async (assetId, scenario = 'SSP2-4.5', projectionYear = 2050) => {
  const response = await api.post('/hazards/assess', {
    asset_id: assetId,
    scenario,
    projection_year: projectionYear,
  });
  return response.data;
};

export const getScenarios = async () => {
  const response = await api.get('/hazards/scenarios');
  return response.data;
};

export const getHazardTypes = async () => {
  const response = await api.get('/hazards/types');
  return response.data;
};

// Financials
export const calculateFinancialImpact = async (assetId, scenario = 'SSP2-4.5', projectionYear = 2050) => {
  const response = await api.post('/financials/calculate', {
    asset_id: assetId,
    scenario,
    projection_year: projectionYear,
  });
  return response.data;
};

// Reports
export const generateReport = async (reportData) => {
  const response = await api.post('/reports/generate', reportData);
  return response.data;
};

export const getReportStatus = async (reportId) => {
  const response = await api.get(`/reports/${reportId}`);
  return response.data;
};

export default api;
