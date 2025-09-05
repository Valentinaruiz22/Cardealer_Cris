
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
 * Model marcas
 * 
 */
export type marcas = $Result.DefaultSelection<Prisma.$marcasPayload>
/**
 * Model carros
 * 
 */
export type carros = $Result.DefaultSelection<Prisma.$carrosPayload>
/**
 * Model productos
 * 
 */
export type productos = $Result.DefaultSelection<Prisma.$productosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Marcas
 * const marcas = await prisma.marcas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Marcas
   * const marcas = await prisma.marcas.findMany()
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
   * `prisma.marcas`: Exposes CRUD operations for the **marcas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marcas
    * const marcas = await prisma.marcas.findMany()
    * ```
    */
  get marcas(): Prisma.marcasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carros`: Exposes CRUD operations for the **carros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carros
    * const carros = await prisma.carros.findMany()
    * ```
    */
  get carros(): Prisma.carrosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.productosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    marcas: 'marcas',
    carros: 'carros',
    productos: 'productos'
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
      modelProps: "marcas" | "carros" | "productos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      marcas: {
        payload: Prisma.$marcasPayload<ExtArgs>
        fields: Prisma.marcasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.marcasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.marcasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          findFirst: {
            args: Prisma.marcasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.marcasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          findMany: {
            args: Prisma.marcasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>[]
          }
          create: {
            args: Prisma.marcasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          createMany: {
            args: Prisma.marcasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.marcasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>[]
          }
          delete: {
            args: Prisma.marcasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          update: {
            args: Prisma.marcasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          deleteMany: {
            args: Prisma.marcasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.marcasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.marcasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>[]
          }
          upsert: {
            args: Prisma.marcasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marcasPayload>
          }
          aggregate: {
            args: Prisma.MarcasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarcas>
          }
          groupBy: {
            args: Prisma.marcasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarcasGroupByOutputType>[]
          }
          count: {
            args: Prisma.marcasCountArgs<ExtArgs>
            result: $Utils.Optional<MarcasCountAggregateOutputType> | number
          }
        }
      }
      carros: {
        payload: Prisma.$carrosPayload<ExtArgs>
        fields: Prisma.carrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carrosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carrosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          findFirst: {
            args: Prisma.carrosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carrosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          findMany: {
            args: Prisma.carrosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>[]
          }
          create: {
            args: Prisma.carrosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          createMany: {
            args: Prisma.carrosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carrosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>[]
          }
          delete: {
            args: Prisma.carrosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          update: {
            args: Prisma.carrosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          deleteMany: {
            args: Prisma.carrosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carrosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carrosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>[]
          }
          upsert: {
            args: Prisma.carrosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          aggregate: {
            args: Prisma.CarrosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarros>
          }
          groupBy: {
            args: Prisma.carrosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.carrosCountArgs<ExtArgs>
            result: $Utils.Optional<CarrosCountAggregateOutputType> | number
          }
        }
      }
      productos: {
        payload: Prisma.$productosPayload<ExtArgs>
        fields: Prisma.productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findFirst: {
            args: Prisma.productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findMany: {
            args: Prisma.productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          create: {
            args: Prisma.productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          createMany: {
            args: Prisma.productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          delete: {
            args: Prisma.productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          update: {
            args: Prisma.productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          deleteMany: {
            args: Prisma.productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          upsert: {
            args: Prisma.productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.productosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    marcas?: marcasOmit
    carros?: carrosOmit
    productos?: productosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type MarcasCountOutputType
   */

  export type MarcasCountOutputType = {
    carros: number
  }

  export type MarcasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carros?: boolean | MarcasCountOutputTypeCountCarrosArgs
  }

  // Custom InputTypes
  /**
   * MarcasCountOutputType without action
   */
  export type MarcasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarcasCountOutputType
     */
    select?: MarcasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarcasCountOutputType without action
   */
  export type MarcasCountOutputTypeCountCarrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model marcas
   */

  export type AggregateMarcas = {
    _count: MarcasCountAggregateOutputType | null
    _avg: MarcasAvgAggregateOutputType | null
    _sum: MarcasSumAggregateOutputType | null
    _min: MarcasMinAggregateOutputType | null
    _max: MarcasMaxAggregateOutputType | null
  }

  export type MarcasAvgAggregateOutputType = {
    id: number | null
  }

  export type MarcasSumAggregateOutputType = {
    id: number | null
  }

  export type MarcasMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type MarcasMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type MarcasCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type MarcasAvgAggregateInputType = {
    id?: true
  }

  export type MarcasSumAggregateInputType = {
    id?: true
  }

  export type MarcasMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type MarcasMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type MarcasCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type MarcasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marcas to aggregate.
     */
    where?: marcasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marcas to fetch.
     */
    orderBy?: marcasOrderByWithRelationInput | marcasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: marcasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned marcas
    **/
    _count?: true | MarcasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarcasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarcasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcasMaxAggregateInputType
  }

  export type GetMarcasAggregateType<T extends MarcasAggregateArgs> = {
        [P in keyof T & keyof AggregateMarcas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarcas[P]>
      : GetScalarType<T[P], AggregateMarcas[P]>
  }




  export type marcasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: marcasWhereInput
    orderBy?: marcasOrderByWithAggregationInput | marcasOrderByWithAggregationInput[]
    by: MarcasScalarFieldEnum[] | MarcasScalarFieldEnum
    having?: marcasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcasCountAggregateInputType | true
    _avg?: MarcasAvgAggregateInputType
    _sum?: MarcasSumAggregateInputType
    _min?: MarcasMinAggregateInputType
    _max?: MarcasMaxAggregateInputType
  }

  export type MarcasGroupByOutputType = {
    id: number
    nombre: string
    _count: MarcasCountAggregateOutputType | null
    _avg: MarcasAvgAggregateOutputType | null
    _sum: MarcasSumAggregateOutputType | null
    _min: MarcasMinAggregateOutputType | null
    _max: MarcasMaxAggregateOutputType | null
  }

  type GetMarcasGroupByPayload<T extends marcasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarcasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcasGroupByOutputType[P]>
            : GetScalarType<T[P], MarcasGroupByOutputType[P]>
        }
      >
    >


  export type marcasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    carros?: boolean | marcas$carrosArgs<ExtArgs>
    _count?: boolean | MarcasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marcas"]>

  export type marcasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["marcas"]>

  export type marcasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["marcas"]>

  export type marcasSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type marcasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["marcas"]>
  export type marcasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carros?: boolean | marcas$carrosArgs<ExtArgs>
    _count?: boolean | MarcasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type marcasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type marcasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $marcasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "marcas"
    objects: {
      carros: Prisma.$carrosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["marcas"]>
    composites: {}
  }

  type marcasGetPayload<S extends boolean | null | undefined | marcasDefaultArgs> = $Result.GetResult<Prisma.$marcasPayload, S>

  type marcasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<marcasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarcasCountAggregateInputType | true
    }

  export interface marcasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['marcas'], meta: { name: 'marcas' } }
    /**
     * Find zero or one Marcas that matches the filter.
     * @param {marcasFindUniqueArgs} args - Arguments to find a Marcas
     * @example
     * // Get one Marcas
     * const marcas = await prisma.marcas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends marcasFindUniqueArgs>(args: SelectSubset<T, marcasFindUniqueArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marcas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {marcasFindUniqueOrThrowArgs} args - Arguments to find a Marcas
     * @example
     * // Get one Marcas
     * const marcas = await prisma.marcas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends marcasFindUniqueOrThrowArgs>(args: SelectSubset<T, marcasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marcas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasFindFirstArgs} args - Arguments to find a Marcas
     * @example
     * // Get one Marcas
     * const marcas = await prisma.marcas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends marcasFindFirstArgs>(args?: SelectSubset<T, marcasFindFirstArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marcas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasFindFirstOrThrowArgs} args - Arguments to find a Marcas
     * @example
     * // Get one Marcas
     * const marcas = await prisma.marcas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends marcasFindFirstOrThrowArgs>(args?: SelectSubset<T, marcasFindFirstOrThrowArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marcas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marcas
     * const marcas = await prisma.marcas.findMany()
     * 
     * // Get first 10 Marcas
     * const marcas = await prisma.marcas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marcasWithIdOnly = await prisma.marcas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends marcasFindManyArgs>(args?: SelectSubset<T, marcasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marcas.
     * @param {marcasCreateArgs} args - Arguments to create a Marcas.
     * @example
     * // Create one Marcas
     * const Marcas = await prisma.marcas.create({
     *   data: {
     *     // ... data to create a Marcas
     *   }
     * })
     * 
     */
    create<T extends marcasCreateArgs>(args: SelectSubset<T, marcasCreateArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marcas.
     * @param {marcasCreateManyArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marcas = await prisma.marcas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends marcasCreateManyArgs>(args?: SelectSubset<T, marcasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marcas and returns the data saved in the database.
     * @param {marcasCreateManyAndReturnArgs} args - Arguments to create many Marcas.
     * @example
     * // Create many Marcas
     * const marcas = await prisma.marcas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marcas and only return the `id`
     * const marcasWithIdOnly = await prisma.marcas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends marcasCreateManyAndReturnArgs>(args?: SelectSubset<T, marcasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marcas.
     * @param {marcasDeleteArgs} args - Arguments to delete one Marcas.
     * @example
     * // Delete one Marcas
     * const Marcas = await prisma.marcas.delete({
     *   where: {
     *     // ... filter to delete one Marcas
     *   }
     * })
     * 
     */
    delete<T extends marcasDeleteArgs>(args: SelectSubset<T, marcasDeleteArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marcas.
     * @param {marcasUpdateArgs} args - Arguments to update one Marcas.
     * @example
     * // Update one Marcas
     * const marcas = await prisma.marcas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends marcasUpdateArgs>(args: SelectSubset<T, marcasUpdateArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marcas.
     * @param {marcasDeleteManyArgs} args - Arguments to filter Marcas to delete.
     * @example
     * // Delete a few Marcas
     * const { count } = await prisma.marcas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends marcasDeleteManyArgs>(args?: SelectSubset<T, marcasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marcas
     * const marcas = await prisma.marcas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends marcasUpdateManyArgs>(args: SelectSubset<T, marcasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marcas and returns the data updated in the database.
     * @param {marcasUpdateManyAndReturnArgs} args - Arguments to update many Marcas.
     * @example
     * // Update many Marcas
     * const marcas = await prisma.marcas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marcas and only return the `id`
     * const marcasWithIdOnly = await prisma.marcas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends marcasUpdateManyAndReturnArgs>(args: SelectSubset<T, marcasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marcas.
     * @param {marcasUpsertArgs} args - Arguments to update or create a Marcas.
     * @example
     * // Update or create a Marcas
     * const marcas = await prisma.marcas.upsert({
     *   create: {
     *     // ... data to create a Marcas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marcas we want to update
     *   }
     * })
     */
    upsert<T extends marcasUpsertArgs>(args: SelectSubset<T, marcasUpsertArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasCountArgs} args - Arguments to filter Marcas to count.
     * @example
     * // Count the number of Marcas
     * const count = await prisma.marcas.count({
     *   where: {
     *     // ... the filter for the Marcas we want to count
     *   }
     * })
    **/
    count<T extends marcasCountArgs>(
      args?: Subset<T, marcasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarcasAggregateArgs>(args: Subset<T, MarcasAggregateArgs>): Prisma.PrismaPromise<GetMarcasAggregateType<T>>

    /**
     * Group by Marcas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marcasGroupByArgs} args - Group by arguments.
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
      T extends marcasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: marcasGroupByArgs['orderBy'] }
        : { orderBy?: marcasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, marcasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the marcas model
   */
  readonly fields: marcasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for marcas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__marcasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carros<T extends marcas$carrosArgs<ExtArgs> = {}>(args?: Subset<T, marcas$carrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the marcas model
   */
  interface marcasFieldRefs {
    readonly id: FieldRef<"marcas", 'Int'>
    readonly nombre: FieldRef<"marcas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * marcas findUnique
   */
  export type marcasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter, which marcas to fetch.
     */
    where: marcasWhereUniqueInput
  }

  /**
   * marcas findUniqueOrThrow
   */
  export type marcasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter, which marcas to fetch.
     */
    where: marcasWhereUniqueInput
  }

  /**
   * marcas findFirst
   */
  export type marcasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter, which marcas to fetch.
     */
    where?: marcasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marcas to fetch.
     */
    orderBy?: marcasOrderByWithRelationInput | marcasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marcas.
     */
    cursor?: marcasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marcas.
     */
    distinct?: MarcasScalarFieldEnum | MarcasScalarFieldEnum[]
  }

  /**
   * marcas findFirstOrThrow
   */
  export type marcasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter, which marcas to fetch.
     */
    where?: marcasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marcas to fetch.
     */
    orderBy?: marcasOrderByWithRelationInput | marcasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marcas.
     */
    cursor?: marcasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marcas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marcas.
     */
    distinct?: MarcasScalarFieldEnum | MarcasScalarFieldEnum[]
  }

  /**
   * marcas findMany
   */
  export type marcasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter, which marcas to fetch.
     */
    where?: marcasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marcas to fetch.
     */
    orderBy?: marcasOrderByWithRelationInput | marcasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing marcas.
     */
    cursor?: marcasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marcas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marcas.
     */
    skip?: number
    distinct?: MarcasScalarFieldEnum | MarcasScalarFieldEnum[]
  }

  /**
   * marcas create
   */
  export type marcasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * The data needed to create a marcas.
     */
    data: XOR<marcasCreateInput, marcasUncheckedCreateInput>
  }

  /**
   * marcas createMany
   */
  export type marcasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many marcas.
     */
    data: marcasCreateManyInput | marcasCreateManyInput[]
  }

  /**
   * marcas createManyAndReturn
   */
  export type marcasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * The data used to create many marcas.
     */
    data: marcasCreateManyInput | marcasCreateManyInput[]
  }

  /**
   * marcas update
   */
  export type marcasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * The data needed to update a marcas.
     */
    data: XOR<marcasUpdateInput, marcasUncheckedUpdateInput>
    /**
     * Choose, which marcas to update.
     */
    where: marcasWhereUniqueInput
  }

  /**
   * marcas updateMany
   */
  export type marcasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update marcas.
     */
    data: XOR<marcasUpdateManyMutationInput, marcasUncheckedUpdateManyInput>
    /**
     * Filter which marcas to update
     */
    where?: marcasWhereInput
    /**
     * Limit how many marcas to update.
     */
    limit?: number
  }

  /**
   * marcas updateManyAndReturn
   */
  export type marcasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * The data used to update marcas.
     */
    data: XOR<marcasUpdateManyMutationInput, marcasUncheckedUpdateManyInput>
    /**
     * Filter which marcas to update
     */
    where?: marcasWhereInput
    /**
     * Limit how many marcas to update.
     */
    limit?: number
  }

  /**
   * marcas upsert
   */
  export type marcasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * The filter to search for the marcas to update in case it exists.
     */
    where: marcasWhereUniqueInput
    /**
     * In case the marcas found by the `where` argument doesn't exist, create a new marcas with this data.
     */
    create: XOR<marcasCreateInput, marcasUncheckedCreateInput>
    /**
     * In case the marcas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<marcasUpdateInput, marcasUncheckedUpdateInput>
  }

  /**
   * marcas delete
   */
  export type marcasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
    /**
     * Filter which marcas to delete.
     */
    where: marcasWhereUniqueInput
  }

  /**
   * marcas deleteMany
   */
  export type marcasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marcas to delete
     */
    where?: marcasWhereInput
    /**
     * Limit how many marcas to delete.
     */
    limit?: number
  }

  /**
   * marcas.carros
   */
  export type marcas$carrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    where?: carrosWhereInput
    orderBy?: carrosOrderByWithRelationInput | carrosOrderByWithRelationInput[]
    cursor?: carrosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarrosScalarFieldEnum | CarrosScalarFieldEnum[]
  }

  /**
   * marcas without action
   */
  export type marcasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marcas
     */
    select?: marcasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marcas
     */
    omit?: marcasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marcasInclude<ExtArgs> | null
  }


  /**
   * Model carros
   */

  export type AggregateCarros = {
    _count: CarrosCountAggregateOutputType | null
    _avg: CarrosAvgAggregateOutputType | null
    _sum: CarrosSumAggregateOutputType | null
    _min: CarrosMinAggregateOutputType | null
    _max: CarrosMaxAggregateOutputType | null
  }

  export type CarrosAvgAggregateOutputType = {
    id: number | null
    precio: Decimal | null
    marca_id: number | null
  }

  export type CarrosSumAggregateOutputType = {
    id: number | null
    precio: Decimal | null
    marca_id: number | null
  }

  export type CarrosMinAggregateOutputType = {
    id: number | null
    modelo: string | null
    fecha_fabricacion: Date | null
    disponible: boolean | null
    precio: Decimal | null
    marca_id: number | null
  }

  export type CarrosMaxAggregateOutputType = {
    id: number | null
    modelo: string | null
    fecha_fabricacion: Date | null
    disponible: boolean | null
    precio: Decimal | null
    marca_id: number | null
  }

  export type CarrosCountAggregateOutputType = {
    id: number
    modelo: number
    fecha_fabricacion: number
    disponible: number
    precio: number
    marca_id: number
    _all: number
  }


  export type CarrosAvgAggregateInputType = {
    id?: true
    precio?: true
    marca_id?: true
  }

  export type CarrosSumAggregateInputType = {
    id?: true
    precio?: true
    marca_id?: true
  }

  export type CarrosMinAggregateInputType = {
    id?: true
    modelo?: true
    fecha_fabricacion?: true
    disponible?: true
    precio?: true
    marca_id?: true
  }

  export type CarrosMaxAggregateInputType = {
    id?: true
    modelo?: true
    fecha_fabricacion?: true
    disponible?: true
    precio?: true
    marca_id?: true
  }

  export type CarrosCountAggregateInputType = {
    id?: true
    modelo?: true
    fecha_fabricacion?: true
    disponible?: true
    precio?: true
    marca_id?: true
    _all?: true
  }

  export type CarrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carros to aggregate.
     */
    where?: carrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carrosOrderByWithRelationInput | carrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carros
    **/
    _count?: true | CarrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrosMaxAggregateInputType
  }

  export type GetCarrosAggregateType<T extends CarrosAggregateArgs> = {
        [P in keyof T & keyof AggregateCarros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarros[P]>
      : GetScalarType<T[P], AggregateCarros[P]>
  }




  export type carrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrosWhereInput
    orderBy?: carrosOrderByWithAggregationInput | carrosOrderByWithAggregationInput[]
    by: CarrosScalarFieldEnum[] | CarrosScalarFieldEnum
    having?: carrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrosCountAggregateInputType | true
    _avg?: CarrosAvgAggregateInputType
    _sum?: CarrosSumAggregateInputType
    _min?: CarrosMinAggregateInputType
    _max?: CarrosMaxAggregateInputType
  }

  export type CarrosGroupByOutputType = {
    id: number
    modelo: string
    fecha_fabricacion: Date
    disponible: boolean
    precio: Decimal
    marca_id: number
    _count: CarrosCountAggregateOutputType | null
    _avg: CarrosAvgAggregateOutputType | null
    _sum: CarrosSumAggregateOutputType | null
    _min: CarrosMinAggregateOutputType | null
    _max: CarrosMaxAggregateOutputType | null
  }

  type GetCarrosGroupByPayload<T extends carrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrosGroupByOutputType[P]>
            : GetScalarType<T[P], CarrosGroupByOutputType[P]>
        }
      >
    >


  export type carrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    fecha_fabricacion?: boolean
    disponible?: boolean
    precio?: boolean
    marca_id?: boolean
    marca?: boolean | marcasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carros"]>

  export type carrosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    fecha_fabricacion?: boolean
    disponible?: boolean
    precio?: boolean
    marca_id?: boolean
    marca?: boolean | marcasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carros"]>

  export type carrosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    fecha_fabricacion?: boolean
    disponible?: boolean
    precio?: boolean
    marca_id?: boolean
    marca?: boolean | marcasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carros"]>

  export type carrosSelectScalar = {
    id?: boolean
    modelo?: boolean
    fecha_fabricacion?: boolean
    disponible?: boolean
    precio?: boolean
    marca_id?: boolean
  }

  export type carrosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelo" | "fecha_fabricacion" | "disponible" | "precio" | "marca_id", ExtArgs["result"]["carros"]>
  export type carrosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marca?: boolean | marcasDefaultArgs<ExtArgs>
  }
  export type carrosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marca?: boolean | marcasDefaultArgs<ExtArgs>
  }
  export type carrosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marca?: boolean | marcasDefaultArgs<ExtArgs>
  }

  export type $carrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carros"
    objects: {
      marca: Prisma.$marcasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelo: string
      fecha_fabricacion: Date
      disponible: boolean
      precio: Prisma.Decimal
      marca_id: number
    }, ExtArgs["result"]["carros"]>
    composites: {}
  }

  type carrosGetPayload<S extends boolean | null | undefined | carrosDefaultArgs> = $Result.GetResult<Prisma.$carrosPayload, S>

  type carrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarrosCountAggregateInputType | true
    }

  export interface carrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carros'], meta: { name: 'carros' } }
    /**
     * Find zero or one Carros that matches the filter.
     * @param {carrosFindUniqueArgs} args - Arguments to find a Carros
     * @example
     * // Get one Carros
     * const carros = await prisma.carros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carrosFindUniqueArgs>(args: SelectSubset<T, carrosFindUniqueArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carrosFindUniqueOrThrowArgs} args - Arguments to find a Carros
     * @example
     * // Get one Carros
     * const carros = await prisma.carros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carrosFindUniqueOrThrowArgs>(args: SelectSubset<T, carrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosFindFirstArgs} args - Arguments to find a Carros
     * @example
     * // Get one Carros
     * const carros = await prisma.carros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carrosFindFirstArgs>(args?: SelectSubset<T, carrosFindFirstArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosFindFirstOrThrowArgs} args - Arguments to find a Carros
     * @example
     * // Get one Carros
     * const carros = await prisma.carros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carrosFindFirstOrThrowArgs>(args?: SelectSubset<T, carrosFindFirstOrThrowArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carros
     * const carros = await prisma.carros.findMany()
     * 
     * // Get first 10 Carros
     * const carros = await prisma.carros.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carrosWithIdOnly = await prisma.carros.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends carrosFindManyArgs>(args?: SelectSubset<T, carrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carros.
     * @param {carrosCreateArgs} args - Arguments to create a Carros.
     * @example
     * // Create one Carros
     * const Carros = await prisma.carros.create({
     *   data: {
     *     // ... data to create a Carros
     *   }
     * })
     * 
     */
    create<T extends carrosCreateArgs>(args: SelectSubset<T, carrosCreateArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carros.
     * @param {carrosCreateManyArgs} args - Arguments to create many Carros.
     * @example
     * // Create many Carros
     * const carros = await prisma.carros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carrosCreateManyArgs>(args?: SelectSubset<T, carrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carros and returns the data saved in the database.
     * @param {carrosCreateManyAndReturnArgs} args - Arguments to create many Carros.
     * @example
     * // Create many Carros
     * const carros = await prisma.carros.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carros and only return the `id`
     * const carrosWithIdOnly = await prisma.carros.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carrosCreateManyAndReturnArgs>(args?: SelectSubset<T, carrosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carros.
     * @param {carrosDeleteArgs} args - Arguments to delete one Carros.
     * @example
     * // Delete one Carros
     * const Carros = await prisma.carros.delete({
     *   where: {
     *     // ... filter to delete one Carros
     *   }
     * })
     * 
     */
    delete<T extends carrosDeleteArgs>(args: SelectSubset<T, carrosDeleteArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carros.
     * @param {carrosUpdateArgs} args - Arguments to update one Carros.
     * @example
     * // Update one Carros
     * const carros = await prisma.carros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carrosUpdateArgs>(args: SelectSubset<T, carrosUpdateArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carros.
     * @param {carrosDeleteManyArgs} args - Arguments to filter Carros to delete.
     * @example
     * // Delete a few Carros
     * const { count } = await prisma.carros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carrosDeleteManyArgs>(args?: SelectSubset<T, carrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carros
     * const carros = await prisma.carros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carrosUpdateManyArgs>(args: SelectSubset<T, carrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carros and returns the data updated in the database.
     * @param {carrosUpdateManyAndReturnArgs} args - Arguments to update many Carros.
     * @example
     * // Update many Carros
     * const carros = await prisma.carros.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carros and only return the `id`
     * const carrosWithIdOnly = await prisma.carros.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends carrosUpdateManyAndReturnArgs>(args: SelectSubset<T, carrosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carros.
     * @param {carrosUpsertArgs} args - Arguments to update or create a Carros.
     * @example
     * // Update or create a Carros
     * const carros = await prisma.carros.upsert({
     *   create: {
     *     // ... data to create a Carros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carros we want to update
     *   }
     * })
     */
    upsert<T extends carrosUpsertArgs>(args: SelectSubset<T, carrosUpsertArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosCountArgs} args - Arguments to filter Carros to count.
     * @example
     * // Count the number of Carros
     * const count = await prisma.carros.count({
     *   where: {
     *     // ... the filter for the Carros we want to count
     *   }
     * })
    **/
    count<T extends carrosCountArgs>(
      args?: Subset<T, carrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarrosAggregateArgs>(args: Subset<T, CarrosAggregateArgs>): Prisma.PrismaPromise<GetCarrosAggregateType<T>>

    /**
     * Group by Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosGroupByArgs} args - Group by arguments.
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
      T extends carrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carrosGroupByArgs['orderBy'] }
        : { orderBy?: carrosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, carrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carros model
   */
  readonly fields: carrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marca<T extends marcasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, marcasDefaultArgs<ExtArgs>>): Prisma__marcasClient<$Result.GetResult<Prisma.$marcasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the carros model
   */
  interface carrosFieldRefs {
    readonly id: FieldRef<"carros", 'Int'>
    readonly modelo: FieldRef<"carros", 'String'>
    readonly fecha_fabricacion: FieldRef<"carros", 'DateTime'>
    readonly disponible: FieldRef<"carros", 'Boolean'>
    readonly precio: FieldRef<"carros", 'Decimal'>
    readonly marca_id: FieldRef<"carros", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * carros findUnique
   */
  export type carrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where: carrosWhereUniqueInput
  }

  /**
   * carros findUniqueOrThrow
   */
  export type carrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where: carrosWhereUniqueInput
  }

  /**
   * carros findFirst
   */
  export type carrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where?: carrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carrosOrderByWithRelationInput | carrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carros.
     */
    cursor?: carrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carros.
     */
    distinct?: CarrosScalarFieldEnum | CarrosScalarFieldEnum[]
  }

  /**
   * carros findFirstOrThrow
   */
  export type carrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where?: carrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carrosOrderByWithRelationInput | carrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carros.
     */
    cursor?: carrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carros.
     */
    distinct?: CarrosScalarFieldEnum | CarrosScalarFieldEnum[]
  }

  /**
   * carros findMany
   */
  export type carrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where?: carrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carrosOrderByWithRelationInput | carrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carros.
     */
    cursor?: carrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    distinct?: CarrosScalarFieldEnum | CarrosScalarFieldEnum[]
  }

  /**
   * carros create
   */
  export type carrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * The data needed to create a carros.
     */
    data: XOR<carrosCreateInput, carrosUncheckedCreateInput>
  }

  /**
   * carros createMany
   */
  export type carrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carros.
     */
    data: carrosCreateManyInput | carrosCreateManyInput[]
  }

  /**
   * carros createManyAndReturn
   */
  export type carrosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * The data used to create many carros.
     */
    data: carrosCreateManyInput | carrosCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carros update
   */
  export type carrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * The data needed to update a carros.
     */
    data: XOR<carrosUpdateInput, carrosUncheckedUpdateInput>
    /**
     * Choose, which carros to update.
     */
    where: carrosWhereUniqueInput
  }

  /**
   * carros updateMany
   */
  export type carrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carros.
     */
    data: XOR<carrosUpdateManyMutationInput, carrosUncheckedUpdateManyInput>
    /**
     * Filter which carros to update
     */
    where?: carrosWhereInput
    /**
     * Limit how many carros to update.
     */
    limit?: number
  }

  /**
   * carros updateManyAndReturn
   */
  export type carrosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * The data used to update carros.
     */
    data: XOR<carrosUpdateManyMutationInput, carrosUncheckedUpdateManyInput>
    /**
     * Filter which carros to update
     */
    where?: carrosWhereInput
    /**
     * Limit how many carros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carros upsert
   */
  export type carrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * The filter to search for the carros to update in case it exists.
     */
    where: carrosWhereUniqueInput
    /**
     * In case the carros found by the `where` argument doesn't exist, create a new carros with this data.
     */
    create: XOR<carrosCreateInput, carrosUncheckedCreateInput>
    /**
     * In case the carros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carrosUpdateInput, carrosUncheckedUpdateInput>
  }

  /**
   * carros delete
   */
  export type carrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter which carros to delete.
     */
    where: carrosWhereUniqueInput
  }

  /**
   * carros deleteMany
   */
  export type carrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carros to delete
     */
    where?: carrosWhereInput
    /**
     * Limit how many carros to delete.
     */
    limit?: number
  }

  /**
   * carros without action
   */
  export type carrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
  }


  /**
   * Model productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    id: number | null
    precio: Decimal | null
  }

  export type ProductosSumAggregateOutputType = {
    id: number | null
    precio: Decimal | null
  }

  export type ProductosMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: Decimal | null
  }

  export type ProductosMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: Decimal | null
  }

  export type ProductosCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    id?: true
    precio?: true
  }

  export type ProductosSumAggregateInputType = {
    id?: true
    precio?: true
  }

  export type ProductosMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
  }

  export type ProductosMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
  }

  export type ProductosCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to aggregate.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
    orderBy?: productosOrderByWithAggregationInput | productosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    id: number
    nombre: string
    precio: Decimal
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
  }, ExtArgs["result"]["productos"]>

  export type productosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
  }, ExtArgs["result"]["productos"]>

  export type productosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
  }, ExtArgs["result"]["productos"]>

  export type productosSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
  }

  export type productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio", ExtArgs["result"]["productos"]>

  export type $productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      precio: Prisma.Decimal
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type productosGetPayload<S extends boolean | null | undefined | productosDefaultArgs> = $Result.GetResult<Prisma.$productosPayload, S>

  type productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productos'], meta: { name: 'productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {productosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productosFindUniqueArgs>(args: SelectSubset<T, productosFindUniqueArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productosFindUniqueOrThrowArgs>(args: SelectSubset<T, productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productosFindFirstArgs>(args?: SelectSubset<T, productosFindFirstArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productosFindFirstOrThrowArgs>(args?: SelectSubset<T, productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productosWithIdOnly = await prisma.productos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productosFindManyArgs>(args?: SelectSubset<T, productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos.
     * @param {productosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends productosCreateArgs>(args: SelectSubset<T, productosCreateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productosCreateManyArgs>(args?: SelectSubset<T, productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {productosCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productosWithIdOnly = await prisma.productos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productosCreateManyAndReturnArgs>(args?: SelectSubset<T, productosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productos.
     * @param {productosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends productosDeleteArgs>(args: SelectSubset<T, productosDeleteArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos.
     * @param {productosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productosUpdateArgs>(args: SelectSubset<T, productosUpdateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productosDeleteManyArgs>(args?: SelectSubset<T, productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productosUpdateManyArgs>(args: SelectSubset<T, productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {productosUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productosWithIdOnly = await prisma.productos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productosUpdateManyAndReturnArgs>(args: SelectSubset<T, productosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productos.
     * @param {productosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends productosUpsertArgs>(args: SelectSubset<T, productosUpsertArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productosCountArgs>(
      args?: Subset<T, productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosGroupByArgs} args - Group by arguments.
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
      T extends productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productosGroupByArgs['orderBy'] }
        : { orderBy?: productosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productos model
   */
  readonly fields: productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the productos model
   */
  interface productosFieldRefs {
    readonly id: FieldRef<"productos", 'Int'>
    readonly nombre: FieldRef<"productos", 'String'>
    readonly precio: FieldRef<"productos", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * productos findUnique
   */
  export type productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findUniqueOrThrow
   */
  export type productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findFirst
   */
  export type productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findFirstOrThrow
   */
  export type productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findMany
   */
  export type productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos create
   */
  export type productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The data needed to create a productos.
     */
    data: XOR<productosCreateInput, productosUncheckedCreateInput>
  }

  /**
   * productos createMany
   */
  export type productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
  }

  /**
   * productos createManyAndReturn
   */
  export type productosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
  }

  /**
   * productos update
   */
  export type productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The data needed to update a productos.
     */
    data: XOR<productosUpdateInput, productosUncheckedUpdateInput>
    /**
     * Choose, which productos to update.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos updateMany
   */
  export type productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * productos updateManyAndReturn
   */
  export type productosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * productos upsert
   */
  export type productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The filter to search for the productos to update in case it exists.
     */
    where: productosWhereUniqueInput
    /**
     * In case the productos found by the `where` argument doesn't exist, create a new productos with this data.
     */
    create: XOR<productosCreateInput, productosUncheckedCreateInput>
    /**
     * In case the productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productosUpdateInput, productosUncheckedUpdateInput>
  }

  /**
   * productos delete
   */
  export type productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Filter which productos to delete.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos deleteMany
   */
  export type productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * productos without action
   */
  export type productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MarcasScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type MarcasScalarFieldEnum = (typeof MarcasScalarFieldEnum)[keyof typeof MarcasScalarFieldEnum]


  export const CarrosScalarFieldEnum: {
    id: 'id',
    modelo: 'modelo',
    fecha_fabricacion: 'fecha_fabricacion',
    disponible: 'disponible',
    precio: 'precio',
    marca_id: 'marca_id'
  };

  export type CarrosScalarFieldEnum = (typeof CarrosScalarFieldEnum)[keyof typeof CarrosScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type marcasWhereInput = {
    AND?: marcasWhereInput | marcasWhereInput[]
    OR?: marcasWhereInput[]
    NOT?: marcasWhereInput | marcasWhereInput[]
    id?: IntFilter<"marcas"> | number
    nombre?: StringFilter<"marcas"> | string
    carros?: CarrosListRelationFilter
  }

  export type marcasOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    carros?: carrosOrderByRelationAggregateInput
  }

  export type marcasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: marcasWhereInput | marcasWhereInput[]
    OR?: marcasWhereInput[]
    NOT?: marcasWhereInput | marcasWhereInput[]
    nombre?: StringFilter<"marcas"> | string
    carros?: CarrosListRelationFilter
  }, "id">

  export type marcasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: marcasCountOrderByAggregateInput
    _avg?: marcasAvgOrderByAggregateInput
    _max?: marcasMaxOrderByAggregateInput
    _min?: marcasMinOrderByAggregateInput
    _sum?: marcasSumOrderByAggregateInput
  }

  export type marcasScalarWhereWithAggregatesInput = {
    AND?: marcasScalarWhereWithAggregatesInput | marcasScalarWhereWithAggregatesInput[]
    OR?: marcasScalarWhereWithAggregatesInput[]
    NOT?: marcasScalarWhereWithAggregatesInput | marcasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"marcas"> | number
    nombre?: StringWithAggregatesFilter<"marcas"> | string
  }

  export type carrosWhereInput = {
    AND?: carrosWhereInput | carrosWhereInput[]
    OR?: carrosWhereInput[]
    NOT?: carrosWhereInput | carrosWhereInput[]
    id?: IntFilter<"carros"> | number
    modelo?: StringFilter<"carros"> | string
    fecha_fabricacion?: DateTimeFilter<"carros"> | Date | string
    disponible?: BoolFilter<"carros"> | boolean
    precio?: DecimalFilter<"carros"> | Decimal | DecimalJsLike | number | string
    marca_id?: IntFilter<"carros"> | number
    marca?: XOR<MarcasScalarRelationFilter, marcasWhereInput>
  }

  export type carrosOrderByWithRelationInput = {
    id?: SortOrder
    modelo?: SortOrder
    fecha_fabricacion?: SortOrder
    disponible?: SortOrder
    precio?: SortOrder
    marca_id?: SortOrder
    marca?: marcasOrderByWithRelationInput
  }

  export type carrosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: carrosWhereInput | carrosWhereInput[]
    OR?: carrosWhereInput[]
    NOT?: carrosWhereInput | carrosWhereInput[]
    modelo?: StringFilter<"carros"> | string
    fecha_fabricacion?: DateTimeFilter<"carros"> | Date | string
    disponible?: BoolFilter<"carros"> | boolean
    precio?: DecimalFilter<"carros"> | Decimal | DecimalJsLike | number | string
    marca_id?: IntFilter<"carros"> | number
    marca?: XOR<MarcasScalarRelationFilter, marcasWhereInput>
  }, "id">

  export type carrosOrderByWithAggregationInput = {
    id?: SortOrder
    modelo?: SortOrder
    fecha_fabricacion?: SortOrder
    disponible?: SortOrder
    precio?: SortOrder
    marca_id?: SortOrder
    _count?: carrosCountOrderByAggregateInput
    _avg?: carrosAvgOrderByAggregateInput
    _max?: carrosMaxOrderByAggregateInput
    _min?: carrosMinOrderByAggregateInput
    _sum?: carrosSumOrderByAggregateInput
  }

  export type carrosScalarWhereWithAggregatesInput = {
    AND?: carrosScalarWhereWithAggregatesInput | carrosScalarWhereWithAggregatesInput[]
    OR?: carrosScalarWhereWithAggregatesInput[]
    NOT?: carrosScalarWhereWithAggregatesInput | carrosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carros"> | number
    modelo?: StringWithAggregatesFilter<"carros"> | string
    fecha_fabricacion?: DateTimeWithAggregatesFilter<"carros"> | Date | string
    disponible?: BoolWithAggregatesFilter<"carros"> | boolean
    precio?: DecimalWithAggregatesFilter<"carros"> | Decimal | DecimalJsLike | number | string
    marca_id?: IntWithAggregatesFilter<"carros"> | number
  }

  export type productosWhereInput = {
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    id?: IntFilter<"productos"> | number
    nombre?: StringFilter<"productos"> | string
    precio?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
  }

  export type productosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
  }

  export type productosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    nombre?: StringFilter<"productos"> | string
    precio?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
  }, "id">

  export type productosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    _count?: productosCountOrderByAggregateInput
    _avg?: productosAvgOrderByAggregateInput
    _max?: productosMaxOrderByAggregateInput
    _min?: productosMinOrderByAggregateInput
    _sum?: productosSumOrderByAggregateInput
  }

  export type productosScalarWhereWithAggregatesInput = {
    AND?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    OR?: productosScalarWhereWithAggregatesInput[]
    NOT?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"productos"> | number
    nombre?: StringWithAggregatesFilter<"productos"> | string
    precio?: DecimalWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string
  }

  export type marcasCreateInput = {
    nombre: string
    carros?: carrosCreateNestedManyWithoutMarcaInput
  }

  export type marcasUncheckedCreateInput = {
    id?: number
    nombre: string
    carros?: carrosUncheckedCreateNestedManyWithoutMarcaInput
  }

  export type marcasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carros?: carrosUpdateManyWithoutMarcaNestedInput
  }

  export type marcasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    carros?: carrosUncheckedUpdateManyWithoutMarcaNestedInput
  }

  export type marcasCreateManyInput = {
    id?: number
    nombre: string
  }

  export type marcasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type marcasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type carrosCreateInput = {
    modelo: string
    fecha_fabricacion: Date | string
    disponible?: boolean
    precio: Decimal | DecimalJsLike | number | string
    marca: marcasCreateNestedOneWithoutCarrosInput
  }

  export type carrosUncheckedCreateInput = {
    id?: number
    modelo: string
    fecha_fabricacion: Date | string
    disponible?: boolean
    precio: Decimal | DecimalJsLike | number | string
    marca_id: number
  }

  export type carrosUpdateInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    fecha_fabricacion?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marca?: marcasUpdateOneRequiredWithoutCarrosNestedInput
  }

  export type carrosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    fecha_fabricacion?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marca_id?: IntFieldUpdateOperationsInput | number
  }

  export type carrosCreateManyInput = {
    id?: number
    modelo: string
    fecha_fabricacion: Date | string
    disponible?: boolean
    precio: Decimal | DecimalJsLike | number | string
    marca_id: number
  }

  export type carrosUpdateManyMutationInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    fecha_fabricacion?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type carrosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    fecha_fabricacion?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    marca_id?: IntFieldUpdateOperationsInput | number
  }

  export type productosCreateInput = {
    nombre: string
    precio: Decimal | DecimalJsLike | number | string
  }

  export type productosUncheckedCreateInput = {
    id?: number
    nombre: string
    precio: Decimal | DecimalJsLike | number | string
  }

  export type productosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type productosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type productosCreateManyInput = {
    id?: number
    nombre: string
    precio: Decimal | DecimalJsLike | number | string
  }

  export type productosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type productosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CarrosListRelationFilter = {
    every?: carrosWhereInput
    some?: carrosWhereInput
    none?: carrosWhereInput
  }

  export type carrosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type marcasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type marcasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type marcasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type marcasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type marcasSumOrderByAggregateInput = {
    id?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type MarcasScalarRelationFilter = {
    is?: marcasWhereInput
    isNot?: marcasWhereInput
  }

  export type carrosCountOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    fecha_fabricacion?: SortOrder
    disponible?: SortOrder
    precio?: SortOrder
    marca_id?: SortOrder
  }

  export type carrosAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    marca_id?: SortOrder
  }

  export type carrosMaxOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    fecha_fabricacion?: SortOrder
    disponible?: SortOrder
    precio?: SortOrder
    marca_id?: SortOrder
  }

  export type carrosMinOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    fecha_fabricacion?: SortOrder
    disponible?: SortOrder
    precio?: SortOrder
    marca_id?: SortOrder
  }

  export type carrosSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    marca_id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type productosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
  }

  export type productosAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type productosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
  }

  export type productosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
  }

  export type productosSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type carrosCreateNestedManyWithoutMarcaInput = {
    create?: XOR<carrosCreateWithoutMarcaInput, carrosUncheckedCreateWithoutMarcaInput> | carrosCreateWithoutMarcaInput[] | carrosUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: carrosCreateOrConnectWithoutMarcaInput | carrosCreateOrConnectWithoutMarcaInput[]
    createMany?: carrosCreateManyMarcaInputEnvelope
    connect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
  }

  export type carrosUncheckedCreateNestedManyWithoutMarcaInput = {
    create?: XOR<carrosCreateWithoutMarcaInput, carrosUncheckedCreateWithoutMarcaInput> | carrosCreateWithoutMarcaInput[] | carrosUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: carrosCreateOrConnectWithoutMarcaInput | carrosCreateOrConnectWithoutMarcaInput[]
    createMany?: carrosCreateManyMarcaInputEnvelope
    connect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type carrosUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<carrosCreateWithoutMarcaInput, carrosUncheckedCreateWithoutMarcaInput> | carrosCreateWithoutMarcaInput[] | carrosUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: carrosCreateOrConnectWithoutMarcaInput | carrosCreateOrConnectWithoutMarcaInput[]
    upsert?: carrosUpsertWithWhereUniqueWithoutMarcaInput | carrosUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: carrosCreateManyMarcaInputEnvelope
    set?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    disconnect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    delete?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    connect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    update?: carrosUpdateWithWhereUniqueWithoutMarcaInput | carrosUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: carrosUpdateManyWithWhereWithoutMarcaInput | carrosUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: carrosScalarWhereInput | carrosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type carrosUncheckedUpdateManyWithoutMarcaNestedInput = {
    create?: XOR<carrosCreateWithoutMarcaInput, carrosUncheckedCreateWithoutMarcaInput> | carrosCreateWithoutMarcaInput[] | carrosUncheckedCreateWithoutMarcaInput[]
    connectOrCreate?: carrosCreateOrConnectWithoutMarcaInput | carrosCreateOrConnectWithoutMarcaInput[]
    upsert?: carrosUpsertWithWhereUniqueWithoutMarcaInput | carrosUpsertWithWhereUniqueWithoutMarcaInput[]
    createMany?: carrosCreateManyMarcaInputEnvelope
    set?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    disconnect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    delete?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    connect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    update?: carrosUpdateWithWhereUniqueWithoutMarcaInput | carrosUpdateWithWhereUniqueWithoutMarcaInput[]
    updateMany?: carrosUpdateManyWithWhereWithoutMarcaInput | carrosUpdateManyWithWhereWithoutMarcaInput[]
    deleteMany?: carrosScalarWhereInput | carrosScalarWhereInput[]
  }

  export type marcasCreateNestedOneWithoutCarrosInput = {
    create?: XOR<marcasCreateWithoutCarrosInput, marcasUncheckedCreateWithoutCarrosInput>
    connectOrCreate?: marcasCreateOrConnectWithoutCarrosInput
    connect?: marcasWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type marcasUpdateOneRequiredWithoutCarrosNestedInput = {
    create?: XOR<marcasCreateWithoutCarrosInput, marcasUncheckedCreateWithoutCarrosInput>
    connectOrCreate?: marcasCreateOrConnectWithoutCarrosInput
    upsert?: marcasUpsertWithoutCarrosInput
    connect?: marcasWhereUniqueInput
    update?: XOR<XOR<marcasUpdateToOneWithWhereWithoutCarrosInput, marcasUpdateWithoutCarrosInput>, marcasUncheckedUpdateWithoutCarrosInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type carrosCreateWithoutMarcaInput = {
    modelo: string
    fecha_fabricacion: Date | string
    disponible?: boolean
    precio: Decimal | DecimalJsLike | number | string
  }

  export type carrosUncheckedCreateWithoutMarcaInput = {
    id?: number
    modelo: string
    fecha_fabricacion: Date | string
    disponible?: boolean
    precio: Decimal | DecimalJsLike | number | string
  }

  export type carrosCreateOrConnectWithoutMarcaInput = {
    where: carrosWhereUniqueInput
    create: XOR<carrosCreateWithoutMarcaInput, carrosUncheckedCreateWithoutMarcaInput>
  }

  export type carrosCreateManyMarcaInputEnvelope = {
    data: carrosCreateManyMarcaInput | carrosCreateManyMarcaInput[]
  }

  export type carrosUpsertWithWhereUniqueWithoutMarcaInput = {
    where: carrosWhereUniqueInput
    update: XOR<carrosUpdateWithoutMarcaInput, carrosUncheckedUpdateWithoutMarcaInput>
    create: XOR<carrosCreateWithoutMarcaInput, carrosUncheckedCreateWithoutMarcaInput>
  }

  export type carrosUpdateWithWhereUniqueWithoutMarcaInput = {
    where: carrosWhereUniqueInput
    data: XOR<carrosUpdateWithoutMarcaInput, carrosUncheckedUpdateWithoutMarcaInput>
  }

  export type carrosUpdateManyWithWhereWithoutMarcaInput = {
    where: carrosScalarWhereInput
    data: XOR<carrosUpdateManyMutationInput, carrosUncheckedUpdateManyWithoutMarcaInput>
  }

  export type carrosScalarWhereInput = {
    AND?: carrosScalarWhereInput | carrosScalarWhereInput[]
    OR?: carrosScalarWhereInput[]
    NOT?: carrosScalarWhereInput | carrosScalarWhereInput[]
    id?: IntFilter<"carros"> | number
    modelo?: StringFilter<"carros"> | string
    fecha_fabricacion?: DateTimeFilter<"carros"> | Date | string
    disponible?: BoolFilter<"carros"> | boolean
    precio?: DecimalFilter<"carros"> | Decimal | DecimalJsLike | number | string
    marca_id?: IntFilter<"carros"> | number
  }

  export type marcasCreateWithoutCarrosInput = {
    nombre: string
  }

  export type marcasUncheckedCreateWithoutCarrosInput = {
    id?: number
    nombre: string
  }

  export type marcasCreateOrConnectWithoutCarrosInput = {
    where: marcasWhereUniqueInput
    create: XOR<marcasCreateWithoutCarrosInput, marcasUncheckedCreateWithoutCarrosInput>
  }

  export type marcasUpsertWithoutCarrosInput = {
    update: XOR<marcasUpdateWithoutCarrosInput, marcasUncheckedUpdateWithoutCarrosInput>
    create: XOR<marcasCreateWithoutCarrosInput, marcasUncheckedCreateWithoutCarrosInput>
    where?: marcasWhereInput
  }

  export type marcasUpdateToOneWithWhereWithoutCarrosInput = {
    where?: marcasWhereInput
    data: XOR<marcasUpdateWithoutCarrosInput, marcasUncheckedUpdateWithoutCarrosInput>
  }

  export type marcasUpdateWithoutCarrosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type marcasUncheckedUpdateWithoutCarrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type carrosCreateManyMarcaInput = {
    id?: number
    modelo: string
    fecha_fabricacion: Date | string
    disponible?: boolean
    precio: Decimal | DecimalJsLike | number | string
  }

  export type carrosUpdateWithoutMarcaInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    fecha_fabricacion?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type carrosUncheckedUpdateWithoutMarcaInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    fecha_fabricacion?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type carrosUncheckedUpdateManyWithoutMarcaInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    fecha_fabricacion?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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