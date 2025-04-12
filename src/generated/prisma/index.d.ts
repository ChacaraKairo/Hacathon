
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model avaliacao_aula
 * 
 */
export type avaliacao_aula = $Result.DefaultSelection<Prisma.$avaliacao_aulaPayload>
/**
 * Model cronograma
 * 
 */
export type cronograma = $Result.DefaultSelection<Prisma.$cronogramaPayload>
/**
 * Model cursos
 * 
 */
export type cursos = $Result.DefaultSelection<Prisma.$cursosPayload>
/**
 * Model disciplina_curso
 * 
 */
export type disciplina_curso = $Result.DefaultSelection<Prisma.$disciplina_cursoPayload>
/**
 * Model disciplinas
 * 
 */
export type disciplinas = $Result.DefaultSelection<Prisma.$disciplinasPayload>
/**
 * Model exercicios
 * 
 */
export type exercicios = $Result.DefaultSelection<Prisma.$exerciciosPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const usuarios_tipo: {
  aluno: 'aluno',
  professor: 'professor'
};

export type usuarios_tipo = (typeof usuarios_tipo)[keyof typeof usuarios_tipo]

}

export type usuarios_tipo = $Enums.usuarios_tipo

export const usuarios_tipo: typeof $Enums.usuarios_tipo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Avaliacao_aulas
 * const avaliacao_aulas = await prisma.avaliacao_aula.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Avaliacao_aulas
   * const avaliacao_aulas = await prisma.avaliacao_aula.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.avaliacao_aula`: Exposes CRUD operations for the **avaliacao_aula** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacao_aulas
    * const avaliacao_aulas = await prisma.avaliacao_aula.findMany()
    * ```
    */
  get avaliacao_aula(): Prisma.avaliacao_aulaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cronograma`: Exposes CRUD operations for the **cronograma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cronogramas
    * const cronogramas = await prisma.cronograma.findMany()
    * ```
    */
  get cronograma(): Prisma.cronogramaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cursos`: Exposes CRUD operations for the **cursos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.cursos.findMany()
    * ```
    */
  get cursos(): Prisma.cursosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplina_curso`: Exposes CRUD operations for the **disciplina_curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplina_cursos
    * const disciplina_cursos = await prisma.disciplina_curso.findMany()
    * ```
    */
  get disciplina_curso(): Prisma.disciplina_cursoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disciplinas`: Exposes CRUD operations for the **disciplinas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplinas.findMany()
    * ```
    */
  get disciplinas(): Prisma.disciplinasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercicios`: Exposes CRUD operations for the **exercicios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercicios
    * const exercicios = await prisma.exercicios.findMany()
    * ```
    */
  get exercicios(): Prisma.exerciciosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    avaliacao_aula: 'avaliacao_aula',
    cronograma: 'cronograma',
    cursos: 'cursos',
    disciplina_curso: 'disciplina_curso',
    disciplinas: 'disciplinas',
    exercicios: 'exercicios',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "avaliacao_aula" | "cronograma" | "cursos" | "disciplina_curso" | "disciplinas" | "exercicios" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      avaliacao_aula: {
        payload: Prisma.$avaliacao_aulaPayload<ExtArgs>
        fields: Prisma.avaliacao_aulaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.avaliacao_aulaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacao_aulaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.avaliacao_aulaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacao_aulaPayload>
          }
          findFirst: {
            args: Prisma.avaliacao_aulaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacao_aulaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.avaliacao_aulaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacao_aulaPayload>
          }
          findMany: {
            args: Prisma.avaliacao_aulaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacao_aulaPayload>[]
          }
          create: {
            args: Prisma.avaliacao_aulaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacao_aulaPayload>
          }
          createMany: {
            args: Prisma.avaliacao_aulaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.avaliacao_aulaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacao_aulaPayload>
          }
          update: {
            args: Prisma.avaliacao_aulaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacao_aulaPayload>
          }
          deleteMany: {
            args: Prisma.avaliacao_aulaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.avaliacao_aulaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.avaliacao_aulaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$avaliacao_aulaPayload>
          }
          aggregate: {
            args: Prisma.Avaliacao_aulaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao_aula>
          }
          groupBy: {
            args: Prisma.avaliacao_aulaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Avaliacao_aulaGroupByOutputType>[]
          }
          count: {
            args: Prisma.avaliacao_aulaCountArgs<ExtArgs>
            result: $Utils.Optional<Avaliacao_aulaCountAggregateOutputType> | number
          }
        }
      }
      cronograma: {
        payload: Prisma.$cronogramaPayload<ExtArgs>
        fields: Prisma.cronogramaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cronogramaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cronogramaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cronogramaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cronogramaPayload>
          }
          findFirst: {
            args: Prisma.cronogramaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cronogramaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cronogramaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cronogramaPayload>
          }
          findMany: {
            args: Prisma.cronogramaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cronogramaPayload>[]
          }
          create: {
            args: Prisma.cronogramaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cronogramaPayload>
          }
          createMany: {
            args: Prisma.cronogramaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cronogramaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cronogramaPayload>
          }
          update: {
            args: Prisma.cronogramaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cronogramaPayload>
          }
          deleteMany: {
            args: Prisma.cronogramaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cronogramaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cronogramaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cronogramaPayload>
          }
          aggregate: {
            args: Prisma.CronogramaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCronograma>
          }
          groupBy: {
            args: Prisma.cronogramaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CronogramaGroupByOutputType>[]
          }
          count: {
            args: Prisma.cronogramaCountArgs<ExtArgs>
            result: $Utils.Optional<CronogramaCountAggregateOutputType> | number
          }
        }
      }
      cursos: {
        payload: Prisma.$cursosPayload<ExtArgs>
        fields: Prisma.cursosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cursosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cursosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          findFirst: {
            args: Prisma.cursosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cursosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          findMany: {
            args: Prisma.cursosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>[]
          }
          create: {
            args: Prisma.cursosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          createMany: {
            args: Prisma.cursosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cursosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          update: {
            args: Prisma.cursosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          deleteMany: {
            args: Prisma.cursosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cursosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cursosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cursosPayload>
          }
          aggregate: {
            args: Prisma.CursosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCursos>
          }
          groupBy: {
            args: Prisma.cursosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursosGroupByOutputType>[]
          }
          count: {
            args: Prisma.cursosCountArgs<ExtArgs>
            result: $Utils.Optional<CursosCountAggregateOutputType> | number
          }
        }
      }
      disciplina_curso: {
        payload: Prisma.$disciplina_cursoPayload<ExtArgs>
        fields: Prisma.disciplina_cursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.disciplina_cursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplina_cursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.disciplina_cursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplina_cursoPayload>
          }
          findFirst: {
            args: Prisma.disciplina_cursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplina_cursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.disciplina_cursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplina_cursoPayload>
          }
          findMany: {
            args: Prisma.disciplina_cursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplina_cursoPayload>[]
          }
          create: {
            args: Prisma.disciplina_cursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplina_cursoPayload>
          }
          createMany: {
            args: Prisma.disciplina_cursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.disciplina_cursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplina_cursoPayload>
          }
          update: {
            args: Prisma.disciplina_cursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplina_cursoPayload>
          }
          deleteMany: {
            args: Prisma.disciplina_cursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.disciplina_cursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.disciplina_cursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplina_cursoPayload>
          }
          aggregate: {
            args: Prisma.Disciplina_cursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplina_curso>
          }
          groupBy: {
            args: Prisma.disciplina_cursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Disciplina_cursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.disciplina_cursoCountArgs<ExtArgs>
            result: $Utils.Optional<Disciplina_cursoCountAggregateOutputType> | number
          }
        }
      }
      disciplinas: {
        payload: Prisma.$disciplinasPayload<ExtArgs>
        fields: Prisma.disciplinasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.disciplinasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.disciplinasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          findFirst: {
            args: Prisma.disciplinasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.disciplinasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          findMany: {
            args: Prisma.disciplinasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>[]
          }
          create: {
            args: Prisma.disciplinasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          createMany: {
            args: Prisma.disciplinasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.disciplinasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          update: {
            args: Prisma.disciplinasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          deleteMany: {
            args: Prisma.disciplinasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.disciplinasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.disciplinasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$disciplinasPayload>
          }
          aggregate: {
            args: Prisma.DisciplinasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisciplinas>
          }
          groupBy: {
            args: Prisma.disciplinasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisciplinasGroupByOutputType>[]
          }
          count: {
            args: Prisma.disciplinasCountArgs<ExtArgs>
            result: $Utils.Optional<DisciplinasCountAggregateOutputType> | number
          }
        }
      }
      exercicios: {
        payload: Prisma.$exerciciosPayload<ExtArgs>
        fields: Prisma.exerciciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.exerciciosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.exerciciosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          findFirst: {
            args: Prisma.exerciciosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.exerciciosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          findMany: {
            args: Prisma.exerciciosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>[]
          }
          create: {
            args: Prisma.exerciciosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          createMany: {
            args: Prisma.exerciciosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.exerciciosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          update: {
            args: Prisma.exerciciosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          deleteMany: {
            args: Prisma.exerciciosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.exerciciosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.exerciciosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$exerciciosPayload>
          }
          aggregate: {
            args: Prisma.ExerciciosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercicios>
          }
          groupBy: {
            args: Prisma.exerciciosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.exerciciosCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciciosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    avaliacao_aula?: avaliacao_aulaOmit
    cronograma?: cronogramaOmit
    cursos?: cursosOmit
    disciplina_curso?: disciplina_cursoOmit
    disciplinas?: disciplinasOmit
    exercicios?: exerciciosOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CronogramaCountOutputType
   */

  export type CronogramaCountOutputType = {
    avaliacao_aula: number
  }

  export type CronogramaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao_aula?: boolean | CronogramaCountOutputTypeCountAvaliacao_aulaArgs
  }

  // Custom InputTypes
  /**
   * CronogramaCountOutputType without action
   */
  export type CronogramaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CronogramaCountOutputType
     */
    select?: CronogramaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CronogramaCountOutputType without action
   */
  export type CronogramaCountOutputTypeCountAvaliacao_aulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacao_aulaWhereInput
  }


  /**
   * Count Type CursosCountOutputType
   */

  export type CursosCountOutputType = {
    disciplina_curso: number
  }

  export type CursosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina_curso?: boolean | CursosCountOutputTypeCountDisciplina_cursoArgs
  }

  // Custom InputTypes
  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursosCountOutputType
     */
    select?: CursosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeCountDisciplina_cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplina_cursoWhereInput
  }


  /**
   * Count Type DisciplinasCountOutputType
   */

  export type DisciplinasCountOutputType = {
    cronograma: number
    disciplina_curso: number
    exercicios: number
  }

  export type DisciplinasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cronograma?: boolean | DisciplinasCountOutputTypeCountCronogramaArgs
    disciplina_curso?: boolean | DisciplinasCountOutputTypeCountDisciplina_cursoArgs
    exercicios?: boolean | DisciplinasCountOutputTypeCountExerciciosArgs
  }

  // Custom InputTypes
  /**
   * DisciplinasCountOutputType without action
   */
  export type DisciplinasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisciplinasCountOutputType
     */
    select?: DisciplinasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisciplinasCountOutputType without action
   */
  export type DisciplinasCountOutputTypeCountCronogramaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cronogramaWhereInput
  }

  /**
   * DisciplinasCountOutputType without action
   */
  export type DisciplinasCountOutputTypeCountDisciplina_cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplina_cursoWhereInput
  }

  /**
   * DisciplinasCountOutputType without action
   */
  export type DisciplinasCountOutputTypeCountExerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exerciciosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model avaliacao_aula
   */

  export type AggregateAvaliacao_aula = {
    _count: Avaliacao_aulaCountAggregateOutputType | null
    _avg: Avaliacao_aulaAvgAggregateOutputType | null
    _sum: Avaliacao_aulaSumAggregateOutputType | null
    _min: Avaliacao_aulaMinAggregateOutputType | null
    _max: Avaliacao_aulaMaxAggregateOutputType | null
  }

  export type Avaliacao_aulaAvgAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    id_cronograma: number | null
  }

  export type Avaliacao_aulaSumAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    id_cronograma: number | null
  }

  export type Avaliacao_aulaMinAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    id_cronograma: number | null
  }

  export type Avaliacao_aulaMaxAggregateOutputType = {
    id: number | null
    id_usuario: number | null
    id_cronograma: number | null
  }

  export type Avaliacao_aulaCountAggregateOutputType = {
    id: number
    id_usuario: number
    id_cronograma: number
    _all: number
  }


  export type Avaliacao_aulaAvgAggregateInputType = {
    id?: true
    id_usuario?: true
    id_cronograma?: true
  }

  export type Avaliacao_aulaSumAggregateInputType = {
    id?: true
    id_usuario?: true
    id_cronograma?: true
  }

  export type Avaliacao_aulaMinAggregateInputType = {
    id?: true
    id_usuario?: true
    id_cronograma?: true
  }

  export type Avaliacao_aulaMaxAggregateInputType = {
    id?: true
    id_usuario?: true
    id_cronograma?: true
  }

  export type Avaliacao_aulaCountAggregateInputType = {
    id?: true
    id_usuario?: true
    id_cronograma?: true
    _all?: true
  }

  export type Avaliacao_aulaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacao_aula to aggregate.
     */
    where?: avaliacao_aulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacao_aulas to fetch.
     */
    orderBy?: avaliacao_aulaOrderByWithRelationInput | avaliacao_aulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: avaliacao_aulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacao_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacao_aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned avaliacao_aulas
    **/
    _count?: true | Avaliacao_aulaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Avaliacao_aulaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Avaliacao_aulaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Avaliacao_aulaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Avaliacao_aulaMaxAggregateInputType
  }

  export type GetAvaliacao_aulaAggregateType<T extends Avaliacao_aulaAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao_aula]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao_aula[P]>
      : GetScalarType<T[P], AggregateAvaliacao_aula[P]>
  }




  export type avaliacao_aulaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: avaliacao_aulaWhereInput
    orderBy?: avaliacao_aulaOrderByWithAggregationInput | avaliacao_aulaOrderByWithAggregationInput[]
    by: Avaliacao_aulaScalarFieldEnum[] | Avaliacao_aulaScalarFieldEnum
    having?: avaliacao_aulaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Avaliacao_aulaCountAggregateInputType | true
    _avg?: Avaliacao_aulaAvgAggregateInputType
    _sum?: Avaliacao_aulaSumAggregateInputType
    _min?: Avaliacao_aulaMinAggregateInputType
    _max?: Avaliacao_aulaMaxAggregateInputType
  }

  export type Avaliacao_aulaGroupByOutputType = {
    id: number
    id_usuario: number
    id_cronograma: number
    _count: Avaliacao_aulaCountAggregateOutputType | null
    _avg: Avaliacao_aulaAvgAggregateOutputType | null
    _sum: Avaliacao_aulaSumAggregateOutputType | null
    _min: Avaliacao_aulaMinAggregateOutputType | null
    _max: Avaliacao_aulaMaxAggregateOutputType | null
  }

  type GetAvaliacao_aulaGroupByPayload<T extends avaliacao_aulaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Avaliacao_aulaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Avaliacao_aulaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Avaliacao_aulaGroupByOutputType[P]>
            : GetScalarType<T[P], Avaliacao_aulaGroupByOutputType[P]>
        }
      >
    >


  export type avaliacao_aulaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_usuario?: boolean
    id_cronograma?: boolean
    cronograma?: boolean | cronogramaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao_aula"]>



  export type avaliacao_aulaSelectScalar = {
    id?: boolean
    id_usuario?: boolean
    id_cronograma?: boolean
  }

  export type avaliacao_aulaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_usuario" | "id_cronograma", ExtArgs["result"]["avaliacao_aula"]>
  export type avaliacao_aulaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cronograma?: boolean | cronogramaDefaultArgs<ExtArgs>
  }

  export type $avaliacao_aulaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "avaliacao_aula"
    objects: {
      cronograma: Prisma.$cronogramaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_usuario: number
      id_cronograma: number
    }, ExtArgs["result"]["avaliacao_aula"]>
    composites: {}
  }

  type avaliacao_aulaGetPayload<S extends boolean | null | undefined | avaliacao_aulaDefaultArgs> = $Result.GetResult<Prisma.$avaliacao_aulaPayload, S>

  type avaliacao_aulaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<avaliacao_aulaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Avaliacao_aulaCountAggregateInputType | true
    }

  export interface avaliacao_aulaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['avaliacao_aula'], meta: { name: 'avaliacao_aula' } }
    /**
     * Find zero or one Avaliacao_aula that matches the filter.
     * @param {avaliacao_aulaFindUniqueArgs} args - Arguments to find a Avaliacao_aula
     * @example
     * // Get one Avaliacao_aula
     * const avaliacao_aula = await prisma.avaliacao_aula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends avaliacao_aulaFindUniqueArgs>(args: SelectSubset<T, avaliacao_aulaFindUniqueArgs<ExtArgs>>): Prisma__avaliacao_aulaClient<$Result.GetResult<Prisma.$avaliacao_aulaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao_aula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {avaliacao_aulaFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao_aula
     * @example
     * // Get one Avaliacao_aula
     * const avaliacao_aula = await prisma.avaliacao_aula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends avaliacao_aulaFindUniqueOrThrowArgs>(args: SelectSubset<T, avaliacao_aulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__avaliacao_aulaClient<$Result.GetResult<Prisma.$avaliacao_aulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao_aula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacao_aulaFindFirstArgs} args - Arguments to find a Avaliacao_aula
     * @example
     * // Get one Avaliacao_aula
     * const avaliacao_aula = await prisma.avaliacao_aula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends avaliacao_aulaFindFirstArgs>(args?: SelectSubset<T, avaliacao_aulaFindFirstArgs<ExtArgs>>): Prisma__avaliacao_aulaClient<$Result.GetResult<Prisma.$avaliacao_aulaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao_aula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacao_aulaFindFirstOrThrowArgs} args - Arguments to find a Avaliacao_aula
     * @example
     * // Get one Avaliacao_aula
     * const avaliacao_aula = await prisma.avaliacao_aula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends avaliacao_aulaFindFirstOrThrowArgs>(args?: SelectSubset<T, avaliacao_aulaFindFirstOrThrowArgs<ExtArgs>>): Prisma__avaliacao_aulaClient<$Result.GetResult<Prisma.$avaliacao_aulaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacao_aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacao_aulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacao_aulas
     * const avaliacao_aulas = await prisma.avaliacao_aula.findMany()
     * 
     * // Get first 10 Avaliacao_aulas
     * const avaliacao_aulas = await prisma.avaliacao_aula.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacao_aulaWithIdOnly = await prisma.avaliacao_aula.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends avaliacao_aulaFindManyArgs>(args?: SelectSubset<T, avaliacao_aulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacao_aulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao_aula.
     * @param {avaliacao_aulaCreateArgs} args - Arguments to create a Avaliacao_aula.
     * @example
     * // Create one Avaliacao_aula
     * const Avaliacao_aula = await prisma.avaliacao_aula.create({
     *   data: {
     *     // ... data to create a Avaliacao_aula
     *   }
     * })
     * 
     */
    create<T extends avaliacao_aulaCreateArgs>(args: SelectSubset<T, avaliacao_aulaCreateArgs<ExtArgs>>): Prisma__avaliacao_aulaClient<$Result.GetResult<Prisma.$avaliacao_aulaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacao_aulas.
     * @param {avaliacao_aulaCreateManyArgs} args - Arguments to create many Avaliacao_aulas.
     * @example
     * // Create many Avaliacao_aulas
     * const avaliacao_aula = await prisma.avaliacao_aula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends avaliacao_aulaCreateManyArgs>(args?: SelectSubset<T, avaliacao_aulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avaliacao_aula.
     * @param {avaliacao_aulaDeleteArgs} args - Arguments to delete one Avaliacao_aula.
     * @example
     * // Delete one Avaliacao_aula
     * const Avaliacao_aula = await prisma.avaliacao_aula.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao_aula
     *   }
     * })
     * 
     */
    delete<T extends avaliacao_aulaDeleteArgs>(args: SelectSubset<T, avaliacao_aulaDeleteArgs<ExtArgs>>): Prisma__avaliacao_aulaClient<$Result.GetResult<Prisma.$avaliacao_aulaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao_aula.
     * @param {avaliacao_aulaUpdateArgs} args - Arguments to update one Avaliacao_aula.
     * @example
     * // Update one Avaliacao_aula
     * const avaliacao_aula = await prisma.avaliacao_aula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends avaliacao_aulaUpdateArgs>(args: SelectSubset<T, avaliacao_aulaUpdateArgs<ExtArgs>>): Prisma__avaliacao_aulaClient<$Result.GetResult<Prisma.$avaliacao_aulaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacao_aulas.
     * @param {avaliacao_aulaDeleteManyArgs} args - Arguments to filter Avaliacao_aulas to delete.
     * @example
     * // Delete a few Avaliacao_aulas
     * const { count } = await prisma.avaliacao_aula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends avaliacao_aulaDeleteManyArgs>(args?: SelectSubset<T, avaliacao_aulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacao_aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacao_aulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacao_aulas
     * const avaliacao_aula = await prisma.avaliacao_aula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends avaliacao_aulaUpdateManyArgs>(args: SelectSubset<T, avaliacao_aulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avaliacao_aula.
     * @param {avaliacao_aulaUpsertArgs} args - Arguments to update or create a Avaliacao_aula.
     * @example
     * // Update or create a Avaliacao_aula
     * const avaliacao_aula = await prisma.avaliacao_aula.upsert({
     *   create: {
     *     // ... data to create a Avaliacao_aula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao_aula we want to update
     *   }
     * })
     */
    upsert<T extends avaliacao_aulaUpsertArgs>(args: SelectSubset<T, avaliacao_aulaUpsertArgs<ExtArgs>>): Prisma__avaliacao_aulaClient<$Result.GetResult<Prisma.$avaliacao_aulaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacao_aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacao_aulaCountArgs} args - Arguments to filter Avaliacao_aulas to count.
     * @example
     * // Count the number of Avaliacao_aulas
     * const count = await prisma.avaliacao_aula.count({
     *   where: {
     *     // ... the filter for the Avaliacao_aulas we want to count
     *   }
     * })
    **/
    count<T extends avaliacao_aulaCountArgs>(
      args?: Subset<T, avaliacao_aulaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Avaliacao_aulaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao_aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Avaliacao_aulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Avaliacao_aulaAggregateArgs>(args: Subset<T, Avaliacao_aulaAggregateArgs>): Prisma.PrismaPromise<GetAvaliacao_aulaAggregateType<T>>

    /**
     * Group by Avaliacao_aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {avaliacao_aulaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends avaliacao_aulaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: avaliacao_aulaGroupByArgs['orderBy'] }
        : { orderBy?: avaliacao_aulaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, avaliacao_aulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacao_aulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the avaliacao_aula model
   */
  readonly fields: avaliacao_aulaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for avaliacao_aula.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__avaliacao_aulaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cronograma<T extends cronogramaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cronogramaDefaultArgs<ExtArgs>>): Prisma__cronogramaClient<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the avaliacao_aula model
   */
  interface avaliacao_aulaFieldRefs {
    readonly id: FieldRef<"avaliacao_aula", 'Int'>
    readonly id_usuario: FieldRef<"avaliacao_aula", 'Int'>
    readonly id_cronograma: FieldRef<"avaliacao_aula", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * avaliacao_aula findUnique
   */
  export type avaliacao_aulaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao_aula to fetch.
     */
    where: avaliacao_aulaWhereUniqueInput
  }

  /**
   * avaliacao_aula findUniqueOrThrow
   */
  export type avaliacao_aulaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao_aula to fetch.
     */
    where: avaliacao_aulaWhereUniqueInput
  }

  /**
   * avaliacao_aula findFirst
   */
  export type avaliacao_aulaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao_aula to fetch.
     */
    where?: avaliacao_aulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacao_aulas to fetch.
     */
    orderBy?: avaliacao_aulaOrderByWithRelationInput | avaliacao_aulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacao_aulas.
     */
    cursor?: avaliacao_aulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacao_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacao_aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacao_aulas.
     */
    distinct?: Avaliacao_aulaScalarFieldEnum | Avaliacao_aulaScalarFieldEnum[]
  }

  /**
   * avaliacao_aula findFirstOrThrow
   */
  export type avaliacao_aulaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao_aula to fetch.
     */
    where?: avaliacao_aulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacao_aulas to fetch.
     */
    orderBy?: avaliacao_aulaOrderByWithRelationInput | avaliacao_aulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for avaliacao_aulas.
     */
    cursor?: avaliacao_aulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacao_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacao_aulas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of avaliacao_aulas.
     */
    distinct?: Avaliacao_aulaScalarFieldEnum | Avaliacao_aulaScalarFieldEnum[]
  }

  /**
   * avaliacao_aula findMany
   */
  export type avaliacao_aulaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
    /**
     * Filter, which avaliacao_aulas to fetch.
     */
    where?: avaliacao_aulaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of avaliacao_aulas to fetch.
     */
    orderBy?: avaliacao_aulaOrderByWithRelationInput | avaliacao_aulaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing avaliacao_aulas.
     */
    cursor?: avaliacao_aulaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` avaliacao_aulas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` avaliacao_aulas.
     */
    skip?: number
    distinct?: Avaliacao_aulaScalarFieldEnum | Avaliacao_aulaScalarFieldEnum[]
  }

  /**
   * avaliacao_aula create
   */
  export type avaliacao_aulaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
    /**
     * The data needed to create a avaliacao_aula.
     */
    data: XOR<avaliacao_aulaCreateInput, avaliacao_aulaUncheckedCreateInput>
  }

  /**
   * avaliacao_aula createMany
   */
  export type avaliacao_aulaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many avaliacao_aulas.
     */
    data: avaliacao_aulaCreateManyInput | avaliacao_aulaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * avaliacao_aula update
   */
  export type avaliacao_aulaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
    /**
     * The data needed to update a avaliacao_aula.
     */
    data: XOR<avaliacao_aulaUpdateInput, avaliacao_aulaUncheckedUpdateInput>
    /**
     * Choose, which avaliacao_aula to update.
     */
    where: avaliacao_aulaWhereUniqueInput
  }

  /**
   * avaliacao_aula updateMany
   */
  export type avaliacao_aulaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update avaliacao_aulas.
     */
    data: XOR<avaliacao_aulaUpdateManyMutationInput, avaliacao_aulaUncheckedUpdateManyInput>
    /**
     * Filter which avaliacao_aulas to update
     */
    where?: avaliacao_aulaWhereInput
    /**
     * Limit how many avaliacao_aulas to update.
     */
    limit?: number
  }

  /**
   * avaliacao_aula upsert
   */
  export type avaliacao_aulaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
    /**
     * The filter to search for the avaliacao_aula to update in case it exists.
     */
    where: avaliacao_aulaWhereUniqueInput
    /**
     * In case the avaliacao_aula found by the `where` argument doesn't exist, create a new avaliacao_aula with this data.
     */
    create: XOR<avaliacao_aulaCreateInput, avaliacao_aulaUncheckedCreateInput>
    /**
     * In case the avaliacao_aula was found with the provided `where` argument, update it with this data.
     */
    update: XOR<avaliacao_aulaUpdateInput, avaliacao_aulaUncheckedUpdateInput>
  }

  /**
   * avaliacao_aula delete
   */
  export type avaliacao_aulaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
    /**
     * Filter which avaliacao_aula to delete.
     */
    where: avaliacao_aulaWhereUniqueInput
  }

  /**
   * avaliacao_aula deleteMany
   */
  export type avaliacao_aulaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which avaliacao_aulas to delete
     */
    where?: avaliacao_aulaWhereInput
    /**
     * Limit how many avaliacao_aulas to delete.
     */
    limit?: number
  }

  /**
   * avaliacao_aula without action
   */
  export type avaliacao_aulaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
  }


  /**
   * Model cronograma
   */

  export type AggregateCronograma = {
    _count: CronogramaCountAggregateOutputType | null
    _avg: CronogramaAvgAggregateOutputType | null
    _sum: CronogramaSumAggregateOutputType | null
    _min: CronogramaMinAggregateOutputType | null
    _max: CronogramaMaxAggregateOutputType | null
  }

  export type CronogramaAvgAggregateOutputType = {
    id: number | null
    disciplina_id: number | null
  }

  export type CronogramaSumAggregateOutputType = {
    id: number | null
    disciplina_id: number | null
  }

  export type CronogramaMinAggregateOutputType = {
    id: number | null
    disciplina_id: number | null
    nome_aula: string | null
    data: Date | null
  }

  export type CronogramaMaxAggregateOutputType = {
    id: number | null
    disciplina_id: number | null
    nome_aula: string | null
    data: Date | null
  }

  export type CronogramaCountAggregateOutputType = {
    id: number
    disciplina_id: number
    nome_aula: number
    data: number
    _all: number
  }


  export type CronogramaAvgAggregateInputType = {
    id?: true
    disciplina_id?: true
  }

  export type CronogramaSumAggregateInputType = {
    id?: true
    disciplina_id?: true
  }

  export type CronogramaMinAggregateInputType = {
    id?: true
    disciplina_id?: true
    nome_aula?: true
    data?: true
  }

  export type CronogramaMaxAggregateInputType = {
    id?: true
    disciplina_id?: true
    nome_aula?: true
    data?: true
  }

  export type CronogramaCountAggregateInputType = {
    id?: true
    disciplina_id?: true
    nome_aula?: true
    data?: true
    _all?: true
  }

  export type CronogramaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cronograma to aggregate.
     */
    where?: cronogramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cronogramas to fetch.
     */
    orderBy?: cronogramaOrderByWithRelationInput | cronogramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cronogramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cronogramas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cronogramas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cronogramas
    **/
    _count?: true | CronogramaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CronogramaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CronogramaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CronogramaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CronogramaMaxAggregateInputType
  }

  export type GetCronogramaAggregateType<T extends CronogramaAggregateArgs> = {
        [P in keyof T & keyof AggregateCronograma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCronograma[P]>
      : GetScalarType<T[P], AggregateCronograma[P]>
  }




  export type cronogramaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cronogramaWhereInput
    orderBy?: cronogramaOrderByWithAggregationInput | cronogramaOrderByWithAggregationInput[]
    by: CronogramaScalarFieldEnum[] | CronogramaScalarFieldEnum
    having?: cronogramaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CronogramaCountAggregateInputType | true
    _avg?: CronogramaAvgAggregateInputType
    _sum?: CronogramaSumAggregateInputType
    _min?: CronogramaMinAggregateInputType
    _max?: CronogramaMaxAggregateInputType
  }

  export type CronogramaGroupByOutputType = {
    id: number
    disciplina_id: number
    nome_aula: string
    data: Date
    _count: CronogramaCountAggregateOutputType | null
    _avg: CronogramaAvgAggregateOutputType | null
    _sum: CronogramaSumAggregateOutputType | null
    _min: CronogramaMinAggregateOutputType | null
    _max: CronogramaMaxAggregateOutputType | null
  }

  type GetCronogramaGroupByPayload<T extends cronogramaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CronogramaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CronogramaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CronogramaGroupByOutputType[P]>
            : GetScalarType<T[P], CronogramaGroupByOutputType[P]>
        }
      >
    >


  export type cronogramaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    disciplina_id?: boolean
    nome_aula?: boolean
    data?: boolean
    avaliacao_aula?: boolean | cronograma$avaliacao_aulaArgs<ExtArgs>
    disciplinas?: boolean | disciplinasDefaultArgs<ExtArgs>
    _count?: boolean | CronogramaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cronograma"]>



  export type cronogramaSelectScalar = {
    id?: boolean
    disciplina_id?: boolean
    nome_aula?: boolean
    data?: boolean
  }

  export type cronogramaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "disciplina_id" | "nome_aula" | "data", ExtArgs["result"]["cronograma"]>
  export type cronogramaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao_aula?: boolean | cronograma$avaliacao_aulaArgs<ExtArgs>
    disciplinas?: boolean | disciplinasDefaultArgs<ExtArgs>
    _count?: boolean | CronogramaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cronogramaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cronograma"
    objects: {
      avaliacao_aula: Prisma.$avaliacao_aulaPayload<ExtArgs>[]
      disciplinas: Prisma.$disciplinasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      disciplina_id: number
      nome_aula: string
      data: Date
    }, ExtArgs["result"]["cronograma"]>
    composites: {}
  }

  type cronogramaGetPayload<S extends boolean | null | undefined | cronogramaDefaultArgs> = $Result.GetResult<Prisma.$cronogramaPayload, S>

  type cronogramaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cronogramaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CronogramaCountAggregateInputType | true
    }

  export interface cronogramaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cronograma'], meta: { name: 'cronograma' } }
    /**
     * Find zero or one Cronograma that matches the filter.
     * @param {cronogramaFindUniqueArgs} args - Arguments to find a Cronograma
     * @example
     * // Get one Cronograma
     * const cronograma = await prisma.cronograma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cronogramaFindUniqueArgs>(args: SelectSubset<T, cronogramaFindUniqueArgs<ExtArgs>>): Prisma__cronogramaClient<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cronograma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cronogramaFindUniqueOrThrowArgs} args - Arguments to find a Cronograma
     * @example
     * // Get one Cronograma
     * const cronograma = await prisma.cronograma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cronogramaFindUniqueOrThrowArgs>(args: SelectSubset<T, cronogramaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cronogramaClient<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cronograma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cronogramaFindFirstArgs} args - Arguments to find a Cronograma
     * @example
     * // Get one Cronograma
     * const cronograma = await prisma.cronograma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cronogramaFindFirstArgs>(args?: SelectSubset<T, cronogramaFindFirstArgs<ExtArgs>>): Prisma__cronogramaClient<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cronograma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cronogramaFindFirstOrThrowArgs} args - Arguments to find a Cronograma
     * @example
     * // Get one Cronograma
     * const cronograma = await prisma.cronograma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cronogramaFindFirstOrThrowArgs>(args?: SelectSubset<T, cronogramaFindFirstOrThrowArgs<ExtArgs>>): Prisma__cronogramaClient<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cronogramas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cronogramaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cronogramas
     * const cronogramas = await prisma.cronograma.findMany()
     * 
     * // Get first 10 Cronogramas
     * const cronogramas = await prisma.cronograma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cronogramaWithIdOnly = await prisma.cronograma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cronogramaFindManyArgs>(args?: SelectSubset<T, cronogramaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cronograma.
     * @param {cronogramaCreateArgs} args - Arguments to create a Cronograma.
     * @example
     * // Create one Cronograma
     * const Cronograma = await prisma.cronograma.create({
     *   data: {
     *     // ... data to create a Cronograma
     *   }
     * })
     * 
     */
    create<T extends cronogramaCreateArgs>(args: SelectSubset<T, cronogramaCreateArgs<ExtArgs>>): Prisma__cronogramaClient<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cronogramas.
     * @param {cronogramaCreateManyArgs} args - Arguments to create many Cronogramas.
     * @example
     * // Create many Cronogramas
     * const cronograma = await prisma.cronograma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cronogramaCreateManyArgs>(args?: SelectSubset<T, cronogramaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cronograma.
     * @param {cronogramaDeleteArgs} args - Arguments to delete one Cronograma.
     * @example
     * // Delete one Cronograma
     * const Cronograma = await prisma.cronograma.delete({
     *   where: {
     *     // ... filter to delete one Cronograma
     *   }
     * })
     * 
     */
    delete<T extends cronogramaDeleteArgs>(args: SelectSubset<T, cronogramaDeleteArgs<ExtArgs>>): Prisma__cronogramaClient<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cronograma.
     * @param {cronogramaUpdateArgs} args - Arguments to update one Cronograma.
     * @example
     * // Update one Cronograma
     * const cronograma = await prisma.cronograma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cronogramaUpdateArgs>(args: SelectSubset<T, cronogramaUpdateArgs<ExtArgs>>): Prisma__cronogramaClient<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cronogramas.
     * @param {cronogramaDeleteManyArgs} args - Arguments to filter Cronogramas to delete.
     * @example
     * // Delete a few Cronogramas
     * const { count } = await prisma.cronograma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cronogramaDeleteManyArgs>(args?: SelectSubset<T, cronogramaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cronogramas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cronogramaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cronogramas
     * const cronograma = await prisma.cronograma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cronogramaUpdateManyArgs>(args: SelectSubset<T, cronogramaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cronograma.
     * @param {cronogramaUpsertArgs} args - Arguments to update or create a Cronograma.
     * @example
     * // Update or create a Cronograma
     * const cronograma = await prisma.cronograma.upsert({
     *   create: {
     *     // ... data to create a Cronograma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cronograma we want to update
     *   }
     * })
     */
    upsert<T extends cronogramaUpsertArgs>(args: SelectSubset<T, cronogramaUpsertArgs<ExtArgs>>): Prisma__cronogramaClient<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cronogramas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cronogramaCountArgs} args - Arguments to filter Cronogramas to count.
     * @example
     * // Count the number of Cronogramas
     * const count = await prisma.cronograma.count({
     *   where: {
     *     // ... the filter for the Cronogramas we want to count
     *   }
     * })
    **/
    count<T extends cronogramaCountArgs>(
      args?: Subset<T, cronogramaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CronogramaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cronograma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CronogramaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CronogramaAggregateArgs>(args: Subset<T, CronogramaAggregateArgs>): Prisma.PrismaPromise<GetCronogramaAggregateType<T>>

    /**
     * Group by Cronograma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cronogramaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cronogramaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cronogramaGroupByArgs['orderBy'] }
        : { orderBy?: cronogramaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cronogramaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCronogramaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cronograma model
   */
  readonly fields: cronogramaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cronograma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cronogramaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacao_aula<T extends cronograma$avaliacao_aulaArgs<ExtArgs> = {}>(args?: Subset<T, cronograma$avaliacao_aulaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$avaliacao_aulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disciplinas<T extends disciplinasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, disciplinasDefaultArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cronograma model
   */
  interface cronogramaFieldRefs {
    readonly id: FieldRef<"cronograma", 'Int'>
    readonly disciplina_id: FieldRef<"cronograma", 'Int'>
    readonly nome_aula: FieldRef<"cronograma", 'String'>
    readonly data: FieldRef<"cronograma", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cronograma findUnique
   */
  export type cronogramaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
    /**
     * Filter, which cronograma to fetch.
     */
    where: cronogramaWhereUniqueInput
  }

  /**
   * cronograma findUniqueOrThrow
   */
  export type cronogramaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
    /**
     * Filter, which cronograma to fetch.
     */
    where: cronogramaWhereUniqueInput
  }

  /**
   * cronograma findFirst
   */
  export type cronogramaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
    /**
     * Filter, which cronograma to fetch.
     */
    where?: cronogramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cronogramas to fetch.
     */
    orderBy?: cronogramaOrderByWithRelationInput | cronogramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cronogramas.
     */
    cursor?: cronogramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cronogramas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cronogramas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cronogramas.
     */
    distinct?: CronogramaScalarFieldEnum | CronogramaScalarFieldEnum[]
  }

  /**
   * cronograma findFirstOrThrow
   */
  export type cronogramaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
    /**
     * Filter, which cronograma to fetch.
     */
    where?: cronogramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cronogramas to fetch.
     */
    orderBy?: cronogramaOrderByWithRelationInput | cronogramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cronogramas.
     */
    cursor?: cronogramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cronogramas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cronogramas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cronogramas.
     */
    distinct?: CronogramaScalarFieldEnum | CronogramaScalarFieldEnum[]
  }

  /**
   * cronograma findMany
   */
  export type cronogramaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
    /**
     * Filter, which cronogramas to fetch.
     */
    where?: cronogramaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cronogramas to fetch.
     */
    orderBy?: cronogramaOrderByWithRelationInput | cronogramaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cronogramas.
     */
    cursor?: cronogramaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cronogramas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cronogramas.
     */
    skip?: number
    distinct?: CronogramaScalarFieldEnum | CronogramaScalarFieldEnum[]
  }

  /**
   * cronograma create
   */
  export type cronogramaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
    /**
     * The data needed to create a cronograma.
     */
    data: XOR<cronogramaCreateInput, cronogramaUncheckedCreateInput>
  }

  /**
   * cronograma createMany
   */
  export type cronogramaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cronogramas.
     */
    data: cronogramaCreateManyInput | cronogramaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cronograma update
   */
  export type cronogramaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
    /**
     * The data needed to update a cronograma.
     */
    data: XOR<cronogramaUpdateInput, cronogramaUncheckedUpdateInput>
    /**
     * Choose, which cronograma to update.
     */
    where: cronogramaWhereUniqueInput
  }

  /**
   * cronograma updateMany
   */
  export type cronogramaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cronogramas.
     */
    data: XOR<cronogramaUpdateManyMutationInput, cronogramaUncheckedUpdateManyInput>
    /**
     * Filter which cronogramas to update
     */
    where?: cronogramaWhereInput
    /**
     * Limit how many cronogramas to update.
     */
    limit?: number
  }

  /**
   * cronograma upsert
   */
  export type cronogramaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
    /**
     * The filter to search for the cronograma to update in case it exists.
     */
    where: cronogramaWhereUniqueInput
    /**
     * In case the cronograma found by the `where` argument doesn't exist, create a new cronograma with this data.
     */
    create: XOR<cronogramaCreateInput, cronogramaUncheckedCreateInput>
    /**
     * In case the cronograma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cronogramaUpdateInput, cronogramaUncheckedUpdateInput>
  }

  /**
   * cronograma delete
   */
  export type cronogramaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
    /**
     * Filter which cronograma to delete.
     */
    where: cronogramaWhereUniqueInput
  }

  /**
   * cronograma deleteMany
   */
  export type cronogramaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cronogramas to delete
     */
    where?: cronogramaWhereInput
    /**
     * Limit how many cronogramas to delete.
     */
    limit?: number
  }

  /**
   * cronograma.avaliacao_aula
   */
  export type cronograma$avaliacao_aulaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the avaliacao_aula
     */
    select?: avaliacao_aulaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the avaliacao_aula
     */
    omit?: avaliacao_aulaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: avaliacao_aulaInclude<ExtArgs> | null
    where?: avaliacao_aulaWhereInput
    orderBy?: avaliacao_aulaOrderByWithRelationInput | avaliacao_aulaOrderByWithRelationInput[]
    cursor?: avaliacao_aulaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Avaliacao_aulaScalarFieldEnum | Avaliacao_aulaScalarFieldEnum[]
  }

  /**
   * cronograma without action
   */
  export type cronogramaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
  }


  /**
   * Model cursos
   */

  export type AggregateCursos = {
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  export type CursosAvgAggregateOutputType = {
    id: number | null
  }

  export type CursosSumAggregateOutputType = {
    id: number | null
  }

  export type CursosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CursosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CursosCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type CursosAvgAggregateInputType = {
    id?: true
  }

  export type CursosSumAggregateInputType = {
    id?: true
  }

  export type CursosMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CursosMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CursosCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type CursosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to aggregate.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cursos
    **/
    _count?: true | CursosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursosMaxAggregateInputType
  }

  export type GetCursosAggregateType<T extends CursosAggregateArgs> = {
        [P in keyof T & keyof AggregateCursos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCursos[P]>
      : GetScalarType<T[P], AggregateCursos[P]>
  }




  export type cursosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cursosWhereInput
    orderBy?: cursosOrderByWithAggregationInput | cursosOrderByWithAggregationInput[]
    by: CursosScalarFieldEnum[] | CursosScalarFieldEnum
    having?: cursosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursosCountAggregateInputType | true
    _avg?: CursosAvgAggregateInputType
    _sum?: CursosSumAggregateInputType
    _min?: CursosMinAggregateInputType
    _max?: CursosMaxAggregateInputType
  }

  export type CursosGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  type GetCursosGroupByPayload<T extends cursosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursosGroupByOutputType[P]>
            : GetScalarType<T[P], CursosGroupByOutputType[P]>
        }
      >
    >


  export type cursosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    disciplina_curso?: boolean | cursos$disciplina_cursoArgs<ExtArgs>
    _count?: boolean | CursosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cursos"]>



  export type cursosSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type cursosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["cursos"]>
  export type cursosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplina_curso?: boolean | cursos$disciplina_cursoArgs<ExtArgs>
    _count?: boolean | CursosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cursosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cursos"
    objects: {
      disciplina_curso: Prisma.$disciplina_cursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["cursos"]>
    composites: {}
  }

  type cursosGetPayload<S extends boolean | null | undefined | cursosDefaultArgs> = $Result.GetResult<Prisma.$cursosPayload, S>

  type cursosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cursosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CursosCountAggregateInputType | true
    }

  export interface cursosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cursos'], meta: { name: 'cursos' } }
    /**
     * Find zero or one Cursos that matches the filter.
     * @param {cursosFindUniqueArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cursosFindUniqueArgs>(args: SelectSubset<T, cursosFindUniqueArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cursos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cursosFindUniqueOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cursosFindUniqueOrThrowArgs>(args: SelectSubset<T, cursosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindFirstArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cursosFindFirstArgs>(args?: SelectSubset<T, cursosFindFirstArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cursos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindFirstOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cursosFindFirstOrThrowArgs>(args?: SelectSubset<T, cursosFindFirstOrThrowArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.cursos.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.cursos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursosWithIdOnly = await prisma.cursos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cursosFindManyArgs>(args?: SelectSubset<T, cursosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cursos.
     * @param {cursosCreateArgs} args - Arguments to create a Cursos.
     * @example
     * // Create one Cursos
     * const Cursos = await prisma.cursos.create({
     *   data: {
     *     // ... data to create a Cursos
     *   }
     * })
     * 
     */
    create<T extends cursosCreateArgs>(args: SelectSubset<T, cursosCreateArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cursos.
     * @param {cursosCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const cursos = await prisma.cursos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cursosCreateManyArgs>(args?: SelectSubset<T, cursosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cursos.
     * @param {cursosDeleteArgs} args - Arguments to delete one Cursos.
     * @example
     * // Delete one Cursos
     * const Cursos = await prisma.cursos.delete({
     *   where: {
     *     // ... filter to delete one Cursos
     *   }
     * })
     * 
     */
    delete<T extends cursosDeleteArgs>(args: SelectSubset<T, cursosDeleteArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cursos.
     * @param {cursosUpdateArgs} args - Arguments to update one Cursos.
     * @example
     * // Update one Cursos
     * const cursos = await prisma.cursos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cursosUpdateArgs>(args: SelectSubset<T, cursosUpdateArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cursos.
     * @param {cursosDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.cursos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cursosDeleteManyArgs>(args?: SelectSubset<T, cursosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const cursos = await prisma.cursos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cursosUpdateManyArgs>(args: SelectSubset<T, cursosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cursos.
     * @param {cursosUpsertArgs} args - Arguments to update or create a Cursos.
     * @example
     * // Update or create a Cursos
     * const cursos = await prisma.cursos.upsert({
     *   create: {
     *     // ... data to create a Cursos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cursos we want to update
     *   }
     * })
     */
    upsert<T extends cursosUpsertArgs>(args: SelectSubset<T, cursosUpsertArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.cursos.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends cursosCountArgs>(
      args?: Subset<T, cursosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursosAggregateArgs>(args: Subset<T, CursosAggregateArgs>): Prisma.PrismaPromise<GetCursosAggregateType<T>>

    /**
     * Group by Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cursosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cursosGroupByArgs['orderBy'] }
        : { orderBy?: cursosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cursosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cursos model
   */
  readonly fields: cursosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cursos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cursosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplina_curso<T extends cursos$disciplina_cursoArgs<ExtArgs> = {}>(args?: Subset<T, cursos$disciplina_cursoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cursos model
   */
  interface cursosFieldRefs {
    readonly id: FieldRef<"cursos", 'Int'>
    readonly nome: FieldRef<"cursos", 'String'>
    readonly descricao: FieldRef<"cursos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cursos findUnique
   */
  export type cursosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos findUniqueOrThrow
   */
  export type cursosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos findFirst
   */
  export type cursosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * cursos findFirstOrThrow
   */
  export type cursosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     */
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * cursos findMany
   */
  export type cursosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter, which cursos to fetch.
     */
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     */
    orderBy?: cursosOrderByWithRelationInput | cursosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cursos.
     */
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     */
    skip?: number
    distinct?: CursosScalarFieldEnum | CursosScalarFieldEnum[]
  }

  /**
   * cursos create
   */
  export type cursosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * The data needed to create a cursos.
     */
    data: XOR<cursosCreateInput, cursosUncheckedCreateInput>
  }

  /**
   * cursos createMany
   */
  export type cursosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cursos.
     */
    data: cursosCreateManyInput | cursosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cursos update
   */
  export type cursosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * The data needed to update a cursos.
     */
    data: XOR<cursosUpdateInput, cursosUncheckedUpdateInput>
    /**
     * Choose, which cursos to update.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos updateMany
   */
  export type cursosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cursos.
     */
    data: XOR<cursosUpdateManyMutationInput, cursosUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     */
    where?: cursosWhereInput
    /**
     * Limit how many cursos to update.
     */
    limit?: number
  }

  /**
   * cursos upsert
   */
  export type cursosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * The filter to search for the cursos to update in case it exists.
     */
    where: cursosWhereUniqueInput
    /**
     * In case the cursos found by the `where` argument doesn't exist, create a new cursos with this data.
     */
    create: XOR<cursosCreateInput, cursosUncheckedCreateInput>
    /**
     * In case the cursos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cursosUpdateInput, cursosUncheckedUpdateInput>
  }

  /**
   * cursos delete
   */
  export type cursosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
    /**
     * Filter which cursos to delete.
     */
    where: cursosWhereUniqueInput
  }

  /**
   * cursos deleteMany
   */
  export type cursosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cursos to delete
     */
    where?: cursosWhereInput
    /**
     * Limit how many cursos to delete.
     */
    limit?: number
  }

  /**
   * cursos.disciplina_curso
   */
  export type cursos$disciplina_cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    where?: disciplina_cursoWhereInput
    orderBy?: disciplina_cursoOrderByWithRelationInput | disciplina_cursoOrderByWithRelationInput[]
    cursor?: disciplina_cursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Disciplina_cursoScalarFieldEnum | Disciplina_cursoScalarFieldEnum[]
  }

  /**
   * cursos without action
   */
  export type cursosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cursos
     */
    select?: cursosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cursos
     */
    omit?: cursosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cursosInclude<ExtArgs> | null
  }


  /**
   * Model disciplina_curso
   */

  export type AggregateDisciplina_curso = {
    _count: Disciplina_cursoCountAggregateOutputType | null
    _avg: Disciplina_cursoAvgAggregateOutputType | null
    _sum: Disciplina_cursoSumAggregateOutputType | null
    _min: Disciplina_cursoMinAggregateOutputType | null
    _max: Disciplina_cursoMaxAggregateOutputType | null
  }

  export type Disciplina_cursoAvgAggregateOutputType = {
    id: number | null
    curso_id: number | null
    disciplina_id: number | null
  }

  export type Disciplina_cursoSumAggregateOutputType = {
    id: number | null
    curso_id: number | null
    disciplina_id: number | null
  }

  export type Disciplina_cursoMinAggregateOutputType = {
    id: number | null
    curso_id: number | null
    disciplina_id: number | null
  }

  export type Disciplina_cursoMaxAggregateOutputType = {
    id: number | null
    curso_id: number | null
    disciplina_id: number | null
  }

  export type Disciplina_cursoCountAggregateOutputType = {
    id: number
    curso_id: number
    disciplina_id: number
    _all: number
  }


  export type Disciplina_cursoAvgAggregateInputType = {
    id?: true
    curso_id?: true
    disciplina_id?: true
  }

  export type Disciplina_cursoSumAggregateInputType = {
    id?: true
    curso_id?: true
    disciplina_id?: true
  }

  export type Disciplina_cursoMinAggregateInputType = {
    id?: true
    curso_id?: true
    disciplina_id?: true
  }

  export type Disciplina_cursoMaxAggregateInputType = {
    id?: true
    curso_id?: true
    disciplina_id?: true
  }

  export type Disciplina_cursoCountAggregateInputType = {
    id?: true
    curso_id?: true
    disciplina_id?: true
    _all?: true
  }

  export type Disciplina_cursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disciplina_curso to aggregate.
     */
    where?: disciplina_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplina_cursos to fetch.
     */
    orderBy?: disciplina_cursoOrderByWithRelationInput | disciplina_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: disciplina_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplina_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplina_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned disciplina_cursos
    **/
    _count?: true | Disciplina_cursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Disciplina_cursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Disciplina_cursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Disciplina_cursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Disciplina_cursoMaxAggregateInputType
  }

  export type GetDisciplina_cursoAggregateType<T extends Disciplina_cursoAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplina_curso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplina_curso[P]>
      : GetScalarType<T[P], AggregateDisciplina_curso[P]>
  }




  export type disciplina_cursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplina_cursoWhereInput
    orderBy?: disciplina_cursoOrderByWithAggregationInput | disciplina_cursoOrderByWithAggregationInput[]
    by: Disciplina_cursoScalarFieldEnum[] | Disciplina_cursoScalarFieldEnum
    having?: disciplina_cursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Disciplina_cursoCountAggregateInputType | true
    _avg?: Disciplina_cursoAvgAggregateInputType
    _sum?: Disciplina_cursoSumAggregateInputType
    _min?: Disciplina_cursoMinAggregateInputType
    _max?: Disciplina_cursoMaxAggregateInputType
  }

  export type Disciplina_cursoGroupByOutputType = {
    id: number
    curso_id: number
    disciplina_id: number
    _count: Disciplina_cursoCountAggregateOutputType | null
    _avg: Disciplina_cursoAvgAggregateOutputType | null
    _sum: Disciplina_cursoSumAggregateOutputType | null
    _min: Disciplina_cursoMinAggregateOutputType | null
    _max: Disciplina_cursoMaxAggregateOutputType | null
  }

  type GetDisciplina_cursoGroupByPayload<T extends disciplina_cursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Disciplina_cursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Disciplina_cursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Disciplina_cursoGroupByOutputType[P]>
            : GetScalarType<T[P], Disciplina_cursoGroupByOutputType[P]>
        }
      >
    >


  export type disciplina_cursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curso_id?: boolean
    disciplina_id?: boolean
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    disciplinas?: boolean | disciplinasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplina_curso"]>



  export type disciplina_cursoSelectScalar = {
    id?: boolean
    curso_id?: boolean
    disciplina_id?: boolean
  }

  export type disciplina_cursoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "curso_id" | "disciplina_id", ExtArgs["result"]["disciplina_curso"]>
  export type disciplina_cursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | cursosDefaultArgs<ExtArgs>
    disciplinas?: boolean | disciplinasDefaultArgs<ExtArgs>
  }

  export type $disciplina_cursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "disciplina_curso"
    objects: {
      cursos: Prisma.$cursosPayload<ExtArgs>
      disciplinas: Prisma.$disciplinasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      curso_id: number
      disciplina_id: number
    }, ExtArgs["result"]["disciplina_curso"]>
    composites: {}
  }

  type disciplina_cursoGetPayload<S extends boolean | null | undefined | disciplina_cursoDefaultArgs> = $Result.GetResult<Prisma.$disciplina_cursoPayload, S>

  type disciplina_cursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<disciplina_cursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Disciplina_cursoCountAggregateInputType | true
    }

  export interface disciplina_cursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['disciplina_curso'], meta: { name: 'disciplina_curso' } }
    /**
     * Find zero or one Disciplina_curso that matches the filter.
     * @param {disciplina_cursoFindUniqueArgs} args - Arguments to find a Disciplina_curso
     * @example
     * // Get one Disciplina_curso
     * const disciplina_curso = await prisma.disciplina_curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends disciplina_cursoFindUniqueArgs>(args: SelectSubset<T, disciplina_cursoFindUniqueArgs<ExtArgs>>): Prisma__disciplina_cursoClient<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplina_curso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {disciplina_cursoFindUniqueOrThrowArgs} args - Arguments to find a Disciplina_curso
     * @example
     * // Get one Disciplina_curso
     * const disciplina_curso = await prisma.disciplina_curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends disciplina_cursoFindUniqueOrThrowArgs>(args: SelectSubset<T, disciplina_cursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__disciplina_cursoClient<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina_curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplina_cursoFindFirstArgs} args - Arguments to find a Disciplina_curso
     * @example
     * // Get one Disciplina_curso
     * const disciplina_curso = await prisma.disciplina_curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends disciplina_cursoFindFirstArgs>(args?: SelectSubset<T, disciplina_cursoFindFirstArgs<ExtArgs>>): Prisma__disciplina_cursoClient<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplina_curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplina_cursoFindFirstOrThrowArgs} args - Arguments to find a Disciplina_curso
     * @example
     * // Get one Disciplina_curso
     * const disciplina_curso = await prisma.disciplina_curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends disciplina_cursoFindFirstOrThrowArgs>(args?: SelectSubset<T, disciplina_cursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__disciplina_cursoClient<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplina_cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplina_cursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplina_cursos
     * const disciplina_cursos = await prisma.disciplina_curso.findMany()
     * 
     * // Get first 10 Disciplina_cursos
     * const disciplina_cursos = await prisma.disciplina_curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplina_cursoWithIdOnly = await prisma.disciplina_curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends disciplina_cursoFindManyArgs>(args?: SelectSubset<T, disciplina_cursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplina_curso.
     * @param {disciplina_cursoCreateArgs} args - Arguments to create a Disciplina_curso.
     * @example
     * // Create one Disciplina_curso
     * const Disciplina_curso = await prisma.disciplina_curso.create({
     *   data: {
     *     // ... data to create a Disciplina_curso
     *   }
     * })
     * 
     */
    create<T extends disciplina_cursoCreateArgs>(args: SelectSubset<T, disciplina_cursoCreateArgs<ExtArgs>>): Prisma__disciplina_cursoClient<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplina_cursos.
     * @param {disciplina_cursoCreateManyArgs} args - Arguments to create many Disciplina_cursos.
     * @example
     * // Create many Disciplina_cursos
     * const disciplina_curso = await prisma.disciplina_curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends disciplina_cursoCreateManyArgs>(args?: SelectSubset<T, disciplina_cursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disciplina_curso.
     * @param {disciplina_cursoDeleteArgs} args - Arguments to delete one Disciplina_curso.
     * @example
     * // Delete one Disciplina_curso
     * const Disciplina_curso = await prisma.disciplina_curso.delete({
     *   where: {
     *     // ... filter to delete one Disciplina_curso
     *   }
     * })
     * 
     */
    delete<T extends disciplina_cursoDeleteArgs>(args: SelectSubset<T, disciplina_cursoDeleteArgs<ExtArgs>>): Prisma__disciplina_cursoClient<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplina_curso.
     * @param {disciplina_cursoUpdateArgs} args - Arguments to update one Disciplina_curso.
     * @example
     * // Update one Disciplina_curso
     * const disciplina_curso = await prisma.disciplina_curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends disciplina_cursoUpdateArgs>(args: SelectSubset<T, disciplina_cursoUpdateArgs<ExtArgs>>): Prisma__disciplina_cursoClient<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplina_cursos.
     * @param {disciplina_cursoDeleteManyArgs} args - Arguments to filter Disciplina_cursos to delete.
     * @example
     * // Delete a few Disciplina_cursos
     * const { count } = await prisma.disciplina_curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends disciplina_cursoDeleteManyArgs>(args?: SelectSubset<T, disciplina_cursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplina_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplina_cursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplina_cursos
     * const disciplina_curso = await prisma.disciplina_curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends disciplina_cursoUpdateManyArgs>(args: SelectSubset<T, disciplina_cursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disciplina_curso.
     * @param {disciplina_cursoUpsertArgs} args - Arguments to update or create a Disciplina_curso.
     * @example
     * // Update or create a Disciplina_curso
     * const disciplina_curso = await prisma.disciplina_curso.upsert({
     *   create: {
     *     // ... data to create a Disciplina_curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplina_curso we want to update
     *   }
     * })
     */
    upsert<T extends disciplina_cursoUpsertArgs>(args: SelectSubset<T, disciplina_cursoUpsertArgs<ExtArgs>>): Prisma__disciplina_cursoClient<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplina_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplina_cursoCountArgs} args - Arguments to filter Disciplina_cursos to count.
     * @example
     * // Count the number of Disciplina_cursos
     * const count = await prisma.disciplina_curso.count({
     *   where: {
     *     // ... the filter for the Disciplina_cursos we want to count
     *   }
     * })
    **/
    count<T extends disciplina_cursoCountArgs>(
      args?: Subset<T, disciplina_cursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Disciplina_cursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplina_curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Disciplina_cursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Disciplina_cursoAggregateArgs>(args: Subset<T, Disciplina_cursoAggregateArgs>): Prisma.PrismaPromise<GetDisciplina_cursoAggregateType<T>>

    /**
     * Group by Disciplina_curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplina_cursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends disciplina_cursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: disciplina_cursoGroupByArgs['orderBy'] }
        : { orderBy?: disciplina_cursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, disciplina_cursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplina_cursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the disciplina_curso model
   */
  readonly fields: disciplina_cursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for disciplina_curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__disciplina_cursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends cursosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cursosDefaultArgs<ExtArgs>>): Prisma__cursosClient<$Result.GetResult<Prisma.$cursosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disciplinas<T extends disciplinasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, disciplinasDefaultArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the disciplina_curso model
   */
  interface disciplina_cursoFieldRefs {
    readonly id: FieldRef<"disciplina_curso", 'Int'>
    readonly curso_id: FieldRef<"disciplina_curso", 'Int'>
    readonly disciplina_id: FieldRef<"disciplina_curso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * disciplina_curso findUnique
   */
  export type disciplina_cursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    /**
     * Filter, which disciplina_curso to fetch.
     */
    where: disciplina_cursoWhereUniqueInput
  }

  /**
   * disciplina_curso findUniqueOrThrow
   */
  export type disciplina_cursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    /**
     * Filter, which disciplina_curso to fetch.
     */
    where: disciplina_cursoWhereUniqueInput
  }

  /**
   * disciplina_curso findFirst
   */
  export type disciplina_cursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    /**
     * Filter, which disciplina_curso to fetch.
     */
    where?: disciplina_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplina_cursos to fetch.
     */
    orderBy?: disciplina_cursoOrderByWithRelationInput | disciplina_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplina_cursos.
     */
    cursor?: disciplina_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplina_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplina_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplina_cursos.
     */
    distinct?: Disciplina_cursoScalarFieldEnum | Disciplina_cursoScalarFieldEnum[]
  }

  /**
   * disciplina_curso findFirstOrThrow
   */
  export type disciplina_cursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    /**
     * Filter, which disciplina_curso to fetch.
     */
    where?: disciplina_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplina_cursos to fetch.
     */
    orderBy?: disciplina_cursoOrderByWithRelationInput | disciplina_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplina_cursos.
     */
    cursor?: disciplina_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplina_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplina_cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplina_cursos.
     */
    distinct?: Disciplina_cursoScalarFieldEnum | Disciplina_cursoScalarFieldEnum[]
  }

  /**
   * disciplina_curso findMany
   */
  export type disciplina_cursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    /**
     * Filter, which disciplina_cursos to fetch.
     */
    where?: disciplina_cursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplina_cursos to fetch.
     */
    orderBy?: disciplina_cursoOrderByWithRelationInput | disciplina_cursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing disciplina_cursos.
     */
    cursor?: disciplina_cursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplina_cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplina_cursos.
     */
    skip?: number
    distinct?: Disciplina_cursoScalarFieldEnum | Disciplina_cursoScalarFieldEnum[]
  }

  /**
   * disciplina_curso create
   */
  export type disciplina_cursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    /**
     * The data needed to create a disciplina_curso.
     */
    data: XOR<disciplina_cursoCreateInput, disciplina_cursoUncheckedCreateInput>
  }

  /**
   * disciplina_curso createMany
   */
  export type disciplina_cursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many disciplina_cursos.
     */
    data: disciplina_cursoCreateManyInput | disciplina_cursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * disciplina_curso update
   */
  export type disciplina_cursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    /**
     * The data needed to update a disciplina_curso.
     */
    data: XOR<disciplina_cursoUpdateInput, disciplina_cursoUncheckedUpdateInput>
    /**
     * Choose, which disciplina_curso to update.
     */
    where: disciplina_cursoWhereUniqueInput
  }

  /**
   * disciplina_curso updateMany
   */
  export type disciplina_cursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update disciplina_cursos.
     */
    data: XOR<disciplina_cursoUpdateManyMutationInput, disciplina_cursoUncheckedUpdateManyInput>
    /**
     * Filter which disciplina_cursos to update
     */
    where?: disciplina_cursoWhereInput
    /**
     * Limit how many disciplina_cursos to update.
     */
    limit?: number
  }

  /**
   * disciplina_curso upsert
   */
  export type disciplina_cursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    /**
     * The filter to search for the disciplina_curso to update in case it exists.
     */
    where: disciplina_cursoWhereUniqueInput
    /**
     * In case the disciplina_curso found by the `where` argument doesn't exist, create a new disciplina_curso with this data.
     */
    create: XOR<disciplina_cursoCreateInput, disciplina_cursoUncheckedCreateInput>
    /**
     * In case the disciplina_curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<disciplina_cursoUpdateInput, disciplina_cursoUncheckedUpdateInput>
  }

  /**
   * disciplina_curso delete
   */
  export type disciplina_cursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    /**
     * Filter which disciplina_curso to delete.
     */
    where: disciplina_cursoWhereUniqueInput
  }

  /**
   * disciplina_curso deleteMany
   */
  export type disciplina_cursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disciplina_cursos to delete
     */
    where?: disciplina_cursoWhereInput
    /**
     * Limit how many disciplina_cursos to delete.
     */
    limit?: number
  }

  /**
   * disciplina_curso without action
   */
  export type disciplina_cursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
  }


  /**
   * Model disciplinas
   */

  export type AggregateDisciplinas = {
    _count: DisciplinasCountAggregateOutputType | null
    _avg: DisciplinasAvgAggregateOutputType | null
    _sum: DisciplinasSumAggregateOutputType | null
    _min: DisciplinasMinAggregateOutputType | null
    _max: DisciplinasMaxAggregateOutputType | null
  }

  export type DisciplinasAvgAggregateOutputType = {
    id: number | null
  }

  export type DisciplinasSumAggregateOutputType = {
    id: number | null
  }

  export type DisciplinasMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type DisciplinasMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type DisciplinasCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type DisciplinasAvgAggregateInputType = {
    id?: true
  }

  export type DisciplinasSumAggregateInputType = {
    id?: true
  }

  export type DisciplinasMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type DisciplinasMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type DisciplinasCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type DisciplinasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disciplinas to aggregate.
     */
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinasOrderByWithRelationInput | disciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned disciplinas
    **/
    _count?: true | DisciplinasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinasMaxAggregateInputType
  }

  export type GetDisciplinasAggregateType<T extends DisciplinasAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplinas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplinas[P]>
      : GetScalarType<T[P], AggregateDisciplinas[P]>
  }




  export type disciplinasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: disciplinasWhereInput
    orderBy?: disciplinasOrderByWithAggregationInput | disciplinasOrderByWithAggregationInput[]
    by: DisciplinasScalarFieldEnum[] | DisciplinasScalarFieldEnum
    having?: disciplinasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinasCountAggregateInputType | true
    _avg?: DisciplinasAvgAggregateInputType
    _sum?: DisciplinasSumAggregateInputType
    _min?: DisciplinasMinAggregateInputType
    _max?: DisciplinasMaxAggregateInputType
  }

  export type DisciplinasGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: DisciplinasCountAggregateOutputType | null
    _avg: DisciplinasAvgAggregateOutputType | null
    _sum: DisciplinasSumAggregateOutputType | null
    _min: DisciplinasMinAggregateOutputType | null
    _max: DisciplinasMaxAggregateOutputType | null
  }

  type GetDisciplinasGroupByPayload<T extends disciplinasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisciplinasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinasGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinasGroupByOutputType[P]>
        }
      >
    >


  export type disciplinasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    cronograma?: boolean | disciplinas$cronogramaArgs<ExtArgs>
    disciplina_curso?: boolean | disciplinas$disciplina_cursoArgs<ExtArgs>
    exercicios?: boolean | disciplinas$exerciciosArgs<ExtArgs>
    _count?: boolean | DisciplinasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disciplinas"]>



  export type disciplinasSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type disciplinasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["disciplinas"]>
  export type disciplinasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cronograma?: boolean | disciplinas$cronogramaArgs<ExtArgs>
    disciplina_curso?: boolean | disciplinas$disciplina_cursoArgs<ExtArgs>
    exercicios?: boolean | disciplinas$exerciciosArgs<ExtArgs>
    _count?: boolean | DisciplinasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $disciplinasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "disciplinas"
    objects: {
      cronograma: Prisma.$cronogramaPayload<ExtArgs>[]
      disciplina_curso: Prisma.$disciplina_cursoPayload<ExtArgs>[]
      exercicios: Prisma.$exerciciosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["disciplinas"]>
    composites: {}
  }

  type disciplinasGetPayload<S extends boolean | null | undefined | disciplinasDefaultArgs> = $Result.GetResult<Prisma.$disciplinasPayload, S>

  type disciplinasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<disciplinasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisciplinasCountAggregateInputType | true
    }

  export interface disciplinasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['disciplinas'], meta: { name: 'disciplinas' } }
    /**
     * Find zero or one Disciplinas that matches the filter.
     * @param {disciplinasFindUniqueArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends disciplinasFindUniqueArgs>(args: SelectSubset<T, disciplinasFindUniqueArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disciplinas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {disciplinasFindUniqueOrThrowArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends disciplinasFindUniqueOrThrowArgs>(args: SelectSubset<T, disciplinasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasFindFirstArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends disciplinasFindFirstArgs>(args?: SelectSubset<T, disciplinasFindFirstArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disciplinas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasFindFirstOrThrowArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends disciplinasFindFirstOrThrowArgs>(args?: SelectSubset<T, disciplinasFindFirstOrThrowArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplinas.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplinas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disciplinasWithIdOnly = await prisma.disciplinas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends disciplinasFindManyArgs>(args?: SelectSubset<T, disciplinasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disciplinas.
     * @param {disciplinasCreateArgs} args - Arguments to create a Disciplinas.
     * @example
     * // Create one Disciplinas
     * const Disciplinas = await prisma.disciplinas.create({
     *   data: {
     *     // ... data to create a Disciplinas
     *   }
     * })
     * 
     */
    create<T extends disciplinasCreateArgs>(args: SelectSubset<T, disciplinasCreateArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disciplinas.
     * @param {disciplinasCreateManyArgs} args - Arguments to create many Disciplinas.
     * @example
     * // Create many Disciplinas
     * const disciplinas = await prisma.disciplinas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends disciplinasCreateManyArgs>(args?: SelectSubset<T, disciplinasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Disciplinas.
     * @param {disciplinasDeleteArgs} args - Arguments to delete one Disciplinas.
     * @example
     * // Delete one Disciplinas
     * const Disciplinas = await prisma.disciplinas.delete({
     *   where: {
     *     // ... filter to delete one Disciplinas
     *   }
     * })
     * 
     */
    delete<T extends disciplinasDeleteArgs>(args: SelectSubset<T, disciplinasDeleteArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disciplinas.
     * @param {disciplinasUpdateArgs} args - Arguments to update one Disciplinas.
     * @example
     * // Update one Disciplinas
     * const disciplinas = await prisma.disciplinas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends disciplinasUpdateArgs>(args: SelectSubset<T, disciplinasUpdateArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disciplinas.
     * @param {disciplinasDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplinas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends disciplinasDeleteManyArgs>(args?: SelectSubset<T, disciplinasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplinas = await prisma.disciplinas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends disciplinasUpdateManyArgs>(args: SelectSubset<T, disciplinasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Disciplinas.
     * @param {disciplinasUpsertArgs} args - Arguments to update or create a Disciplinas.
     * @example
     * // Update or create a Disciplinas
     * const disciplinas = await prisma.disciplinas.upsert({
     *   create: {
     *     // ... data to create a Disciplinas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplinas we want to update
     *   }
     * })
     */
    upsert<T extends disciplinasUpsertArgs>(args: SelectSubset<T, disciplinasUpsertArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplinas.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends disciplinasCountArgs>(
      args?: Subset<T, disciplinasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisciplinasAggregateArgs>(args: Subset<T, DisciplinasAggregateArgs>): Prisma.PrismaPromise<GetDisciplinasAggregateType<T>>

    /**
     * Group by Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends disciplinasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: disciplinasGroupByArgs['orderBy'] }
        : { orderBy?: disciplinasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, disciplinasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the disciplinas model
   */
  readonly fields: disciplinasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for disciplinas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__disciplinasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cronograma<T extends disciplinas$cronogramaArgs<ExtArgs> = {}>(args?: Subset<T, disciplinas$cronogramaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cronogramaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disciplina_curso<T extends disciplinas$disciplina_cursoArgs<ExtArgs> = {}>(args?: Subset<T, disciplinas$disciplina_cursoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$disciplina_cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exercicios<T extends disciplinas$exerciciosArgs<ExtArgs> = {}>(args?: Subset<T, disciplinas$exerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the disciplinas model
   */
  interface disciplinasFieldRefs {
    readonly id: FieldRef<"disciplinas", 'Int'>
    readonly nome: FieldRef<"disciplinas", 'String'>
    readonly descricao: FieldRef<"disciplinas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * disciplinas findUnique
   */
  export type disciplinasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where: disciplinasWhereUniqueInput
  }

  /**
   * disciplinas findUniqueOrThrow
   */
  export type disciplinasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where: disciplinasWhereUniqueInput
  }

  /**
   * disciplinas findFirst
   */
  export type disciplinasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinasOrderByWithRelationInput | disciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinas.
     */
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinas.
     */
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * disciplinas findFirstOrThrow
   */
  export type disciplinasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinasOrderByWithRelationInput | disciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinas.
     */
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinas.
     */
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * disciplinas findMany
   */
  export type disciplinasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter, which disciplinas to fetch.
     */
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     */
    orderBy?: disciplinasOrderByWithRelationInput | disciplinasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing disciplinas.
     */
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     */
    skip?: number
    distinct?: DisciplinasScalarFieldEnum | DisciplinasScalarFieldEnum[]
  }

  /**
   * disciplinas create
   */
  export type disciplinasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * The data needed to create a disciplinas.
     */
    data: XOR<disciplinasCreateInput, disciplinasUncheckedCreateInput>
  }

  /**
   * disciplinas createMany
   */
  export type disciplinasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many disciplinas.
     */
    data: disciplinasCreateManyInput | disciplinasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * disciplinas update
   */
  export type disciplinasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * The data needed to update a disciplinas.
     */
    data: XOR<disciplinasUpdateInput, disciplinasUncheckedUpdateInput>
    /**
     * Choose, which disciplinas to update.
     */
    where: disciplinasWhereUniqueInput
  }

  /**
   * disciplinas updateMany
   */
  export type disciplinasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update disciplinas.
     */
    data: XOR<disciplinasUpdateManyMutationInput, disciplinasUncheckedUpdateManyInput>
    /**
     * Filter which disciplinas to update
     */
    where?: disciplinasWhereInput
    /**
     * Limit how many disciplinas to update.
     */
    limit?: number
  }

  /**
   * disciplinas upsert
   */
  export type disciplinasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * The filter to search for the disciplinas to update in case it exists.
     */
    where: disciplinasWhereUniqueInput
    /**
     * In case the disciplinas found by the `where` argument doesn't exist, create a new disciplinas with this data.
     */
    create: XOR<disciplinasCreateInput, disciplinasUncheckedCreateInput>
    /**
     * In case the disciplinas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<disciplinasUpdateInput, disciplinasUncheckedUpdateInput>
  }

  /**
   * disciplinas delete
   */
  export type disciplinasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
    /**
     * Filter which disciplinas to delete.
     */
    where: disciplinasWhereUniqueInput
  }

  /**
   * disciplinas deleteMany
   */
  export type disciplinasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which disciplinas to delete
     */
    where?: disciplinasWhereInput
    /**
     * Limit how many disciplinas to delete.
     */
    limit?: number
  }

  /**
   * disciplinas.cronograma
   */
  export type disciplinas$cronogramaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cronograma
     */
    select?: cronogramaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cronograma
     */
    omit?: cronogramaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cronogramaInclude<ExtArgs> | null
    where?: cronogramaWhereInput
    orderBy?: cronogramaOrderByWithRelationInput | cronogramaOrderByWithRelationInput[]
    cursor?: cronogramaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CronogramaScalarFieldEnum | CronogramaScalarFieldEnum[]
  }

  /**
   * disciplinas.disciplina_curso
   */
  export type disciplinas$disciplina_cursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplina_curso
     */
    select?: disciplina_cursoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplina_curso
     */
    omit?: disciplina_cursoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplina_cursoInclude<ExtArgs> | null
    where?: disciplina_cursoWhereInput
    orderBy?: disciplina_cursoOrderByWithRelationInput | disciplina_cursoOrderByWithRelationInput[]
    cursor?: disciplina_cursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Disciplina_cursoScalarFieldEnum | Disciplina_cursoScalarFieldEnum[]
  }

  /**
   * disciplinas.exercicios
   */
  export type disciplinas$exerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    where?: exerciciosWhereInput
    orderBy?: exerciciosOrderByWithRelationInput | exerciciosOrderByWithRelationInput[]
    cursor?: exerciciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciciosScalarFieldEnum | ExerciciosScalarFieldEnum[]
  }

  /**
   * disciplinas without action
   */
  export type disciplinasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the disciplinas
     */
    select?: disciplinasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the disciplinas
     */
    omit?: disciplinasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: disciplinasInclude<ExtArgs> | null
  }


  /**
   * Model exercicios
   */

  export type AggregateExercicios = {
    _count: ExerciciosCountAggregateOutputType | null
    _avg: ExerciciosAvgAggregateOutputType | null
    _sum: ExerciciosSumAggregateOutputType | null
    _min: ExerciciosMinAggregateOutputType | null
    _max: ExerciciosMaxAggregateOutputType | null
  }

  export type ExerciciosAvgAggregateOutputType = {
    id: number | null
    disciplina_id: number | null
  }

  export type ExerciciosSumAggregateOutputType = {
    id: number | null
    disciplina_id: number | null
  }

  export type ExerciciosMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    enunciado: string | null
    disciplina_id: number | null
    criado_em: Date | null
  }

  export type ExerciciosMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    enunciado: string | null
    disciplina_id: number | null
    criado_em: Date | null
  }

  export type ExerciciosCountAggregateOutputType = {
    id: number
    titulo: number
    enunciado: number
    disciplina_id: number
    criado_em: number
    _all: number
  }


  export type ExerciciosAvgAggregateInputType = {
    id?: true
    disciplina_id?: true
  }

  export type ExerciciosSumAggregateInputType = {
    id?: true
    disciplina_id?: true
  }

  export type ExerciciosMinAggregateInputType = {
    id?: true
    titulo?: true
    enunciado?: true
    disciplina_id?: true
    criado_em?: true
  }

  export type ExerciciosMaxAggregateInputType = {
    id?: true
    titulo?: true
    enunciado?: true
    disciplina_id?: true
    criado_em?: true
  }

  export type ExerciciosCountAggregateInputType = {
    id?: true
    titulo?: true
    enunciado?: true
    disciplina_id?: true
    criado_em?: true
    _all?: true
  }

  export type ExerciciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercicios to aggregate.
     */
    where?: exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercicios to fetch.
     */
    orderBy?: exerciciosOrderByWithRelationInput | exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exercicios
    **/
    _count?: true | ExerciciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciciosMaxAggregateInputType
  }

  export type GetExerciciosAggregateType<T extends ExerciciosAggregateArgs> = {
        [P in keyof T & keyof AggregateExercicios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercicios[P]>
      : GetScalarType<T[P], AggregateExercicios[P]>
  }




  export type exerciciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: exerciciosWhereInput
    orderBy?: exerciciosOrderByWithAggregationInput | exerciciosOrderByWithAggregationInput[]
    by: ExerciciosScalarFieldEnum[] | ExerciciosScalarFieldEnum
    having?: exerciciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciciosCountAggregateInputType | true
    _avg?: ExerciciosAvgAggregateInputType
    _sum?: ExerciciosSumAggregateInputType
    _min?: ExerciciosMinAggregateInputType
    _max?: ExerciciosMaxAggregateInputType
  }

  export type ExerciciosGroupByOutputType = {
    id: number
    titulo: string
    enunciado: string
    disciplina_id: number
    criado_em: Date | null
    _count: ExerciciosCountAggregateOutputType | null
    _avg: ExerciciosAvgAggregateOutputType | null
    _sum: ExerciciosSumAggregateOutputType | null
    _min: ExerciciosMinAggregateOutputType | null
    _max: ExerciciosMaxAggregateOutputType | null
  }

  type GetExerciciosGroupByPayload<T extends exerciciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciciosGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciciosGroupByOutputType[P]>
        }
      >
    >


  export type exerciciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    enunciado?: boolean
    disciplina_id?: boolean
    criado_em?: boolean
    disciplinas?: boolean | disciplinasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercicios"]>



  export type exerciciosSelectScalar = {
    id?: boolean
    titulo?: boolean
    enunciado?: boolean
    disciplina_id?: boolean
    criado_em?: boolean
  }

  export type exerciciosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "enunciado" | "disciplina_id" | "criado_em", ExtArgs["result"]["exercicios"]>
  export type exerciciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disciplinas?: boolean | disciplinasDefaultArgs<ExtArgs>
  }

  export type $exerciciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exercicios"
    objects: {
      disciplinas: Prisma.$disciplinasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      enunciado: string
      disciplina_id: number
      criado_em: Date | null
    }, ExtArgs["result"]["exercicios"]>
    composites: {}
  }

  type exerciciosGetPayload<S extends boolean | null | undefined | exerciciosDefaultArgs> = $Result.GetResult<Prisma.$exerciciosPayload, S>

  type exerciciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<exerciciosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciciosCountAggregateInputType | true
    }

  export interface exerciciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exercicios'], meta: { name: 'exercicios' } }
    /**
     * Find zero or one Exercicios that matches the filter.
     * @param {exerciciosFindUniqueArgs} args - Arguments to find a Exercicios
     * @example
     * // Get one Exercicios
     * const exercicios = await prisma.exercicios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends exerciciosFindUniqueArgs>(args: SelectSubset<T, exerciciosFindUniqueArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercicios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {exerciciosFindUniqueOrThrowArgs} args - Arguments to find a Exercicios
     * @example
     * // Get one Exercicios
     * const exercicios = await prisma.exercicios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends exerciciosFindUniqueOrThrowArgs>(args: SelectSubset<T, exerciciosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosFindFirstArgs} args - Arguments to find a Exercicios
     * @example
     * // Get one Exercicios
     * const exercicios = await prisma.exercicios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends exerciciosFindFirstArgs>(args?: SelectSubset<T, exerciciosFindFirstArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercicios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosFindFirstOrThrowArgs} args - Arguments to find a Exercicios
     * @example
     * // Get one Exercicios
     * const exercicios = await prisma.exercicios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends exerciciosFindFirstOrThrowArgs>(args?: SelectSubset<T, exerciciosFindFirstOrThrowArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercicios
     * const exercicios = await prisma.exercicios.findMany()
     * 
     * // Get first 10 Exercicios
     * const exercicios = await prisma.exercicios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciciosWithIdOnly = await prisma.exercicios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends exerciciosFindManyArgs>(args?: SelectSubset<T, exerciciosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercicios.
     * @param {exerciciosCreateArgs} args - Arguments to create a Exercicios.
     * @example
     * // Create one Exercicios
     * const Exercicios = await prisma.exercicios.create({
     *   data: {
     *     // ... data to create a Exercicios
     *   }
     * })
     * 
     */
    create<T extends exerciciosCreateArgs>(args: SelectSubset<T, exerciciosCreateArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercicios.
     * @param {exerciciosCreateManyArgs} args - Arguments to create many Exercicios.
     * @example
     * // Create many Exercicios
     * const exercicios = await prisma.exercicios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends exerciciosCreateManyArgs>(args?: SelectSubset<T, exerciciosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exercicios.
     * @param {exerciciosDeleteArgs} args - Arguments to delete one Exercicios.
     * @example
     * // Delete one Exercicios
     * const Exercicios = await prisma.exercicios.delete({
     *   where: {
     *     // ... filter to delete one Exercicios
     *   }
     * })
     * 
     */
    delete<T extends exerciciosDeleteArgs>(args: SelectSubset<T, exerciciosDeleteArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercicios.
     * @param {exerciciosUpdateArgs} args - Arguments to update one Exercicios.
     * @example
     * // Update one Exercicios
     * const exercicios = await prisma.exercicios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends exerciciosUpdateArgs>(args: SelectSubset<T, exerciciosUpdateArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercicios.
     * @param {exerciciosDeleteManyArgs} args - Arguments to filter Exercicios to delete.
     * @example
     * // Delete a few Exercicios
     * const { count } = await prisma.exercicios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends exerciciosDeleteManyArgs>(args?: SelectSubset<T, exerciciosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercicios
     * const exercicios = await prisma.exercicios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends exerciciosUpdateManyArgs>(args: SelectSubset<T, exerciciosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercicios.
     * @param {exerciciosUpsertArgs} args - Arguments to update or create a Exercicios.
     * @example
     * // Update or create a Exercicios
     * const exercicios = await prisma.exercicios.upsert({
     *   create: {
     *     // ... data to create a Exercicios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercicios we want to update
     *   }
     * })
     */
    upsert<T extends exerciciosUpsertArgs>(args: SelectSubset<T, exerciciosUpsertArgs<ExtArgs>>): Prisma__exerciciosClient<$Result.GetResult<Prisma.$exerciciosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosCountArgs} args - Arguments to filter Exercicios to count.
     * @example
     * // Count the number of Exercicios
     * const count = await prisma.exercicios.count({
     *   where: {
     *     // ... the filter for the Exercicios we want to count
     *   }
     * })
    **/
    count<T extends exerciciosCountArgs>(
      args?: Subset<T, exerciciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciciosAggregateArgs>(args: Subset<T, ExerciciosAggregateArgs>): Prisma.PrismaPromise<GetExerciciosAggregateType<T>>

    /**
     * Group by Exercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {exerciciosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends exerciciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: exerciciosGroupByArgs['orderBy'] }
        : { orderBy?: exerciciosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, exerciciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exercicios model
   */
  readonly fields: exerciciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exercicios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__exerciciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disciplinas<T extends disciplinasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, disciplinasDefaultArgs<ExtArgs>>): Prisma__disciplinasClient<$Result.GetResult<Prisma.$disciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the exercicios model
   */
  interface exerciciosFieldRefs {
    readonly id: FieldRef<"exercicios", 'Int'>
    readonly titulo: FieldRef<"exercicios", 'String'>
    readonly enunciado: FieldRef<"exercicios", 'String'>
    readonly disciplina_id: FieldRef<"exercicios", 'Int'>
    readonly criado_em: FieldRef<"exercicios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * exercicios findUnique
   */
  export type exerciciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which exercicios to fetch.
     */
    where: exerciciosWhereUniqueInput
  }

  /**
   * exercicios findUniqueOrThrow
   */
  export type exerciciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which exercicios to fetch.
     */
    where: exerciciosWhereUniqueInput
  }

  /**
   * exercicios findFirst
   */
  export type exerciciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which exercicios to fetch.
     */
    where?: exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercicios to fetch.
     */
    orderBy?: exerciciosOrderByWithRelationInput | exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercicios.
     */
    cursor?: exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercicios.
     */
    distinct?: ExerciciosScalarFieldEnum | ExerciciosScalarFieldEnum[]
  }

  /**
   * exercicios findFirstOrThrow
   */
  export type exerciciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which exercicios to fetch.
     */
    where?: exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercicios to fetch.
     */
    orderBy?: exerciciosOrderByWithRelationInput | exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exercicios.
     */
    cursor?: exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exercicios.
     */
    distinct?: ExerciciosScalarFieldEnum | ExerciciosScalarFieldEnum[]
  }

  /**
   * exercicios findMany
   */
  export type exerciciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter, which exercicios to fetch.
     */
    where?: exerciciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exercicios to fetch.
     */
    orderBy?: exerciciosOrderByWithRelationInput | exerciciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exercicios.
     */
    cursor?: exerciciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exercicios.
     */
    skip?: number
    distinct?: ExerciciosScalarFieldEnum | ExerciciosScalarFieldEnum[]
  }

  /**
   * exercicios create
   */
  export type exerciciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * The data needed to create a exercicios.
     */
    data: XOR<exerciciosCreateInput, exerciciosUncheckedCreateInput>
  }

  /**
   * exercicios createMany
   */
  export type exerciciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exercicios.
     */
    data: exerciciosCreateManyInput | exerciciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exercicios update
   */
  export type exerciciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * The data needed to update a exercicios.
     */
    data: XOR<exerciciosUpdateInput, exerciciosUncheckedUpdateInput>
    /**
     * Choose, which exercicios to update.
     */
    where: exerciciosWhereUniqueInput
  }

  /**
   * exercicios updateMany
   */
  export type exerciciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exercicios.
     */
    data: XOR<exerciciosUpdateManyMutationInput, exerciciosUncheckedUpdateManyInput>
    /**
     * Filter which exercicios to update
     */
    where?: exerciciosWhereInput
    /**
     * Limit how many exercicios to update.
     */
    limit?: number
  }

  /**
   * exercicios upsert
   */
  export type exerciciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * The filter to search for the exercicios to update in case it exists.
     */
    where: exerciciosWhereUniqueInput
    /**
     * In case the exercicios found by the `where` argument doesn't exist, create a new exercicios with this data.
     */
    create: XOR<exerciciosCreateInput, exerciciosUncheckedCreateInput>
    /**
     * In case the exercicios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<exerciciosUpdateInput, exerciciosUncheckedUpdateInput>
  }

  /**
   * exercicios delete
   */
  export type exerciciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
    /**
     * Filter which exercicios to delete.
     */
    where: exerciciosWhereUniqueInput
  }

  /**
   * exercicios deleteMany
   */
  export type exerciciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exercicios to delete
     */
    where?: exerciciosWhereInput
    /**
     * Limit how many exercicios to delete.
     */
    limit?: number
  }

  /**
   * exercicios without action
   */
  export type exerciciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exercicios
     */
    select?: exerciciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the exercicios
     */
    omit?: exerciciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: exerciciosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: $Enums.usuarios_tipo | null
    criado_em: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    tipo: $Enums.usuarios_tipo | null
    criado_em: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    tipo: number
    criado_em: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    criado_em?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    criado_em?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    tipo?: true
    criado_em?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuarios_tipo
    criado_em: Date | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    criado_em?: boolean
  }, ExtArgs["result"]["usuarios"]>



  export type usuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    tipo?: boolean
    criado_em?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "tipo" | "criado_em", ExtArgs["result"]["usuarios"]>

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      tipo: $Enums.usuarios_tipo
      criado_em: Date | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly tipo: FieldRef<"usuarios", 'usuarios_tipo'>
    readonly criado_em: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Avaliacao_aulaScalarFieldEnum: {
    id: 'id',
    id_usuario: 'id_usuario',
    id_cronograma: 'id_cronograma'
  };

  export type Avaliacao_aulaScalarFieldEnum = (typeof Avaliacao_aulaScalarFieldEnum)[keyof typeof Avaliacao_aulaScalarFieldEnum]


  export const CronogramaScalarFieldEnum: {
    id: 'id',
    disciplina_id: 'disciplina_id',
    nome_aula: 'nome_aula',
    data: 'data'
  };

  export type CronogramaScalarFieldEnum = (typeof CronogramaScalarFieldEnum)[keyof typeof CronogramaScalarFieldEnum]


  export const CursosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type CursosScalarFieldEnum = (typeof CursosScalarFieldEnum)[keyof typeof CursosScalarFieldEnum]


  export const Disciplina_cursoScalarFieldEnum: {
    id: 'id',
    curso_id: 'curso_id',
    disciplina_id: 'disciplina_id'
  };

  export type Disciplina_cursoScalarFieldEnum = (typeof Disciplina_cursoScalarFieldEnum)[keyof typeof Disciplina_cursoScalarFieldEnum]


  export const DisciplinasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type DisciplinasScalarFieldEnum = (typeof DisciplinasScalarFieldEnum)[keyof typeof DisciplinasScalarFieldEnum]


  export const ExerciciosScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    enunciado: 'enunciado',
    disciplina_id: 'disciplina_id',
    criado_em: 'criado_em'
  };

  export type ExerciciosScalarFieldEnum = (typeof ExerciciosScalarFieldEnum)[keyof typeof ExerciciosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    tipo: 'tipo',
    criado_em: 'criado_em'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const cronogramaOrderByRelevanceFieldEnum: {
    nome_aula: 'nome_aula'
  };

  export type cronogramaOrderByRelevanceFieldEnum = (typeof cronogramaOrderByRelevanceFieldEnum)[keyof typeof cronogramaOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const cursosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type cursosOrderByRelevanceFieldEnum = (typeof cursosOrderByRelevanceFieldEnum)[keyof typeof cursosOrderByRelevanceFieldEnum]


  export const disciplinasOrderByRelevanceFieldEnum: {
    nome: 'nome',
    descricao: 'descricao'
  };

  export type disciplinasOrderByRelevanceFieldEnum = (typeof disciplinasOrderByRelevanceFieldEnum)[keyof typeof disciplinasOrderByRelevanceFieldEnum]


  export const exerciciosOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    enunciado: 'enunciado'
  };

  export type exerciciosOrderByRelevanceFieldEnum = (typeof exerciciosOrderByRelevanceFieldEnum)[keyof typeof exerciciosOrderByRelevanceFieldEnum]


  export const usuariosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha: 'senha'
  };

  export type usuariosOrderByRelevanceFieldEnum = (typeof usuariosOrderByRelevanceFieldEnum)[keyof typeof usuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'usuarios_tipo'
   */
  export type Enumusuarios_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'usuarios_tipo'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type avaliacao_aulaWhereInput = {
    AND?: avaliacao_aulaWhereInput | avaliacao_aulaWhereInput[]
    OR?: avaliacao_aulaWhereInput[]
    NOT?: avaliacao_aulaWhereInput | avaliacao_aulaWhereInput[]
    id?: IntFilter<"avaliacao_aula"> | number
    id_usuario?: IntFilter<"avaliacao_aula"> | number
    id_cronograma?: IntFilter<"avaliacao_aula"> | number
    cronograma?: XOR<CronogramaScalarRelationFilter, cronogramaWhereInput>
  }

  export type avaliacao_aulaOrderByWithRelationInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_cronograma?: SortOrder
    cronograma?: cronogramaOrderByWithRelationInput
  }

  export type avaliacao_aulaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: avaliacao_aulaWhereInput | avaliacao_aulaWhereInput[]
    OR?: avaliacao_aulaWhereInput[]
    NOT?: avaliacao_aulaWhereInput | avaliacao_aulaWhereInput[]
    id_usuario?: IntFilter<"avaliacao_aula"> | number
    id_cronograma?: IntFilter<"avaliacao_aula"> | number
    cronograma?: XOR<CronogramaScalarRelationFilter, cronogramaWhereInput>
  }, "id">

  export type avaliacao_aulaOrderByWithAggregationInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_cronograma?: SortOrder
    _count?: avaliacao_aulaCountOrderByAggregateInput
    _avg?: avaliacao_aulaAvgOrderByAggregateInput
    _max?: avaliacao_aulaMaxOrderByAggregateInput
    _min?: avaliacao_aulaMinOrderByAggregateInput
    _sum?: avaliacao_aulaSumOrderByAggregateInput
  }

  export type avaliacao_aulaScalarWhereWithAggregatesInput = {
    AND?: avaliacao_aulaScalarWhereWithAggregatesInput | avaliacao_aulaScalarWhereWithAggregatesInput[]
    OR?: avaliacao_aulaScalarWhereWithAggregatesInput[]
    NOT?: avaliacao_aulaScalarWhereWithAggregatesInput | avaliacao_aulaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"avaliacao_aula"> | number
    id_usuario?: IntWithAggregatesFilter<"avaliacao_aula"> | number
    id_cronograma?: IntWithAggregatesFilter<"avaliacao_aula"> | number
  }

  export type cronogramaWhereInput = {
    AND?: cronogramaWhereInput | cronogramaWhereInput[]
    OR?: cronogramaWhereInput[]
    NOT?: cronogramaWhereInput | cronogramaWhereInput[]
    id?: IntFilter<"cronograma"> | number
    disciplina_id?: IntFilter<"cronograma"> | number
    nome_aula?: StringFilter<"cronograma"> | string
    data?: DateTimeFilter<"cronograma"> | Date | string
    avaliacao_aula?: Avaliacao_aulaListRelationFilter
    disciplinas?: XOR<DisciplinasScalarRelationFilter, disciplinasWhereInput>
  }

  export type cronogramaOrderByWithRelationInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
    nome_aula?: SortOrder
    data?: SortOrder
    avaliacao_aula?: avaliacao_aulaOrderByRelationAggregateInput
    disciplinas?: disciplinasOrderByWithRelationInput
    _relevance?: cronogramaOrderByRelevanceInput
  }

  export type cronogramaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cronogramaWhereInput | cronogramaWhereInput[]
    OR?: cronogramaWhereInput[]
    NOT?: cronogramaWhereInput | cronogramaWhereInput[]
    disciplina_id?: IntFilter<"cronograma"> | number
    nome_aula?: StringFilter<"cronograma"> | string
    data?: DateTimeFilter<"cronograma"> | Date | string
    avaliacao_aula?: Avaliacao_aulaListRelationFilter
    disciplinas?: XOR<DisciplinasScalarRelationFilter, disciplinasWhereInput>
  }, "id">

  export type cronogramaOrderByWithAggregationInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
    nome_aula?: SortOrder
    data?: SortOrder
    _count?: cronogramaCountOrderByAggregateInput
    _avg?: cronogramaAvgOrderByAggregateInput
    _max?: cronogramaMaxOrderByAggregateInput
    _min?: cronogramaMinOrderByAggregateInput
    _sum?: cronogramaSumOrderByAggregateInput
  }

  export type cronogramaScalarWhereWithAggregatesInput = {
    AND?: cronogramaScalarWhereWithAggregatesInput | cronogramaScalarWhereWithAggregatesInput[]
    OR?: cronogramaScalarWhereWithAggregatesInput[]
    NOT?: cronogramaScalarWhereWithAggregatesInput | cronogramaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cronograma"> | number
    disciplina_id?: IntWithAggregatesFilter<"cronograma"> | number
    nome_aula?: StringWithAggregatesFilter<"cronograma"> | string
    data?: DateTimeWithAggregatesFilter<"cronograma"> | Date | string
  }

  export type cursosWhereInput = {
    AND?: cursosWhereInput | cursosWhereInput[]
    OR?: cursosWhereInput[]
    NOT?: cursosWhereInput | cursosWhereInput[]
    id?: IntFilter<"cursos"> | number
    nome?: StringFilter<"cursos"> | string
    descricao?: StringNullableFilter<"cursos"> | string | null
    disciplina_curso?: Disciplina_cursoListRelationFilter
  }

  export type cursosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    disciplina_curso?: disciplina_cursoOrderByRelationAggregateInput
    _relevance?: cursosOrderByRelevanceInput
  }

  export type cursosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cursosWhereInput | cursosWhereInput[]
    OR?: cursosWhereInput[]
    NOT?: cursosWhereInput | cursosWhereInput[]
    nome?: StringFilter<"cursos"> | string
    descricao?: StringNullableFilter<"cursos"> | string | null
    disciplina_curso?: Disciplina_cursoListRelationFilter
  }, "id">

  export type cursosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: cursosCountOrderByAggregateInput
    _avg?: cursosAvgOrderByAggregateInput
    _max?: cursosMaxOrderByAggregateInput
    _min?: cursosMinOrderByAggregateInput
    _sum?: cursosSumOrderByAggregateInput
  }

  export type cursosScalarWhereWithAggregatesInput = {
    AND?: cursosScalarWhereWithAggregatesInput | cursosScalarWhereWithAggregatesInput[]
    OR?: cursosScalarWhereWithAggregatesInput[]
    NOT?: cursosScalarWhereWithAggregatesInput | cursosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cursos"> | number
    nome?: StringWithAggregatesFilter<"cursos"> | string
    descricao?: StringNullableWithAggregatesFilter<"cursos"> | string | null
  }

  export type disciplina_cursoWhereInput = {
    AND?: disciplina_cursoWhereInput | disciplina_cursoWhereInput[]
    OR?: disciplina_cursoWhereInput[]
    NOT?: disciplina_cursoWhereInput | disciplina_cursoWhereInput[]
    id?: IntFilter<"disciplina_curso"> | number
    curso_id?: IntFilter<"disciplina_curso"> | number
    disciplina_id?: IntFilter<"disciplina_curso"> | number
    cursos?: XOR<CursosScalarRelationFilter, cursosWhereInput>
    disciplinas?: XOR<DisciplinasScalarRelationFilter, disciplinasWhereInput>
  }

  export type disciplina_cursoOrderByWithRelationInput = {
    id?: SortOrder
    curso_id?: SortOrder
    disciplina_id?: SortOrder
    cursos?: cursosOrderByWithRelationInput
    disciplinas?: disciplinasOrderByWithRelationInput
  }

  export type disciplina_cursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: disciplina_cursoWhereInput | disciplina_cursoWhereInput[]
    OR?: disciplina_cursoWhereInput[]
    NOT?: disciplina_cursoWhereInput | disciplina_cursoWhereInput[]
    curso_id?: IntFilter<"disciplina_curso"> | number
    disciplina_id?: IntFilter<"disciplina_curso"> | number
    cursos?: XOR<CursosScalarRelationFilter, cursosWhereInput>
    disciplinas?: XOR<DisciplinasScalarRelationFilter, disciplinasWhereInput>
  }, "id">

  export type disciplina_cursoOrderByWithAggregationInput = {
    id?: SortOrder
    curso_id?: SortOrder
    disciplina_id?: SortOrder
    _count?: disciplina_cursoCountOrderByAggregateInput
    _avg?: disciplina_cursoAvgOrderByAggregateInput
    _max?: disciplina_cursoMaxOrderByAggregateInput
    _min?: disciplina_cursoMinOrderByAggregateInput
    _sum?: disciplina_cursoSumOrderByAggregateInput
  }

  export type disciplina_cursoScalarWhereWithAggregatesInput = {
    AND?: disciplina_cursoScalarWhereWithAggregatesInput | disciplina_cursoScalarWhereWithAggregatesInput[]
    OR?: disciplina_cursoScalarWhereWithAggregatesInput[]
    NOT?: disciplina_cursoScalarWhereWithAggregatesInput | disciplina_cursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"disciplina_curso"> | number
    curso_id?: IntWithAggregatesFilter<"disciplina_curso"> | number
    disciplina_id?: IntWithAggregatesFilter<"disciplina_curso"> | number
  }

  export type disciplinasWhereInput = {
    AND?: disciplinasWhereInput | disciplinasWhereInput[]
    OR?: disciplinasWhereInput[]
    NOT?: disciplinasWhereInput | disciplinasWhereInput[]
    id?: IntFilter<"disciplinas"> | number
    nome?: StringFilter<"disciplinas"> | string
    descricao?: StringNullableFilter<"disciplinas"> | string | null
    cronograma?: CronogramaListRelationFilter
    disciplina_curso?: Disciplina_cursoListRelationFilter
    exercicios?: ExerciciosListRelationFilter
  }

  export type disciplinasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    cronograma?: cronogramaOrderByRelationAggregateInput
    disciplina_curso?: disciplina_cursoOrderByRelationAggregateInput
    exercicios?: exerciciosOrderByRelationAggregateInput
    _relevance?: disciplinasOrderByRelevanceInput
  }

  export type disciplinasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: disciplinasWhereInput | disciplinasWhereInput[]
    OR?: disciplinasWhereInput[]
    NOT?: disciplinasWhereInput | disciplinasWhereInput[]
    nome?: StringFilter<"disciplinas"> | string
    descricao?: StringNullableFilter<"disciplinas"> | string | null
    cronograma?: CronogramaListRelationFilter
    disciplina_curso?: Disciplina_cursoListRelationFilter
    exercicios?: ExerciciosListRelationFilter
  }, "id">

  export type disciplinasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: disciplinasCountOrderByAggregateInput
    _avg?: disciplinasAvgOrderByAggregateInput
    _max?: disciplinasMaxOrderByAggregateInput
    _min?: disciplinasMinOrderByAggregateInput
    _sum?: disciplinasSumOrderByAggregateInput
  }

  export type disciplinasScalarWhereWithAggregatesInput = {
    AND?: disciplinasScalarWhereWithAggregatesInput | disciplinasScalarWhereWithAggregatesInput[]
    OR?: disciplinasScalarWhereWithAggregatesInput[]
    NOT?: disciplinasScalarWhereWithAggregatesInput | disciplinasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"disciplinas"> | number
    nome?: StringWithAggregatesFilter<"disciplinas"> | string
    descricao?: StringNullableWithAggregatesFilter<"disciplinas"> | string | null
  }

  export type exerciciosWhereInput = {
    AND?: exerciciosWhereInput | exerciciosWhereInput[]
    OR?: exerciciosWhereInput[]
    NOT?: exerciciosWhereInput | exerciciosWhereInput[]
    id?: IntFilter<"exercicios"> | number
    titulo?: StringFilter<"exercicios"> | string
    enunciado?: StringFilter<"exercicios"> | string
    disciplina_id?: IntFilter<"exercicios"> | number
    criado_em?: DateTimeNullableFilter<"exercicios"> | Date | string | null
    disciplinas?: XOR<DisciplinasScalarRelationFilter, disciplinasWhereInput>
  }

  export type exerciciosOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    enunciado?: SortOrder
    disciplina_id?: SortOrder
    criado_em?: SortOrderInput | SortOrder
    disciplinas?: disciplinasOrderByWithRelationInput
    _relevance?: exerciciosOrderByRelevanceInput
  }

  export type exerciciosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: exerciciosWhereInput | exerciciosWhereInput[]
    OR?: exerciciosWhereInput[]
    NOT?: exerciciosWhereInput | exerciciosWhereInput[]
    titulo?: StringFilter<"exercicios"> | string
    enunciado?: StringFilter<"exercicios"> | string
    disciplina_id?: IntFilter<"exercicios"> | number
    criado_em?: DateTimeNullableFilter<"exercicios"> | Date | string | null
    disciplinas?: XOR<DisciplinasScalarRelationFilter, disciplinasWhereInput>
  }, "id">

  export type exerciciosOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    enunciado?: SortOrder
    disciplina_id?: SortOrder
    criado_em?: SortOrderInput | SortOrder
    _count?: exerciciosCountOrderByAggregateInput
    _avg?: exerciciosAvgOrderByAggregateInput
    _max?: exerciciosMaxOrderByAggregateInput
    _min?: exerciciosMinOrderByAggregateInput
    _sum?: exerciciosSumOrderByAggregateInput
  }

  export type exerciciosScalarWhereWithAggregatesInput = {
    AND?: exerciciosScalarWhereWithAggregatesInput | exerciciosScalarWhereWithAggregatesInput[]
    OR?: exerciciosScalarWhereWithAggregatesInput[]
    NOT?: exerciciosScalarWhereWithAggregatesInput | exerciciosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"exercicios"> | number
    titulo?: StringWithAggregatesFilter<"exercicios"> | string
    enunciado?: StringWithAggregatesFilter<"exercicios"> | string
    disciplina_id?: IntWithAggregatesFilter<"exercicios"> | number
    criado_em?: DateTimeNullableWithAggregatesFilter<"exercicios"> | Date | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    senha?: StringFilter<"usuarios"> | string
    tipo?: Enumusuarios_tipoFilter<"usuarios"> | $Enums.usuarios_tipo
    criado_em?: DateTimeNullableFilter<"usuarios"> | Date | string | null
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    criado_em?: SortOrderInput | SortOrder
    _relevance?: usuariosOrderByRelevanceInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringFilter<"usuarios"> | string
    senha?: StringFilter<"usuarios"> | string
    tipo?: Enumusuarios_tipoFilter<"usuarios"> | $Enums.usuarios_tipo
    criado_em?: DateTimeNullableFilter<"usuarios"> | Date | string | null
  }, "id" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    criado_em?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    senha?: StringWithAggregatesFilter<"usuarios"> | string
    tipo?: Enumusuarios_tipoWithAggregatesFilter<"usuarios"> | $Enums.usuarios_tipo
    criado_em?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
  }

  export type avaliacao_aulaCreateInput = {
    id_usuario: number
    cronograma: cronogramaCreateNestedOneWithoutAvaliacao_aulaInput
  }

  export type avaliacao_aulaUncheckedCreateInput = {
    id?: number
    id_usuario: number
    id_cronograma: number
  }

  export type avaliacao_aulaUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    cronograma?: cronogramaUpdateOneRequiredWithoutAvaliacao_aulaNestedInput
  }

  export type avaliacao_aulaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_cronograma?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacao_aulaCreateManyInput = {
    id?: number
    id_usuario: number
    id_cronograma: number
  }

  export type avaliacao_aulaUpdateManyMutationInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacao_aulaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_cronograma?: IntFieldUpdateOperationsInput | number
  }

  export type cronogramaCreateInput = {
    nome_aula: string
    data: Date | string
    avaliacao_aula?: avaliacao_aulaCreateNestedManyWithoutCronogramaInput
    disciplinas: disciplinasCreateNestedOneWithoutCronogramaInput
  }

  export type cronogramaUncheckedCreateInput = {
    id?: number
    disciplina_id: number
    nome_aula: string
    data: Date | string
    avaliacao_aula?: avaliacao_aulaUncheckedCreateNestedManyWithoutCronogramaInput
  }

  export type cronogramaUpdateInput = {
    nome_aula?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao_aula?: avaliacao_aulaUpdateManyWithoutCronogramaNestedInput
    disciplinas?: disciplinasUpdateOneRequiredWithoutCronogramaNestedInput
  }

  export type cronogramaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    nome_aula?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao_aula?: avaliacao_aulaUncheckedUpdateManyWithoutCronogramaNestedInput
  }

  export type cronogramaCreateManyInput = {
    id?: number
    disciplina_id: number
    nome_aula: string
    data: Date | string
  }

  export type cronogramaUpdateManyMutationInput = {
    nome_aula?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cronogramaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    nome_aula?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cursosCreateInput = {
    nome: string
    descricao?: string | null
    disciplina_curso?: disciplina_cursoCreateNestedManyWithoutCursosInput
  }

  export type cursosUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    disciplina_curso?: disciplina_cursoUncheckedCreateNestedManyWithoutCursosInput
  }

  export type cursosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    disciplina_curso?: disciplina_cursoUpdateManyWithoutCursosNestedInput
  }

  export type cursosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    disciplina_curso?: disciplina_cursoUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type cursosCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type cursosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cursosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type disciplina_cursoCreateInput = {
    cursos: cursosCreateNestedOneWithoutDisciplina_cursoInput
    disciplinas: disciplinasCreateNestedOneWithoutDisciplina_cursoInput
  }

  export type disciplina_cursoUncheckedCreateInput = {
    id?: number
    curso_id: number
    disciplina_id: number
  }

  export type disciplina_cursoUpdateInput = {
    cursos?: cursosUpdateOneRequiredWithoutDisciplina_cursoNestedInput
    disciplinas?: disciplinasUpdateOneRequiredWithoutDisciplina_cursoNestedInput
  }

  export type disciplina_cursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
  }

  export type disciplina_cursoCreateManyInput = {
    id?: number
    curso_id: number
    disciplina_id: number
  }

  export type disciplina_cursoUpdateManyMutationInput = {

  }

  export type disciplina_cursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
  }

  export type disciplinasCreateInput = {
    nome: string
    descricao?: string | null
    cronograma?: cronogramaCreateNestedManyWithoutDisciplinasInput
    disciplina_curso?: disciplina_cursoCreateNestedManyWithoutDisciplinasInput
    exercicios?: exerciciosCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    cronograma?: cronogramaUncheckedCreateNestedManyWithoutDisciplinasInput
    disciplina_curso?: disciplina_cursoUncheckedCreateNestedManyWithoutDisciplinasInput
    exercicios?: exerciciosUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cronograma?: cronogramaUpdateManyWithoutDisciplinasNestedInput
    disciplina_curso?: disciplina_cursoUpdateManyWithoutDisciplinasNestedInput
    exercicios?: exerciciosUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cronograma?: cronogramaUncheckedUpdateManyWithoutDisciplinasNestedInput
    disciplina_curso?: disciplina_cursoUncheckedUpdateManyWithoutDisciplinasNestedInput
    exercicios?: exerciciosUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type disciplinasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type disciplinasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type exerciciosCreateInput = {
    titulo: string
    enunciado: string
    criado_em?: Date | string | null
    disciplinas: disciplinasCreateNestedOneWithoutExerciciosInput
  }

  export type exerciciosUncheckedCreateInput = {
    id?: number
    titulo: string
    enunciado: string
    disciplina_id: number
    criado_em?: Date | string | null
  }

  export type exerciciosUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    disciplinas?: disciplinasUpdateOneRequiredWithoutExerciciosNestedInput
  }

  export type exerciciosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    disciplina_id?: IntFieldUpdateOperationsInput | number
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exerciciosCreateManyInput = {
    id?: number
    titulo: string
    enunciado: string
    disciplina_id: number
    criado_em?: Date | string | null
  }

  export type exerciciosUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exerciciosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    disciplina_id?: IntFieldUpdateOperationsInput | number
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateInput = {
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuarios_tipo
    criado_em?: Date | string | null
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuarios_tipo
    criado_em?: Date | string | null
  }

  export type usuariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuarios_tipoFieldUpdateOperationsInput | $Enums.usuarios_tipo
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuarios_tipoFieldUpdateOperationsInput | $Enums.usuarios_tipo
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    tipo: $Enums.usuarios_tipo
    criado_em?: Date | string | null
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuarios_tipoFieldUpdateOperationsInput | $Enums.usuarios_tipo
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: Enumusuarios_tipoFieldUpdateOperationsInput | $Enums.usuarios_tipo
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CronogramaScalarRelationFilter = {
    is?: cronogramaWhereInput
    isNot?: cronogramaWhereInput
  }

  export type avaliacao_aulaCountOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_cronograma?: SortOrder
  }

  export type avaliacao_aulaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_cronograma?: SortOrder
  }

  export type avaliacao_aulaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_cronograma?: SortOrder
  }

  export type avaliacao_aulaMinOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_cronograma?: SortOrder
  }

  export type avaliacao_aulaSumOrderByAggregateInput = {
    id?: SortOrder
    id_usuario?: SortOrder
    id_cronograma?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Avaliacao_aulaListRelationFilter = {
    every?: avaliacao_aulaWhereInput
    some?: avaliacao_aulaWhereInput
    none?: avaliacao_aulaWhereInput
  }

  export type DisciplinasScalarRelationFilter = {
    is?: disciplinasWhereInput
    isNot?: disciplinasWhereInput
  }

  export type avaliacao_aulaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cronogramaOrderByRelevanceInput = {
    fields: cronogramaOrderByRelevanceFieldEnum | cronogramaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cronogramaCountOrderByAggregateInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
    nome_aula?: SortOrder
    data?: SortOrder
  }

  export type cronogramaAvgOrderByAggregateInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
  }

  export type cronogramaMaxOrderByAggregateInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
    nome_aula?: SortOrder
    data?: SortOrder
  }

  export type cronogramaMinOrderByAggregateInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
    nome_aula?: SortOrder
    data?: SortOrder
  }

  export type cronogramaSumOrderByAggregateInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Disciplina_cursoListRelationFilter = {
    every?: disciplina_cursoWhereInput
    some?: disciplina_cursoWhereInput
    none?: disciplina_cursoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type disciplina_cursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cursosOrderByRelevanceInput = {
    fields: cursosOrderByRelevanceFieldEnum | cursosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cursosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type cursosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cursosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type cursosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type cursosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CursosScalarRelationFilter = {
    is?: cursosWhereInput
    isNot?: cursosWhereInput
  }

  export type disciplina_cursoCountOrderByAggregateInput = {
    id?: SortOrder
    curso_id?: SortOrder
    disciplina_id?: SortOrder
  }

  export type disciplina_cursoAvgOrderByAggregateInput = {
    id?: SortOrder
    curso_id?: SortOrder
    disciplina_id?: SortOrder
  }

  export type disciplina_cursoMaxOrderByAggregateInput = {
    id?: SortOrder
    curso_id?: SortOrder
    disciplina_id?: SortOrder
  }

  export type disciplina_cursoMinOrderByAggregateInput = {
    id?: SortOrder
    curso_id?: SortOrder
    disciplina_id?: SortOrder
  }

  export type disciplina_cursoSumOrderByAggregateInput = {
    id?: SortOrder
    curso_id?: SortOrder
    disciplina_id?: SortOrder
  }

  export type CronogramaListRelationFilter = {
    every?: cronogramaWhereInput
    some?: cronogramaWhereInput
    none?: cronogramaWhereInput
  }

  export type ExerciciosListRelationFilter = {
    every?: exerciciosWhereInput
    some?: exerciciosWhereInput
    none?: exerciciosWhereInput
  }

  export type cronogramaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type exerciciosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type disciplinasOrderByRelevanceInput = {
    fields: disciplinasOrderByRelevanceFieldEnum | disciplinasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type disciplinasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type disciplinasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type disciplinasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type disciplinasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type disciplinasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type exerciciosOrderByRelevanceInput = {
    fields: exerciciosOrderByRelevanceFieldEnum | exerciciosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type exerciciosCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    enunciado?: SortOrder
    disciplina_id?: SortOrder
    criado_em?: SortOrder
  }

  export type exerciciosAvgOrderByAggregateInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
  }

  export type exerciciosMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    enunciado?: SortOrder
    disciplina_id?: SortOrder
    criado_em?: SortOrder
  }

  export type exerciciosMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    enunciado?: SortOrder
    disciplina_id?: SortOrder
    criado_em?: SortOrder
  }

  export type exerciciosSumOrderByAggregateInput = {
    id?: SortOrder
    disciplina_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Enumusuarios_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_tipo | Enumusuarios_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_tipo[]
    notIn?: $Enums.usuarios_tipo[]
    not?: NestedEnumusuarios_tipoFilter<$PrismaModel> | $Enums.usuarios_tipo
  }

  export type usuariosOrderByRelevanceInput = {
    fields: usuariosOrderByRelevanceFieldEnum | usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    criado_em?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    criado_em?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    criado_em?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusuarios_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_tipo | Enumusuarios_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_tipo[]
    notIn?: $Enums.usuarios_tipo[]
    not?: NestedEnumusuarios_tipoWithAggregatesFilter<$PrismaModel> | $Enums.usuarios_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuarios_tipoFilter<$PrismaModel>
    _max?: NestedEnumusuarios_tipoFilter<$PrismaModel>
  }

  export type cronogramaCreateNestedOneWithoutAvaliacao_aulaInput = {
    create?: XOR<cronogramaCreateWithoutAvaliacao_aulaInput, cronogramaUncheckedCreateWithoutAvaliacao_aulaInput>
    connectOrCreate?: cronogramaCreateOrConnectWithoutAvaliacao_aulaInput
    connect?: cronogramaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cronogramaUpdateOneRequiredWithoutAvaliacao_aulaNestedInput = {
    create?: XOR<cronogramaCreateWithoutAvaliacao_aulaInput, cronogramaUncheckedCreateWithoutAvaliacao_aulaInput>
    connectOrCreate?: cronogramaCreateOrConnectWithoutAvaliacao_aulaInput
    upsert?: cronogramaUpsertWithoutAvaliacao_aulaInput
    connect?: cronogramaWhereUniqueInput
    update?: XOR<XOR<cronogramaUpdateToOneWithWhereWithoutAvaliacao_aulaInput, cronogramaUpdateWithoutAvaliacao_aulaInput>, cronogramaUncheckedUpdateWithoutAvaliacao_aulaInput>
  }

  export type avaliacao_aulaCreateNestedManyWithoutCronogramaInput = {
    create?: XOR<avaliacao_aulaCreateWithoutCronogramaInput, avaliacao_aulaUncheckedCreateWithoutCronogramaInput> | avaliacao_aulaCreateWithoutCronogramaInput[] | avaliacao_aulaUncheckedCreateWithoutCronogramaInput[]
    connectOrCreate?: avaliacao_aulaCreateOrConnectWithoutCronogramaInput | avaliacao_aulaCreateOrConnectWithoutCronogramaInput[]
    createMany?: avaliacao_aulaCreateManyCronogramaInputEnvelope
    connect?: avaliacao_aulaWhereUniqueInput | avaliacao_aulaWhereUniqueInput[]
  }

  export type disciplinasCreateNestedOneWithoutCronogramaInput = {
    create?: XOR<disciplinasCreateWithoutCronogramaInput, disciplinasUncheckedCreateWithoutCronogramaInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutCronogramaInput
    connect?: disciplinasWhereUniqueInput
  }

  export type avaliacao_aulaUncheckedCreateNestedManyWithoutCronogramaInput = {
    create?: XOR<avaliacao_aulaCreateWithoutCronogramaInput, avaliacao_aulaUncheckedCreateWithoutCronogramaInput> | avaliacao_aulaCreateWithoutCronogramaInput[] | avaliacao_aulaUncheckedCreateWithoutCronogramaInput[]
    connectOrCreate?: avaliacao_aulaCreateOrConnectWithoutCronogramaInput | avaliacao_aulaCreateOrConnectWithoutCronogramaInput[]
    createMany?: avaliacao_aulaCreateManyCronogramaInputEnvelope
    connect?: avaliacao_aulaWhereUniqueInput | avaliacao_aulaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type avaliacao_aulaUpdateManyWithoutCronogramaNestedInput = {
    create?: XOR<avaliacao_aulaCreateWithoutCronogramaInput, avaliacao_aulaUncheckedCreateWithoutCronogramaInput> | avaliacao_aulaCreateWithoutCronogramaInput[] | avaliacao_aulaUncheckedCreateWithoutCronogramaInput[]
    connectOrCreate?: avaliacao_aulaCreateOrConnectWithoutCronogramaInput | avaliacao_aulaCreateOrConnectWithoutCronogramaInput[]
    upsert?: avaliacao_aulaUpsertWithWhereUniqueWithoutCronogramaInput | avaliacao_aulaUpsertWithWhereUniqueWithoutCronogramaInput[]
    createMany?: avaliacao_aulaCreateManyCronogramaInputEnvelope
    set?: avaliacao_aulaWhereUniqueInput | avaliacao_aulaWhereUniqueInput[]
    disconnect?: avaliacao_aulaWhereUniqueInput | avaliacao_aulaWhereUniqueInput[]
    delete?: avaliacao_aulaWhereUniqueInput | avaliacao_aulaWhereUniqueInput[]
    connect?: avaliacao_aulaWhereUniqueInput | avaliacao_aulaWhereUniqueInput[]
    update?: avaliacao_aulaUpdateWithWhereUniqueWithoutCronogramaInput | avaliacao_aulaUpdateWithWhereUniqueWithoutCronogramaInput[]
    updateMany?: avaliacao_aulaUpdateManyWithWhereWithoutCronogramaInput | avaliacao_aulaUpdateManyWithWhereWithoutCronogramaInput[]
    deleteMany?: avaliacao_aulaScalarWhereInput | avaliacao_aulaScalarWhereInput[]
  }

  export type disciplinasUpdateOneRequiredWithoutCronogramaNestedInput = {
    create?: XOR<disciplinasCreateWithoutCronogramaInput, disciplinasUncheckedCreateWithoutCronogramaInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutCronogramaInput
    upsert?: disciplinasUpsertWithoutCronogramaInput
    connect?: disciplinasWhereUniqueInput
    update?: XOR<XOR<disciplinasUpdateToOneWithWhereWithoutCronogramaInput, disciplinasUpdateWithoutCronogramaInput>, disciplinasUncheckedUpdateWithoutCronogramaInput>
  }

  export type avaliacao_aulaUncheckedUpdateManyWithoutCronogramaNestedInput = {
    create?: XOR<avaliacao_aulaCreateWithoutCronogramaInput, avaliacao_aulaUncheckedCreateWithoutCronogramaInput> | avaliacao_aulaCreateWithoutCronogramaInput[] | avaliacao_aulaUncheckedCreateWithoutCronogramaInput[]
    connectOrCreate?: avaliacao_aulaCreateOrConnectWithoutCronogramaInput | avaliacao_aulaCreateOrConnectWithoutCronogramaInput[]
    upsert?: avaliacao_aulaUpsertWithWhereUniqueWithoutCronogramaInput | avaliacao_aulaUpsertWithWhereUniqueWithoutCronogramaInput[]
    createMany?: avaliacao_aulaCreateManyCronogramaInputEnvelope
    set?: avaliacao_aulaWhereUniqueInput | avaliacao_aulaWhereUniqueInput[]
    disconnect?: avaliacao_aulaWhereUniqueInput | avaliacao_aulaWhereUniqueInput[]
    delete?: avaliacao_aulaWhereUniqueInput | avaliacao_aulaWhereUniqueInput[]
    connect?: avaliacao_aulaWhereUniqueInput | avaliacao_aulaWhereUniqueInput[]
    update?: avaliacao_aulaUpdateWithWhereUniqueWithoutCronogramaInput | avaliacao_aulaUpdateWithWhereUniqueWithoutCronogramaInput[]
    updateMany?: avaliacao_aulaUpdateManyWithWhereWithoutCronogramaInput | avaliacao_aulaUpdateManyWithWhereWithoutCronogramaInput[]
    deleteMany?: avaliacao_aulaScalarWhereInput | avaliacao_aulaScalarWhereInput[]
  }

  export type disciplina_cursoCreateNestedManyWithoutCursosInput = {
    create?: XOR<disciplina_cursoCreateWithoutCursosInput, disciplina_cursoUncheckedCreateWithoutCursosInput> | disciplina_cursoCreateWithoutCursosInput[] | disciplina_cursoUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: disciplina_cursoCreateOrConnectWithoutCursosInput | disciplina_cursoCreateOrConnectWithoutCursosInput[]
    createMany?: disciplina_cursoCreateManyCursosInputEnvelope
    connect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
  }

  export type disciplina_cursoUncheckedCreateNestedManyWithoutCursosInput = {
    create?: XOR<disciplina_cursoCreateWithoutCursosInput, disciplina_cursoUncheckedCreateWithoutCursosInput> | disciplina_cursoCreateWithoutCursosInput[] | disciplina_cursoUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: disciplina_cursoCreateOrConnectWithoutCursosInput | disciplina_cursoCreateOrConnectWithoutCursosInput[]
    createMany?: disciplina_cursoCreateManyCursosInputEnvelope
    connect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type disciplina_cursoUpdateManyWithoutCursosNestedInput = {
    create?: XOR<disciplina_cursoCreateWithoutCursosInput, disciplina_cursoUncheckedCreateWithoutCursosInput> | disciplina_cursoCreateWithoutCursosInput[] | disciplina_cursoUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: disciplina_cursoCreateOrConnectWithoutCursosInput | disciplina_cursoCreateOrConnectWithoutCursosInput[]
    upsert?: disciplina_cursoUpsertWithWhereUniqueWithoutCursosInput | disciplina_cursoUpsertWithWhereUniqueWithoutCursosInput[]
    createMany?: disciplina_cursoCreateManyCursosInputEnvelope
    set?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    disconnect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    delete?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    connect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    update?: disciplina_cursoUpdateWithWhereUniqueWithoutCursosInput | disciplina_cursoUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: disciplina_cursoUpdateManyWithWhereWithoutCursosInput | disciplina_cursoUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: disciplina_cursoScalarWhereInput | disciplina_cursoScalarWhereInput[]
  }

  export type disciplina_cursoUncheckedUpdateManyWithoutCursosNestedInput = {
    create?: XOR<disciplina_cursoCreateWithoutCursosInput, disciplina_cursoUncheckedCreateWithoutCursosInput> | disciplina_cursoCreateWithoutCursosInput[] | disciplina_cursoUncheckedCreateWithoutCursosInput[]
    connectOrCreate?: disciplina_cursoCreateOrConnectWithoutCursosInput | disciplina_cursoCreateOrConnectWithoutCursosInput[]
    upsert?: disciplina_cursoUpsertWithWhereUniqueWithoutCursosInput | disciplina_cursoUpsertWithWhereUniqueWithoutCursosInput[]
    createMany?: disciplina_cursoCreateManyCursosInputEnvelope
    set?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    disconnect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    delete?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    connect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    update?: disciplina_cursoUpdateWithWhereUniqueWithoutCursosInput | disciplina_cursoUpdateWithWhereUniqueWithoutCursosInput[]
    updateMany?: disciplina_cursoUpdateManyWithWhereWithoutCursosInput | disciplina_cursoUpdateManyWithWhereWithoutCursosInput[]
    deleteMany?: disciplina_cursoScalarWhereInput | disciplina_cursoScalarWhereInput[]
  }

  export type cursosCreateNestedOneWithoutDisciplina_cursoInput = {
    create?: XOR<cursosCreateWithoutDisciplina_cursoInput, cursosUncheckedCreateWithoutDisciplina_cursoInput>
    connectOrCreate?: cursosCreateOrConnectWithoutDisciplina_cursoInput
    connect?: cursosWhereUniqueInput
  }

  export type disciplinasCreateNestedOneWithoutDisciplina_cursoInput = {
    create?: XOR<disciplinasCreateWithoutDisciplina_cursoInput, disciplinasUncheckedCreateWithoutDisciplina_cursoInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutDisciplina_cursoInput
    connect?: disciplinasWhereUniqueInput
  }

  export type cursosUpdateOneRequiredWithoutDisciplina_cursoNestedInput = {
    create?: XOR<cursosCreateWithoutDisciplina_cursoInput, cursosUncheckedCreateWithoutDisciplina_cursoInput>
    connectOrCreate?: cursosCreateOrConnectWithoutDisciplina_cursoInput
    upsert?: cursosUpsertWithoutDisciplina_cursoInput
    connect?: cursosWhereUniqueInput
    update?: XOR<XOR<cursosUpdateToOneWithWhereWithoutDisciplina_cursoInput, cursosUpdateWithoutDisciplina_cursoInput>, cursosUncheckedUpdateWithoutDisciplina_cursoInput>
  }

  export type disciplinasUpdateOneRequiredWithoutDisciplina_cursoNestedInput = {
    create?: XOR<disciplinasCreateWithoutDisciplina_cursoInput, disciplinasUncheckedCreateWithoutDisciplina_cursoInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutDisciplina_cursoInput
    upsert?: disciplinasUpsertWithoutDisciplina_cursoInput
    connect?: disciplinasWhereUniqueInput
    update?: XOR<XOR<disciplinasUpdateToOneWithWhereWithoutDisciplina_cursoInput, disciplinasUpdateWithoutDisciplina_cursoInput>, disciplinasUncheckedUpdateWithoutDisciplina_cursoInput>
  }

  export type cronogramaCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<cronogramaCreateWithoutDisciplinasInput, cronogramaUncheckedCreateWithoutDisciplinasInput> | cronogramaCreateWithoutDisciplinasInput[] | cronogramaUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: cronogramaCreateOrConnectWithoutDisciplinasInput | cronogramaCreateOrConnectWithoutDisciplinasInput[]
    createMany?: cronogramaCreateManyDisciplinasInputEnvelope
    connect?: cronogramaWhereUniqueInput | cronogramaWhereUniqueInput[]
  }

  export type disciplina_cursoCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<disciplina_cursoCreateWithoutDisciplinasInput, disciplina_cursoUncheckedCreateWithoutDisciplinasInput> | disciplina_cursoCreateWithoutDisciplinasInput[] | disciplina_cursoUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: disciplina_cursoCreateOrConnectWithoutDisciplinasInput | disciplina_cursoCreateOrConnectWithoutDisciplinasInput[]
    createMany?: disciplina_cursoCreateManyDisciplinasInputEnvelope
    connect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
  }

  export type exerciciosCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<exerciciosCreateWithoutDisciplinasInput, exerciciosUncheckedCreateWithoutDisciplinasInput> | exerciciosCreateWithoutDisciplinasInput[] | exerciciosUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: exerciciosCreateOrConnectWithoutDisciplinasInput | exerciciosCreateOrConnectWithoutDisciplinasInput[]
    createMany?: exerciciosCreateManyDisciplinasInputEnvelope
    connect?: exerciciosWhereUniqueInput | exerciciosWhereUniqueInput[]
  }

  export type cronogramaUncheckedCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<cronogramaCreateWithoutDisciplinasInput, cronogramaUncheckedCreateWithoutDisciplinasInput> | cronogramaCreateWithoutDisciplinasInput[] | cronogramaUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: cronogramaCreateOrConnectWithoutDisciplinasInput | cronogramaCreateOrConnectWithoutDisciplinasInput[]
    createMany?: cronogramaCreateManyDisciplinasInputEnvelope
    connect?: cronogramaWhereUniqueInput | cronogramaWhereUniqueInput[]
  }

  export type disciplina_cursoUncheckedCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<disciplina_cursoCreateWithoutDisciplinasInput, disciplina_cursoUncheckedCreateWithoutDisciplinasInput> | disciplina_cursoCreateWithoutDisciplinasInput[] | disciplina_cursoUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: disciplina_cursoCreateOrConnectWithoutDisciplinasInput | disciplina_cursoCreateOrConnectWithoutDisciplinasInput[]
    createMany?: disciplina_cursoCreateManyDisciplinasInputEnvelope
    connect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
  }

  export type exerciciosUncheckedCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<exerciciosCreateWithoutDisciplinasInput, exerciciosUncheckedCreateWithoutDisciplinasInput> | exerciciosCreateWithoutDisciplinasInput[] | exerciciosUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: exerciciosCreateOrConnectWithoutDisciplinasInput | exerciciosCreateOrConnectWithoutDisciplinasInput[]
    createMany?: exerciciosCreateManyDisciplinasInputEnvelope
    connect?: exerciciosWhereUniqueInput | exerciciosWhereUniqueInput[]
  }

  export type cronogramaUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<cronogramaCreateWithoutDisciplinasInput, cronogramaUncheckedCreateWithoutDisciplinasInput> | cronogramaCreateWithoutDisciplinasInput[] | cronogramaUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: cronogramaCreateOrConnectWithoutDisciplinasInput | cronogramaCreateOrConnectWithoutDisciplinasInput[]
    upsert?: cronogramaUpsertWithWhereUniqueWithoutDisciplinasInput | cronogramaUpsertWithWhereUniqueWithoutDisciplinasInput[]
    createMany?: cronogramaCreateManyDisciplinasInputEnvelope
    set?: cronogramaWhereUniqueInput | cronogramaWhereUniqueInput[]
    disconnect?: cronogramaWhereUniqueInput | cronogramaWhereUniqueInput[]
    delete?: cronogramaWhereUniqueInput | cronogramaWhereUniqueInput[]
    connect?: cronogramaWhereUniqueInput | cronogramaWhereUniqueInput[]
    update?: cronogramaUpdateWithWhereUniqueWithoutDisciplinasInput | cronogramaUpdateWithWhereUniqueWithoutDisciplinasInput[]
    updateMany?: cronogramaUpdateManyWithWhereWithoutDisciplinasInput | cronogramaUpdateManyWithWhereWithoutDisciplinasInput[]
    deleteMany?: cronogramaScalarWhereInput | cronogramaScalarWhereInput[]
  }

  export type disciplina_cursoUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<disciplina_cursoCreateWithoutDisciplinasInput, disciplina_cursoUncheckedCreateWithoutDisciplinasInput> | disciplina_cursoCreateWithoutDisciplinasInput[] | disciplina_cursoUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: disciplina_cursoCreateOrConnectWithoutDisciplinasInput | disciplina_cursoCreateOrConnectWithoutDisciplinasInput[]
    upsert?: disciplina_cursoUpsertWithWhereUniqueWithoutDisciplinasInput | disciplina_cursoUpsertWithWhereUniqueWithoutDisciplinasInput[]
    createMany?: disciplina_cursoCreateManyDisciplinasInputEnvelope
    set?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    disconnect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    delete?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    connect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    update?: disciplina_cursoUpdateWithWhereUniqueWithoutDisciplinasInput | disciplina_cursoUpdateWithWhereUniqueWithoutDisciplinasInput[]
    updateMany?: disciplina_cursoUpdateManyWithWhereWithoutDisciplinasInput | disciplina_cursoUpdateManyWithWhereWithoutDisciplinasInput[]
    deleteMany?: disciplina_cursoScalarWhereInput | disciplina_cursoScalarWhereInput[]
  }

  export type exerciciosUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<exerciciosCreateWithoutDisciplinasInput, exerciciosUncheckedCreateWithoutDisciplinasInput> | exerciciosCreateWithoutDisciplinasInput[] | exerciciosUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: exerciciosCreateOrConnectWithoutDisciplinasInput | exerciciosCreateOrConnectWithoutDisciplinasInput[]
    upsert?: exerciciosUpsertWithWhereUniqueWithoutDisciplinasInput | exerciciosUpsertWithWhereUniqueWithoutDisciplinasInput[]
    createMany?: exerciciosCreateManyDisciplinasInputEnvelope
    set?: exerciciosWhereUniqueInput | exerciciosWhereUniqueInput[]
    disconnect?: exerciciosWhereUniqueInput | exerciciosWhereUniqueInput[]
    delete?: exerciciosWhereUniqueInput | exerciciosWhereUniqueInput[]
    connect?: exerciciosWhereUniqueInput | exerciciosWhereUniqueInput[]
    update?: exerciciosUpdateWithWhereUniqueWithoutDisciplinasInput | exerciciosUpdateWithWhereUniqueWithoutDisciplinasInput[]
    updateMany?: exerciciosUpdateManyWithWhereWithoutDisciplinasInput | exerciciosUpdateManyWithWhereWithoutDisciplinasInput[]
    deleteMany?: exerciciosScalarWhereInput | exerciciosScalarWhereInput[]
  }

  export type cronogramaUncheckedUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<cronogramaCreateWithoutDisciplinasInput, cronogramaUncheckedCreateWithoutDisciplinasInput> | cronogramaCreateWithoutDisciplinasInput[] | cronogramaUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: cronogramaCreateOrConnectWithoutDisciplinasInput | cronogramaCreateOrConnectWithoutDisciplinasInput[]
    upsert?: cronogramaUpsertWithWhereUniqueWithoutDisciplinasInput | cronogramaUpsertWithWhereUniqueWithoutDisciplinasInput[]
    createMany?: cronogramaCreateManyDisciplinasInputEnvelope
    set?: cronogramaWhereUniqueInput | cronogramaWhereUniqueInput[]
    disconnect?: cronogramaWhereUniqueInput | cronogramaWhereUniqueInput[]
    delete?: cronogramaWhereUniqueInput | cronogramaWhereUniqueInput[]
    connect?: cronogramaWhereUniqueInput | cronogramaWhereUniqueInput[]
    update?: cronogramaUpdateWithWhereUniqueWithoutDisciplinasInput | cronogramaUpdateWithWhereUniqueWithoutDisciplinasInput[]
    updateMany?: cronogramaUpdateManyWithWhereWithoutDisciplinasInput | cronogramaUpdateManyWithWhereWithoutDisciplinasInput[]
    deleteMany?: cronogramaScalarWhereInput | cronogramaScalarWhereInput[]
  }

  export type disciplina_cursoUncheckedUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<disciplina_cursoCreateWithoutDisciplinasInput, disciplina_cursoUncheckedCreateWithoutDisciplinasInput> | disciplina_cursoCreateWithoutDisciplinasInput[] | disciplina_cursoUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: disciplina_cursoCreateOrConnectWithoutDisciplinasInput | disciplina_cursoCreateOrConnectWithoutDisciplinasInput[]
    upsert?: disciplina_cursoUpsertWithWhereUniqueWithoutDisciplinasInput | disciplina_cursoUpsertWithWhereUniqueWithoutDisciplinasInput[]
    createMany?: disciplina_cursoCreateManyDisciplinasInputEnvelope
    set?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    disconnect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    delete?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    connect?: disciplina_cursoWhereUniqueInput | disciplina_cursoWhereUniqueInput[]
    update?: disciplina_cursoUpdateWithWhereUniqueWithoutDisciplinasInput | disciplina_cursoUpdateWithWhereUniqueWithoutDisciplinasInput[]
    updateMany?: disciplina_cursoUpdateManyWithWhereWithoutDisciplinasInput | disciplina_cursoUpdateManyWithWhereWithoutDisciplinasInput[]
    deleteMany?: disciplina_cursoScalarWhereInput | disciplina_cursoScalarWhereInput[]
  }

  export type exerciciosUncheckedUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<exerciciosCreateWithoutDisciplinasInput, exerciciosUncheckedCreateWithoutDisciplinasInput> | exerciciosCreateWithoutDisciplinasInput[] | exerciciosUncheckedCreateWithoutDisciplinasInput[]
    connectOrCreate?: exerciciosCreateOrConnectWithoutDisciplinasInput | exerciciosCreateOrConnectWithoutDisciplinasInput[]
    upsert?: exerciciosUpsertWithWhereUniqueWithoutDisciplinasInput | exerciciosUpsertWithWhereUniqueWithoutDisciplinasInput[]
    createMany?: exerciciosCreateManyDisciplinasInputEnvelope
    set?: exerciciosWhereUniqueInput | exerciciosWhereUniqueInput[]
    disconnect?: exerciciosWhereUniqueInput | exerciciosWhereUniqueInput[]
    delete?: exerciciosWhereUniqueInput | exerciciosWhereUniqueInput[]
    connect?: exerciciosWhereUniqueInput | exerciciosWhereUniqueInput[]
    update?: exerciciosUpdateWithWhereUniqueWithoutDisciplinasInput | exerciciosUpdateWithWhereUniqueWithoutDisciplinasInput[]
    updateMany?: exerciciosUpdateManyWithWhereWithoutDisciplinasInput | exerciciosUpdateManyWithWhereWithoutDisciplinasInput[]
    deleteMany?: exerciciosScalarWhereInput | exerciciosScalarWhereInput[]
  }

  export type disciplinasCreateNestedOneWithoutExerciciosInput = {
    create?: XOR<disciplinasCreateWithoutExerciciosInput, disciplinasUncheckedCreateWithoutExerciciosInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutExerciciosInput
    connect?: disciplinasWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type disciplinasUpdateOneRequiredWithoutExerciciosNestedInput = {
    create?: XOR<disciplinasCreateWithoutExerciciosInput, disciplinasUncheckedCreateWithoutExerciciosInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutExerciciosInput
    upsert?: disciplinasUpsertWithoutExerciciosInput
    connect?: disciplinasWhereUniqueInput
    update?: XOR<XOR<disciplinasUpdateToOneWithWhereWithoutExerciciosInput, disciplinasUpdateWithoutExerciciosInput>, disciplinasUncheckedUpdateWithoutExerciciosInput>
  }

  export type Enumusuarios_tipoFieldUpdateOperationsInput = {
    set?: $Enums.usuarios_tipo
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumusuarios_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_tipo | Enumusuarios_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_tipo[]
    notIn?: $Enums.usuarios_tipo[]
    not?: NestedEnumusuarios_tipoFilter<$PrismaModel> | $Enums.usuarios_tipo
  }

  export type NestedEnumusuarios_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_tipo | Enumusuarios_tipoFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_tipo[]
    notIn?: $Enums.usuarios_tipo[]
    not?: NestedEnumusuarios_tipoWithAggregatesFilter<$PrismaModel> | $Enums.usuarios_tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuarios_tipoFilter<$PrismaModel>
    _max?: NestedEnumusuarios_tipoFilter<$PrismaModel>
  }

  export type cronogramaCreateWithoutAvaliacao_aulaInput = {
    nome_aula: string
    data: Date | string
    disciplinas: disciplinasCreateNestedOneWithoutCronogramaInput
  }

  export type cronogramaUncheckedCreateWithoutAvaliacao_aulaInput = {
    id?: number
    disciplina_id: number
    nome_aula: string
    data: Date | string
  }

  export type cronogramaCreateOrConnectWithoutAvaliacao_aulaInput = {
    where: cronogramaWhereUniqueInput
    create: XOR<cronogramaCreateWithoutAvaliacao_aulaInput, cronogramaUncheckedCreateWithoutAvaliacao_aulaInput>
  }

  export type cronogramaUpsertWithoutAvaliacao_aulaInput = {
    update: XOR<cronogramaUpdateWithoutAvaliacao_aulaInput, cronogramaUncheckedUpdateWithoutAvaliacao_aulaInput>
    create: XOR<cronogramaCreateWithoutAvaliacao_aulaInput, cronogramaUncheckedCreateWithoutAvaliacao_aulaInput>
    where?: cronogramaWhereInput
  }

  export type cronogramaUpdateToOneWithWhereWithoutAvaliacao_aulaInput = {
    where?: cronogramaWhereInput
    data: XOR<cronogramaUpdateWithoutAvaliacao_aulaInput, cronogramaUncheckedUpdateWithoutAvaliacao_aulaInput>
  }

  export type cronogramaUpdateWithoutAvaliacao_aulaInput = {
    nome_aula?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    disciplinas?: disciplinasUpdateOneRequiredWithoutCronogramaNestedInput
  }

  export type cronogramaUncheckedUpdateWithoutAvaliacao_aulaInput = {
    id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
    nome_aula?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type avaliacao_aulaCreateWithoutCronogramaInput = {
    id_usuario: number
  }

  export type avaliacao_aulaUncheckedCreateWithoutCronogramaInput = {
    id?: number
    id_usuario: number
  }

  export type avaliacao_aulaCreateOrConnectWithoutCronogramaInput = {
    where: avaliacao_aulaWhereUniqueInput
    create: XOR<avaliacao_aulaCreateWithoutCronogramaInput, avaliacao_aulaUncheckedCreateWithoutCronogramaInput>
  }

  export type avaliacao_aulaCreateManyCronogramaInputEnvelope = {
    data: avaliacao_aulaCreateManyCronogramaInput | avaliacao_aulaCreateManyCronogramaInput[]
    skipDuplicates?: boolean
  }

  export type disciplinasCreateWithoutCronogramaInput = {
    nome: string
    descricao?: string | null
    disciplina_curso?: disciplina_cursoCreateNestedManyWithoutDisciplinasInput
    exercicios?: exerciciosCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateWithoutCronogramaInput = {
    id?: number
    nome: string
    descricao?: string | null
    disciplina_curso?: disciplina_cursoUncheckedCreateNestedManyWithoutDisciplinasInput
    exercicios?: exerciciosUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasCreateOrConnectWithoutCronogramaInput = {
    where: disciplinasWhereUniqueInput
    create: XOR<disciplinasCreateWithoutCronogramaInput, disciplinasUncheckedCreateWithoutCronogramaInput>
  }

  export type avaliacao_aulaUpsertWithWhereUniqueWithoutCronogramaInput = {
    where: avaliacao_aulaWhereUniqueInput
    update: XOR<avaliacao_aulaUpdateWithoutCronogramaInput, avaliacao_aulaUncheckedUpdateWithoutCronogramaInput>
    create: XOR<avaliacao_aulaCreateWithoutCronogramaInput, avaliacao_aulaUncheckedCreateWithoutCronogramaInput>
  }

  export type avaliacao_aulaUpdateWithWhereUniqueWithoutCronogramaInput = {
    where: avaliacao_aulaWhereUniqueInput
    data: XOR<avaliacao_aulaUpdateWithoutCronogramaInput, avaliacao_aulaUncheckedUpdateWithoutCronogramaInput>
  }

  export type avaliacao_aulaUpdateManyWithWhereWithoutCronogramaInput = {
    where: avaliacao_aulaScalarWhereInput
    data: XOR<avaliacao_aulaUpdateManyMutationInput, avaliacao_aulaUncheckedUpdateManyWithoutCronogramaInput>
  }

  export type avaliacao_aulaScalarWhereInput = {
    AND?: avaliacao_aulaScalarWhereInput | avaliacao_aulaScalarWhereInput[]
    OR?: avaliacao_aulaScalarWhereInput[]
    NOT?: avaliacao_aulaScalarWhereInput | avaliacao_aulaScalarWhereInput[]
    id?: IntFilter<"avaliacao_aula"> | number
    id_usuario?: IntFilter<"avaliacao_aula"> | number
    id_cronograma?: IntFilter<"avaliacao_aula"> | number
  }

  export type disciplinasUpsertWithoutCronogramaInput = {
    update: XOR<disciplinasUpdateWithoutCronogramaInput, disciplinasUncheckedUpdateWithoutCronogramaInput>
    create: XOR<disciplinasCreateWithoutCronogramaInput, disciplinasUncheckedCreateWithoutCronogramaInput>
    where?: disciplinasWhereInput
  }

  export type disciplinasUpdateToOneWithWhereWithoutCronogramaInput = {
    where?: disciplinasWhereInput
    data: XOR<disciplinasUpdateWithoutCronogramaInput, disciplinasUncheckedUpdateWithoutCronogramaInput>
  }

  export type disciplinasUpdateWithoutCronogramaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    disciplina_curso?: disciplina_cursoUpdateManyWithoutDisciplinasNestedInput
    exercicios?: exerciciosUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateWithoutCronogramaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    disciplina_curso?: disciplina_cursoUncheckedUpdateManyWithoutDisciplinasNestedInput
    exercicios?: exerciciosUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplina_cursoCreateWithoutCursosInput = {
    disciplinas: disciplinasCreateNestedOneWithoutDisciplina_cursoInput
  }

  export type disciplina_cursoUncheckedCreateWithoutCursosInput = {
    id?: number
    disciplina_id: number
  }

  export type disciplina_cursoCreateOrConnectWithoutCursosInput = {
    where: disciplina_cursoWhereUniqueInput
    create: XOR<disciplina_cursoCreateWithoutCursosInput, disciplina_cursoUncheckedCreateWithoutCursosInput>
  }

  export type disciplina_cursoCreateManyCursosInputEnvelope = {
    data: disciplina_cursoCreateManyCursosInput | disciplina_cursoCreateManyCursosInput[]
    skipDuplicates?: boolean
  }

  export type disciplina_cursoUpsertWithWhereUniqueWithoutCursosInput = {
    where: disciplina_cursoWhereUniqueInput
    update: XOR<disciplina_cursoUpdateWithoutCursosInput, disciplina_cursoUncheckedUpdateWithoutCursosInput>
    create: XOR<disciplina_cursoCreateWithoutCursosInput, disciplina_cursoUncheckedCreateWithoutCursosInput>
  }

  export type disciplina_cursoUpdateWithWhereUniqueWithoutCursosInput = {
    where: disciplina_cursoWhereUniqueInput
    data: XOR<disciplina_cursoUpdateWithoutCursosInput, disciplina_cursoUncheckedUpdateWithoutCursosInput>
  }

  export type disciplina_cursoUpdateManyWithWhereWithoutCursosInput = {
    where: disciplina_cursoScalarWhereInput
    data: XOR<disciplina_cursoUpdateManyMutationInput, disciplina_cursoUncheckedUpdateManyWithoutCursosInput>
  }

  export type disciplina_cursoScalarWhereInput = {
    AND?: disciplina_cursoScalarWhereInput | disciplina_cursoScalarWhereInput[]
    OR?: disciplina_cursoScalarWhereInput[]
    NOT?: disciplina_cursoScalarWhereInput | disciplina_cursoScalarWhereInput[]
    id?: IntFilter<"disciplina_curso"> | number
    curso_id?: IntFilter<"disciplina_curso"> | number
    disciplina_id?: IntFilter<"disciplina_curso"> | number
  }

  export type cursosCreateWithoutDisciplina_cursoInput = {
    nome: string
    descricao?: string | null
  }

  export type cursosUncheckedCreateWithoutDisciplina_cursoInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type cursosCreateOrConnectWithoutDisciplina_cursoInput = {
    where: cursosWhereUniqueInput
    create: XOR<cursosCreateWithoutDisciplina_cursoInput, cursosUncheckedCreateWithoutDisciplina_cursoInput>
  }

  export type disciplinasCreateWithoutDisciplina_cursoInput = {
    nome: string
    descricao?: string | null
    cronograma?: cronogramaCreateNestedManyWithoutDisciplinasInput
    exercicios?: exerciciosCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateWithoutDisciplina_cursoInput = {
    id?: number
    nome: string
    descricao?: string | null
    cronograma?: cronogramaUncheckedCreateNestedManyWithoutDisciplinasInput
    exercicios?: exerciciosUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasCreateOrConnectWithoutDisciplina_cursoInput = {
    where: disciplinasWhereUniqueInput
    create: XOR<disciplinasCreateWithoutDisciplina_cursoInput, disciplinasUncheckedCreateWithoutDisciplina_cursoInput>
  }

  export type cursosUpsertWithoutDisciplina_cursoInput = {
    update: XOR<cursosUpdateWithoutDisciplina_cursoInput, cursosUncheckedUpdateWithoutDisciplina_cursoInput>
    create: XOR<cursosCreateWithoutDisciplina_cursoInput, cursosUncheckedCreateWithoutDisciplina_cursoInput>
    where?: cursosWhereInput
  }

  export type cursosUpdateToOneWithWhereWithoutDisciplina_cursoInput = {
    where?: cursosWhereInput
    data: XOR<cursosUpdateWithoutDisciplina_cursoInput, cursosUncheckedUpdateWithoutDisciplina_cursoInput>
  }

  export type cursosUpdateWithoutDisciplina_cursoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cursosUncheckedUpdateWithoutDisciplina_cursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type disciplinasUpsertWithoutDisciplina_cursoInput = {
    update: XOR<disciplinasUpdateWithoutDisciplina_cursoInput, disciplinasUncheckedUpdateWithoutDisciplina_cursoInput>
    create: XOR<disciplinasCreateWithoutDisciplina_cursoInput, disciplinasUncheckedCreateWithoutDisciplina_cursoInput>
    where?: disciplinasWhereInput
  }

  export type disciplinasUpdateToOneWithWhereWithoutDisciplina_cursoInput = {
    where?: disciplinasWhereInput
    data: XOR<disciplinasUpdateWithoutDisciplina_cursoInput, disciplinasUncheckedUpdateWithoutDisciplina_cursoInput>
  }

  export type disciplinasUpdateWithoutDisciplina_cursoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cronograma?: cronogramaUpdateManyWithoutDisciplinasNestedInput
    exercicios?: exerciciosUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateWithoutDisciplina_cursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cronograma?: cronogramaUncheckedUpdateManyWithoutDisciplinasNestedInput
    exercicios?: exerciciosUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type cronogramaCreateWithoutDisciplinasInput = {
    nome_aula: string
    data: Date | string
    avaliacao_aula?: avaliacao_aulaCreateNestedManyWithoutCronogramaInput
  }

  export type cronogramaUncheckedCreateWithoutDisciplinasInput = {
    id?: number
    nome_aula: string
    data: Date | string
    avaliacao_aula?: avaliacao_aulaUncheckedCreateNestedManyWithoutCronogramaInput
  }

  export type cronogramaCreateOrConnectWithoutDisciplinasInput = {
    where: cronogramaWhereUniqueInput
    create: XOR<cronogramaCreateWithoutDisciplinasInput, cronogramaUncheckedCreateWithoutDisciplinasInput>
  }

  export type cronogramaCreateManyDisciplinasInputEnvelope = {
    data: cronogramaCreateManyDisciplinasInput | cronogramaCreateManyDisciplinasInput[]
    skipDuplicates?: boolean
  }

  export type disciplina_cursoCreateWithoutDisciplinasInput = {
    cursos: cursosCreateNestedOneWithoutDisciplina_cursoInput
  }

  export type disciplina_cursoUncheckedCreateWithoutDisciplinasInput = {
    id?: number
    curso_id: number
  }

  export type disciplina_cursoCreateOrConnectWithoutDisciplinasInput = {
    where: disciplina_cursoWhereUniqueInput
    create: XOR<disciplina_cursoCreateWithoutDisciplinasInput, disciplina_cursoUncheckedCreateWithoutDisciplinasInput>
  }

  export type disciplina_cursoCreateManyDisciplinasInputEnvelope = {
    data: disciplina_cursoCreateManyDisciplinasInput | disciplina_cursoCreateManyDisciplinasInput[]
    skipDuplicates?: boolean
  }

  export type exerciciosCreateWithoutDisciplinasInput = {
    titulo: string
    enunciado: string
    criado_em?: Date | string | null
  }

  export type exerciciosUncheckedCreateWithoutDisciplinasInput = {
    id?: number
    titulo: string
    enunciado: string
    criado_em?: Date | string | null
  }

  export type exerciciosCreateOrConnectWithoutDisciplinasInput = {
    where: exerciciosWhereUniqueInput
    create: XOR<exerciciosCreateWithoutDisciplinasInput, exerciciosUncheckedCreateWithoutDisciplinasInput>
  }

  export type exerciciosCreateManyDisciplinasInputEnvelope = {
    data: exerciciosCreateManyDisciplinasInput | exerciciosCreateManyDisciplinasInput[]
    skipDuplicates?: boolean
  }

  export type cronogramaUpsertWithWhereUniqueWithoutDisciplinasInput = {
    where: cronogramaWhereUniqueInput
    update: XOR<cronogramaUpdateWithoutDisciplinasInput, cronogramaUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<cronogramaCreateWithoutDisciplinasInput, cronogramaUncheckedCreateWithoutDisciplinasInput>
  }

  export type cronogramaUpdateWithWhereUniqueWithoutDisciplinasInput = {
    where: cronogramaWhereUniqueInput
    data: XOR<cronogramaUpdateWithoutDisciplinasInput, cronogramaUncheckedUpdateWithoutDisciplinasInput>
  }

  export type cronogramaUpdateManyWithWhereWithoutDisciplinasInput = {
    where: cronogramaScalarWhereInput
    data: XOR<cronogramaUpdateManyMutationInput, cronogramaUncheckedUpdateManyWithoutDisciplinasInput>
  }

  export type cronogramaScalarWhereInput = {
    AND?: cronogramaScalarWhereInput | cronogramaScalarWhereInput[]
    OR?: cronogramaScalarWhereInput[]
    NOT?: cronogramaScalarWhereInput | cronogramaScalarWhereInput[]
    id?: IntFilter<"cronograma"> | number
    disciplina_id?: IntFilter<"cronograma"> | number
    nome_aula?: StringFilter<"cronograma"> | string
    data?: DateTimeFilter<"cronograma"> | Date | string
  }

  export type disciplina_cursoUpsertWithWhereUniqueWithoutDisciplinasInput = {
    where: disciplina_cursoWhereUniqueInput
    update: XOR<disciplina_cursoUpdateWithoutDisciplinasInput, disciplina_cursoUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<disciplina_cursoCreateWithoutDisciplinasInput, disciplina_cursoUncheckedCreateWithoutDisciplinasInput>
  }

  export type disciplina_cursoUpdateWithWhereUniqueWithoutDisciplinasInput = {
    where: disciplina_cursoWhereUniqueInput
    data: XOR<disciplina_cursoUpdateWithoutDisciplinasInput, disciplina_cursoUncheckedUpdateWithoutDisciplinasInput>
  }

  export type disciplina_cursoUpdateManyWithWhereWithoutDisciplinasInput = {
    where: disciplina_cursoScalarWhereInput
    data: XOR<disciplina_cursoUpdateManyMutationInput, disciplina_cursoUncheckedUpdateManyWithoutDisciplinasInput>
  }

  export type exerciciosUpsertWithWhereUniqueWithoutDisciplinasInput = {
    where: exerciciosWhereUniqueInput
    update: XOR<exerciciosUpdateWithoutDisciplinasInput, exerciciosUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<exerciciosCreateWithoutDisciplinasInput, exerciciosUncheckedCreateWithoutDisciplinasInput>
  }

  export type exerciciosUpdateWithWhereUniqueWithoutDisciplinasInput = {
    where: exerciciosWhereUniqueInput
    data: XOR<exerciciosUpdateWithoutDisciplinasInput, exerciciosUncheckedUpdateWithoutDisciplinasInput>
  }

  export type exerciciosUpdateManyWithWhereWithoutDisciplinasInput = {
    where: exerciciosScalarWhereInput
    data: XOR<exerciciosUpdateManyMutationInput, exerciciosUncheckedUpdateManyWithoutDisciplinasInput>
  }

  export type exerciciosScalarWhereInput = {
    AND?: exerciciosScalarWhereInput | exerciciosScalarWhereInput[]
    OR?: exerciciosScalarWhereInput[]
    NOT?: exerciciosScalarWhereInput | exerciciosScalarWhereInput[]
    id?: IntFilter<"exercicios"> | number
    titulo?: StringFilter<"exercicios"> | string
    enunciado?: StringFilter<"exercicios"> | string
    disciplina_id?: IntFilter<"exercicios"> | number
    criado_em?: DateTimeNullableFilter<"exercicios"> | Date | string | null
  }

  export type disciplinasCreateWithoutExerciciosInput = {
    nome: string
    descricao?: string | null
    cronograma?: cronogramaCreateNestedManyWithoutDisciplinasInput
    disciplina_curso?: disciplina_cursoCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateWithoutExerciciosInput = {
    id?: number
    nome: string
    descricao?: string | null
    cronograma?: cronogramaUncheckedCreateNestedManyWithoutDisciplinasInput
    disciplina_curso?: disciplina_cursoUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasCreateOrConnectWithoutExerciciosInput = {
    where: disciplinasWhereUniqueInput
    create: XOR<disciplinasCreateWithoutExerciciosInput, disciplinasUncheckedCreateWithoutExerciciosInput>
  }

  export type disciplinasUpsertWithoutExerciciosInput = {
    update: XOR<disciplinasUpdateWithoutExerciciosInput, disciplinasUncheckedUpdateWithoutExerciciosInput>
    create: XOR<disciplinasCreateWithoutExerciciosInput, disciplinasUncheckedCreateWithoutExerciciosInput>
    where?: disciplinasWhereInput
  }

  export type disciplinasUpdateToOneWithWhereWithoutExerciciosInput = {
    where?: disciplinasWhereInput
    data: XOR<disciplinasUpdateWithoutExerciciosInput, disciplinasUncheckedUpdateWithoutExerciciosInput>
  }

  export type disciplinasUpdateWithoutExerciciosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cronograma?: cronogramaUpdateManyWithoutDisciplinasNestedInput
    disciplina_curso?: disciplina_cursoUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateWithoutExerciciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cronograma?: cronogramaUncheckedUpdateManyWithoutDisciplinasNestedInput
    disciplina_curso?: disciplina_cursoUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type avaliacao_aulaCreateManyCronogramaInput = {
    id?: number
    id_usuario: number
  }

  export type avaliacao_aulaUpdateWithoutCronogramaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacao_aulaUncheckedUpdateWithoutCronogramaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type avaliacao_aulaUncheckedUpdateManyWithoutCronogramaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type disciplina_cursoCreateManyCursosInput = {
    id?: number
    disciplina_id: number
  }

  export type disciplina_cursoUpdateWithoutCursosInput = {
    disciplinas?: disciplinasUpdateOneRequiredWithoutDisciplina_cursoNestedInput
  }

  export type disciplina_cursoUncheckedUpdateWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
  }

  export type disciplina_cursoUncheckedUpdateManyWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    disciplina_id?: IntFieldUpdateOperationsInput | number
  }

  export type cronogramaCreateManyDisciplinasInput = {
    id?: number
    nome_aula: string
    data: Date | string
  }

  export type disciplina_cursoCreateManyDisciplinasInput = {
    id?: number
    curso_id: number
  }

  export type exerciciosCreateManyDisciplinasInput = {
    id?: number
    titulo: string
    enunciado: string
    criado_em?: Date | string | null
  }

  export type cronogramaUpdateWithoutDisciplinasInput = {
    nome_aula?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao_aula?: avaliacao_aulaUpdateManyWithoutCronogramaNestedInput
  }

  export type cronogramaUncheckedUpdateWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_aula?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao_aula?: avaliacao_aulaUncheckedUpdateManyWithoutCronogramaNestedInput
  }

  export type cronogramaUncheckedUpdateManyWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_aula?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type disciplina_cursoUpdateWithoutDisciplinasInput = {
    cursos?: cursosUpdateOneRequiredWithoutDisciplina_cursoNestedInput
  }

  export type disciplina_cursoUncheckedUpdateWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
  }

  export type disciplina_cursoUncheckedUpdateManyWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
  }

  export type exerciciosUpdateWithoutDisciplinasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exerciciosUncheckedUpdateWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type exerciciosUncheckedUpdateManyWithoutDisciplinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    enunciado?: StringFieldUpdateOperationsInput | string
    criado_em?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}