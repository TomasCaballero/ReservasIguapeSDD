
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Season
 * 
 */
export type Season = $Result.DefaultSelection<Prisma.$SeasonPayload>
/**
 * Model SeasonPrice
 * 
 */
export type SeasonPrice = $Result.DefaultSelection<Prisma.$SeasonPricePayload>
/**
 * Model DiscountRule
 * 
 */
export type DiscountRule = $Result.DefaultSelection<Prisma.$DiscountRulePayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Companion
 * 
 */
export type Companion = $Result.DefaultSelection<Prisma.$CompanionPayload>
/**
 * Model UnitOccupancy
 * 
 */
export type UnitOccupancy = $Result.DefaultSelection<Prisma.$UnitOccupancyPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model AnonymizationRequest
 * 
 */
export type AnonymizationRequest = $Result.DefaultSelection<Prisma.$AnonymizationRequestPayload>
/**
 * Model SystemSetting
 * 
 */
export type SystemSetting = $Result.DefaultSelection<Prisma.$SystemSettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DocType: {
  DNI: 'DNI',
  PASSPORT: 'PASSPORT',
  CI: 'CI',
  OTHER: 'OTHER'
};

export type DocType = (typeof DocType)[keyof typeof DocType]


export const ReservationStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  FINISHED: 'FINISHED'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]


export const ReservationOrigin: {
  WEB_DIRECT: 'WEB_DIRECT',
  ADMIN_MANUAL: 'ADMIN_MANUAL',
  ICAL_EXTERNAL: 'ICAL_EXTERNAL'
};

export type ReservationOrigin = (typeof ReservationOrigin)[keyof typeof ReservationOrigin]


export const Currency: {
  ARS: 'ARS',
  USD: 'USD'
};

export type Currency = (typeof Currency)[keyof typeof Currency]


export const OccupancyType: {
  RESERVATION: 'RESERVATION',
  MANUAL_BLOCK: 'MANUAL_BLOCK',
  ICAL_BLOCK: 'ICAL_BLOCK',
  SOFT_LOCK: 'SOFT_LOCK'
};

export type OccupancyType = (typeof OccupancyType)[keyof typeof OccupancyType]


export const OccupancyStatus: {
  ACTIVE: 'ACTIVE',
  RELEASED: 'RELEASED'
};

export type OccupancyStatus = (typeof OccupancyStatus)[keyof typeof OccupancyStatus]


export const PaymentMethod: {
  TRANSFER_ARS: 'TRANSFER_ARS',
  TRANSFER_USD: 'TRANSFER_USD',
  CASH_ARS: 'CASH_ARS',
  CASH_USD: 'CASH_USD',
  MERCADO_PAGO: 'MERCADO_PAGO',
  OTHER: 'OTHER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const AnonymizationStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  EXPIRED: 'EXPIRED'
};

export type AnonymizationStatus = (typeof AnonymizationStatus)[keyof typeof AnonymizationStatus]

}

export type DocType = $Enums.DocType

export const DocType: typeof $Enums.DocType

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

export type ReservationOrigin = $Enums.ReservationOrigin

export const ReservationOrigin: typeof $Enums.ReservationOrigin

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

export type OccupancyType = $Enums.OccupancyType

export const OccupancyType: typeof $Enums.OccupancyType

export type OccupancyStatus = $Enums.OccupancyStatus

export const OccupancyStatus: typeof $Enums.OccupancyStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type AnonymizationStatus = $Enums.AnonymizationStatus

export const AnonymizationStatus: typeof $Enums.AnonymizationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.season`: Exposes CRUD operations for the **Season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.SeasonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seasonPrice`: Exposes CRUD operations for the **SeasonPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeasonPrices
    * const seasonPrices = await prisma.seasonPrice.findMany()
    * ```
    */
  get seasonPrice(): Prisma.SeasonPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discountRule`: Exposes CRUD operations for the **DiscountRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscountRules
    * const discountRules = await prisma.discountRule.findMany()
    * ```
    */
  get discountRule(): Prisma.DiscountRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companion`: Exposes CRUD operations for the **Companion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companions
    * const companions = await prisma.companion.findMany()
    * ```
    */
  get companion(): Prisma.CompanionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unitOccupancy`: Exposes CRUD operations for the **UnitOccupancy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitOccupancies
    * const unitOccupancies = await prisma.unitOccupancy.findMany()
    * ```
    */
  get unitOccupancy(): Prisma.UnitOccupancyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anonymizationRequest`: Exposes CRUD operations for the **AnonymizationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnonymizationRequests
    * const anonymizationRequests = await prisma.anonymizationRequest.findMany()
    * ```
    */
  get anonymizationRequest(): Prisma.AnonymizationRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSetting`: Exposes CRUD operations for the **SystemSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSetting.findMany()
    * ```
    */
  get systemSetting(): Prisma.SystemSettingDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    AdminUser: 'AdminUser',
    Category: 'Category',
    Unit: 'Unit',
    Season: 'Season',
    SeasonPrice: 'SeasonPrice',
    DiscountRule: 'DiscountRule',
    Guest: 'Guest',
    Reservation: 'Reservation',
    Companion: 'Companion',
    UnitOccupancy: 'UnitOccupancy',
    Payment: 'Payment',
    AnonymizationRequest: 'AnonymizationRequest',
    SystemSetting: 'SystemSetting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "category" | "unit" | "season" | "seasonPrice" | "discountRule" | "guest" | "reservation" | "companion" | "unitOccupancy" | "payment" | "anonymizationRequest" | "systemSetting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Season: {
        payload: Prisma.$SeasonPayload<ExtArgs>
        fields: Prisma.SeasonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findFirst: {
            args: Prisma.SeasonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          findMany: {
            args: Prisma.SeasonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          create: {
            args: Prisma.SeasonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          createMany: {
            args: Prisma.SeasonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeasonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          delete: {
            args: Prisma.SeasonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          update: {
            args: Prisma.SeasonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          deleteMany: {
            args: Prisma.SeasonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeasonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>[]
          }
          upsert: {
            args: Prisma.SeasonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPayload>
          }
          aggregate: {
            args: Prisma.SeasonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeason>
          }
          groupBy: {
            args: Prisma.SeasonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonCountAggregateOutputType> | number
          }
        }
      }
      SeasonPrice: {
        payload: Prisma.$SeasonPricePayload<ExtArgs>
        fields: Prisma.SeasonPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeasonPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeasonPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload>
          }
          findFirst: {
            args: Prisma.SeasonPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeasonPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload>
          }
          findMany: {
            args: Prisma.SeasonPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload>[]
          }
          create: {
            args: Prisma.SeasonPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload>
          }
          createMany: {
            args: Prisma.SeasonPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeasonPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload>[]
          }
          delete: {
            args: Prisma.SeasonPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload>
          }
          update: {
            args: Prisma.SeasonPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload>
          }
          deleteMany: {
            args: Prisma.SeasonPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeasonPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeasonPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload>[]
          }
          upsert: {
            args: Prisma.SeasonPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeasonPricePayload>
          }
          aggregate: {
            args: Prisma.SeasonPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeasonPrice>
          }
          groupBy: {
            args: Prisma.SeasonPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeasonPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeasonPriceCountArgs<ExtArgs>
            result: $Utils.Optional<SeasonPriceCountAggregateOutputType> | number
          }
        }
      }
      DiscountRule: {
        payload: Prisma.$DiscountRulePayload<ExtArgs>
        fields: Prisma.DiscountRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          findFirst: {
            args: Prisma.DiscountRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          findMany: {
            args: Prisma.DiscountRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>[]
          }
          create: {
            args: Prisma.DiscountRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          createMany: {
            args: Prisma.DiscountRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscountRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>[]
          }
          delete: {
            args: Prisma.DiscountRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          update: {
            args: Prisma.DiscountRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          deleteMany: {
            args: Prisma.DiscountRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscountRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>[]
          }
          upsert: {
            args: Prisma.DiscountRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountRulePayload>
          }
          aggregate: {
            args: Prisma.DiscountRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscountRule>
          }
          groupBy: {
            args: Prisma.DiscountRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscountRuleCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountRuleCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Companion: {
        payload: Prisma.$CompanionPayload<ExtArgs>
        fields: Prisma.CompanionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          findFirst: {
            args: Prisma.CompanionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          findMany: {
            args: Prisma.CompanionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>[]
          }
          create: {
            args: Prisma.CompanionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          createMany: {
            args: Prisma.CompanionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>[]
          }
          delete: {
            args: Prisma.CompanionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          update: {
            args: Prisma.CompanionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          deleteMany: {
            args: Prisma.CompanionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>[]
          }
          upsert: {
            args: Prisma.CompanionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          aggregate: {
            args: Prisma.CompanionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanion>
          }
          groupBy: {
            args: Prisma.CompanionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanionCountArgs<ExtArgs>
            result: $Utils.Optional<CompanionCountAggregateOutputType> | number
          }
        }
      }
      UnitOccupancy: {
        payload: Prisma.$UnitOccupancyPayload<ExtArgs>
        fields: Prisma.UnitOccupancyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitOccupancyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitOccupancyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload>
          }
          findFirst: {
            args: Prisma.UnitOccupancyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitOccupancyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload>
          }
          findMany: {
            args: Prisma.UnitOccupancyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload>[]
          }
          create: {
            args: Prisma.UnitOccupancyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload>
          }
          createMany: {
            args: Prisma.UnitOccupancyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitOccupancyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload>[]
          }
          delete: {
            args: Prisma.UnitOccupancyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload>
          }
          update: {
            args: Prisma.UnitOccupancyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload>
          }
          deleteMany: {
            args: Prisma.UnitOccupancyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitOccupancyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitOccupancyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload>[]
          }
          upsert: {
            args: Prisma.UnitOccupancyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitOccupancyPayload>
          }
          aggregate: {
            args: Prisma.UnitOccupancyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitOccupancy>
          }
          groupBy: {
            args: Prisma.UnitOccupancyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitOccupancyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitOccupancyCountArgs<ExtArgs>
            result: $Utils.Optional<UnitOccupancyCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      AnonymizationRequest: {
        payload: Prisma.$AnonymizationRequestPayload<ExtArgs>
        fields: Prisma.AnonymizationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnonymizationRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnonymizationRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload>
          }
          findFirst: {
            args: Prisma.AnonymizationRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnonymizationRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload>
          }
          findMany: {
            args: Prisma.AnonymizationRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload>[]
          }
          create: {
            args: Prisma.AnonymizationRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload>
          }
          createMany: {
            args: Prisma.AnonymizationRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnonymizationRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload>[]
          }
          delete: {
            args: Prisma.AnonymizationRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload>
          }
          update: {
            args: Prisma.AnonymizationRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload>
          }
          deleteMany: {
            args: Prisma.AnonymizationRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnonymizationRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnonymizationRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload>[]
          }
          upsert: {
            args: Prisma.AnonymizationRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnonymizationRequestPayload>
          }
          aggregate: {
            args: Prisma.AnonymizationRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnonymizationRequest>
          }
          groupBy: {
            args: Prisma.AnonymizationRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnonymizationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnonymizationRequestCountArgs<ExtArgs>
            result: $Utils.Optional<AnonymizationRequestCountAggregateOutputType> | number
          }
        }
      }
      SystemSetting: {
        payload: Prisma.$SystemSettingPayload<ExtArgs>
        fields: Prisma.SystemSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findMany: {
            args: Prisma.SystemSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          create: {
            args: Prisma.SystemSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          createMany: {
            args: Prisma.SystemSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          update: {
            args: Prisma.SystemSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSetting>
          }
          groupBy: {
            args: Prisma.SystemSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    category?: CategoryOmit
    unit?: UnitOmit
    season?: SeasonOmit
    seasonPrice?: SeasonPriceOmit
    discountRule?: DiscountRuleOmit
    guest?: GuestOmit
    reservation?: ReservationOmit
    companion?: CompanionOmit
    unitOccupancy?: UnitOccupancyOmit
    payment?: PaymentOmit
    anonymizationRequest?: AnonymizationRequestOmit
    systemSetting?: SystemSettingOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    units: number
    seasonPrices: number
    reservations: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | CategoryCountOutputTypeCountUnitsArgs
    seasonPrices?: boolean | CategoryCountOutputTypeCountSeasonPricesArgs
    reservations?: boolean | CategoryCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSeasonPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonPriceWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    occupancies: number
    reservations: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occupancies?: boolean | UnitCountOutputTypeCountOccupanciesArgs
    reservations?: boolean | UnitCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountOccupanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitOccupancyWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type SeasonCountOutputType
   */

  export type SeasonCountOutputType = {
    seasonPrices: number
  }

  export type SeasonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasonPrices?: boolean | SeasonCountOutputTypeCountSeasonPricesArgs
  }

  // Custom InputTypes
  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonCountOutputType
     */
    select?: SeasonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeasonCountOutputType without action
   */
  export type SeasonCountOutputTypeCountSeasonPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonPriceWhereInput
  }


  /**
   * Count Type GuestCountOutputType
   */

  export type GuestCountOutputType = {
    reservations: number
    anonymizationRequests: number
  }

  export type GuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | GuestCountOutputTypeCountReservationsArgs
    anonymizationRequests?: boolean | GuestCountOutputTypeCountAnonymizationRequestsArgs
  }

  // Custom InputTypes
  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     */
    select?: GuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountAnonymizationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnonymizationRequestWhereInput
  }


  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    companions: number
    payments: number
    occupancies: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companions?: boolean | ReservationCountOutputTypeCountCompanionsArgs
    payments?: boolean | ReservationCountOutputTypeCountPaymentsArgs
    occupancies?: boolean | ReservationCountOutputTypeCountOccupanciesArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountCompanionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionWhereInput
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountOccupanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitOccupancyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    capacityAdults: number | null
    capacityChildren: number | null
    maxOccupancy: number | null
    basePriceArs: Decimal | null
    basePriceUsd: Decimal | null
    displayOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    capacityAdults: number | null
    capacityChildren: number | null
    maxOccupancy: number | null
    basePriceArs: Decimal | null
    basePriceUsd: Decimal | null
    displayOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    capacityAdults: number | null
    capacityChildren: number | null
    maxOccupancy: number | null
    basePriceArs: Decimal | null
    basePriceUsd: Decimal | null
    isActive: boolean | null
    displayOrder: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    capacityAdults: number | null
    capacityChildren: number | null
    maxOccupancy: number | null
    basePriceArs: Decimal | null
    basePriceUsd: Decimal | null
    isActive: boolean | null
    displayOrder: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    capacityAdults: number
    capacityChildren: number
    maxOccupancy: number
    basePriceArs: number
    basePriceUsd: number
    images: number
    isActive: number
    displayOrder: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    capacityAdults?: true
    capacityChildren?: true
    maxOccupancy?: true
    basePriceArs?: true
    basePriceUsd?: true
    displayOrder?: true
  }

  export type CategorySumAggregateInputType = {
    capacityAdults?: true
    capacityChildren?: true
    maxOccupancy?: true
    basePriceArs?: true
    basePriceUsd?: true
    displayOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    capacityAdults?: true
    capacityChildren?: true
    maxOccupancy?: true
    basePriceArs?: true
    basePriceUsd?: true
    isActive?: true
    displayOrder?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    capacityAdults?: true
    capacityChildren?: true
    maxOccupancy?: true
    basePriceArs?: true
    basePriceUsd?: true
    isActive?: true
    displayOrder?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    capacityAdults?: true
    capacityChildren?: true
    maxOccupancy?: true
    basePriceArs?: true
    basePriceUsd?: true
    images?: true
    isActive?: true
    displayOrder?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string | null
    capacityAdults: number
    capacityChildren: number
    maxOccupancy: number
    basePriceArs: Decimal
    basePriceUsd: Decimal
    images: JsonValue
    isActive: boolean
    displayOrder: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    capacityAdults?: boolean
    capacityChildren?: boolean
    maxOccupancy?: boolean
    basePriceArs?: boolean
    basePriceUsd?: boolean
    images?: boolean
    isActive?: boolean
    displayOrder?: boolean
    units?: boolean | Category$unitsArgs<ExtArgs>
    seasonPrices?: boolean | Category$seasonPricesArgs<ExtArgs>
    reservations?: boolean | Category$reservationsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    capacityAdults?: boolean
    capacityChildren?: boolean
    maxOccupancy?: boolean
    basePriceArs?: boolean
    basePriceUsd?: boolean
    images?: boolean
    isActive?: boolean
    displayOrder?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    capacityAdults?: boolean
    capacityChildren?: boolean
    maxOccupancy?: boolean
    basePriceArs?: boolean
    basePriceUsd?: boolean
    images?: boolean
    isActive?: boolean
    displayOrder?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    capacityAdults?: boolean
    capacityChildren?: boolean
    maxOccupancy?: boolean
    basePriceArs?: boolean
    basePriceUsd?: boolean
    images?: boolean
    isActive?: boolean
    displayOrder?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "capacityAdults" | "capacityChildren" | "maxOccupancy" | "basePriceArs" | "basePriceUsd" | "images" | "isActive" | "displayOrder", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | Category$unitsArgs<ExtArgs>
    seasonPrices?: boolean | Category$seasonPricesArgs<ExtArgs>
    reservations?: boolean | Category$reservationsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      units: Prisma.$UnitPayload<ExtArgs>[]
      seasonPrices: Prisma.$SeasonPricePayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string | null
      capacityAdults: number
      capacityChildren: number
      maxOccupancy: number
      basePriceArs: Prisma.Decimal
      basePriceUsd: Prisma.Decimal
      images: Prisma.JsonValue
      isActive: boolean
      displayOrder: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units<T extends Category$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Category$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seasonPrices<T extends Category$seasonPricesArgs<ExtArgs> = {}>(args?: Subset<T, Category$seasonPricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Category$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Category$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly capacityAdults: FieldRef<"Category", 'Int'>
    readonly capacityChildren: FieldRef<"Category", 'Int'>
    readonly maxOccupancy: FieldRef<"Category", 'Int'>
    readonly basePriceArs: FieldRef<"Category", 'Decimal'>
    readonly basePriceUsd: FieldRef<"Category", 'Decimal'>
    readonly images: FieldRef<"Category", 'Json'>
    readonly isActive: FieldRef<"Category", 'Boolean'>
    readonly displayOrder: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.units
   */
  export type Category$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Category.seasonPrices
   */
  export type Category$seasonPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    where?: SeasonPriceWhereInput
    orderBy?: SeasonPriceOrderByWithRelationInput | SeasonPriceOrderByWithRelationInput[]
    cursor?: SeasonPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonPriceScalarFieldEnum | SeasonPriceScalarFieldEnum[]
  }

  /**
   * Category.reservations
   */
  export type Category$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    icalFeedUrl: string | null
    icalExportToken: string | null
    isActive: boolean | null
    notes: string | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    name: string | null
    icalFeedUrl: string | null
    icalExportToken: string | null
    isActive: boolean | null
    notes: string | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    categoryId: number
    name: number
    icalFeedUrl: number
    icalExportToken: number
    isActive: number
    notes: number
    _all: number
  }


  export type UnitMinAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    icalFeedUrl?: true
    icalExportToken?: true
    isActive?: true
    notes?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    icalFeedUrl?: true
    icalExportToken?: true
    isActive?: true
    notes?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    categoryId?: true
    name?: true
    icalFeedUrl?: true
    icalExportToken?: true
    isActive?: true
    notes?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    categoryId: string
    name: string
    icalFeedUrl: string | null
    icalExportToken: string
    isActive: boolean
    notes: string | null
    _count: UnitCountAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    icalFeedUrl?: boolean
    icalExportToken?: boolean
    isActive?: boolean
    notes?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    occupancies?: boolean | Unit$occupanciesArgs<ExtArgs>
    reservations?: boolean | Unit$reservationsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    icalFeedUrl?: boolean
    icalExportToken?: boolean
    isActive?: boolean
    notes?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    name?: boolean
    icalFeedUrl?: boolean
    icalExportToken?: boolean
    isActive?: boolean
    notes?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    categoryId?: boolean
    name?: boolean
    icalFeedUrl?: boolean
    icalExportToken?: boolean
    isActive?: boolean
    notes?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "name" | "icalFeedUrl" | "icalExportToken" | "isActive" | "notes", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    occupancies?: boolean | Unit$occupanciesArgs<ExtArgs>
    reservations?: boolean | Unit$reservationsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      occupancies: Prisma.$UnitOccupancyPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string
      name: string
      icalFeedUrl: string | null
      icalExportToken: string
      isActive: boolean
      notes: string | null
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    occupancies<T extends Unit$occupanciesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$occupanciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Unit$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly categoryId: FieldRef<"Unit", 'String'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly icalFeedUrl: FieldRef<"Unit", 'String'>
    readonly icalExportToken: FieldRef<"Unit", 'String'>
    readonly isActive: FieldRef<"Unit", 'Boolean'>
    readonly notes: FieldRef<"Unit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.occupancies
   */
  export type Unit$occupanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    where?: UnitOccupancyWhereInput
    orderBy?: UnitOccupancyOrderByWithRelationInput | UnitOccupancyOrderByWithRelationInput[]
    cursor?: UnitOccupancyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitOccupancyScalarFieldEnum | UnitOccupancyScalarFieldEnum[]
  }

  /**
   * Unit.reservations
   */
  export type Unit$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Season
   */

  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonAvgAggregateOutputType = {
    minStayNights: number | null
  }

  export type SeasonSumAggregateOutputType = {
    minStayNights: number | null
  }

  export type SeasonMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    minStayNights: number | null
    isActive: boolean | null
  }

  export type SeasonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    minStayNights: number | null
    isActive: boolean | null
  }

  export type SeasonCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    minStayNights: number
    isActive: number
    _all: number
  }


  export type SeasonAvgAggregateInputType = {
    minStayNights?: true
  }

  export type SeasonSumAggregateInputType = {
    minStayNights?: true
  }

  export type SeasonMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    minStayNights?: true
    isActive?: true
  }

  export type SeasonMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    minStayNights?: true
    isActive?: true
  }

  export type SeasonCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    minStayNights?: true
    isActive?: true
    _all?: true
  }

  export type SeasonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Season to aggregate.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type SeasonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonWhereInput
    orderBy?: SeasonOrderByWithAggregationInput | SeasonOrderByWithAggregationInput[]
    by: SeasonScalarFieldEnum[] | SeasonScalarFieldEnum
    having?: SeasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _avg?: SeasonAvgAggregateInputType
    _sum?: SeasonSumAggregateInputType
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }

  export type SeasonGroupByOutputType = {
    id: string
    name: string
    startDate: Date
    endDate: Date
    minStayNights: number
    isActive: boolean
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends SeasonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type SeasonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    minStayNights?: boolean
    isActive?: boolean
    seasonPrices?: boolean | Season$seasonPricesArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    minStayNights?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    minStayNights?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["season"]>

  export type SeasonSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    minStayNights?: boolean
    isActive?: boolean
  }

  export type SeasonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "minStayNights" | "isActive", ExtArgs["result"]["season"]>
  export type SeasonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seasonPrices?: boolean | Season$seasonPricesArgs<ExtArgs>
    _count?: boolean | SeasonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeasonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SeasonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SeasonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Season"
    objects: {
      seasonPrices: Prisma.$SeasonPricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date
      endDate: Date
      minStayNights: number
      isActive: boolean
    }, ExtArgs["result"]["season"]>
    composites: {}
  }

  type SeasonGetPayload<S extends boolean | null | undefined | SeasonDefaultArgs> = $Result.GetResult<Prisma.$SeasonPayload, S>

  type SeasonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeasonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeasonCountAggregateInputType | true
    }

  export interface SeasonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Season'], meta: { name: 'Season' } }
    /**
     * Find zero or one Season that matches the filter.
     * @param {SeasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonFindUniqueArgs>(args: SelectSubset<T, SeasonFindUniqueArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Season that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonFindUniqueOrThrowArgs>(args: SelectSubset<T, SeasonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonFindFirstArgs>(args?: SelectSubset<T, SeasonFindFirstArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Season that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonFindFirstOrThrowArgs>(args?: SelectSubset<T, SeasonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonWithIdOnly = await prisma.season.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeasonFindManyArgs>(args?: SelectSubset<T, SeasonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Season.
     * @param {SeasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
     */
    create<T extends SeasonCreateArgs>(args: SelectSubset<T, SeasonCreateArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seasons.
     * @param {SeasonCreateManyArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeasonCreateManyArgs>(args?: SelectSubset<T, SeasonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seasons and returns the data saved in the database.
     * @param {SeasonCreateManyAndReturnArgs} args - Arguments to create many Seasons.
     * @example
     * // Create many Seasons
     * const season = await prisma.season.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeasonCreateManyAndReturnArgs>(args?: SelectSubset<T, SeasonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Season.
     * @param {SeasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
     */
    delete<T extends SeasonDeleteArgs>(args: SelectSubset<T, SeasonDeleteArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Season.
     * @param {SeasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeasonUpdateArgs>(args: SelectSubset<T, SeasonUpdateArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seasons.
     * @param {SeasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeasonDeleteManyArgs>(args?: SelectSubset<T, SeasonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeasonUpdateManyArgs>(args: SelectSubset<T, SeasonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons and returns the data updated in the database.
     * @param {SeasonUpdateManyAndReturnArgs} args - Arguments to update many Seasons.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seasons and only return the `id`
     * const seasonWithIdOnly = await prisma.season.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeasonUpdateManyAndReturnArgs>(args: SelectSubset<T, SeasonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Season.
     * @param {SeasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
     */
    upsert<T extends SeasonUpsertArgs>(args: SelectSubset<T, SeasonUpsertArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends SeasonCountArgs>(
      args?: Subset<T, SeasonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): Prisma.PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonGroupByArgs} args - Group by arguments.
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
      T extends SeasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonGroupByArgs['orderBy'] }
        : { orderBy?: SeasonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Season model
   */
  readonly fields: SeasonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seasonPrices<T extends Season$seasonPricesArgs<ExtArgs> = {}>(args?: Subset<T, Season$seasonPricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Season model
   */
  interface SeasonFieldRefs {
    readonly id: FieldRef<"Season", 'String'>
    readonly name: FieldRef<"Season", 'String'>
    readonly startDate: FieldRef<"Season", 'DateTime'>
    readonly endDate: FieldRef<"Season", 'DateTime'>
    readonly minStayNights: FieldRef<"Season", 'Int'>
    readonly isActive: FieldRef<"Season", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Season findUnique
   */
  export type SeasonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season findUniqueOrThrow
   */
  export type SeasonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season findFirst
   */
  export type SeasonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season findFirstOrThrow
   */
  export type SeasonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Season to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season findMany
   */
  export type SeasonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter, which Seasons to fetch.
     */
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     */
    orderBy?: SeasonOrderByWithRelationInput | SeasonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seasons.
     */
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     */
    distinct?: SeasonScalarFieldEnum | SeasonScalarFieldEnum[]
  }

  /**
   * Season create
   */
  export type SeasonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to create a Season.
     */
    data: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
  }

  /**
   * Season createMany
   */
  export type SeasonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Season createManyAndReturn
   */
  export type SeasonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * The data used to create many Seasons.
     */
    data: SeasonCreateManyInput | SeasonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Season update
   */
  export type SeasonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The data needed to update a Season.
     */
    data: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
    /**
     * Choose, which Season to update.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season updateMany
   */
  export type SeasonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
  }

  /**
   * Season updateManyAndReturn
   */
  export type SeasonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * The data used to update Seasons.
     */
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to update.
     */
    limit?: number
  }

  /**
   * Season upsert
   */
  export type SeasonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * The filter to search for the Season to update in case it exists.
     */
    where: SeasonWhereUniqueInput
    /**
     * In case the Season found by the `where` argument doesn't exist, create a new Season with this data.
     */
    create: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
    /**
     * In case the Season was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
  }

  /**
   * Season delete
   */
  export type SeasonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
    /**
     * Filter which Season to delete.
     */
    where: SeasonWhereUniqueInput
  }

  /**
   * Season deleteMany
   */
  export type SeasonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seasons to delete
     */
    where?: SeasonWhereInput
    /**
     * Limit how many Seasons to delete.
     */
    limit?: number
  }

  /**
   * Season.seasonPrices
   */
  export type Season$seasonPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    where?: SeasonPriceWhereInput
    orderBy?: SeasonPriceOrderByWithRelationInput | SeasonPriceOrderByWithRelationInput[]
    cursor?: SeasonPriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeasonPriceScalarFieldEnum | SeasonPriceScalarFieldEnum[]
  }

  /**
   * Season without action
   */
  export type SeasonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Season
     */
    select?: SeasonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Season
     */
    omit?: SeasonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonInclude<ExtArgs> | null
  }


  /**
   * Model SeasonPrice
   */

  export type AggregateSeasonPrice = {
    _count: SeasonPriceCountAggregateOutputType | null
    _avg: SeasonPriceAvgAggregateOutputType | null
    _sum: SeasonPriceSumAggregateOutputType | null
    _min: SeasonPriceMinAggregateOutputType | null
    _max: SeasonPriceMaxAggregateOutputType | null
  }

  export type SeasonPriceAvgAggregateOutputType = {
    priceArs: Decimal | null
    priceUsd: Decimal | null
  }

  export type SeasonPriceSumAggregateOutputType = {
    priceArs: Decimal | null
    priceUsd: Decimal | null
  }

  export type SeasonPriceMinAggregateOutputType = {
    id: string | null
    seasonId: string | null
    categoryId: string | null
    priceArs: Decimal | null
    priceUsd: Decimal | null
  }

  export type SeasonPriceMaxAggregateOutputType = {
    id: string | null
    seasonId: string | null
    categoryId: string | null
    priceArs: Decimal | null
    priceUsd: Decimal | null
  }

  export type SeasonPriceCountAggregateOutputType = {
    id: number
    seasonId: number
    categoryId: number
    priceArs: number
    priceUsd: number
    _all: number
  }


  export type SeasonPriceAvgAggregateInputType = {
    priceArs?: true
    priceUsd?: true
  }

  export type SeasonPriceSumAggregateInputType = {
    priceArs?: true
    priceUsd?: true
  }

  export type SeasonPriceMinAggregateInputType = {
    id?: true
    seasonId?: true
    categoryId?: true
    priceArs?: true
    priceUsd?: true
  }

  export type SeasonPriceMaxAggregateInputType = {
    id?: true
    seasonId?: true
    categoryId?: true
    priceArs?: true
    priceUsd?: true
  }

  export type SeasonPriceCountAggregateInputType = {
    id?: true
    seasonId?: true
    categoryId?: true
    priceArs?: true
    priceUsd?: true
    _all?: true
  }

  export type SeasonPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeasonPrice to aggregate.
     */
    where?: SeasonPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonPrices to fetch.
     */
    orderBy?: SeasonPriceOrderByWithRelationInput | SeasonPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeasonPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeasonPrices
    **/
    _count?: true | SeasonPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonPriceMaxAggregateInputType
  }

  export type GetSeasonPriceAggregateType<T extends SeasonPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateSeasonPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeasonPrice[P]>
      : GetScalarType<T[P], AggregateSeasonPrice[P]>
  }




  export type SeasonPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeasonPriceWhereInput
    orderBy?: SeasonPriceOrderByWithAggregationInput | SeasonPriceOrderByWithAggregationInput[]
    by: SeasonPriceScalarFieldEnum[] | SeasonPriceScalarFieldEnum
    having?: SeasonPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonPriceCountAggregateInputType | true
    _avg?: SeasonPriceAvgAggregateInputType
    _sum?: SeasonPriceSumAggregateInputType
    _min?: SeasonPriceMinAggregateInputType
    _max?: SeasonPriceMaxAggregateInputType
  }

  export type SeasonPriceGroupByOutputType = {
    id: string
    seasonId: string
    categoryId: string
    priceArs: Decimal
    priceUsd: Decimal
    _count: SeasonPriceCountAggregateOutputType | null
    _avg: SeasonPriceAvgAggregateOutputType | null
    _sum: SeasonPriceSumAggregateOutputType | null
    _min: SeasonPriceMinAggregateOutputType | null
    _max: SeasonPriceMaxAggregateOutputType | null
  }

  type GetSeasonPriceGroupByPayload<T extends SeasonPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeasonPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonPriceGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonPriceGroupByOutputType[P]>
        }
      >
    >


  export type SeasonPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    categoryId?: boolean
    priceArs?: boolean
    priceUsd?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonPrice"]>

  export type SeasonPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    categoryId?: boolean
    priceArs?: boolean
    priceUsd?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonPrice"]>

  export type SeasonPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seasonId?: boolean
    categoryId?: boolean
    priceArs?: boolean
    priceUsd?: boolean
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seasonPrice"]>

  export type SeasonPriceSelectScalar = {
    id?: boolean
    seasonId?: boolean
    categoryId?: boolean
    priceArs?: boolean
    priceUsd?: boolean
  }

  export type SeasonPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seasonId" | "categoryId" | "priceArs" | "priceUsd", ExtArgs["result"]["seasonPrice"]>
  export type SeasonPriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SeasonPriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type SeasonPriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    season?: boolean | SeasonDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $SeasonPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeasonPrice"
    objects: {
      season: Prisma.$SeasonPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seasonId: string
      categoryId: string
      priceArs: Prisma.Decimal
      priceUsd: Prisma.Decimal
    }, ExtArgs["result"]["seasonPrice"]>
    composites: {}
  }

  type SeasonPriceGetPayload<S extends boolean | null | undefined | SeasonPriceDefaultArgs> = $Result.GetResult<Prisma.$SeasonPricePayload, S>

  type SeasonPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeasonPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeasonPriceCountAggregateInputType | true
    }

  export interface SeasonPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeasonPrice'], meta: { name: 'SeasonPrice' } }
    /**
     * Find zero or one SeasonPrice that matches the filter.
     * @param {SeasonPriceFindUniqueArgs} args - Arguments to find a SeasonPrice
     * @example
     * // Get one SeasonPrice
     * const seasonPrice = await prisma.seasonPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeasonPriceFindUniqueArgs>(args: SelectSubset<T, SeasonPriceFindUniqueArgs<ExtArgs>>): Prisma__SeasonPriceClient<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeasonPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeasonPriceFindUniqueOrThrowArgs} args - Arguments to find a SeasonPrice
     * @example
     * // Get one SeasonPrice
     * const seasonPrice = await prisma.seasonPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeasonPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, SeasonPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeasonPriceClient<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeasonPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPriceFindFirstArgs} args - Arguments to find a SeasonPrice
     * @example
     * // Get one SeasonPrice
     * const seasonPrice = await prisma.seasonPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeasonPriceFindFirstArgs>(args?: SelectSubset<T, SeasonPriceFindFirstArgs<ExtArgs>>): Prisma__SeasonPriceClient<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeasonPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPriceFindFirstOrThrowArgs} args - Arguments to find a SeasonPrice
     * @example
     * // Get one SeasonPrice
     * const seasonPrice = await prisma.seasonPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeasonPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, SeasonPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeasonPriceClient<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeasonPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeasonPrices
     * const seasonPrices = await prisma.seasonPrice.findMany()
     * 
     * // Get first 10 SeasonPrices
     * const seasonPrices = await prisma.seasonPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonPriceWithIdOnly = await prisma.seasonPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeasonPriceFindManyArgs>(args?: SelectSubset<T, SeasonPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeasonPrice.
     * @param {SeasonPriceCreateArgs} args - Arguments to create a SeasonPrice.
     * @example
     * // Create one SeasonPrice
     * const SeasonPrice = await prisma.seasonPrice.create({
     *   data: {
     *     // ... data to create a SeasonPrice
     *   }
     * })
     * 
     */
    create<T extends SeasonPriceCreateArgs>(args: SelectSubset<T, SeasonPriceCreateArgs<ExtArgs>>): Prisma__SeasonPriceClient<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeasonPrices.
     * @param {SeasonPriceCreateManyArgs} args - Arguments to create many SeasonPrices.
     * @example
     * // Create many SeasonPrices
     * const seasonPrice = await prisma.seasonPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeasonPriceCreateManyArgs>(args?: SelectSubset<T, SeasonPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeasonPrices and returns the data saved in the database.
     * @param {SeasonPriceCreateManyAndReturnArgs} args - Arguments to create many SeasonPrices.
     * @example
     * // Create many SeasonPrices
     * const seasonPrice = await prisma.seasonPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeasonPrices and only return the `id`
     * const seasonPriceWithIdOnly = await prisma.seasonPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeasonPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, SeasonPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeasonPrice.
     * @param {SeasonPriceDeleteArgs} args - Arguments to delete one SeasonPrice.
     * @example
     * // Delete one SeasonPrice
     * const SeasonPrice = await prisma.seasonPrice.delete({
     *   where: {
     *     // ... filter to delete one SeasonPrice
     *   }
     * })
     * 
     */
    delete<T extends SeasonPriceDeleteArgs>(args: SelectSubset<T, SeasonPriceDeleteArgs<ExtArgs>>): Prisma__SeasonPriceClient<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeasonPrice.
     * @param {SeasonPriceUpdateArgs} args - Arguments to update one SeasonPrice.
     * @example
     * // Update one SeasonPrice
     * const seasonPrice = await prisma.seasonPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeasonPriceUpdateArgs>(args: SelectSubset<T, SeasonPriceUpdateArgs<ExtArgs>>): Prisma__SeasonPriceClient<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeasonPrices.
     * @param {SeasonPriceDeleteManyArgs} args - Arguments to filter SeasonPrices to delete.
     * @example
     * // Delete a few SeasonPrices
     * const { count } = await prisma.seasonPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeasonPriceDeleteManyArgs>(args?: SelectSubset<T, SeasonPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeasonPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeasonPrices
     * const seasonPrice = await prisma.seasonPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeasonPriceUpdateManyArgs>(args: SelectSubset<T, SeasonPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeasonPrices and returns the data updated in the database.
     * @param {SeasonPriceUpdateManyAndReturnArgs} args - Arguments to update many SeasonPrices.
     * @example
     * // Update many SeasonPrices
     * const seasonPrice = await prisma.seasonPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeasonPrices and only return the `id`
     * const seasonPriceWithIdOnly = await prisma.seasonPrice.updateManyAndReturn({
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
    updateManyAndReturn<T extends SeasonPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, SeasonPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeasonPrice.
     * @param {SeasonPriceUpsertArgs} args - Arguments to update or create a SeasonPrice.
     * @example
     * // Update or create a SeasonPrice
     * const seasonPrice = await prisma.seasonPrice.upsert({
     *   create: {
     *     // ... data to create a SeasonPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeasonPrice we want to update
     *   }
     * })
     */
    upsert<T extends SeasonPriceUpsertArgs>(args: SelectSubset<T, SeasonPriceUpsertArgs<ExtArgs>>): Prisma__SeasonPriceClient<$Result.GetResult<Prisma.$SeasonPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeasonPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPriceCountArgs} args - Arguments to filter SeasonPrices to count.
     * @example
     * // Count the number of SeasonPrices
     * const count = await prisma.seasonPrice.count({
     *   where: {
     *     // ... the filter for the SeasonPrices we want to count
     *   }
     * })
    **/
    count<T extends SeasonPriceCountArgs>(
      args?: Subset<T, SeasonPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeasonPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeasonPriceAggregateArgs>(args: Subset<T, SeasonPriceAggregateArgs>): Prisma.PrismaPromise<GetSeasonPriceAggregateType<T>>

    /**
     * Group by SeasonPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonPriceGroupByArgs} args - Group by arguments.
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
      T extends SeasonPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonPriceGroupByArgs['orderBy'] }
        : { orderBy?: SeasonPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeasonPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeasonPrice model
   */
  readonly fields: SeasonPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeasonPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeasonPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    season<T extends SeasonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeasonDefaultArgs<ExtArgs>>): Prisma__SeasonClient<$Result.GetResult<Prisma.$SeasonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeasonPrice model
   */
  interface SeasonPriceFieldRefs {
    readonly id: FieldRef<"SeasonPrice", 'String'>
    readonly seasonId: FieldRef<"SeasonPrice", 'String'>
    readonly categoryId: FieldRef<"SeasonPrice", 'String'>
    readonly priceArs: FieldRef<"SeasonPrice", 'Decimal'>
    readonly priceUsd: FieldRef<"SeasonPrice", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * SeasonPrice findUnique
   */
  export type SeasonPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    /**
     * Filter, which SeasonPrice to fetch.
     */
    where: SeasonPriceWhereUniqueInput
  }

  /**
   * SeasonPrice findUniqueOrThrow
   */
  export type SeasonPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    /**
     * Filter, which SeasonPrice to fetch.
     */
    where: SeasonPriceWhereUniqueInput
  }

  /**
   * SeasonPrice findFirst
   */
  export type SeasonPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    /**
     * Filter, which SeasonPrice to fetch.
     */
    where?: SeasonPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonPrices to fetch.
     */
    orderBy?: SeasonPriceOrderByWithRelationInput | SeasonPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeasonPrices.
     */
    cursor?: SeasonPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonPrices.
     */
    distinct?: SeasonPriceScalarFieldEnum | SeasonPriceScalarFieldEnum[]
  }

  /**
   * SeasonPrice findFirstOrThrow
   */
  export type SeasonPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    /**
     * Filter, which SeasonPrice to fetch.
     */
    where?: SeasonPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonPrices to fetch.
     */
    orderBy?: SeasonPriceOrderByWithRelationInput | SeasonPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeasonPrices.
     */
    cursor?: SeasonPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonPrices.
     */
    distinct?: SeasonPriceScalarFieldEnum | SeasonPriceScalarFieldEnum[]
  }

  /**
   * SeasonPrice findMany
   */
  export type SeasonPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    /**
     * Filter, which SeasonPrices to fetch.
     */
    where?: SeasonPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeasonPrices to fetch.
     */
    orderBy?: SeasonPriceOrderByWithRelationInput | SeasonPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeasonPrices.
     */
    cursor?: SeasonPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeasonPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeasonPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeasonPrices.
     */
    distinct?: SeasonPriceScalarFieldEnum | SeasonPriceScalarFieldEnum[]
  }

  /**
   * SeasonPrice create
   */
  export type SeasonPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    /**
     * The data needed to create a SeasonPrice.
     */
    data: XOR<SeasonPriceCreateInput, SeasonPriceUncheckedCreateInput>
  }

  /**
   * SeasonPrice createMany
   */
  export type SeasonPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeasonPrices.
     */
    data: SeasonPriceCreateManyInput | SeasonPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeasonPrice createManyAndReturn
   */
  export type SeasonPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * The data used to create many SeasonPrices.
     */
    data: SeasonPriceCreateManyInput | SeasonPriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeasonPrice update
   */
  export type SeasonPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    /**
     * The data needed to update a SeasonPrice.
     */
    data: XOR<SeasonPriceUpdateInput, SeasonPriceUncheckedUpdateInput>
    /**
     * Choose, which SeasonPrice to update.
     */
    where: SeasonPriceWhereUniqueInput
  }

  /**
   * SeasonPrice updateMany
   */
  export type SeasonPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeasonPrices.
     */
    data: XOR<SeasonPriceUpdateManyMutationInput, SeasonPriceUncheckedUpdateManyInput>
    /**
     * Filter which SeasonPrices to update
     */
    where?: SeasonPriceWhereInput
    /**
     * Limit how many SeasonPrices to update.
     */
    limit?: number
  }

  /**
   * SeasonPrice updateManyAndReturn
   */
  export type SeasonPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * The data used to update SeasonPrices.
     */
    data: XOR<SeasonPriceUpdateManyMutationInput, SeasonPriceUncheckedUpdateManyInput>
    /**
     * Filter which SeasonPrices to update
     */
    where?: SeasonPriceWhereInput
    /**
     * Limit how many SeasonPrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeasonPrice upsert
   */
  export type SeasonPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    /**
     * The filter to search for the SeasonPrice to update in case it exists.
     */
    where: SeasonPriceWhereUniqueInput
    /**
     * In case the SeasonPrice found by the `where` argument doesn't exist, create a new SeasonPrice with this data.
     */
    create: XOR<SeasonPriceCreateInput, SeasonPriceUncheckedCreateInput>
    /**
     * In case the SeasonPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeasonPriceUpdateInput, SeasonPriceUncheckedUpdateInput>
  }

  /**
   * SeasonPrice delete
   */
  export type SeasonPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
    /**
     * Filter which SeasonPrice to delete.
     */
    where: SeasonPriceWhereUniqueInput
  }

  /**
   * SeasonPrice deleteMany
   */
  export type SeasonPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeasonPrices to delete
     */
    where?: SeasonPriceWhereInput
    /**
     * Limit how many SeasonPrices to delete.
     */
    limit?: number
  }

  /**
   * SeasonPrice without action
   */
  export type SeasonPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeasonPrice
     */
    select?: SeasonPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeasonPrice
     */
    omit?: SeasonPriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeasonPriceInclude<ExtArgs> | null
  }


  /**
   * Model DiscountRule
   */

  export type AggregateDiscountRule = {
    _count: DiscountRuleCountAggregateOutputType | null
    _avg: DiscountRuleAvgAggregateOutputType | null
    _sum: DiscountRuleSumAggregateOutputType | null
    _min: DiscountRuleMinAggregateOutputType | null
    _max: DiscountRuleMaxAggregateOutputType | null
  }

  export type DiscountRuleAvgAggregateOutputType = {
    minNights: number | null
    discountPercent: number | null
  }

  export type DiscountRuleSumAggregateOutputType = {
    minNights: number | null
    discountPercent: number | null
  }

  export type DiscountRuleMinAggregateOutputType = {
    id: string | null
    minNights: number | null
    discountPercent: number | null
    isActive: boolean | null
  }

  export type DiscountRuleMaxAggregateOutputType = {
    id: string | null
    minNights: number | null
    discountPercent: number | null
    isActive: boolean | null
  }

  export type DiscountRuleCountAggregateOutputType = {
    id: number
    minNights: number
    discountPercent: number
    isActive: number
    _all: number
  }


  export type DiscountRuleAvgAggregateInputType = {
    minNights?: true
    discountPercent?: true
  }

  export type DiscountRuleSumAggregateInputType = {
    minNights?: true
    discountPercent?: true
  }

  export type DiscountRuleMinAggregateInputType = {
    id?: true
    minNights?: true
    discountPercent?: true
    isActive?: true
  }

  export type DiscountRuleMaxAggregateInputType = {
    id?: true
    minNights?: true
    discountPercent?: true
    isActive?: true
  }

  export type DiscountRuleCountAggregateInputType = {
    id?: true
    minNights?: true
    discountPercent?: true
    isActive?: true
    _all?: true
  }

  export type DiscountRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscountRule to aggregate.
     */
    where?: DiscountRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountRules to fetch.
     */
    orderBy?: DiscountRuleOrderByWithRelationInput | DiscountRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscountRules
    **/
    _count?: true | DiscountRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountRuleMaxAggregateInputType
  }

  export type GetDiscountRuleAggregateType<T extends DiscountRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscountRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscountRule[P]>
      : GetScalarType<T[P], AggregateDiscountRule[P]>
  }




  export type DiscountRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountRuleWhereInput
    orderBy?: DiscountRuleOrderByWithAggregationInput | DiscountRuleOrderByWithAggregationInput[]
    by: DiscountRuleScalarFieldEnum[] | DiscountRuleScalarFieldEnum
    having?: DiscountRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountRuleCountAggregateInputType | true
    _avg?: DiscountRuleAvgAggregateInputType
    _sum?: DiscountRuleSumAggregateInputType
    _min?: DiscountRuleMinAggregateInputType
    _max?: DiscountRuleMaxAggregateInputType
  }

  export type DiscountRuleGroupByOutputType = {
    id: string
    minNights: number
    discountPercent: number
    isActive: boolean
    _count: DiscountRuleCountAggregateOutputType | null
    _avg: DiscountRuleAvgAggregateOutputType | null
    _sum: DiscountRuleSumAggregateOutputType | null
    _min: DiscountRuleMinAggregateOutputType | null
    _max: DiscountRuleMaxAggregateOutputType | null
  }

  type GetDiscountRuleGroupByPayload<T extends DiscountRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountRuleGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountRuleGroupByOutputType[P]>
        }
      >
    >


  export type DiscountRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    minNights?: boolean
    discountPercent?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["discountRule"]>

  export type DiscountRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    minNights?: boolean
    discountPercent?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["discountRule"]>

  export type DiscountRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    minNights?: boolean
    discountPercent?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["discountRule"]>

  export type DiscountRuleSelectScalar = {
    id?: boolean
    minNights?: boolean
    discountPercent?: boolean
    isActive?: boolean
  }

  export type DiscountRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "minNights" | "discountPercent" | "isActive", ExtArgs["result"]["discountRule"]>

  export type $DiscountRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscountRule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      minNights: number
      discountPercent: number
      isActive: boolean
    }, ExtArgs["result"]["discountRule"]>
    composites: {}
  }

  type DiscountRuleGetPayload<S extends boolean | null | undefined | DiscountRuleDefaultArgs> = $Result.GetResult<Prisma.$DiscountRulePayload, S>

  type DiscountRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscountRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountRuleCountAggregateInputType | true
    }

  export interface DiscountRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscountRule'], meta: { name: 'DiscountRule' } }
    /**
     * Find zero or one DiscountRule that matches the filter.
     * @param {DiscountRuleFindUniqueArgs} args - Arguments to find a DiscountRule
     * @example
     * // Get one DiscountRule
     * const discountRule = await prisma.discountRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountRuleFindUniqueArgs>(args: SelectSubset<T, DiscountRuleFindUniqueArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscountRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscountRuleFindUniqueOrThrowArgs} args - Arguments to find a DiscountRule
     * @example
     * // Get one DiscountRule
     * const discountRule = await prisma.discountRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscountRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleFindFirstArgs} args - Arguments to find a DiscountRule
     * @example
     * // Get one DiscountRule
     * const discountRule = await prisma.discountRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountRuleFindFirstArgs>(args?: SelectSubset<T, DiscountRuleFindFirstArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscountRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleFindFirstOrThrowArgs} args - Arguments to find a DiscountRule
     * @example
     * // Get one DiscountRule
     * const discountRule = await prisma.discountRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscountRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscountRules
     * const discountRules = await prisma.discountRule.findMany()
     * 
     * // Get first 10 DiscountRules
     * const discountRules = await prisma.discountRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountRuleWithIdOnly = await prisma.discountRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscountRuleFindManyArgs>(args?: SelectSubset<T, DiscountRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscountRule.
     * @param {DiscountRuleCreateArgs} args - Arguments to create a DiscountRule.
     * @example
     * // Create one DiscountRule
     * const DiscountRule = await prisma.discountRule.create({
     *   data: {
     *     // ... data to create a DiscountRule
     *   }
     * })
     * 
     */
    create<T extends DiscountRuleCreateArgs>(args: SelectSubset<T, DiscountRuleCreateArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscountRules.
     * @param {DiscountRuleCreateManyArgs} args - Arguments to create many DiscountRules.
     * @example
     * // Create many DiscountRules
     * const discountRule = await prisma.discountRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountRuleCreateManyArgs>(args?: SelectSubset<T, DiscountRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscountRules and returns the data saved in the database.
     * @param {DiscountRuleCreateManyAndReturnArgs} args - Arguments to create many DiscountRules.
     * @example
     * // Create many DiscountRules
     * const discountRule = await prisma.discountRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscountRules and only return the `id`
     * const discountRuleWithIdOnly = await prisma.discountRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscountRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscountRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscountRule.
     * @param {DiscountRuleDeleteArgs} args - Arguments to delete one DiscountRule.
     * @example
     * // Delete one DiscountRule
     * const DiscountRule = await prisma.discountRule.delete({
     *   where: {
     *     // ... filter to delete one DiscountRule
     *   }
     * })
     * 
     */
    delete<T extends DiscountRuleDeleteArgs>(args: SelectSubset<T, DiscountRuleDeleteArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscountRule.
     * @param {DiscountRuleUpdateArgs} args - Arguments to update one DiscountRule.
     * @example
     * // Update one DiscountRule
     * const discountRule = await prisma.discountRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountRuleUpdateArgs>(args: SelectSubset<T, DiscountRuleUpdateArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscountRules.
     * @param {DiscountRuleDeleteManyArgs} args - Arguments to filter DiscountRules to delete.
     * @example
     * // Delete a few DiscountRules
     * const { count } = await prisma.discountRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountRuleDeleteManyArgs>(args?: SelectSubset<T, DiscountRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscountRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscountRules
     * const discountRule = await prisma.discountRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountRuleUpdateManyArgs>(args: SelectSubset<T, DiscountRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscountRules and returns the data updated in the database.
     * @param {DiscountRuleUpdateManyAndReturnArgs} args - Arguments to update many DiscountRules.
     * @example
     * // Update many DiscountRules
     * const discountRule = await prisma.discountRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscountRules and only return the `id`
     * const discountRuleWithIdOnly = await prisma.discountRule.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiscountRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscountRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscountRule.
     * @param {DiscountRuleUpsertArgs} args - Arguments to update or create a DiscountRule.
     * @example
     * // Update or create a DiscountRule
     * const discountRule = await prisma.discountRule.upsert({
     *   create: {
     *     // ... data to create a DiscountRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscountRule we want to update
     *   }
     * })
     */
    upsert<T extends DiscountRuleUpsertArgs>(args: SelectSubset<T, DiscountRuleUpsertArgs<ExtArgs>>): Prisma__DiscountRuleClient<$Result.GetResult<Prisma.$DiscountRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscountRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleCountArgs} args - Arguments to filter DiscountRules to count.
     * @example
     * // Count the number of DiscountRules
     * const count = await prisma.discountRule.count({
     *   where: {
     *     // ... the filter for the DiscountRules we want to count
     *   }
     * })
    **/
    count<T extends DiscountRuleCountArgs>(
      args?: Subset<T, DiscountRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscountRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscountRuleAggregateArgs>(args: Subset<T, DiscountRuleAggregateArgs>): Prisma.PrismaPromise<GetDiscountRuleAggregateType<T>>

    /**
     * Group by DiscountRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountRuleGroupByArgs} args - Group by arguments.
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
      T extends DiscountRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountRuleGroupByArgs['orderBy'] }
        : { orderBy?: DiscountRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscountRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscountRule model
   */
  readonly fields: DiscountRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscountRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DiscountRule model
   */
  interface DiscountRuleFieldRefs {
    readonly id: FieldRef<"DiscountRule", 'String'>
    readonly minNights: FieldRef<"DiscountRule", 'Int'>
    readonly discountPercent: FieldRef<"DiscountRule", 'Int'>
    readonly isActive: FieldRef<"DiscountRule", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DiscountRule findUnique
   */
  export type DiscountRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Filter, which DiscountRule to fetch.
     */
    where: DiscountRuleWhereUniqueInput
  }

  /**
   * DiscountRule findUniqueOrThrow
   */
  export type DiscountRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Filter, which DiscountRule to fetch.
     */
    where: DiscountRuleWhereUniqueInput
  }

  /**
   * DiscountRule findFirst
   */
  export type DiscountRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Filter, which DiscountRule to fetch.
     */
    where?: DiscountRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountRules to fetch.
     */
    orderBy?: DiscountRuleOrderByWithRelationInput | DiscountRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscountRules.
     */
    cursor?: DiscountRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscountRules.
     */
    distinct?: DiscountRuleScalarFieldEnum | DiscountRuleScalarFieldEnum[]
  }

  /**
   * DiscountRule findFirstOrThrow
   */
  export type DiscountRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Filter, which DiscountRule to fetch.
     */
    where?: DiscountRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountRules to fetch.
     */
    orderBy?: DiscountRuleOrderByWithRelationInput | DiscountRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscountRules.
     */
    cursor?: DiscountRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscountRules.
     */
    distinct?: DiscountRuleScalarFieldEnum | DiscountRuleScalarFieldEnum[]
  }

  /**
   * DiscountRule findMany
   */
  export type DiscountRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Filter, which DiscountRules to fetch.
     */
    where?: DiscountRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscountRules to fetch.
     */
    orderBy?: DiscountRuleOrderByWithRelationInput | DiscountRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscountRules.
     */
    cursor?: DiscountRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscountRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscountRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscountRules.
     */
    distinct?: DiscountRuleScalarFieldEnum | DiscountRuleScalarFieldEnum[]
  }

  /**
   * DiscountRule create
   */
  export type DiscountRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * The data needed to create a DiscountRule.
     */
    data: XOR<DiscountRuleCreateInput, DiscountRuleUncheckedCreateInput>
  }

  /**
   * DiscountRule createMany
   */
  export type DiscountRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscountRules.
     */
    data: DiscountRuleCreateManyInput | DiscountRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscountRule createManyAndReturn
   */
  export type DiscountRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * The data used to create many DiscountRules.
     */
    data: DiscountRuleCreateManyInput | DiscountRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscountRule update
   */
  export type DiscountRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * The data needed to update a DiscountRule.
     */
    data: XOR<DiscountRuleUpdateInput, DiscountRuleUncheckedUpdateInput>
    /**
     * Choose, which DiscountRule to update.
     */
    where: DiscountRuleWhereUniqueInput
  }

  /**
   * DiscountRule updateMany
   */
  export type DiscountRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscountRules.
     */
    data: XOR<DiscountRuleUpdateManyMutationInput, DiscountRuleUncheckedUpdateManyInput>
    /**
     * Filter which DiscountRules to update
     */
    where?: DiscountRuleWhereInput
    /**
     * Limit how many DiscountRules to update.
     */
    limit?: number
  }

  /**
   * DiscountRule updateManyAndReturn
   */
  export type DiscountRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * The data used to update DiscountRules.
     */
    data: XOR<DiscountRuleUpdateManyMutationInput, DiscountRuleUncheckedUpdateManyInput>
    /**
     * Filter which DiscountRules to update
     */
    where?: DiscountRuleWhereInput
    /**
     * Limit how many DiscountRules to update.
     */
    limit?: number
  }

  /**
   * DiscountRule upsert
   */
  export type DiscountRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * The filter to search for the DiscountRule to update in case it exists.
     */
    where: DiscountRuleWhereUniqueInput
    /**
     * In case the DiscountRule found by the `where` argument doesn't exist, create a new DiscountRule with this data.
     */
    create: XOR<DiscountRuleCreateInput, DiscountRuleUncheckedCreateInput>
    /**
     * In case the DiscountRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountRuleUpdateInput, DiscountRuleUncheckedUpdateInput>
  }

  /**
   * DiscountRule delete
   */
  export type DiscountRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
    /**
     * Filter which DiscountRule to delete.
     */
    where: DiscountRuleWhereUniqueInput
  }

  /**
   * DiscountRule deleteMany
   */
  export type DiscountRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscountRules to delete
     */
    where?: DiscountRuleWhereInput
    /**
     * Limit how many DiscountRules to delete.
     */
    limit?: number
  }

  /**
   * DiscountRule without action
   */
  export type DiscountRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountRule
     */
    select?: DiscountRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscountRule
     */
    omit?: DiscountRuleOmit<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    docType: $Enums.DocType | null
    docNumber: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    birthDate: Date | null
    isAnonymized: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    docType: $Enums.DocType | null
    docNumber: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    birthDate: Date | null
    isAnonymized: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    docType: number
    docNumber: number
    firstName: number
    lastName: number
    email: number
    phone: number
    birthDate: number
    isAnonymized: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuestMinAggregateInputType = {
    id?: true
    docType?: true
    docNumber?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    birthDate?: true
    isAnonymized?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    docType?: true
    docNumber?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    birthDate?: true
    isAnonymized?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    docType?: true
    docNumber?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    birthDate?: true
    isAnonymized?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: string
    docType: $Enums.DocType
    docNumber: string
    firstName: string
    lastName: string
    email: string
    phone: string
    birthDate: Date | null
    isAnonymized: boolean
    createdAt: Date
    updatedAt: Date
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docType?: boolean
    docNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    isAnonymized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservations?: boolean | Guest$reservationsArgs<ExtArgs>
    anonymizationRequests?: boolean | Guest$anonymizationRequestsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docType?: boolean
    docNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    isAnonymized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    docType?: boolean
    docNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    isAnonymized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    docType?: boolean
    docNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    birthDate?: boolean
    isAnonymized?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "docType" | "docNumber" | "firstName" | "lastName" | "email" | "phone" | "birthDate" | "isAnonymized" | "createdAt" | "updatedAt", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Guest$reservationsArgs<ExtArgs>
    anonymizationRequests?: boolean | Guest$anonymizationRequestsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      anonymizationRequests: Prisma.$AnonymizationRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      docType: $Enums.DocType
      docNumber: string
      firstName: string
      lastName: string
      email: string
      phone: string
      birthDate: Date | null
      isAnonymized: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {GuestUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.updateManyAndReturn({
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
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
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
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Guest$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    anonymizationRequests<T extends Guest$anonymizationRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$anonymizationRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Guest model
   */
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'String'>
    readonly docType: FieldRef<"Guest", 'DocType'>
    readonly docNumber: FieldRef<"Guest", 'String'>
    readonly firstName: FieldRef<"Guest", 'String'>
    readonly lastName: FieldRef<"Guest", 'String'>
    readonly email: FieldRef<"Guest", 'String'>
    readonly phone: FieldRef<"Guest", 'String'>
    readonly birthDate: FieldRef<"Guest", 'DateTime'>
    readonly isAnonymized: FieldRef<"Guest", 'Boolean'>
    readonly createdAt: FieldRef<"Guest", 'DateTime'>
    readonly updatedAt: FieldRef<"Guest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest updateManyAndReturn
   */
  export type GuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest.reservations
   */
  export type Guest$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Guest.anonymizationRequests
   */
  export type Guest$anonymizationRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
    where?: AnonymizationRequestWhereInput
    orderBy?: AnonymizationRequestOrderByWithRelationInput | AnonymizationRequestOrderByWithRelationInput[]
    cursor?: AnonymizationRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnonymizationRequestScalarFieldEnum | AnonymizationRequestScalarFieldEnum[]
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    adults: number | null
    children: number | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    totalPrice: Decimal | null
  }

  export type ReservationSumAggregateOutputType = {
    adults: number | null
    children: number | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    totalPrice: Decimal | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    code: string | null
    categoryId: string | null
    unitId: string | null
    guestId: string | null
    checkIn: Date | null
    checkOut: Date | null
    adults: number | null
    children: number | null
    currency: $Enums.Currency | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    totalPrice: Decimal | null
    status: $Enums.ReservationStatus | null
    origin: $Enums.ReservationOrigin | null
    cancellationReason: string | null
    notes: string | null
    paymentMethodSentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    code: string | null
    categoryId: string | null
    unitId: string | null
    guestId: string | null
    checkIn: Date | null
    checkOut: Date | null
    adults: number | null
    children: number | null
    currency: $Enums.Currency | null
    subtotal: Decimal | null
    discountAmount: Decimal | null
    totalPrice: Decimal | null
    status: $Enums.ReservationStatus | null
    origin: $Enums.ReservationOrigin | null
    cancellationReason: string | null
    notes: string | null
    paymentMethodSentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    code: number
    categoryId: number
    unitId: number
    guestId: number
    checkIn: number
    checkOut: number
    adults: number
    children: number
    currency: number
    subtotal: number
    discountAmount: number
    totalPrice: number
    status: number
    origin: number
    cancellationReason: number
    notes: number
    paymentMethodSentAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    adults?: true
    children?: true
    subtotal?: true
    discountAmount?: true
    totalPrice?: true
  }

  export type ReservationSumAggregateInputType = {
    adults?: true
    children?: true
    subtotal?: true
    discountAmount?: true
    totalPrice?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    code?: true
    categoryId?: true
    unitId?: true
    guestId?: true
    checkIn?: true
    checkOut?: true
    adults?: true
    children?: true
    currency?: true
    subtotal?: true
    discountAmount?: true
    totalPrice?: true
    status?: true
    origin?: true
    cancellationReason?: true
    notes?: true
    paymentMethodSentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    code?: true
    categoryId?: true
    unitId?: true
    guestId?: true
    checkIn?: true
    checkOut?: true
    adults?: true
    children?: true
    currency?: true
    subtotal?: true
    discountAmount?: true
    totalPrice?: true
    status?: true
    origin?: true
    cancellationReason?: true
    notes?: true
    paymentMethodSentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    code?: true
    categoryId?: true
    unitId?: true
    guestId?: true
    checkIn?: true
    checkOut?: true
    adults?: true
    children?: true
    currency?: true
    subtotal?: true
    discountAmount?: true
    totalPrice?: true
    status?: true
    origin?: true
    cancellationReason?: true
    notes?: true
    paymentMethodSentAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    code: string
    categoryId: string
    unitId: string | null
    guestId: string
    checkIn: Date
    checkOut: Date
    adults: number
    children: number
    currency: $Enums.Currency
    subtotal: Decimal
    discountAmount: Decimal
    totalPrice: Decimal
    status: $Enums.ReservationStatus
    origin: $Enums.ReservationOrigin
    cancellationReason: string | null
    notes: string | null
    paymentMethodSentAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    categoryId?: boolean
    unitId?: boolean
    guestId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    adults?: boolean
    children?: boolean
    currency?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    totalPrice?: boolean
    status?: boolean
    origin?: boolean
    cancellationReason?: boolean
    notes?: boolean
    paymentMethodSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    unit?: boolean | Reservation$unitArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    companions?: boolean | Reservation$companionsArgs<ExtArgs>
    payments?: boolean | Reservation$paymentsArgs<ExtArgs>
    occupancies?: boolean | Reservation$occupanciesArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    categoryId?: boolean
    unitId?: boolean
    guestId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    adults?: boolean
    children?: boolean
    currency?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    totalPrice?: boolean
    status?: boolean
    origin?: boolean
    cancellationReason?: boolean
    notes?: boolean
    paymentMethodSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    unit?: boolean | Reservation$unitArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    categoryId?: boolean
    unitId?: boolean
    guestId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    adults?: boolean
    children?: boolean
    currency?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    totalPrice?: boolean
    status?: boolean
    origin?: boolean
    cancellationReason?: boolean
    notes?: boolean
    paymentMethodSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    unit?: boolean | Reservation$unitArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    code?: boolean
    categoryId?: boolean
    unitId?: boolean
    guestId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    adults?: boolean
    children?: boolean
    currency?: boolean
    subtotal?: boolean
    discountAmount?: boolean
    totalPrice?: boolean
    status?: boolean
    origin?: boolean
    cancellationReason?: boolean
    notes?: boolean
    paymentMethodSentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "categoryId" | "unitId" | "guestId" | "checkIn" | "checkOut" | "adults" | "children" | "currency" | "subtotal" | "discountAmount" | "totalPrice" | "status" | "origin" | "cancellationReason" | "notes" | "paymentMethodSentAt" | "createdAt" | "updatedAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    unit?: boolean | Reservation$unitArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
    companions?: boolean | Reservation$companionsArgs<ExtArgs>
    payments?: boolean | Reservation$paymentsArgs<ExtArgs>
    occupancies?: boolean | Reservation$occupanciesArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    unit?: boolean | Reservation$unitArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    unit?: boolean | Reservation$unitArgs<ExtArgs>
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs> | null
      guest: Prisma.$GuestPayload<ExtArgs>
      companions: Prisma.$CompanionPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      occupancies: Prisma.$UnitOccupancyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      categoryId: string
      unitId: string | null
      guestId: string
      checkIn: Date
      checkOut: Date
      adults: number
      children: number
      currency: $Enums.Currency
      subtotal: Prisma.Decimal
      discountAmount: Prisma.Decimal
      totalPrice: Prisma.Decimal
      status: $Enums.ReservationStatus
      origin: $Enums.ReservationOrigin
      cancellationReason: string | null
      notes: string | null
      paymentMethodSentAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends Reservation$unitArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    companions<T extends Reservation$companionsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$companionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Reservation$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    occupancies<T extends Reservation$occupanciesArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$occupanciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly code: FieldRef<"Reservation", 'String'>
    readonly categoryId: FieldRef<"Reservation", 'String'>
    readonly unitId: FieldRef<"Reservation", 'String'>
    readonly guestId: FieldRef<"Reservation", 'String'>
    readonly checkIn: FieldRef<"Reservation", 'DateTime'>
    readonly checkOut: FieldRef<"Reservation", 'DateTime'>
    readonly adults: FieldRef<"Reservation", 'Int'>
    readonly children: FieldRef<"Reservation", 'Int'>
    readonly currency: FieldRef<"Reservation", 'Currency'>
    readonly subtotal: FieldRef<"Reservation", 'Decimal'>
    readonly discountAmount: FieldRef<"Reservation", 'Decimal'>
    readonly totalPrice: FieldRef<"Reservation", 'Decimal'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly origin: FieldRef<"Reservation", 'ReservationOrigin'>
    readonly cancellationReason: FieldRef<"Reservation", 'String'>
    readonly notes: FieldRef<"Reservation", 'String'>
    readonly paymentMethodSentAt: FieldRef<"Reservation", 'DateTime'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation.unit
   */
  export type Reservation$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }

  /**
   * Reservation.companions
   */
  export type Reservation$companionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    where?: CompanionWhereInput
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    cursor?: CompanionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Reservation.payments
   */
  export type Reservation$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Reservation.occupancies
   */
  export type Reservation$occupanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    where?: UnitOccupancyWhereInput
    orderBy?: UnitOccupancyOrderByWithRelationInput | UnitOccupancyOrderByWithRelationInput[]
    cursor?: UnitOccupancyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitOccupancyScalarFieldEnum | UnitOccupancyScalarFieldEnum[]
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Companion
   */

  export type AggregateCompanion = {
    _count: CompanionCountAggregateOutputType | null
    _min: CompanionMinAggregateOutputType | null
    _max: CompanionMaxAggregateOutputType | null
  }

  export type CompanionMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    firstName: string | null
    lastName: string | null
    docType: $Enums.DocType | null
    docNumber: string | null
    birthDate: Date | null
  }

  export type CompanionMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    firstName: string | null
    lastName: string | null
    docType: $Enums.DocType | null
    docNumber: string | null
    birthDate: Date | null
  }

  export type CompanionCountAggregateOutputType = {
    id: number
    reservationId: number
    firstName: number
    lastName: number
    docType: number
    docNumber: number
    birthDate: number
    _all: number
  }


  export type CompanionMinAggregateInputType = {
    id?: true
    reservationId?: true
    firstName?: true
    lastName?: true
    docType?: true
    docNumber?: true
    birthDate?: true
  }

  export type CompanionMaxAggregateInputType = {
    id?: true
    reservationId?: true
    firstName?: true
    lastName?: true
    docType?: true
    docNumber?: true
    birthDate?: true
  }

  export type CompanionCountAggregateInputType = {
    id?: true
    reservationId?: true
    firstName?: true
    lastName?: true
    docType?: true
    docNumber?: true
    birthDate?: true
    _all?: true
  }

  export type CompanionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companion to aggregate.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companions
    **/
    _count?: true | CompanionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanionMaxAggregateInputType
  }

  export type GetCompanionAggregateType<T extends CompanionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanion[P]>
      : GetScalarType<T[P], AggregateCompanion[P]>
  }




  export type CompanionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionWhereInput
    orderBy?: CompanionOrderByWithAggregationInput | CompanionOrderByWithAggregationInput[]
    by: CompanionScalarFieldEnum[] | CompanionScalarFieldEnum
    having?: CompanionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanionCountAggregateInputType | true
    _min?: CompanionMinAggregateInputType
    _max?: CompanionMaxAggregateInputType
  }

  export type CompanionGroupByOutputType = {
    id: string
    reservationId: string
    firstName: string
    lastName: string
    docType: $Enums.DocType | null
    docNumber: string | null
    birthDate: Date | null
    _count: CompanionCountAggregateOutputType | null
    _min: CompanionMinAggregateOutputType | null
    _max: CompanionMaxAggregateOutputType | null
  }

  type GetCompanionGroupByPayload<T extends CompanionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanionGroupByOutputType[P]>
            : GetScalarType<T[P], CompanionGroupByOutputType[P]>
        }
      >
    >


  export type CompanionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    firstName?: boolean
    lastName?: boolean
    docType?: boolean
    docNumber?: boolean
    birthDate?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companion"]>

  export type CompanionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    firstName?: boolean
    lastName?: boolean
    docType?: boolean
    docNumber?: boolean
    birthDate?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companion"]>

  export type CompanionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    firstName?: boolean
    lastName?: boolean
    docType?: boolean
    docNumber?: boolean
    birthDate?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companion"]>

  export type CompanionSelectScalar = {
    id?: boolean
    reservationId?: boolean
    firstName?: boolean
    lastName?: boolean
    docType?: boolean
    docNumber?: boolean
    birthDate?: boolean
  }

  export type CompanionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "firstName" | "lastName" | "docType" | "docNumber" | "birthDate", ExtArgs["result"]["companion"]>
  export type CompanionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type CompanionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type CompanionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $CompanionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Companion"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      firstName: string
      lastName: string
      docType: $Enums.DocType | null
      docNumber: string | null
      birthDate: Date | null
    }, ExtArgs["result"]["companion"]>
    composites: {}
  }

  type CompanionGetPayload<S extends boolean | null | undefined | CompanionDefaultArgs> = $Result.GetResult<Prisma.$CompanionPayload, S>

  type CompanionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanionCountAggregateInputType | true
    }

  export interface CompanionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Companion'], meta: { name: 'Companion' } }
    /**
     * Find zero or one Companion that matches the filter.
     * @param {CompanionFindUniqueArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanionFindUniqueArgs>(args: SelectSubset<T, CompanionFindUniqueArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanionFindUniqueOrThrowArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionFindFirstArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanionFindFirstArgs>(args?: SelectSubset<T, CompanionFindFirstArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionFindFirstOrThrowArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companions
     * const companions = await prisma.companion.findMany()
     * 
     * // Get first 10 Companions
     * const companions = await prisma.companion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companionWithIdOnly = await prisma.companion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanionFindManyArgs>(args?: SelectSubset<T, CompanionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companion.
     * @param {CompanionCreateArgs} args - Arguments to create a Companion.
     * @example
     * // Create one Companion
     * const Companion = await prisma.companion.create({
     *   data: {
     *     // ... data to create a Companion
     *   }
     * })
     * 
     */
    create<T extends CompanionCreateArgs>(args: SelectSubset<T, CompanionCreateArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companions.
     * @param {CompanionCreateManyArgs} args - Arguments to create many Companions.
     * @example
     * // Create many Companions
     * const companion = await prisma.companion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanionCreateManyArgs>(args?: SelectSubset<T, CompanionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companions and returns the data saved in the database.
     * @param {CompanionCreateManyAndReturnArgs} args - Arguments to create many Companions.
     * @example
     * // Create many Companions
     * const companion = await prisma.companion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companions and only return the `id`
     * const companionWithIdOnly = await prisma.companion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companion.
     * @param {CompanionDeleteArgs} args - Arguments to delete one Companion.
     * @example
     * // Delete one Companion
     * const Companion = await prisma.companion.delete({
     *   where: {
     *     // ... filter to delete one Companion
     *   }
     * })
     * 
     */
    delete<T extends CompanionDeleteArgs>(args: SelectSubset<T, CompanionDeleteArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companion.
     * @param {CompanionUpdateArgs} args - Arguments to update one Companion.
     * @example
     * // Update one Companion
     * const companion = await prisma.companion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanionUpdateArgs>(args: SelectSubset<T, CompanionUpdateArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companions.
     * @param {CompanionDeleteManyArgs} args - Arguments to filter Companions to delete.
     * @example
     * // Delete a few Companions
     * const { count } = await prisma.companion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanionDeleteManyArgs>(args?: SelectSubset<T, CompanionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companions
     * const companion = await prisma.companion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanionUpdateManyArgs>(args: SelectSubset<T, CompanionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companions and returns the data updated in the database.
     * @param {CompanionUpdateManyAndReturnArgs} args - Arguments to update many Companions.
     * @example
     * // Update many Companions
     * const companion = await prisma.companion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companions and only return the `id`
     * const companionWithIdOnly = await prisma.companion.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompanionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companion.
     * @param {CompanionUpsertArgs} args - Arguments to update or create a Companion.
     * @example
     * // Update or create a Companion
     * const companion = await prisma.companion.upsert({
     *   create: {
     *     // ... data to create a Companion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companion we want to update
     *   }
     * })
     */
    upsert<T extends CompanionUpsertArgs>(args: SelectSubset<T, CompanionUpsertArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionCountArgs} args - Arguments to filter Companions to count.
     * @example
     * // Count the number of Companions
     * const count = await prisma.companion.count({
     *   where: {
     *     // ... the filter for the Companions we want to count
     *   }
     * })
    **/
    count<T extends CompanionCountArgs>(
      args?: Subset<T, CompanionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanionAggregateArgs>(args: Subset<T, CompanionAggregateArgs>): Prisma.PrismaPromise<GetCompanionAggregateType<T>>

    /**
     * Group by Companion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionGroupByArgs} args - Group by arguments.
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
      T extends CompanionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanionGroupByArgs['orderBy'] }
        : { orderBy?: CompanionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Companion model
   */
  readonly fields: CompanionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Companion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Companion model
   */
  interface CompanionFieldRefs {
    readonly id: FieldRef<"Companion", 'String'>
    readonly reservationId: FieldRef<"Companion", 'String'>
    readonly firstName: FieldRef<"Companion", 'String'>
    readonly lastName: FieldRef<"Companion", 'String'>
    readonly docType: FieldRef<"Companion", 'DocType'>
    readonly docNumber: FieldRef<"Companion", 'String'>
    readonly birthDate: FieldRef<"Companion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Companion findUnique
   */
  export type CompanionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion findUniqueOrThrow
   */
  export type CompanionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion findFirst
   */
  export type CompanionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companions.
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companions.
     */
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Companion findFirstOrThrow
   */
  export type CompanionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companions.
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companions.
     */
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Companion findMany
   */
  export type CompanionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companions to fetch.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companions.
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companions.
     */
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Companion create
   */
  export type CompanionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * The data needed to create a Companion.
     */
    data: XOR<CompanionCreateInput, CompanionUncheckedCreateInput>
  }

  /**
   * Companion createMany
   */
  export type CompanionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companions.
     */
    data: CompanionCreateManyInput | CompanionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Companion createManyAndReturn
   */
  export type CompanionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * The data used to create many Companions.
     */
    data: CompanionCreateManyInput | CompanionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Companion update
   */
  export type CompanionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * The data needed to update a Companion.
     */
    data: XOR<CompanionUpdateInput, CompanionUncheckedUpdateInput>
    /**
     * Choose, which Companion to update.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion updateMany
   */
  export type CompanionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companions.
     */
    data: XOR<CompanionUpdateManyMutationInput, CompanionUncheckedUpdateManyInput>
    /**
     * Filter which Companions to update
     */
    where?: CompanionWhereInput
    /**
     * Limit how many Companions to update.
     */
    limit?: number
  }

  /**
   * Companion updateManyAndReturn
   */
  export type CompanionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * The data used to update Companions.
     */
    data: XOR<CompanionUpdateManyMutationInput, CompanionUncheckedUpdateManyInput>
    /**
     * Filter which Companions to update
     */
    where?: CompanionWhereInput
    /**
     * Limit how many Companions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Companion upsert
   */
  export type CompanionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * The filter to search for the Companion to update in case it exists.
     */
    where: CompanionWhereUniqueInput
    /**
     * In case the Companion found by the `where` argument doesn't exist, create a new Companion with this data.
     */
    create: XOR<CompanionCreateInput, CompanionUncheckedCreateInput>
    /**
     * In case the Companion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanionUpdateInput, CompanionUncheckedUpdateInput>
  }

  /**
   * Companion delete
   */
  export type CompanionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter which Companion to delete.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion deleteMany
   */
  export type CompanionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companions to delete
     */
    where?: CompanionWhereInput
    /**
     * Limit how many Companions to delete.
     */
    limit?: number
  }

  /**
   * Companion without action
   */
  export type CompanionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
  }


  /**
   * Model UnitOccupancy
   */

  export type AggregateUnitOccupancy = {
    _count: UnitOccupancyCountAggregateOutputType | null
    _min: UnitOccupancyMinAggregateOutputType | null
    _max: UnitOccupancyMaxAggregateOutputType | null
  }

  export type UnitOccupancyMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    reservationId: string | null
    type: $Enums.OccupancyType | null
    checkIn: Date | null
    checkOut: Date | null
    lockToken: string | null
    expiresAt: Date | null
    status: $Enums.OccupancyStatus | null
    notes: string | null
  }

  export type UnitOccupancyMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    reservationId: string | null
    type: $Enums.OccupancyType | null
    checkIn: Date | null
    checkOut: Date | null
    lockToken: string | null
    expiresAt: Date | null
    status: $Enums.OccupancyStatus | null
    notes: string | null
  }

  export type UnitOccupancyCountAggregateOutputType = {
    id: number
    unitId: number
    reservationId: number
    type: number
    checkIn: number
    checkOut: number
    lockToken: number
    expiresAt: number
    status: number
    notes: number
    _all: number
  }


  export type UnitOccupancyMinAggregateInputType = {
    id?: true
    unitId?: true
    reservationId?: true
    type?: true
    checkIn?: true
    checkOut?: true
    lockToken?: true
    expiresAt?: true
    status?: true
    notes?: true
  }

  export type UnitOccupancyMaxAggregateInputType = {
    id?: true
    unitId?: true
    reservationId?: true
    type?: true
    checkIn?: true
    checkOut?: true
    lockToken?: true
    expiresAt?: true
    status?: true
    notes?: true
  }

  export type UnitOccupancyCountAggregateInputType = {
    id?: true
    unitId?: true
    reservationId?: true
    type?: true
    checkIn?: true
    checkOut?: true
    lockToken?: true
    expiresAt?: true
    status?: true
    notes?: true
    _all?: true
  }

  export type UnitOccupancyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitOccupancy to aggregate.
     */
    where?: UnitOccupancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitOccupancies to fetch.
     */
    orderBy?: UnitOccupancyOrderByWithRelationInput | UnitOccupancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitOccupancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitOccupancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitOccupancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitOccupancies
    **/
    _count?: true | UnitOccupancyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitOccupancyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitOccupancyMaxAggregateInputType
  }

  export type GetUnitOccupancyAggregateType<T extends UnitOccupancyAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitOccupancy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitOccupancy[P]>
      : GetScalarType<T[P], AggregateUnitOccupancy[P]>
  }




  export type UnitOccupancyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitOccupancyWhereInput
    orderBy?: UnitOccupancyOrderByWithAggregationInput | UnitOccupancyOrderByWithAggregationInput[]
    by: UnitOccupancyScalarFieldEnum[] | UnitOccupancyScalarFieldEnum
    having?: UnitOccupancyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitOccupancyCountAggregateInputType | true
    _min?: UnitOccupancyMinAggregateInputType
    _max?: UnitOccupancyMaxAggregateInputType
  }

  export type UnitOccupancyGroupByOutputType = {
    id: string
    unitId: string
    reservationId: string | null
    type: $Enums.OccupancyType
    checkIn: Date
    checkOut: Date
    lockToken: string | null
    expiresAt: Date | null
    status: $Enums.OccupancyStatus
    notes: string | null
    _count: UnitOccupancyCountAggregateOutputType | null
    _min: UnitOccupancyMinAggregateOutputType | null
    _max: UnitOccupancyMaxAggregateOutputType | null
  }

  type GetUnitOccupancyGroupByPayload<T extends UnitOccupancyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitOccupancyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitOccupancyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitOccupancyGroupByOutputType[P]>
            : GetScalarType<T[P], UnitOccupancyGroupByOutputType[P]>
        }
      >
    >


  export type UnitOccupancySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    reservationId?: boolean
    type?: boolean
    checkIn?: boolean
    checkOut?: boolean
    lockToken?: boolean
    expiresAt?: boolean
    status?: boolean
    notes?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    reservation?: boolean | UnitOccupancy$reservationArgs<ExtArgs>
  }, ExtArgs["result"]["unitOccupancy"]>

  export type UnitOccupancySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    reservationId?: boolean
    type?: boolean
    checkIn?: boolean
    checkOut?: boolean
    lockToken?: boolean
    expiresAt?: boolean
    status?: boolean
    notes?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    reservation?: boolean | UnitOccupancy$reservationArgs<ExtArgs>
  }, ExtArgs["result"]["unitOccupancy"]>

  export type UnitOccupancySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    reservationId?: boolean
    type?: boolean
    checkIn?: boolean
    checkOut?: boolean
    lockToken?: boolean
    expiresAt?: boolean
    status?: boolean
    notes?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    reservation?: boolean | UnitOccupancy$reservationArgs<ExtArgs>
  }, ExtArgs["result"]["unitOccupancy"]>

  export type UnitOccupancySelectScalar = {
    id?: boolean
    unitId?: boolean
    reservationId?: boolean
    type?: boolean
    checkIn?: boolean
    checkOut?: boolean
    lockToken?: boolean
    expiresAt?: boolean
    status?: boolean
    notes?: boolean
  }

  export type UnitOccupancyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "reservationId" | "type" | "checkIn" | "checkOut" | "lockToken" | "expiresAt" | "status" | "notes", ExtArgs["result"]["unitOccupancy"]>
  export type UnitOccupancyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    reservation?: boolean | UnitOccupancy$reservationArgs<ExtArgs>
  }
  export type UnitOccupancyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    reservation?: boolean | UnitOccupancy$reservationArgs<ExtArgs>
  }
  export type UnitOccupancyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    reservation?: boolean | UnitOccupancy$reservationArgs<ExtArgs>
  }

  export type $UnitOccupancyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitOccupancy"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
      reservation: Prisma.$ReservationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string
      reservationId: string | null
      type: $Enums.OccupancyType
      checkIn: Date
      checkOut: Date
      lockToken: string | null
      expiresAt: Date | null
      status: $Enums.OccupancyStatus
      notes: string | null
    }, ExtArgs["result"]["unitOccupancy"]>
    composites: {}
  }

  type UnitOccupancyGetPayload<S extends boolean | null | undefined | UnitOccupancyDefaultArgs> = $Result.GetResult<Prisma.$UnitOccupancyPayload, S>

  type UnitOccupancyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitOccupancyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitOccupancyCountAggregateInputType | true
    }

  export interface UnitOccupancyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitOccupancy'], meta: { name: 'UnitOccupancy' } }
    /**
     * Find zero or one UnitOccupancy that matches the filter.
     * @param {UnitOccupancyFindUniqueArgs} args - Arguments to find a UnitOccupancy
     * @example
     * // Get one UnitOccupancy
     * const unitOccupancy = await prisma.unitOccupancy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitOccupancyFindUniqueArgs>(args: SelectSubset<T, UnitOccupancyFindUniqueArgs<ExtArgs>>): Prisma__UnitOccupancyClient<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnitOccupancy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitOccupancyFindUniqueOrThrowArgs} args - Arguments to find a UnitOccupancy
     * @example
     * // Get one UnitOccupancy
     * const unitOccupancy = await prisma.unitOccupancy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitOccupancyFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitOccupancyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitOccupancyClient<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitOccupancy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitOccupancyFindFirstArgs} args - Arguments to find a UnitOccupancy
     * @example
     * // Get one UnitOccupancy
     * const unitOccupancy = await prisma.unitOccupancy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitOccupancyFindFirstArgs>(args?: SelectSubset<T, UnitOccupancyFindFirstArgs<ExtArgs>>): Prisma__UnitOccupancyClient<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitOccupancy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitOccupancyFindFirstOrThrowArgs} args - Arguments to find a UnitOccupancy
     * @example
     * // Get one UnitOccupancy
     * const unitOccupancy = await prisma.unitOccupancy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitOccupancyFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitOccupancyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitOccupancyClient<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnitOccupancies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitOccupancyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitOccupancies
     * const unitOccupancies = await prisma.unitOccupancy.findMany()
     * 
     * // Get first 10 UnitOccupancies
     * const unitOccupancies = await prisma.unitOccupancy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitOccupancyWithIdOnly = await prisma.unitOccupancy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitOccupancyFindManyArgs>(args?: SelectSubset<T, UnitOccupancyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnitOccupancy.
     * @param {UnitOccupancyCreateArgs} args - Arguments to create a UnitOccupancy.
     * @example
     * // Create one UnitOccupancy
     * const UnitOccupancy = await prisma.unitOccupancy.create({
     *   data: {
     *     // ... data to create a UnitOccupancy
     *   }
     * })
     * 
     */
    create<T extends UnitOccupancyCreateArgs>(args: SelectSubset<T, UnitOccupancyCreateArgs<ExtArgs>>): Prisma__UnitOccupancyClient<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnitOccupancies.
     * @param {UnitOccupancyCreateManyArgs} args - Arguments to create many UnitOccupancies.
     * @example
     * // Create many UnitOccupancies
     * const unitOccupancy = await prisma.unitOccupancy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitOccupancyCreateManyArgs>(args?: SelectSubset<T, UnitOccupancyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnitOccupancies and returns the data saved in the database.
     * @param {UnitOccupancyCreateManyAndReturnArgs} args - Arguments to create many UnitOccupancies.
     * @example
     * // Create many UnitOccupancies
     * const unitOccupancy = await prisma.unitOccupancy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnitOccupancies and only return the `id`
     * const unitOccupancyWithIdOnly = await prisma.unitOccupancy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitOccupancyCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitOccupancyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnitOccupancy.
     * @param {UnitOccupancyDeleteArgs} args - Arguments to delete one UnitOccupancy.
     * @example
     * // Delete one UnitOccupancy
     * const UnitOccupancy = await prisma.unitOccupancy.delete({
     *   where: {
     *     // ... filter to delete one UnitOccupancy
     *   }
     * })
     * 
     */
    delete<T extends UnitOccupancyDeleteArgs>(args: SelectSubset<T, UnitOccupancyDeleteArgs<ExtArgs>>): Prisma__UnitOccupancyClient<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnitOccupancy.
     * @param {UnitOccupancyUpdateArgs} args - Arguments to update one UnitOccupancy.
     * @example
     * // Update one UnitOccupancy
     * const unitOccupancy = await prisma.unitOccupancy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitOccupancyUpdateArgs>(args: SelectSubset<T, UnitOccupancyUpdateArgs<ExtArgs>>): Prisma__UnitOccupancyClient<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnitOccupancies.
     * @param {UnitOccupancyDeleteManyArgs} args - Arguments to filter UnitOccupancies to delete.
     * @example
     * // Delete a few UnitOccupancies
     * const { count } = await prisma.unitOccupancy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitOccupancyDeleteManyArgs>(args?: SelectSubset<T, UnitOccupancyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitOccupancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitOccupancyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitOccupancies
     * const unitOccupancy = await prisma.unitOccupancy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitOccupancyUpdateManyArgs>(args: SelectSubset<T, UnitOccupancyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitOccupancies and returns the data updated in the database.
     * @param {UnitOccupancyUpdateManyAndReturnArgs} args - Arguments to update many UnitOccupancies.
     * @example
     * // Update many UnitOccupancies
     * const unitOccupancy = await prisma.unitOccupancy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnitOccupancies and only return the `id`
     * const unitOccupancyWithIdOnly = await prisma.unitOccupancy.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitOccupancyUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitOccupancyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnitOccupancy.
     * @param {UnitOccupancyUpsertArgs} args - Arguments to update or create a UnitOccupancy.
     * @example
     * // Update or create a UnitOccupancy
     * const unitOccupancy = await prisma.unitOccupancy.upsert({
     *   create: {
     *     // ... data to create a UnitOccupancy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitOccupancy we want to update
     *   }
     * })
     */
    upsert<T extends UnitOccupancyUpsertArgs>(args: SelectSubset<T, UnitOccupancyUpsertArgs<ExtArgs>>): Prisma__UnitOccupancyClient<$Result.GetResult<Prisma.$UnitOccupancyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnitOccupancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitOccupancyCountArgs} args - Arguments to filter UnitOccupancies to count.
     * @example
     * // Count the number of UnitOccupancies
     * const count = await prisma.unitOccupancy.count({
     *   where: {
     *     // ... the filter for the UnitOccupancies we want to count
     *   }
     * })
    **/
    count<T extends UnitOccupancyCountArgs>(
      args?: Subset<T, UnitOccupancyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitOccupancyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitOccupancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitOccupancyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitOccupancyAggregateArgs>(args: Subset<T, UnitOccupancyAggregateArgs>): Prisma.PrismaPromise<GetUnitOccupancyAggregateType<T>>

    /**
     * Group by UnitOccupancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitOccupancyGroupByArgs} args - Group by arguments.
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
      T extends UnitOccupancyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitOccupancyGroupByArgs['orderBy'] }
        : { orderBy?: UnitOccupancyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitOccupancyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitOccupancyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitOccupancy model
   */
  readonly fields: UnitOccupancyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitOccupancy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitOccupancyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservation<T extends UnitOccupancy$reservationArgs<ExtArgs> = {}>(args?: Subset<T, UnitOccupancy$reservationArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UnitOccupancy model
   */
  interface UnitOccupancyFieldRefs {
    readonly id: FieldRef<"UnitOccupancy", 'String'>
    readonly unitId: FieldRef<"UnitOccupancy", 'String'>
    readonly reservationId: FieldRef<"UnitOccupancy", 'String'>
    readonly type: FieldRef<"UnitOccupancy", 'OccupancyType'>
    readonly checkIn: FieldRef<"UnitOccupancy", 'DateTime'>
    readonly checkOut: FieldRef<"UnitOccupancy", 'DateTime'>
    readonly lockToken: FieldRef<"UnitOccupancy", 'String'>
    readonly expiresAt: FieldRef<"UnitOccupancy", 'DateTime'>
    readonly status: FieldRef<"UnitOccupancy", 'OccupancyStatus'>
    readonly notes: FieldRef<"UnitOccupancy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UnitOccupancy findUnique
   */
  export type UnitOccupancyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    /**
     * Filter, which UnitOccupancy to fetch.
     */
    where: UnitOccupancyWhereUniqueInput
  }

  /**
   * UnitOccupancy findUniqueOrThrow
   */
  export type UnitOccupancyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    /**
     * Filter, which UnitOccupancy to fetch.
     */
    where: UnitOccupancyWhereUniqueInput
  }

  /**
   * UnitOccupancy findFirst
   */
  export type UnitOccupancyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    /**
     * Filter, which UnitOccupancy to fetch.
     */
    where?: UnitOccupancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitOccupancies to fetch.
     */
    orderBy?: UnitOccupancyOrderByWithRelationInput | UnitOccupancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitOccupancies.
     */
    cursor?: UnitOccupancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitOccupancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitOccupancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitOccupancies.
     */
    distinct?: UnitOccupancyScalarFieldEnum | UnitOccupancyScalarFieldEnum[]
  }

  /**
   * UnitOccupancy findFirstOrThrow
   */
  export type UnitOccupancyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    /**
     * Filter, which UnitOccupancy to fetch.
     */
    where?: UnitOccupancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitOccupancies to fetch.
     */
    orderBy?: UnitOccupancyOrderByWithRelationInput | UnitOccupancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitOccupancies.
     */
    cursor?: UnitOccupancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitOccupancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitOccupancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitOccupancies.
     */
    distinct?: UnitOccupancyScalarFieldEnum | UnitOccupancyScalarFieldEnum[]
  }

  /**
   * UnitOccupancy findMany
   */
  export type UnitOccupancyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    /**
     * Filter, which UnitOccupancies to fetch.
     */
    where?: UnitOccupancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitOccupancies to fetch.
     */
    orderBy?: UnitOccupancyOrderByWithRelationInput | UnitOccupancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitOccupancies.
     */
    cursor?: UnitOccupancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitOccupancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitOccupancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitOccupancies.
     */
    distinct?: UnitOccupancyScalarFieldEnum | UnitOccupancyScalarFieldEnum[]
  }

  /**
   * UnitOccupancy create
   */
  export type UnitOccupancyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    /**
     * The data needed to create a UnitOccupancy.
     */
    data: XOR<UnitOccupancyCreateInput, UnitOccupancyUncheckedCreateInput>
  }

  /**
   * UnitOccupancy createMany
   */
  export type UnitOccupancyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitOccupancies.
     */
    data: UnitOccupancyCreateManyInput | UnitOccupancyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnitOccupancy createManyAndReturn
   */
  export type UnitOccupancyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * The data used to create many UnitOccupancies.
     */
    data: UnitOccupancyCreateManyInput | UnitOccupancyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitOccupancy update
   */
  export type UnitOccupancyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    /**
     * The data needed to update a UnitOccupancy.
     */
    data: XOR<UnitOccupancyUpdateInput, UnitOccupancyUncheckedUpdateInput>
    /**
     * Choose, which UnitOccupancy to update.
     */
    where: UnitOccupancyWhereUniqueInput
  }

  /**
   * UnitOccupancy updateMany
   */
  export type UnitOccupancyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitOccupancies.
     */
    data: XOR<UnitOccupancyUpdateManyMutationInput, UnitOccupancyUncheckedUpdateManyInput>
    /**
     * Filter which UnitOccupancies to update
     */
    where?: UnitOccupancyWhereInput
    /**
     * Limit how many UnitOccupancies to update.
     */
    limit?: number
  }

  /**
   * UnitOccupancy updateManyAndReturn
   */
  export type UnitOccupancyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * The data used to update UnitOccupancies.
     */
    data: XOR<UnitOccupancyUpdateManyMutationInput, UnitOccupancyUncheckedUpdateManyInput>
    /**
     * Filter which UnitOccupancies to update
     */
    where?: UnitOccupancyWhereInput
    /**
     * Limit how many UnitOccupancies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitOccupancy upsert
   */
  export type UnitOccupancyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    /**
     * The filter to search for the UnitOccupancy to update in case it exists.
     */
    where: UnitOccupancyWhereUniqueInput
    /**
     * In case the UnitOccupancy found by the `where` argument doesn't exist, create a new UnitOccupancy with this data.
     */
    create: XOR<UnitOccupancyCreateInput, UnitOccupancyUncheckedCreateInput>
    /**
     * In case the UnitOccupancy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitOccupancyUpdateInput, UnitOccupancyUncheckedUpdateInput>
  }

  /**
   * UnitOccupancy delete
   */
  export type UnitOccupancyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
    /**
     * Filter which UnitOccupancy to delete.
     */
    where: UnitOccupancyWhereUniqueInput
  }

  /**
   * UnitOccupancy deleteMany
   */
  export type UnitOccupancyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitOccupancies to delete
     */
    where?: UnitOccupancyWhereInput
    /**
     * Limit how many UnitOccupancies to delete.
     */
    limit?: number
  }

  /**
   * UnitOccupancy.reservation
   */
  export type UnitOccupancy$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
  }

  /**
   * UnitOccupancy without action
   */
  export type UnitOccupancyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitOccupancy
     */
    select?: UnitOccupancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitOccupancy
     */
    omit?: UnitOccupancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitOccupancyInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
    receiptSize: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
    receiptSize: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    amount: Decimal | null
    currency: $Enums.Currency | null
    paymentMethod: $Enums.PaymentMethod | null
    notes: string | null
    receiptPath: string | null
    receiptFilename: string | null
    receiptMime: string | null
    receiptSize: number | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    amount: Decimal | null
    currency: $Enums.Currency | null
    paymentMethod: $Enums.PaymentMethod | null
    notes: string | null
    receiptPath: string | null
    receiptFilename: string | null
    receiptMime: string | null
    receiptSize: number | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    reservationId: number
    amount: number
    currency: number
    paymentMethod: number
    notes: number
    receiptPath: number
    receiptFilename: number
    receiptMime: number
    receiptSize: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    receiptSize?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    receiptSize?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    reservationId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    notes?: true
    receiptPath?: true
    receiptFilename?: true
    receiptMime?: true
    receiptSize?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    reservationId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    notes?: true
    receiptPath?: true
    receiptFilename?: true
    receiptMime?: true
    receiptSize?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    reservationId?: true
    amount?: true
    currency?: true
    paymentMethod?: true
    notes?: true
    receiptPath?: true
    receiptFilename?: true
    receiptMime?: true
    receiptSize?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    reservationId: string
    amount: Decimal
    currency: $Enums.Currency
    paymentMethod: $Enums.PaymentMethod
    notes: string | null
    receiptPath: string | null
    receiptFilename: string | null
    receiptMime: string | null
    receiptSize: number | null
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    notes?: boolean
    receiptPath?: boolean
    receiptFilename?: boolean
    receiptMime?: boolean
    receiptSize?: boolean
    createdAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    notes?: boolean
    receiptPath?: boolean
    receiptFilename?: boolean
    receiptMime?: boolean
    receiptSize?: boolean
    createdAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    notes?: boolean
    receiptPath?: boolean
    receiptFilename?: boolean
    receiptMime?: boolean
    receiptSize?: boolean
    createdAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    reservationId?: boolean
    amount?: boolean
    currency?: boolean
    paymentMethod?: boolean
    notes?: boolean
    receiptPath?: boolean
    receiptFilename?: boolean
    receiptMime?: boolean
    receiptSize?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "amount" | "currency" | "paymentMethod" | "notes" | "receiptPath" | "receiptFilename" | "receiptMime" | "receiptSize" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      amount: Prisma.Decimal
      currency: $Enums.Currency
      paymentMethod: $Enums.PaymentMethod
      notes: string | null
      receiptPath: string | null
      receiptFilename: string | null
      receiptMime: string | null
      receiptSize: number | null
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly reservationId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly currency: FieldRef<"Payment", 'Currency'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly notes: FieldRef<"Payment", 'String'>
    readonly receiptPath: FieldRef<"Payment", 'String'>
    readonly receiptFilename: FieldRef<"Payment", 'String'>
    readonly receiptMime: FieldRef<"Payment", 'String'>
    readonly receiptSize: FieldRef<"Payment", 'Int'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model AnonymizationRequest
   */

  export type AggregateAnonymizationRequest = {
    _count: AnonymizationRequestCountAggregateOutputType | null
    _min: AnonymizationRequestMinAggregateOutputType | null
    _max: AnonymizationRequestMaxAggregateOutputType | null
  }

  export type AnonymizationRequestMinAggregateOutputType = {
    id: string | null
    guestId: string | null
    requestedAt: Date | null
    deadlineAt: Date | null
    completedAt: Date | null
    status: $Enums.AnonymizationStatus | null
  }

  export type AnonymizationRequestMaxAggregateOutputType = {
    id: string | null
    guestId: string | null
    requestedAt: Date | null
    deadlineAt: Date | null
    completedAt: Date | null
    status: $Enums.AnonymizationStatus | null
  }

  export type AnonymizationRequestCountAggregateOutputType = {
    id: number
    guestId: number
    requestedAt: number
    deadlineAt: number
    completedAt: number
    status: number
    _all: number
  }


  export type AnonymizationRequestMinAggregateInputType = {
    id?: true
    guestId?: true
    requestedAt?: true
    deadlineAt?: true
    completedAt?: true
    status?: true
  }

  export type AnonymizationRequestMaxAggregateInputType = {
    id?: true
    guestId?: true
    requestedAt?: true
    deadlineAt?: true
    completedAt?: true
    status?: true
  }

  export type AnonymizationRequestCountAggregateInputType = {
    id?: true
    guestId?: true
    requestedAt?: true
    deadlineAt?: true
    completedAt?: true
    status?: true
    _all?: true
  }

  export type AnonymizationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnonymizationRequest to aggregate.
     */
    where?: AnonymizationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymizationRequests to fetch.
     */
    orderBy?: AnonymizationRequestOrderByWithRelationInput | AnonymizationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnonymizationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymizationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymizationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnonymizationRequests
    **/
    _count?: true | AnonymizationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnonymizationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnonymizationRequestMaxAggregateInputType
  }

  export type GetAnonymizationRequestAggregateType<T extends AnonymizationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateAnonymizationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnonymizationRequest[P]>
      : GetScalarType<T[P], AggregateAnonymizationRequest[P]>
  }




  export type AnonymizationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnonymizationRequestWhereInput
    orderBy?: AnonymizationRequestOrderByWithAggregationInput | AnonymizationRequestOrderByWithAggregationInput[]
    by: AnonymizationRequestScalarFieldEnum[] | AnonymizationRequestScalarFieldEnum
    having?: AnonymizationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnonymizationRequestCountAggregateInputType | true
    _min?: AnonymizationRequestMinAggregateInputType
    _max?: AnonymizationRequestMaxAggregateInputType
  }

  export type AnonymizationRequestGroupByOutputType = {
    id: string
    guestId: string
    requestedAt: Date
    deadlineAt: Date
    completedAt: Date | null
    status: $Enums.AnonymizationStatus
    _count: AnonymizationRequestCountAggregateOutputType | null
    _min: AnonymizationRequestMinAggregateOutputType | null
    _max: AnonymizationRequestMaxAggregateOutputType | null
  }

  type GetAnonymizationRequestGroupByPayload<T extends AnonymizationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnonymizationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnonymizationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnonymizationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], AnonymizationRequestGroupByOutputType[P]>
        }
      >
    >


  export type AnonymizationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    requestedAt?: boolean
    deadlineAt?: boolean
    completedAt?: boolean
    status?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anonymizationRequest"]>

  export type AnonymizationRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    requestedAt?: boolean
    deadlineAt?: boolean
    completedAt?: boolean
    status?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anonymizationRequest"]>

  export type AnonymizationRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    requestedAt?: boolean
    deadlineAt?: boolean
    completedAt?: boolean
    status?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anonymizationRequest"]>

  export type AnonymizationRequestSelectScalar = {
    id?: boolean
    guestId?: boolean
    requestedAt?: boolean
    deadlineAt?: boolean
    completedAt?: boolean
    status?: boolean
  }

  export type AnonymizationRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestId" | "requestedAt" | "deadlineAt" | "completedAt" | "status", ExtArgs["result"]["anonymizationRequest"]>
  export type AnonymizationRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type AnonymizationRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type AnonymizationRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }

  export type $AnonymizationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnonymizationRequest"
    objects: {
      guest: Prisma.$GuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestId: string
      requestedAt: Date
      deadlineAt: Date
      completedAt: Date | null
      status: $Enums.AnonymizationStatus
    }, ExtArgs["result"]["anonymizationRequest"]>
    composites: {}
  }

  type AnonymizationRequestGetPayload<S extends boolean | null | undefined | AnonymizationRequestDefaultArgs> = $Result.GetResult<Prisma.$AnonymizationRequestPayload, S>

  type AnonymizationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnonymizationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnonymizationRequestCountAggregateInputType | true
    }

  export interface AnonymizationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnonymizationRequest'], meta: { name: 'AnonymizationRequest' } }
    /**
     * Find zero or one AnonymizationRequest that matches the filter.
     * @param {AnonymizationRequestFindUniqueArgs} args - Arguments to find a AnonymizationRequest
     * @example
     * // Get one AnonymizationRequest
     * const anonymizationRequest = await prisma.anonymizationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnonymizationRequestFindUniqueArgs>(args: SelectSubset<T, AnonymizationRequestFindUniqueArgs<ExtArgs>>): Prisma__AnonymizationRequestClient<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnonymizationRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnonymizationRequestFindUniqueOrThrowArgs} args - Arguments to find a AnonymizationRequest
     * @example
     * // Get one AnonymizationRequest
     * const anonymizationRequest = await prisma.anonymizationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnonymizationRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, AnonymizationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnonymizationRequestClient<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnonymizationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymizationRequestFindFirstArgs} args - Arguments to find a AnonymizationRequest
     * @example
     * // Get one AnonymizationRequest
     * const anonymizationRequest = await prisma.anonymizationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnonymizationRequestFindFirstArgs>(args?: SelectSubset<T, AnonymizationRequestFindFirstArgs<ExtArgs>>): Prisma__AnonymizationRequestClient<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnonymizationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymizationRequestFindFirstOrThrowArgs} args - Arguments to find a AnonymizationRequest
     * @example
     * // Get one AnonymizationRequest
     * const anonymizationRequest = await prisma.anonymizationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnonymizationRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, AnonymizationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnonymizationRequestClient<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnonymizationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymizationRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnonymizationRequests
     * const anonymizationRequests = await prisma.anonymizationRequest.findMany()
     * 
     * // Get first 10 AnonymizationRequests
     * const anonymizationRequests = await prisma.anonymizationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anonymizationRequestWithIdOnly = await prisma.anonymizationRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnonymizationRequestFindManyArgs>(args?: SelectSubset<T, AnonymizationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnonymizationRequest.
     * @param {AnonymizationRequestCreateArgs} args - Arguments to create a AnonymizationRequest.
     * @example
     * // Create one AnonymizationRequest
     * const AnonymizationRequest = await prisma.anonymizationRequest.create({
     *   data: {
     *     // ... data to create a AnonymizationRequest
     *   }
     * })
     * 
     */
    create<T extends AnonymizationRequestCreateArgs>(args: SelectSubset<T, AnonymizationRequestCreateArgs<ExtArgs>>): Prisma__AnonymizationRequestClient<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnonymizationRequests.
     * @param {AnonymizationRequestCreateManyArgs} args - Arguments to create many AnonymizationRequests.
     * @example
     * // Create many AnonymizationRequests
     * const anonymizationRequest = await prisma.anonymizationRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnonymizationRequestCreateManyArgs>(args?: SelectSubset<T, AnonymizationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnonymizationRequests and returns the data saved in the database.
     * @param {AnonymizationRequestCreateManyAndReturnArgs} args - Arguments to create many AnonymizationRequests.
     * @example
     * // Create many AnonymizationRequests
     * const anonymizationRequest = await prisma.anonymizationRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnonymizationRequests and only return the `id`
     * const anonymizationRequestWithIdOnly = await prisma.anonymizationRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnonymizationRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, AnonymizationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnonymizationRequest.
     * @param {AnonymizationRequestDeleteArgs} args - Arguments to delete one AnonymizationRequest.
     * @example
     * // Delete one AnonymizationRequest
     * const AnonymizationRequest = await prisma.anonymizationRequest.delete({
     *   where: {
     *     // ... filter to delete one AnonymizationRequest
     *   }
     * })
     * 
     */
    delete<T extends AnonymizationRequestDeleteArgs>(args: SelectSubset<T, AnonymizationRequestDeleteArgs<ExtArgs>>): Prisma__AnonymizationRequestClient<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnonymizationRequest.
     * @param {AnonymizationRequestUpdateArgs} args - Arguments to update one AnonymizationRequest.
     * @example
     * // Update one AnonymizationRequest
     * const anonymizationRequest = await prisma.anonymizationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnonymizationRequestUpdateArgs>(args: SelectSubset<T, AnonymizationRequestUpdateArgs<ExtArgs>>): Prisma__AnonymizationRequestClient<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnonymizationRequests.
     * @param {AnonymizationRequestDeleteManyArgs} args - Arguments to filter AnonymizationRequests to delete.
     * @example
     * // Delete a few AnonymizationRequests
     * const { count } = await prisma.anonymizationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnonymizationRequestDeleteManyArgs>(args?: SelectSubset<T, AnonymizationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnonymizationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymizationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnonymizationRequests
     * const anonymizationRequest = await prisma.anonymizationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnonymizationRequestUpdateManyArgs>(args: SelectSubset<T, AnonymizationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnonymizationRequests and returns the data updated in the database.
     * @param {AnonymizationRequestUpdateManyAndReturnArgs} args - Arguments to update many AnonymizationRequests.
     * @example
     * // Update many AnonymizationRequests
     * const anonymizationRequest = await prisma.anonymizationRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnonymizationRequests and only return the `id`
     * const anonymizationRequestWithIdOnly = await prisma.anonymizationRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnonymizationRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, AnonymizationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnonymizationRequest.
     * @param {AnonymizationRequestUpsertArgs} args - Arguments to update or create a AnonymizationRequest.
     * @example
     * // Update or create a AnonymizationRequest
     * const anonymizationRequest = await prisma.anonymizationRequest.upsert({
     *   create: {
     *     // ... data to create a AnonymizationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnonymizationRequest we want to update
     *   }
     * })
     */
    upsert<T extends AnonymizationRequestUpsertArgs>(args: SelectSubset<T, AnonymizationRequestUpsertArgs<ExtArgs>>): Prisma__AnonymizationRequestClient<$Result.GetResult<Prisma.$AnonymizationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnonymizationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymizationRequestCountArgs} args - Arguments to filter AnonymizationRequests to count.
     * @example
     * // Count the number of AnonymizationRequests
     * const count = await prisma.anonymizationRequest.count({
     *   where: {
     *     // ... the filter for the AnonymizationRequests we want to count
     *   }
     * })
    **/
    count<T extends AnonymizationRequestCountArgs>(
      args?: Subset<T, AnonymizationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnonymizationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnonymizationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymizationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnonymizationRequestAggregateArgs>(args: Subset<T, AnonymizationRequestAggregateArgs>): Prisma.PrismaPromise<GetAnonymizationRequestAggregateType<T>>

    /**
     * Group by AnonymizationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymizationRequestGroupByArgs} args - Group by arguments.
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
      T extends AnonymizationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnonymizationRequestGroupByArgs['orderBy'] }
        : { orderBy?: AnonymizationRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnonymizationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnonymizationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnonymizationRequest model
   */
  readonly fields: AnonymizationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnonymizationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnonymizationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnonymizationRequest model
   */
  interface AnonymizationRequestFieldRefs {
    readonly id: FieldRef<"AnonymizationRequest", 'String'>
    readonly guestId: FieldRef<"AnonymizationRequest", 'String'>
    readonly requestedAt: FieldRef<"AnonymizationRequest", 'DateTime'>
    readonly deadlineAt: FieldRef<"AnonymizationRequest", 'DateTime'>
    readonly completedAt: FieldRef<"AnonymizationRequest", 'DateTime'>
    readonly status: FieldRef<"AnonymizationRequest", 'AnonymizationStatus'>
  }
    

  // Custom InputTypes
  /**
   * AnonymizationRequest findUnique
   */
  export type AnonymizationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
    /**
     * Filter, which AnonymizationRequest to fetch.
     */
    where: AnonymizationRequestWhereUniqueInput
  }

  /**
   * AnonymizationRequest findUniqueOrThrow
   */
  export type AnonymizationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
    /**
     * Filter, which AnonymizationRequest to fetch.
     */
    where: AnonymizationRequestWhereUniqueInput
  }

  /**
   * AnonymizationRequest findFirst
   */
  export type AnonymizationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
    /**
     * Filter, which AnonymizationRequest to fetch.
     */
    where?: AnonymizationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymizationRequests to fetch.
     */
    orderBy?: AnonymizationRequestOrderByWithRelationInput | AnonymizationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnonymizationRequests.
     */
    cursor?: AnonymizationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymizationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymizationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnonymizationRequests.
     */
    distinct?: AnonymizationRequestScalarFieldEnum | AnonymizationRequestScalarFieldEnum[]
  }

  /**
   * AnonymizationRequest findFirstOrThrow
   */
  export type AnonymizationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
    /**
     * Filter, which AnonymizationRequest to fetch.
     */
    where?: AnonymizationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymizationRequests to fetch.
     */
    orderBy?: AnonymizationRequestOrderByWithRelationInput | AnonymizationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnonymizationRequests.
     */
    cursor?: AnonymizationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymizationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymizationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnonymizationRequests.
     */
    distinct?: AnonymizationRequestScalarFieldEnum | AnonymizationRequestScalarFieldEnum[]
  }

  /**
   * AnonymizationRequest findMany
   */
  export type AnonymizationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
    /**
     * Filter, which AnonymizationRequests to fetch.
     */
    where?: AnonymizationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymizationRequests to fetch.
     */
    orderBy?: AnonymizationRequestOrderByWithRelationInput | AnonymizationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnonymizationRequests.
     */
    cursor?: AnonymizationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymizationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymizationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnonymizationRequests.
     */
    distinct?: AnonymizationRequestScalarFieldEnum | AnonymizationRequestScalarFieldEnum[]
  }

  /**
   * AnonymizationRequest create
   */
  export type AnonymizationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a AnonymizationRequest.
     */
    data: XOR<AnonymizationRequestCreateInput, AnonymizationRequestUncheckedCreateInput>
  }

  /**
   * AnonymizationRequest createMany
   */
  export type AnonymizationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnonymizationRequests.
     */
    data: AnonymizationRequestCreateManyInput | AnonymizationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnonymizationRequest createManyAndReturn
   */
  export type AnonymizationRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * The data used to create many AnonymizationRequests.
     */
    data: AnonymizationRequestCreateManyInput | AnonymizationRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnonymizationRequest update
   */
  export type AnonymizationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a AnonymizationRequest.
     */
    data: XOR<AnonymizationRequestUpdateInput, AnonymizationRequestUncheckedUpdateInput>
    /**
     * Choose, which AnonymizationRequest to update.
     */
    where: AnonymizationRequestWhereUniqueInput
  }

  /**
   * AnonymizationRequest updateMany
   */
  export type AnonymizationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnonymizationRequests.
     */
    data: XOR<AnonymizationRequestUpdateManyMutationInput, AnonymizationRequestUncheckedUpdateManyInput>
    /**
     * Filter which AnonymizationRequests to update
     */
    where?: AnonymizationRequestWhereInput
    /**
     * Limit how many AnonymizationRequests to update.
     */
    limit?: number
  }

  /**
   * AnonymizationRequest updateManyAndReturn
   */
  export type AnonymizationRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * The data used to update AnonymizationRequests.
     */
    data: XOR<AnonymizationRequestUpdateManyMutationInput, AnonymizationRequestUncheckedUpdateManyInput>
    /**
     * Filter which AnonymizationRequests to update
     */
    where?: AnonymizationRequestWhereInput
    /**
     * Limit how many AnonymizationRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnonymizationRequest upsert
   */
  export type AnonymizationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the AnonymizationRequest to update in case it exists.
     */
    where: AnonymizationRequestWhereUniqueInput
    /**
     * In case the AnonymizationRequest found by the `where` argument doesn't exist, create a new AnonymizationRequest with this data.
     */
    create: XOR<AnonymizationRequestCreateInput, AnonymizationRequestUncheckedCreateInput>
    /**
     * In case the AnonymizationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnonymizationRequestUpdateInput, AnonymizationRequestUncheckedUpdateInput>
  }

  /**
   * AnonymizationRequest delete
   */
  export type AnonymizationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
    /**
     * Filter which AnonymizationRequest to delete.
     */
    where: AnonymizationRequestWhereUniqueInput
  }

  /**
   * AnonymizationRequest deleteMany
   */
  export type AnonymizationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnonymizationRequests to delete
     */
    where?: AnonymizationRequestWhereInput
    /**
     * Limit how many AnonymizationRequests to delete.
     */
    limit?: number
  }

  /**
   * AnonymizationRequest without action
   */
  export type AnonymizationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymizationRequest
     */
    select?: AnonymizationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnonymizationRequest
     */
    omit?: AnonymizationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnonymizationRequestInclude<ExtArgs> | null
  }


  /**
   * Model SystemSetting
   */

  export type AggregateSystemSetting = {
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  export type SystemSettingMinAggregateOutputType = {
    key: string | null
    value: string | null
    description: string | null
  }

  export type SystemSettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
    description: string | null
  }

  export type SystemSettingCountAggregateOutputType = {
    key: number
    value: number
    description: number
    _all: number
  }


  export type SystemSettingMinAggregateInputType = {
    key?: true
    value?: true
    description?: true
  }

  export type SystemSettingMaxAggregateInputType = {
    key?: true
    value?: true
    description?: true
  }

  export type SystemSettingCountAggregateInputType = {
    key?: true
    value?: true
    description?: true
    _all?: true
  }

  export type SystemSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSetting to aggregate.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingMaxAggregateInputType
  }

  export type GetSystemSettingAggregateType<T extends SystemSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSetting[P]>
      : GetScalarType<T[P], AggregateSystemSetting[P]>
  }




  export type SystemSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingWhereInput
    orderBy?: SystemSettingOrderByWithAggregationInput | SystemSettingOrderByWithAggregationInput[]
    by: SystemSettingScalarFieldEnum[] | SystemSettingScalarFieldEnum
    having?: SystemSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingCountAggregateInputType | true
    _min?: SystemSettingMinAggregateInputType
    _max?: SystemSettingMaxAggregateInputType
  }

  export type SystemSettingGroupByOutputType = {
    key: string
    value: string
    description: string | null
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  type GetSystemSettingGroupByPayload<T extends SystemSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    description?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    description?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    description?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectScalar = {
    key?: boolean
    value?: boolean
    description?: boolean
  }

  export type SystemSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "description", ExtArgs["result"]["systemSetting"]>

  export type $SystemSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      description: string | null
    }, ExtArgs["result"]["systemSetting"]>
    composites: {}
  }

  type SystemSettingGetPayload<S extends boolean | null | undefined | SystemSettingDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingPayload, S>

  type SystemSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingCountAggregateInputType | true
    }

  export interface SystemSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSetting'], meta: { name: 'SystemSetting' } }
    /**
     * Find zero or one SystemSetting that matches the filter.
     * @param {SystemSettingFindUniqueArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingFindUniqueArgs>(args: SelectSubset<T, SystemSettingFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingFindUniqueOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingFindFirstArgs>(args?: SelectSubset<T, SystemSettingFindFirstArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const systemSettingWithKeyOnly = await prisma.systemSetting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SystemSettingFindManyArgs>(args?: SelectSubset<T, SystemSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSetting.
     * @param {SystemSettingCreateArgs} args - Arguments to create a SystemSetting.
     * @example
     * // Create one SystemSetting
     * const SystemSetting = await prisma.systemSetting.create({
     *   data: {
     *     // ... data to create a SystemSetting
     *   }
     * })
     * 
     */
    create<T extends SystemSettingCreateArgs>(args: SelectSubset<T, SystemSettingCreateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingCreateManyArgs>(args?: SelectSubset<T, SystemSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `key`
     * const systemSettingWithKeyOnly = await prisma.systemSetting.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSetting.
     * @param {SystemSettingDeleteArgs} args - Arguments to delete one SystemSetting.
     * @example
     * // Delete one SystemSetting
     * const SystemSetting = await prisma.systemSetting.delete({
     *   where: {
     *     // ... filter to delete one SystemSetting
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingDeleteArgs>(args: SelectSubset<T, SystemSettingDeleteArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSetting.
     * @param {SystemSettingUpdateArgs} args - Arguments to update one SystemSetting.
     * @example
     * // Update one SystemSetting
     * const systemSetting = await prisma.systemSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingUpdateArgs>(args: SelectSubset<T, SystemSettingUpdateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingDeleteManyArgs>(args?: SelectSubset<T, SystemSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingUpdateManyArgs>(args: SelectSubset<T, SystemSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `key`
     * const systemSettingWithKeyOnly = await prisma.systemSetting.updateManyAndReturn({
     *   select: { key: true },
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
    updateManyAndReturn<T extends SystemSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSetting.
     * @param {SystemSettingUpsertArgs} args - Arguments to update or create a SystemSetting.
     * @example
     * // Update or create a SystemSetting
     * const systemSetting = await prisma.systemSetting.upsert({
     *   create: {
     *     // ... data to create a SystemSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSetting we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingUpsertArgs>(args: SelectSubset<T, SystemSettingUpsertArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSetting.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingCountArgs>(
      args?: Subset<T, SystemSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemSettingAggregateArgs>(args: Subset<T, SystemSettingAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingAggregateType<T>>

    /**
     * Group by SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingGroupByArgs} args - Group by arguments.
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
      T extends SystemSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSetting model
   */
  readonly fields: SystemSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SystemSetting model
   */
  interface SystemSettingFieldRefs {
    readonly key: FieldRef<"SystemSetting", 'String'>
    readonly value: FieldRef<"SystemSetting", 'String'>
    readonly description: FieldRef<"SystemSetting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SystemSetting findUnique
   */
  export type SystemSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findUniqueOrThrow
   */
  export type SystemSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findFirst
   */
  export type SystemSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findFirstOrThrow
   */
  export type SystemSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findMany
   */
  export type SystemSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting create
   */
  export type SystemSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSetting.
     */
    data: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
  }

  /**
   * SystemSetting createMany
   */
  export type SystemSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSetting createManyAndReturn
   */
  export type SystemSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSetting update
   */
  export type SystemSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSetting.
     */
    data: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
    /**
     * Choose, which SystemSetting to update.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting updateMany
   */
  export type SystemSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSetting updateManyAndReturn
   */
  export type SystemSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSetting upsert
   */
  export type SystemSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSetting to update in case it exists.
     */
    where: SystemSettingWhereUniqueInput
    /**
     * In case the SystemSetting found by the `where` argument doesn't exist, create a new SystemSetting with this data.
     */
    create: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
    /**
     * In case the SystemSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
  }

  /**
   * SystemSetting delete
   */
  export type SystemSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter which SystemSetting to delete.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting deleteMany
   */
  export type SystemSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSetting without action
   */
  export type SystemSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
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


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    capacityAdults: 'capacityAdults',
    capacityChildren: 'capacityChildren',
    maxOccupancy: 'maxOccupancy',
    basePriceArs: 'basePriceArs',
    basePriceUsd: 'basePriceUsd',
    images: 'images',
    isActive: 'isActive',
    displayOrder: 'displayOrder'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    name: 'name',
    icalFeedUrl: 'icalFeedUrl',
    icalExportToken: 'icalExportToken',
    isActive: 'isActive',
    notes: 'notes'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const SeasonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    minStayNights: 'minStayNights',
    isActive: 'isActive'
  };

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const SeasonPriceScalarFieldEnum: {
    id: 'id',
    seasonId: 'seasonId',
    categoryId: 'categoryId',
    priceArs: 'priceArs',
    priceUsd: 'priceUsd'
  };

  export type SeasonPriceScalarFieldEnum = (typeof SeasonPriceScalarFieldEnum)[keyof typeof SeasonPriceScalarFieldEnum]


  export const DiscountRuleScalarFieldEnum: {
    id: 'id',
    minNights: 'minNights',
    discountPercent: 'discountPercent',
    isActive: 'isActive'
  };

  export type DiscountRuleScalarFieldEnum = (typeof DiscountRuleScalarFieldEnum)[keyof typeof DiscountRuleScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    docType: 'docType',
    docNumber: 'docNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    birthDate: 'birthDate',
    isAnonymized: 'isAnonymized',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    code: 'code',
    categoryId: 'categoryId',
    unitId: 'unitId',
    guestId: 'guestId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    adults: 'adults',
    children: 'children',
    currency: 'currency',
    subtotal: 'subtotal',
    discountAmount: 'discountAmount',
    totalPrice: 'totalPrice',
    status: 'status',
    origin: 'origin',
    cancellationReason: 'cancellationReason',
    notes: 'notes',
    paymentMethodSentAt: 'paymentMethodSentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const CompanionScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    firstName: 'firstName',
    lastName: 'lastName',
    docType: 'docType',
    docNumber: 'docNumber',
    birthDate: 'birthDate'
  };

  export type CompanionScalarFieldEnum = (typeof CompanionScalarFieldEnum)[keyof typeof CompanionScalarFieldEnum]


  export const UnitOccupancyScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    reservationId: 'reservationId',
    type: 'type',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    lockToken: 'lockToken',
    expiresAt: 'expiresAt',
    status: 'status',
    notes: 'notes'
  };

  export type UnitOccupancyScalarFieldEnum = (typeof UnitOccupancyScalarFieldEnum)[keyof typeof UnitOccupancyScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    amount: 'amount',
    currency: 'currency',
    paymentMethod: 'paymentMethod',
    notes: 'notes',
    receiptPath: 'receiptPath',
    receiptFilename: 'receiptFilename',
    receiptMime: 'receiptMime',
    receiptSize: 'receiptSize',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const AnonymizationRequestScalarFieldEnum: {
    id: 'id',
    guestId: 'guestId',
    requestedAt: 'requestedAt',
    deadlineAt: 'deadlineAt',
    completedAt: 'completedAt',
    status: 'status'
  };

  export type AnonymizationRequestScalarFieldEnum = (typeof AnonymizationRequestScalarFieldEnum)[keyof typeof AnonymizationRequestScalarFieldEnum]


  export const SystemSettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    description: 'description'
  };

  export type SystemSettingScalarFieldEnum = (typeof SystemSettingScalarFieldEnum)[keyof typeof SystemSettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DocType'
   */
  export type EnumDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocType'>
    


  /**
   * Reference to a field of type 'DocType[]'
   */
  export type ListEnumDocTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocType[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    


  /**
   * Reference to a field of type 'ReservationOrigin'
   */
  export type EnumReservationOriginFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationOrigin'>
    


  /**
   * Reference to a field of type 'ReservationOrigin[]'
   */
  export type ListEnumReservationOriginFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationOrigin[]'>
    


  /**
   * Reference to a field of type 'OccupancyType'
   */
  export type EnumOccupancyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OccupancyType'>
    


  /**
   * Reference to a field of type 'OccupancyType[]'
   */
  export type ListEnumOccupancyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OccupancyType[]'>
    


  /**
   * Reference to a field of type 'OccupancyStatus'
   */
  export type EnumOccupancyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OccupancyStatus'>
    


  /**
   * Reference to a field of type 'OccupancyStatus[]'
   */
  export type ListEnumOccupancyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OccupancyStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'AnonymizationStatus'
   */
  export type EnumAnonymizationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnonymizationStatus'>
    


  /**
   * Reference to a field of type 'AnonymizationStatus[]'
   */
  export type ListEnumAnonymizationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnonymizationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    email?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    passwordHash?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    capacityAdults?: IntFilter<"Category"> | number
    capacityChildren?: IntFilter<"Category"> | number
    maxOccupancy?: IntFilter<"Category"> | number
    basePriceArs?: DecimalFilter<"Category"> | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFilter<"Category"> | Decimal | DecimalJsLike | number | string
    images?: JsonFilter<"Category">
    isActive?: BoolFilter<"Category"> | boolean
    displayOrder?: IntFilter<"Category"> | number
    units?: UnitListRelationFilter
    seasonPrices?: SeasonPriceListRelationFilter
    reservations?: ReservationListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    capacityAdults?: SortOrder
    capacityChildren?: SortOrder
    maxOccupancy?: SortOrder
    basePriceArs?: SortOrder
    basePriceUsd?: SortOrder
    images?: SortOrder
    isActive?: SortOrder
    displayOrder?: SortOrder
    units?: UnitOrderByRelationAggregateInput
    seasonPrices?: SeasonPriceOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    capacityAdults?: IntFilter<"Category"> | number
    capacityChildren?: IntFilter<"Category"> | number
    maxOccupancy?: IntFilter<"Category"> | number
    basePriceArs?: DecimalFilter<"Category"> | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFilter<"Category"> | Decimal | DecimalJsLike | number | string
    images?: JsonFilter<"Category">
    isActive?: BoolFilter<"Category"> | boolean
    displayOrder?: IntFilter<"Category"> | number
    units?: UnitListRelationFilter
    seasonPrices?: SeasonPriceListRelationFilter
    reservations?: ReservationListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    capacityAdults?: SortOrder
    capacityChildren?: SortOrder
    maxOccupancy?: SortOrder
    basePriceArs?: SortOrder
    basePriceUsd?: SortOrder
    images?: SortOrder
    isActive?: SortOrder
    displayOrder?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    capacityAdults?: IntWithAggregatesFilter<"Category"> | number
    capacityChildren?: IntWithAggregatesFilter<"Category"> | number
    maxOccupancy?: IntWithAggregatesFilter<"Category"> | number
    basePriceArs?: DecimalWithAggregatesFilter<"Category"> | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalWithAggregatesFilter<"Category"> | Decimal | DecimalJsLike | number | string
    images?: JsonWithAggregatesFilter<"Category">
    isActive?: BoolWithAggregatesFilter<"Category"> | boolean
    displayOrder?: IntWithAggregatesFilter<"Category"> | number
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    categoryId?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    icalFeedUrl?: StringNullableFilter<"Unit"> | string | null
    icalExportToken?: StringFilter<"Unit"> | string
    isActive?: BoolFilter<"Unit"> | boolean
    notes?: StringNullableFilter<"Unit"> | string | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    occupancies?: UnitOccupancyListRelationFilter
    reservations?: ReservationListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    icalFeedUrl?: SortOrderInput | SortOrder
    icalExportToken?: SortOrder
    isActive?: SortOrder
    notes?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    occupancies?: UnitOccupancyOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    icalExportToken?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    categoryId?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    icalFeedUrl?: StringNullableFilter<"Unit"> | string | null
    isActive?: BoolFilter<"Unit"> | boolean
    notes?: StringNullableFilter<"Unit"> | string | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    occupancies?: UnitOccupancyListRelationFilter
    reservations?: ReservationListRelationFilter
  }, "id" | "icalExportToken">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    icalFeedUrl?: SortOrderInput | SortOrder
    icalExportToken?: SortOrder
    isActive?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: UnitCountOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    categoryId?: StringWithAggregatesFilter<"Unit"> | string
    name?: StringWithAggregatesFilter<"Unit"> | string
    icalFeedUrl?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    icalExportToken?: StringWithAggregatesFilter<"Unit"> | string
    isActive?: BoolWithAggregatesFilter<"Unit"> | boolean
    notes?: StringNullableWithAggregatesFilter<"Unit"> | string | null
  }

  export type SeasonWhereInput = {
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    id?: StringFilter<"Season"> | string
    name?: StringFilter<"Season"> | string
    startDate?: DateTimeFilter<"Season"> | Date | string
    endDate?: DateTimeFilter<"Season"> | Date | string
    minStayNights?: IntFilter<"Season"> | number
    isActive?: BoolFilter<"Season"> | boolean
    seasonPrices?: SeasonPriceListRelationFilter
  }

  export type SeasonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    minStayNights?: SortOrder
    isActive?: SortOrder
    seasonPrices?: SeasonPriceOrderByRelationAggregateInput
  }

  export type SeasonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeasonWhereInput | SeasonWhereInput[]
    OR?: SeasonWhereInput[]
    NOT?: SeasonWhereInput | SeasonWhereInput[]
    name?: StringFilter<"Season"> | string
    startDate?: DateTimeFilter<"Season"> | Date | string
    endDate?: DateTimeFilter<"Season"> | Date | string
    minStayNights?: IntFilter<"Season"> | number
    isActive?: BoolFilter<"Season"> | boolean
    seasonPrices?: SeasonPriceListRelationFilter
  }, "id">

  export type SeasonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    minStayNights?: SortOrder
    isActive?: SortOrder
    _count?: SeasonCountOrderByAggregateInput
    _avg?: SeasonAvgOrderByAggregateInput
    _max?: SeasonMaxOrderByAggregateInput
    _min?: SeasonMinOrderByAggregateInput
    _sum?: SeasonSumOrderByAggregateInput
  }

  export type SeasonScalarWhereWithAggregatesInput = {
    AND?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    OR?: SeasonScalarWhereWithAggregatesInput[]
    NOT?: SeasonScalarWhereWithAggregatesInput | SeasonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Season"> | string
    name?: StringWithAggregatesFilter<"Season"> | string
    startDate?: DateTimeWithAggregatesFilter<"Season"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Season"> | Date | string
    minStayNights?: IntWithAggregatesFilter<"Season"> | number
    isActive?: BoolWithAggregatesFilter<"Season"> | boolean
  }

  export type SeasonPriceWhereInput = {
    AND?: SeasonPriceWhereInput | SeasonPriceWhereInput[]
    OR?: SeasonPriceWhereInput[]
    NOT?: SeasonPriceWhereInput | SeasonPriceWhereInput[]
    id?: StringFilter<"SeasonPrice"> | string
    seasonId?: StringFilter<"SeasonPrice"> | string
    categoryId?: StringFilter<"SeasonPrice"> | string
    priceArs?: DecimalFilter<"SeasonPrice"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFilter<"SeasonPrice"> | Decimal | DecimalJsLike | number | string
    season?: XOR<SeasonScalarRelationFilter, SeasonWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type SeasonPriceOrderByWithRelationInput = {
    id?: SortOrder
    seasonId?: SortOrder
    categoryId?: SortOrder
    priceArs?: SortOrder
    priceUsd?: SortOrder
    season?: SeasonOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type SeasonPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    seasonId_categoryId?: SeasonPriceSeasonIdCategoryIdCompoundUniqueInput
    AND?: SeasonPriceWhereInput | SeasonPriceWhereInput[]
    OR?: SeasonPriceWhereInput[]
    NOT?: SeasonPriceWhereInput | SeasonPriceWhereInput[]
    seasonId?: StringFilter<"SeasonPrice"> | string
    categoryId?: StringFilter<"SeasonPrice"> | string
    priceArs?: DecimalFilter<"SeasonPrice"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFilter<"SeasonPrice"> | Decimal | DecimalJsLike | number | string
    season?: XOR<SeasonScalarRelationFilter, SeasonWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id" | "seasonId_categoryId">

  export type SeasonPriceOrderByWithAggregationInput = {
    id?: SortOrder
    seasonId?: SortOrder
    categoryId?: SortOrder
    priceArs?: SortOrder
    priceUsd?: SortOrder
    _count?: SeasonPriceCountOrderByAggregateInput
    _avg?: SeasonPriceAvgOrderByAggregateInput
    _max?: SeasonPriceMaxOrderByAggregateInput
    _min?: SeasonPriceMinOrderByAggregateInput
    _sum?: SeasonPriceSumOrderByAggregateInput
  }

  export type SeasonPriceScalarWhereWithAggregatesInput = {
    AND?: SeasonPriceScalarWhereWithAggregatesInput | SeasonPriceScalarWhereWithAggregatesInput[]
    OR?: SeasonPriceScalarWhereWithAggregatesInput[]
    NOT?: SeasonPriceScalarWhereWithAggregatesInput | SeasonPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeasonPrice"> | string
    seasonId?: StringWithAggregatesFilter<"SeasonPrice"> | string
    categoryId?: StringWithAggregatesFilter<"SeasonPrice"> | string
    priceArs?: DecimalWithAggregatesFilter<"SeasonPrice"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalWithAggregatesFilter<"SeasonPrice"> | Decimal | DecimalJsLike | number | string
  }

  export type DiscountRuleWhereInput = {
    AND?: DiscountRuleWhereInput | DiscountRuleWhereInput[]
    OR?: DiscountRuleWhereInput[]
    NOT?: DiscountRuleWhereInput | DiscountRuleWhereInput[]
    id?: StringFilter<"DiscountRule"> | string
    minNights?: IntFilter<"DiscountRule"> | number
    discountPercent?: IntFilter<"DiscountRule"> | number
    isActive?: BoolFilter<"DiscountRule"> | boolean
  }

  export type DiscountRuleOrderByWithRelationInput = {
    id?: SortOrder
    minNights?: SortOrder
    discountPercent?: SortOrder
    isActive?: SortOrder
  }

  export type DiscountRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiscountRuleWhereInput | DiscountRuleWhereInput[]
    OR?: DiscountRuleWhereInput[]
    NOT?: DiscountRuleWhereInput | DiscountRuleWhereInput[]
    minNights?: IntFilter<"DiscountRule"> | number
    discountPercent?: IntFilter<"DiscountRule"> | number
    isActive?: BoolFilter<"DiscountRule"> | boolean
  }, "id">

  export type DiscountRuleOrderByWithAggregationInput = {
    id?: SortOrder
    minNights?: SortOrder
    discountPercent?: SortOrder
    isActive?: SortOrder
    _count?: DiscountRuleCountOrderByAggregateInput
    _avg?: DiscountRuleAvgOrderByAggregateInput
    _max?: DiscountRuleMaxOrderByAggregateInput
    _min?: DiscountRuleMinOrderByAggregateInput
    _sum?: DiscountRuleSumOrderByAggregateInput
  }

  export type DiscountRuleScalarWhereWithAggregatesInput = {
    AND?: DiscountRuleScalarWhereWithAggregatesInput | DiscountRuleScalarWhereWithAggregatesInput[]
    OR?: DiscountRuleScalarWhereWithAggregatesInput[]
    NOT?: DiscountRuleScalarWhereWithAggregatesInput | DiscountRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiscountRule"> | string
    minNights?: IntWithAggregatesFilter<"DiscountRule"> | number
    discountPercent?: IntWithAggregatesFilter<"DiscountRule"> | number
    isActive?: BoolWithAggregatesFilter<"DiscountRule"> | boolean
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: StringFilter<"Guest"> | string
    docType?: EnumDocTypeFilter<"Guest"> | $Enums.DocType
    docNumber?: StringFilter<"Guest"> | string
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringFilter<"Guest"> | string
    email?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    birthDate?: DateTimeNullableFilter<"Guest"> | Date | string | null
    isAnonymized?: BoolFilter<"Guest"> | boolean
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    reservations?: ReservationListRelationFilter
    anonymizationRequests?: AnonymizationRequestListRelationFilter
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    docType?: SortOrder
    docNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    isAnonymized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    anonymizationRequests?: AnonymizationRequestOrderByRelationAggregateInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    docType_docNumber?: GuestDocTypeDocNumberCompoundUniqueInput
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    docType?: EnumDocTypeFilter<"Guest"> | $Enums.DocType
    docNumber?: StringFilter<"Guest"> | string
    firstName?: StringFilter<"Guest"> | string
    lastName?: StringFilter<"Guest"> | string
    email?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    birthDate?: DateTimeNullableFilter<"Guest"> | Date | string | null
    isAnonymized?: BoolFilter<"Guest"> | boolean
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    reservations?: ReservationListRelationFilter
    anonymizationRequests?: AnonymizationRequestListRelationFilter
  }, "id" | "docType_docNumber">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    docType?: SortOrder
    docNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    isAnonymized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guest"> | string
    docType?: EnumDocTypeWithAggregatesFilter<"Guest"> | $Enums.DocType
    docNumber?: StringWithAggregatesFilter<"Guest"> | string
    firstName?: StringWithAggregatesFilter<"Guest"> | string
    lastName?: StringWithAggregatesFilter<"Guest"> | string
    email?: StringWithAggregatesFilter<"Guest"> | string
    phone?: StringWithAggregatesFilter<"Guest"> | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"Guest"> | Date | string | null
    isAnonymized?: BoolWithAggregatesFilter<"Guest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    code?: StringFilter<"Reservation"> | string
    categoryId?: StringFilter<"Reservation"> | string
    unitId?: StringNullableFilter<"Reservation"> | string | null
    guestId?: StringFilter<"Reservation"> | string
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    adults?: IntFilter<"Reservation"> | number
    children?: IntFilter<"Reservation"> | number
    currency?: EnumCurrencyFilter<"Reservation"> | $Enums.Currency
    subtotal?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    origin?: EnumReservationOriginFilter<"Reservation"> | $Enums.ReservationOrigin
    cancellationReason?: StringNullableFilter<"Reservation"> | string | null
    notes?: StringNullableFilter<"Reservation"> | string | null
    paymentMethodSentAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    companions?: CompanionListRelationFilter
    payments?: PaymentListRelationFilter
    occupancies?: UnitOccupancyListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    guestId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    currency?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    origin?: SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    paymentMethodSentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    guest?: GuestOrderByWithRelationInput
    companions?: CompanionOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    occupancies?: UnitOccupancyOrderByRelationAggregateInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    categoryId?: StringFilter<"Reservation"> | string
    unitId?: StringNullableFilter<"Reservation"> | string | null
    guestId?: StringFilter<"Reservation"> | string
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    adults?: IntFilter<"Reservation"> | number
    children?: IntFilter<"Reservation"> | number
    currency?: EnumCurrencyFilter<"Reservation"> | $Enums.Currency
    subtotal?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    origin?: EnumReservationOriginFilter<"Reservation"> | $Enums.ReservationOrigin
    cancellationReason?: StringNullableFilter<"Reservation"> | string | null
    notes?: StringNullableFilter<"Reservation"> | string | null
    paymentMethodSentAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
    companions?: CompanionListRelationFilter
    payments?: PaymentListRelationFilter
    occupancies?: UnitOccupancyListRelationFilter
  }, "id" | "code">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    guestId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    currency?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    origin?: SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    paymentMethodSentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    code?: StringWithAggregatesFilter<"Reservation"> | string
    categoryId?: StringWithAggregatesFilter<"Reservation"> | string
    unitId?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    guestId?: StringWithAggregatesFilter<"Reservation"> | string
    checkIn?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    adults?: IntWithAggregatesFilter<"Reservation"> | number
    children?: IntWithAggregatesFilter<"Reservation"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"Reservation"> | $Enums.Currency
    subtotal?: DecimalWithAggregatesFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalWithAggregatesFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    origin?: EnumReservationOriginWithAggregatesFilter<"Reservation"> | $Enums.ReservationOrigin
    cancellationReason?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    paymentMethodSentAt?: DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type CompanionWhereInput = {
    AND?: CompanionWhereInput | CompanionWhereInput[]
    OR?: CompanionWhereInput[]
    NOT?: CompanionWhereInput | CompanionWhereInput[]
    id?: StringFilter<"Companion"> | string
    reservationId?: StringFilter<"Companion"> | string
    firstName?: StringFilter<"Companion"> | string
    lastName?: StringFilter<"Companion"> | string
    docType?: EnumDocTypeNullableFilter<"Companion"> | $Enums.DocType | null
    docNumber?: StringNullableFilter<"Companion"> | string | null
    birthDate?: DateTimeNullableFilter<"Companion"> | Date | string | null
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type CompanionOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    docType?: SortOrderInput | SortOrder
    docNumber?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    reservation?: ReservationOrderByWithRelationInput
  }

  export type CompanionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanionWhereInput | CompanionWhereInput[]
    OR?: CompanionWhereInput[]
    NOT?: CompanionWhereInput | CompanionWhereInput[]
    reservationId?: StringFilter<"Companion"> | string
    firstName?: StringFilter<"Companion"> | string
    lastName?: StringFilter<"Companion"> | string
    docType?: EnumDocTypeNullableFilter<"Companion"> | $Enums.DocType | null
    docNumber?: StringNullableFilter<"Companion"> | string | null
    birthDate?: DateTimeNullableFilter<"Companion"> | Date | string | null
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "id">

  export type CompanionOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    docType?: SortOrderInput | SortOrder
    docNumber?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    _count?: CompanionCountOrderByAggregateInput
    _max?: CompanionMaxOrderByAggregateInput
    _min?: CompanionMinOrderByAggregateInput
  }

  export type CompanionScalarWhereWithAggregatesInput = {
    AND?: CompanionScalarWhereWithAggregatesInput | CompanionScalarWhereWithAggregatesInput[]
    OR?: CompanionScalarWhereWithAggregatesInput[]
    NOT?: CompanionScalarWhereWithAggregatesInput | CompanionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Companion"> | string
    reservationId?: StringWithAggregatesFilter<"Companion"> | string
    firstName?: StringWithAggregatesFilter<"Companion"> | string
    lastName?: StringWithAggregatesFilter<"Companion"> | string
    docType?: EnumDocTypeNullableWithAggregatesFilter<"Companion"> | $Enums.DocType | null
    docNumber?: StringNullableWithAggregatesFilter<"Companion"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Companion"> | Date | string | null
  }

  export type UnitOccupancyWhereInput = {
    AND?: UnitOccupancyWhereInput | UnitOccupancyWhereInput[]
    OR?: UnitOccupancyWhereInput[]
    NOT?: UnitOccupancyWhereInput | UnitOccupancyWhereInput[]
    id?: StringFilter<"UnitOccupancy"> | string
    unitId?: StringFilter<"UnitOccupancy"> | string
    reservationId?: StringNullableFilter<"UnitOccupancy"> | string | null
    type?: EnumOccupancyTypeFilter<"UnitOccupancy"> | $Enums.OccupancyType
    checkIn?: DateTimeFilter<"UnitOccupancy"> | Date | string
    checkOut?: DateTimeFilter<"UnitOccupancy"> | Date | string
    lockToken?: StringNullableFilter<"UnitOccupancy"> | string | null
    expiresAt?: DateTimeNullableFilter<"UnitOccupancy"> | Date | string | null
    status?: EnumOccupancyStatusFilter<"UnitOccupancy"> | $Enums.OccupancyStatus
    notes?: StringNullableFilter<"UnitOccupancy"> | string | null
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    reservation?: XOR<ReservationNullableScalarRelationFilter, ReservationWhereInput> | null
  }

  export type UnitOccupancyOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    reservationId?: SortOrderInput | SortOrder
    type?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    lockToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    unit?: UnitOrderByWithRelationInput
    reservation?: ReservationOrderByWithRelationInput
  }

  export type UnitOccupancyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitOccupancyWhereInput | UnitOccupancyWhereInput[]
    OR?: UnitOccupancyWhereInput[]
    NOT?: UnitOccupancyWhereInput | UnitOccupancyWhereInput[]
    unitId?: StringFilter<"UnitOccupancy"> | string
    reservationId?: StringNullableFilter<"UnitOccupancy"> | string | null
    type?: EnumOccupancyTypeFilter<"UnitOccupancy"> | $Enums.OccupancyType
    checkIn?: DateTimeFilter<"UnitOccupancy"> | Date | string
    checkOut?: DateTimeFilter<"UnitOccupancy"> | Date | string
    lockToken?: StringNullableFilter<"UnitOccupancy"> | string | null
    expiresAt?: DateTimeNullableFilter<"UnitOccupancy"> | Date | string | null
    status?: EnumOccupancyStatusFilter<"UnitOccupancy"> | $Enums.OccupancyStatus
    notes?: StringNullableFilter<"UnitOccupancy"> | string | null
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    reservation?: XOR<ReservationNullableScalarRelationFilter, ReservationWhereInput> | null
  }, "id">

  export type UnitOccupancyOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    reservationId?: SortOrderInput | SortOrder
    type?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    lockToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: UnitOccupancyCountOrderByAggregateInput
    _max?: UnitOccupancyMaxOrderByAggregateInput
    _min?: UnitOccupancyMinOrderByAggregateInput
  }

  export type UnitOccupancyScalarWhereWithAggregatesInput = {
    AND?: UnitOccupancyScalarWhereWithAggregatesInput | UnitOccupancyScalarWhereWithAggregatesInput[]
    OR?: UnitOccupancyScalarWhereWithAggregatesInput[]
    NOT?: UnitOccupancyScalarWhereWithAggregatesInput | UnitOccupancyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnitOccupancy"> | string
    unitId?: StringWithAggregatesFilter<"UnitOccupancy"> | string
    reservationId?: StringNullableWithAggregatesFilter<"UnitOccupancy"> | string | null
    type?: EnumOccupancyTypeWithAggregatesFilter<"UnitOccupancy"> | $Enums.OccupancyType
    checkIn?: DateTimeWithAggregatesFilter<"UnitOccupancy"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"UnitOccupancy"> | Date | string
    lockToken?: StringNullableWithAggregatesFilter<"UnitOccupancy"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"UnitOccupancy"> | Date | string | null
    status?: EnumOccupancyStatusWithAggregatesFilter<"UnitOccupancy"> | $Enums.OccupancyStatus
    notes?: StringNullableWithAggregatesFilter<"UnitOccupancy"> | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    reservationId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    notes?: StringNullableFilter<"Payment"> | string | null
    receiptPath?: StringNullableFilter<"Payment"> | string | null
    receiptFilename?: StringNullableFilter<"Payment"> | string | null
    receiptMime?: StringNullableFilter<"Payment"> | string | null
    receiptSize?: IntNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrderInput | SortOrder
    receiptPath?: SortOrderInput | SortOrder
    receiptFilename?: SortOrderInput | SortOrder
    receiptMime?: SortOrderInput | SortOrder
    receiptSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    reservationId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    notes?: StringNullableFilter<"Payment"> | string | null
    receiptPath?: StringNullableFilter<"Payment"> | string | null
    receiptFilename?: StringNullableFilter<"Payment"> | string | null
    receiptMime?: StringNullableFilter<"Payment"> | string | null
    receiptSize?: IntNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrderInput | SortOrder
    receiptPath?: SortOrderInput | SortOrder
    receiptFilename?: SortOrderInput | SortOrder
    receiptMime?: SortOrderInput | SortOrder
    receiptSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    reservationId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyWithAggregatesFilter<"Payment"> | $Enums.Currency
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    receiptPath?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    receiptFilename?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    receiptMime?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    receiptSize?: IntNullableWithAggregatesFilter<"Payment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type AnonymizationRequestWhereInput = {
    AND?: AnonymizationRequestWhereInput | AnonymizationRequestWhereInput[]
    OR?: AnonymizationRequestWhereInput[]
    NOT?: AnonymizationRequestWhereInput | AnonymizationRequestWhereInput[]
    id?: StringFilter<"AnonymizationRequest"> | string
    guestId?: StringFilter<"AnonymizationRequest"> | string
    requestedAt?: DateTimeFilter<"AnonymizationRequest"> | Date | string
    deadlineAt?: DateTimeFilter<"AnonymizationRequest"> | Date | string
    completedAt?: DateTimeNullableFilter<"AnonymizationRequest"> | Date | string | null
    status?: EnumAnonymizationStatusFilter<"AnonymizationRequest"> | $Enums.AnonymizationStatus
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }

  export type AnonymizationRequestOrderByWithRelationInput = {
    id?: SortOrder
    guestId?: SortOrder
    requestedAt?: SortOrder
    deadlineAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    guest?: GuestOrderByWithRelationInput
  }

  export type AnonymizationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnonymizationRequestWhereInput | AnonymizationRequestWhereInput[]
    OR?: AnonymizationRequestWhereInput[]
    NOT?: AnonymizationRequestWhereInput | AnonymizationRequestWhereInput[]
    guestId?: StringFilter<"AnonymizationRequest"> | string
    requestedAt?: DateTimeFilter<"AnonymizationRequest"> | Date | string
    deadlineAt?: DateTimeFilter<"AnonymizationRequest"> | Date | string
    completedAt?: DateTimeNullableFilter<"AnonymizationRequest"> | Date | string | null
    status?: EnumAnonymizationStatusFilter<"AnonymizationRequest"> | $Enums.AnonymizationStatus
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }, "id">

  export type AnonymizationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    guestId?: SortOrder
    requestedAt?: SortOrder
    deadlineAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: AnonymizationRequestCountOrderByAggregateInput
    _max?: AnonymizationRequestMaxOrderByAggregateInput
    _min?: AnonymizationRequestMinOrderByAggregateInput
  }

  export type AnonymizationRequestScalarWhereWithAggregatesInput = {
    AND?: AnonymizationRequestScalarWhereWithAggregatesInput | AnonymizationRequestScalarWhereWithAggregatesInput[]
    OR?: AnonymizationRequestScalarWhereWithAggregatesInput[]
    NOT?: AnonymizationRequestScalarWhereWithAggregatesInput | AnonymizationRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnonymizationRequest"> | string
    guestId?: StringWithAggregatesFilter<"AnonymizationRequest"> | string
    requestedAt?: DateTimeWithAggregatesFilter<"AnonymizationRequest"> | Date | string
    deadlineAt?: DateTimeWithAggregatesFilter<"AnonymizationRequest"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"AnonymizationRequest"> | Date | string | null
    status?: EnumAnonymizationStatusWithAggregatesFilter<"AnonymizationRequest"> | $Enums.AnonymizationStatus
  }

  export type SystemSettingWhereInput = {
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    key?: StringFilter<"SystemSetting"> | string
    value?: StringFilter<"SystemSetting"> | string
    description?: StringNullableFilter<"SystemSetting"> | string | null
  }

  export type SystemSettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type SystemSettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    value?: StringFilter<"SystemSetting"> | string
    description?: StringNullableFilter<"SystemSetting"> | string | null
  }, "key">

  export type SystemSettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: SystemSettingCountOrderByAggregateInput
    _max?: SystemSettingMaxOrderByAggregateInput
    _min?: SystemSettingMinOrderByAggregateInput
  }

  export type SystemSettingScalarWhereWithAggregatesInput = {
    AND?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    OR?: SystemSettingScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"SystemSetting"> | string
    value?: StringWithAggregatesFilter<"SystemSetting"> | string
    description?: StringNullableWithAggregatesFilter<"SystemSetting"> | string | null
  }

  export type AdminUserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    capacityAdults: number
    capacityChildren?: number
    maxOccupancy: number
    basePriceArs: Decimal | DecimalJsLike | number | string
    basePriceUsd: Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    displayOrder?: number
    units?: UnitCreateNestedManyWithoutCategoryInput
    seasonPrices?: SeasonPriceCreateNestedManyWithoutCategoryInput
    reservations?: ReservationCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    capacityAdults: number
    capacityChildren?: number
    maxOccupancy: number
    basePriceArs: Decimal | DecimalJsLike | number | string
    basePriceUsd: Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    displayOrder?: number
    units?: UnitUncheckedCreateNestedManyWithoutCategoryInput
    seasonPrices?: SeasonPriceUncheckedCreateNestedManyWithoutCategoryInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacityAdults?: IntFieldUpdateOperationsInput | number
    capacityChildren?: IntFieldUpdateOperationsInput | number
    maxOccupancy?: IntFieldUpdateOperationsInput | number
    basePriceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    units?: UnitUpdateManyWithoutCategoryNestedInput
    seasonPrices?: SeasonPriceUpdateManyWithoutCategoryNestedInput
    reservations?: ReservationUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacityAdults?: IntFieldUpdateOperationsInput | number
    capacityChildren?: IntFieldUpdateOperationsInput | number
    maxOccupancy?: IntFieldUpdateOperationsInput | number
    basePriceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    units?: UnitUncheckedUpdateManyWithoutCategoryNestedInput
    seasonPrices?: SeasonPriceUncheckedUpdateManyWithoutCategoryNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    capacityAdults: number
    capacityChildren?: number
    maxOccupancy: number
    basePriceArs: Decimal | DecimalJsLike | number | string
    basePriceUsd: Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    displayOrder?: number
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacityAdults?: IntFieldUpdateOperationsInput | number
    capacityChildren?: IntFieldUpdateOperationsInput | number
    maxOccupancy?: IntFieldUpdateOperationsInput | number
    basePriceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacityAdults?: IntFieldUpdateOperationsInput | number
    capacityChildren?: IntFieldUpdateOperationsInput | number
    maxOccupancy?: IntFieldUpdateOperationsInput | number
    basePriceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
  }

  export type UnitCreateInput = {
    id?: string
    name: string
    icalFeedUrl?: string | null
    icalExportToken: string
    isActive?: boolean
    notes?: string | null
    category: CategoryCreateNestedOneWithoutUnitsInput
    occupancies?: UnitOccupancyCreateNestedManyWithoutUnitInput
    reservations?: ReservationCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    categoryId: string
    name: string
    icalFeedUrl?: string | null
    icalExportToken: string
    isActive?: boolean
    notes?: string | null
    occupancies?: UnitOccupancyUncheckedCreateNestedManyWithoutUnitInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutUnitsNestedInput
    occupancies?: UnitOccupancyUpdateManyWithoutUnitNestedInput
    reservations?: ReservationUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    occupancies?: UnitOccupancyUncheckedUpdateManyWithoutUnitNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    categoryId: string
    name: string
    icalFeedUrl?: string | null
    icalExportToken: string
    isActive?: boolean
    notes?: string | null
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeasonCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    minStayNights?: number
    isActive?: boolean
    seasonPrices?: SeasonPriceCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUncheckedCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    minStayNights?: number
    isActive?: boolean
    seasonPrices?: SeasonPriceUncheckedCreateNestedManyWithoutSeasonInput
  }

  export type SeasonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    minStayNights?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    seasonPrices?: SeasonPriceUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    minStayNights?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    seasonPrices?: SeasonPriceUncheckedUpdateManyWithoutSeasonNestedInput
  }

  export type SeasonCreateManyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    minStayNights?: number
    isActive?: boolean
  }

  export type SeasonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    minStayNights?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeasonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    minStayNights?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeasonPriceCreateInput = {
    id?: string
    priceArs: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
    season: SeasonCreateNestedOneWithoutSeasonPricesInput
    category: CategoryCreateNestedOneWithoutSeasonPricesInput
  }

  export type SeasonPriceUncheckedCreateInput = {
    id?: string
    seasonId: string
    categoryId: string
    priceArs: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
  }

  export type SeasonPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    season?: SeasonUpdateOneRequiredWithoutSeasonPricesNestedInput
    category?: CategoryUpdateOneRequiredWithoutSeasonPricesNestedInput
  }

  export type SeasonPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    priceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SeasonPriceCreateManyInput = {
    id?: string
    seasonId: string
    categoryId: string
    priceArs: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
  }

  export type SeasonPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SeasonPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    priceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DiscountRuleCreateInput = {
    id?: string
    minNights: number
    discountPercent: number
    isActive?: boolean
  }

  export type DiscountRuleUncheckedCreateInput = {
    id?: string
    minNights: number
    discountPercent: number
    isActive?: boolean
  }

  export type DiscountRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minNights?: IntFieldUpdateOperationsInput | number
    discountPercent?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscountRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    minNights?: IntFieldUpdateOperationsInput | number
    discountPercent?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscountRuleCreateManyInput = {
    id?: string
    minNights: number
    discountPercent: number
    isActive?: boolean
  }

  export type DiscountRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    minNights?: IntFieldUpdateOperationsInput | number
    discountPercent?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DiscountRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    minNights?: IntFieldUpdateOperationsInput | number
    discountPercent?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GuestCreateInput = {
    id?: string
    docType: $Enums.DocType
    docNumber: string
    firstName: string
    lastName: string
    email: string
    phone: string
    birthDate?: Date | string | null
    isAnonymized?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutGuestInput
    anonymizationRequests?: AnonymizationRequestCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateInput = {
    id?: string
    docType: $Enums.DocType
    docNumber: string
    firstName: string
    lastName: string
    email: string
    phone: string
    birthDate?: Date | string | null
    isAnonymized?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutGuestInput
    anonymizationRequests?: AnonymizationRequestUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    docNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutGuestNestedInput
    anonymizationRequests?: AnonymizationRequestUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    docNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutGuestNestedInput
    anonymizationRequests?: AnonymizationRequestUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateManyInput = {
    id?: string
    docType: $Enums.DocType
    docNumber: string
    firstName: string
    lastName: string
    email: string
    phone: string
    birthDate?: Date | string | null
    isAnonymized?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    docNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    docNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    id?: string
    code: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutReservationsInput
    unit?: UnitCreateNestedOneWithoutReservationsInput
    guest: GuestCreateNestedOneWithoutReservationsInput
    companions?: CompanionCreateNestedManyWithoutReservationInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    code: string
    categoryId: string
    unitId?: string | null
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companions?: CompanionUncheckedCreateNestedManyWithoutReservationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutReservationsNestedInput
    unit?: UnitUpdateOneWithoutReservationsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    companions?: CompanionUpdateManyWithoutReservationNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companions?: CompanionUncheckedUpdateManyWithoutReservationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: string
    code: string
    categoryId: string
    unitId?: string | null
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionCreateInput = {
    id?: string
    firstName: string
    lastName: string
    docType?: $Enums.DocType | null
    docNumber?: string | null
    birthDate?: Date | string | null
    reservation: ReservationCreateNestedOneWithoutCompanionsInput
  }

  export type CompanionUncheckedCreateInput = {
    id?: string
    reservationId: string
    firstName: string
    lastName: string
    docType?: $Enums.DocType | null
    docNumber?: string | null
    birthDate?: Date | string | null
  }

  export type CompanionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    docType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    docNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservation?: ReservationUpdateOneRequiredWithoutCompanionsNestedInput
  }

  export type CompanionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    docType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    docNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanionCreateManyInput = {
    id?: string
    reservationId: string
    firstName: string
    lastName: string
    docType?: $Enums.DocType | null
    docNumber?: string | null
    birthDate?: Date | string | null
  }

  export type CompanionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    docType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    docNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    docType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    docNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UnitOccupancyCreateInput = {
    id?: string
    type: $Enums.OccupancyType
    checkIn: Date | string
    checkOut: Date | string
    lockToken?: string | null
    expiresAt?: Date | string | null
    status?: $Enums.OccupancyStatus
    notes?: string | null
    unit: UnitCreateNestedOneWithoutOccupanciesInput
    reservation?: ReservationCreateNestedOneWithoutOccupanciesInput
  }

  export type UnitOccupancyUncheckedCreateInput = {
    id?: string
    unitId: string
    reservationId?: string | null
    type: $Enums.OccupancyType
    checkIn: Date | string
    checkOut: Date | string
    lockToken?: string | null
    expiresAt?: Date | string | null
    status?: $Enums.OccupancyStatus
    notes?: string | null
  }

  export type UnitOccupancyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOccupancyTypeFieldUpdateOperationsInput | $Enums.OccupancyType
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    lockToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOccupancyStatusFieldUpdateOperationsInput | $Enums.OccupancyStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: UnitUpdateOneRequiredWithoutOccupanciesNestedInput
    reservation?: ReservationUpdateOneWithoutOccupanciesNestedInput
  }

  export type UnitOccupancyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOccupancyTypeFieldUpdateOperationsInput | $Enums.OccupancyType
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    lockToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOccupancyStatusFieldUpdateOperationsInput | $Enums.OccupancyStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitOccupancyCreateManyInput = {
    id?: string
    unitId: string
    reservationId?: string | null
    type: $Enums.OccupancyType
    checkIn: Date | string
    checkOut: Date | string
    lockToken?: string | null
    expiresAt?: Date | string | null
    status?: $Enums.OccupancyStatus
    notes?: string | null
  }

  export type UnitOccupancyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOccupancyTypeFieldUpdateOperationsInput | $Enums.OccupancyType
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    lockToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOccupancyStatusFieldUpdateOperationsInput | $Enums.OccupancyStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitOccupancyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOccupancyTypeFieldUpdateOperationsInput | $Enums.OccupancyType
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    lockToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOccupancyStatusFieldUpdateOperationsInput | $Enums.OccupancyStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    paymentMethod: $Enums.PaymentMethod
    notes?: string | null
    receiptPath?: string | null
    receiptFilename?: string | null
    receiptMime?: string | null
    receiptSize?: number | null
    createdAt?: Date | string
    reservation: ReservationCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    reservationId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    paymentMethod: $Enums.PaymentMethod
    notes?: string | null
    receiptPath?: string | null
    receiptFilename?: string | null
    receiptMime?: string | null
    receiptSize?: number | null
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPath?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilename?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMime?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPath?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilename?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMime?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    reservationId: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    paymentMethod: $Enums.PaymentMethod
    notes?: string | null
    receiptPath?: string | null
    receiptFilename?: string | null
    receiptMime?: string | null
    receiptSize?: number | null
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPath?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilename?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMime?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPath?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilename?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMime?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnonymizationRequestCreateInput = {
    id?: string
    requestedAt?: Date | string
    deadlineAt: Date | string
    completedAt?: Date | string | null
    status?: $Enums.AnonymizationStatus
    guest: GuestCreateNestedOneWithoutAnonymizationRequestsInput
  }

  export type AnonymizationRequestUncheckedCreateInput = {
    id?: string
    guestId: string
    requestedAt?: Date | string
    deadlineAt: Date | string
    completedAt?: Date | string | null
    status?: $Enums.AnonymizationStatus
  }

  export type AnonymizationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAnonymizationStatusFieldUpdateOperationsInput | $Enums.AnonymizationStatus
    guest?: GuestUpdateOneRequiredWithoutAnonymizationRequestsNestedInput
  }

  export type AnonymizationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAnonymizationStatusFieldUpdateOperationsInput | $Enums.AnonymizationStatus
  }

  export type AnonymizationRequestCreateManyInput = {
    id?: string
    guestId: string
    requestedAt?: Date | string
    deadlineAt: Date | string
    completedAt?: Date | string | null
    status?: $Enums.AnonymizationStatus
  }

  export type AnonymizationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAnonymizationStatusFieldUpdateOperationsInput | $Enums.AnonymizationStatus
  }

  export type AnonymizationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAnonymizationStatusFieldUpdateOperationsInput | $Enums.AnonymizationStatus
  }

  export type SystemSettingCreateInput = {
    key: string
    value: string
    description?: string | null
  }

  export type SystemSettingUncheckedCreateInput = {
    key: string
    value: string
    description?: string | null
  }

  export type SystemSettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemSettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemSettingCreateManyInput = {
    key: string
    value: string
    description?: string | null
  }

  export type SystemSettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemSettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type SeasonPriceListRelationFilter = {
    every?: SeasonPriceWhereInput
    some?: SeasonPriceWhereInput
    none?: SeasonPriceWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonPriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacityAdults?: SortOrder
    capacityChildren?: SortOrder
    maxOccupancy?: SortOrder
    basePriceArs?: SortOrder
    basePriceUsd?: SortOrder
    images?: SortOrder
    isActive?: SortOrder
    displayOrder?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    capacityAdults?: SortOrder
    capacityChildren?: SortOrder
    maxOccupancy?: SortOrder
    basePriceArs?: SortOrder
    basePriceUsd?: SortOrder
    displayOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacityAdults?: SortOrder
    capacityChildren?: SortOrder
    maxOccupancy?: SortOrder
    basePriceArs?: SortOrder
    basePriceUsd?: SortOrder
    isActive?: SortOrder
    displayOrder?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacityAdults?: SortOrder
    capacityChildren?: SortOrder
    maxOccupancy?: SortOrder
    basePriceArs?: SortOrder
    basePriceUsd?: SortOrder
    isActive?: SortOrder
    displayOrder?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    capacityAdults?: SortOrder
    capacityChildren?: SortOrder
    maxOccupancy?: SortOrder
    basePriceArs?: SortOrder
    basePriceUsd?: SortOrder
    displayOrder?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UnitOccupancyListRelationFilter = {
    every?: UnitOccupancyWhereInput
    some?: UnitOccupancyWhereInput
    none?: UnitOccupancyWhereInput
  }

  export type UnitOccupancyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    icalFeedUrl?: SortOrder
    icalExportToken?: SortOrder
    isActive?: SortOrder
    notes?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    icalFeedUrl?: SortOrder
    icalExportToken?: SortOrder
    isActive?: SortOrder
    notes?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    icalFeedUrl?: SortOrder
    icalExportToken?: SortOrder
    isActive?: SortOrder
    notes?: SortOrder
  }

  export type SeasonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    minStayNights?: SortOrder
    isActive?: SortOrder
  }

  export type SeasonAvgOrderByAggregateInput = {
    minStayNights?: SortOrder
  }

  export type SeasonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    minStayNights?: SortOrder
    isActive?: SortOrder
  }

  export type SeasonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    minStayNights?: SortOrder
    isActive?: SortOrder
  }

  export type SeasonSumOrderByAggregateInput = {
    minStayNights?: SortOrder
  }

  export type SeasonScalarRelationFilter = {
    is?: SeasonWhereInput
    isNot?: SeasonWhereInput
  }

  export type SeasonPriceSeasonIdCategoryIdCompoundUniqueInput = {
    seasonId: string
    categoryId: string
  }

  export type SeasonPriceCountOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    categoryId?: SortOrder
    priceArs?: SortOrder
    priceUsd?: SortOrder
  }

  export type SeasonPriceAvgOrderByAggregateInput = {
    priceArs?: SortOrder
    priceUsd?: SortOrder
  }

  export type SeasonPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    categoryId?: SortOrder
    priceArs?: SortOrder
    priceUsd?: SortOrder
  }

  export type SeasonPriceMinOrderByAggregateInput = {
    id?: SortOrder
    seasonId?: SortOrder
    categoryId?: SortOrder
    priceArs?: SortOrder
    priceUsd?: SortOrder
  }

  export type SeasonPriceSumOrderByAggregateInput = {
    priceArs?: SortOrder
    priceUsd?: SortOrder
  }

  export type DiscountRuleCountOrderByAggregateInput = {
    id?: SortOrder
    minNights?: SortOrder
    discountPercent?: SortOrder
    isActive?: SortOrder
  }

  export type DiscountRuleAvgOrderByAggregateInput = {
    minNights?: SortOrder
    discountPercent?: SortOrder
  }

  export type DiscountRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    minNights?: SortOrder
    discountPercent?: SortOrder
    isActive?: SortOrder
  }

  export type DiscountRuleMinOrderByAggregateInput = {
    id?: SortOrder
    minNights?: SortOrder
    discountPercent?: SortOrder
    isActive?: SortOrder
  }

  export type DiscountRuleSumOrderByAggregateInput = {
    minNights?: SortOrder
    discountPercent?: SortOrder
  }

  export type EnumDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeFilter<$PrismaModel> | $Enums.DocType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AnonymizationRequestListRelationFilter = {
    every?: AnonymizationRequestWhereInput
    some?: AnonymizationRequestWhereInput
    none?: AnonymizationRequestWhereInput
  }

  export type AnonymizationRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestDocTypeDocNumberCompoundUniqueInput = {
    docType: $Enums.DocType
    docNumber: string
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    docType?: SortOrder
    docNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    isAnonymized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    docType?: SortOrder
    docNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    isAnonymized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    docType?: SortOrder
    docNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    birthDate?: SortOrder
    isAnonymized?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocTypeFilter<$PrismaModel>
    _max?: NestedEnumDocTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type EnumReservationOriginFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationOrigin | EnumReservationOriginFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationOrigin[] | ListEnumReservationOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationOrigin[] | ListEnumReservationOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationOriginFilter<$PrismaModel> | $Enums.ReservationOrigin
  }

  export type UnitNullableScalarRelationFilter = {
    is?: UnitWhereInput | null
    isNot?: UnitWhereInput | null
  }

  export type GuestScalarRelationFilter = {
    is?: GuestWhereInput
    isNot?: GuestWhereInput
  }

  export type CompanionListRelationFilter = {
    every?: CompanionWhereInput
    some?: CompanionWhereInput
    none?: CompanionWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type CompanionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrder
    guestId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    currency?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    origin?: SortOrder
    cancellationReason?: SortOrder
    notes?: SortOrder
    paymentMethodSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    adults?: SortOrder
    children?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    totalPrice?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrder
    guestId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    currency?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    origin?: SortOrder
    cancellationReason?: SortOrder
    notes?: SortOrder
    paymentMethodSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    categoryId?: SortOrder
    unitId?: SortOrder
    guestId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    adults?: SortOrder
    children?: SortOrder
    currency?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    origin?: SortOrder
    cancellationReason?: SortOrder
    notes?: SortOrder
    paymentMethodSentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    adults?: SortOrder
    children?: SortOrder
    subtotal?: SortOrder
    discountAmount?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type EnumReservationOriginWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationOrigin | EnumReservationOriginFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationOrigin[] | ListEnumReservationOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationOrigin[] | ListEnumReservationOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationOriginWithAggregatesFilter<$PrismaModel> | $Enums.ReservationOrigin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationOriginFilter<$PrismaModel>
    _max?: NestedEnumReservationOriginFilter<$PrismaModel>
  }

  export type EnumDocTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocTypeNullableFilter<$PrismaModel> | $Enums.DocType | null
  }

  export type ReservationScalarRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type CompanionCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    docType?: SortOrder
    docNumber?: SortOrder
    birthDate?: SortOrder
  }

  export type CompanionMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    docType?: SortOrder
    docNumber?: SortOrder
    birthDate?: SortOrder
  }

  export type CompanionMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    docType?: SortOrder
    docNumber?: SortOrder
    birthDate?: SortOrder
  }

  export type EnumDocTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DocType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDocTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDocTypeNullableFilter<$PrismaModel>
  }

  export type EnumOccupancyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupancyType | EnumOccupancyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OccupancyType[] | ListEnumOccupancyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccupancyType[] | ListEnumOccupancyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupancyTypeFilter<$PrismaModel> | $Enums.OccupancyType
  }

  export type EnumOccupancyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupancyStatus | EnumOccupancyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OccupancyStatus[] | ListEnumOccupancyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccupancyStatus[] | ListEnumOccupancyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupancyStatusFilter<$PrismaModel> | $Enums.OccupancyStatus
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type ReservationNullableScalarRelationFilter = {
    is?: ReservationWhereInput | null
    isNot?: ReservationWhereInput | null
  }

  export type UnitOccupancyCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    reservationId?: SortOrder
    type?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    lockToken?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type UnitOccupancyMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    reservationId?: SortOrder
    type?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    lockToken?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type UnitOccupancyMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    reservationId?: SortOrder
    type?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    lockToken?: SortOrder
    expiresAt?: SortOrder
    status?: SortOrder
    notes?: SortOrder
  }

  export type EnumOccupancyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupancyType | EnumOccupancyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OccupancyType[] | ListEnumOccupancyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccupancyType[] | ListEnumOccupancyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupancyTypeWithAggregatesFilter<$PrismaModel> | $Enums.OccupancyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOccupancyTypeFilter<$PrismaModel>
    _max?: NestedEnumOccupancyTypeFilter<$PrismaModel>
  }

  export type EnumOccupancyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupancyStatus | EnumOccupancyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OccupancyStatus[] | ListEnumOccupancyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccupancyStatus[] | ListEnumOccupancyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupancyStatusWithAggregatesFilter<$PrismaModel> | $Enums.OccupancyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOccupancyStatusFilter<$PrismaModel>
    _max?: NestedEnumOccupancyStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    receiptPath?: SortOrder
    receiptFilename?: SortOrder
    receiptMime?: SortOrder
    receiptSize?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    receiptSize?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    receiptPath?: SortOrder
    receiptFilename?: SortOrder
    receiptMime?: SortOrder
    receiptSize?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    receiptPath?: SortOrder
    receiptFilename?: SortOrder
    receiptMime?: SortOrder
    receiptSize?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    receiptSize?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumAnonymizationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnonymizationStatus | EnumAnonymizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnonymizationStatus[] | ListEnumAnonymizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnonymizationStatus[] | ListEnumAnonymizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnonymizationStatusFilter<$PrismaModel> | $Enums.AnonymizationStatus
  }

  export type AnonymizationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    requestedAt?: SortOrder
    deadlineAt?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
  }

  export type AnonymizationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    requestedAt?: SortOrder
    deadlineAt?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
  }

  export type AnonymizationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    requestedAt?: SortOrder
    deadlineAt?: SortOrder
    completedAt?: SortOrder
    status?: SortOrder
  }

  export type EnumAnonymizationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnonymizationStatus | EnumAnonymizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnonymizationStatus[] | ListEnumAnonymizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnonymizationStatus[] | ListEnumAnonymizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnonymizationStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnonymizationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnonymizationStatusFilter<$PrismaModel>
    _max?: NestedEnumAnonymizationStatusFilter<$PrismaModel>
  }

  export type SystemSettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type SystemSettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type SystemSettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UnitCreateNestedManyWithoutCategoryInput = {
    create?: XOR<UnitCreateWithoutCategoryInput, UnitUncheckedCreateWithoutCategoryInput> | UnitCreateWithoutCategoryInput[] | UnitUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutCategoryInput | UnitCreateOrConnectWithoutCategoryInput[]
    createMany?: UnitCreateManyCategoryInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type SeasonPriceCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SeasonPriceCreateWithoutCategoryInput, SeasonPriceUncheckedCreateWithoutCategoryInput> | SeasonPriceCreateWithoutCategoryInput[] | SeasonPriceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeasonPriceCreateOrConnectWithoutCategoryInput | SeasonPriceCreateOrConnectWithoutCategoryInput[]
    createMany?: SeasonPriceCreateManyCategoryInputEnvelope
    connect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput> | ReservationCreateWithoutCategoryInput[] | ReservationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCategoryInput | ReservationCreateOrConnectWithoutCategoryInput[]
    createMany?: ReservationCreateManyCategoryInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<UnitCreateWithoutCategoryInput, UnitUncheckedCreateWithoutCategoryInput> | UnitCreateWithoutCategoryInput[] | UnitUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutCategoryInput | UnitCreateOrConnectWithoutCategoryInput[]
    createMany?: UnitCreateManyCategoryInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type SeasonPriceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SeasonPriceCreateWithoutCategoryInput, SeasonPriceUncheckedCreateWithoutCategoryInput> | SeasonPriceCreateWithoutCategoryInput[] | SeasonPriceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeasonPriceCreateOrConnectWithoutCategoryInput | SeasonPriceCreateOrConnectWithoutCategoryInput[]
    createMany?: SeasonPriceCreateManyCategoryInputEnvelope
    connect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput> | ReservationCreateWithoutCategoryInput[] | ReservationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCategoryInput | ReservationCreateOrConnectWithoutCategoryInput[]
    createMany?: ReservationCreateManyCategoryInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UnitUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<UnitCreateWithoutCategoryInput, UnitUncheckedCreateWithoutCategoryInput> | UnitCreateWithoutCategoryInput[] | UnitUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutCategoryInput | UnitCreateOrConnectWithoutCategoryInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutCategoryInput | UnitUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: UnitCreateManyCategoryInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutCategoryInput | UnitUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutCategoryInput | UnitUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type SeasonPriceUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SeasonPriceCreateWithoutCategoryInput, SeasonPriceUncheckedCreateWithoutCategoryInput> | SeasonPriceCreateWithoutCategoryInput[] | SeasonPriceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeasonPriceCreateOrConnectWithoutCategoryInput | SeasonPriceCreateOrConnectWithoutCategoryInput[]
    upsert?: SeasonPriceUpsertWithWhereUniqueWithoutCategoryInput | SeasonPriceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SeasonPriceCreateManyCategoryInputEnvelope
    set?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    disconnect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    delete?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    connect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    update?: SeasonPriceUpdateWithWhereUniqueWithoutCategoryInput | SeasonPriceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SeasonPriceUpdateManyWithWhereWithoutCategoryInput | SeasonPriceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SeasonPriceScalarWhereInput | SeasonPriceScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput> | ReservationCreateWithoutCategoryInput[] | ReservationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCategoryInput | ReservationCreateOrConnectWithoutCategoryInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCategoryInput | ReservationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ReservationCreateManyCategoryInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCategoryInput | ReservationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCategoryInput | ReservationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<UnitCreateWithoutCategoryInput, UnitUncheckedCreateWithoutCategoryInput> | UnitCreateWithoutCategoryInput[] | UnitUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutCategoryInput | UnitCreateOrConnectWithoutCategoryInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutCategoryInput | UnitUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: UnitCreateManyCategoryInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutCategoryInput | UnitUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutCategoryInput | UnitUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type SeasonPriceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SeasonPriceCreateWithoutCategoryInput, SeasonPriceUncheckedCreateWithoutCategoryInput> | SeasonPriceCreateWithoutCategoryInput[] | SeasonPriceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeasonPriceCreateOrConnectWithoutCategoryInput | SeasonPriceCreateOrConnectWithoutCategoryInput[]
    upsert?: SeasonPriceUpsertWithWhereUniqueWithoutCategoryInput | SeasonPriceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SeasonPriceCreateManyCategoryInputEnvelope
    set?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    disconnect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    delete?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    connect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    update?: SeasonPriceUpdateWithWhereUniqueWithoutCategoryInput | SeasonPriceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SeasonPriceUpdateManyWithWhereWithoutCategoryInput | SeasonPriceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SeasonPriceScalarWhereInput | SeasonPriceScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput> | ReservationCreateWithoutCategoryInput[] | ReservationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCategoryInput | ReservationCreateOrConnectWithoutCategoryInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCategoryInput | ReservationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ReservationCreateManyCategoryInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCategoryInput | ReservationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCategoryInput | ReservationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutUnitsInput = {
    create?: XOR<CategoryCreateWithoutUnitsInput, CategoryUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUnitsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UnitOccupancyCreateNestedManyWithoutUnitInput = {
    create?: XOR<UnitOccupancyCreateWithoutUnitInput, UnitOccupancyUncheckedCreateWithoutUnitInput> | UnitOccupancyCreateWithoutUnitInput[] | UnitOccupancyUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitOccupancyCreateOrConnectWithoutUnitInput | UnitOccupancyCreateOrConnectWithoutUnitInput[]
    createMany?: UnitOccupancyCreateManyUnitInputEnvelope
    connect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutUnitInput = {
    create?: XOR<ReservationCreateWithoutUnitInput, ReservationUncheckedCreateWithoutUnitInput> | ReservationCreateWithoutUnitInput[] | ReservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUnitInput | ReservationCreateOrConnectWithoutUnitInput[]
    createMany?: ReservationCreateManyUnitInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type UnitOccupancyUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<UnitOccupancyCreateWithoutUnitInput, UnitOccupancyUncheckedCreateWithoutUnitInput> | UnitOccupancyCreateWithoutUnitInput[] | UnitOccupancyUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitOccupancyCreateOrConnectWithoutUnitInput | UnitOccupancyCreateOrConnectWithoutUnitInput[]
    createMany?: UnitOccupancyCreateManyUnitInputEnvelope
    connect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<ReservationCreateWithoutUnitInput, ReservationUncheckedCreateWithoutUnitInput> | ReservationCreateWithoutUnitInput[] | ReservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUnitInput | ReservationCreateOrConnectWithoutUnitInput[]
    createMany?: ReservationCreateManyUnitInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<CategoryCreateWithoutUnitsInput, CategoryUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutUnitsInput
    upsert?: CategoryUpsertWithoutUnitsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutUnitsInput, CategoryUpdateWithoutUnitsInput>, CategoryUncheckedUpdateWithoutUnitsInput>
  }

  export type UnitOccupancyUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UnitOccupancyCreateWithoutUnitInput, UnitOccupancyUncheckedCreateWithoutUnitInput> | UnitOccupancyCreateWithoutUnitInput[] | UnitOccupancyUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitOccupancyCreateOrConnectWithoutUnitInput | UnitOccupancyCreateOrConnectWithoutUnitInput[]
    upsert?: UnitOccupancyUpsertWithWhereUniqueWithoutUnitInput | UnitOccupancyUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UnitOccupancyCreateManyUnitInputEnvelope
    set?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    disconnect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    delete?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    connect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    update?: UnitOccupancyUpdateWithWhereUniqueWithoutUnitInput | UnitOccupancyUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UnitOccupancyUpdateManyWithWhereWithoutUnitInput | UnitOccupancyUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UnitOccupancyScalarWhereInput | UnitOccupancyScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ReservationCreateWithoutUnitInput, ReservationUncheckedCreateWithoutUnitInput> | ReservationCreateWithoutUnitInput[] | ReservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUnitInput | ReservationCreateOrConnectWithoutUnitInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUnitInput | ReservationUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ReservationCreateManyUnitInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUnitInput | ReservationUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUnitInput | ReservationUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type UnitOccupancyUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UnitOccupancyCreateWithoutUnitInput, UnitOccupancyUncheckedCreateWithoutUnitInput> | UnitOccupancyCreateWithoutUnitInput[] | UnitOccupancyUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitOccupancyCreateOrConnectWithoutUnitInput | UnitOccupancyCreateOrConnectWithoutUnitInput[]
    upsert?: UnitOccupancyUpsertWithWhereUniqueWithoutUnitInput | UnitOccupancyUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UnitOccupancyCreateManyUnitInputEnvelope
    set?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    disconnect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    delete?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    connect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    update?: UnitOccupancyUpdateWithWhereUniqueWithoutUnitInput | UnitOccupancyUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UnitOccupancyUpdateManyWithWhereWithoutUnitInput | UnitOccupancyUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UnitOccupancyScalarWhereInput | UnitOccupancyScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ReservationCreateWithoutUnitInput, ReservationUncheckedCreateWithoutUnitInput> | ReservationCreateWithoutUnitInput[] | ReservationUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUnitInput | ReservationCreateOrConnectWithoutUnitInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUnitInput | ReservationUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ReservationCreateManyUnitInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUnitInput | ReservationUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUnitInput | ReservationUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type SeasonPriceCreateNestedManyWithoutSeasonInput = {
    create?: XOR<SeasonPriceCreateWithoutSeasonInput, SeasonPriceUncheckedCreateWithoutSeasonInput> | SeasonPriceCreateWithoutSeasonInput[] | SeasonPriceUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: SeasonPriceCreateOrConnectWithoutSeasonInput | SeasonPriceCreateOrConnectWithoutSeasonInput[]
    createMany?: SeasonPriceCreateManySeasonInputEnvelope
    connect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
  }

  export type SeasonPriceUncheckedCreateNestedManyWithoutSeasonInput = {
    create?: XOR<SeasonPriceCreateWithoutSeasonInput, SeasonPriceUncheckedCreateWithoutSeasonInput> | SeasonPriceCreateWithoutSeasonInput[] | SeasonPriceUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: SeasonPriceCreateOrConnectWithoutSeasonInput | SeasonPriceCreateOrConnectWithoutSeasonInput[]
    createMany?: SeasonPriceCreateManySeasonInputEnvelope
    connect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
  }

  export type SeasonPriceUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<SeasonPriceCreateWithoutSeasonInput, SeasonPriceUncheckedCreateWithoutSeasonInput> | SeasonPriceCreateWithoutSeasonInput[] | SeasonPriceUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: SeasonPriceCreateOrConnectWithoutSeasonInput | SeasonPriceCreateOrConnectWithoutSeasonInput[]
    upsert?: SeasonPriceUpsertWithWhereUniqueWithoutSeasonInput | SeasonPriceUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: SeasonPriceCreateManySeasonInputEnvelope
    set?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    disconnect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    delete?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    connect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    update?: SeasonPriceUpdateWithWhereUniqueWithoutSeasonInput | SeasonPriceUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: SeasonPriceUpdateManyWithWhereWithoutSeasonInput | SeasonPriceUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: SeasonPriceScalarWhereInput | SeasonPriceScalarWhereInput[]
  }

  export type SeasonPriceUncheckedUpdateManyWithoutSeasonNestedInput = {
    create?: XOR<SeasonPriceCreateWithoutSeasonInput, SeasonPriceUncheckedCreateWithoutSeasonInput> | SeasonPriceCreateWithoutSeasonInput[] | SeasonPriceUncheckedCreateWithoutSeasonInput[]
    connectOrCreate?: SeasonPriceCreateOrConnectWithoutSeasonInput | SeasonPriceCreateOrConnectWithoutSeasonInput[]
    upsert?: SeasonPriceUpsertWithWhereUniqueWithoutSeasonInput | SeasonPriceUpsertWithWhereUniqueWithoutSeasonInput[]
    createMany?: SeasonPriceCreateManySeasonInputEnvelope
    set?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    disconnect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    delete?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    connect?: SeasonPriceWhereUniqueInput | SeasonPriceWhereUniqueInput[]
    update?: SeasonPriceUpdateWithWhereUniqueWithoutSeasonInput | SeasonPriceUpdateWithWhereUniqueWithoutSeasonInput[]
    updateMany?: SeasonPriceUpdateManyWithWhereWithoutSeasonInput | SeasonPriceUpdateManyWithWhereWithoutSeasonInput[]
    deleteMany?: SeasonPriceScalarWhereInput | SeasonPriceScalarWhereInput[]
  }

  export type SeasonCreateNestedOneWithoutSeasonPricesInput = {
    create?: XOR<SeasonCreateWithoutSeasonPricesInput, SeasonUncheckedCreateWithoutSeasonPricesInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutSeasonPricesInput
    connect?: SeasonWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutSeasonPricesInput = {
    create?: XOR<CategoryCreateWithoutSeasonPricesInput, CategoryUncheckedCreateWithoutSeasonPricesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSeasonPricesInput
    connect?: CategoryWhereUniqueInput
  }

  export type SeasonUpdateOneRequiredWithoutSeasonPricesNestedInput = {
    create?: XOR<SeasonCreateWithoutSeasonPricesInput, SeasonUncheckedCreateWithoutSeasonPricesInput>
    connectOrCreate?: SeasonCreateOrConnectWithoutSeasonPricesInput
    upsert?: SeasonUpsertWithoutSeasonPricesInput
    connect?: SeasonWhereUniqueInput
    update?: XOR<XOR<SeasonUpdateToOneWithWhereWithoutSeasonPricesInput, SeasonUpdateWithoutSeasonPricesInput>, SeasonUncheckedUpdateWithoutSeasonPricesInput>
  }

  export type CategoryUpdateOneRequiredWithoutSeasonPricesNestedInput = {
    create?: XOR<CategoryCreateWithoutSeasonPricesInput, CategoryUncheckedCreateWithoutSeasonPricesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSeasonPricesInput
    upsert?: CategoryUpsertWithoutSeasonPricesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSeasonPricesInput, CategoryUpdateWithoutSeasonPricesInput>, CategoryUncheckedUpdateWithoutSeasonPricesInput>
  }

  export type ReservationCreateNestedManyWithoutGuestInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type AnonymizationRequestCreateNestedManyWithoutGuestInput = {
    create?: XOR<AnonymizationRequestCreateWithoutGuestInput, AnonymizationRequestUncheckedCreateWithoutGuestInput> | AnonymizationRequestCreateWithoutGuestInput[] | AnonymizationRequestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: AnonymizationRequestCreateOrConnectWithoutGuestInput | AnonymizationRequestCreateOrConnectWithoutGuestInput[]
    createMany?: AnonymizationRequestCreateManyGuestInputEnvelope
    connect?: AnonymizationRequestWhereUniqueInput | AnonymizationRequestWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type AnonymizationRequestUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<AnonymizationRequestCreateWithoutGuestInput, AnonymizationRequestUncheckedCreateWithoutGuestInput> | AnonymizationRequestCreateWithoutGuestInput[] | AnonymizationRequestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: AnonymizationRequestCreateOrConnectWithoutGuestInput | AnonymizationRequestCreateOrConnectWithoutGuestInput[]
    createMany?: AnonymizationRequestCreateManyGuestInputEnvelope
    connect?: AnonymizationRequestWhereUniqueInput | AnonymizationRequestWhereUniqueInput[]
  }

  export type EnumDocTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReservationUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutGuestInput | ReservationUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutGuestInput | ReservationUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutGuestInput | ReservationUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type AnonymizationRequestUpdateManyWithoutGuestNestedInput = {
    create?: XOR<AnonymizationRequestCreateWithoutGuestInput, AnonymizationRequestUncheckedCreateWithoutGuestInput> | AnonymizationRequestCreateWithoutGuestInput[] | AnonymizationRequestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: AnonymizationRequestCreateOrConnectWithoutGuestInput | AnonymizationRequestCreateOrConnectWithoutGuestInput[]
    upsert?: AnonymizationRequestUpsertWithWhereUniqueWithoutGuestInput | AnonymizationRequestUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: AnonymizationRequestCreateManyGuestInputEnvelope
    set?: AnonymizationRequestWhereUniqueInput | AnonymizationRequestWhereUniqueInput[]
    disconnect?: AnonymizationRequestWhereUniqueInput | AnonymizationRequestWhereUniqueInput[]
    delete?: AnonymizationRequestWhereUniqueInput | AnonymizationRequestWhereUniqueInput[]
    connect?: AnonymizationRequestWhereUniqueInput | AnonymizationRequestWhereUniqueInput[]
    update?: AnonymizationRequestUpdateWithWhereUniqueWithoutGuestInput | AnonymizationRequestUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: AnonymizationRequestUpdateManyWithWhereWithoutGuestInput | AnonymizationRequestUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: AnonymizationRequestScalarWhereInput | AnonymizationRequestScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput> | ReservationCreateWithoutGuestInput[] | ReservationUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutGuestInput | ReservationCreateOrConnectWithoutGuestInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutGuestInput | ReservationUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: ReservationCreateManyGuestInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutGuestInput | ReservationUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutGuestInput | ReservationUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type AnonymizationRequestUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<AnonymizationRequestCreateWithoutGuestInput, AnonymizationRequestUncheckedCreateWithoutGuestInput> | AnonymizationRequestCreateWithoutGuestInput[] | AnonymizationRequestUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: AnonymizationRequestCreateOrConnectWithoutGuestInput | AnonymizationRequestCreateOrConnectWithoutGuestInput[]
    upsert?: AnonymizationRequestUpsertWithWhereUniqueWithoutGuestInput | AnonymizationRequestUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: AnonymizationRequestCreateManyGuestInputEnvelope
    set?: AnonymizationRequestWhereUniqueInput | AnonymizationRequestWhereUniqueInput[]
    disconnect?: AnonymizationRequestWhereUniqueInput | AnonymizationRequestWhereUniqueInput[]
    delete?: AnonymizationRequestWhereUniqueInput | AnonymizationRequestWhereUniqueInput[]
    connect?: AnonymizationRequestWhereUniqueInput | AnonymizationRequestWhereUniqueInput[]
    update?: AnonymizationRequestUpdateWithWhereUniqueWithoutGuestInput | AnonymizationRequestUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: AnonymizationRequestUpdateManyWithWhereWithoutGuestInput | AnonymizationRequestUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: AnonymizationRequestScalarWhereInput | AnonymizationRequestScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutReservationsInput = {
    create?: XOR<CategoryCreateWithoutReservationsInput, CategoryUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutReservationsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UnitCreateWithoutReservationsInput, UnitUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutReservationsInput
    connect?: UnitWhereUniqueInput
  }

  export type GuestCreateNestedOneWithoutReservationsInput = {
    create?: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutReservationsInput
    connect?: GuestWhereUniqueInput
  }

  export type CompanionCreateNestedManyWithoutReservationInput = {
    create?: XOR<CompanionCreateWithoutReservationInput, CompanionUncheckedCreateWithoutReservationInput> | CompanionCreateWithoutReservationInput[] | CompanionUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: CompanionCreateOrConnectWithoutReservationInput | CompanionCreateOrConnectWithoutReservationInput[]
    createMany?: CompanionCreateManyReservationInputEnvelope
    connect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutReservationInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UnitOccupancyCreateNestedManyWithoutReservationInput = {
    create?: XOR<UnitOccupancyCreateWithoutReservationInput, UnitOccupancyUncheckedCreateWithoutReservationInput> | UnitOccupancyCreateWithoutReservationInput[] | UnitOccupancyUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: UnitOccupancyCreateOrConnectWithoutReservationInput | UnitOccupancyCreateOrConnectWithoutReservationInput[]
    createMany?: UnitOccupancyCreateManyReservationInputEnvelope
    connect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
  }

  export type CompanionUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<CompanionCreateWithoutReservationInput, CompanionUncheckedCreateWithoutReservationInput> | CompanionCreateWithoutReservationInput[] | CompanionUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: CompanionCreateOrConnectWithoutReservationInput | CompanionCreateOrConnectWithoutReservationInput[]
    createMany?: CompanionCreateManyReservationInputEnvelope
    connect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type UnitOccupancyUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<UnitOccupancyCreateWithoutReservationInput, UnitOccupancyUncheckedCreateWithoutReservationInput> | UnitOccupancyCreateWithoutReservationInput[] | UnitOccupancyUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: UnitOccupancyCreateOrConnectWithoutReservationInput | UnitOccupancyCreateOrConnectWithoutReservationInput[]
    createMany?: UnitOccupancyCreateManyReservationInputEnvelope
    connect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type EnumReservationOriginFieldUpdateOperationsInput = {
    set?: $Enums.ReservationOrigin
  }

  export type CategoryUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<CategoryCreateWithoutReservationsInput, CategoryUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutReservationsInput
    upsert?: CategoryUpsertWithoutReservationsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutReservationsInput, CategoryUpdateWithoutReservationsInput>, CategoryUncheckedUpdateWithoutReservationsInput>
  }

  export type UnitUpdateOneWithoutReservationsNestedInput = {
    create?: XOR<UnitCreateWithoutReservationsInput, UnitUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutReservationsInput
    upsert?: UnitUpsertWithoutReservationsInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutReservationsInput, UnitUpdateWithoutReservationsInput>, UnitUncheckedUpdateWithoutReservationsInput>
  }

  export type GuestUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutReservationsInput
    upsert?: GuestUpsertWithoutReservationsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutReservationsInput, GuestUpdateWithoutReservationsInput>, GuestUncheckedUpdateWithoutReservationsInput>
  }

  export type CompanionUpdateManyWithoutReservationNestedInput = {
    create?: XOR<CompanionCreateWithoutReservationInput, CompanionUncheckedCreateWithoutReservationInput> | CompanionCreateWithoutReservationInput[] | CompanionUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: CompanionCreateOrConnectWithoutReservationInput | CompanionCreateOrConnectWithoutReservationInput[]
    upsert?: CompanionUpsertWithWhereUniqueWithoutReservationInput | CompanionUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: CompanionCreateManyReservationInputEnvelope
    set?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    disconnect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    delete?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    connect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    update?: CompanionUpdateWithWhereUniqueWithoutReservationInput | CompanionUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: CompanionUpdateManyWithWhereWithoutReservationInput | CompanionUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: CompanionScalarWhereInput | CompanionScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutReservationNestedInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReservationInput | PaymentUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReservationInput | PaymentUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReservationInput | PaymentUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UnitOccupancyUpdateManyWithoutReservationNestedInput = {
    create?: XOR<UnitOccupancyCreateWithoutReservationInput, UnitOccupancyUncheckedCreateWithoutReservationInput> | UnitOccupancyCreateWithoutReservationInput[] | UnitOccupancyUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: UnitOccupancyCreateOrConnectWithoutReservationInput | UnitOccupancyCreateOrConnectWithoutReservationInput[]
    upsert?: UnitOccupancyUpsertWithWhereUniqueWithoutReservationInput | UnitOccupancyUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: UnitOccupancyCreateManyReservationInputEnvelope
    set?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    disconnect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    delete?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    connect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    update?: UnitOccupancyUpdateWithWhereUniqueWithoutReservationInput | UnitOccupancyUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: UnitOccupancyUpdateManyWithWhereWithoutReservationInput | UnitOccupancyUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: UnitOccupancyScalarWhereInput | UnitOccupancyScalarWhereInput[]
  }

  export type CompanionUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<CompanionCreateWithoutReservationInput, CompanionUncheckedCreateWithoutReservationInput> | CompanionCreateWithoutReservationInput[] | CompanionUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: CompanionCreateOrConnectWithoutReservationInput | CompanionCreateOrConnectWithoutReservationInput[]
    upsert?: CompanionUpsertWithWhereUniqueWithoutReservationInput | CompanionUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: CompanionCreateManyReservationInputEnvelope
    set?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    disconnect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    delete?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    connect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    update?: CompanionUpdateWithWhereUniqueWithoutReservationInput | CompanionUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: CompanionUpdateManyWithWhereWithoutReservationInput | CompanionUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: CompanionScalarWhereInput | CompanionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput> | PaymentCreateWithoutReservationInput[] | PaymentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReservationInput | PaymentCreateOrConnectWithoutReservationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReservationInput | PaymentUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: PaymentCreateManyReservationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReservationInput | PaymentUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReservationInput | PaymentUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UnitOccupancyUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<UnitOccupancyCreateWithoutReservationInput, UnitOccupancyUncheckedCreateWithoutReservationInput> | UnitOccupancyCreateWithoutReservationInput[] | UnitOccupancyUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: UnitOccupancyCreateOrConnectWithoutReservationInput | UnitOccupancyCreateOrConnectWithoutReservationInput[]
    upsert?: UnitOccupancyUpsertWithWhereUniqueWithoutReservationInput | UnitOccupancyUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: UnitOccupancyCreateManyReservationInputEnvelope
    set?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    disconnect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    delete?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    connect?: UnitOccupancyWhereUniqueInput | UnitOccupancyWhereUniqueInput[]
    update?: UnitOccupancyUpdateWithWhereUniqueWithoutReservationInput | UnitOccupancyUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: UnitOccupancyUpdateManyWithWhereWithoutReservationInput | UnitOccupancyUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: UnitOccupancyScalarWhereInput | UnitOccupancyScalarWhereInput[]
  }

  export type ReservationCreateNestedOneWithoutCompanionsInput = {
    create?: XOR<ReservationCreateWithoutCompanionsInput, ReservationUncheckedCreateWithoutCompanionsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutCompanionsInput
    connect?: ReservationWhereUniqueInput
  }

  export type NullableEnumDocTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocType | null
  }

  export type ReservationUpdateOneRequiredWithoutCompanionsNestedInput = {
    create?: XOR<ReservationCreateWithoutCompanionsInput, ReservationUncheckedCreateWithoutCompanionsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutCompanionsInput
    upsert?: ReservationUpsertWithoutCompanionsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutCompanionsInput, ReservationUpdateWithoutCompanionsInput>, ReservationUncheckedUpdateWithoutCompanionsInput>
  }

  export type UnitCreateNestedOneWithoutOccupanciesInput = {
    create?: XOR<UnitCreateWithoutOccupanciesInput, UnitUncheckedCreateWithoutOccupanciesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutOccupanciesInput
    connect?: UnitWhereUniqueInput
  }

  export type ReservationCreateNestedOneWithoutOccupanciesInput = {
    create?: XOR<ReservationCreateWithoutOccupanciesInput, ReservationUncheckedCreateWithoutOccupanciesInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutOccupanciesInput
    connect?: ReservationWhereUniqueInput
  }

  export type EnumOccupancyTypeFieldUpdateOperationsInput = {
    set?: $Enums.OccupancyType
  }

  export type EnumOccupancyStatusFieldUpdateOperationsInput = {
    set?: $Enums.OccupancyStatus
  }

  export type UnitUpdateOneRequiredWithoutOccupanciesNestedInput = {
    create?: XOR<UnitCreateWithoutOccupanciesInput, UnitUncheckedCreateWithoutOccupanciesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutOccupanciesInput
    upsert?: UnitUpsertWithoutOccupanciesInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutOccupanciesInput, UnitUpdateWithoutOccupanciesInput>, UnitUncheckedUpdateWithoutOccupanciesInput>
  }

  export type ReservationUpdateOneWithoutOccupanciesNestedInput = {
    create?: XOR<ReservationCreateWithoutOccupanciesInput, ReservationUncheckedCreateWithoutOccupanciesInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutOccupanciesInput
    upsert?: ReservationUpsertWithoutOccupanciesInput
    disconnect?: ReservationWhereInput | boolean
    delete?: ReservationWhereInput | boolean
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutOccupanciesInput, ReservationUpdateWithoutOccupanciesInput>, ReservationUncheckedUpdateWithoutOccupanciesInput>
  }

  export type ReservationCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentsInput
    connect?: ReservationWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservationUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutPaymentsInput
    upsert?: ReservationUpsertWithoutPaymentsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutPaymentsInput, ReservationUpdateWithoutPaymentsInput>, ReservationUncheckedUpdateWithoutPaymentsInput>
  }

  export type GuestCreateNestedOneWithoutAnonymizationRequestsInput = {
    create?: XOR<GuestCreateWithoutAnonymizationRequestsInput, GuestUncheckedCreateWithoutAnonymizationRequestsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutAnonymizationRequestsInput
    connect?: GuestWhereUniqueInput
  }

  export type EnumAnonymizationStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnonymizationStatus
  }

  export type GuestUpdateOneRequiredWithoutAnonymizationRequestsNestedInput = {
    create?: XOR<GuestCreateWithoutAnonymizationRequestsInput, GuestUncheckedCreateWithoutAnonymizationRequestsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutAnonymizationRequestsInput
    upsert?: GuestUpsertWithoutAnonymizationRequestsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutAnonymizationRequestsInput, GuestUpdateWithoutAnonymizationRequestsInput>, GuestUncheckedUpdateWithoutAnonymizationRequestsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDocTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeFilter<$PrismaModel> | $Enums.DocType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDocTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocTypeFilter<$PrismaModel>
    _max?: NestedEnumDocTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumReservationOriginFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationOrigin | EnumReservationOriginFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationOrigin[] | ListEnumReservationOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationOrigin[] | ListEnumReservationOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationOriginFilter<$PrismaModel> | $Enums.ReservationOrigin
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type NestedEnumReservationOriginWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationOrigin | EnumReservationOriginFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationOrigin[] | ListEnumReservationOriginFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationOrigin[] | ListEnumReservationOriginFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationOriginWithAggregatesFilter<$PrismaModel> | $Enums.ReservationOrigin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationOriginFilter<$PrismaModel>
    _max?: NestedEnumReservationOriginFilter<$PrismaModel>
  }

  export type NestedEnumDocTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocTypeNullableFilter<$PrismaModel> | $Enums.DocType | null
  }

  export type NestedEnumDocTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocType | EnumDocTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DocType[] | ListEnumDocTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDocTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DocType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDocTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDocTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOccupancyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupancyType | EnumOccupancyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OccupancyType[] | ListEnumOccupancyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccupancyType[] | ListEnumOccupancyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupancyTypeFilter<$PrismaModel> | $Enums.OccupancyType
  }

  export type NestedEnumOccupancyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupancyStatus | EnumOccupancyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OccupancyStatus[] | ListEnumOccupancyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccupancyStatus[] | ListEnumOccupancyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupancyStatusFilter<$PrismaModel> | $Enums.OccupancyStatus
  }

  export type NestedEnumOccupancyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupancyType | EnumOccupancyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OccupancyType[] | ListEnumOccupancyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccupancyType[] | ListEnumOccupancyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupancyTypeWithAggregatesFilter<$PrismaModel> | $Enums.OccupancyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOccupancyTypeFilter<$PrismaModel>
    _max?: NestedEnumOccupancyTypeFilter<$PrismaModel>
  }

  export type NestedEnumOccupancyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OccupancyStatus | EnumOccupancyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OccupancyStatus[] | ListEnumOccupancyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OccupancyStatus[] | ListEnumOccupancyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOccupancyStatusWithAggregatesFilter<$PrismaModel> | $Enums.OccupancyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOccupancyStatusFilter<$PrismaModel>
    _max?: NestedEnumOccupancyStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAnonymizationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnonymizationStatus | EnumAnonymizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnonymizationStatus[] | ListEnumAnonymizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnonymizationStatus[] | ListEnumAnonymizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnonymizationStatusFilter<$PrismaModel> | $Enums.AnonymizationStatus
  }

  export type NestedEnumAnonymizationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnonymizationStatus | EnumAnonymizationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnonymizationStatus[] | ListEnumAnonymizationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnonymizationStatus[] | ListEnumAnonymizationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnonymizationStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnonymizationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnonymizationStatusFilter<$PrismaModel>
    _max?: NestedEnumAnonymizationStatusFilter<$PrismaModel>
  }

  export type UnitCreateWithoutCategoryInput = {
    id?: string
    name: string
    icalFeedUrl?: string | null
    icalExportToken: string
    isActive?: boolean
    notes?: string | null
    occupancies?: UnitOccupancyCreateNestedManyWithoutUnitInput
    reservations?: ReservationCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    icalFeedUrl?: string | null
    icalExportToken: string
    isActive?: boolean
    notes?: string | null
    occupancies?: UnitOccupancyUncheckedCreateNestedManyWithoutUnitInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutCategoryInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutCategoryInput, UnitUncheckedCreateWithoutCategoryInput>
  }

  export type UnitCreateManyCategoryInputEnvelope = {
    data: UnitCreateManyCategoryInput | UnitCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SeasonPriceCreateWithoutCategoryInput = {
    id?: string
    priceArs: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
    season: SeasonCreateNestedOneWithoutSeasonPricesInput
  }

  export type SeasonPriceUncheckedCreateWithoutCategoryInput = {
    id?: string
    seasonId: string
    priceArs: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
  }

  export type SeasonPriceCreateOrConnectWithoutCategoryInput = {
    where: SeasonPriceWhereUniqueInput
    create: XOR<SeasonPriceCreateWithoutCategoryInput, SeasonPriceUncheckedCreateWithoutCategoryInput>
  }

  export type SeasonPriceCreateManyCategoryInputEnvelope = {
    data: SeasonPriceCreateManyCategoryInput | SeasonPriceCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutCategoryInput = {
    id?: string
    code: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutReservationsInput
    guest: GuestCreateNestedOneWithoutReservationsInput
    companions?: CompanionCreateNestedManyWithoutReservationInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutCategoryInput = {
    id?: string
    code: string
    unitId?: string | null
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companions?: CompanionUncheckedCreateNestedManyWithoutReservationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutCategoryInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput>
  }

  export type ReservationCreateManyCategoryInputEnvelope = {
    data: ReservationCreateManyCategoryInput | ReservationCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UnitUpsertWithWhereUniqueWithoutCategoryInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutCategoryInput, UnitUncheckedUpdateWithoutCategoryInput>
    create: XOR<UnitCreateWithoutCategoryInput, UnitUncheckedCreateWithoutCategoryInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutCategoryInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutCategoryInput, UnitUncheckedUpdateWithoutCategoryInput>
  }

  export type UnitUpdateManyWithWhereWithoutCategoryInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    categoryId?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    icalFeedUrl?: StringNullableFilter<"Unit"> | string | null
    icalExportToken?: StringFilter<"Unit"> | string
    isActive?: BoolFilter<"Unit"> | boolean
    notes?: StringNullableFilter<"Unit"> | string | null
  }

  export type SeasonPriceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SeasonPriceWhereUniqueInput
    update: XOR<SeasonPriceUpdateWithoutCategoryInput, SeasonPriceUncheckedUpdateWithoutCategoryInput>
    create: XOR<SeasonPriceCreateWithoutCategoryInput, SeasonPriceUncheckedCreateWithoutCategoryInput>
  }

  export type SeasonPriceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SeasonPriceWhereUniqueInput
    data: XOR<SeasonPriceUpdateWithoutCategoryInput, SeasonPriceUncheckedUpdateWithoutCategoryInput>
  }

  export type SeasonPriceUpdateManyWithWhereWithoutCategoryInput = {
    where: SeasonPriceScalarWhereInput
    data: XOR<SeasonPriceUpdateManyMutationInput, SeasonPriceUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SeasonPriceScalarWhereInput = {
    AND?: SeasonPriceScalarWhereInput | SeasonPriceScalarWhereInput[]
    OR?: SeasonPriceScalarWhereInput[]
    NOT?: SeasonPriceScalarWhereInput | SeasonPriceScalarWhereInput[]
    id?: StringFilter<"SeasonPrice"> | string
    seasonId?: StringFilter<"SeasonPrice"> | string
    categoryId?: StringFilter<"SeasonPrice"> | string
    priceArs?: DecimalFilter<"SeasonPrice"> | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFilter<"SeasonPrice"> | Decimal | DecimalJsLike | number | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutCategoryInput, ReservationUncheckedUpdateWithoutCategoryInput>
    create: XOR<ReservationCreateWithoutCategoryInput, ReservationUncheckedCreateWithoutCategoryInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutCategoryInput, ReservationUncheckedUpdateWithoutCategoryInput>
  }

  export type ReservationUpdateManyWithWhereWithoutCategoryInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    code?: StringFilter<"Reservation"> | string
    categoryId?: StringFilter<"Reservation"> | string
    unitId?: StringNullableFilter<"Reservation"> | string | null
    guestId?: StringFilter<"Reservation"> | string
    checkIn?: DateTimeFilter<"Reservation"> | Date | string
    checkOut?: DateTimeFilter<"Reservation"> | Date | string
    adults?: IntFilter<"Reservation"> | number
    children?: IntFilter<"Reservation"> | number
    currency?: EnumCurrencyFilter<"Reservation"> | $Enums.Currency
    subtotal?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    origin?: EnumReservationOriginFilter<"Reservation"> | $Enums.ReservationOrigin
    cancellationReason?: StringNullableFilter<"Reservation"> | string | null
    notes?: StringNullableFilter<"Reservation"> | string | null
    paymentMethodSentAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type CategoryCreateWithoutUnitsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    capacityAdults: number
    capacityChildren?: number
    maxOccupancy: number
    basePriceArs: Decimal | DecimalJsLike | number | string
    basePriceUsd: Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    displayOrder?: number
    seasonPrices?: SeasonPriceCreateNestedManyWithoutCategoryInput
    reservations?: ReservationCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUnitsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    capacityAdults: number
    capacityChildren?: number
    maxOccupancy: number
    basePriceArs: Decimal | DecimalJsLike | number | string
    basePriceUsd: Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    displayOrder?: number
    seasonPrices?: SeasonPriceUncheckedCreateNestedManyWithoutCategoryInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUnitsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUnitsInput, CategoryUncheckedCreateWithoutUnitsInput>
  }

  export type UnitOccupancyCreateWithoutUnitInput = {
    id?: string
    type: $Enums.OccupancyType
    checkIn: Date | string
    checkOut: Date | string
    lockToken?: string | null
    expiresAt?: Date | string | null
    status?: $Enums.OccupancyStatus
    notes?: string | null
    reservation?: ReservationCreateNestedOneWithoutOccupanciesInput
  }

  export type UnitOccupancyUncheckedCreateWithoutUnitInput = {
    id?: string
    reservationId?: string | null
    type: $Enums.OccupancyType
    checkIn: Date | string
    checkOut: Date | string
    lockToken?: string | null
    expiresAt?: Date | string | null
    status?: $Enums.OccupancyStatus
    notes?: string | null
  }

  export type UnitOccupancyCreateOrConnectWithoutUnitInput = {
    where: UnitOccupancyWhereUniqueInput
    create: XOR<UnitOccupancyCreateWithoutUnitInput, UnitOccupancyUncheckedCreateWithoutUnitInput>
  }

  export type UnitOccupancyCreateManyUnitInputEnvelope = {
    data: UnitOccupancyCreateManyUnitInput | UnitOccupancyCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutUnitInput = {
    id?: string
    code: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutReservationsInput
    guest: GuestCreateNestedOneWithoutReservationsInput
    companions?: CompanionCreateNestedManyWithoutReservationInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutUnitInput = {
    id?: string
    code: string
    categoryId: string
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companions?: CompanionUncheckedCreateNestedManyWithoutReservationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutUnitInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutUnitInput, ReservationUncheckedCreateWithoutUnitInput>
  }

  export type ReservationCreateManyUnitInputEnvelope = {
    data: ReservationCreateManyUnitInput | ReservationCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutUnitsInput = {
    update: XOR<CategoryUpdateWithoutUnitsInput, CategoryUncheckedUpdateWithoutUnitsInput>
    create: XOR<CategoryCreateWithoutUnitsInput, CategoryUncheckedCreateWithoutUnitsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutUnitsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutUnitsInput, CategoryUncheckedUpdateWithoutUnitsInput>
  }

  export type CategoryUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacityAdults?: IntFieldUpdateOperationsInput | number
    capacityChildren?: IntFieldUpdateOperationsInput | number
    maxOccupancy?: IntFieldUpdateOperationsInput | number
    basePriceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    seasonPrices?: SeasonPriceUpdateManyWithoutCategoryNestedInput
    reservations?: ReservationUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacityAdults?: IntFieldUpdateOperationsInput | number
    capacityChildren?: IntFieldUpdateOperationsInput | number
    maxOccupancy?: IntFieldUpdateOperationsInput | number
    basePriceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    seasonPrices?: SeasonPriceUncheckedUpdateManyWithoutCategoryNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UnitOccupancyUpsertWithWhereUniqueWithoutUnitInput = {
    where: UnitOccupancyWhereUniqueInput
    update: XOR<UnitOccupancyUpdateWithoutUnitInput, UnitOccupancyUncheckedUpdateWithoutUnitInput>
    create: XOR<UnitOccupancyCreateWithoutUnitInput, UnitOccupancyUncheckedCreateWithoutUnitInput>
  }

  export type UnitOccupancyUpdateWithWhereUniqueWithoutUnitInput = {
    where: UnitOccupancyWhereUniqueInput
    data: XOR<UnitOccupancyUpdateWithoutUnitInput, UnitOccupancyUncheckedUpdateWithoutUnitInput>
  }

  export type UnitOccupancyUpdateManyWithWhereWithoutUnitInput = {
    where: UnitOccupancyScalarWhereInput
    data: XOR<UnitOccupancyUpdateManyMutationInput, UnitOccupancyUncheckedUpdateManyWithoutUnitInput>
  }

  export type UnitOccupancyScalarWhereInput = {
    AND?: UnitOccupancyScalarWhereInput | UnitOccupancyScalarWhereInput[]
    OR?: UnitOccupancyScalarWhereInput[]
    NOT?: UnitOccupancyScalarWhereInput | UnitOccupancyScalarWhereInput[]
    id?: StringFilter<"UnitOccupancy"> | string
    unitId?: StringFilter<"UnitOccupancy"> | string
    reservationId?: StringNullableFilter<"UnitOccupancy"> | string | null
    type?: EnumOccupancyTypeFilter<"UnitOccupancy"> | $Enums.OccupancyType
    checkIn?: DateTimeFilter<"UnitOccupancy"> | Date | string
    checkOut?: DateTimeFilter<"UnitOccupancy"> | Date | string
    lockToken?: StringNullableFilter<"UnitOccupancy"> | string | null
    expiresAt?: DateTimeNullableFilter<"UnitOccupancy"> | Date | string | null
    status?: EnumOccupancyStatusFilter<"UnitOccupancy"> | $Enums.OccupancyStatus
    notes?: StringNullableFilter<"UnitOccupancy"> | string | null
  }

  export type ReservationUpsertWithWhereUniqueWithoutUnitInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutUnitInput, ReservationUncheckedUpdateWithoutUnitInput>
    create: XOR<ReservationCreateWithoutUnitInput, ReservationUncheckedCreateWithoutUnitInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutUnitInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutUnitInput, ReservationUncheckedUpdateWithoutUnitInput>
  }

  export type ReservationUpdateManyWithWhereWithoutUnitInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutUnitInput>
  }

  export type SeasonPriceCreateWithoutSeasonInput = {
    id?: string
    priceArs: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
    category: CategoryCreateNestedOneWithoutSeasonPricesInput
  }

  export type SeasonPriceUncheckedCreateWithoutSeasonInput = {
    id?: string
    categoryId: string
    priceArs: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
  }

  export type SeasonPriceCreateOrConnectWithoutSeasonInput = {
    where: SeasonPriceWhereUniqueInput
    create: XOR<SeasonPriceCreateWithoutSeasonInput, SeasonPriceUncheckedCreateWithoutSeasonInput>
  }

  export type SeasonPriceCreateManySeasonInputEnvelope = {
    data: SeasonPriceCreateManySeasonInput | SeasonPriceCreateManySeasonInput[]
    skipDuplicates?: boolean
  }

  export type SeasonPriceUpsertWithWhereUniqueWithoutSeasonInput = {
    where: SeasonPriceWhereUniqueInput
    update: XOR<SeasonPriceUpdateWithoutSeasonInput, SeasonPriceUncheckedUpdateWithoutSeasonInput>
    create: XOR<SeasonPriceCreateWithoutSeasonInput, SeasonPriceUncheckedCreateWithoutSeasonInput>
  }

  export type SeasonPriceUpdateWithWhereUniqueWithoutSeasonInput = {
    where: SeasonPriceWhereUniqueInput
    data: XOR<SeasonPriceUpdateWithoutSeasonInput, SeasonPriceUncheckedUpdateWithoutSeasonInput>
  }

  export type SeasonPriceUpdateManyWithWhereWithoutSeasonInput = {
    where: SeasonPriceScalarWhereInput
    data: XOR<SeasonPriceUpdateManyMutationInput, SeasonPriceUncheckedUpdateManyWithoutSeasonInput>
  }

  export type SeasonCreateWithoutSeasonPricesInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    minStayNights?: number
    isActive?: boolean
  }

  export type SeasonUncheckedCreateWithoutSeasonPricesInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    minStayNights?: number
    isActive?: boolean
  }

  export type SeasonCreateOrConnectWithoutSeasonPricesInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutSeasonPricesInput, SeasonUncheckedCreateWithoutSeasonPricesInput>
  }

  export type CategoryCreateWithoutSeasonPricesInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    capacityAdults: number
    capacityChildren?: number
    maxOccupancy: number
    basePriceArs: Decimal | DecimalJsLike | number | string
    basePriceUsd: Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    displayOrder?: number
    units?: UnitCreateNestedManyWithoutCategoryInput
    reservations?: ReservationCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSeasonPricesInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    capacityAdults: number
    capacityChildren?: number
    maxOccupancy: number
    basePriceArs: Decimal | DecimalJsLike | number | string
    basePriceUsd: Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    displayOrder?: number
    units?: UnitUncheckedCreateNestedManyWithoutCategoryInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSeasonPricesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSeasonPricesInput, CategoryUncheckedCreateWithoutSeasonPricesInput>
  }

  export type SeasonUpsertWithoutSeasonPricesInput = {
    update: XOR<SeasonUpdateWithoutSeasonPricesInput, SeasonUncheckedUpdateWithoutSeasonPricesInput>
    create: XOR<SeasonCreateWithoutSeasonPricesInput, SeasonUncheckedCreateWithoutSeasonPricesInput>
    where?: SeasonWhereInput
  }

  export type SeasonUpdateToOneWithWhereWithoutSeasonPricesInput = {
    where?: SeasonWhereInput
    data: XOR<SeasonUpdateWithoutSeasonPricesInput, SeasonUncheckedUpdateWithoutSeasonPricesInput>
  }

  export type SeasonUpdateWithoutSeasonPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    minStayNights?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SeasonUncheckedUpdateWithoutSeasonPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    minStayNights?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUpsertWithoutSeasonPricesInput = {
    update: XOR<CategoryUpdateWithoutSeasonPricesInput, CategoryUncheckedUpdateWithoutSeasonPricesInput>
    create: XOR<CategoryCreateWithoutSeasonPricesInput, CategoryUncheckedCreateWithoutSeasonPricesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSeasonPricesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSeasonPricesInput, CategoryUncheckedUpdateWithoutSeasonPricesInput>
  }

  export type CategoryUpdateWithoutSeasonPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacityAdults?: IntFieldUpdateOperationsInput | number
    capacityChildren?: IntFieldUpdateOperationsInput | number
    maxOccupancy?: IntFieldUpdateOperationsInput | number
    basePriceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    units?: UnitUpdateManyWithoutCategoryNestedInput
    reservations?: ReservationUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSeasonPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacityAdults?: IntFieldUpdateOperationsInput | number
    capacityChildren?: IntFieldUpdateOperationsInput | number
    maxOccupancy?: IntFieldUpdateOperationsInput | number
    basePriceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    units?: UnitUncheckedUpdateManyWithoutCategoryNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ReservationCreateWithoutGuestInput = {
    id?: string
    code: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutReservationsInput
    unit?: UnitCreateNestedOneWithoutReservationsInput
    companions?: CompanionCreateNestedManyWithoutReservationInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutGuestInput = {
    id?: string
    code: string
    categoryId: string
    unitId?: string | null
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companions?: CompanionUncheckedCreateNestedManyWithoutReservationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput>
  }

  export type ReservationCreateManyGuestInputEnvelope = {
    data: ReservationCreateManyGuestInput | ReservationCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type AnonymizationRequestCreateWithoutGuestInput = {
    id?: string
    requestedAt?: Date | string
    deadlineAt: Date | string
    completedAt?: Date | string | null
    status?: $Enums.AnonymizationStatus
  }

  export type AnonymizationRequestUncheckedCreateWithoutGuestInput = {
    id?: string
    requestedAt?: Date | string
    deadlineAt: Date | string
    completedAt?: Date | string | null
    status?: $Enums.AnonymizationStatus
  }

  export type AnonymizationRequestCreateOrConnectWithoutGuestInput = {
    where: AnonymizationRequestWhereUniqueInput
    create: XOR<AnonymizationRequestCreateWithoutGuestInput, AnonymizationRequestUncheckedCreateWithoutGuestInput>
  }

  export type AnonymizationRequestCreateManyGuestInputEnvelope = {
    data: AnonymizationRequestCreateManyGuestInput | AnonymizationRequestCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutGuestInput, ReservationUncheckedUpdateWithoutGuestInput>
    create: XOR<ReservationCreateWithoutGuestInput, ReservationUncheckedCreateWithoutGuestInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutGuestInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutGuestInput, ReservationUncheckedUpdateWithoutGuestInput>
  }

  export type ReservationUpdateManyWithWhereWithoutGuestInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutGuestInput>
  }

  export type AnonymizationRequestUpsertWithWhereUniqueWithoutGuestInput = {
    where: AnonymizationRequestWhereUniqueInput
    update: XOR<AnonymizationRequestUpdateWithoutGuestInput, AnonymizationRequestUncheckedUpdateWithoutGuestInput>
    create: XOR<AnonymizationRequestCreateWithoutGuestInput, AnonymizationRequestUncheckedCreateWithoutGuestInput>
  }

  export type AnonymizationRequestUpdateWithWhereUniqueWithoutGuestInput = {
    where: AnonymizationRequestWhereUniqueInput
    data: XOR<AnonymizationRequestUpdateWithoutGuestInput, AnonymizationRequestUncheckedUpdateWithoutGuestInput>
  }

  export type AnonymizationRequestUpdateManyWithWhereWithoutGuestInput = {
    where: AnonymizationRequestScalarWhereInput
    data: XOR<AnonymizationRequestUpdateManyMutationInput, AnonymizationRequestUncheckedUpdateManyWithoutGuestInput>
  }

  export type AnonymizationRequestScalarWhereInput = {
    AND?: AnonymizationRequestScalarWhereInput | AnonymizationRequestScalarWhereInput[]
    OR?: AnonymizationRequestScalarWhereInput[]
    NOT?: AnonymizationRequestScalarWhereInput | AnonymizationRequestScalarWhereInput[]
    id?: StringFilter<"AnonymizationRequest"> | string
    guestId?: StringFilter<"AnonymizationRequest"> | string
    requestedAt?: DateTimeFilter<"AnonymizationRequest"> | Date | string
    deadlineAt?: DateTimeFilter<"AnonymizationRequest"> | Date | string
    completedAt?: DateTimeNullableFilter<"AnonymizationRequest"> | Date | string | null
    status?: EnumAnonymizationStatusFilter<"AnonymizationRequest"> | $Enums.AnonymizationStatus
  }

  export type CategoryCreateWithoutReservationsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    capacityAdults: number
    capacityChildren?: number
    maxOccupancy: number
    basePriceArs: Decimal | DecimalJsLike | number | string
    basePriceUsd: Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    displayOrder?: number
    units?: UnitCreateNestedManyWithoutCategoryInput
    seasonPrices?: SeasonPriceCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutReservationsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    capacityAdults: number
    capacityChildren?: number
    maxOccupancy: number
    basePriceArs: Decimal | DecimalJsLike | number | string
    basePriceUsd: Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    displayOrder?: number
    units?: UnitUncheckedCreateNestedManyWithoutCategoryInput
    seasonPrices?: SeasonPriceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutReservationsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutReservationsInput, CategoryUncheckedCreateWithoutReservationsInput>
  }

  export type UnitCreateWithoutReservationsInput = {
    id?: string
    name: string
    icalFeedUrl?: string | null
    icalExportToken: string
    isActive?: boolean
    notes?: string | null
    category: CategoryCreateNestedOneWithoutUnitsInput
    occupancies?: UnitOccupancyCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutReservationsInput = {
    id?: string
    categoryId: string
    name: string
    icalFeedUrl?: string | null
    icalExportToken: string
    isActive?: boolean
    notes?: string | null
    occupancies?: UnitOccupancyUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutReservationsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutReservationsInput, UnitUncheckedCreateWithoutReservationsInput>
  }

  export type GuestCreateWithoutReservationsInput = {
    id?: string
    docType: $Enums.DocType
    docNumber: string
    firstName: string
    lastName: string
    email: string
    phone: string
    birthDate?: Date | string | null
    isAnonymized?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    anonymizationRequests?: AnonymizationRequestCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutReservationsInput = {
    id?: string
    docType: $Enums.DocType
    docNumber: string
    firstName: string
    lastName: string
    email: string
    phone: string
    birthDate?: Date | string | null
    isAnonymized?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    anonymizationRequests?: AnonymizationRequestUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutReservationsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
  }

  export type CompanionCreateWithoutReservationInput = {
    id?: string
    firstName: string
    lastName: string
    docType?: $Enums.DocType | null
    docNumber?: string | null
    birthDate?: Date | string | null
  }

  export type CompanionUncheckedCreateWithoutReservationInput = {
    id?: string
    firstName: string
    lastName: string
    docType?: $Enums.DocType | null
    docNumber?: string | null
    birthDate?: Date | string | null
  }

  export type CompanionCreateOrConnectWithoutReservationInput = {
    where: CompanionWhereUniqueInput
    create: XOR<CompanionCreateWithoutReservationInput, CompanionUncheckedCreateWithoutReservationInput>
  }

  export type CompanionCreateManyReservationInputEnvelope = {
    data: CompanionCreateManyReservationInput | CompanionCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutReservationInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    paymentMethod: $Enums.PaymentMethod
    notes?: string | null
    receiptPath?: string | null
    receiptFilename?: string | null
    receiptMime?: string | null
    receiptSize?: number | null
    createdAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutReservationInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    paymentMethod: $Enums.PaymentMethod
    notes?: string | null
    receiptPath?: string | null
    receiptFilename?: string | null
    receiptMime?: string | null
    receiptSize?: number | null
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
  }

  export type PaymentCreateManyReservationInputEnvelope = {
    data: PaymentCreateManyReservationInput | PaymentCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type UnitOccupancyCreateWithoutReservationInput = {
    id?: string
    type: $Enums.OccupancyType
    checkIn: Date | string
    checkOut: Date | string
    lockToken?: string | null
    expiresAt?: Date | string | null
    status?: $Enums.OccupancyStatus
    notes?: string | null
    unit: UnitCreateNestedOneWithoutOccupanciesInput
  }

  export type UnitOccupancyUncheckedCreateWithoutReservationInput = {
    id?: string
    unitId: string
    type: $Enums.OccupancyType
    checkIn: Date | string
    checkOut: Date | string
    lockToken?: string | null
    expiresAt?: Date | string | null
    status?: $Enums.OccupancyStatus
    notes?: string | null
  }

  export type UnitOccupancyCreateOrConnectWithoutReservationInput = {
    where: UnitOccupancyWhereUniqueInput
    create: XOR<UnitOccupancyCreateWithoutReservationInput, UnitOccupancyUncheckedCreateWithoutReservationInput>
  }

  export type UnitOccupancyCreateManyReservationInputEnvelope = {
    data: UnitOccupancyCreateManyReservationInput | UnitOccupancyCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutReservationsInput = {
    update: XOR<CategoryUpdateWithoutReservationsInput, CategoryUncheckedUpdateWithoutReservationsInput>
    create: XOR<CategoryCreateWithoutReservationsInput, CategoryUncheckedCreateWithoutReservationsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutReservationsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutReservationsInput, CategoryUncheckedUpdateWithoutReservationsInput>
  }

  export type CategoryUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacityAdults?: IntFieldUpdateOperationsInput | number
    capacityChildren?: IntFieldUpdateOperationsInput | number
    maxOccupancy?: IntFieldUpdateOperationsInput | number
    basePriceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    units?: UnitUpdateManyWithoutCategoryNestedInput
    seasonPrices?: SeasonPriceUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacityAdults?: IntFieldUpdateOperationsInput | number
    capacityChildren?: IntFieldUpdateOperationsInput | number
    maxOccupancy?: IntFieldUpdateOperationsInput | number
    basePriceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    basePriceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    images?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    units?: UnitUncheckedUpdateManyWithoutCategoryNestedInput
    seasonPrices?: SeasonPriceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UnitUpsertWithoutReservationsInput = {
    update: XOR<UnitUpdateWithoutReservationsInput, UnitUncheckedUpdateWithoutReservationsInput>
    create: XOR<UnitCreateWithoutReservationsInput, UnitUncheckedCreateWithoutReservationsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutReservationsInput, UnitUncheckedUpdateWithoutReservationsInput>
  }

  export type UnitUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutUnitsNestedInput
    occupancies?: UnitOccupancyUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    occupancies?: UnitOccupancyUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type GuestUpsertWithoutReservationsInput = {
    update: XOR<GuestUpdateWithoutReservationsInput, GuestUncheckedUpdateWithoutReservationsInput>
    create: XOR<GuestCreateWithoutReservationsInput, GuestUncheckedCreateWithoutReservationsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutReservationsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutReservationsInput, GuestUncheckedUpdateWithoutReservationsInput>
  }

  export type GuestUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    docNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymizationRequests?: AnonymizationRequestUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    docNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymizationRequests?: AnonymizationRequestUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type CompanionUpsertWithWhereUniqueWithoutReservationInput = {
    where: CompanionWhereUniqueInput
    update: XOR<CompanionUpdateWithoutReservationInput, CompanionUncheckedUpdateWithoutReservationInput>
    create: XOR<CompanionCreateWithoutReservationInput, CompanionUncheckedCreateWithoutReservationInput>
  }

  export type CompanionUpdateWithWhereUniqueWithoutReservationInput = {
    where: CompanionWhereUniqueInput
    data: XOR<CompanionUpdateWithoutReservationInput, CompanionUncheckedUpdateWithoutReservationInput>
  }

  export type CompanionUpdateManyWithWhereWithoutReservationInput = {
    where: CompanionScalarWhereInput
    data: XOR<CompanionUpdateManyMutationInput, CompanionUncheckedUpdateManyWithoutReservationInput>
  }

  export type CompanionScalarWhereInput = {
    AND?: CompanionScalarWhereInput | CompanionScalarWhereInput[]
    OR?: CompanionScalarWhereInput[]
    NOT?: CompanionScalarWhereInput | CompanionScalarWhereInput[]
    id?: StringFilter<"Companion"> | string
    reservationId?: StringFilter<"Companion"> | string
    firstName?: StringFilter<"Companion"> | string
    lastName?: StringFilter<"Companion"> | string
    docType?: EnumDocTypeNullableFilter<"Companion"> | $Enums.DocType | null
    docNumber?: StringNullableFilter<"Companion"> | string | null
    birthDate?: DateTimeNullableFilter<"Companion"> | Date | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutReservationInput, PaymentUncheckedUpdateWithoutReservationInput>
    create: XOR<PaymentCreateWithoutReservationInput, PaymentUncheckedCreateWithoutReservationInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutReservationInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutReservationInput, PaymentUncheckedUpdateWithoutReservationInput>
  }

  export type PaymentUpdateManyWithWhereWithoutReservationInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutReservationInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    reservationId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    notes?: StringNullableFilter<"Payment"> | string | null
    receiptPath?: StringNullableFilter<"Payment"> | string | null
    receiptFilename?: StringNullableFilter<"Payment"> | string | null
    receiptMime?: StringNullableFilter<"Payment"> | string | null
    receiptSize?: IntNullableFilter<"Payment"> | number | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UnitOccupancyUpsertWithWhereUniqueWithoutReservationInput = {
    where: UnitOccupancyWhereUniqueInput
    update: XOR<UnitOccupancyUpdateWithoutReservationInput, UnitOccupancyUncheckedUpdateWithoutReservationInput>
    create: XOR<UnitOccupancyCreateWithoutReservationInput, UnitOccupancyUncheckedCreateWithoutReservationInput>
  }

  export type UnitOccupancyUpdateWithWhereUniqueWithoutReservationInput = {
    where: UnitOccupancyWhereUniqueInput
    data: XOR<UnitOccupancyUpdateWithoutReservationInput, UnitOccupancyUncheckedUpdateWithoutReservationInput>
  }

  export type UnitOccupancyUpdateManyWithWhereWithoutReservationInput = {
    where: UnitOccupancyScalarWhereInput
    data: XOR<UnitOccupancyUpdateManyMutationInput, UnitOccupancyUncheckedUpdateManyWithoutReservationInput>
  }

  export type ReservationCreateWithoutCompanionsInput = {
    id?: string
    code: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutReservationsInput
    unit?: UnitCreateNestedOneWithoutReservationsInput
    guest: GuestCreateNestedOneWithoutReservationsInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutCompanionsInput = {
    id?: string
    code: string
    categoryId: string
    unitId?: string | null
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutCompanionsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutCompanionsInput, ReservationUncheckedCreateWithoutCompanionsInput>
  }

  export type ReservationUpsertWithoutCompanionsInput = {
    update: XOR<ReservationUpdateWithoutCompanionsInput, ReservationUncheckedUpdateWithoutCompanionsInput>
    create: XOR<ReservationCreateWithoutCompanionsInput, ReservationUncheckedCreateWithoutCompanionsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutCompanionsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutCompanionsInput, ReservationUncheckedUpdateWithoutCompanionsInput>
  }

  export type ReservationUpdateWithoutCompanionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutReservationsNestedInput
    unit?: UnitUpdateOneWithoutReservationsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutCompanionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type UnitCreateWithoutOccupanciesInput = {
    id?: string
    name: string
    icalFeedUrl?: string | null
    icalExportToken: string
    isActive?: boolean
    notes?: string | null
    category: CategoryCreateNestedOneWithoutUnitsInput
    reservations?: ReservationCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutOccupanciesInput = {
    id?: string
    categoryId: string
    name: string
    icalFeedUrl?: string | null
    icalExportToken: string
    isActive?: boolean
    notes?: string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutOccupanciesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutOccupanciesInput, UnitUncheckedCreateWithoutOccupanciesInput>
  }

  export type ReservationCreateWithoutOccupanciesInput = {
    id?: string
    code: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutReservationsInput
    unit?: UnitCreateNestedOneWithoutReservationsInput
    guest: GuestCreateNestedOneWithoutReservationsInput
    companions?: CompanionCreateNestedManyWithoutReservationInput
    payments?: PaymentCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutOccupanciesInput = {
    id?: string
    code: string
    categoryId: string
    unitId?: string | null
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companions?: CompanionUncheckedCreateNestedManyWithoutReservationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutOccupanciesInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutOccupanciesInput, ReservationUncheckedCreateWithoutOccupanciesInput>
  }

  export type UnitUpsertWithoutOccupanciesInput = {
    update: XOR<UnitUpdateWithoutOccupanciesInput, UnitUncheckedUpdateWithoutOccupanciesInput>
    create: XOR<UnitCreateWithoutOccupanciesInput, UnitUncheckedCreateWithoutOccupanciesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutOccupanciesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutOccupanciesInput, UnitUncheckedUpdateWithoutOccupanciesInput>
  }

  export type UnitUpdateWithoutOccupanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutUnitsNestedInput
    reservations?: ReservationUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutOccupanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type ReservationUpsertWithoutOccupanciesInput = {
    update: XOR<ReservationUpdateWithoutOccupanciesInput, ReservationUncheckedUpdateWithoutOccupanciesInput>
    create: XOR<ReservationCreateWithoutOccupanciesInput, ReservationUncheckedCreateWithoutOccupanciesInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutOccupanciesInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutOccupanciesInput, ReservationUncheckedUpdateWithoutOccupanciesInput>
  }

  export type ReservationUpdateWithoutOccupanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutReservationsNestedInput
    unit?: UnitUpdateOneWithoutReservationsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    companions?: CompanionUpdateManyWithoutReservationNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutOccupanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companions?: CompanionUncheckedUpdateManyWithoutReservationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateWithoutPaymentsInput = {
    id?: string
    code: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutReservationsInput
    unit?: UnitCreateNestedOneWithoutReservationsInput
    guest: GuestCreateNestedOneWithoutReservationsInput
    companions?: CompanionCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutPaymentsInput = {
    id?: string
    code: string
    categoryId: string
    unitId?: string | null
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companions?: CompanionUncheckedCreateNestedManyWithoutReservationInput
    occupancies?: UnitOccupancyUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutPaymentsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
  }

  export type ReservationUpsertWithoutPaymentsInput = {
    update: XOR<ReservationUpdateWithoutPaymentsInput, ReservationUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ReservationCreateWithoutPaymentsInput, ReservationUncheckedCreateWithoutPaymentsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutPaymentsInput, ReservationUncheckedUpdateWithoutPaymentsInput>
  }

  export type ReservationUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutReservationsNestedInput
    unit?: UnitUpdateOneWithoutReservationsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    companions?: CompanionUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companions?: CompanionUncheckedUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type GuestCreateWithoutAnonymizationRequestsInput = {
    id?: string
    docType: $Enums.DocType
    docNumber: string
    firstName: string
    lastName: string
    email: string
    phone: string
    birthDate?: Date | string | null
    isAnonymized?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutAnonymizationRequestsInput = {
    id?: string
    docType: $Enums.DocType
    docNumber: string
    firstName: string
    lastName: string
    email: string
    phone: string
    birthDate?: Date | string | null
    isAnonymized?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutAnonymizationRequestsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutAnonymizationRequestsInput, GuestUncheckedCreateWithoutAnonymizationRequestsInput>
  }

  export type GuestUpsertWithoutAnonymizationRequestsInput = {
    update: XOR<GuestUpdateWithoutAnonymizationRequestsInput, GuestUncheckedUpdateWithoutAnonymizationRequestsInput>
    create: XOR<GuestCreateWithoutAnonymizationRequestsInput, GuestUncheckedCreateWithoutAnonymizationRequestsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutAnonymizationRequestsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutAnonymizationRequestsInput, GuestUncheckedUpdateWithoutAnonymizationRequestsInput>
  }

  export type GuestUpdateWithoutAnonymizationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    docNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutAnonymizationRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    docType?: EnumDocTypeFieldUpdateOperationsInput | $Enums.DocType
    docNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAnonymized?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type UnitCreateManyCategoryInput = {
    id?: string
    name: string
    icalFeedUrl?: string | null
    icalExportToken: string
    isActive?: boolean
    notes?: string | null
  }

  export type SeasonPriceCreateManyCategoryInput = {
    id?: string
    seasonId: string
    priceArs: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
  }

  export type ReservationCreateManyCategoryInput = {
    id?: string
    code: string
    unitId?: string | null
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    occupancies?: UnitOccupancyUpdateManyWithoutUnitNestedInput
    reservations?: ReservationUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    occupancies?: UnitOccupancyUncheckedUpdateManyWithoutUnitNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icalFeedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    icalExportToken?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeasonPriceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    season?: SeasonUpdateOneRequiredWithoutSeasonPricesNestedInput
  }

  export type SeasonPriceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    priceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SeasonPriceUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    priceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservationUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutReservationsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    companions?: CompanionUpdateManyWithoutReservationNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companions?: CompanionUncheckedUpdateManyWithoutReservationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitOccupancyCreateManyUnitInput = {
    id?: string
    reservationId?: string | null
    type: $Enums.OccupancyType
    checkIn: Date | string
    checkOut: Date | string
    lockToken?: string | null
    expiresAt?: Date | string | null
    status?: $Enums.OccupancyStatus
    notes?: string | null
  }

  export type ReservationCreateManyUnitInput = {
    id?: string
    code: string
    categoryId: string
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitOccupancyUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOccupancyTypeFieldUpdateOperationsInput | $Enums.OccupancyType
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    lockToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOccupancyStatusFieldUpdateOperationsInput | $Enums.OccupancyStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: ReservationUpdateOneWithoutOccupanciesNestedInput
  }

  export type UnitOccupancyUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOccupancyTypeFieldUpdateOperationsInput | $Enums.OccupancyType
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    lockToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOccupancyStatusFieldUpdateOperationsInput | $Enums.OccupancyStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitOccupancyUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumOccupancyTypeFieldUpdateOperationsInput | $Enums.OccupancyType
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    lockToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOccupancyStatusFieldUpdateOperationsInput | $Enums.OccupancyStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutReservationsNestedInput
    guest?: GuestUpdateOneRequiredWithoutReservationsNestedInput
    companions?: CompanionUpdateManyWithoutReservationNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companions?: CompanionUncheckedUpdateManyWithoutReservationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonPriceCreateManySeasonInput = {
    id?: string
    categoryId: string
    priceArs: Decimal | DecimalJsLike | number | string
    priceUsd: Decimal | DecimalJsLike | number | string
  }

  export type SeasonPriceUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: CategoryUpdateOneRequiredWithoutSeasonPricesNestedInput
  }

  export type SeasonPriceUncheckedUpdateWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    priceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SeasonPriceUncheckedUpdateManyWithoutSeasonInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    priceArs?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    priceUsd?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReservationCreateManyGuestInput = {
    id?: string
    code: string
    categoryId: string
    unitId?: string | null
    checkIn: Date | string
    checkOut: Date | string
    adults: number
    children?: number
    currency: $Enums.Currency
    subtotal: Decimal | DecimalJsLike | number | string
    discountAmount?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    origin?: $Enums.ReservationOrigin
    cancellationReason?: string | null
    notes?: string | null
    paymentMethodSentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnonymizationRequestCreateManyGuestInput = {
    id?: string
    requestedAt?: Date | string
    deadlineAt: Date | string
    completedAt?: Date | string | null
    status?: $Enums.AnonymizationStatus
  }

  export type ReservationUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutReservationsNestedInput
    unit?: UnitUpdateOneWithoutReservationsNestedInput
    companions?: CompanionUpdateManyWithoutReservationNestedInput
    payments?: PaymentUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companions?: CompanionUncheckedUpdateManyWithoutReservationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutReservationNestedInput
    occupancies?: UnitOccupancyUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    adults?: IntFieldUpdateOperationsInput | number
    children?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    origin?: EnumReservationOriginFieldUpdateOperationsInput | $Enums.ReservationOrigin
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnonymizationRequestUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAnonymizationStatusFieldUpdateOperationsInput | $Enums.AnonymizationStatus
  }

  export type AnonymizationRequestUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAnonymizationStatusFieldUpdateOperationsInput | $Enums.AnonymizationStatus
  }

  export type AnonymizationRequestUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAnonymizationStatusFieldUpdateOperationsInput | $Enums.AnonymizationStatus
  }

  export type CompanionCreateManyReservationInput = {
    id?: string
    firstName: string
    lastName: string
    docType?: $Enums.DocType | null
    docNumber?: string | null
    birthDate?: Date | string | null
  }

  export type PaymentCreateManyReservationInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.Currency
    paymentMethod: $Enums.PaymentMethod
    notes?: string | null
    receiptPath?: string | null
    receiptFilename?: string | null
    receiptMime?: string | null
    receiptSize?: number | null
    createdAt?: Date | string
  }

  export type UnitOccupancyCreateManyReservationInput = {
    id?: string
    unitId: string
    type: $Enums.OccupancyType
    checkIn: Date | string
    checkOut: Date | string
    lockToken?: string | null
    expiresAt?: Date | string | null
    status?: $Enums.OccupancyStatus
    notes?: string | null
  }

  export type CompanionUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    docType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    docNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanionUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    docType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    docNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanionUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    docType?: NullableEnumDocTypeFieldUpdateOperationsInput | $Enums.DocType | null
    docNumber?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPath?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilename?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMime?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPath?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilename?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMime?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    receiptPath?: NullableStringFieldUpdateOperationsInput | string | null
    receiptFilename?: NullableStringFieldUpdateOperationsInput | string | null
    receiptMime?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitOccupancyUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumOccupancyTypeFieldUpdateOperationsInput | $Enums.OccupancyType
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    lockToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOccupancyStatusFieldUpdateOperationsInput | $Enums.OccupancyStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: UnitUpdateOneRequiredWithoutOccupanciesNestedInput
  }

  export type UnitOccupancyUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    type?: EnumOccupancyTypeFieldUpdateOperationsInput | $Enums.OccupancyType
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    lockToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOccupancyStatusFieldUpdateOperationsInput | $Enums.OccupancyStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitOccupancyUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    type?: EnumOccupancyTypeFieldUpdateOperationsInput | $Enums.OccupancyType
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    lockToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumOccupancyStatusFieldUpdateOperationsInput | $Enums.OccupancyStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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