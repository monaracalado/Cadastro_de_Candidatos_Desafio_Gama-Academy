const mongoose = require("mongoose");
const usuario = mongoose.model("usuarios");
require("../models/Cadastro");

class CandidateConcroller {
  async registro(req, res) {
    const {
      nome,
      cpf,
      nascimento,
      sexo,
      telefone,
      telefone2,
      email,
      escolaridade,
      profissao,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      estado_civil,
      habilitacao,
      habilitacao_categoria,
      veiculo,
      veiculo_tipo,
      encaminhamento,
      encaminhamento_instituicao,
      textinput,
    } = req.body;

    const novoCadastro = {
      nome,
      cpf,
      nascimento,
      sexo,
      telefone,
      telefone2,
      email,
      escolaridade,
      profissao,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado,
      estado_civil,
      habilitacao,
      habilitacao_categoria,
      veiculo,
      veiculo_tipo,
      encaminhamento,
      encaminhamento_instituicao,
      textinput,
    };

    await usuario.create(novoCadastro, (erro) => {
      if (erro) {
        console.log(erro);
        return res.status(400).send("CPF ou Email já estão cadastrado");
      }
      return res.status(200).redirect("/concluido");
    });
  }
}
module.exports = new CandidateConcroller();
