import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result.rews);
  response.status(200).json({ chave: "são acima da media" });
}

export default status;
