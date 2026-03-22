import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  response.status(200).json({ updated_at: updatedAt });

  // Versão do PostgreSQL
  // Conexões máximas
  // Conexões ativas
}

export default status;
