import axios from "axios";

export async function InitQ() {
  const response = axios.get(`http://localhost:3001/questionaire`);
  return (await response).data ?? null;
}

export async function InitA() {
  const response = axios.get(`http://localhost:3001/answer`);
  return (await response).data ?? null;
}
