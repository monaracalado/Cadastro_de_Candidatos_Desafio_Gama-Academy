const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CadastroSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },

    cpf: {
      type: Number,
      required: true,
      unique: true,
    },

    nascimento: {
      type: Date,
      required: true,
    },

    sexo: {
      type: String,
      required: true,
    },

    telefone: {
      type: String,
      required: true,
    },

    telefone2: {
      type: String,
      required: false,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    escolaridade: {
      type: String,
      required: true,
    },

    profissao: {
      type: String,
      required: true,
    },

    cep: {
      type: Number,
      required: true,
    },

    rua: {
      type: String,
      required: true,
    },

    numero: {
      type: Number,
      required: true,
    },

    bairro: {
      type: String,
      required: true,
    },

    cidade: {
      type: String,
      required: true,
    },

    estado: {
      type: String,
      required: true,
    },

    estado_civil: {
      type: String,
      required: false,
    },

    habilitacao: {
      type: String,
      required: false,
    },

    habilitacao_categoria: {
      type: String,
      required: false,
    },

    veiculo: {
      type: String,
      required: false,
    },

    veiculo_tipo: {
      type: String,
      required: false,
    },

    encaminhamento: {
      type: String,
      required: false,
    },

    encaminhamento_instituicao: {
      type: String,
      required: false,
    },

    textinput: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.export = mongoose.model("usuarios", CadastroSchema);
