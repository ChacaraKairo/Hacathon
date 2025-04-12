"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/library")
exports.notas = /*#__PURE__*/ $mkFactory("SELECT nota from avaliacao_aula WHERE id_cronograma = ?;")
