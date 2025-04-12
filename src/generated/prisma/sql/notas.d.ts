import * as $runtime from "../runtime/library"

/**
 * @param _0
 */
export const notas: (_0: number | bigint) => $runtime.TypedSql<notas.Parameters, notas.Result>

export namespace notas {
  export type Parameters = [_0: number | bigint]
  export type Result = {
    nota: number
  }
}
