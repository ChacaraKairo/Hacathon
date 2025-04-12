import { makeTypedQueryFactory as $mkFactory } from "../runtime/library"
export const notas = /*#__PURE__*/ $mkFactory("SELECT nota from avaliacao_aula WHERE id_cronograma = ?;")
