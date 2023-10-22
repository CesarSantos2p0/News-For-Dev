function status(request, response) {
  response.status(200).json({ chave: "são acima da media" });
}

export default status;
