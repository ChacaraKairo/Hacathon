import { makeTypedQueryFactory as $mkFactory } from "../runtime/edge.js"
export const notas = /*#__PURE__*/ $mkFactory("SELECT nota from avaliacao_aula WHERE id_cronograma = ?;")
