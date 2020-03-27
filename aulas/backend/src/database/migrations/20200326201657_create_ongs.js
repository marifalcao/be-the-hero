//Método UP - criação da tabela
exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("cidade").notNullable();
    table.string("uf", 2).notNullable();
  });
};

//Deletar tabela
exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
