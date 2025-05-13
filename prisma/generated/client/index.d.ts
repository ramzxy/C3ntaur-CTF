
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Challenge
 * 
 */
export type Challenge = $Result.DefaultSelection<Prisma.$ChallengePayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model GameConfig
 * 
 */
export type GameConfig = $Result.DefaultSelection<Prisma.$GameConfigPayload>
/**
 * Model ChallengeFile
 * 
 */
export type ChallengeFile = $Result.DefaultSelection<Prisma.$ChallengeFilePayload>
/**
 * Model Hint
 * 
 */
export type Hint = $Result.DefaultSelection<Prisma.$HintPayload>
/**
 * Model TeamHint
 * 
 */
export type TeamHint = $Result.DefaultSelection<Prisma.$TeamHintPayload>
/**
 * Model SiteConfig
 * 
 */
export type SiteConfig = $Result.DefaultSelection<Prisma.$SiteConfigPayload>
/**
 * Model Score
 * 
 */
export type Score = $Result.DefaultSelection<Prisma.$ScorePayload>
/**
 * Model UnlockCondition
 * 
 */
export type UnlockCondition = $Result.DefaultSelection<Prisma.$UnlockConditionPayload>
/**
 * Model ChallengeFlag
 * 
 */
export type ChallengeFlag = $Result.DefaultSelection<Prisma.$ChallengeFlagPayload>
/**
 * Model TeamPointHistory
 * 
 */
export type TeamPointHistory = $Result.DefaultSelection<Prisma.$TeamPointHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UnlockConditionType: {
  CHALLENGE_SOLVED: 'CHALLENGE_SOLVED',
  TIME_REMAINDER: 'TIME_REMAINDER'
};

export type UnlockConditionType = (typeof UnlockConditionType)[keyof typeof UnlockConditionType]

}

export type UnlockConditionType = $Enums.UnlockConditionType

export const UnlockConditionType: typeof $Enums.UnlockConditionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge`: Exposes CRUD operations for the **Challenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenge.findMany()
    * ```
    */
  get challenge(): Prisma.ChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameConfig`: Exposes CRUD operations for the **GameConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameConfigs
    * const gameConfigs = await prisma.gameConfig.findMany()
    * ```
    */
  get gameConfig(): Prisma.GameConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challengeFile`: Exposes CRUD operations for the **ChallengeFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeFiles
    * const challengeFiles = await prisma.challengeFile.findMany()
    * ```
    */
  get challengeFile(): Prisma.ChallengeFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hint`: Exposes CRUD operations for the **Hint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hints
    * const hints = await prisma.hint.findMany()
    * ```
    */
  get hint(): Prisma.HintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamHint`: Exposes CRUD operations for the **TeamHint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamHints
    * const teamHints = await prisma.teamHint.findMany()
    * ```
    */
  get teamHint(): Prisma.TeamHintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteConfig`: Exposes CRUD operations for the **SiteConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteConfigs
    * const siteConfigs = await prisma.siteConfig.findMany()
    * ```
    */
  get siteConfig(): Prisma.SiteConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.score`: Exposes CRUD operations for the **Score** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scores
    * const scores = await prisma.score.findMany()
    * ```
    */
  get score(): Prisma.ScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unlockCondition`: Exposes CRUD operations for the **UnlockCondition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnlockConditions
    * const unlockConditions = await prisma.unlockCondition.findMany()
    * ```
    */
  get unlockCondition(): Prisma.UnlockConditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challengeFlag`: Exposes CRUD operations for the **ChallengeFlag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeFlags
    * const challengeFlags = await prisma.challengeFlag.findMany()
    * ```
    */
  get challengeFlag(): Prisma.ChallengeFlagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamPointHistory`: Exposes CRUD operations for the **TeamPointHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamPointHistories
    * const teamPointHistories = await prisma.teamPointHistory.findMany()
    * ```
    */
  get teamPointHistory(): Prisma.TeamPointHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Team: 'Team',
    Challenge: 'Challenge',
    Submission: 'Submission',
    Announcement: 'Announcement',
    ActivityLog: 'ActivityLog',
    GameConfig: 'GameConfig',
    ChallengeFile: 'ChallengeFile',
    Hint: 'Hint',
    TeamHint: 'TeamHint',
    SiteConfig: 'SiteConfig',
    Score: 'Score',
    UnlockCondition: 'UnlockCondition',
    ChallengeFlag: 'ChallengeFlag',
    TeamPointHistory: 'TeamPointHistory'
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
      modelProps: "user" | "team" | "challenge" | "submission" | "announcement" | "activityLog" | "gameConfig" | "challengeFile" | "hint" | "teamHint" | "siteConfig" | "score" | "unlockCondition" | "challengeFlag" | "teamPointHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Challenge: {
        payload: Prisma.$ChallengePayload<ExtArgs>
        fields: Prisma.ChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          findMany: {
            args: Prisma.ChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          create: {
            args: Prisma.ChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          createMany: {
            args: Prisma.ChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          delete: {
            args: Prisma.ChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          update: {
            args: Prisma.ChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengePayload>
          }
          aggregate: {
            args: Prisma.ChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge>
          }
          groupBy: {
            args: Prisma.ChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      GameConfig: {
        payload: Prisma.$GameConfigPayload<ExtArgs>
        fields: Prisma.GameConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload>
          }
          findFirst: {
            args: Prisma.GameConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload>
          }
          findMany: {
            args: Prisma.GameConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload>[]
          }
          create: {
            args: Prisma.GameConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload>
          }
          createMany: {
            args: Prisma.GameConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload>[]
          }
          delete: {
            args: Prisma.GameConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload>
          }
          update: {
            args: Prisma.GameConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload>
          }
          deleteMany: {
            args: Prisma.GameConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload>[]
          }
          upsert: {
            args: Prisma.GameConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameConfigPayload>
          }
          aggregate: {
            args: Prisma.GameConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameConfig>
          }
          groupBy: {
            args: Prisma.GameConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameConfigCountArgs<ExtArgs>
            result: $Utils.Optional<GameConfigCountAggregateOutputType> | number
          }
        }
      }
      ChallengeFile: {
        payload: Prisma.$ChallengeFilePayload<ExtArgs>
        fields: Prisma.ChallengeFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload>
          }
          findFirst: {
            args: Prisma.ChallengeFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload>
          }
          findMany: {
            args: Prisma.ChallengeFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload>[]
          }
          create: {
            args: Prisma.ChallengeFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload>
          }
          createMany: {
            args: Prisma.ChallengeFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload>[]
          }
          delete: {
            args: Prisma.ChallengeFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload>
          }
          update: {
            args: Prisma.ChallengeFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload>
          }
          deleteMany: {
            args: Prisma.ChallengeFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload>[]
          }
          upsert: {
            args: Prisma.ChallengeFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFilePayload>
          }
          aggregate: {
            args: Prisma.ChallengeFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengeFile>
          }
          groupBy: {
            args: Prisma.ChallengeFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeFileCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeFileCountAggregateOutputType> | number
          }
        }
      }
      Hint: {
        payload: Prisma.$HintPayload<ExtArgs>
        fields: Prisma.HintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          findFirst: {
            args: Prisma.HintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          findMany: {
            args: Prisma.HintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[]
          }
          create: {
            args: Prisma.HintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          createMany: {
            args: Prisma.HintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[]
          }
          delete: {
            args: Prisma.HintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          update: {
            args: Prisma.HintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          deleteMany: {
            args: Prisma.HintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[]
          }
          upsert: {
            args: Prisma.HintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          aggregate: {
            args: Prisma.HintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHint>
          }
          groupBy: {
            args: Prisma.HintGroupByArgs<ExtArgs>
            result: $Utils.Optional<HintGroupByOutputType>[]
          }
          count: {
            args: Prisma.HintCountArgs<ExtArgs>
            result: $Utils.Optional<HintCountAggregateOutputType> | number
          }
        }
      }
      TeamHint: {
        payload: Prisma.$TeamHintPayload<ExtArgs>
        fields: Prisma.TeamHintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamHintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamHintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload>
          }
          findFirst: {
            args: Prisma.TeamHintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamHintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload>
          }
          findMany: {
            args: Prisma.TeamHintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload>[]
          }
          create: {
            args: Prisma.TeamHintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload>
          }
          createMany: {
            args: Prisma.TeamHintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamHintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload>[]
          }
          delete: {
            args: Prisma.TeamHintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload>
          }
          update: {
            args: Prisma.TeamHintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload>
          }
          deleteMany: {
            args: Prisma.TeamHintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamHintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamHintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload>[]
          }
          upsert: {
            args: Prisma.TeamHintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamHintPayload>
          }
          aggregate: {
            args: Prisma.TeamHintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamHint>
          }
          groupBy: {
            args: Prisma.TeamHintGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamHintGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamHintCountArgs<ExtArgs>
            result: $Utils.Optional<TeamHintCountAggregateOutputType> | number
          }
        }
      }
      SiteConfig: {
        payload: Prisma.$SiteConfigPayload<ExtArgs>
        fields: Prisma.SiteConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          findFirst: {
            args: Prisma.SiteConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          findMany: {
            args: Prisma.SiteConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>[]
          }
          create: {
            args: Prisma.SiteConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          createMany: {
            args: Prisma.SiteConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>[]
          }
          delete: {
            args: Prisma.SiteConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          update: {
            args: Prisma.SiteConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          deleteMany: {
            args: Prisma.SiteConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>[]
          }
          upsert: {
            args: Prisma.SiteConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          aggregate: {
            args: Prisma.SiteConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteConfig>
          }
          groupBy: {
            args: Prisma.SiteConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SiteConfigCountAggregateOutputType> | number
          }
        }
      }
      Score: {
        payload: Prisma.$ScorePayload<ExtArgs>
        fields: Prisma.ScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findFirst: {
            args: Prisma.ScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          findMany: {
            args: Prisma.ScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          create: {
            args: Prisma.ScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          createMany: {
            args: Prisma.ScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          delete: {
            args: Prisma.ScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          update: {
            args: Prisma.ScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          deleteMany: {
            args: Prisma.ScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>[]
          }
          upsert: {
            args: Prisma.ScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScorePayload>
          }
          aggregate: {
            args: Prisma.ScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScore>
          }
          groupBy: {
            args: Prisma.ScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreCountAggregateOutputType> | number
          }
        }
      }
      UnlockCondition: {
        payload: Prisma.$UnlockConditionPayload<ExtArgs>
        fields: Prisma.UnlockConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnlockConditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnlockConditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload>
          }
          findFirst: {
            args: Prisma.UnlockConditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnlockConditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload>
          }
          findMany: {
            args: Prisma.UnlockConditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload>[]
          }
          create: {
            args: Prisma.UnlockConditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload>
          }
          createMany: {
            args: Prisma.UnlockConditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnlockConditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload>[]
          }
          delete: {
            args: Prisma.UnlockConditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload>
          }
          update: {
            args: Prisma.UnlockConditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload>
          }
          deleteMany: {
            args: Prisma.UnlockConditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnlockConditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnlockConditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload>[]
          }
          upsert: {
            args: Prisma.UnlockConditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnlockConditionPayload>
          }
          aggregate: {
            args: Prisma.UnlockConditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnlockCondition>
          }
          groupBy: {
            args: Prisma.UnlockConditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnlockConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnlockConditionCountArgs<ExtArgs>
            result: $Utils.Optional<UnlockConditionCountAggregateOutputType> | number
          }
        }
      }
      ChallengeFlag: {
        payload: Prisma.$ChallengeFlagPayload<ExtArgs>
        fields: Prisma.ChallengeFlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeFlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeFlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload>
          }
          findFirst: {
            args: Prisma.ChallengeFlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeFlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload>
          }
          findMany: {
            args: Prisma.ChallengeFlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload>[]
          }
          create: {
            args: Prisma.ChallengeFlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload>
          }
          createMany: {
            args: Prisma.ChallengeFlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeFlagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload>[]
          }
          delete: {
            args: Prisma.ChallengeFlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload>
          }
          update: {
            args: Prisma.ChallengeFlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeFlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeFlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeFlagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload>[]
          }
          upsert: {
            args: Prisma.ChallengeFlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeFlagPayload>
          }
          aggregate: {
            args: Prisma.ChallengeFlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengeFlag>
          }
          groupBy: {
            args: Prisma.ChallengeFlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeFlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeFlagCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeFlagCountAggregateOutputType> | number
          }
        }
      }
      TeamPointHistory: {
        payload: Prisma.$TeamPointHistoryPayload<ExtArgs>
        fields: Prisma.TeamPointHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamPointHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamPointHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload>
          }
          findFirst: {
            args: Prisma.TeamPointHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamPointHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload>
          }
          findMany: {
            args: Prisma.TeamPointHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload>[]
          }
          create: {
            args: Prisma.TeamPointHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload>
          }
          createMany: {
            args: Prisma.TeamPointHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamPointHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload>[]
          }
          delete: {
            args: Prisma.TeamPointHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload>
          }
          update: {
            args: Prisma.TeamPointHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TeamPointHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamPointHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamPointHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TeamPointHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPointHistoryPayload>
          }
          aggregate: {
            args: Prisma.TeamPointHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamPointHistory>
          }
          groupBy: {
            args: Prisma.TeamPointHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamPointHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamPointHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TeamPointHistoryCountAggregateOutputType> | number
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
    user?: UserOmit
    team?: TeamOmit
    challenge?: ChallengeOmit
    submission?: SubmissionOmit
    announcement?: AnnouncementOmit
    activityLog?: ActivityLogOmit
    gameConfig?: GameConfigOmit
    challengeFile?: ChallengeFileOmit
    hint?: HintOmit
    teamHint?: TeamHintOmit
    siteConfig?: SiteConfigOmit
    score?: ScoreOmit
    unlockCondition?: UnlockConditionOmit
    challengeFlag?: ChallengeFlagOmit
    teamPointHistory?: TeamPointHistoryOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submissions: number
    scores: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    scores?: boolean | UserCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    ActivityLog: number
    submissions: number
    scores: number
    teamHints: number
    members: number
    pointHistory: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ActivityLog?: boolean | TeamCountOutputTypeCountActivityLogArgs
    submissions?: boolean | TeamCountOutputTypeCountSubmissionsArgs
    scores?: boolean | TeamCountOutputTypeCountScoresArgs
    teamHints?: boolean | TeamCountOutputTypeCountTeamHintsArgs
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    pointHistory?: boolean | TeamCountOutputTypeCountPointHistoryArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeamHintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamHintWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPointHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamPointHistoryWhereInput
  }


  /**
   * Count Type ChallengeCountOutputType
   */

  export type ChallengeCountOutputType = {
    flags: number
    unlockConditions: number
    files: number
    hints: number
    submissions: number
    scores: number
  }

  export type ChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flags?: boolean | ChallengeCountOutputTypeCountFlagsArgs
    unlockConditions?: boolean | ChallengeCountOutputTypeCountUnlockConditionsArgs
    files?: boolean | ChallengeCountOutputTypeCountFilesArgs
    hints?: boolean | ChallengeCountOutputTypeCountHintsArgs
    submissions?: boolean | ChallengeCountOutputTypeCountSubmissionsArgs
    scores?: boolean | ChallengeCountOutputTypeCountScoresArgs
  }

  // Custom InputTypes
  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeCountOutputType
     */
    select?: ChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeFlagWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountUnlockConditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnlockConditionWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeFileWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountHintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HintWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * ChallengeCountOutputType without action
   */
  export type ChallengeCountOutputTypeCountScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
  }


  /**
   * Count Type HintCountOutputType
   */

  export type HintCountOutputType = {
    teamHints: number
  }

  export type HintCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamHints?: boolean | HintCountOutputTypeCountTeamHintsArgs
  }

  // Custom InputTypes
  /**
   * HintCountOutputType without action
   */
  export type HintCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HintCountOutputType
     */
    select?: HintCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HintCountOutputType without action
   */
  export type HintCountOutputTypeCountTeamHintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamHintWhereInput
  }


  /**
   * Count Type ChallengeFlagCountOutputType
   */

  export type ChallengeFlagCountOutputType = {
    submissions: number
  }

  export type ChallengeFlagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | ChallengeFlagCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * ChallengeFlagCountOutputType without action
   */
  export type ChallengeFlagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlagCountOutputType
     */
    select?: ChallengeFlagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengeFlagCountOutputType without action
   */
  export type ChallengeFlagCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    alias: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teamId: string | null
    isTeamLeader: boolean | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    alias: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teamId: string | null
    isTeamLeader: boolean | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    alias: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    teamId: number
    isTeamLeader: number
    isAdmin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    alias?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    teamId?: true
    isTeamLeader?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    alias?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    teamId?: true
    isTeamLeader?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    alias?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    teamId?: true
    isTeamLeader?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    alias: string
    password: string
    name: string
    createdAt: Date
    updatedAt: Date
    teamId: string | null
    isTeamLeader: boolean
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alias?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teamId?: boolean
    isTeamLeader?: boolean
    isAdmin?: boolean
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    scores?: boolean | User$scoresArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alias?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teamId?: boolean
    isTeamLeader?: boolean
    isAdmin?: boolean
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alias?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teamId?: boolean
    isTeamLeader?: boolean
    isAdmin?: boolean
    team?: boolean | User$teamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    alias?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teamId?: boolean
    isTeamLeader?: boolean
    isAdmin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alias" | "password" | "name" | "createdAt" | "updatedAt" | "teamId" | "isTeamLeader" | "isAdmin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    scores?: boolean | User$scoresArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | User$teamArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | User$teamArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      scores: Prisma.$ScorePayload<ExtArgs>[]
      team: Prisma.$TeamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alias: string
      password: string
      name: string
      createdAt: Date
      updatedAt: Date
      teamId: string | null
      isTeamLeader: boolean
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scores<T extends User$scoresArgs<ExtArgs> = {}>(args?: Subset<T, User$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    team<T extends User$teamArgs<ExtArgs> = {}>(args?: Subset<T, User$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly alias: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly teamId: FieldRef<"User", 'String'>
    readonly isTeamLeader: FieldRef<"User", 'Boolean'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.scores
   */
  export type User$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * User.team
   */
  export type User$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    score: number | null
  }

  export type TeamSumAggregateOutputType = {
    score: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    icon: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    score: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    icon: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    score: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    code: number
    icon: number
    color: number
    createdAt: number
    updatedAt: number
    score: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    score?: true
  }

  export type TeamSumAggregateInputType = {
    score?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    icon?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    score?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    icon?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    score?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    icon?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    score?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    code: string
    icon: string
    color: string
    createdAt: Date
    updatedAt: Date
    score: number
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    icon?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    score?: boolean
    ActivityLog?: boolean | Team$ActivityLogArgs<ExtArgs>
    submissions?: boolean | Team$submissionsArgs<ExtArgs>
    scores?: boolean | Team$scoresArgs<ExtArgs>
    teamHints?: boolean | Team$teamHintsArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    pointHistory?: boolean | Team$pointHistoryArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    icon?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    score?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    icon?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    score?: boolean
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    icon?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    score?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "icon" | "color" | "createdAt" | "updatedAt" | "score", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ActivityLog?: boolean | Team$ActivityLogArgs<ExtArgs>
    submissions?: boolean | Team$submissionsArgs<ExtArgs>
    scores?: boolean | Team$scoresArgs<ExtArgs>
    teamHints?: boolean | Team$teamHintsArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    pointHistory?: boolean | Team$pointHistoryArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      ActivityLog: Prisma.$ActivityLogPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      scores: Prisma.$ScorePayload<ExtArgs>[]
      teamHints: Prisma.$TeamHintPayload<ExtArgs>[]
      members: Prisma.$UserPayload<ExtArgs>[]
      pointHistory: Prisma.$TeamPointHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      icon: string
      color: string
      createdAt: Date
      updatedAt: Date
      score: number
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ActivityLog<T extends Team$ActivityLogArgs<ExtArgs> = {}>(args?: Subset<T, Team$ActivityLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Team$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Team$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scores<T extends Team$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Team$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamHints<T extends Team$teamHintsArgs<ExtArgs> = {}>(args?: Subset<T, Team$teamHintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pointHistory<T extends Team$pointHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Team$pointHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly code: FieldRef<"Team", 'String'>
    readonly icon: FieldRef<"Team", 'String'>
    readonly color: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
    readonly score: FieldRef<"Team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.ActivityLog
   */
  export type Team$ActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * Team.submissions
   */
  export type Team$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Team.scores
   */
  export type Team$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Team.teamHints
   */
  export type Team$teamHintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    where?: TeamHintWhereInput
    orderBy?: TeamHintOrderByWithRelationInput | TeamHintOrderByWithRelationInput[]
    cursor?: TeamHintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamHintScalarFieldEnum | TeamHintScalarFieldEnum[]
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team.pointHistory
   */
  export type Team$pointHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
    where?: TeamPointHistoryWhereInput
    orderBy?: TeamPointHistoryOrderByWithRelationInput | TeamPointHistoryOrderByWithRelationInput[]
    cursor?: TeamPointHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamPointHistoryScalarFieldEnum | TeamPointHistoryScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Challenge
   */

  export type AggregateChallenge = {
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  export type ChallengeAvgAggregateOutputType = {
    points: number | null
  }

  export type ChallengeSumAggregateOutputType = {
    points: number | null
  }

  export type ChallengeMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    points: number | null
    flag: string | null
    multipleFlags: boolean | null
    category: string | null
    difficulty: string | null
    isActive: boolean | null
    isLocked: boolean | null
    link: string | null
    solveExplanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    points: number | null
    flag: string | null
    multipleFlags: boolean | null
    category: string | null
    difficulty: string | null
    isActive: boolean | null
    isLocked: boolean | null
    link: string | null
    solveExplanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    points: number
    flag: number
    multipleFlags: number
    category: number
    difficulty: number
    isActive: number
    isLocked: number
    link: number
    solveExplanation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengeAvgAggregateInputType = {
    points?: true
  }

  export type ChallengeSumAggregateInputType = {
    points?: true
  }

  export type ChallengeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    points?: true
    flag?: true
    multipleFlags?: true
    category?: true
    difficulty?: true
    isActive?: true
    isLocked?: true
    link?: true
    solveExplanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    points?: true
    flag?: true
    multipleFlags?: true
    category?: true
    difficulty?: true
    isActive?: true
    isLocked?: true
    link?: true
    solveExplanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    points?: true
    flag?: true
    multipleFlags?: true
    category?: true
    difficulty?: true
    isActive?: true
    isLocked?: true
    link?: true
    solveExplanation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenge to aggregate.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challenges
    **/
    _count?: true | ChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeMaxAggregateInputType
  }

  export type GetChallengeAggregateType<T extends ChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge[P]>
      : GetScalarType<T[P], AggregateChallenge[P]>
  }




  export type ChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeWhereInput
    orderBy?: ChallengeOrderByWithAggregationInput | ChallengeOrderByWithAggregationInput[]
    by: ChallengeScalarFieldEnum[] | ChallengeScalarFieldEnum
    having?: ChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeCountAggregateInputType | true
    _avg?: ChallengeAvgAggregateInputType
    _sum?: ChallengeSumAggregateInputType
    _min?: ChallengeMinAggregateInputType
    _max?: ChallengeMaxAggregateInputType
  }

  export type ChallengeGroupByOutputType = {
    id: string
    title: string
    description: string
    points: number
    flag: string | null
    multipleFlags: boolean
    category: string
    difficulty: string
    isActive: boolean
    isLocked: boolean
    link: string | null
    solveExplanation: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChallengeCountAggregateOutputType | null
    _avg: ChallengeAvgAggregateOutputType | null
    _sum: ChallengeSumAggregateOutputType | null
    _min: ChallengeMinAggregateOutputType | null
    _max: ChallengeMaxAggregateOutputType | null
  }

  type GetChallengeGroupByPayload<T extends ChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    points?: boolean
    flag?: boolean
    multipleFlags?: boolean
    category?: boolean
    difficulty?: boolean
    isActive?: boolean
    isLocked?: boolean
    link?: boolean
    solveExplanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flags?: boolean | Challenge$flagsArgs<ExtArgs>
    unlockConditions?: boolean | Challenge$unlockConditionsArgs<ExtArgs>
    files?: boolean | Challenge$filesArgs<ExtArgs>
    hints?: boolean | Challenge$hintsArgs<ExtArgs>
    submissions?: boolean | Challenge$submissionsArgs<ExtArgs>
    scores?: boolean | Challenge$scoresArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    points?: boolean
    flag?: boolean
    multipleFlags?: boolean
    category?: boolean
    difficulty?: boolean
    isActive?: boolean
    isLocked?: boolean
    link?: boolean
    solveExplanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    points?: boolean
    flag?: boolean
    multipleFlags?: boolean
    category?: boolean
    difficulty?: boolean
    isActive?: boolean
    isLocked?: boolean
    link?: boolean
    solveExplanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["challenge"]>

  export type ChallengeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    points?: boolean
    flag?: boolean
    multipleFlags?: boolean
    category?: boolean
    difficulty?: boolean
    isActive?: boolean
    isLocked?: boolean
    link?: boolean
    solveExplanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "points" | "flag" | "multipleFlags" | "category" | "difficulty" | "isActive" | "isLocked" | "link" | "solveExplanation" | "createdAt" | "updatedAt", ExtArgs["result"]["challenge"]>
  export type ChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flags?: boolean | Challenge$flagsArgs<ExtArgs>
    unlockConditions?: boolean | Challenge$unlockConditionsArgs<ExtArgs>
    files?: boolean | Challenge$filesArgs<ExtArgs>
    hints?: boolean | Challenge$hintsArgs<ExtArgs>
    submissions?: boolean | Challenge$submissionsArgs<ExtArgs>
    scores?: boolean | Challenge$scoresArgs<ExtArgs>
    _count?: boolean | ChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challenge"
    objects: {
      flags: Prisma.$ChallengeFlagPayload<ExtArgs>[]
      unlockConditions: Prisma.$UnlockConditionPayload<ExtArgs>[]
      files: Prisma.$ChallengeFilePayload<ExtArgs>[]
      hints: Prisma.$HintPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      scores: Prisma.$ScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      points: number
      flag: string | null
      multipleFlags: boolean
      category: string
      difficulty: string
      isActive: boolean
      isLocked: boolean
      link: string | null
      solveExplanation: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challenge"]>
    composites: {}
  }

  type ChallengeGetPayload<S extends boolean | null | undefined | ChallengeDefaultArgs> = $Result.GetResult<Prisma.$ChallengePayload, S>

  type ChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeCountAggregateInputType | true
    }

  export interface ChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challenge'], meta: { name: 'Challenge' } }
    /**
     * Find zero or one Challenge that matches the filter.
     * @param {ChallengeFindUniqueArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFindUniqueArgs>(args: SelectSubset<T, ChallengeFindUniqueArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFindUniqueOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFindFirstArgs>(args?: SelectSubset<T, ChallengeFindFirstArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindFirstOrThrowArgs} args - Arguments to find a Challenge
     * @example
     * // Get one Challenge
     * const challenge = await prisma.challenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenge.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeWithIdOnly = await prisma.challenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFindManyArgs>(args?: SelectSubset<T, ChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge.
     * @param {ChallengeCreateArgs} args - Arguments to create a Challenge.
     * @example
     * // Create one Challenge
     * const Challenge = await prisma.challenge.create({
     *   data: {
     *     // ... data to create a Challenge
     *   }
     * })
     * 
     */
    create<T extends ChallengeCreateArgs>(args: SelectSubset<T, ChallengeCreateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {ChallengeCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeCreateManyArgs>(args?: SelectSubset<T, ChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {ChallengeCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenge = await prisma.challenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge.
     * @param {ChallengeDeleteArgs} args - Arguments to delete one Challenge.
     * @example
     * // Delete one Challenge
     * const Challenge = await prisma.challenge.delete({
     *   where: {
     *     // ... filter to delete one Challenge
     *   }
     * })
     * 
     */
    delete<T extends ChallengeDeleteArgs>(args: SelectSubset<T, ChallengeDeleteArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge.
     * @param {ChallengeUpdateArgs} args - Arguments to update one Challenge.
     * @example
     * // Update one Challenge
     * const challenge = await prisma.challenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeUpdateArgs>(args: SelectSubset<T, ChallengeUpdateArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {ChallengeDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeDeleteManyArgs>(args?: SelectSubset<T, ChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeUpdateManyArgs>(args: SelectSubset<T, ChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {ChallengeUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenge = await prisma.challenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengeWithIdOnly = await prisma.challenge.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge.
     * @param {ChallengeUpsertArgs} args - Arguments to update or create a Challenge.
     * @example
     * // Update or create a Challenge
     * const challenge = await prisma.challenge.upsert({
     *   create: {
     *     // ... data to create a Challenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeUpsertArgs>(args: SelectSubset<T, ChallengeUpsertArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenge.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends ChallengeCountArgs>(
      args?: Subset<T, ChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeAggregateArgs>(args: Subset<T, ChallengeAggregateArgs>): Prisma.PrismaPromise<GetChallengeAggregateType<T>>

    /**
     * Group by Challenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeGroupByArgs} args - Group by arguments.
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
      T extends ChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challenge model
   */
  readonly fields: ChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flags<T extends Challenge$flagsArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    unlockConditions<T extends Challenge$unlockConditionsArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$unlockConditionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Challenge$filesArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hints<T extends Challenge$hintsArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$hintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Challenge$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scores<T extends Challenge$scoresArgs<ExtArgs> = {}>(args?: Subset<T, Challenge$scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Challenge model
   */
  interface ChallengeFieldRefs {
    readonly id: FieldRef<"Challenge", 'String'>
    readonly title: FieldRef<"Challenge", 'String'>
    readonly description: FieldRef<"Challenge", 'String'>
    readonly points: FieldRef<"Challenge", 'Int'>
    readonly flag: FieldRef<"Challenge", 'String'>
    readonly multipleFlags: FieldRef<"Challenge", 'Boolean'>
    readonly category: FieldRef<"Challenge", 'String'>
    readonly difficulty: FieldRef<"Challenge", 'String'>
    readonly isActive: FieldRef<"Challenge", 'Boolean'>
    readonly isLocked: FieldRef<"Challenge", 'Boolean'>
    readonly link: FieldRef<"Challenge", 'String'>
    readonly solveExplanation: FieldRef<"Challenge", 'String'>
    readonly createdAt: FieldRef<"Challenge", 'DateTime'>
    readonly updatedAt: FieldRef<"Challenge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challenge findUnique
   */
  export type ChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findUniqueOrThrow
   */
  export type ChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge findFirst
   */
  export type ChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findFirstOrThrow
   */
  export type ChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenge to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challenges.
     */
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge findMany
   */
  export type ChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter, which Challenges to fetch.
     */
    where?: ChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challenges to fetch.
     */
    orderBy?: ChallengeOrderByWithRelationInput | ChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challenges.
     */
    cursor?: ChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challenges.
     */
    skip?: number
    distinct?: ChallengeScalarFieldEnum | ChallengeScalarFieldEnum[]
  }

  /**
   * Challenge create
   */
  export type ChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a Challenge.
     */
    data: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
  }

  /**
   * Challenge createMany
   */
  export type ChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
  }

  /**
   * Challenge createManyAndReturn
   */
  export type ChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many Challenges.
     */
    data: ChallengeCreateManyInput | ChallengeCreateManyInput[]
  }

  /**
   * Challenge update
   */
  export type ChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a Challenge.
     */
    data: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
    /**
     * Choose, which Challenge to update.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge updateMany
   */
  export type ChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge updateManyAndReturn
   */
  export type ChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * The data used to update Challenges.
     */
    data: XOR<ChallengeUpdateManyMutationInput, ChallengeUncheckedUpdateManyInput>
    /**
     * Filter which Challenges to update
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to update.
     */
    limit?: number
  }

  /**
   * Challenge upsert
   */
  export type ChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the Challenge to update in case it exists.
     */
    where: ChallengeWhereUniqueInput
    /**
     * In case the Challenge found by the `where` argument doesn't exist, create a new Challenge with this data.
     */
    create: XOR<ChallengeCreateInput, ChallengeUncheckedCreateInput>
    /**
     * In case the Challenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeUpdateInput, ChallengeUncheckedUpdateInput>
  }

  /**
   * Challenge delete
   */
  export type ChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
    /**
     * Filter which Challenge to delete.
     */
    where: ChallengeWhereUniqueInput
  }

  /**
   * Challenge deleteMany
   */
  export type ChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challenges to delete
     */
    where?: ChallengeWhereInput
    /**
     * Limit how many Challenges to delete.
     */
    limit?: number
  }

  /**
   * Challenge.flags
   */
  export type Challenge$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    where?: ChallengeFlagWhereInput
    orderBy?: ChallengeFlagOrderByWithRelationInput | ChallengeFlagOrderByWithRelationInput[]
    cursor?: ChallengeFlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeFlagScalarFieldEnum | ChallengeFlagScalarFieldEnum[]
  }

  /**
   * Challenge.unlockConditions
   */
  export type Challenge$unlockConditionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
    where?: UnlockConditionWhereInput
    orderBy?: UnlockConditionOrderByWithRelationInput | UnlockConditionOrderByWithRelationInput[]
    cursor?: UnlockConditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnlockConditionScalarFieldEnum | UnlockConditionScalarFieldEnum[]
  }

  /**
   * Challenge.files
   */
  export type Challenge$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
    where?: ChallengeFileWhereInput
    orderBy?: ChallengeFileOrderByWithRelationInput | ChallengeFileOrderByWithRelationInput[]
    cursor?: ChallengeFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeFileScalarFieldEnum | ChallengeFileScalarFieldEnum[]
  }

  /**
   * Challenge.hints
   */
  export type Challenge$hintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    where?: HintWhereInput
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    cursor?: HintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Challenge.submissions
   */
  export type Challenge$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Challenge.scores
   */
  export type Challenge$scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    cursor?: ScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Challenge without action
   */
  export type ChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challenge
     */
    select?: ChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Challenge
     */
    omit?: ChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    flag: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    challengeId: string | null
    flagId: string | null
    teamId: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    flag: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    challengeId: string | null
    flagId: string | null
    teamId: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    flag: number
    isCorrect: number
    createdAt: number
    updatedAt: number
    userId: number
    challengeId: number
    flagId: number
    teamId: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    flag?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    challengeId?: true
    flagId?: true
    teamId?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    flag?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    challengeId?: true
    flagId?: true
    teamId?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    flag?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    challengeId?: true
    flagId?: true
    teamId?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    flag: string
    isCorrect: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    challengeId: string
    flagId: string | null
    teamId: string
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flag?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    challengeId?: boolean
    flagId?: boolean
    teamId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    challengeFlag?: boolean | Submission$challengeFlagArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flag?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    challengeId?: boolean
    flagId?: boolean
    teamId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    challengeFlag?: boolean | Submission$challengeFlagArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flag?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    challengeId?: boolean
    flagId?: boolean
    teamId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    challengeFlag?: boolean | Submission$challengeFlagArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    flag?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    challengeId?: boolean
    flagId?: boolean
    teamId?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flag" | "isCorrect" | "createdAt" | "updatedAt" | "userId" | "challengeId" | "flagId" | "teamId", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    challengeFlag?: boolean | Submission$challengeFlagArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    challengeFlag?: boolean | Submission$challengeFlagArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    challengeFlag?: boolean | Submission$challengeFlagArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      challengeFlag: Prisma.$ChallengeFlagPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flag: string
      isCorrect: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
      challengeId: string
      flagId: string | null
      teamId: string
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challengeFlag<T extends Submission$challengeFlagArgs<ExtArgs> = {}>(args?: Subset<T, Submission$challengeFlagArgs<ExtArgs>>): Prisma__ChallengeFlagClient<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly flag: FieldRef<"Submission", 'String'>
    readonly isCorrect: FieldRef<"Submission", 'Boolean'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly challengeId: FieldRef<"Submission", 'String'>
    readonly flagId: FieldRef<"Submission", 'String'>
    readonly teamId: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.challengeFlag
   */
  export type Submission$challengeFlagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    where?: ChallengeFlagWhereInput
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["announcement"]>

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly updatedAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    type: string | null
    description: string | null
    teamId: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    type: string | null
    description: string | null
    teamId: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    type: number
    description: number
    teamId: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    type?: true
    description?: true
    teamId?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    type?: true
    description?: true
    teamId?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    type?: true
    description?: true
    teamId?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    type: string
    description: string
    teamId: string | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    teamId?: boolean
    createdAt?: boolean
    team?: boolean | ActivityLog$teamArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    teamId?: boolean
    createdAt?: boolean
    team?: boolean | ActivityLog$teamArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    description?: boolean
    teamId?: boolean
    createdAt?: boolean
    team?: boolean | ActivityLog$teamArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    type?: boolean
    description?: boolean
    teamId?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "description" | "teamId" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | ActivityLog$teamArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | ActivityLog$teamArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | ActivityLog$teamArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      description: string
      teamId: string | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends ActivityLog$teamArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly type: FieldRef<"ActivityLog", 'String'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly teamId: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.team
   */
  export type ActivityLog$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model GameConfig
   */

  export type AggregateGameConfig = {
    _count: GameConfigCountAggregateOutputType | null
    _min: GameConfigMinAggregateOutputType | null
    _max: GameConfigMaxAggregateOutputType | null
  }

  export type GameConfigMinAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameConfigMaxAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameConfigCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameConfigMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameConfigMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameConfigCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameConfig to aggregate.
     */
    where?: GameConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameConfigs to fetch.
     */
    orderBy?: GameConfigOrderByWithRelationInput | GameConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameConfigs
    **/
    _count?: true | GameConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameConfigMaxAggregateInputType
  }

  export type GetGameConfigAggregateType<T extends GameConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateGameConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameConfig[P]>
      : GetScalarType<T[P], AggregateGameConfig[P]>
  }




  export type GameConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameConfigWhereInput
    orderBy?: GameConfigOrderByWithAggregationInput | GameConfigOrderByWithAggregationInput[]
    by: GameConfigScalarFieldEnum[] | GameConfigScalarFieldEnum
    having?: GameConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameConfigCountAggregateInputType | true
    _min?: GameConfigMinAggregateInputType
    _max?: GameConfigMaxAggregateInputType
  }

  export type GameConfigGroupByOutputType = {
    id: string
    startTime: Date
    endTime: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: GameConfigCountAggregateOutputType | null
    _min: GameConfigMinAggregateOutputType | null
    _max: GameConfigMaxAggregateOutputType | null
  }

  type GetGameConfigGroupByPayload<T extends GameConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameConfigGroupByOutputType[P]>
            : GetScalarType<T[P], GameConfigGroupByOutputType[P]>
        }
      >
    >


  export type GameConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameConfig"]>

  export type GameConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameConfig"]>

  export type GameConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameConfig"]>

  export type GameConfigSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startTime" | "endTime" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["gameConfig"]>

  export type $GameConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTime: Date
      endTime: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameConfig"]>
    composites: {}
  }

  type GameConfigGetPayload<S extends boolean | null | undefined | GameConfigDefaultArgs> = $Result.GetResult<Prisma.$GameConfigPayload, S>

  type GameConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameConfigCountAggregateInputType | true
    }

  export interface GameConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameConfig'], meta: { name: 'GameConfig' } }
    /**
     * Find zero or one GameConfig that matches the filter.
     * @param {GameConfigFindUniqueArgs} args - Arguments to find a GameConfig
     * @example
     * // Get one GameConfig
     * const gameConfig = await prisma.gameConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameConfigFindUniqueArgs>(args: SelectSubset<T, GameConfigFindUniqueArgs<ExtArgs>>): Prisma__GameConfigClient<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameConfigFindUniqueOrThrowArgs} args - Arguments to find a GameConfig
     * @example
     * // Get one GameConfig
     * const gameConfig = await prisma.gameConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, GameConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameConfigClient<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameConfigFindFirstArgs} args - Arguments to find a GameConfig
     * @example
     * // Get one GameConfig
     * const gameConfig = await prisma.gameConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameConfigFindFirstArgs>(args?: SelectSubset<T, GameConfigFindFirstArgs<ExtArgs>>): Prisma__GameConfigClient<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameConfigFindFirstOrThrowArgs} args - Arguments to find a GameConfig
     * @example
     * // Get one GameConfig
     * const gameConfig = await prisma.gameConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, GameConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameConfigClient<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameConfigs
     * const gameConfigs = await prisma.gameConfig.findMany()
     * 
     * // Get first 10 GameConfigs
     * const gameConfigs = await prisma.gameConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameConfigWithIdOnly = await prisma.gameConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameConfigFindManyArgs>(args?: SelectSubset<T, GameConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameConfig.
     * @param {GameConfigCreateArgs} args - Arguments to create a GameConfig.
     * @example
     * // Create one GameConfig
     * const GameConfig = await prisma.gameConfig.create({
     *   data: {
     *     // ... data to create a GameConfig
     *   }
     * })
     * 
     */
    create<T extends GameConfigCreateArgs>(args: SelectSubset<T, GameConfigCreateArgs<ExtArgs>>): Prisma__GameConfigClient<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameConfigs.
     * @param {GameConfigCreateManyArgs} args - Arguments to create many GameConfigs.
     * @example
     * // Create many GameConfigs
     * const gameConfig = await prisma.gameConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameConfigCreateManyArgs>(args?: SelectSubset<T, GameConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameConfigs and returns the data saved in the database.
     * @param {GameConfigCreateManyAndReturnArgs} args - Arguments to create many GameConfigs.
     * @example
     * // Create many GameConfigs
     * const gameConfig = await prisma.gameConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameConfigs and only return the `id`
     * const gameConfigWithIdOnly = await prisma.gameConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, GameConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameConfig.
     * @param {GameConfigDeleteArgs} args - Arguments to delete one GameConfig.
     * @example
     * // Delete one GameConfig
     * const GameConfig = await prisma.gameConfig.delete({
     *   where: {
     *     // ... filter to delete one GameConfig
     *   }
     * })
     * 
     */
    delete<T extends GameConfigDeleteArgs>(args: SelectSubset<T, GameConfigDeleteArgs<ExtArgs>>): Prisma__GameConfigClient<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameConfig.
     * @param {GameConfigUpdateArgs} args - Arguments to update one GameConfig.
     * @example
     * // Update one GameConfig
     * const gameConfig = await prisma.gameConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameConfigUpdateArgs>(args: SelectSubset<T, GameConfigUpdateArgs<ExtArgs>>): Prisma__GameConfigClient<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameConfigs.
     * @param {GameConfigDeleteManyArgs} args - Arguments to filter GameConfigs to delete.
     * @example
     * // Delete a few GameConfigs
     * const { count } = await prisma.gameConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameConfigDeleteManyArgs>(args?: SelectSubset<T, GameConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameConfigs
     * const gameConfig = await prisma.gameConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameConfigUpdateManyArgs>(args: SelectSubset<T, GameConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameConfigs and returns the data updated in the database.
     * @param {GameConfigUpdateManyAndReturnArgs} args - Arguments to update many GameConfigs.
     * @example
     * // Update many GameConfigs
     * const gameConfig = await prisma.gameConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameConfigs and only return the `id`
     * const gameConfigWithIdOnly = await prisma.gameConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, GameConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameConfig.
     * @param {GameConfigUpsertArgs} args - Arguments to update or create a GameConfig.
     * @example
     * // Update or create a GameConfig
     * const gameConfig = await prisma.gameConfig.upsert({
     *   create: {
     *     // ... data to create a GameConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameConfig we want to update
     *   }
     * })
     */
    upsert<T extends GameConfigUpsertArgs>(args: SelectSubset<T, GameConfigUpsertArgs<ExtArgs>>): Prisma__GameConfigClient<$Result.GetResult<Prisma.$GameConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameConfigCountArgs} args - Arguments to filter GameConfigs to count.
     * @example
     * // Count the number of GameConfigs
     * const count = await prisma.gameConfig.count({
     *   where: {
     *     // ... the filter for the GameConfigs we want to count
     *   }
     * })
    **/
    count<T extends GameConfigCountArgs>(
      args?: Subset<T, GameConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameConfigAggregateArgs>(args: Subset<T, GameConfigAggregateArgs>): Prisma.PrismaPromise<GetGameConfigAggregateType<T>>

    /**
     * Group by GameConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameConfigGroupByArgs} args - Group by arguments.
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
      T extends GameConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameConfigGroupByArgs['orderBy'] }
        : { orderBy?: GameConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameConfig model
   */
  readonly fields: GameConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GameConfig model
   */
  interface GameConfigFieldRefs {
    readonly id: FieldRef<"GameConfig", 'String'>
    readonly startTime: FieldRef<"GameConfig", 'DateTime'>
    readonly endTime: FieldRef<"GameConfig", 'DateTime'>
    readonly isActive: FieldRef<"GameConfig", 'Boolean'>
    readonly createdAt: FieldRef<"GameConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"GameConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameConfig findUnique
   */
  export type GameConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * Filter, which GameConfig to fetch.
     */
    where: GameConfigWhereUniqueInput
  }

  /**
   * GameConfig findUniqueOrThrow
   */
  export type GameConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * Filter, which GameConfig to fetch.
     */
    where: GameConfigWhereUniqueInput
  }

  /**
   * GameConfig findFirst
   */
  export type GameConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * Filter, which GameConfig to fetch.
     */
    where?: GameConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameConfigs to fetch.
     */
    orderBy?: GameConfigOrderByWithRelationInput | GameConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameConfigs.
     */
    cursor?: GameConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameConfigs.
     */
    distinct?: GameConfigScalarFieldEnum | GameConfigScalarFieldEnum[]
  }

  /**
   * GameConfig findFirstOrThrow
   */
  export type GameConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * Filter, which GameConfig to fetch.
     */
    where?: GameConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameConfigs to fetch.
     */
    orderBy?: GameConfigOrderByWithRelationInput | GameConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameConfigs.
     */
    cursor?: GameConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameConfigs.
     */
    distinct?: GameConfigScalarFieldEnum | GameConfigScalarFieldEnum[]
  }

  /**
   * GameConfig findMany
   */
  export type GameConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * Filter, which GameConfigs to fetch.
     */
    where?: GameConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameConfigs to fetch.
     */
    orderBy?: GameConfigOrderByWithRelationInput | GameConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameConfigs.
     */
    cursor?: GameConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameConfigs.
     */
    skip?: number
    distinct?: GameConfigScalarFieldEnum | GameConfigScalarFieldEnum[]
  }

  /**
   * GameConfig create
   */
  export type GameConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a GameConfig.
     */
    data: XOR<GameConfigCreateInput, GameConfigUncheckedCreateInput>
  }

  /**
   * GameConfig createMany
   */
  export type GameConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameConfigs.
     */
    data: GameConfigCreateManyInput | GameConfigCreateManyInput[]
  }

  /**
   * GameConfig createManyAndReturn
   */
  export type GameConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * The data used to create many GameConfigs.
     */
    data: GameConfigCreateManyInput | GameConfigCreateManyInput[]
  }

  /**
   * GameConfig update
   */
  export type GameConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a GameConfig.
     */
    data: XOR<GameConfigUpdateInput, GameConfigUncheckedUpdateInput>
    /**
     * Choose, which GameConfig to update.
     */
    where: GameConfigWhereUniqueInput
  }

  /**
   * GameConfig updateMany
   */
  export type GameConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameConfigs.
     */
    data: XOR<GameConfigUpdateManyMutationInput, GameConfigUncheckedUpdateManyInput>
    /**
     * Filter which GameConfigs to update
     */
    where?: GameConfigWhereInput
    /**
     * Limit how many GameConfigs to update.
     */
    limit?: number
  }

  /**
   * GameConfig updateManyAndReturn
   */
  export type GameConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * The data used to update GameConfigs.
     */
    data: XOR<GameConfigUpdateManyMutationInput, GameConfigUncheckedUpdateManyInput>
    /**
     * Filter which GameConfigs to update
     */
    where?: GameConfigWhereInput
    /**
     * Limit how many GameConfigs to update.
     */
    limit?: number
  }

  /**
   * GameConfig upsert
   */
  export type GameConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the GameConfig to update in case it exists.
     */
    where: GameConfigWhereUniqueInput
    /**
     * In case the GameConfig found by the `where` argument doesn't exist, create a new GameConfig with this data.
     */
    create: XOR<GameConfigCreateInput, GameConfigUncheckedCreateInput>
    /**
     * In case the GameConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameConfigUpdateInput, GameConfigUncheckedUpdateInput>
  }

  /**
   * GameConfig delete
   */
  export type GameConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
    /**
     * Filter which GameConfig to delete.
     */
    where: GameConfigWhereUniqueInput
  }

  /**
   * GameConfig deleteMany
   */
  export type GameConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameConfigs to delete
     */
    where?: GameConfigWhereInput
    /**
     * Limit how many GameConfigs to delete.
     */
    limit?: number
  }

  /**
   * GameConfig without action
   */
  export type GameConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameConfig
     */
    select?: GameConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameConfig
     */
    omit?: GameConfigOmit<ExtArgs> | null
  }


  /**
   * Model ChallengeFile
   */

  export type AggregateChallengeFile = {
    _count: ChallengeFileCountAggregateOutputType | null
    _avg: ChallengeFileAvgAggregateOutputType | null
    _sum: ChallengeFileSumAggregateOutputType | null
    _min: ChallengeFileMinAggregateOutputType | null
    _max: ChallengeFileMaxAggregateOutputType | null
  }

  export type ChallengeFileAvgAggregateOutputType = {
    size: number | null
  }

  export type ChallengeFileSumAggregateOutputType = {
    size: number | null
  }

  export type ChallengeFileMinAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    size: number | null
    createdAt: Date | null
    updatedAt: Date | null
    challengeId: string | null
  }

  export type ChallengeFileMaxAggregateOutputType = {
    id: string | null
    name: string | null
    path: string | null
    size: number | null
    createdAt: Date | null
    updatedAt: Date | null
    challengeId: string | null
  }

  export type ChallengeFileCountAggregateOutputType = {
    id: number
    name: number
    path: number
    size: number
    createdAt: number
    updatedAt: number
    challengeId: number
    _all: number
  }


  export type ChallengeFileAvgAggregateInputType = {
    size?: true
  }

  export type ChallengeFileSumAggregateInputType = {
    size?: true
  }

  export type ChallengeFileMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    size?: true
    createdAt?: true
    updatedAt?: true
    challengeId?: true
  }

  export type ChallengeFileMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    size?: true
    createdAt?: true
    updatedAt?: true
    challengeId?: true
  }

  export type ChallengeFileCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    size?: true
    createdAt?: true
    updatedAt?: true
    challengeId?: true
    _all?: true
  }

  export type ChallengeFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeFile to aggregate.
     */
    where?: ChallengeFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeFiles to fetch.
     */
    orderBy?: ChallengeFileOrderByWithRelationInput | ChallengeFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeFiles
    **/
    _count?: true | ChallengeFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeFileMaxAggregateInputType
  }

  export type GetChallengeFileAggregateType<T extends ChallengeFileAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeFile[P]>
      : GetScalarType<T[P], AggregateChallengeFile[P]>
  }




  export type ChallengeFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeFileWhereInput
    orderBy?: ChallengeFileOrderByWithAggregationInput | ChallengeFileOrderByWithAggregationInput[]
    by: ChallengeFileScalarFieldEnum[] | ChallengeFileScalarFieldEnum
    having?: ChallengeFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeFileCountAggregateInputType | true
    _avg?: ChallengeFileAvgAggregateInputType
    _sum?: ChallengeFileSumAggregateInputType
    _min?: ChallengeFileMinAggregateInputType
    _max?: ChallengeFileMaxAggregateInputType
  }

  export type ChallengeFileGroupByOutputType = {
    id: string
    name: string
    path: string
    size: number
    createdAt: Date
    updatedAt: Date
    challengeId: string
    _count: ChallengeFileCountAggregateOutputType | null
    _avg: ChallengeFileAvgAggregateOutputType | null
    _sum: ChallengeFileSumAggregateOutputType | null
    _min: ChallengeFileMinAggregateOutputType | null
    _max: ChallengeFileMaxAggregateOutputType | null
  }

  type GetChallengeFileGroupByPayload<T extends ChallengeFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeFileGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeFileGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    size?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengeId?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeFile"]>

  export type ChallengeFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    size?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengeId?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeFile"]>

  export type ChallengeFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    size?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengeId?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeFile"]>

  export type ChallengeFileSelectScalar = {
    id?: boolean
    name?: boolean
    path?: boolean
    size?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challengeId?: boolean
  }

  export type ChallengeFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "path" | "size" | "createdAt" | "updatedAt" | "challengeId", ExtArgs["result"]["challengeFile"]>
  export type ChallengeFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type ChallengeFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type ChallengeFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $ChallengeFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengeFile"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      path: string
      size: number
      createdAt: Date
      updatedAt: Date
      challengeId: string
    }, ExtArgs["result"]["challengeFile"]>
    composites: {}
  }

  type ChallengeFileGetPayload<S extends boolean | null | undefined | ChallengeFileDefaultArgs> = $Result.GetResult<Prisma.$ChallengeFilePayload, S>

  type ChallengeFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeFileCountAggregateInputType | true
    }

  export interface ChallengeFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeFile'], meta: { name: 'ChallengeFile' } }
    /**
     * Find zero or one ChallengeFile that matches the filter.
     * @param {ChallengeFileFindUniqueArgs} args - Arguments to find a ChallengeFile
     * @example
     * // Get one ChallengeFile
     * const challengeFile = await prisma.challengeFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFileFindUniqueArgs>(args: SelectSubset<T, ChallengeFileFindUniqueArgs<ExtArgs>>): Prisma__ChallengeFileClient<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChallengeFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFileFindUniqueOrThrowArgs} args - Arguments to find a ChallengeFile
     * @example
     * // Get one ChallengeFile
     * const challengeFile = await prisma.challengeFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFileFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeFileClient<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFileFindFirstArgs} args - Arguments to find a ChallengeFile
     * @example
     * // Get one ChallengeFile
     * const challengeFile = await prisma.challengeFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFileFindFirstArgs>(args?: SelectSubset<T, ChallengeFileFindFirstArgs<ExtArgs>>): Prisma__ChallengeFileClient<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFileFindFirstOrThrowArgs} args - Arguments to find a ChallengeFile
     * @example
     * // Get one ChallengeFile
     * const challengeFile = await prisma.challengeFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFileFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeFileClient<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChallengeFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeFiles
     * const challengeFiles = await prisma.challengeFile.findMany()
     * 
     * // Get first 10 ChallengeFiles
     * const challengeFiles = await prisma.challengeFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeFileWithIdOnly = await prisma.challengeFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFileFindManyArgs>(args?: SelectSubset<T, ChallengeFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChallengeFile.
     * @param {ChallengeFileCreateArgs} args - Arguments to create a ChallengeFile.
     * @example
     * // Create one ChallengeFile
     * const ChallengeFile = await prisma.challengeFile.create({
     *   data: {
     *     // ... data to create a ChallengeFile
     *   }
     * })
     * 
     */
    create<T extends ChallengeFileCreateArgs>(args: SelectSubset<T, ChallengeFileCreateArgs<ExtArgs>>): Prisma__ChallengeFileClient<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChallengeFiles.
     * @param {ChallengeFileCreateManyArgs} args - Arguments to create many ChallengeFiles.
     * @example
     * // Create many ChallengeFiles
     * const challengeFile = await prisma.challengeFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeFileCreateManyArgs>(args?: SelectSubset<T, ChallengeFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallengeFiles and returns the data saved in the database.
     * @param {ChallengeFileCreateManyAndReturnArgs} args - Arguments to create many ChallengeFiles.
     * @example
     * // Create many ChallengeFiles
     * const challengeFile = await prisma.challengeFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallengeFiles and only return the `id`
     * const challengeFileWithIdOnly = await prisma.challengeFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeFileCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChallengeFile.
     * @param {ChallengeFileDeleteArgs} args - Arguments to delete one ChallengeFile.
     * @example
     * // Delete one ChallengeFile
     * const ChallengeFile = await prisma.challengeFile.delete({
     *   where: {
     *     // ... filter to delete one ChallengeFile
     *   }
     * })
     * 
     */
    delete<T extends ChallengeFileDeleteArgs>(args: SelectSubset<T, ChallengeFileDeleteArgs<ExtArgs>>): Prisma__ChallengeFileClient<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChallengeFile.
     * @param {ChallengeFileUpdateArgs} args - Arguments to update one ChallengeFile.
     * @example
     * // Update one ChallengeFile
     * const challengeFile = await prisma.challengeFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeFileUpdateArgs>(args: SelectSubset<T, ChallengeFileUpdateArgs<ExtArgs>>): Prisma__ChallengeFileClient<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChallengeFiles.
     * @param {ChallengeFileDeleteManyArgs} args - Arguments to filter ChallengeFiles to delete.
     * @example
     * // Delete a few ChallengeFiles
     * const { count } = await prisma.challengeFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeFileDeleteManyArgs>(args?: SelectSubset<T, ChallengeFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeFiles
     * const challengeFile = await prisma.challengeFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeFileUpdateManyArgs>(args: SelectSubset<T, ChallengeFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeFiles and returns the data updated in the database.
     * @param {ChallengeFileUpdateManyAndReturnArgs} args - Arguments to update many ChallengeFiles.
     * @example
     * // Update many ChallengeFiles
     * const challengeFile = await prisma.challengeFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChallengeFiles and only return the `id`
     * const challengeFileWithIdOnly = await prisma.challengeFile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChallengeFileUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChallengeFile.
     * @param {ChallengeFileUpsertArgs} args - Arguments to update or create a ChallengeFile.
     * @example
     * // Update or create a ChallengeFile
     * const challengeFile = await prisma.challengeFile.upsert({
     *   create: {
     *     // ... data to create a ChallengeFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeFile we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeFileUpsertArgs>(args: SelectSubset<T, ChallengeFileUpsertArgs<ExtArgs>>): Prisma__ChallengeFileClient<$Result.GetResult<Prisma.$ChallengeFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChallengeFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFileCountArgs} args - Arguments to filter ChallengeFiles to count.
     * @example
     * // Count the number of ChallengeFiles
     * const count = await prisma.challengeFile.count({
     *   where: {
     *     // ... the filter for the ChallengeFiles we want to count
     *   }
     * })
    **/
    count<T extends ChallengeFileCountArgs>(
      args?: Subset<T, ChallengeFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeFileAggregateArgs>(args: Subset<T, ChallengeFileAggregateArgs>): Prisma.PrismaPromise<GetChallengeFileAggregateType<T>>

    /**
     * Group by ChallengeFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFileGroupByArgs} args - Group by arguments.
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
      T extends ChallengeFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeFileGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeFile model
   */
  readonly fields: ChallengeFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChallengeFile model
   */
  interface ChallengeFileFieldRefs {
    readonly id: FieldRef<"ChallengeFile", 'String'>
    readonly name: FieldRef<"ChallengeFile", 'String'>
    readonly path: FieldRef<"ChallengeFile", 'String'>
    readonly size: FieldRef<"ChallengeFile", 'Int'>
    readonly createdAt: FieldRef<"ChallengeFile", 'DateTime'>
    readonly updatedAt: FieldRef<"ChallengeFile", 'DateTime'>
    readonly challengeId: FieldRef<"ChallengeFile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChallengeFile findUnique
   */
  export type ChallengeFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeFile to fetch.
     */
    where: ChallengeFileWhereUniqueInput
  }

  /**
   * ChallengeFile findUniqueOrThrow
   */
  export type ChallengeFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeFile to fetch.
     */
    where: ChallengeFileWhereUniqueInput
  }

  /**
   * ChallengeFile findFirst
   */
  export type ChallengeFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeFile to fetch.
     */
    where?: ChallengeFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeFiles to fetch.
     */
    orderBy?: ChallengeFileOrderByWithRelationInput | ChallengeFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeFiles.
     */
    cursor?: ChallengeFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeFiles.
     */
    distinct?: ChallengeFileScalarFieldEnum | ChallengeFileScalarFieldEnum[]
  }

  /**
   * ChallengeFile findFirstOrThrow
   */
  export type ChallengeFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeFile to fetch.
     */
    where?: ChallengeFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeFiles to fetch.
     */
    orderBy?: ChallengeFileOrderByWithRelationInput | ChallengeFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeFiles.
     */
    cursor?: ChallengeFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeFiles.
     */
    distinct?: ChallengeFileScalarFieldEnum | ChallengeFileScalarFieldEnum[]
  }

  /**
   * ChallengeFile findMany
   */
  export type ChallengeFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeFiles to fetch.
     */
    where?: ChallengeFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeFiles to fetch.
     */
    orderBy?: ChallengeFileOrderByWithRelationInput | ChallengeFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeFiles.
     */
    cursor?: ChallengeFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeFiles.
     */
    skip?: number
    distinct?: ChallengeFileScalarFieldEnum | ChallengeFileScalarFieldEnum[]
  }

  /**
   * ChallengeFile create
   */
  export type ChallengeFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengeFile.
     */
    data: XOR<ChallengeFileCreateInput, ChallengeFileUncheckedCreateInput>
  }

  /**
   * ChallengeFile createMany
   */
  export type ChallengeFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeFiles.
     */
    data: ChallengeFileCreateManyInput | ChallengeFileCreateManyInput[]
  }

  /**
   * ChallengeFile createManyAndReturn
   */
  export type ChallengeFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * The data used to create many ChallengeFiles.
     */
    data: ChallengeFileCreateManyInput | ChallengeFileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeFile update
   */
  export type ChallengeFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengeFile.
     */
    data: XOR<ChallengeFileUpdateInput, ChallengeFileUncheckedUpdateInput>
    /**
     * Choose, which ChallengeFile to update.
     */
    where: ChallengeFileWhereUniqueInput
  }

  /**
   * ChallengeFile updateMany
   */
  export type ChallengeFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeFiles.
     */
    data: XOR<ChallengeFileUpdateManyMutationInput, ChallengeFileUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeFiles to update
     */
    where?: ChallengeFileWhereInput
    /**
     * Limit how many ChallengeFiles to update.
     */
    limit?: number
  }

  /**
   * ChallengeFile updateManyAndReturn
   */
  export type ChallengeFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * The data used to update ChallengeFiles.
     */
    data: XOR<ChallengeFileUpdateManyMutationInput, ChallengeFileUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeFiles to update
     */
    where?: ChallengeFileWhereInput
    /**
     * Limit how many ChallengeFiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeFile upsert
   */
  export type ChallengeFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengeFile to update in case it exists.
     */
    where: ChallengeFileWhereUniqueInput
    /**
     * In case the ChallengeFile found by the `where` argument doesn't exist, create a new ChallengeFile with this data.
     */
    create: XOR<ChallengeFileCreateInput, ChallengeFileUncheckedCreateInput>
    /**
     * In case the ChallengeFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeFileUpdateInput, ChallengeFileUncheckedUpdateInput>
  }

  /**
   * ChallengeFile delete
   */
  export type ChallengeFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
    /**
     * Filter which ChallengeFile to delete.
     */
    where: ChallengeFileWhereUniqueInput
  }

  /**
   * ChallengeFile deleteMany
   */
  export type ChallengeFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeFiles to delete
     */
    where?: ChallengeFileWhereInput
    /**
     * Limit how many ChallengeFiles to delete.
     */
    limit?: number
  }

  /**
   * ChallengeFile without action
   */
  export type ChallengeFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFile
     */
    select?: ChallengeFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFile
     */
    omit?: ChallengeFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFileInclude<ExtArgs> | null
  }


  /**
   * Model Hint
   */

  export type AggregateHint = {
    _count: HintCountAggregateOutputType | null
    _avg: HintAvgAggregateOutputType | null
    _sum: HintSumAggregateOutputType | null
    _min: HintMinAggregateOutputType | null
    _max: HintMaxAggregateOutputType | null
  }

  export type HintAvgAggregateOutputType = {
    cost: number | null
  }

  export type HintSumAggregateOutputType = {
    cost: number | null
  }

  export type HintMinAggregateOutputType = {
    id: string | null
    content: string | null
    cost: number | null
    challengeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HintMaxAggregateOutputType = {
    id: string | null
    content: string | null
    cost: number | null
    challengeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HintCountAggregateOutputType = {
    id: number
    content: number
    cost: number
    challengeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HintAvgAggregateInputType = {
    cost?: true
  }

  export type HintSumAggregateInputType = {
    cost?: true
  }

  export type HintMinAggregateInputType = {
    id?: true
    content?: true
    cost?: true
    challengeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HintMaxAggregateInputType = {
    id?: true
    content?: true
    cost?: true
    challengeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HintCountAggregateInputType = {
    id?: true
    content?: true
    cost?: true
    challengeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hint to aggregate.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hints
    **/
    _count?: true | HintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HintMaxAggregateInputType
  }

  export type GetHintAggregateType<T extends HintAggregateArgs> = {
        [P in keyof T & keyof AggregateHint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHint[P]>
      : GetScalarType<T[P], AggregateHint[P]>
  }




  export type HintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HintWhereInput
    orderBy?: HintOrderByWithAggregationInput | HintOrderByWithAggregationInput[]
    by: HintScalarFieldEnum[] | HintScalarFieldEnum
    having?: HintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HintCountAggregateInputType | true
    _avg?: HintAvgAggregateInputType
    _sum?: HintSumAggregateInputType
    _min?: HintMinAggregateInputType
    _max?: HintMaxAggregateInputType
  }

  export type HintGroupByOutputType = {
    id: string
    content: string
    cost: number
    challengeId: string
    createdAt: Date
    updatedAt: Date
    _count: HintCountAggregateOutputType | null
    _avg: HintAvgAggregateOutputType | null
    _sum: HintSumAggregateOutputType | null
    _min: HintMinAggregateOutputType | null
    _max: HintMaxAggregateOutputType | null
  }

  type GetHintGroupByPayload<T extends HintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HintGroupByOutputType[P]>
            : GetScalarType<T[P], HintGroupByOutputType[P]>
        }
      >
    >


  export type HintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    cost?: boolean
    challengeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    teamHints?: boolean | Hint$teamHintsArgs<ExtArgs>
    _count?: boolean | HintCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hint"]>

  export type HintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    cost?: boolean
    challengeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hint"]>

  export type HintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    cost?: boolean
    challengeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hint"]>

  export type HintSelectScalar = {
    id?: boolean
    content?: boolean
    cost?: boolean
    challengeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "cost" | "challengeId" | "createdAt" | "updatedAt", ExtArgs["result"]["hint"]>
  export type HintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    teamHints?: boolean | Hint$teamHintsArgs<ExtArgs>
    _count?: boolean | HintCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type HintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $HintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hint"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      teamHints: Prisma.$TeamHintPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      cost: number
      challengeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hint"]>
    composites: {}
  }

  type HintGetPayload<S extends boolean | null | undefined | HintDefaultArgs> = $Result.GetResult<Prisma.$HintPayload, S>

  type HintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HintCountAggregateInputType | true
    }

  export interface HintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hint'], meta: { name: 'Hint' } }
    /**
     * Find zero or one Hint that matches the filter.
     * @param {HintFindUniqueArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HintFindUniqueArgs>(args: SelectSubset<T, HintFindUniqueArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HintFindUniqueOrThrowArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HintFindUniqueOrThrowArgs>(args: SelectSubset<T, HintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindFirstArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HintFindFirstArgs>(args?: SelectSubset<T, HintFindFirstArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindFirstOrThrowArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HintFindFirstOrThrowArgs>(args?: SelectSubset<T, HintFindFirstOrThrowArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hints
     * const hints = await prisma.hint.findMany()
     * 
     * // Get first 10 Hints
     * const hints = await prisma.hint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hintWithIdOnly = await prisma.hint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HintFindManyArgs>(args?: SelectSubset<T, HintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hint.
     * @param {HintCreateArgs} args - Arguments to create a Hint.
     * @example
     * // Create one Hint
     * const Hint = await prisma.hint.create({
     *   data: {
     *     // ... data to create a Hint
     *   }
     * })
     * 
     */
    create<T extends HintCreateArgs>(args: SelectSubset<T, HintCreateArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hints.
     * @param {HintCreateManyArgs} args - Arguments to create many Hints.
     * @example
     * // Create many Hints
     * const hint = await prisma.hint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HintCreateManyArgs>(args?: SelectSubset<T, HintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hints and returns the data saved in the database.
     * @param {HintCreateManyAndReturnArgs} args - Arguments to create many Hints.
     * @example
     * // Create many Hints
     * const hint = await prisma.hint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hints and only return the `id`
     * const hintWithIdOnly = await prisma.hint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HintCreateManyAndReturnArgs>(args?: SelectSubset<T, HintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hint.
     * @param {HintDeleteArgs} args - Arguments to delete one Hint.
     * @example
     * // Delete one Hint
     * const Hint = await prisma.hint.delete({
     *   where: {
     *     // ... filter to delete one Hint
     *   }
     * })
     * 
     */
    delete<T extends HintDeleteArgs>(args: SelectSubset<T, HintDeleteArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hint.
     * @param {HintUpdateArgs} args - Arguments to update one Hint.
     * @example
     * // Update one Hint
     * const hint = await prisma.hint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HintUpdateArgs>(args: SelectSubset<T, HintUpdateArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hints.
     * @param {HintDeleteManyArgs} args - Arguments to filter Hints to delete.
     * @example
     * // Delete a few Hints
     * const { count } = await prisma.hint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HintDeleteManyArgs>(args?: SelectSubset<T, HintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hints
     * const hint = await prisma.hint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HintUpdateManyArgs>(args: SelectSubset<T, HintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hints and returns the data updated in the database.
     * @param {HintUpdateManyAndReturnArgs} args - Arguments to update many Hints.
     * @example
     * // Update many Hints
     * const hint = await prisma.hint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hints and only return the `id`
     * const hintWithIdOnly = await prisma.hint.updateManyAndReturn({
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
    updateManyAndReturn<T extends HintUpdateManyAndReturnArgs>(args: SelectSubset<T, HintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hint.
     * @param {HintUpsertArgs} args - Arguments to update or create a Hint.
     * @example
     * // Update or create a Hint
     * const hint = await prisma.hint.upsert({
     *   create: {
     *     // ... data to create a Hint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hint we want to update
     *   }
     * })
     */
    upsert<T extends HintUpsertArgs>(args: SelectSubset<T, HintUpsertArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintCountArgs} args - Arguments to filter Hints to count.
     * @example
     * // Count the number of Hints
     * const count = await prisma.hint.count({
     *   where: {
     *     // ... the filter for the Hints we want to count
     *   }
     * })
    **/
    count<T extends HintCountArgs>(
      args?: Subset<T, HintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HintAggregateArgs>(args: Subset<T, HintAggregateArgs>): Prisma.PrismaPromise<GetHintAggregateType<T>>

    /**
     * Group by Hint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintGroupByArgs} args - Group by arguments.
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
      T extends HintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HintGroupByArgs['orderBy'] }
        : { orderBy?: HintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hint model
   */
  readonly fields: HintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teamHints<T extends Hint$teamHintsArgs<ExtArgs> = {}>(args?: Subset<T, Hint$teamHintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hint model
   */
  interface HintFieldRefs {
    readonly id: FieldRef<"Hint", 'String'>
    readonly content: FieldRef<"Hint", 'String'>
    readonly cost: FieldRef<"Hint", 'Int'>
    readonly challengeId: FieldRef<"Hint", 'String'>
    readonly createdAt: FieldRef<"Hint", 'DateTime'>
    readonly updatedAt: FieldRef<"Hint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hint findUnique
   */
  export type HintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint findUniqueOrThrow
   */
  export type HintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint findFirst
   */
  export type HintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hints.
     */
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint findFirstOrThrow
   */
  export type HintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hints.
     */
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint findMany
   */
  export type HintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hints to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint create
   */
  export type HintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The data needed to create a Hint.
     */
    data: XOR<HintCreateInput, HintUncheckedCreateInput>
  }

  /**
   * Hint createMany
   */
  export type HintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hints.
     */
    data: HintCreateManyInput | HintCreateManyInput[]
  }

  /**
   * Hint createManyAndReturn
   */
  export type HintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * The data used to create many Hints.
     */
    data: HintCreateManyInput | HintCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hint update
   */
  export type HintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The data needed to update a Hint.
     */
    data: XOR<HintUpdateInput, HintUncheckedUpdateInput>
    /**
     * Choose, which Hint to update.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint updateMany
   */
  export type HintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hints.
     */
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyInput>
    /**
     * Filter which Hints to update
     */
    where?: HintWhereInput
    /**
     * Limit how many Hints to update.
     */
    limit?: number
  }

  /**
   * Hint updateManyAndReturn
   */
  export type HintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * The data used to update Hints.
     */
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyInput>
    /**
     * Filter which Hints to update
     */
    where?: HintWhereInput
    /**
     * Limit how many Hints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hint upsert
   */
  export type HintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The filter to search for the Hint to update in case it exists.
     */
    where: HintWhereUniqueInput
    /**
     * In case the Hint found by the `where` argument doesn't exist, create a new Hint with this data.
     */
    create: XOR<HintCreateInput, HintUncheckedCreateInput>
    /**
     * In case the Hint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HintUpdateInput, HintUncheckedUpdateInput>
  }

  /**
   * Hint delete
   */
  export type HintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter which Hint to delete.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint deleteMany
   */
  export type HintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hints to delete
     */
    where?: HintWhereInput
    /**
     * Limit how many Hints to delete.
     */
    limit?: number
  }

  /**
   * Hint.teamHints
   */
  export type Hint$teamHintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    where?: TeamHintWhereInput
    orderBy?: TeamHintOrderByWithRelationInput | TeamHintOrderByWithRelationInput[]
    cursor?: TeamHintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamHintScalarFieldEnum | TeamHintScalarFieldEnum[]
  }

  /**
   * Hint without action
   */
  export type HintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
  }


  /**
   * Model TeamHint
   */

  export type AggregateTeamHint = {
    _count: TeamHintCountAggregateOutputType | null
    _min: TeamHintMinAggregateOutputType | null
    _max: TeamHintMaxAggregateOutputType | null
  }

  export type TeamHintMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    hintId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamHintMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    hintId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamHintCountAggregateOutputType = {
    id: number
    teamId: number
    hintId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamHintMinAggregateInputType = {
    id?: true
    teamId?: true
    hintId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamHintMaxAggregateInputType = {
    id?: true
    teamId?: true
    hintId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamHintCountAggregateInputType = {
    id?: true
    teamId?: true
    hintId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamHintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamHint to aggregate.
     */
    where?: TeamHintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamHints to fetch.
     */
    orderBy?: TeamHintOrderByWithRelationInput | TeamHintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamHintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamHints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamHints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamHints
    **/
    _count?: true | TeamHintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamHintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamHintMaxAggregateInputType
  }

  export type GetTeamHintAggregateType<T extends TeamHintAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamHint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamHint[P]>
      : GetScalarType<T[P], AggregateTeamHint[P]>
  }




  export type TeamHintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamHintWhereInput
    orderBy?: TeamHintOrderByWithAggregationInput | TeamHintOrderByWithAggregationInput[]
    by: TeamHintScalarFieldEnum[] | TeamHintScalarFieldEnum
    having?: TeamHintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamHintCountAggregateInputType | true
    _min?: TeamHintMinAggregateInputType
    _max?: TeamHintMaxAggregateInputType
  }

  export type TeamHintGroupByOutputType = {
    id: string
    teamId: string
    hintId: string
    createdAt: Date
    updatedAt: Date
    _count: TeamHintCountAggregateOutputType | null
    _min: TeamHintMinAggregateOutputType | null
    _max: TeamHintMaxAggregateOutputType | null
  }

  type GetTeamHintGroupByPayload<T extends TeamHintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamHintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamHintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamHintGroupByOutputType[P]>
            : GetScalarType<T[P], TeamHintGroupByOutputType[P]>
        }
      >
    >


  export type TeamHintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    hintId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hint?: boolean | HintDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamHint"]>

  export type TeamHintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    hintId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hint?: boolean | HintDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamHint"]>

  export type TeamHintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    hintId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hint?: boolean | HintDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamHint"]>

  export type TeamHintSelectScalar = {
    id?: boolean
    teamId?: boolean
    hintId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamHintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "hintId" | "createdAt" | "updatedAt", ExtArgs["result"]["teamHint"]>
  export type TeamHintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hint?: boolean | HintDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamHintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hint?: boolean | HintDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamHintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hint?: boolean | HintDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamHintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamHint"
    objects: {
      hint: Prisma.$HintPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      hintId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamHint"]>
    composites: {}
  }

  type TeamHintGetPayload<S extends boolean | null | undefined | TeamHintDefaultArgs> = $Result.GetResult<Prisma.$TeamHintPayload, S>

  type TeamHintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamHintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamHintCountAggregateInputType | true
    }

  export interface TeamHintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamHint'], meta: { name: 'TeamHint' } }
    /**
     * Find zero or one TeamHint that matches the filter.
     * @param {TeamHintFindUniqueArgs} args - Arguments to find a TeamHint
     * @example
     * // Get one TeamHint
     * const teamHint = await prisma.teamHint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamHintFindUniqueArgs>(args: SelectSubset<T, TeamHintFindUniqueArgs<ExtArgs>>): Prisma__TeamHintClient<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamHint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamHintFindUniqueOrThrowArgs} args - Arguments to find a TeamHint
     * @example
     * // Get one TeamHint
     * const teamHint = await prisma.teamHint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamHintFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamHintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamHintClient<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamHint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamHintFindFirstArgs} args - Arguments to find a TeamHint
     * @example
     * // Get one TeamHint
     * const teamHint = await prisma.teamHint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamHintFindFirstArgs>(args?: SelectSubset<T, TeamHintFindFirstArgs<ExtArgs>>): Prisma__TeamHintClient<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamHint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamHintFindFirstOrThrowArgs} args - Arguments to find a TeamHint
     * @example
     * // Get one TeamHint
     * const teamHint = await prisma.teamHint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamHintFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamHintFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamHintClient<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamHints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamHintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamHints
     * const teamHints = await prisma.teamHint.findMany()
     * 
     * // Get first 10 TeamHints
     * const teamHints = await prisma.teamHint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamHintWithIdOnly = await prisma.teamHint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamHintFindManyArgs>(args?: SelectSubset<T, TeamHintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamHint.
     * @param {TeamHintCreateArgs} args - Arguments to create a TeamHint.
     * @example
     * // Create one TeamHint
     * const TeamHint = await prisma.teamHint.create({
     *   data: {
     *     // ... data to create a TeamHint
     *   }
     * })
     * 
     */
    create<T extends TeamHintCreateArgs>(args: SelectSubset<T, TeamHintCreateArgs<ExtArgs>>): Prisma__TeamHintClient<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamHints.
     * @param {TeamHintCreateManyArgs} args - Arguments to create many TeamHints.
     * @example
     * // Create many TeamHints
     * const teamHint = await prisma.teamHint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamHintCreateManyArgs>(args?: SelectSubset<T, TeamHintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamHints and returns the data saved in the database.
     * @param {TeamHintCreateManyAndReturnArgs} args - Arguments to create many TeamHints.
     * @example
     * // Create many TeamHints
     * const teamHint = await prisma.teamHint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamHints and only return the `id`
     * const teamHintWithIdOnly = await prisma.teamHint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamHintCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamHintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamHint.
     * @param {TeamHintDeleteArgs} args - Arguments to delete one TeamHint.
     * @example
     * // Delete one TeamHint
     * const TeamHint = await prisma.teamHint.delete({
     *   where: {
     *     // ... filter to delete one TeamHint
     *   }
     * })
     * 
     */
    delete<T extends TeamHintDeleteArgs>(args: SelectSubset<T, TeamHintDeleteArgs<ExtArgs>>): Prisma__TeamHintClient<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamHint.
     * @param {TeamHintUpdateArgs} args - Arguments to update one TeamHint.
     * @example
     * // Update one TeamHint
     * const teamHint = await prisma.teamHint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamHintUpdateArgs>(args: SelectSubset<T, TeamHintUpdateArgs<ExtArgs>>): Prisma__TeamHintClient<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamHints.
     * @param {TeamHintDeleteManyArgs} args - Arguments to filter TeamHints to delete.
     * @example
     * // Delete a few TeamHints
     * const { count } = await prisma.teamHint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamHintDeleteManyArgs>(args?: SelectSubset<T, TeamHintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamHints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamHintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamHints
     * const teamHint = await prisma.teamHint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamHintUpdateManyArgs>(args: SelectSubset<T, TeamHintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamHints and returns the data updated in the database.
     * @param {TeamHintUpdateManyAndReturnArgs} args - Arguments to update many TeamHints.
     * @example
     * // Update many TeamHints
     * const teamHint = await prisma.teamHint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamHints and only return the `id`
     * const teamHintWithIdOnly = await prisma.teamHint.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamHintUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamHintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamHint.
     * @param {TeamHintUpsertArgs} args - Arguments to update or create a TeamHint.
     * @example
     * // Update or create a TeamHint
     * const teamHint = await prisma.teamHint.upsert({
     *   create: {
     *     // ... data to create a TeamHint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamHint we want to update
     *   }
     * })
     */
    upsert<T extends TeamHintUpsertArgs>(args: SelectSubset<T, TeamHintUpsertArgs<ExtArgs>>): Prisma__TeamHintClient<$Result.GetResult<Prisma.$TeamHintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamHints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamHintCountArgs} args - Arguments to filter TeamHints to count.
     * @example
     * // Count the number of TeamHints
     * const count = await prisma.teamHint.count({
     *   where: {
     *     // ... the filter for the TeamHints we want to count
     *   }
     * })
    **/
    count<T extends TeamHintCountArgs>(
      args?: Subset<T, TeamHintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamHintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamHint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamHintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamHintAggregateArgs>(args: Subset<T, TeamHintAggregateArgs>): Prisma.PrismaPromise<GetTeamHintAggregateType<T>>

    /**
     * Group by TeamHint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamHintGroupByArgs} args - Group by arguments.
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
      T extends TeamHintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamHintGroupByArgs['orderBy'] }
        : { orderBy?: TeamHintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamHintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamHintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamHint model
   */
  readonly fields: TeamHintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamHint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamHintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hint<T extends HintDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HintDefaultArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamHint model
   */
  interface TeamHintFieldRefs {
    readonly id: FieldRef<"TeamHint", 'String'>
    readonly teamId: FieldRef<"TeamHint", 'String'>
    readonly hintId: FieldRef<"TeamHint", 'String'>
    readonly createdAt: FieldRef<"TeamHint", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamHint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamHint findUnique
   */
  export type TeamHintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    /**
     * Filter, which TeamHint to fetch.
     */
    where: TeamHintWhereUniqueInput
  }

  /**
   * TeamHint findUniqueOrThrow
   */
  export type TeamHintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    /**
     * Filter, which TeamHint to fetch.
     */
    where: TeamHintWhereUniqueInput
  }

  /**
   * TeamHint findFirst
   */
  export type TeamHintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    /**
     * Filter, which TeamHint to fetch.
     */
    where?: TeamHintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamHints to fetch.
     */
    orderBy?: TeamHintOrderByWithRelationInput | TeamHintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamHints.
     */
    cursor?: TeamHintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamHints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamHints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamHints.
     */
    distinct?: TeamHintScalarFieldEnum | TeamHintScalarFieldEnum[]
  }

  /**
   * TeamHint findFirstOrThrow
   */
  export type TeamHintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    /**
     * Filter, which TeamHint to fetch.
     */
    where?: TeamHintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamHints to fetch.
     */
    orderBy?: TeamHintOrderByWithRelationInput | TeamHintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamHints.
     */
    cursor?: TeamHintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamHints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamHints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamHints.
     */
    distinct?: TeamHintScalarFieldEnum | TeamHintScalarFieldEnum[]
  }

  /**
   * TeamHint findMany
   */
  export type TeamHintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    /**
     * Filter, which TeamHints to fetch.
     */
    where?: TeamHintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamHints to fetch.
     */
    orderBy?: TeamHintOrderByWithRelationInput | TeamHintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamHints.
     */
    cursor?: TeamHintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamHints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamHints.
     */
    skip?: number
    distinct?: TeamHintScalarFieldEnum | TeamHintScalarFieldEnum[]
  }

  /**
   * TeamHint create
   */
  export type TeamHintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamHint.
     */
    data: XOR<TeamHintCreateInput, TeamHintUncheckedCreateInput>
  }

  /**
   * TeamHint createMany
   */
  export type TeamHintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamHints.
     */
    data: TeamHintCreateManyInput | TeamHintCreateManyInput[]
  }

  /**
   * TeamHint createManyAndReturn
   */
  export type TeamHintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * The data used to create many TeamHints.
     */
    data: TeamHintCreateManyInput | TeamHintCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamHint update
   */
  export type TeamHintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamHint.
     */
    data: XOR<TeamHintUpdateInput, TeamHintUncheckedUpdateInput>
    /**
     * Choose, which TeamHint to update.
     */
    where: TeamHintWhereUniqueInput
  }

  /**
   * TeamHint updateMany
   */
  export type TeamHintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamHints.
     */
    data: XOR<TeamHintUpdateManyMutationInput, TeamHintUncheckedUpdateManyInput>
    /**
     * Filter which TeamHints to update
     */
    where?: TeamHintWhereInput
    /**
     * Limit how many TeamHints to update.
     */
    limit?: number
  }

  /**
   * TeamHint updateManyAndReturn
   */
  export type TeamHintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * The data used to update TeamHints.
     */
    data: XOR<TeamHintUpdateManyMutationInput, TeamHintUncheckedUpdateManyInput>
    /**
     * Filter which TeamHints to update
     */
    where?: TeamHintWhereInput
    /**
     * Limit how many TeamHints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamHint upsert
   */
  export type TeamHintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamHint to update in case it exists.
     */
    where: TeamHintWhereUniqueInput
    /**
     * In case the TeamHint found by the `where` argument doesn't exist, create a new TeamHint with this data.
     */
    create: XOR<TeamHintCreateInput, TeamHintUncheckedCreateInput>
    /**
     * In case the TeamHint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamHintUpdateInput, TeamHintUncheckedUpdateInput>
  }

  /**
   * TeamHint delete
   */
  export type TeamHintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
    /**
     * Filter which TeamHint to delete.
     */
    where: TeamHintWhereUniqueInput
  }

  /**
   * TeamHint deleteMany
   */
  export type TeamHintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamHints to delete
     */
    where?: TeamHintWhereInput
    /**
     * Limit how many TeamHints to delete.
     */
    limit?: number
  }

  /**
   * TeamHint without action
   */
  export type TeamHintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamHint
     */
    select?: TeamHintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamHint
     */
    omit?: TeamHintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamHintInclude<ExtArgs> | null
  }


  /**
   * Model SiteConfig
   */

  export type AggregateSiteConfig = {
    _count: SiteConfigCountAggregateOutputType | null
    _min: SiteConfigMinAggregateOutputType | null
    _max: SiteConfigMaxAggregateOutputType | null
  }

  export type SiteConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SiteConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SiteConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SiteConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SiteConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SiteConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteConfig to aggregate.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteConfigs
    **/
    _count?: true | SiteConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteConfigMaxAggregateInputType
  }

  export type GetSiteConfigAggregateType<T extends SiteConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteConfig[P]>
      : GetScalarType<T[P], AggregateSiteConfig[P]>
  }




  export type SiteConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteConfigWhereInput
    orderBy?: SiteConfigOrderByWithAggregationInput | SiteConfigOrderByWithAggregationInput[]
    by: SiteConfigScalarFieldEnum[] | SiteConfigScalarFieldEnum
    having?: SiteConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteConfigCountAggregateInputType | true
    _min?: SiteConfigMinAggregateInputType
    _max?: SiteConfigMaxAggregateInputType
  }

  export type SiteConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    updatedAt: Date
    _count: SiteConfigCountAggregateOutputType | null
    _min: SiteConfigMinAggregateOutputType | null
    _max: SiteConfigMaxAggregateOutputType | null
  }

  type GetSiteConfigGroupByPayload<T extends SiteConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SiteConfigGroupByOutputType[P]>
        }
      >
    >


  export type SiteConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteConfig"]>

  export type SiteConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteConfig"]>

  export type SiteConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteConfig"]>

  export type SiteConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }

  export type SiteConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "updatedAt", ExtArgs["result"]["siteConfig"]>

  export type $SiteConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      updatedAt: Date
    }, ExtArgs["result"]["siteConfig"]>
    composites: {}
  }

  type SiteConfigGetPayload<S extends boolean | null | undefined | SiteConfigDefaultArgs> = $Result.GetResult<Prisma.$SiteConfigPayload, S>

  type SiteConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteConfigCountAggregateInputType | true
    }

  export interface SiteConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteConfig'], meta: { name: 'SiteConfig' } }
    /**
     * Find zero or one SiteConfig that matches the filter.
     * @param {SiteConfigFindUniqueArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteConfigFindUniqueArgs>(args: SelectSubset<T, SiteConfigFindUniqueArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteConfigFindUniqueOrThrowArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigFindFirstArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteConfigFindFirstArgs>(args?: SelectSubset<T, SiteConfigFindFirstArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigFindFirstOrThrowArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteConfigs
     * const siteConfigs = await prisma.siteConfig.findMany()
     * 
     * // Get first 10 SiteConfigs
     * const siteConfigs = await prisma.siteConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteConfigWithIdOnly = await prisma.siteConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteConfigFindManyArgs>(args?: SelectSubset<T, SiteConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteConfig.
     * @param {SiteConfigCreateArgs} args - Arguments to create a SiteConfig.
     * @example
     * // Create one SiteConfig
     * const SiteConfig = await prisma.siteConfig.create({
     *   data: {
     *     // ... data to create a SiteConfig
     *   }
     * })
     * 
     */
    create<T extends SiteConfigCreateArgs>(args: SelectSubset<T, SiteConfigCreateArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteConfigs.
     * @param {SiteConfigCreateManyArgs} args - Arguments to create many SiteConfigs.
     * @example
     * // Create many SiteConfigs
     * const siteConfig = await prisma.siteConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteConfigCreateManyArgs>(args?: SelectSubset<T, SiteConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteConfigs and returns the data saved in the database.
     * @param {SiteConfigCreateManyAndReturnArgs} args - Arguments to create many SiteConfigs.
     * @example
     * // Create many SiteConfigs
     * const siteConfig = await prisma.siteConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteConfigs and only return the `id`
     * const siteConfigWithIdOnly = await prisma.siteConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteConfig.
     * @param {SiteConfigDeleteArgs} args - Arguments to delete one SiteConfig.
     * @example
     * // Delete one SiteConfig
     * const SiteConfig = await prisma.siteConfig.delete({
     *   where: {
     *     // ... filter to delete one SiteConfig
     *   }
     * })
     * 
     */
    delete<T extends SiteConfigDeleteArgs>(args: SelectSubset<T, SiteConfigDeleteArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteConfig.
     * @param {SiteConfigUpdateArgs} args - Arguments to update one SiteConfig.
     * @example
     * // Update one SiteConfig
     * const siteConfig = await prisma.siteConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteConfigUpdateArgs>(args: SelectSubset<T, SiteConfigUpdateArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteConfigs.
     * @param {SiteConfigDeleteManyArgs} args - Arguments to filter SiteConfigs to delete.
     * @example
     * // Delete a few SiteConfigs
     * const { count } = await prisma.siteConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteConfigDeleteManyArgs>(args?: SelectSubset<T, SiteConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteConfigs
     * const siteConfig = await prisma.siteConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteConfigUpdateManyArgs>(args: SelectSubset<T, SiteConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteConfigs and returns the data updated in the database.
     * @param {SiteConfigUpdateManyAndReturnArgs} args - Arguments to update many SiteConfigs.
     * @example
     * // Update many SiteConfigs
     * const siteConfig = await prisma.siteConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteConfigs and only return the `id`
     * const siteConfigWithIdOnly = await prisma.siteConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends SiteConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteConfig.
     * @param {SiteConfigUpsertArgs} args - Arguments to update or create a SiteConfig.
     * @example
     * // Update or create a SiteConfig
     * const siteConfig = await prisma.siteConfig.upsert({
     *   create: {
     *     // ... data to create a SiteConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteConfig we want to update
     *   }
     * })
     */
    upsert<T extends SiteConfigUpsertArgs>(args: SelectSubset<T, SiteConfigUpsertArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigCountArgs} args - Arguments to filter SiteConfigs to count.
     * @example
     * // Count the number of SiteConfigs
     * const count = await prisma.siteConfig.count({
     *   where: {
     *     // ... the filter for the SiteConfigs we want to count
     *   }
     * })
    **/
    count<T extends SiteConfigCountArgs>(
      args?: Subset<T, SiteConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteConfigAggregateArgs>(args: Subset<T, SiteConfigAggregateArgs>): Prisma.PrismaPromise<GetSiteConfigAggregateType<T>>

    /**
     * Group by SiteConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigGroupByArgs} args - Group by arguments.
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
      T extends SiteConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteConfigGroupByArgs['orderBy'] }
        : { orderBy?: SiteConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteConfig model
   */
  readonly fields: SiteConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SiteConfig model
   */
  interface SiteConfigFieldRefs {
    readonly id: FieldRef<"SiteConfig", 'String'>
    readonly key: FieldRef<"SiteConfig", 'String'>
    readonly value: FieldRef<"SiteConfig", 'String'>
    readonly updatedAt: FieldRef<"SiteConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteConfig findUnique
   */
  export type SiteConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig findUniqueOrThrow
   */
  export type SiteConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig findFirst
   */
  export type SiteConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteConfigs.
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteConfigs.
     */
    distinct?: SiteConfigScalarFieldEnum | SiteConfigScalarFieldEnum[]
  }

  /**
   * SiteConfig findFirstOrThrow
   */
  export type SiteConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteConfigs.
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteConfigs.
     */
    distinct?: SiteConfigScalarFieldEnum | SiteConfigScalarFieldEnum[]
  }

  /**
   * SiteConfig findMany
   */
  export type SiteConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * Filter, which SiteConfigs to fetch.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteConfigs.
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    distinct?: SiteConfigScalarFieldEnum | SiteConfigScalarFieldEnum[]
  }

  /**
   * SiteConfig create
   */
  export type SiteConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteConfig.
     */
    data: XOR<SiteConfigCreateInput, SiteConfigUncheckedCreateInput>
  }

  /**
   * SiteConfig createMany
   */
  export type SiteConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteConfigs.
     */
    data: SiteConfigCreateManyInput | SiteConfigCreateManyInput[]
  }

  /**
   * SiteConfig createManyAndReturn
   */
  export type SiteConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SiteConfigs.
     */
    data: SiteConfigCreateManyInput | SiteConfigCreateManyInput[]
  }

  /**
   * SiteConfig update
   */
  export type SiteConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteConfig.
     */
    data: XOR<SiteConfigUpdateInput, SiteConfigUncheckedUpdateInput>
    /**
     * Choose, which SiteConfig to update.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig updateMany
   */
  export type SiteConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteConfigs.
     */
    data: XOR<SiteConfigUpdateManyMutationInput, SiteConfigUncheckedUpdateManyInput>
    /**
     * Filter which SiteConfigs to update
     */
    where?: SiteConfigWhereInput
    /**
     * Limit how many SiteConfigs to update.
     */
    limit?: number
  }

  /**
   * SiteConfig updateManyAndReturn
   */
  export type SiteConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * The data used to update SiteConfigs.
     */
    data: XOR<SiteConfigUpdateManyMutationInput, SiteConfigUncheckedUpdateManyInput>
    /**
     * Filter which SiteConfigs to update
     */
    where?: SiteConfigWhereInput
    /**
     * Limit how many SiteConfigs to update.
     */
    limit?: number
  }

  /**
   * SiteConfig upsert
   */
  export type SiteConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteConfig to update in case it exists.
     */
    where: SiteConfigWhereUniqueInput
    /**
     * In case the SiteConfig found by the `where` argument doesn't exist, create a new SiteConfig with this data.
     */
    create: XOR<SiteConfigCreateInput, SiteConfigUncheckedCreateInput>
    /**
     * In case the SiteConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteConfigUpdateInput, SiteConfigUncheckedUpdateInput>
  }

  /**
   * SiteConfig delete
   */
  export type SiteConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
    /**
     * Filter which SiteConfig to delete.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig deleteMany
   */
  export type SiteConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteConfigs to delete
     */
    where?: SiteConfigWhereInput
    /**
     * Limit how many SiteConfigs to delete.
     */
    limit?: number
  }

  /**
   * SiteConfig without action
   */
  export type SiteConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteConfig
     */
    omit?: SiteConfigOmit<ExtArgs> | null
  }


  /**
   * Model Score
   */

  export type AggregateScore = {
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  export type ScoreAvgAggregateOutputType = {
    points: number | null
  }

  export type ScoreSumAggregateOutputType = {
    points: number | null
  }

  export type ScoreMinAggregateOutputType = {
    id: string | null
    points: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    teamId: string | null
    challengeId: string | null
  }

  export type ScoreMaxAggregateOutputType = {
    id: string | null
    points: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    teamId: string | null
    challengeId: string | null
  }

  export type ScoreCountAggregateOutputType = {
    id: number
    points: number
    createdAt: number
    updatedAt: number
    userId: number
    teamId: number
    challengeId: number
    _all: number
  }


  export type ScoreAvgAggregateInputType = {
    points?: true
  }

  export type ScoreSumAggregateInputType = {
    points?: true
  }

  export type ScoreMinAggregateInputType = {
    id?: true
    points?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    teamId?: true
    challengeId?: true
  }

  export type ScoreMaxAggregateInputType = {
    id?: true
    points?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    teamId?: true
    challengeId?: true
  }

  export type ScoreCountAggregateInputType = {
    id?: true
    points?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    teamId?: true
    challengeId?: true
    _all?: true
  }

  export type ScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Score to aggregate.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scores
    **/
    _count?: true | ScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreMaxAggregateInputType
  }

  export type GetScoreAggregateType<T extends ScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScore[P]>
      : GetScalarType<T[P], AggregateScore[P]>
  }




  export type ScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreWhereInput
    orderBy?: ScoreOrderByWithAggregationInput | ScoreOrderByWithAggregationInput[]
    by: ScoreScalarFieldEnum[] | ScoreScalarFieldEnum
    having?: ScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreCountAggregateInputType | true
    _avg?: ScoreAvgAggregateInputType
    _sum?: ScoreSumAggregateInputType
    _min?: ScoreMinAggregateInputType
    _max?: ScoreMaxAggregateInputType
  }

  export type ScoreGroupByOutputType = {
    id: string
    points: number
    createdAt: Date
    updatedAt: Date
    userId: string
    teamId: string
    challengeId: string
    _count: ScoreCountAggregateOutputType | null
    _avg: ScoreAvgAggregateOutputType | null
    _sum: ScoreSumAggregateOutputType | null
    _min: ScoreMinAggregateOutputType | null
    _max: ScoreMaxAggregateOutputType | null
  }

  type GetScoreGroupByPayload<T extends ScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreGroupByOutputType[P]>
        }
      >
    >


  export type ScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teamId?: boolean
    challengeId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teamId?: boolean
    challengeId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teamId?: boolean
    challengeId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["score"]>

  export type ScoreSelectScalar = {
    id?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teamId?: boolean
    challengeId?: boolean
  }

  export type ScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "points" | "createdAt" | "updatedAt" | "userId" | "teamId" | "challengeId", ExtArgs["result"]["score"]>
  export type ScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Score"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      challenge: Prisma.$ChallengePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      points: number
      createdAt: Date
      updatedAt: Date
      userId: string
      teamId: string
      challengeId: string
    }, ExtArgs["result"]["score"]>
    composites: {}
  }

  type ScoreGetPayload<S extends boolean | null | undefined | ScoreDefaultArgs> = $Result.GetResult<Prisma.$ScorePayload, S>

  type ScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreCountAggregateInputType | true
    }

  export interface ScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Score'], meta: { name: 'Score' } }
    /**
     * Find zero or one Score that matches the filter.
     * @param {ScoreFindUniqueArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreFindUniqueArgs>(args: SelectSubset<T, ScoreFindUniqueArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Score that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreFindUniqueOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreFindFirstArgs>(args?: SelectSubset<T, ScoreFindFirstArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Score that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindFirstOrThrowArgs} args - Arguments to find a Score
     * @example
     * // Get one Score
     * const score = await prisma.score.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scores
     * const scores = await prisma.score.findMany()
     * 
     * // Get first 10 Scores
     * const scores = await prisma.score.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreWithIdOnly = await prisma.score.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreFindManyArgs>(args?: SelectSubset<T, ScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Score.
     * @param {ScoreCreateArgs} args - Arguments to create a Score.
     * @example
     * // Create one Score
     * const Score = await prisma.score.create({
     *   data: {
     *     // ... data to create a Score
     *   }
     * })
     * 
     */
    create<T extends ScoreCreateArgs>(args: SelectSubset<T, ScoreCreateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scores.
     * @param {ScoreCreateManyArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreCreateManyArgs>(args?: SelectSubset<T, ScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scores and returns the data saved in the database.
     * @param {ScoreCreateManyAndReturnArgs} args - Arguments to create many Scores.
     * @example
     * // Create many Scores
     * const score = await prisma.score.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Score.
     * @param {ScoreDeleteArgs} args - Arguments to delete one Score.
     * @example
     * // Delete one Score
     * const Score = await prisma.score.delete({
     *   where: {
     *     // ... filter to delete one Score
     *   }
     * })
     * 
     */
    delete<T extends ScoreDeleteArgs>(args: SelectSubset<T, ScoreDeleteArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Score.
     * @param {ScoreUpdateArgs} args - Arguments to update one Score.
     * @example
     * // Update one Score
     * const score = await prisma.score.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreUpdateArgs>(args: SelectSubset<T, ScoreUpdateArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scores.
     * @param {ScoreDeleteManyArgs} args - Arguments to filter Scores to delete.
     * @example
     * // Delete a few Scores
     * const { count } = await prisma.score.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreDeleteManyArgs>(args?: SelectSubset<T, ScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreUpdateManyArgs>(args: SelectSubset<T, ScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scores and returns the data updated in the database.
     * @param {ScoreUpdateManyAndReturnArgs} args - Arguments to update many Scores.
     * @example
     * // Update many Scores
     * const score = await prisma.score.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scores and only return the `id`
     * const scoreWithIdOnly = await prisma.score.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Score.
     * @param {ScoreUpsertArgs} args - Arguments to update or create a Score.
     * @example
     * // Update or create a Score
     * const score = await prisma.score.upsert({
     *   create: {
     *     // ... data to create a Score
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Score we want to update
     *   }
     * })
     */
    upsert<T extends ScoreUpsertArgs>(args: SelectSubset<T, ScoreUpsertArgs<ExtArgs>>): Prisma__ScoreClient<$Result.GetResult<Prisma.$ScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreCountArgs} args - Arguments to filter Scores to count.
     * @example
     * // Count the number of Scores
     * const count = await prisma.score.count({
     *   where: {
     *     // ... the filter for the Scores we want to count
     *   }
     * })
    **/
    count<T extends ScoreCountArgs>(
      args?: Subset<T, ScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoreAggregateArgs>(args: Subset<T, ScoreAggregateArgs>): Prisma.PrismaPromise<GetScoreAggregateType<T>>

    /**
     * Group by Score.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreGroupByArgs} args - Group by arguments.
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
      T extends ScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreGroupByArgs['orderBy'] }
        : { orderBy?: ScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Score model
   */
  readonly fields: ScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Score.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Score model
   */
  interface ScoreFieldRefs {
    readonly id: FieldRef<"Score", 'String'>
    readonly points: FieldRef<"Score", 'Int'>
    readonly createdAt: FieldRef<"Score", 'DateTime'>
    readonly updatedAt: FieldRef<"Score", 'DateTime'>
    readonly userId: FieldRef<"Score", 'String'>
    readonly teamId: FieldRef<"Score", 'String'>
    readonly challengeId: FieldRef<"Score", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Score findUnique
   */
  export type ScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findUniqueOrThrow
   */
  export type ScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score findFirst
   */
  export type ScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findFirstOrThrow
   */
  export type ScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Score to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scores.
     */
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score findMany
   */
  export type ScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter, which Scores to fetch.
     */
    where?: ScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scores to fetch.
     */
    orderBy?: ScoreOrderByWithRelationInput | ScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scores.
     */
    cursor?: ScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scores.
     */
    skip?: number
    distinct?: ScoreScalarFieldEnum | ScoreScalarFieldEnum[]
  }

  /**
   * Score create
   */
  export type ScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Score.
     */
    data: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
  }

  /**
   * Score createMany
   */
  export type ScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
  }

  /**
   * Score createManyAndReturn
   */
  export type ScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to create many Scores.
     */
    data: ScoreCreateManyInput | ScoreCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score update
   */
  export type ScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Score.
     */
    data: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
    /**
     * Choose, which Score to update.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score updateMany
   */
  export type ScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
  }

  /**
   * Score updateManyAndReturn
   */
  export type ScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * The data used to update Scores.
     */
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyInput>
    /**
     * Filter which Scores to update
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Score upsert
   */
  export type ScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Score to update in case it exists.
     */
    where: ScoreWhereUniqueInput
    /**
     * In case the Score found by the `where` argument doesn't exist, create a new Score with this data.
     */
    create: XOR<ScoreCreateInput, ScoreUncheckedCreateInput>
    /**
     * In case the Score was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreUpdateInput, ScoreUncheckedUpdateInput>
  }

  /**
   * Score delete
   */
  export type ScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
    /**
     * Filter which Score to delete.
     */
    where: ScoreWhereUniqueInput
  }

  /**
   * Score deleteMany
   */
  export type ScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scores to delete
     */
    where?: ScoreWhereInput
    /**
     * Limit how many Scores to delete.
     */
    limit?: number
  }

  /**
   * Score without action
   */
  export type ScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Score
     */
    select?: ScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Score
     */
    omit?: ScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreInclude<ExtArgs> | null
  }


  /**
   * Model UnlockCondition
   */

  export type AggregateUnlockCondition = {
    _count: UnlockConditionCountAggregateOutputType | null
    _avg: UnlockConditionAvgAggregateOutputType | null
    _sum: UnlockConditionSumAggregateOutputType | null
    _min: UnlockConditionMinAggregateOutputType | null
    _max: UnlockConditionMaxAggregateOutputType | null
  }

  export type UnlockConditionAvgAggregateOutputType = {
    timeThresholdSeconds: number | null
  }

  export type UnlockConditionSumAggregateOutputType = {
    timeThresholdSeconds: number | null
  }

  export type UnlockConditionMinAggregateOutputType = {
    id: string | null
    challengeId: string | null
    type: $Enums.UnlockConditionType | null
    requiredChallengeId: string | null
    timeThresholdSeconds: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnlockConditionMaxAggregateOutputType = {
    id: string | null
    challengeId: string | null
    type: $Enums.UnlockConditionType | null
    requiredChallengeId: string | null
    timeThresholdSeconds: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnlockConditionCountAggregateOutputType = {
    id: number
    challengeId: number
    type: number
    requiredChallengeId: number
    timeThresholdSeconds: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnlockConditionAvgAggregateInputType = {
    timeThresholdSeconds?: true
  }

  export type UnlockConditionSumAggregateInputType = {
    timeThresholdSeconds?: true
  }

  export type UnlockConditionMinAggregateInputType = {
    id?: true
    challengeId?: true
    type?: true
    requiredChallengeId?: true
    timeThresholdSeconds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnlockConditionMaxAggregateInputType = {
    id?: true
    challengeId?: true
    type?: true
    requiredChallengeId?: true
    timeThresholdSeconds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnlockConditionCountAggregateInputType = {
    id?: true
    challengeId?: true
    type?: true
    requiredChallengeId?: true
    timeThresholdSeconds?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnlockConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnlockCondition to aggregate.
     */
    where?: UnlockConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockConditions to fetch.
     */
    orderBy?: UnlockConditionOrderByWithRelationInput | UnlockConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnlockConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnlockConditions
    **/
    _count?: true | UnlockConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnlockConditionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnlockConditionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnlockConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnlockConditionMaxAggregateInputType
  }

  export type GetUnlockConditionAggregateType<T extends UnlockConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateUnlockCondition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnlockCondition[P]>
      : GetScalarType<T[P], AggregateUnlockCondition[P]>
  }




  export type UnlockConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnlockConditionWhereInput
    orderBy?: UnlockConditionOrderByWithAggregationInput | UnlockConditionOrderByWithAggregationInput[]
    by: UnlockConditionScalarFieldEnum[] | UnlockConditionScalarFieldEnum
    having?: UnlockConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnlockConditionCountAggregateInputType | true
    _avg?: UnlockConditionAvgAggregateInputType
    _sum?: UnlockConditionSumAggregateInputType
    _min?: UnlockConditionMinAggregateInputType
    _max?: UnlockConditionMaxAggregateInputType
  }

  export type UnlockConditionGroupByOutputType = {
    id: string
    challengeId: string
    type: $Enums.UnlockConditionType
    requiredChallengeId: string | null
    timeThresholdSeconds: number | null
    createdAt: Date
    updatedAt: Date
    _count: UnlockConditionCountAggregateOutputType | null
    _avg: UnlockConditionAvgAggregateOutputType | null
    _sum: UnlockConditionSumAggregateOutputType | null
    _min: UnlockConditionMinAggregateOutputType | null
    _max: UnlockConditionMaxAggregateOutputType | null
  }

  type GetUnlockConditionGroupByPayload<T extends UnlockConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnlockConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnlockConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnlockConditionGroupByOutputType[P]>
            : GetScalarType<T[P], UnlockConditionGroupByOutputType[P]>
        }
      >
    >


  export type UnlockConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    type?: boolean
    requiredChallengeId?: boolean
    timeThresholdSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unlockCondition"]>

  export type UnlockConditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    type?: boolean
    requiredChallengeId?: boolean
    timeThresholdSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unlockCondition"]>

  export type UnlockConditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    type?: boolean
    requiredChallengeId?: boolean
    timeThresholdSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unlockCondition"]>

  export type UnlockConditionSelectScalar = {
    id?: boolean
    challengeId?: boolean
    type?: boolean
    requiredChallengeId?: boolean
    timeThresholdSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnlockConditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "type" | "requiredChallengeId" | "timeThresholdSeconds" | "createdAt" | "updatedAt", ExtArgs["result"]["unlockCondition"]>
  export type UnlockConditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type UnlockConditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type UnlockConditionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $UnlockConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnlockCondition"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challengeId: string
      type: $Enums.UnlockConditionType
      requiredChallengeId: string | null
      timeThresholdSeconds: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unlockCondition"]>
    composites: {}
  }

  type UnlockConditionGetPayload<S extends boolean | null | undefined | UnlockConditionDefaultArgs> = $Result.GetResult<Prisma.$UnlockConditionPayload, S>

  type UnlockConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnlockConditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnlockConditionCountAggregateInputType | true
    }

  export interface UnlockConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnlockCondition'], meta: { name: 'UnlockCondition' } }
    /**
     * Find zero or one UnlockCondition that matches the filter.
     * @param {UnlockConditionFindUniqueArgs} args - Arguments to find a UnlockCondition
     * @example
     * // Get one UnlockCondition
     * const unlockCondition = await prisma.unlockCondition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnlockConditionFindUniqueArgs>(args: SelectSubset<T, UnlockConditionFindUniqueArgs<ExtArgs>>): Prisma__UnlockConditionClient<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnlockCondition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnlockConditionFindUniqueOrThrowArgs} args - Arguments to find a UnlockCondition
     * @example
     * // Get one UnlockCondition
     * const unlockCondition = await prisma.unlockCondition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnlockConditionFindUniqueOrThrowArgs>(args: SelectSubset<T, UnlockConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnlockConditionClient<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnlockCondition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockConditionFindFirstArgs} args - Arguments to find a UnlockCondition
     * @example
     * // Get one UnlockCondition
     * const unlockCondition = await prisma.unlockCondition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnlockConditionFindFirstArgs>(args?: SelectSubset<T, UnlockConditionFindFirstArgs<ExtArgs>>): Prisma__UnlockConditionClient<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnlockCondition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockConditionFindFirstOrThrowArgs} args - Arguments to find a UnlockCondition
     * @example
     * // Get one UnlockCondition
     * const unlockCondition = await prisma.unlockCondition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnlockConditionFindFirstOrThrowArgs>(args?: SelectSubset<T, UnlockConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnlockConditionClient<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnlockConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockConditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnlockConditions
     * const unlockConditions = await prisma.unlockCondition.findMany()
     * 
     * // Get first 10 UnlockConditions
     * const unlockConditions = await prisma.unlockCondition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unlockConditionWithIdOnly = await prisma.unlockCondition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnlockConditionFindManyArgs>(args?: SelectSubset<T, UnlockConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnlockCondition.
     * @param {UnlockConditionCreateArgs} args - Arguments to create a UnlockCondition.
     * @example
     * // Create one UnlockCondition
     * const UnlockCondition = await prisma.unlockCondition.create({
     *   data: {
     *     // ... data to create a UnlockCondition
     *   }
     * })
     * 
     */
    create<T extends UnlockConditionCreateArgs>(args: SelectSubset<T, UnlockConditionCreateArgs<ExtArgs>>): Prisma__UnlockConditionClient<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnlockConditions.
     * @param {UnlockConditionCreateManyArgs} args - Arguments to create many UnlockConditions.
     * @example
     * // Create many UnlockConditions
     * const unlockCondition = await prisma.unlockCondition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnlockConditionCreateManyArgs>(args?: SelectSubset<T, UnlockConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnlockConditions and returns the data saved in the database.
     * @param {UnlockConditionCreateManyAndReturnArgs} args - Arguments to create many UnlockConditions.
     * @example
     * // Create many UnlockConditions
     * const unlockCondition = await prisma.unlockCondition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnlockConditions and only return the `id`
     * const unlockConditionWithIdOnly = await prisma.unlockCondition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnlockConditionCreateManyAndReturnArgs>(args?: SelectSubset<T, UnlockConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnlockCondition.
     * @param {UnlockConditionDeleteArgs} args - Arguments to delete one UnlockCondition.
     * @example
     * // Delete one UnlockCondition
     * const UnlockCondition = await prisma.unlockCondition.delete({
     *   where: {
     *     // ... filter to delete one UnlockCondition
     *   }
     * })
     * 
     */
    delete<T extends UnlockConditionDeleteArgs>(args: SelectSubset<T, UnlockConditionDeleteArgs<ExtArgs>>): Prisma__UnlockConditionClient<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnlockCondition.
     * @param {UnlockConditionUpdateArgs} args - Arguments to update one UnlockCondition.
     * @example
     * // Update one UnlockCondition
     * const unlockCondition = await prisma.unlockCondition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnlockConditionUpdateArgs>(args: SelectSubset<T, UnlockConditionUpdateArgs<ExtArgs>>): Prisma__UnlockConditionClient<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnlockConditions.
     * @param {UnlockConditionDeleteManyArgs} args - Arguments to filter UnlockConditions to delete.
     * @example
     * // Delete a few UnlockConditions
     * const { count } = await prisma.unlockCondition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnlockConditionDeleteManyArgs>(args?: SelectSubset<T, UnlockConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnlockConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnlockConditions
     * const unlockCondition = await prisma.unlockCondition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnlockConditionUpdateManyArgs>(args: SelectSubset<T, UnlockConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnlockConditions and returns the data updated in the database.
     * @param {UnlockConditionUpdateManyAndReturnArgs} args - Arguments to update many UnlockConditions.
     * @example
     * // Update many UnlockConditions
     * const unlockCondition = await prisma.unlockCondition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnlockConditions and only return the `id`
     * const unlockConditionWithIdOnly = await prisma.unlockCondition.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnlockConditionUpdateManyAndReturnArgs>(args: SelectSubset<T, UnlockConditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnlockCondition.
     * @param {UnlockConditionUpsertArgs} args - Arguments to update or create a UnlockCondition.
     * @example
     * // Update or create a UnlockCondition
     * const unlockCondition = await prisma.unlockCondition.upsert({
     *   create: {
     *     // ... data to create a UnlockCondition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnlockCondition we want to update
     *   }
     * })
     */
    upsert<T extends UnlockConditionUpsertArgs>(args: SelectSubset<T, UnlockConditionUpsertArgs<ExtArgs>>): Prisma__UnlockConditionClient<$Result.GetResult<Prisma.$UnlockConditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnlockConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockConditionCountArgs} args - Arguments to filter UnlockConditions to count.
     * @example
     * // Count the number of UnlockConditions
     * const count = await prisma.unlockCondition.count({
     *   where: {
     *     // ... the filter for the UnlockConditions we want to count
     *   }
     * })
    **/
    count<T extends UnlockConditionCountArgs>(
      args?: Subset<T, UnlockConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnlockConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnlockCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnlockConditionAggregateArgs>(args: Subset<T, UnlockConditionAggregateArgs>): Prisma.PrismaPromise<GetUnlockConditionAggregateType<T>>

    /**
     * Group by UnlockCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnlockConditionGroupByArgs} args - Group by arguments.
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
      T extends UnlockConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnlockConditionGroupByArgs['orderBy'] }
        : { orderBy?: UnlockConditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnlockConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnlockConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnlockCondition model
   */
  readonly fields: UnlockConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnlockCondition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnlockConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UnlockCondition model
   */
  interface UnlockConditionFieldRefs {
    readonly id: FieldRef<"UnlockCondition", 'String'>
    readonly challengeId: FieldRef<"UnlockCondition", 'String'>
    readonly type: FieldRef<"UnlockCondition", 'UnlockConditionType'>
    readonly requiredChallengeId: FieldRef<"UnlockCondition", 'String'>
    readonly timeThresholdSeconds: FieldRef<"UnlockCondition", 'Int'>
    readonly createdAt: FieldRef<"UnlockCondition", 'DateTime'>
    readonly updatedAt: FieldRef<"UnlockCondition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UnlockCondition findUnique
   */
  export type UnlockConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
    /**
     * Filter, which UnlockCondition to fetch.
     */
    where: UnlockConditionWhereUniqueInput
  }

  /**
   * UnlockCondition findUniqueOrThrow
   */
  export type UnlockConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
    /**
     * Filter, which UnlockCondition to fetch.
     */
    where: UnlockConditionWhereUniqueInput
  }

  /**
   * UnlockCondition findFirst
   */
  export type UnlockConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
    /**
     * Filter, which UnlockCondition to fetch.
     */
    where?: UnlockConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockConditions to fetch.
     */
    orderBy?: UnlockConditionOrderByWithRelationInput | UnlockConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnlockConditions.
     */
    cursor?: UnlockConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnlockConditions.
     */
    distinct?: UnlockConditionScalarFieldEnum | UnlockConditionScalarFieldEnum[]
  }

  /**
   * UnlockCondition findFirstOrThrow
   */
  export type UnlockConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
    /**
     * Filter, which UnlockCondition to fetch.
     */
    where?: UnlockConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockConditions to fetch.
     */
    orderBy?: UnlockConditionOrderByWithRelationInput | UnlockConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnlockConditions.
     */
    cursor?: UnlockConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnlockConditions.
     */
    distinct?: UnlockConditionScalarFieldEnum | UnlockConditionScalarFieldEnum[]
  }

  /**
   * UnlockCondition findMany
   */
  export type UnlockConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
    /**
     * Filter, which UnlockConditions to fetch.
     */
    where?: UnlockConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnlockConditions to fetch.
     */
    orderBy?: UnlockConditionOrderByWithRelationInput | UnlockConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnlockConditions.
     */
    cursor?: UnlockConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnlockConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnlockConditions.
     */
    skip?: number
    distinct?: UnlockConditionScalarFieldEnum | UnlockConditionScalarFieldEnum[]
  }

  /**
   * UnlockCondition create
   */
  export type UnlockConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
    /**
     * The data needed to create a UnlockCondition.
     */
    data: XOR<UnlockConditionCreateInput, UnlockConditionUncheckedCreateInput>
  }

  /**
   * UnlockCondition createMany
   */
  export type UnlockConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnlockConditions.
     */
    data: UnlockConditionCreateManyInput | UnlockConditionCreateManyInput[]
  }

  /**
   * UnlockCondition createManyAndReturn
   */
  export type UnlockConditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * The data used to create many UnlockConditions.
     */
    data: UnlockConditionCreateManyInput | UnlockConditionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnlockCondition update
   */
  export type UnlockConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
    /**
     * The data needed to update a UnlockCondition.
     */
    data: XOR<UnlockConditionUpdateInput, UnlockConditionUncheckedUpdateInput>
    /**
     * Choose, which UnlockCondition to update.
     */
    where: UnlockConditionWhereUniqueInput
  }

  /**
   * UnlockCondition updateMany
   */
  export type UnlockConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnlockConditions.
     */
    data: XOR<UnlockConditionUpdateManyMutationInput, UnlockConditionUncheckedUpdateManyInput>
    /**
     * Filter which UnlockConditions to update
     */
    where?: UnlockConditionWhereInput
    /**
     * Limit how many UnlockConditions to update.
     */
    limit?: number
  }

  /**
   * UnlockCondition updateManyAndReturn
   */
  export type UnlockConditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * The data used to update UnlockConditions.
     */
    data: XOR<UnlockConditionUpdateManyMutationInput, UnlockConditionUncheckedUpdateManyInput>
    /**
     * Filter which UnlockConditions to update
     */
    where?: UnlockConditionWhereInput
    /**
     * Limit how many UnlockConditions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnlockCondition upsert
   */
  export type UnlockConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
    /**
     * The filter to search for the UnlockCondition to update in case it exists.
     */
    where: UnlockConditionWhereUniqueInput
    /**
     * In case the UnlockCondition found by the `where` argument doesn't exist, create a new UnlockCondition with this data.
     */
    create: XOR<UnlockConditionCreateInput, UnlockConditionUncheckedCreateInput>
    /**
     * In case the UnlockCondition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnlockConditionUpdateInput, UnlockConditionUncheckedUpdateInput>
  }

  /**
   * UnlockCondition delete
   */
  export type UnlockConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
    /**
     * Filter which UnlockCondition to delete.
     */
    where: UnlockConditionWhereUniqueInput
  }

  /**
   * UnlockCondition deleteMany
   */
  export type UnlockConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnlockConditions to delete
     */
    where?: UnlockConditionWhereInput
    /**
     * Limit how many UnlockConditions to delete.
     */
    limit?: number
  }

  /**
   * UnlockCondition without action
   */
  export type UnlockConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnlockCondition
     */
    select?: UnlockConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnlockCondition
     */
    omit?: UnlockConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnlockConditionInclude<ExtArgs> | null
  }


  /**
   * Model ChallengeFlag
   */

  export type AggregateChallengeFlag = {
    _count: ChallengeFlagCountAggregateOutputType | null
    _avg: ChallengeFlagAvgAggregateOutputType | null
    _sum: ChallengeFlagSumAggregateOutputType | null
    _min: ChallengeFlagMinAggregateOutputType | null
    _max: ChallengeFlagMaxAggregateOutputType | null
  }

  export type ChallengeFlagAvgAggregateOutputType = {
    points: number | null
  }

  export type ChallengeFlagSumAggregateOutputType = {
    points: number | null
  }

  export type ChallengeFlagMinAggregateOutputType = {
    id: string | null
    flag: string | null
    points: number | null
    challengeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeFlagMaxAggregateOutputType = {
    id: string | null
    flag: string | null
    points: number | null
    challengeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallengeFlagCountAggregateOutputType = {
    id: number
    flag: number
    points: number
    challengeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallengeFlagAvgAggregateInputType = {
    points?: true
  }

  export type ChallengeFlagSumAggregateInputType = {
    points?: true
  }

  export type ChallengeFlagMinAggregateInputType = {
    id?: true
    flag?: true
    points?: true
    challengeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeFlagMaxAggregateInputType = {
    id?: true
    flag?: true
    points?: true
    challengeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallengeFlagCountAggregateInputType = {
    id?: true
    flag?: true
    points?: true
    challengeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallengeFlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeFlag to aggregate.
     */
    where?: ChallengeFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeFlags to fetch.
     */
    orderBy?: ChallengeFlagOrderByWithRelationInput | ChallengeFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeFlags
    **/
    _count?: true | ChallengeFlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeFlagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeFlagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeFlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeFlagMaxAggregateInputType
  }

  export type GetChallengeFlagAggregateType<T extends ChallengeFlagAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeFlag[P]>
      : GetScalarType<T[P], AggregateChallengeFlag[P]>
  }




  export type ChallengeFlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeFlagWhereInput
    orderBy?: ChallengeFlagOrderByWithAggregationInput | ChallengeFlagOrderByWithAggregationInput[]
    by: ChallengeFlagScalarFieldEnum[] | ChallengeFlagScalarFieldEnum
    having?: ChallengeFlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeFlagCountAggregateInputType | true
    _avg?: ChallengeFlagAvgAggregateInputType
    _sum?: ChallengeFlagSumAggregateInputType
    _min?: ChallengeFlagMinAggregateInputType
    _max?: ChallengeFlagMaxAggregateInputType
  }

  export type ChallengeFlagGroupByOutputType = {
    id: string
    flag: string
    points: number
    challengeId: string
    createdAt: Date
    updatedAt: Date
    _count: ChallengeFlagCountAggregateOutputType | null
    _avg: ChallengeFlagAvgAggregateOutputType | null
    _sum: ChallengeFlagSumAggregateOutputType | null
    _min: ChallengeFlagMinAggregateOutputType | null
    _max: ChallengeFlagMaxAggregateOutputType | null
  }

  type GetChallengeFlagGroupByPayload<T extends ChallengeFlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeFlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeFlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeFlagGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeFlagGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeFlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flag?: boolean
    points?: boolean
    challengeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    submissions?: boolean | ChallengeFlag$submissionsArgs<ExtArgs>
    _count?: boolean | ChallengeFlagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeFlag"]>

  export type ChallengeFlagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flag?: boolean
    points?: boolean
    challengeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeFlag"]>

  export type ChallengeFlagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flag?: boolean
    points?: boolean
    challengeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeFlag"]>

  export type ChallengeFlagSelectScalar = {
    id?: boolean
    flag?: boolean
    points?: boolean
    challengeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallengeFlagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flag" | "points" | "challengeId" | "createdAt" | "updatedAt", ExtArgs["result"]["challengeFlag"]>
  export type ChallengeFlagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
    submissions?: boolean | ChallengeFlag$submissionsArgs<ExtArgs>
    _count?: boolean | ChallengeFlagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallengeFlagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }
  export type ChallengeFlagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ChallengeDefaultArgs<ExtArgs>
  }

  export type $ChallengeFlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengeFlag"
    objects: {
      challenge: Prisma.$ChallengePayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flag: string
      points: number
      challengeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challengeFlag"]>
    composites: {}
  }

  type ChallengeFlagGetPayload<S extends boolean | null | undefined | ChallengeFlagDefaultArgs> = $Result.GetResult<Prisma.$ChallengeFlagPayload, S>

  type ChallengeFlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeFlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeFlagCountAggregateInputType | true
    }

  export interface ChallengeFlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeFlag'], meta: { name: 'ChallengeFlag' } }
    /**
     * Find zero or one ChallengeFlag that matches the filter.
     * @param {ChallengeFlagFindUniqueArgs} args - Arguments to find a ChallengeFlag
     * @example
     * // Get one ChallengeFlag
     * const challengeFlag = await prisma.challengeFlag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeFlagFindUniqueArgs>(args: SelectSubset<T, ChallengeFlagFindUniqueArgs<ExtArgs>>): Prisma__ChallengeFlagClient<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChallengeFlag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeFlagFindUniqueOrThrowArgs} args - Arguments to find a ChallengeFlag
     * @example
     * // Get one ChallengeFlag
     * const challengeFlag = await prisma.challengeFlag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeFlagFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeFlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeFlagClient<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeFlag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFlagFindFirstArgs} args - Arguments to find a ChallengeFlag
     * @example
     * // Get one ChallengeFlag
     * const challengeFlag = await prisma.challengeFlag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeFlagFindFirstArgs>(args?: SelectSubset<T, ChallengeFlagFindFirstArgs<ExtArgs>>): Prisma__ChallengeFlagClient<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeFlag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFlagFindFirstOrThrowArgs} args - Arguments to find a ChallengeFlag
     * @example
     * // Get one ChallengeFlag
     * const challengeFlag = await prisma.challengeFlag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeFlagFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeFlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeFlagClient<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChallengeFlags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeFlags
     * const challengeFlags = await prisma.challengeFlag.findMany()
     * 
     * // Get first 10 ChallengeFlags
     * const challengeFlags = await prisma.challengeFlag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeFlagWithIdOnly = await prisma.challengeFlag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeFlagFindManyArgs>(args?: SelectSubset<T, ChallengeFlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChallengeFlag.
     * @param {ChallengeFlagCreateArgs} args - Arguments to create a ChallengeFlag.
     * @example
     * // Create one ChallengeFlag
     * const ChallengeFlag = await prisma.challengeFlag.create({
     *   data: {
     *     // ... data to create a ChallengeFlag
     *   }
     * })
     * 
     */
    create<T extends ChallengeFlagCreateArgs>(args: SelectSubset<T, ChallengeFlagCreateArgs<ExtArgs>>): Prisma__ChallengeFlagClient<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChallengeFlags.
     * @param {ChallengeFlagCreateManyArgs} args - Arguments to create many ChallengeFlags.
     * @example
     * // Create many ChallengeFlags
     * const challengeFlag = await prisma.challengeFlag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeFlagCreateManyArgs>(args?: SelectSubset<T, ChallengeFlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallengeFlags and returns the data saved in the database.
     * @param {ChallengeFlagCreateManyAndReturnArgs} args - Arguments to create many ChallengeFlags.
     * @example
     * // Create many ChallengeFlags
     * const challengeFlag = await prisma.challengeFlag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallengeFlags and only return the `id`
     * const challengeFlagWithIdOnly = await prisma.challengeFlag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeFlagCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeFlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChallengeFlag.
     * @param {ChallengeFlagDeleteArgs} args - Arguments to delete one ChallengeFlag.
     * @example
     * // Delete one ChallengeFlag
     * const ChallengeFlag = await prisma.challengeFlag.delete({
     *   where: {
     *     // ... filter to delete one ChallengeFlag
     *   }
     * })
     * 
     */
    delete<T extends ChallengeFlagDeleteArgs>(args: SelectSubset<T, ChallengeFlagDeleteArgs<ExtArgs>>): Prisma__ChallengeFlagClient<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChallengeFlag.
     * @param {ChallengeFlagUpdateArgs} args - Arguments to update one ChallengeFlag.
     * @example
     * // Update one ChallengeFlag
     * const challengeFlag = await prisma.challengeFlag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeFlagUpdateArgs>(args: SelectSubset<T, ChallengeFlagUpdateArgs<ExtArgs>>): Prisma__ChallengeFlagClient<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChallengeFlags.
     * @param {ChallengeFlagDeleteManyArgs} args - Arguments to filter ChallengeFlags to delete.
     * @example
     * // Delete a few ChallengeFlags
     * const { count } = await prisma.challengeFlag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeFlagDeleteManyArgs>(args?: SelectSubset<T, ChallengeFlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeFlags
     * const challengeFlag = await prisma.challengeFlag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeFlagUpdateManyArgs>(args: SelectSubset<T, ChallengeFlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeFlags and returns the data updated in the database.
     * @param {ChallengeFlagUpdateManyAndReturnArgs} args - Arguments to update many ChallengeFlags.
     * @example
     * // Update many ChallengeFlags
     * const challengeFlag = await prisma.challengeFlag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChallengeFlags and only return the `id`
     * const challengeFlagWithIdOnly = await prisma.challengeFlag.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChallengeFlagUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeFlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChallengeFlag.
     * @param {ChallengeFlagUpsertArgs} args - Arguments to update or create a ChallengeFlag.
     * @example
     * // Update or create a ChallengeFlag
     * const challengeFlag = await prisma.challengeFlag.upsert({
     *   create: {
     *     // ... data to create a ChallengeFlag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeFlag we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeFlagUpsertArgs>(args: SelectSubset<T, ChallengeFlagUpsertArgs<ExtArgs>>): Prisma__ChallengeFlagClient<$Result.GetResult<Prisma.$ChallengeFlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChallengeFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFlagCountArgs} args - Arguments to filter ChallengeFlags to count.
     * @example
     * // Count the number of ChallengeFlags
     * const count = await prisma.challengeFlag.count({
     *   where: {
     *     // ... the filter for the ChallengeFlags we want to count
     *   }
     * })
    **/
    count<T extends ChallengeFlagCountArgs>(
      args?: Subset<T, ChallengeFlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeFlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeFlagAggregateArgs>(args: Subset<T, ChallengeFlagAggregateArgs>): Prisma.PrismaPromise<GetChallengeFlagAggregateType<T>>

    /**
     * Group by ChallengeFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeFlagGroupByArgs} args - Group by arguments.
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
      T extends ChallengeFlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeFlagGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeFlagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeFlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeFlag model
   */
  readonly fields: ChallengeFlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeFlag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeFlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeDefaultArgs<ExtArgs>>): Prisma__ChallengeClient<$Result.GetResult<Prisma.$ChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends ChallengeFlag$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeFlag$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChallengeFlag model
   */
  interface ChallengeFlagFieldRefs {
    readonly id: FieldRef<"ChallengeFlag", 'String'>
    readonly flag: FieldRef<"ChallengeFlag", 'String'>
    readonly points: FieldRef<"ChallengeFlag", 'Int'>
    readonly challengeId: FieldRef<"ChallengeFlag", 'String'>
    readonly createdAt: FieldRef<"ChallengeFlag", 'DateTime'>
    readonly updatedAt: FieldRef<"ChallengeFlag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChallengeFlag findUnique
   */
  export type ChallengeFlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeFlag to fetch.
     */
    where: ChallengeFlagWhereUniqueInput
  }

  /**
   * ChallengeFlag findUniqueOrThrow
   */
  export type ChallengeFlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeFlag to fetch.
     */
    where: ChallengeFlagWhereUniqueInput
  }

  /**
   * ChallengeFlag findFirst
   */
  export type ChallengeFlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeFlag to fetch.
     */
    where?: ChallengeFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeFlags to fetch.
     */
    orderBy?: ChallengeFlagOrderByWithRelationInput | ChallengeFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeFlags.
     */
    cursor?: ChallengeFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeFlags.
     */
    distinct?: ChallengeFlagScalarFieldEnum | ChallengeFlagScalarFieldEnum[]
  }

  /**
   * ChallengeFlag findFirstOrThrow
   */
  export type ChallengeFlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeFlag to fetch.
     */
    where?: ChallengeFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeFlags to fetch.
     */
    orderBy?: ChallengeFlagOrderByWithRelationInput | ChallengeFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeFlags.
     */
    cursor?: ChallengeFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeFlags.
     */
    distinct?: ChallengeFlagScalarFieldEnum | ChallengeFlagScalarFieldEnum[]
  }

  /**
   * ChallengeFlag findMany
   */
  export type ChallengeFlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeFlags to fetch.
     */
    where?: ChallengeFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeFlags to fetch.
     */
    orderBy?: ChallengeFlagOrderByWithRelationInput | ChallengeFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeFlags.
     */
    cursor?: ChallengeFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeFlags.
     */
    skip?: number
    distinct?: ChallengeFlagScalarFieldEnum | ChallengeFlagScalarFieldEnum[]
  }

  /**
   * ChallengeFlag create
   */
  export type ChallengeFlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengeFlag.
     */
    data: XOR<ChallengeFlagCreateInput, ChallengeFlagUncheckedCreateInput>
  }

  /**
   * ChallengeFlag createMany
   */
  export type ChallengeFlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeFlags.
     */
    data: ChallengeFlagCreateManyInput | ChallengeFlagCreateManyInput[]
  }

  /**
   * ChallengeFlag createManyAndReturn
   */
  export type ChallengeFlagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * The data used to create many ChallengeFlags.
     */
    data: ChallengeFlagCreateManyInput | ChallengeFlagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeFlag update
   */
  export type ChallengeFlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengeFlag.
     */
    data: XOR<ChallengeFlagUpdateInput, ChallengeFlagUncheckedUpdateInput>
    /**
     * Choose, which ChallengeFlag to update.
     */
    where: ChallengeFlagWhereUniqueInput
  }

  /**
   * ChallengeFlag updateMany
   */
  export type ChallengeFlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeFlags.
     */
    data: XOR<ChallengeFlagUpdateManyMutationInput, ChallengeFlagUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeFlags to update
     */
    where?: ChallengeFlagWhereInput
    /**
     * Limit how many ChallengeFlags to update.
     */
    limit?: number
  }

  /**
   * ChallengeFlag updateManyAndReturn
   */
  export type ChallengeFlagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * The data used to update ChallengeFlags.
     */
    data: XOR<ChallengeFlagUpdateManyMutationInput, ChallengeFlagUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeFlags to update
     */
    where?: ChallengeFlagWhereInput
    /**
     * Limit how many ChallengeFlags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeFlag upsert
   */
  export type ChallengeFlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengeFlag to update in case it exists.
     */
    where: ChallengeFlagWhereUniqueInput
    /**
     * In case the ChallengeFlag found by the `where` argument doesn't exist, create a new ChallengeFlag with this data.
     */
    create: XOR<ChallengeFlagCreateInput, ChallengeFlagUncheckedCreateInput>
    /**
     * In case the ChallengeFlag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeFlagUpdateInput, ChallengeFlagUncheckedUpdateInput>
  }

  /**
   * ChallengeFlag delete
   */
  export type ChallengeFlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
    /**
     * Filter which ChallengeFlag to delete.
     */
    where: ChallengeFlagWhereUniqueInput
  }

  /**
   * ChallengeFlag deleteMany
   */
  export type ChallengeFlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeFlags to delete
     */
    where?: ChallengeFlagWhereInput
    /**
     * Limit how many ChallengeFlags to delete.
     */
    limit?: number
  }

  /**
   * ChallengeFlag.submissions
   */
  export type ChallengeFlag$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * ChallengeFlag without action
   */
  export type ChallengeFlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeFlag
     */
    select?: ChallengeFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeFlag
     */
    omit?: ChallengeFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeFlagInclude<ExtArgs> | null
  }


  /**
   * Model TeamPointHistory
   */

  export type AggregateTeamPointHistory = {
    _count: TeamPointHistoryCountAggregateOutputType | null
    _avg: TeamPointHistoryAvgAggregateOutputType | null
    _sum: TeamPointHistorySumAggregateOutputType | null
    _min: TeamPointHistoryMinAggregateOutputType | null
    _max: TeamPointHistoryMaxAggregateOutputType | null
  }

  export type TeamPointHistoryAvgAggregateOutputType = {
    points: number | null
    totalPoints: number | null
  }

  export type TeamPointHistorySumAggregateOutputType = {
    points: number | null
    totalPoints: number | null
  }

  export type TeamPointHistoryMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    points: number | null
    totalPoints: number | null
    reason: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type TeamPointHistoryMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    points: number | null
    totalPoints: number | null
    reason: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type TeamPointHistoryCountAggregateOutputType = {
    id: number
    teamId: number
    points: number
    totalPoints: number
    reason: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type TeamPointHistoryAvgAggregateInputType = {
    points?: true
    totalPoints?: true
  }

  export type TeamPointHistorySumAggregateInputType = {
    points?: true
    totalPoints?: true
  }

  export type TeamPointHistoryMinAggregateInputType = {
    id?: true
    teamId?: true
    points?: true
    totalPoints?: true
    reason?: true
    metadata?: true
    createdAt?: true
  }

  export type TeamPointHistoryMaxAggregateInputType = {
    id?: true
    teamId?: true
    points?: true
    totalPoints?: true
    reason?: true
    metadata?: true
    createdAt?: true
  }

  export type TeamPointHistoryCountAggregateInputType = {
    id?: true
    teamId?: true
    points?: true
    totalPoints?: true
    reason?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type TeamPointHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamPointHistory to aggregate.
     */
    where?: TeamPointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamPointHistories to fetch.
     */
    orderBy?: TeamPointHistoryOrderByWithRelationInput | TeamPointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamPointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamPointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamPointHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamPointHistories
    **/
    _count?: true | TeamPointHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamPointHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamPointHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamPointHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamPointHistoryMaxAggregateInputType
  }

  export type GetTeamPointHistoryAggregateType<T extends TeamPointHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamPointHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamPointHistory[P]>
      : GetScalarType<T[P], AggregateTeamPointHistory[P]>
  }




  export type TeamPointHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamPointHistoryWhereInput
    orderBy?: TeamPointHistoryOrderByWithAggregationInput | TeamPointHistoryOrderByWithAggregationInput[]
    by: TeamPointHistoryScalarFieldEnum[] | TeamPointHistoryScalarFieldEnum
    having?: TeamPointHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamPointHistoryCountAggregateInputType | true
    _avg?: TeamPointHistoryAvgAggregateInputType
    _sum?: TeamPointHistorySumAggregateInputType
    _min?: TeamPointHistoryMinAggregateInputType
    _max?: TeamPointHistoryMaxAggregateInputType
  }

  export type TeamPointHistoryGroupByOutputType = {
    id: string
    teamId: string
    points: number
    totalPoints: number
    reason: string
    metadata: string | null
    createdAt: Date
    _count: TeamPointHistoryCountAggregateOutputType | null
    _avg: TeamPointHistoryAvgAggregateOutputType | null
    _sum: TeamPointHistorySumAggregateOutputType | null
    _min: TeamPointHistoryMinAggregateOutputType | null
    _max: TeamPointHistoryMaxAggregateOutputType | null
  }

  type GetTeamPointHistoryGroupByPayload<T extends TeamPointHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamPointHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamPointHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamPointHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TeamPointHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TeamPointHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    points?: boolean
    totalPoints?: boolean
    reason?: boolean
    metadata?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamPointHistory"]>

  export type TeamPointHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    points?: boolean
    totalPoints?: boolean
    reason?: boolean
    metadata?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamPointHistory"]>

  export type TeamPointHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    points?: boolean
    totalPoints?: boolean
    reason?: boolean
    metadata?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamPointHistory"]>

  export type TeamPointHistorySelectScalar = {
    id?: boolean
    teamId?: boolean
    points?: boolean
    totalPoints?: boolean
    reason?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type TeamPointHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "points" | "totalPoints" | "reason" | "metadata" | "createdAt", ExtArgs["result"]["teamPointHistory"]>
  export type TeamPointHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamPointHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamPointHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamPointHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamPointHistory"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      points: number
      totalPoints: number
      reason: string
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["teamPointHistory"]>
    composites: {}
  }

  type TeamPointHistoryGetPayload<S extends boolean | null | undefined | TeamPointHistoryDefaultArgs> = $Result.GetResult<Prisma.$TeamPointHistoryPayload, S>

  type TeamPointHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamPointHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamPointHistoryCountAggregateInputType | true
    }

  export interface TeamPointHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamPointHistory'], meta: { name: 'TeamPointHistory' } }
    /**
     * Find zero or one TeamPointHistory that matches the filter.
     * @param {TeamPointHistoryFindUniqueArgs} args - Arguments to find a TeamPointHistory
     * @example
     * // Get one TeamPointHistory
     * const teamPointHistory = await prisma.teamPointHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamPointHistoryFindUniqueArgs>(args: SelectSubset<T, TeamPointHistoryFindUniqueArgs<ExtArgs>>): Prisma__TeamPointHistoryClient<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamPointHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamPointHistoryFindUniqueOrThrowArgs} args - Arguments to find a TeamPointHistory
     * @example
     * // Get one TeamPointHistory
     * const teamPointHistory = await prisma.teamPointHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamPointHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamPointHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamPointHistoryClient<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamPointHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPointHistoryFindFirstArgs} args - Arguments to find a TeamPointHistory
     * @example
     * // Get one TeamPointHistory
     * const teamPointHistory = await prisma.teamPointHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamPointHistoryFindFirstArgs>(args?: SelectSubset<T, TeamPointHistoryFindFirstArgs<ExtArgs>>): Prisma__TeamPointHistoryClient<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamPointHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPointHistoryFindFirstOrThrowArgs} args - Arguments to find a TeamPointHistory
     * @example
     * // Get one TeamPointHistory
     * const teamPointHistory = await prisma.teamPointHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamPointHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamPointHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamPointHistoryClient<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamPointHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPointHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamPointHistories
     * const teamPointHistories = await prisma.teamPointHistory.findMany()
     * 
     * // Get first 10 TeamPointHistories
     * const teamPointHistories = await prisma.teamPointHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamPointHistoryWithIdOnly = await prisma.teamPointHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamPointHistoryFindManyArgs>(args?: SelectSubset<T, TeamPointHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamPointHistory.
     * @param {TeamPointHistoryCreateArgs} args - Arguments to create a TeamPointHistory.
     * @example
     * // Create one TeamPointHistory
     * const TeamPointHistory = await prisma.teamPointHistory.create({
     *   data: {
     *     // ... data to create a TeamPointHistory
     *   }
     * })
     * 
     */
    create<T extends TeamPointHistoryCreateArgs>(args: SelectSubset<T, TeamPointHistoryCreateArgs<ExtArgs>>): Prisma__TeamPointHistoryClient<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamPointHistories.
     * @param {TeamPointHistoryCreateManyArgs} args - Arguments to create many TeamPointHistories.
     * @example
     * // Create many TeamPointHistories
     * const teamPointHistory = await prisma.teamPointHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamPointHistoryCreateManyArgs>(args?: SelectSubset<T, TeamPointHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamPointHistories and returns the data saved in the database.
     * @param {TeamPointHistoryCreateManyAndReturnArgs} args - Arguments to create many TeamPointHistories.
     * @example
     * // Create many TeamPointHistories
     * const teamPointHistory = await prisma.teamPointHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamPointHistories and only return the `id`
     * const teamPointHistoryWithIdOnly = await prisma.teamPointHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamPointHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamPointHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamPointHistory.
     * @param {TeamPointHistoryDeleteArgs} args - Arguments to delete one TeamPointHistory.
     * @example
     * // Delete one TeamPointHistory
     * const TeamPointHistory = await prisma.teamPointHistory.delete({
     *   where: {
     *     // ... filter to delete one TeamPointHistory
     *   }
     * })
     * 
     */
    delete<T extends TeamPointHistoryDeleteArgs>(args: SelectSubset<T, TeamPointHistoryDeleteArgs<ExtArgs>>): Prisma__TeamPointHistoryClient<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamPointHistory.
     * @param {TeamPointHistoryUpdateArgs} args - Arguments to update one TeamPointHistory.
     * @example
     * // Update one TeamPointHistory
     * const teamPointHistory = await prisma.teamPointHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamPointHistoryUpdateArgs>(args: SelectSubset<T, TeamPointHistoryUpdateArgs<ExtArgs>>): Prisma__TeamPointHistoryClient<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamPointHistories.
     * @param {TeamPointHistoryDeleteManyArgs} args - Arguments to filter TeamPointHistories to delete.
     * @example
     * // Delete a few TeamPointHistories
     * const { count } = await prisma.teamPointHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamPointHistoryDeleteManyArgs>(args?: SelectSubset<T, TeamPointHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamPointHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPointHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamPointHistories
     * const teamPointHistory = await prisma.teamPointHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamPointHistoryUpdateManyArgs>(args: SelectSubset<T, TeamPointHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamPointHistories and returns the data updated in the database.
     * @param {TeamPointHistoryUpdateManyAndReturnArgs} args - Arguments to update many TeamPointHistories.
     * @example
     * // Update many TeamPointHistories
     * const teamPointHistory = await prisma.teamPointHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamPointHistories and only return the `id`
     * const teamPointHistoryWithIdOnly = await prisma.teamPointHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamPointHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamPointHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamPointHistory.
     * @param {TeamPointHistoryUpsertArgs} args - Arguments to update or create a TeamPointHistory.
     * @example
     * // Update or create a TeamPointHistory
     * const teamPointHistory = await prisma.teamPointHistory.upsert({
     *   create: {
     *     // ... data to create a TeamPointHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamPointHistory we want to update
     *   }
     * })
     */
    upsert<T extends TeamPointHistoryUpsertArgs>(args: SelectSubset<T, TeamPointHistoryUpsertArgs<ExtArgs>>): Prisma__TeamPointHistoryClient<$Result.GetResult<Prisma.$TeamPointHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamPointHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPointHistoryCountArgs} args - Arguments to filter TeamPointHistories to count.
     * @example
     * // Count the number of TeamPointHistories
     * const count = await prisma.teamPointHistory.count({
     *   where: {
     *     // ... the filter for the TeamPointHistories we want to count
     *   }
     * })
    **/
    count<T extends TeamPointHistoryCountArgs>(
      args?: Subset<T, TeamPointHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamPointHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamPointHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPointHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamPointHistoryAggregateArgs>(args: Subset<T, TeamPointHistoryAggregateArgs>): Prisma.PrismaPromise<GetTeamPointHistoryAggregateType<T>>

    /**
     * Group by TeamPointHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPointHistoryGroupByArgs} args - Group by arguments.
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
      T extends TeamPointHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamPointHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TeamPointHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamPointHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamPointHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamPointHistory model
   */
  readonly fields: TeamPointHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamPointHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamPointHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamPointHistory model
   */
  interface TeamPointHistoryFieldRefs {
    readonly id: FieldRef<"TeamPointHistory", 'String'>
    readonly teamId: FieldRef<"TeamPointHistory", 'String'>
    readonly points: FieldRef<"TeamPointHistory", 'Int'>
    readonly totalPoints: FieldRef<"TeamPointHistory", 'Int'>
    readonly reason: FieldRef<"TeamPointHistory", 'String'>
    readonly metadata: FieldRef<"TeamPointHistory", 'String'>
    readonly createdAt: FieldRef<"TeamPointHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamPointHistory findUnique
   */
  export type TeamPointHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeamPointHistory to fetch.
     */
    where: TeamPointHistoryWhereUniqueInput
  }

  /**
   * TeamPointHistory findUniqueOrThrow
   */
  export type TeamPointHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeamPointHistory to fetch.
     */
    where: TeamPointHistoryWhereUniqueInput
  }

  /**
   * TeamPointHistory findFirst
   */
  export type TeamPointHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeamPointHistory to fetch.
     */
    where?: TeamPointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamPointHistories to fetch.
     */
    orderBy?: TeamPointHistoryOrderByWithRelationInput | TeamPointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamPointHistories.
     */
    cursor?: TeamPointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamPointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamPointHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamPointHistories.
     */
    distinct?: TeamPointHistoryScalarFieldEnum | TeamPointHistoryScalarFieldEnum[]
  }

  /**
   * TeamPointHistory findFirstOrThrow
   */
  export type TeamPointHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeamPointHistory to fetch.
     */
    where?: TeamPointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamPointHistories to fetch.
     */
    orderBy?: TeamPointHistoryOrderByWithRelationInput | TeamPointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamPointHistories.
     */
    cursor?: TeamPointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamPointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamPointHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamPointHistories.
     */
    distinct?: TeamPointHistoryScalarFieldEnum | TeamPointHistoryScalarFieldEnum[]
  }

  /**
   * TeamPointHistory findMany
   */
  export type TeamPointHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeamPointHistories to fetch.
     */
    where?: TeamPointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamPointHistories to fetch.
     */
    orderBy?: TeamPointHistoryOrderByWithRelationInput | TeamPointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamPointHistories.
     */
    cursor?: TeamPointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamPointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamPointHistories.
     */
    skip?: number
    distinct?: TeamPointHistoryScalarFieldEnum | TeamPointHistoryScalarFieldEnum[]
  }

  /**
   * TeamPointHistory create
   */
  export type TeamPointHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamPointHistory.
     */
    data: XOR<TeamPointHistoryCreateInput, TeamPointHistoryUncheckedCreateInput>
  }

  /**
   * TeamPointHistory createMany
   */
  export type TeamPointHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamPointHistories.
     */
    data: TeamPointHistoryCreateManyInput | TeamPointHistoryCreateManyInput[]
  }

  /**
   * TeamPointHistory createManyAndReturn
   */
  export type TeamPointHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TeamPointHistories.
     */
    data: TeamPointHistoryCreateManyInput | TeamPointHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamPointHistory update
   */
  export type TeamPointHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamPointHistory.
     */
    data: XOR<TeamPointHistoryUpdateInput, TeamPointHistoryUncheckedUpdateInput>
    /**
     * Choose, which TeamPointHistory to update.
     */
    where: TeamPointHistoryWhereUniqueInput
  }

  /**
   * TeamPointHistory updateMany
   */
  export type TeamPointHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamPointHistories.
     */
    data: XOR<TeamPointHistoryUpdateManyMutationInput, TeamPointHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TeamPointHistories to update
     */
    where?: TeamPointHistoryWhereInput
    /**
     * Limit how many TeamPointHistories to update.
     */
    limit?: number
  }

  /**
   * TeamPointHistory updateManyAndReturn
   */
  export type TeamPointHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TeamPointHistories.
     */
    data: XOR<TeamPointHistoryUpdateManyMutationInput, TeamPointHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TeamPointHistories to update
     */
    where?: TeamPointHistoryWhereInput
    /**
     * Limit how many TeamPointHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamPointHistory upsert
   */
  export type TeamPointHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamPointHistory to update in case it exists.
     */
    where: TeamPointHistoryWhereUniqueInput
    /**
     * In case the TeamPointHistory found by the `where` argument doesn't exist, create a new TeamPointHistory with this data.
     */
    create: XOR<TeamPointHistoryCreateInput, TeamPointHistoryUncheckedCreateInput>
    /**
     * In case the TeamPointHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamPointHistoryUpdateInput, TeamPointHistoryUncheckedUpdateInput>
  }

  /**
   * TeamPointHistory delete
   */
  export type TeamPointHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
    /**
     * Filter which TeamPointHistory to delete.
     */
    where: TeamPointHistoryWhereUniqueInput
  }

  /**
   * TeamPointHistory deleteMany
   */
  export type TeamPointHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamPointHistories to delete
     */
    where?: TeamPointHistoryWhereInput
    /**
     * Limit how many TeamPointHistories to delete.
     */
    limit?: number
  }

  /**
   * TeamPointHistory without action
   */
  export type TeamPointHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPointHistory
     */
    select?: TeamPointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPointHistory
     */
    omit?: TeamPointHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPointHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    alias: 'alias',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    teamId: 'teamId',
    isTeamLeader: 'isTeamLeader',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    icon: 'icon',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    score: 'score'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const ChallengeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    points: 'points',
    flag: 'flag',
    multipleFlags: 'multipleFlags',
    category: 'category',
    difficulty: 'difficulty',
    isActive: 'isActive',
    isLocked: 'isLocked',
    link: 'link',
    solveExplanation: 'solveExplanation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengeScalarFieldEnum = (typeof ChallengeScalarFieldEnum)[keyof typeof ChallengeScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    flag: 'flag',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    challengeId: 'challengeId',
    flagId: 'flagId',
    teamId: 'teamId'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    type: 'type',
    description: 'description',
    teamId: 'teamId',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const GameConfigScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameConfigScalarFieldEnum = (typeof GameConfigScalarFieldEnum)[keyof typeof GameConfigScalarFieldEnum]


  export const ChallengeFileScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    size: 'size',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    challengeId: 'challengeId'
  };

  export type ChallengeFileScalarFieldEnum = (typeof ChallengeFileScalarFieldEnum)[keyof typeof ChallengeFileScalarFieldEnum]


  export const HintScalarFieldEnum: {
    id: 'id',
    content: 'content',
    cost: 'cost',
    challengeId: 'challengeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HintScalarFieldEnum = (typeof HintScalarFieldEnum)[keyof typeof HintScalarFieldEnum]


  export const TeamHintScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    hintId: 'hintId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamHintScalarFieldEnum = (typeof TeamHintScalarFieldEnum)[keyof typeof TeamHintScalarFieldEnum]


  export const SiteConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SiteConfigScalarFieldEnum = (typeof SiteConfigScalarFieldEnum)[keyof typeof SiteConfigScalarFieldEnum]


  export const ScoreScalarFieldEnum: {
    id: 'id',
    points: 'points',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    teamId: 'teamId',
    challengeId: 'challengeId'
  };

  export type ScoreScalarFieldEnum = (typeof ScoreScalarFieldEnum)[keyof typeof ScoreScalarFieldEnum]


  export const UnlockConditionScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    type: 'type',
    requiredChallengeId: 'requiredChallengeId',
    timeThresholdSeconds: 'timeThresholdSeconds',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnlockConditionScalarFieldEnum = (typeof UnlockConditionScalarFieldEnum)[keyof typeof UnlockConditionScalarFieldEnum]


  export const ChallengeFlagScalarFieldEnum: {
    id: 'id',
    flag: 'flag',
    points: 'points',
    challengeId: 'challengeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallengeFlagScalarFieldEnum = (typeof ChallengeFlagScalarFieldEnum)[keyof typeof ChallengeFlagScalarFieldEnum]


  export const TeamPointHistoryScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    points: 'points',
    totalPoints: 'totalPoints',
    reason: 'reason',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type TeamPointHistoryScalarFieldEnum = (typeof TeamPointHistoryScalarFieldEnum)[keyof typeof TeamPointHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'UnlockConditionType'
   */
  export type EnumUnlockConditionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnlockConditionType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    alias?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teamId?: StringNullableFilter<"User"> | string | null
    isTeamLeader?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    submissions?: SubmissionListRelationFilter
    scores?: ScoreListRelationFilter
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    alias?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teamId?: SortOrderInput | SortOrder
    isTeamLeader?: SortOrder
    isAdmin?: SortOrder
    submissions?: SubmissionOrderByRelationAggregateInput
    scores?: ScoreOrderByRelationAggregateInput
    team?: TeamOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alias?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teamId?: StringNullableFilter<"User"> | string | null
    isTeamLeader?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
    submissions?: SubmissionListRelationFilter
    scores?: ScoreListRelationFilter
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }, "id" | "alias">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    alias?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teamId?: SortOrderInput | SortOrder
    isTeamLeader?: SortOrder
    isAdmin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    alias?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    teamId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isTeamLeader?: BoolWithAggregatesFilter<"User"> | boolean
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    code?: StringFilter<"Team"> | string
    icon?: StringFilter<"Team"> | string
    color?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    score?: IntFilter<"Team"> | number
    ActivityLog?: ActivityLogListRelationFilter
    submissions?: SubmissionListRelationFilter
    scores?: ScoreListRelationFilter
    teamHints?: TeamHintListRelationFilter
    members?: UserListRelationFilter
    pointHistory?: TeamPointHistoryListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    score?: SortOrder
    ActivityLog?: ActivityLogOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    scores?: ScoreOrderByRelationAggregateInput
    teamHints?: TeamHintOrderByRelationAggregateInput
    members?: UserOrderByRelationAggregateInput
    pointHistory?: TeamPointHistoryOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    code?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    icon?: StringFilter<"Team"> | string
    color?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    score?: IntFilter<"Team"> | number
    ActivityLog?: ActivityLogListRelationFilter
    submissions?: SubmissionListRelationFilter
    scores?: ScoreListRelationFilter
    teamHints?: TeamHintListRelationFilter
    members?: UserListRelationFilter
    pointHistory?: TeamPointHistoryListRelationFilter
  }, "id" | "name" | "code">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    score?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    code?: StringWithAggregatesFilter<"Team"> | string
    icon?: StringWithAggregatesFilter<"Team"> | string
    color?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    score?: IntWithAggregatesFilter<"Team"> | number
  }

  export type ChallengeWhereInput = {
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    id?: StringFilter<"Challenge"> | string
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    points?: IntFilter<"Challenge"> | number
    flag?: StringNullableFilter<"Challenge"> | string | null
    multipleFlags?: BoolFilter<"Challenge"> | boolean
    category?: StringFilter<"Challenge"> | string
    difficulty?: StringFilter<"Challenge"> | string
    isActive?: BoolFilter<"Challenge"> | boolean
    isLocked?: BoolFilter<"Challenge"> | boolean
    link?: StringNullableFilter<"Challenge"> | string | null
    solveExplanation?: StringNullableFilter<"Challenge"> | string | null
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    flags?: ChallengeFlagListRelationFilter
    unlockConditions?: UnlockConditionListRelationFilter
    files?: ChallengeFileListRelationFilter
    hints?: HintListRelationFilter
    submissions?: SubmissionListRelationFilter
    scores?: ScoreListRelationFilter
  }

  export type ChallengeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    points?: SortOrder
    flag?: SortOrderInput | SortOrder
    multipleFlags?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    isLocked?: SortOrder
    link?: SortOrderInput | SortOrder
    solveExplanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flags?: ChallengeFlagOrderByRelationAggregateInput
    unlockConditions?: UnlockConditionOrderByRelationAggregateInput
    files?: ChallengeFileOrderByRelationAggregateInput
    hints?: HintOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    scores?: ScoreOrderByRelationAggregateInput
  }

  export type ChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeWhereInput | ChallengeWhereInput[]
    OR?: ChallengeWhereInput[]
    NOT?: ChallengeWhereInput | ChallengeWhereInput[]
    title?: StringFilter<"Challenge"> | string
    description?: StringFilter<"Challenge"> | string
    points?: IntFilter<"Challenge"> | number
    flag?: StringNullableFilter<"Challenge"> | string | null
    multipleFlags?: BoolFilter<"Challenge"> | boolean
    category?: StringFilter<"Challenge"> | string
    difficulty?: StringFilter<"Challenge"> | string
    isActive?: BoolFilter<"Challenge"> | boolean
    isLocked?: BoolFilter<"Challenge"> | boolean
    link?: StringNullableFilter<"Challenge"> | string | null
    solveExplanation?: StringNullableFilter<"Challenge"> | string | null
    createdAt?: DateTimeFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeFilter<"Challenge"> | Date | string
    flags?: ChallengeFlagListRelationFilter
    unlockConditions?: UnlockConditionListRelationFilter
    files?: ChallengeFileListRelationFilter
    hints?: HintListRelationFilter
    submissions?: SubmissionListRelationFilter
    scores?: ScoreListRelationFilter
  }, "id">

  export type ChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    points?: SortOrder
    flag?: SortOrderInput | SortOrder
    multipleFlags?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    isLocked?: SortOrder
    link?: SortOrderInput | SortOrder
    solveExplanation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengeCountOrderByAggregateInput
    _avg?: ChallengeAvgOrderByAggregateInput
    _max?: ChallengeMaxOrderByAggregateInput
    _min?: ChallengeMinOrderByAggregateInput
    _sum?: ChallengeSumOrderByAggregateInput
  }

  export type ChallengeScalarWhereWithAggregatesInput = {
    AND?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    OR?: ChallengeScalarWhereWithAggregatesInput[]
    NOT?: ChallengeScalarWhereWithAggregatesInput | ChallengeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challenge"> | string
    title?: StringWithAggregatesFilter<"Challenge"> | string
    description?: StringWithAggregatesFilter<"Challenge"> | string
    points?: IntWithAggregatesFilter<"Challenge"> | number
    flag?: StringNullableWithAggregatesFilter<"Challenge"> | string | null
    multipleFlags?: BoolWithAggregatesFilter<"Challenge"> | boolean
    category?: StringWithAggregatesFilter<"Challenge"> | string
    difficulty?: StringWithAggregatesFilter<"Challenge"> | string
    isActive?: BoolWithAggregatesFilter<"Challenge"> | boolean
    isLocked?: BoolWithAggregatesFilter<"Challenge"> | boolean
    link?: StringNullableWithAggregatesFilter<"Challenge"> | string | null
    solveExplanation?: StringNullableWithAggregatesFilter<"Challenge"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challenge"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    flag?: StringFilter<"Submission"> | string
    isCorrect?: BoolFilter<"Submission"> | boolean
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringFilter<"Submission"> | string
    challengeId?: StringFilter<"Submission"> | string
    flagId?: StringNullableFilter<"Submission"> | string | null
    teamId?: StringFilter<"Submission"> | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    challengeFlag?: XOR<ChallengeFlagNullableScalarRelationFilter, ChallengeFlagWhereInput> | null
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    flag?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    flagId?: SortOrderInput | SortOrder
    teamId?: SortOrder
    team?: TeamOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    challengeFlag?: ChallengeFlagOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    flag?: StringFilter<"Submission"> | string
    isCorrect?: BoolFilter<"Submission"> | boolean
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringFilter<"Submission"> | string
    challengeId?: StringFilter<"Submission"> | string
    flagId?: StringNullableFilter<"Submission"> | string | null
    teamId?: StringFilter<"Submission"> | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    challengeFlag?: XOR<ChallengeFlagNullableScalarRelationFilter, ChallengeFlagWhereInput> | null
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    flag?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    flagId?: SortOrderInput | SortOrder
    teamId?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    flag?: StringWithAggregatesFilter<"Submission"> | string
    isCorrect?: BoolWithAggregatesFilter<"Submission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    challengeId?: StringWithAggregatesFilter<"Submission"> | string
    flagId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    teamId?: StringWithAggregatesFilter<"Submission"> | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    type?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    teamId?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    type?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    teamId?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    teamId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    type?: StringWithAggregatesFilter<"ActivityLog"> | string
    description?: StringWithAggregatesFilter<"ActivityLog"> | string
    teamId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type GameConfigWhereInput = {
    AND?: GameConfigWhereInput | GameConfigWhereInput[]
    OR?: GameConfigWhereInput[]
    NOT?: GameConfigWhereInput | GameConfigWhereInput[]
    id?: StringFilter<"GameConfig"> | string
    startTime?: DateTimeFilter<"GameConfig"> | Date | string
    endTime?: DateTimeNullableFilter<"GameConfig"> | Date | string | null
    isActive?: BoolFilter<"GameConfig"> | boolean
    createdAt?: DateTimeFilter<"GameConfig"> | Date | string
    updatedAt?: DateTimeFilter<"GameConfig"> | Date | string
  }

  export type GameConfigOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameConfigWhereInput | GameConfigWhereInput[]
    OR?: GameConfigWhereInput[]
    NOT?: GameConfigWhereInput | GameConfigWhereInput[]
    startTime?: DateTimeFilter<"GameConfig"> | Date | string
    endTime?: DateTimeNullableFilter<"GameConfig"> | Date | string | null
    isActive?: BoolFilter<"GameConfig"> | boolean
    createdAt?: DateTimeFilter<"GameConfig"> | Date | string
    updatedAt?: DateTimeFilter<"GameConfig"> | Date | string
  }, "id">

  export type GameConfigOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameConfigCountOrderByAggregateInput
    _max?: GameConfigMaxOrderByAggregateInput
    _min?: GameConfigMinOrderByAggregateInput
  }

  export type GameConfigScalarWhereWithAggregatesInput = {
    AND?: GameConfigScalarWhereWithAggregatesInput | GameConfigScalarWhereWithAggregatesInput[]
    OR?: GameConfigScalarWhereWithAggregatesInput[]
    NOT?: GameConfigScalarWhereWithAggregatesInput | GameConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameConfig"> | string
    startTime?: DateTimeWithAggregatesFilter<"GameConfig"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"GameConfig"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"GameConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GameConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameConfig"> | Date | string
  }

  export type ChallengeFileWhereInput = {
    AND?: ChallengeFileWhereInput | ChallengeFileWhereInput[]
    OR?: ChallengeFileWhereInput[]
    NOT?: ChallengeFileWhereInput | ChallengeFileWhereInput[]
    id?: StringFilter<"ChallengeFile"> | string
    name?: StringFilter<"ChallengeFile"> | string
    path?: StringFilter<"ChallengeFile"> | string
    size?: IntFilter<"ChallengeFile"> | number
    createdAt?: DateTimeFilter<"ChallengeFile"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengeFile"> | Date | string
    challengeId?: StringFilter<"ChallengeFile"> | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }

  export type ChallengeFileOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
  }

  export type ChallengeFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeFileWhereInput | ChallengeFileWhereInput[]
    OR?: ChallengeFileWhereInput[]
    NOT?: ChallengeFileWhereInput | ChallengeFileWhereInput[]
    name?: StringFilter<"ChallengeFile"> | string
    path?: StringFilter<"ChallengeFile"> | string
    size?: IntFilter<"ChallengeFile"> | number
    createdAt?: DateTimeFilter<"ChallengeFile"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengeFile"> | Date | string
    challengeId?: StringFilter<"ChallengeFile"> | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }, "id">

  export type ChallengeFileOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
    _count?: ChallengeFileCountOrderByAggregateInput
    _avg?: ChallengeFileAvgOrderByAggregateInput
    _max?: ChallengeFileMaxOrderByAggregateInput
    _min?: ChallengeFileMinOrderByAggregateInput
    _sum?: ChallengeFileSumOrderByAggregateInput
  }

  export type ChallengeFileScalarWhereWithAggregatesInput = {
    AND?: ChallengeFileScalarWhereWithAggregatesInput | ChallengeFileScalarWhereWithAggregatesInput[]
    OR?: ChallengeFileScalarWhereWithAggregatesInput[]
    NOT?: ChallengeFileScalarWhereWithAggregatesInput | ChallengeFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChallengeFile"> | string
    name?: StringWithAggregatesFilter<"ChallengeFile"> | string
    path?: StringWithAggregatesFilter<"ChallengeFile"> | string
    size?: IntWithAggregatesFilter<"ChallengeFile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ChallengeFile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChallengeFile"> | Date | string
    challengeId?: StringWithAggregatesFilter<"ChallengeFile"> | string
  }

  export type HintWhereInput = {
    AND?: HintWhereInput | HintWhereInput[]
    OR?: HintWhereInput[]
    NOT?: HintWhereInput | HintWhereInput[]
    id?: StringFilter<"Hint"> | string
    content?: StringFilter<"Hint"> | string
    cost?: IntFilter<"Hint"> | number
    challengeId?: StringFilter<"Hint"> | string
    createdAt?: DateTimeFilter<"Hint"> | Date | string
    updatedAt?: DateTimeFilter<"Hint"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    teamHints?: TeamHintListRelationFilter
  }

  export type HintOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    cost?: SortOrder
    challengeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    teamHints?: TeamHintOrderByRelationAggregateInput
  }

  export type HintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HintWhereInput | HintWhereInput[]
    OR?: HintWhereInput[]
    NOT?: HintWhereInput | HintWhereInput[]
    content?: StringFilter<"Hint"> | string
    cost?: IntFilter<"Hint"> | number
    challengeId?: StringFilter<"Hint"> | string
    createdAt?: DateTimeFilter<"Hint"> | Date | string
    updatedAt?: DateTimeFilter<"Hint"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    teamHints?: TeamHintListRelationFilter
  }, "id">

  export type HintOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    cost?: SortOrder
    challengeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HintCountOrderByAggregateInput
    _avg?: HintAvgOrderByAggregateInput
    _max?: HintMaxOrderByAggregateInput
    _min?: HintMinOrderByAggregateInput
    _sum?: HintSumOrderByAggregateInput
  }

  export type HintScalarWhereWithAggregatesInput = {
    AND?: HintScalarWhereWithAggregatesInput | HintScalarWhereWithAggregatesInput[]
    OR?: HintScalarWhereWithAggregatesInput[]
    NOT?: HintScalarWhereWithAggregatesInput | HintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hint"> | string
    content?: StringWithAggregatesFilter<"Hint"> | string
    cost?: IntWithAggregatesFilter<"Hint"> | number
    challengeId?: StringWithAggregatesFilter<"Hint"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Hint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hint"> | Date | string
  }

  export type TeamHintWhereInput = {
    AND?: TeamHintWhereInput | TeamHintWhereInput[]
    OR?: TeamHintWhereInput[]
    NOT?: TeamHintWhereInput | TeamHintWhereInput[]
    id?: StringFilter<"TeamHint"> | string
    teamId?: StringFilter<"TeamHint"> | string
    hintId?: StringFilter<"TeamHint"> | string
    createdAt?: DateTimeFilter<"TeamHint"> | Date | string
    updatedAt?: DateTimeFilter<"TeamHint"> | Date | string
    hint?: XOR<HintScalarRelationFilter, HintWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamHintOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    hintId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hint?: HintOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type TeamHintWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_hintId?: TeamHintTeamIdHintIdCompoundUniqueInput
    AND?: TeamHintWhereInput | TeamHintWhereInput[]
    OR?: TeamHintWhereInput[]
    NOT?: TeamHintWhereInput | TeamHintWhereInput[]
    teamId?: StringFilter<"TeamHint"> | string
    hintId?: StringFilter<"TeamHint"> | string
    createdAt?: DateTimeFilter<"TeamHint"> | Date | string
    updatedAt?: DateTimeFilter<"TeamHint"> | Date | string
    hint?: XOR<HintScalarRelationFilter, HintWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "teamId_hintId">

  export type TeamHintOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    hintId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamHintCountOrderByAggregateInput
    _max?: TeamHintMaxOrderByAggregateInput
    _min?: TeamHintMinOrderByAggregateInput
  }

  export type TeamHintScalarWhereWithAggregatesInput = {
    AND?: TeamHintScalarWhereWithAggregatesInput | TeamHintScalarWhereWithAggregatesInput[]
    OR?: TeamHintScalarWhereWithAggregatesInput[]
    NOT?: TeamHintScalarWhereWithAggregatesInput | TeamHintScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamHint"> | string
    teamId?: StringWithAggregatesFilter<"TeamHint"> | string
    hintId?: StringWithAggregatesFilter<"TeamHint"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeamHint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamHint"> | Date | string
  }

  export type SiteConfigWhereInput = {
    AND?: SiteConfigWhereInput | SiteConfigWhereInput[]
    OR?: SiteConfigWhereInput[]
    NOT?: SiteConfigWhereInput | SiteConfigWhereInput[]
    id?: StringFilter<"SiteConfig"> | string
    key?: StringFilter<"SiteConfig"> | string
    value?: StringFilter<"SiteConfig"> | string
    updatedAt?: DateTimeFilter<"SiteConfig"> | Date | string
  }

  export type SiteConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SiteConfigWhereInput | SiteConfigWhereInput[]
    OR?: SiteConfigWhereInput[]
    NOT?: SiteConfigWhereInput | SiteConfigWhereInput[]
    value?: StringFilter<"SiteConfig"> | string
    updatedAt?: DateTimeFilter<"SiteConfig"> | Date | string
  }, "id" | "key">

  export type SiteConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteConfigCountOrderByAggregateInput
    _max?: SiteConfigMaxOrderByAggregateInput
    _min?: SiteConfigMinOrderByAggregateInput
  }

  export type SiteConfigScalarWhereWithAggregatesInput = {
    AND?: SiteConfigScalarWhereWithAggregatesInput | SiteConfigScalarWhereWithAggregatesInput[]
    OR?: SiteConfigScalarWhereWithAggregatesInput[]
    NOT?: SiteConfigScalarWhereWithAggregatesInput | SiteConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteConfig"> | string
    key?: StringWithAggregatesFilter<"SiteConfig"> | string
    value?: StringWithAggregatesFilter<"SiteConfig"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteConfig"> | Date | string
  }

  export type ScoreWhereInput = {
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    id?: StringFilter<"Score"> | string
    points?: IntFilter<"Score"> | number
    createdAt?: DateTimeFilter<"Score"> | Date | string
    updatedAt?: DateTimeFilter<"Score"> | Date | string
    userId?: StringFilter<"Score"> | string
    teamId?: StringFilter<"Score"> | string
    challengeId?: StringFilter<"Score"> | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ScoreOrderByWithRelationInput = {
    id?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    challengeId?: SortOrder
    team?: TeamOrderByWithRelationInput
    challenge?: ChallengeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScoreWhereInput | ScoreWhereInput[]
    OR?: ScoreWhereInput[]
    NOT?: ScoreWhereInput | ScoreWhereInput[]
    points?: IntFilter<"Score"> | number
    createdAt?: DateTimeFilter<"Score"> | Date | string
    updatedAt?: DateTimeFilter<"Score"> | Date | string
    userId?: StringFilter<"Score"> | string
    teamId?: StringFilter<"Score"> | string
    challengeId?: StringFilter<"Score"> | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ScoreOrderByWithAggregationInput = {
    id?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    challengeId?: SortOrder
    _count?: ScoreCountOrderByAggregateInput
    _avg?: ScoreAvgOrderByAggregateInput
    _max?: ScoreMaxOrderByAggregateInput
    _min?: ScoreMinOrderByAggregateInput
    _sum?: ScoreSumOrderByAggregateInput
  }

  export type ScoreScalarWhereWithAggregatesInput = {
    AND?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    OR?: ScoreScalarWhereWithAggregatesInput[]
    NOT?: ScoreScalarWhereWithAggregatesInput | ScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Score"> | string
    points?: IntWithAggregatesFilter<"Score"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Score"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Score"> | Date | string
    userId?: StringWithAggregatesFilter<"Score"> | string
    teamId?: StringWithAggregatesFilter<"Score"> | string
    challengeId?: StringWithAggregatesFilter<"Score"> | string
  }

  export type UnlockConditionWhereInput = {
    AND?: UnlockConditionWhereInput | UnlockConditionWhereInput[]
    OR?: UnlockConditionWhereInput[]
    NOT?: UnlockConditionWhereInput | UnlockConditionWhereInput[]
    id?: StringFilter<"UnlockCondition"> | string
    challengeId?: StringFilter<"UnlockCondition"> | string
    type?: EnumUnlockConditionTypeFilter<"UnlockCondition"> | $Enums.UnlockConditionType
    requiredChallengeId?: StringNullableFilter<"UnlockCondition"> | string | null
    timeThresholdSeconds?: IntNullableFilter<"UnlockCondition"> | number | null
    createdAt?: DateTimeFilter<"UnlockCondition"> | Date | string
    updatedAt?: DateTimeFilter<"UnlockCondition"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }

  export type UnlockConditionOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    type?: SortOrder
    requiredChallengeId?: SortOrderInput | SortOrder
    timeThresholdSeconds?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
  }

  export type UnlockConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnlockConditionWhereInput | UnlockConditionWhereInput[]
    OR?: UnlockConditionWhereInput[]
    NOT?: UnlockConditionWhereInput | UnlockConditionWhereInput[]
    challengeId?: StringFilter<"UnlockCondition"> | string
    type?: EnumUnlockConditionTypeFilter<"UnlockCondition"> | $Enums.UnlockConditionType
    requiredChallengeId?: StringNullableFilter<"UnlockCondition"> | string | null
    timeThresholdSeconds?: IntNullableFilter<"UnlockCondition"> | number | null
    createdAt?: DateTimeFilter<"UnlockCondition"> | Date | string
    updatedAt?: DateTimeFilter<"UnlockCondition"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
  }, "id">

  export type UnlockConditionOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    type?: SortOrder
    requiredChallengeId?: SortOrderInput | SortOrder
    timeThresholdSeconds?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnlockConditionCountOrderByAggregateInput
    _avg?: UnlockConditionAvgOrderByAggregateInput
    _max?: UnlockConditionMaxOrderByAggregateInput
    _min?: UnlockConditionMinOrderByAggregateInput
    _sum?: UnlockConditionSumOrderByAggregateInput
  }

  export type UnlockConditionScalarWhereWithAggregatesInput = {
    AND?: UnlockConditionScalarWhereWithAggregatesInput | UnlockConditionScalarWhereWithAggregatesInput[]
    OR?: UnlockConditionScalarWhereWithAggregatesInput[]
    NOT?: UnlockConditionScalarWhereWithAggregatesInput | UnlockConditionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnlockCondition"> | string
    challengeId?: StringWithAggregatesFilter<"UnlockCondition"> | string
    type?: EnumUnlockConditionTypeWithAggregatesFilter<"UnlockCondition"> | $Enums.UnlockConditionType
    requiredChallengeId?: StringNullableWithAggregatesFilter<"UnlockCondition"> | string | null
    timeThresholdSeconds?: IntNullableWithAggregatesFilter<"UnlockCondition"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UnlockCondition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UnlockCondition"> | Date | string
  }

  export type ChallengeFlagWhereInput = {
    AND?: ChallengeFlagWhereInput | ChallengeFlagWhereInput[]
    OR?: ChallengeFlagWhereInput[]
    NOT?: ChallengeFlagWhereInput | ChallengeFlagWhereInput[]
    id?: StringFilter<"ChallengeFlag"> | string
    flag?: StringFilter<"ChallengeFlag"> | string
    points?: IntFilter<"ChallengeFlag"> | number
    challengeId?: StringFilter<"ChallengeFlag"> | string
    createdAt?: DateTimeFilter<"ChallengeFlag"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengeFlag"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    submissions?: SubmissionListRelationFilter
  }

  export type ChallengeFlagOrderByWithRelationInput = {
    id?: SortOrder
    flag?: SortOrder
    points?: SortOrder
    challengeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challenge?: ChallengeOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type ChallengeFlagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeFlagWhereInput | ChallengeFlagWhereInput[]
    OR?: ChallengeFlagWhereInput[]
    NOT?: ChallengeFlagWhereInput | ChallengeFlagWhereInput[]
    flag?: StringFilter<"ChallengeFlag"> | string
    points?: IntFilter<"ChallengeFlag"> | number
    challengeId?: StringFilter<"ChallengeFlag"> | string
    createdAt?: DateTimeFilter<"ChallengeFlag"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengeFlag"> | Date | string
    challenge?: XOR<ChallengeScalarRelationFilter, ChallengeWhereInput>
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type ChallengeFlagOrderByWithAggregationInput = {
    id?: SortOrder
    flag?: SortOrder
    points?: SortOrder
    challengeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallengeFlagCountOrderByAggregateInput
    _avg?: ChallengeFlagAvgOrderByAggregateInput
    _max?: ChallengeFlagMaxOrderByAggregateInput
    _min?: ChallengeFlagMinOrderByAggregateInput
    _sum?: ChallengeFlagSumOrderByAggregateInput
  }

  export type ChallengeFlagScalarWhereWithAggregatesInput = {
    AND?: ChallengeFlagScalarWhereWithAggregatesInput | ChallengeFlagScalarWhereWithAggregatesInput[]
    OR?: ChallengeFlagScalarWhereWithAggregatesInput[]
    NOT?: ChallengeFlagScalarWhereWithAggregatesInput | ChallengeFlagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChallengeFlag"> | string
    flag?: StringWithAggregatesFilter<"ChallengeFlag"> | string
    points?: IntWithAggregatesFilter<"ChallengeFlag"> | number
    challengeId?: StringWithAggregatesFilter<"ChallengeFlag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChallengeFlag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChallengeFlag"> | Date | string
  }

  export type TeamPointHistoryWhereInput = {
    AND?: TeamPointHistoryWhereInput | TeamPointHistoryWhereInput[]
    OR?: TeamPointHistoryWhereInput[]
    NOT?: TeamPointHistoryWhereInput | TeamPointHistoryWhereInput[]
    id?: StringFilter<"TeamPointHistory"> | string
    teamId?: StringFilter<"TeamPointHistory"> | string
    points?: IntFilter<"TeamPointHistory"> | number
    totalPoints?: IntFilter<"TeamPointHistory"> | number
    reason?: StringFilter<"TeamPointHistory"> | string
    metadata?: StringNullableFilter<"TeamPointHistory"> | string | null
    createdAt?: DateTimeFilter<"TeamPointHistory"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamPointHistoryOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    points?: SortOrder
    totalPoints?: SortOrder
    reason?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type TeamPointHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamPointHistoryWhereInput | TeamPointHistoryWhereInput[]
    OR?: TeamPointHistoryWhereInput[]
    NOT?: TeamPointHistoryWhereInput | TeamPointHistoryWhereInput[]
    teamId?: StringFilter<"TeamPointHistory"> | string
    points?: IntFilter<"TeamPointHistory"> | number
    totalPoints?: IntFilter<"TeamPointHistory"> | number
    reason?: StringFilter<"TeamPointHistory"> | string
    metadata?: StringNullableFilter<"TeamPointHistory"> | string | null
    createdAt?: DateTimeFilter<"TeamPointHistory"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id">

  export type TeamPointHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    points?: SortOrder
    totalPoints?: SortOrder
    reason?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TeamPointHistoryCountOrderByAggregateInput
    _avg?: TeamPointHistoryAvgOrderByAggregateInput
    _max?: TeamPointHistoryMaxOrderByAggregateInput
    _min?: TeamPointHistoryMinOrderByAggregateInput
    _sum?: TeamPointHistorySumOrderByAggregateInput
  }

  export type TeamPointHistoryScalarWhereWithAggregatesInput = {
    AND?: TeamPointHistoryScalarWhereWithAggregatesInput | TeamPointHistoryScalarWhereWithAggregatesInput[]
    OR?: TeamPointHistoryScalarWhereWithAggregatesInput[]
    NOT?: TeamPointHistoryScalarWhereWithAggregatesInput | TeamPointHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamPointHistory"> | string
    teamId?: StringWithAggregatesFilter<"TeamPointHistory"> | string
    points?: IntWithAggregatesFilter<"TeamPointHistory"> | number
    totalPoints?: IntWithAggregatesFilter<"TeamPointHistory"> | number
    reason?: StringWithAggregatesFilter<"TeamPointHistory"> | string
    metadata?: StringNullableWithAggregatesFilter<"TeamPointHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TeamPointHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    alias: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isTeamLeader?: boolean
    isAdmin?: boolean
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    scores?: ScoreCreateNestedManyWithoutUserInput
    team?: TeamCreateNestedOneWithoutMembersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    alias: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId?: string | null
    isTeamLeader?: boolean
    isAdmin?: boolean
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    scores?: ScoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    scores?: ScoreUpdateManyWithoutUserNestedInput
    team?: TeamUpdateOneWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    alias: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId?: string | null
    isTeamLeader?: boolean
    isAdmin?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogCreateNestedManyWithoutTeamInput
    submissions?: SubmissionCreateNestedManyWithoutTeamInput
    scores?: ScoreCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintCreateNestedManyWithoutTeamInput
    members?: UserCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogUncheckedCreateNestedManyWithoutTeamInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTeamInput
    scores?: ScoreUncheckedCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintUncheckedCreateNestedManyWithoutTeamInput
    members?: UserUncheckedCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUpdateManyWithoutTeamNestedInput
    submissions?: SubmissionUpdateManyWithoutTeamNestedInput
    scores?: ScoreUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUpdateManyWithoutTeamNestedInput
    members?: UserUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUncheckedUpdateManyWithoutTeamNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutTeamNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUncheckedUpdateManyWithoutTeamNestedInput
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeCreateInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagCreateNestedManyWithoutChallengeInput
    unlockConditions?: UnlockConditionCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileCreateNestedManyWithoutChallengeInput
    hints?: HintCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionCreateNestedManyWithoutChallengeInput
    scores?: ScoreCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagUncheckedCreateNestedManyWithoutChallengeInput
    unlockConditions?: UnlockConditionUncheckedCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileUncheckedCreateNestedManyWithoutChallengeInput
    hints?: HintUncheckedCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutChallengeInput
    scores?: ScoreUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUpdateManyWithoutChallengeNestedInput
    unlockConditions?: UnlockConditionUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUpdateManyWithoutChallengeNestedInput
    hints?: HintUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUncheckedUpdateManyWithoutChallengeNestedInput
    unlockConditions?: UnlockConditionUncheckedUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUncheckedUpdateManyWithoutChallengeNestedInput
    hints?: HintUncheckedUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateManyInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutSubmissionsInput
    challenge: ChallengeCreateNestedOneWithoutSubmissionsInput
    user: UserCreateNestedOneWithoutSubmissionsInput
    challengeFlag?: ChallengeFlagCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    challengeId: string
    flagId?: string | null
    teamId: string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutSubmissionsNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutSubmissionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    challengeFlag?: ChallengeFlagUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    flagId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    challengeId: string
    flagId?: string | null
    teamId: string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    flagId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    type: string
    description: string
    createdAt?: Date | string
    team?: TeamCreateNestedOneWithoutActivityLogInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    type: string
    description: string
    teamId?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutActivityLogNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    type: string
    description: string
    teamId?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameConfigCreateInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameConfigUncheckedCreateInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameConfigCreateManyInput = {
    id?: string
    startTime: Date | string
    endTime?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeFileCreateInput = {
    id?: string
    name: string
    path: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutFilesInput
  }

  export type ChallengeFileUncheckedCreateInput = {
    id?: string
    name: string
    path: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeId: string
  }

  export type ChallengeFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutFilesNestedInput
  }

  export type ChallengeFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: StringFieldUpdateOperationsInput | string
  }

  export type ChallengeFileCreateManyInput = {
    id?: string
    name: string
    path: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeId: string
  }

  export type ChallengeFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: StringFieldUpdateOperationsInput | string
  }

  export type HintCreateInput = {
    id?: string
    content: string
    cost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutHintsInput
    teamHints?: TeamHintCreateNestedManyWithoutHintInput
  }

  export type HintUncheckedCreateInput = {
    id?: string
    content: string
    cost?: number
    challengeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teamHints?: TeamHintUncheckedCreateNestedManyWithoutHintInput
  }

  export type HintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutHintsNestedInput
    teamHints?: TeamHintUpdateManyWithoutHintNestedInput
  }

  export type HintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    challengeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamHints?: TeamHintUncheckedUpdateManyWithoutHintNestedInput
  }

  export type HintCreateManyInput = {
    id?: string
    content: string
    cost?: number
    challengeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    challengeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamHintCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hint: HintCreateNestedOneWithoutTeamHintsInput
    team: TeamCreateNestedOneWithoutTeamHintsInput
  }

  export type TeamHintUncheckedCreateInput = {
    id?: string
    teamId: string
    hintId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamHintUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hint?: HintUpdateOneRequiredWithoutTeamHintsNestedInput
    team?: TeamUpdateOneRequiredWithoutTeamHintsNestedInput
  }

  export type TeamHintUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    hintId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamHintCreateManyInput = {
    id?: string
    teamId: string
    hintId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamHintUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamHintUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    hintId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteConfigCreateInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SiteConfigUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SiteConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteConfigCreateManyInput = {
    id?: string
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SiteConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreCreateInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutScoresInput
    challenge: ChallengeCreateNestedOneWithoutScoresInput
    user: UserCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    teamId: string
    challengeId: string
  }

  export type ScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutScoresNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutScoresNestedInput
    user?: UserUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreCreateManyInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    teamId: string
    challengeId: string
  }

  export type ScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
  }

  export type UnlockConditionCreateInput = {
    id?: string
    type: $Enums.UnlockConditionType
    requiredChallengeId?: string | null
    timeThresholdSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutUnlockConditionsInput
  }

  export type UnlockConditionUncheckedCreateInput = {
    id?: string
    challengeId: string
    type: $Enums.UnlockConditionType
    requiredChallengeId?: string | null
    timeThresholdSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnlockConditionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUnlockConditionTypeFieldUpdateOperationsInput | $Enums.UnlockConditionType
    requiredChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeThresholdSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutUnlockConditionsNestedInput
  }

  export type UnlockConditionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    type?: EnumUnlockConditionTypeFieldUpdateOperationsInput | $Enums.UnlockConditionType
    requiredChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeThresholdSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockConditionCreateManyInput = {
    id?: string
    challengeId: string
    type: $Enums.UnlockConditionType
    requiredChallengeId?: string | null
    timeThresholdSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnlockConditionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUnlockConditionTypeFieldUpdateOperationsInput | $Enums.UnlockConditionType
    requiredChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeThresholdSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockConditionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    type?: EnumUnlockConditionTypeFieldUpdateOperationsInput | $Enums.UnlockConditionType
    requiredChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeThresholdSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeFlagCreateInput = {
    id?: string
    flag: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutFlagsInput
    submissions?: SubmissionCreateNestedManyWithoutChallengeFlagInput
  }

  export type ChallengeFlagUncheckedCreateInput = {
    id?: string
    flag: string
    points: number
    challengeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutChallengeFlagInput
  }

  export type ChallengeFlagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutFlagsNestedInput
    submissions?: SubmissionUpdateManyWithoutChallengeFlagNestedInput
  }

  export type ChallengeFlagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    challengeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutChallengeFlagNestedInput
  }

  export type ChallengeFlagCreateManyInput = {
    id?: string
    flag: string
    points: number
    challengeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeFlagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeFlagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    challengeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamPointHistoryCreateInput = {
    id?: string
    points: number
    totalPoints: number
    reason: string
    metadata?: string | null
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutPointHistoryInput
  }

  export type TeamPointHistoryUncheckedCreateInput = {
    id?: string
    teamId: string
    points: number
    totalPoints: number
    reason: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type TeamPointHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutPointHistoryNestedInput
  }

  export type TeamPointHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamPointHistoryCreateManyInput = {
    id?: string
    teamId: string
    points: number
    totalPoints: number
    reason: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type TeamPointHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamPointHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ScoreListRelationFilter = {
    every?: ScoreWhereInput
    some?: ScoreWhereInput
    none?: ScoreWhereInput
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    alias?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teamId?: SortOrder
    isTeamLeader?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    alias?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teamId?: SortOrder
    isTeamLeader?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    alias?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teamId?: SortOrder
    isTeamLeader?: SortOrder
    isAdmin?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type TeamHintListRelationFilter = {
    every?: TeamHintWhereInput
    some?: TeamHintWhereInput
    none?: TeamHintWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TeamPointHistoryListRelationFilter = {
    every?: TeamPointHistoryWhereInput
    some?: TeamPointHistoryWhereInput
    none?: TeamPointHistoryWhereInput
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamHintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamPointHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    score?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    score?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    score?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    score?: SortOrder
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

  export type ChallengeFlagListRelationFilter = {
    every?: ChallengeFlagWhereInput
    some?: ChallengeFlagWhereInput
    none?: ChallengeFlagWhereInput
  }

  export type UnlockConditionListRelationFilter = {
    every?: UnlockConditionWhereInput
    some?: UnlockConditionWhereInput
    none?: UnlockConditionWhereInput
  }

  export type ChallengeFileListRelationFilter = {
    every?: ChallengeFileWhereInput
    some?: ChallengeFileWhereInput
    none?: ChallengeFileWhereInput
  }

  export type HintListRelationFilter = {
    every?: HintWhereInput
    some?: HintWhereInput
    none?: HintWhereInput
  }

  export type ChallengeFlagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnlockConditionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    points?: SortOrder
    flag?: SortOrder
    multipleFlags?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    isLocked?: SortOrder
    link?: SortOrder
    solveExplanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type ChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    points?: SortOrder
    flag?: SortOrder
    multipleFlags?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    isLocked?: SortOrder
    link?: SortOrder
    solveExplanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    points?: SortOrder
    flag?: SortOrder
    multipleFlags?: SortOrder
    category?: SortOrder
    difficulty?: SortOrder
    isActive?: SortOrder
    isLocked?: SortOrder
    link?: SortOrder
    solveExplanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type ChallengeScalarRelationFilter = {
    is?: ChallengeWhereInput
    isNot?: ChallengeWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChallengeFlagNullableScalarRelationFilter = {
    is?: ChallengeFlagWhereInput | null
    isNot?: ChallengeFlagWhereInput | null
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    flagId?: SortOrder
    teamId?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    flagId?: SortOrder
    teamId?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    challengeId?: SortOrder
    flagId?: SortOrder
    teamId?: SortOrder
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    description?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
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

  export type GameConfigCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameConfigMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ChallengeFileCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
  }

  export type ChallengeFileAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type ChallengeFileMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
  }

  export type ChallengeFileMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challengeId?: SortOrder
  }

  export type ChallengeFileSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type HintCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    cost?: SortOrder
    challengeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HintAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type HintMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    cost?: SortOrder
    challengeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HintMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    cost?: SortOrder
    challengeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HintSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type HintScalarRelationFilter = {
    is?: HintWhereInput
    isNot?: HintWhereInput
  }

  export type TeamHintTeamIdHintIdCompoundUniqueInput = {
    teamId: string
    hintId: string
  }

  export type TeamHintCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    hintId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamHintMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    hintId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamHintMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    hintId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreCountOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    challengeId?: SortOrder
  }

  export type ScoreAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type ScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    challengeId?: SortOrder
  }

  export type ScoreMinOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    challengeId?: SortOrder
  }

  export type ScoreSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type EnumUnlockConditionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnlockConditionType | EnumUnlockConditionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnlockConditionType[]
    notIn?: $Enums.UnlockConditionType[]
    not?: NestedEnumUnlockConditionTypeFilter<$PrismaModel> | $Enums.UnlockConditionType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UnlockConditionCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    type?: SortOrder
    requiredChallengeId?: SortOrder
    timeThresholdSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnlockConditionAvgOrderByAggregateInput = {
    timeThresholdSeconds?: SortOrder
  }

  export type UnlockConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    type?: SortOrder
    requiredChallengeId?: SortOrder
    timeThresholdSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnlockConditionMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    type?: SortOrder
    requiredChallengeId?: SortOrder
    timeThresholdSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnlockConditionSumOrderByAggregateInput = {
    timeThresholdSeconds?: SortOrder
  }

  export type EnumUnlockConditionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnlockConditionType | EnumUnlockConditionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnlockConditionType[]
    notIn?: $Enums.UnlockConditionType[]
    not?: NestedEnumUnlockConditionTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnlockConditionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnlockConditionTypeFilter<$PrismaModel>
    _max?: NestedEnumUnlockConditionTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type ChallengeFlagCountOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    points?: SortOrder
    challengeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeFlagAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type ChallengeFlagMaxOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    points?: SortOrder
    challengeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeFlagMinOrderByAggregateInput = {
    id?: SortOrder
    flag?: SortOrder
    points?: SortOrder
    challengeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallengeFlagSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type TeamPointHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    points?: SortOrder
    totalPoints?: SortOrder
    reason?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamPointHistoryAvgOrderByAggregateInput = {
    points?: SortOrder
    totalPoints?: SortOrder
  }

  export type TeamPointHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    points?: SortOrder
    totalPoints?: SortOrder
    reason?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamPointHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    points?: SortOrder
    totalPoints?: SortOrder
    reason?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamPointHistorySumOrderByAggregateInput = {
    points?: SortOrder
    totalPoints?: SortOrder
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ScoreCreateNestedManyWithoutUserInput = {
    create?: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput> | ScoreCreateWithoutUserInput[] | ScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutUserInput | ScoreCreateOrConnectWithoutUserInput[]
    createMany?: ScoreCreateManyUserInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput> | ScoreCreateWithoutUserInput[] | ScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutUserInput | ScoreCreateOrConnectWithoutUserInput[]
    createMany?: ScoreCreateManyUserInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ScoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput> | ScoreCreateWithoutUserInput[] | ScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutUserInput | ScoreCreateOrConnectWithoutUserInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutUserInput | ScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScoreCreateManyUserInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutUserInput | ScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutUserInput | ScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type TeamUpdateOneWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput> | ScoreCreateWithoutUserInput[] | ScoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutUserInput | ScoreCreateOrConnectWithoutUserInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutUserInput | ScoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ScoreCreateManyUserInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutUserInput | ScoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutUserInput | ScoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type ActivityLogCreateNestedManyWithoutTeamInput = {
    create?: XOR<ActivityLogCreateWithoutTeamInput, ActivityLogUncheckedCreateWithoutTeamInput> | ActivityLogCreateWithoutTeamInput[] | ActivityLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutTeamInput | ActivityLogCreateOrConnectWithoutTeamInput[]
    createMany?: ActivityLogCreateManyTeamInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutTeamInput = {
    create?: XOR<SubmissionCreateWithoutTeamInput, SubmissionUncheckedCreateWithoutTeamInput> | SubmissionCreateWithoutTeamInput[] | SubmissionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTeamInput | SubmissionCreateOrConnectWithoutTeamInput[]
    createMany?: SubmissionCreateManyTeamInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ScoreCreateNestedManyWithoutTeamInput = {
    create?: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput> | ScoreCreateWithoutTeamInput[] | ScoreUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutTeamInput | ScoreCreateOrConnectWithoutTeamInput[]
    createMany?: ScoreCreateManyTeamInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type TeamHintCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamHintCreateWithoutTeamInput, TeamHintUncheckedCreateWithoutTeamInput> | TeamHintCreateWithoutTeamInput[] | TeamHintUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamHintCreateOrConnectWithoutTeamInput | TeamHintCreateOrConnectWithoutTeamInput[]
    createMany?: TeamHintCreateManyTeamInputEnvelope
    connect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamPointHistoryCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamPointHistoryCreateWithoutTeamInput, TeamPointHistoryUncheckedCreateWithoutTeamInput> | TeamPointHistoryCreateWithoutTeamInput[] | TeamPointHistoryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamPointHistoryCreateOrConnectWithoutTeamInput | TeamPointHistoryCreateOrConnectWithoutTeamInput[]
    createMany?: TeamPointHistoryCreateManyTeamInputEnvelope
    connect?: TeamPointHistoryWhereUniqueInput | TeamPointHistoryWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ActivityLogCreateWithoutTeamInput, ActivityLogUncheckedCreateWithoutTeamInput> | ActivityLogCreateWithoutTeamInput[] | ActivityLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutTeamInput | ActivityLogCreateOrConnectWithoutTeamInput[]
    createMany?: ActivityLogCreateManyTeamInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<SubmissionCreateWithoutTeamInput, SubmissionUncheckedCreateWithoutTeamInput> | SubmissionCreateWithoutTeamInput[] | SubmissionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTeamInput | SubmissionCreateOrConnectWithoutTeamInput[]
    createMany?: SubmissionCreateManyTeamInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput> | ScoreCreateWithoutTeamInput[] | ScoreUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutTeamInput | ScoreCreateOrConnectWithoutTeamInput[]
    createMany?: ScoreCreateManyTeamInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type TeamHintUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamHintCreateWithoutTeamInput, TeamHintUncheckedCreateWithoutTeamInput> | TeamHintCreateWithoutTeamInput[] | TeamHintUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamHintCreateOrConnectWithoutTeamInput | TeamHintCreateOrConnectWithoutTeamInput[]
    createMany?: TeamHintCreateManyTeamInputEnvelope
    connect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamPointHistoryUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamPointHistoryCreateWithoutTeamInput, TeamPointHistoryUncheckedCreateWithoutTeamInput> | TeamPointHistoryCreateWithoutTeamInput[] | TeamPointHistoryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamPointHistoryCreateOrConnectWithoutTeamInput | TeamPointHistoryCreateOrConnectWithoutTeamInput[]
    createMany?: TeamPointHistoryCreateManyTeamInputEnvelope
    connect?: TeamPointHistoryWhereUniqueInput | TeamPointHistoryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActivityLogUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ActivityLogCreateWithoutTeamInput, ActivityLogUncheckedCreateWithoutTeamInput> | ActivityLogCreateWithoutTeamInput[] | ActivityLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutTeamInput | ActivityLogCreateOrConnectWithoutTeamInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutTeamInput | ActivityLogUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ActivityLogCreateManyTeamInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutTeamInput | ActivityLogUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutTeamInput | ActivityLogUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutTeamNestedInput = {
    create?: XOR<SubmissionCreateWithoutTeamInput, SubmissionUncheckedCreateWithoutTeamInput> | SubmissionCreateWithoutTeamInput[] | SubmissionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTeamInput | SubmissionCreateOrConnectWithoutTeamInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutTeamInput | SubmissionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: SubmissionCreateManyTeamInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutTeamInput | SubmissionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutTeamInput | SubmissionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ScoreUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput> | ScoreCreateWithoutTeamInput[] | ScoreUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutTeamInput | ScoreCreateOrConnectWithoutTeamInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutTeamInput | ScoreUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ScoreCreateManyTeamInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutTeamInput | ScoreUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutTeamInput | ScoreUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type TeamHintUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamHintCreateWithoutTeamInput, TeamHintUncheckedCreateWithoutTeamInput> | TeamHintCreateWithoutTeamInput[] | TeamHintUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamHintCreateOrConnectWithoutTeamInput | TeamHintCreateOrConnectWithoutTeamInput[]
    upsert?: TeamHintUpsertWithWhereUniqueWithoutTeamInput | TeamHintUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamHintCreateManyTeamInputEnvelope
    set?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    disconnect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    delete?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    connect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    update?: TeamHintUpdateWithWhereUniqueWithoutTeamInput | TeamHintUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamHintUpdateManyWithWhereWithoutTeamInput | TeamHintUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamHintScalarWhereInput | TeamHintScalarWhereInput[]
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamPointHistoryUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamPointHistoryCreateWithoutTeamInput, TeamPointHistoryUncheckedCreateWithoutTeamInput> | TeamPointHistoryCreateWithoutTeamInput[] | TeamPointHistoryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamPointHistoryCreateOrConnectWithoutTeamInput | TeamPointHistoryCreateOrConnectWithoutTeamInput[]
    upsert?: TeamPointHistoryUpsertWithWhereUniqueWithoutTeamInput | TeamPointHistoryUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamPointHistoryCreateManyTeamInputEnvelope
    set?: TeamPointHistoryWhereUniqueInput | TeamPointHistoryWhereUniqueInput[]
    disconnect?: TeamPointHistoryWhereUniqueInput | TeamPointHistoryWhereUniqueInput[]
    delete?: TeamPointHistoryWhereUniqueInput | TeamPointHistoryWhereUniqueInput[]
    connect?: TeamPointHistoryWhereUniqueInput | TeamPointHistoryWhereUniqueInput[]
    update?: TeamPointHistoryUpdateWithWhereUniqueWithoutTeamInput | TeamPointHistoryUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamPointHistoryUpdateManyWithWhereWithoutTeamInput | TeamPointHistoryUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamPointHistoryScalarWhereInput | TeamPointHistoryScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ActivityLogCreateWithoutTeamInput, ActivityLogUncheckedCreateWithoutTeamInput> | ActivityLogCreateWithoutTeamInput[] | ActivityLogUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutTeamInput | ActivityLogCreateOrConnectWithoutTeamInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutTeamInput | ActivityLogUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ActivityLogCreateManyTeamInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutTeamInput | ActivityLogUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutTeamInput | ActivityLogUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<SubmissionCreateWithoutTeamInput, SubmissionUncheckedCreateWithoutTeamInput> | SubmissionCreateWithoutTeamInput[] | SubmissionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTeamInput | SubmissionCreateOrConnectWithoutTeamInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutTeamInput | SubmissionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: SubmissionCreateManyTeamInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutTeamInput | SubmissionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutTeamInput | SubmissionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput> | ScoreCreateWithoutTeamInput[] | ScoreUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutTeamInput | ScoreCreateOrConnectWithoutTeamInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutTeamInput | ScoreUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ScoreCreateManyTeamInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutTeamInput | ScoreUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutTeamInput | ScoreUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type TeamHintUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamHintCreateWithoutTeamInput, TeamHintUncheckedCreateWithoutTeamInput> | TeamHintCreateWithoutTeamInput[] | TeamHintUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamHintCreateOrConnectWithoutTeamInput | TeamHintCreateOrConnectWithoutTeamInput[]
    upsert?: TeamHintUpsertWithWhereUniqueWithoutTeamInput | TeamHintUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamHintCreateManyTeamInputEnvelope
    set?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    disconnect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    delete?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    connect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    update?: TeamHintUpdateWithWhereUniqueWithoutTeamInput | TeamHintUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamHintUpdateManyWithWhereWithoutTeamInput | TeamHintUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamHintScalarWhereInput | TeamHintScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamPointHistoryUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamPointHistoryCreateWithoutTeamInput, TeamPointHistoryUncheckedCreateWithoutTeamInput> | TeamPointHistoryCreateWithoutTeamInput[] | TeamPointHistoryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamPointHistoryCreateOrConnectWithoutTeamInput | TeamPointHistoryCreateOrConnectWithoutTeamInput[]
    upsert?: TeamPointHistoryUpsertWithWhereUniqueWithoutTeamInput | TeamPointHistoryUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamPointHistoryCreateManyTeamInputEnvelope
    set?: TeamPointHistoryWhereUniqueInput | TeamPointHistoryWhereUniqueInput[]
    disconnect?: TeamPointHistoryWhereUniqueInput | TeamPointHistoryWhereUniqueInput[]
    delete?: TeamPointHistoryWhereUniqueInput | TeamPointHistoryWhereUniqueInput[]
    connect?: TeamPointHistoryWhereUniqueInput | TeamPointHistoryWhereUniqueInput[]
    update?: TeamPointHistoryUpdateWithWhereUniqueWithoutTeamInput | TeamPointHistoryUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamPointHistoryUpdateManyWithWhereWithoutTeamInput | TeamPointHistoryUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamPointHistoryScalarWhereInput | TeamPointHistoryScalarWhereInput[]
  }

  export type ChallengeFlagCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeFlagCreateWithoutChallengeInput, ChallengeFlagUncheckedCreateWithoutChallengeInput> | ChallengeFlagCreateWithoutChallengeInput[] | ChallengeFlagUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeFlagCreateOrConnectWithoutChallengeInput | ChallengeFlagCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeFlagCreateManyChallengeInputEnvelope
    connect?: ChallengeFlagWhereUniqueInput | ChallengeFlagWhereUniqueInput[]
  }

  export type UnlockConditionCreateNestedManyWithoutChallengeInput = {
    create?: XOR<UnlockConditionCreateWithoutChallengeInput, UnlockConditionUncheckedCreateWithoutChallengeInput> | UnlockConditionCreateWithoutChallengeInput[] | UnlockConditionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UnlockConditionCreateOrConnectWithoutChallengeInput | UnlockConditionCreateOrConnectWithoutChallengeInput[]
    createMany?: UnlockConditionCreateManyChallengeInputEnvelope
    connect?: UnlockConditionWhereUniqueInput | UnlockConditionWhereUniqueInput[]
  }

  export type ChallengeFileCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeFileCreateWithoutChallengeInput, ChallengeFileUncheckedCreateWithoutChallengeInput> | ChallengeFileCreateWithoutChallengeInput[] | ChallengeFileUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeFileCreateOrConnectWithoutChallengeInput | ChallengeFileCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeFileCreateManyChallengeInputEnvelope
    connect?: ChallengeFileWhereUniqueInput | ChallengeFileWhereUniqueInput[]
  }

  export type HintCreateNestedManyWithoutChallengeInput = {
    create?: XOR<HintCreateWithoutChallengeInput, HintUncheckedCreateWithoutChallengeInput> | HintCreateWithoutChallengeInput[] | HintUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: HintCreateOrConnectWithoutChallengeInput | HintCreateOrConnectWithoutChallengeInput[]
    createMany?: HintCreateManyChallengeInputEnvelope
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutChallengeInput = {
    create?: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput> | SubmissionCreateWithoutChallengeInput[] | SubmissionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeInput | SubmissionCreateOrConnectWithoutChallengeInput[]
    createMany?: SubmissionCreateManyChallengeInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ScoreCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ScoreCreateWithoutChallengeInput, ScoreUncheckedCreateWithoutChallengeInput> | ScoreCreateWithoutChallengeInput[] | ScoreUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutChallengeInput | ScoreCreateOrConnectWithoutChallengeInput[]
    createMany?: ScoreCreateManyChallengeInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type ChallengeFlagUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeFlagCreateWithoutChallengeInput, ChallengeFlagUncheckedCreateWithoutChallengeInput> | ChallengeFlagCreateWithoutChallengeInput[] | ChallengeFlagUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeFlagCreateOrConnectWithoutChallengeInput | ChallengeFlagCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeFlagCreateManyChallengeInputEnvelope
    connect?: ChallengeFlagWhereUniqueInput | ChallengeFlagWhereUniqueInput[]
  }

  export type UnlockConditionUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<UnlockConditionCreateWithoutChallengeInput, UnlockConditionUncheckedCreateWithoutChallengeInput> | UnlockConditionCreateWithoutChallengeInput[] | UnlockConditionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UnlockConditionCreateOrConnectWithoutChallengeInput | UnlockConditionCreateOrConnectWithoutChallengeInput[]
    createMany?: UnlockConditionCreateManyChallengeInputEnvelope
    connect?: UnlockConditionWhereUniqueInput | UnlockConditionWhereUniqueInput[]
  }

  export type ChallengeFileUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeFileCreateWithoutChallengeInput, ChallengeFileUncheckedCreateWithoutChallengeInput> | ChallengeFileCreateWithoutChallengeInput[] | ChallengeFileUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeFileCreateOrConnectWithoutChallengeInput | ChallengeFileCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeFileCreateManyChallengeInputEnvelope
    connect?: ChallengeFileWhereUniqueInput | ChallengeFileWhereUniqueInput[]
  }

  export type HintUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<HintCreateWithoutChallengeInput, HintUncheckedCreateWithoutChallengeInput> | HintCreateWithoutChallengeInput[] | HintUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: HintCreateOrConnectWithoutChallengeInput | HintCreateOrConnectWithoutChallengeInput[]
    createMany?: HintCreateManyChallengeInputEnvelope
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput> | SubmissionCreateWithoutChallengeInput[] | SubmissionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeInput | SubmissionCreateOrConnectWithoutChallengeInput[]
    createMany?: SubmissionCreateManyChallengeInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ScoreUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ScoreCreateWithoutChallengeInput, ScoreUncheckedCreateWithoutChallengeInput> | ScoreCreateWithoutChallengeInput[] | ScoreUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutChallengeInput | ScoreCreateOrConnectWithoutChallengeInput[]
    createMany?: ScoreCreateManyChallengeInputEnvelope
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
  }

  export type ChallengeFlagUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeFlagCreateWithoutChallengeInput, ChallengeFlagUncheckedCreateWithoutChallengeInput> | ChallengeFlagCreateWithoutChallengeInput[] | ChallengeFlagUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeFlagCreateOrConnectWithoutChallengeInput | ChallengeFlagCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeFlagUpsertWithWhereUniqueWithoutChallengeInput | ChallengeFlagUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeFlagCreateManyChallengeInputEnvelope
    set?: ChallengeFlagWhereUniqueInput | ChallengeFlagWhereUniqueInput[]
    disconnect?: ChallengeFlagWhereUniqueInput | ChallengeFlagWhereUniqueInput[]
    delete?: ChallengeFlagWhereUniqueInput | ChallengeFlagWhereUniqueInput[]
    connect?: ChallengeFlagWhereUniqueInput | ChallengeFlagWhereUniqueInput[]
    update?: ChallengeFlagUpdateWithWhereUniqueWithoutChallengeInput | ChallengeFlagUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeFlagUpdateManyWithWhereWithoutChallengeInput | ChallengeFlagUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeFlagScalarWhereInput | ChallengeFlagScalarWhereInput[]
  }

  export type UnlockConditionUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<UnlockConditionCreateWithoutChallengeInput, UnlockConditionUncheckedCreateWithoutChallengeInput> | UnlockConditionCreateWithoutChallengeInput[] | UnlockConditionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UnlockConditionCreateOrConnectWithoutChallengeInput | UnlockConditionCreateOrConnectWithoutChallengeInput[]
    upsert?: UnlockConditionUpsertWithWhereUniqueWithoutChallengeInput | UnlockConditionUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: UnlockConditionCreateManyChallengeInputEnvelope
    set?: UnlockConditionWhereUniqueInput | UnlockConditionWhereUniqueInput[]
    disconnect?: UnlockConditionWhereUniqueInput | UnlockConditionWhereUniqueInput[]
    delete?: UnlockConditionWhereUniqueInput | UnlockConditionWhereUniqueInput[]
    connect?: UnlockConditionWhereUniqueInput | UnlockConditionWhereUniqueInput[]
    update?: UnlockConditionUpdateWithWhereUniqueWithoutChallengeInput | UnlockConditionUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: UnlockConditionUpdateManyWithWhereWithoutChallengeInput | UnlockConditionUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: UnlockConditionScalarWhereInput | UnlockConditionScalarWhereInput[]
  }

  export type ChallengeFileUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeFileCreateWithoutChallengeInput, ChallengeFileUncheckedCreateWithoutChallengeInput> | ChallengeFileCreateWithoutChallengeInput[] | ChallengeFileUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeFileCreateOrConnectWithoutChallengeInput | ChallengeFileCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeFileUpsertWithWhereUniqueWithoutChallengeInput | ChallengeFileUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeFileCreateManyChallengeInputEnvelope
    set?: ChallengeFileWhereUniqueInput | ChallengeFileWhereUniqueInput[]
    disconnect?: ChallengeFileWhereUniqueInput | ChallengeFileWhereUniqueInput[]
    delete?: ChallengeFileWhereUniqueInput | ChallengeFileWhereUniqueInput[]
    connect?: ChallengeFileWhereUniqueInput | ChallengeFileWhereUniqueInput[]
    update?: ChallengeFileUpdateWithWhereUniqueWithoutChallengeInput | ChallengeFileUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeFileUpdateManyWithWhereWithoutChallengeInput | ChallengeFileUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeFileScalarWhereInput | ChallengeFileScalarWhereInput[]
  }

  export type HintUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<HintCreateWithoutChallengeInput, HintUncheckedCreateWithoutChallengeInput> | HintCreateWithoutChallengeInput[] | HintUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: HintCreateOrConnectWithoutChallengeInput | HintCreateOrConnectWithoutChallengeInput[]
    upsert?: HintUpsertWithWhereUniqueWithoutChallengeInput | HintUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: HintCreateManyChallengeInputEnvelope
    set?: HintWhereUniqueInput | HintWhereUniqueInput[]
    disconnect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    delete?: HintWhereUniqueInput | HintWhereUniqueInput[]
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    update?: HintUpdateWithWhereUniqueWithoutChallengeInput | HintUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: HintUpdateManyWithWhereWithoutChallengeInput | HintUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: HintScalarWhereInput | HintScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput> | SubmissionCreateWithoutChallengeInput[] | SubmissionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeInput | SubmissionCreateOrConnectWithoutChallengeInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutChallengeInput | SubmissionUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: SubmissionCreateManyChallengeInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutChallengeInput | SubmissionUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutChallengeInput | SubmissionUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ScoreUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ScoreCreateWithoutChallengeInput, ScoreUncheckedCreateWithoutChallengeInput> | ScoreCreateWithoutChallengeInput[] | ScoreUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutChallengeInput | ScoreCreateOrConnectWithoutChallengeInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutChallengeInput | ScoreUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ScoreCreateManyChallengeInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutChallengeInput | ScoreUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutChallengeInput | ScoreUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type ChallengeFlagUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeFlagCreateWithoutChallengeInput, ChallengeFlagUncheckedCreateWithoutChallengeInput> | ChallengeFlagCreateWithoutChallengeInput[] | ChallengeFlagUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeFlagCreateOrConnectWithoutChallengeInput | ChallengeFlagCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeFlagUpsertWithWhereUniqueWithoutChallengeInput | ChallengeFlagUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeFlagCreateManyChallengeInputEnvelope
    set?: ChallengeFlagWhereUniqueInput | ChallengeFlagWhereUniqueInput[]
    disconnect?: ChallengeFlagWhereUniqueInput | ChallengeFlagWhereUniqueInput[]
    delete?: ChallengeFlagWhereUniqueInput | ChallengeFlagWhereUniqueInput[]
    connect?: ChallengeFlagWhereUniqueInput | ChallengeFlagWhereUniqueInput[]
    update?: ChallengeFlagUpdateWithWhereUniqueWithoutChallengeInput | ChallengeFlagUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeFlagUpdateManyWithWhereWithoutChallengeInput | ChallengeFlagUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeFlagScalarWhereInput | ChallengeFlagScalarWhereInput[]
  }

  export type UnlockConditionUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<UnlockConditionCreateWithoutChallengeInput, UnlockConditionUncheckedCreateWithoutChallengeInput> | UnlockConditionCreateWithoutChallengeInput[] | UnlockConditionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: UnlockConditionCreateOrConnectWithoutChallengeInput | UnlockConditionCreateOrConnectWithoutChallengeInput[]
    upsert?: UnlockConditionUpsertWithWhereUniqueWithoutChallengeInput | UnlockConditionUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: UnlockConditionCreateManyChallengeInputEnvelope
    set?: UnlockConditionWhereUniqueInput | UnlockConditionWhereUniqueInput[]
    disconnect?: UnlockConditionWhereUniqueInput | UnlockConditionWhereUniqueInput[]
    delete?: UnlockConditionWhereUniqueInput | UnlockConditionWhereUniqueInput[]
    connect?: UnlockConditionWhereUniqueInput | UnlockConditionWhereUniqueInput[]
    update?: UnlockConditionUpdateWithWhereUniqueWithoutChallengeInput | UnlockConditionUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: UnlockConditionUpdateManyWithWhereWithoutChallengeInput | UnlockConditionUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: UnlockConditionScalarWhereInput | UnlockConditionScalarWhereInput[]
  }

  export type ChallengeFileUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeFileCreateWithoutChallengeInput, ChallengeFileUncheckedCreateWithoutChallengeInput> | ChallengeFileCreateWithoutChallengeInput[] | ChallengeFileUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeFileCreateOrConnectWithoutChallengeInput | ChallengeFileCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeFileUpsertWithWhereUniqueWithoutChallengeInput | ChallengeFileUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeFileCreateManyChallengeInputEnvelope
    set?: ChallengeFileWhereUniqueInput | ChallengeFileWhereUniqueInput[]
    disconnect?: ChallengeFileWhereUniqueInput | ChallengeFileWhereUniqueInput[]
    delete?: ChallengeFileWhereUniqueInput | ChallengeFileWhereUniqueInput[]
    connect?: ChallengeFileWhereUniqueInput | ChallengeFileWhereUniqueInput[]
    update?: ChallengeFileUpdateWithWhereUniqueWithoutChallengeInput | ChallengeFileUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeFileUpdateManyWithWhereWithoutChallengeInput | ChallengeFileUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeFileScalarWhereInput | ChallengeFileScalarWhereInput[]
  }

  export type HintUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<HintCreateWithoutChallengeInput, HintUncheckedCreateWithoutChallengeInput> | HintCreateWithoutChallengeInput[] | HintUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: HintCreateOrConnectWithoutChallengeInput | HintCreateOrConnectWithoutChallengeInput[]
    upsert?: HintUpsertWithWhereUniqueWithoutChallengeInput | HintUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: HintCreateManyChallengeInputEnvelope
    set?: HintWhereUniqueInput | HintWhereUniqueInput[]
    disconnect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    delete?: HintWhereUniqueInput | HintWhereUniqueInput[]
    connect?: HintWhereUniqueInput | HintWhereUniqueInput[]
    update?: HintUpdateWithWhereUniqueWithoutChallengeInput | HintUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: HintUpdateManyWithWhereWithoutChallengeInput | HintUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: HintScalarWhereInput | HintScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput> | SubmissionCreateWithoutChallengeInput[] | SubmissionUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeInput | SubmissionCreateOrConnectWithoutChallengeInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutChallengeInput | SubmissionUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: SubmissionCreateManyChallengeInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutChallengeInput | SubmissionUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutChallengeInput | SubmissionUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ScoreUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ScoreCreateWithoutChallengeInput, ScoreUncheckedCreateWithoutChallengeInput> | ScoreCreateWithoutChallengeInput[] | ScoreUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ScoreCreateOrConnectWithoutChallengeInput | ScoreCreateOrConnectWithoutChallengeInput[]
    upsert?: ScoreUpsertWithWhereUniqueWithoutChallengeInput | ScoreUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ScoreCreateManyChallengeInputEnvelope
    set?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    disconnect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    delete?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    connect?: ScoreWhereUniqueInput | ScoreWhereUniqueInput[]
    update?: ScoreUpdateWithWhereUniqueWithoutChallengeInput | ScoreUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ScoreUpdateManyWithWhereWithoutChallengeInput | ScoreUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<TeamCreateWithoutSubmissionsInput, TeamUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSubmissionsInput
    connect?: TeamWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ChallengeCreateWithoutSubmissionsInput, ChallengeUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutSubmissionsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeFlagCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ChallengeFlagCreateWithoutSubmissionsInput, ChallengeFlagUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ChallengeFlagCreateOrConnectWithoutSubmissionsInput
    connect?: ChallengeFlagWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<TeamCreateWithoutSubmissionsInput, TeamUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutSubmissionsInput
    upsert?: TeamUpsertWithoutSubmissionsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutSubmissionsInput, TeamUpdateWithoutSubmissionsInput>, TeamUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ChallengeUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<ChallengeCreateWithoutSubmissionsInput, ChallengeUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutSubmissionsInput
    upsert?: ChallengeUpsertWithoutSubmissionsInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutSubmissionsInput, ChallengeUpdateWithoutSubmissionsInput>, ChallengeUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ChallengeFlagUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<ChallengeFlagCreateWithoutSubmissionsInput, ChallengeFlagUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ChallengeFlagCreateOrConnectWithoutSubmissionsInput
    upsert?: ChallengeFlagUpsertWithoutSubmissionsInput
    disconnect?: ChallengeFlagWhereInput | boolean
    delete?: ChallengeFlagWhereInput | boolean
    connect?: ChallengeFlagWhereUniqueInput
    update?: XOR<XOR<ChallengeFlagUpdateToOneWithWhereWithoutSubmissionsInput, ChallengeFlagUpdateWithoutSubmissionsInput>, ChallengeFlagUncheckedUpdateWithoutSubmissionsInput>
  }

  export type TeamCreateNestedOneWithoutActivityLogInput = {
    create?: XOR<TeamCreateWithoutActivityLogInput, TeamUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: TeamCreateOrConnectWithoutActivityLogInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneWithoutActivityLogNestedInput = {
    create?: XOR<TeamCreateWithoutActivityLogInput, TeamUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: TeamCreateOrConnectWithoutActivityLogInput
    upsert?: TeamUpsertWithoutActivityLogInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutActivityLogInput, TeamUpdateWithoutActivityLogInput>, TeamUncheckedUpdateWithoutActivityLogInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ChallengeCreateNestedOneWithoutFilesInput = {
    create?: XOR<ChallengeCreateWithoutFilesInput, ChallengeUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutFilesInput
    connect?: ChallengeWhereUniqueInput
  }

  export type ChallengeUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<ChallengeCreateWithoutFilesInput, ChallengeUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutFilesInput
    upsert?: ChallengeUpsertWithoutFilesInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutFilesInput, ChallengeUpdateWithoutFilesInput>, ChallengeUncheckedUpdateWithoutFilesInput>
  }

  export type ChallengeCreateNestedOneWithoutHintsInput = {
    create?: XOR<ChallengeCreateWithoutHintsInput, ChallengeUncheckedCreateWithoutHintsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutHintsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type TeamHintCreateNestedManyWithoutHintInput = {
    create?: XOR<TeamHintCreateWithoutHintInput, TeamHintUncheckedCreateWithoutHintInput> | TeamHintCreateWithoutHintInput[] | TeamHintUncheckedCreateWithoutHintInput[]
    connectOrCreate?: TeamHintCreateOrConnectWithoutHintInput | TeamHintCreateOrConnectWithoutHintInput[]
    createMany?: TeamHintCreateManyHintInputEnvelope
    connect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
  }

  export type TeamHintUncheckedCreateNestedManyWithoutHintInput = {
    create?: XOR<TeamHintCreateWithoutHintInput, TeamHintUncheckedCreateWithoutHintInput> | TeamHintCreateWithoutHintInput[] | TeamHintUncheckedCreateWithoutHintInput[]
    connectOrCreate?: TeamHintCreateOrConnectWithoutHintInput | TeamHintCreateOrConnectWithoutHintInput[]
    createMany?: TeamHintCreateManyHintInputEnvelope
    connect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
  }

  export type ChallengeUpdateOneRequiredWithoutHintsNestedInput = {
    create?: XOR<ChallengeCreateWithoutHintsInput, ChallengeUncheckedCreateWithoutHintsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutHintsInput
    upsert?: ChallengeUpsertWithoutHintsInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutHintsInput, ChallengeUpdateWithoutHintsInput>, ChallengeUncheckedUpdateWithoutHintsInput>
  }

  export type TeamHintUpdateManyWithoutHintNestedInput = {
    create?: XOR<TeamHintCreateWithoutHintInput, TeamHintUncheckedCreateWithoutHintInput> | TeamHintCreateWithoutHintInput[] | TeamHintUncheckedCreateWithoutHintInput[]
    connectOrCreate?: TeamHintCreateOrConnectWithoutHintInput | TeamHintCreateOrConnectWithoutHintInput[]
    upsert?: TeamHintUpsertWithWhereUniqueWithoutHintInput | TeamHintUpsertWithWhereUniqueWithoutHintInput[]
    createMany?: TeamHintCreateManyHintInputEnvelope
    set?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    disconnect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    delete?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    connect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    update?: TeamHintUpdateWithWhereUniqueWithoutHintInput | TeamHintUpdateWithWhereUniqueWithoutHintInput[]
    updateMany?: TeamHintUpdateManyWithWhereWithoutHintInput | TeamHintUpdateManyWithWhereWithoutHintInput[]
    deleteMany?: TeamHintScalarWhereInput | TeamHintScalarWhereInput[]
  }

  export type TeamHintUncheckedUpdateManyWithoutHintNestedInput = {
    create?: XOR<TeamHintCreateWithoutHintInput, TeamHintUncheckedCreateWithoutHintInput> | TeamHintCreateWithoutHintInput[] | TeamHintUncheckedCreateWithoutHintInput[]
    connectOrCreate?: TeamHintCreateOrConnectWithoutHintInput | TeamHintCreateOrConnectWithoutHintInput[]
    upsert?: TeamHintUpsertWithWhereUniqueWithoutHintInput | TeamHintUpsertWithWhereUniqueWithoutHintInput[]
    createMany?: TeamHintCreateManyHintInputEnvelope
    set?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    disconnect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    delete?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    connect?: TeamHintWhereUniqueInput | TeamHintWhereUniqueInput[]
    update?: TeamHintUpdateWithWhereUniqueWithoutHintInput | TeamHintUpdateWithWhereUniqueWithoutHintInput[]
    updateMany?: TeamHintUpdateManyWithWhereWithoutHintInput | TeamHintUpdateManyWithWhereWithoutHintInput[]
    deleteMany?: TeamHintScalarWhereInput | TeamHintScalarWhereInput[]
  }

  export type HintCreateNestedOneWithoutTeamHintsInput = {
    create?: XOR<HintCreateWithoutTeamHintsInput, HintUncheckedCreateWithoutTeamHintsInput>
    connectOrCreate?: HintCreateOrConnectWithoutTeamHintsInput
    connect?: HintWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutTeamHintsInput = {
    create?: XOR<TeamCreateWithoutTeamHintsInput, TeamUncheckedCreateWithoutTeamHintsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamHintsInput
    connect?: TeamWhereUniqueInput
  }

  export type HintUpdateOneRequiredWithoutTeamHintsNestedInput = {
    create?: XOR<HintCreateWithoutTeamHintsInput, HintUncheckedCreateWithoutTeamHintsInput>
    connectOrCreate?: HintCreateOrConnectWithoutTeamHintsInput
    upsert?: HintUpsertWithoutTeamHintsInput
    connect?: HintWhereUniqueInput
    update?: XOR<XOR<HintUpdateToOneWithWhereWithoutTeamHintsInput, HintUpdateWithoutTeamHintsInput>, HintUncheckedUpdateWithoutTeamHintsInput>
  }

  export type TeamUpdateOneRequiredWithoutTeamHintsNestedInput = {
    create?: XOR<TeamCreateWithoutTeamHintsInput, TeamUncheckedCreateWithoutTeamHintsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamHintsInput
    upsert?: TeamUpsertWithoutTeamHintsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeamHintsInput, TeamUpdateWithoutTeamHintsInput>, TeamUncheckedUpdateWithoutTeamHintsInput>
  }

  export type TeamCreateNestedOneWithoutScoresInput = {
    create?: XOR<TeamCreateWithoutScoresInput, TeamUncheckedCreateWithoutScoresInput>
    connectOrCreate?: TeamCreateOrConnectWithoutScoresInput
    connect?: TeamWhereUniqueInput
  }

  export type ChallengeCreateNestedOneWithoutScoresInput = {
    create?: XOR<ChallengeCreateWithoutScoresInput, ChallengeUncheckedCreateWithoutScoresInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutScoresInput
    connect?: ChallengeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutScoresInput = {
    create?: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoresInput
    connect?: UserWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<TeamCreateWithoutScoresInput, TeamUncheckedCreateWithoutScoresInput>
    connectOrCreate?: TeamCreateOrConnectWithoutScoresInput
    upsert?: TeamUpsertWithoutScoresInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutScoresInput, TeamUpdateWithoutScoresInput>, TeamUncheckedUpdateWithoutScoresInput>
  }

  export type ChallengeUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<ChallengeCreateWithoutScoresInput, ChallengeUncheckedCreateWithoutScoresInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutScoresInput
    upsert?: ChallengeUpsertWithoutScoresInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutScoresInput, ChallengeUpdateWithoutScoresInput>, ChallengeUncheckedUpdateWithoutScoresInput>
  }

  export type UserUpdateOneRequiredWithoutScoresNestedInput = {
    create?: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutScoresInput
    upsert?: UserUpsertWithoutScoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScoresInput, UserUpdateWithoutScoresInput>, UserUncheckedUpdateWithoutScoresInput>
  }

  export type ChallengeCreateNestedOneWithoutUnlockConditionsInput = {
    create?: XOR<ChallengeCreateWithoutUnlockConditionsInput, ChallengeUncheckedCreateWithoutUnlockConditionsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutUnlockConditionsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type EnumUnlockConditionTypeFieldUpdateOperationsInput = {
    set?: $Enums.UnlockConditionType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChallengeUpdateOneRequiredWithoutUnlockConditionsNestedInput = {
    create?: XOR<ChallengeCreateWithoutUnlockConditionsInput, ChallengeUncheckedCreateWithoutUnlockConditionsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutUnlockConditionsInput
    upsert?: ChallengeUpsertWithoutUnlockConditionsInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutUnlockConditionsInput, ChallengeUpdateWithoutUnlockConditionsInput>, ChallengeUncheckedUpdateWithoutUnlockConditionsInput>
  }

  export type ChallengeCreateNestedOneWithoutFlagsInput = {
    create?: XOR<ChallengeCreateWithoutFlagsInput, ChallengeUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutFlagsInput
    connect?: ChallengeWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutChallengeFlagInput = {
    create?: XOR<SubmissionCreateWithoutChallengeFlagInput, SubmissionUncheckedCreateWithoutChallengeFlagInput> | SubmissionCreateWithoutChallengeFlagInput[] | SubmissionUncheckedCreateWithoutChallengeFlagInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeFlagInput | SubmissionCreateOrConnectWithoutChallengeFlagInput[]
    createMany?: SubmissionCreateManyChallengeFlagInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutChallengeFlagInput = {
    create?: XOR<SubmissionCreateWithoutChallengeFlagInput, SubmissionUncheckedCreateWithoutChallengeFlagInput> | SubmissionCreateWithoutChallengeFlagInput[] | SubmissionUncheckedCreateWithoutChallengeFlagInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeFlagInput | SubmissionCreateOrConnectWithoutChallengeFlagInput[]
    createMany?: SubmissionCreateManyChallengeFlagInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ChallengeUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<ChallengeCreateWithoutFlagsInput, ChallengeUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: ChallengeCreateOrConnectWithoutFlagsInput
    upsert?: ChallengeUpsertWithoutFlagsInput
    connect?: ChallengeWhereUniqueInput
    update?: XOR<XOR<ChallengeUpdateToOneWithWhereWithoutFlagsInput, ChallengeUpdateWithoutFlagsInput>, ChallengeUncheckedUpdateWithoutFlagsInput>
  }

  export type SubmissionUpdateManyWithoutChallengeFlagNestedInput = {
    create?: XOR<SubmissionCreateWithoutChallengeFlagInput, SubmissionUncheckedCreateWithoutChallengeFlagInput> | SubmissionCreateWithoutChallengeFlagInput[] | SubmissionUncheckedCreateWithoutChallengeFlagInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeFlagInput | SubmissionCreateOrConnectWithoutChallengeFlagInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutChallengeFlagInput | SubmissionUpsertWithWhereUniqueWithoutChallengeFlagInput[]
    createMany?: SubmissionCreateManyChallengeFlagInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutChallengeFlagInput | SubmissionUpdateWithWhereUniqueWithoutChallengeFlagInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutChallengeFlagInput | SubmissionUpdateManyWithWhereWithoutChallengeFlagInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutChallengeFlagNestedInput = {
    create?: XOR<SubmissionCreateWithoutChallengeFlagInput, SubmissionUncheckedCreateWithoutChallengeFlagInput> | SubmissionCreateWithoutChallengeFlagInput[] | SubmissionUncheckedCreateWithoutChallengeFlagInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutChallengeFlagInput | SubmissionCreateOrConnectWithoutChallengeFlagInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutChallengeFlagInput | SubmissionUpsertWithWhereUniqueWithoutChallengeFlagInput[]
    createMany?: SubmissionCreateManyChallengeFlagInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutChallengeFlagInput | SubmissionUpdateWithWhereUniqueWithoutChallengeFlagInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutChallengeFlagInput | SubmissionUpdateManyWithWhereWithoutChallengeFlagInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutPointHistoryInput = {
    create?: XOR<TeamCreateWithoutPointHistoryInput, TeamUncheckedCreateWithoutPointHistoryInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPointHistoryInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutPointHistoryNestedInput = {
    create?: XOR<TeamCreateWithoutPointHistoryInput, TeamUncheckedCreateWithoutPointHistoryInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPointHistoryInput
    upsert?: TeamUpsertWithoutPointHistoryInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPointHistoryInput, TeamUpdateWithoutPointHistoryInput>, TeamUncheckedUpdateWithoutPointHistoryInput>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumUnlockConditionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnlockConditionType | EnumUnlockConditionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnlockConditionType[]
    notIn?: $Enums.UnlockConditionType[]
    not?: NestedEnumUnlockConditionTypeFilter<$PrismaModel> | $Enums.UnlockConditionType
  }

  export type NestedEnumUnlockConditionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnlockConditionType | EnumUnlockConditionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnlockConditionType[]
    notIn?: $Enums.UnlockConditionType[]
    not?: NestedEnumUnlockConditionTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnlockConditionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnlockConditionTypeFilter<$PrismaModel>
    _max?: NestedEnumUnlockConditionTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutSubmissionsInput
    challenge: ChallengeCreateNestedOneWithoutSubmissionsInput
    challengeFlag?: ChallengeFlagCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeId: string
    flagId?: string | null
    teamId: string
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
  }

  export type ScoreCreateWithoutUserInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutScoresInput
    challenge: ChallengeCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutUserInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId: string
    challengeId: string
  }

  export type ScoreCreateOrConnectWithoutUserInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput>
  }

  export type ScoreCreateManyUserInputEnvelope = {
    data: ScoreCreateManyUserInput | ScoreCreateManyUserInput[]
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogCreateNestedManyWithoutTeamInput
    submissions?: SubmissionCreateNestedManyWithoutTeamInput
    scores?: ScoreCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogUncheckedCreateNestedManyWithoutTeamInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTeamInput
    scores?: ScoreUncheckedCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintUncheckedCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    flag?: StringFilter<"Submission"> | string
    isCorrect?: BoolFilter<"Submission"> | boolean
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringFilter<"Submission"> | string
    challengeId?: StringFilter<"Submission"> | string
    flagId?: StringNullableFilter<"Submission"> | string | null
    teamId?: StringFilter<"Submission"> | string
  }

  export type ScoreUpsertWithWhereUniqueWithoutUserInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutUserInput, ScoreUncheckedUpdateWithoutUserInput>
    create: XOR<ScoreCreateWithoutUserInput, ScoreUncheckedCreateWithoutUserInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutUserInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutUserInput, ScoreUncheckedUpdateWithoutUserInput>
  }

  export type ScoreUpdateManyWithWhereWithoutUserInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutUserInput>
  }

  export type ScoreScalarWhereInput = {
    AND?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    OR?: ScoreScalarWhereInput[]
    NOT?: ScoreScalarWhereInput | ScoreScalarWhereInput[]
    id?: StringFilter<"Score"> | string
    points?: IntFilter<"Score"> | number
    createdAt?: DateTimeFilter<"Score"> | Date | string
    updatedAt?: DateTimeFilter<"Score"> | Date | string
    userId?: StringFilter<"Score"> | string
    teamId?: StringFilter<"Score"> | string
    challengeId?: StringFilter<"Score"> | string
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUpdateManyWithoutTeamNestedInput
    submissions?: SubmissionUpdateManyWithoutTeamNestedInput
    scores?: ScoreUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUncheckedUpdateManyWithoutTeamNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutTeamNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUncheckedUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type ActivityLogCreateWithoutTeamInput = {
    id?: string
    type: string
    description: string
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutTeamInput = {
    id?: string
    type: string
    description: string
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutTeamInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutTeamInput, ActivityLogUncheckedCreateWithoutTeamInput>
  }

  export type ActivityLogCreateManyTeamInputEnvelope = {
    data: ActivityLogCreateManyTeamInput | ActivityLogCreateManyTeamInput[]
  }

  export type SubmissionCreateWithoutTeamInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutSubmissionsInput
    user: UserCreateNestedOneWithoutSubmissionsInput
    challengeFlag?: ChallengeFlagCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutTeamInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    challengeId: string
    flagId?: string | null
  }

  export type SubmissionCreateOrConnectWithoutTeamInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTeamInput, SubmissionUncheckedCreateWithoutTeamInput>
  }

  export type SubmissionCreateManyTeamInputEnvelope = {
    data: SubmissionCreateManyTeamInput | SubmissionCreateManyTeamInput[]
  }

  export type ScoreCreateWithoutTeamInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutScoresInput
    user: UserCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutTeamInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    challengeId: string
  }

  export type ScoreCreateOrConnectWithoutTeamInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput>
  }

  export type ScoreCreateManyTeamInputEnvelope = {
    data: ScoreCreateManyTeamInput | ScoreCreateManyTeamInput[]
  }

  export type TeamHintCreateWithoutTeamInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hint: HintCreateNestedOneWithoutTeamHintsInput
  }

  export type TeamHintUncheckedCreateWithoutTeamInput = {
    id?: string
    hintId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamHintCreateOrConnectWithoutTeamInput = {
    where: TeamHintWhereUniqueInput
    create: XOR<TeamHintCreateWithoutTeamInput, TeamHintUncheckedCreateWithoutTeamInput>
  }

  export type TeamHintCreateManyTeamInputEnvelope = {
    data: TeamHintCreateManyTeamInput | TeamHintCreateManyTeamInput[]
  }

  export type UserCreateWithoutTeamInput = {
    id?: string
    alias: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isTeamLeader?: boolean
    isAdmin?: boolean
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    scores?: ScoreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string
    alias: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isTeamLeader?: boolean
    isAdmin?: boolean
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    scores?: ScoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
  }

  export type TeamPointHistoryCreateWithoutTeamInput = {
    id?: string
    points: number
    totalPoints: number
    reason: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type TeamPointHistoryUncheckedCreateWithoutTeamInput = {
    id?: string
    points: number
    totalPoints: number
    reason: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type TeamPointHistoryCreateOrConnectWithoutTeamInput = {
    where: TeamPointHistoryWhereUniqueInput
    create: XOR<TeamPointHistoryCreateWithoutTeamInput, TeamPointHistoryUncheckedCreateWithoutTeamInput>
  }

  export type TeamPointHistoryCreateManyTeamInputEnvelope = {
    data: TeamPointHistoryCreateManyTeamInput | TeamPointHistoryCreateManyTeamInput[]
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutTeamInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutTeamInput, ActivityLogUncheckedUpdateWithoutTeamInput>
    create: XOR<ActivityLogCreateWithoutTeamInput, ActivityLogUncheckedCreateWithoutTeamInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutTeamInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutTeamInput, ActivityLogUncheckedUpdateWithoutTeamInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutTeamInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutTeamInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    type?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    teamId?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutTeamInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutTeamInput, SubmissionUncheckedUpdateWithoutTeamInput>
    create: XOR<SubmissionCreateWithoutTeamInput, SubmissionUncheckedCreateWithoutTeamInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutTeamInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutTeamInput, SubmissionUncheckedUpdateWithoutTeamInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutTeamInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutTeamInput>
  }

  export type ScoreUpsertWithWhereUniqueWithoutTeamInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutTeamInput, ScoreUncheckedUpdateWithoutTeamInput>
    create: XOR<ScoreCreateWithoutTeamInput, ScoreUncheckedCreateWithoutTeamInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutTeamInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutTeamInput, ScoreUncheckedUpdateWithoutTeamInput>
  }

  export type ScoreUpdateManyWithWhereWithoutTeamInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamHintUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamHintWhereUniqueInput
    update: XOR<TeamHintUpdateWithoutTeamInput, TeamHintUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamHintCreateWithoutTeamInput, TeamHintUncheckedCreateWithoutTeamInput>
  }

  export type TeamHintUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamHintWhereUniqueInput
    data: XOR<TeamHintUpdateWithoutTeamInput, TeamHintUncheckedUpdateWithoutTeamInput>
  }

  export type TeamHintUpdateManyWithWhereWithoutTeamInput = {
    where: TeamHintScalarWhereInput
    data: XOR<TeamHintUpdateManyMutationInput, TeamHintUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamHintScalarWhereInput = {
    AND?: TeamHintScalarWhereInput | TeamHintScalarWhereInput[]
    OR?: TeamHintScalarWhereInput[]
    NOT?: TeamHintScalarWhereInput | TeamHintScalarWhereInput[]
    id?: StringFilter<"TeamHint"> | string
    teamId?: StringFilter<"TeamHint"> | string
    hintId?: StringFilter<"TeamHint"> | string
    createdAt?: DateTimeFilter<"TeamHint"> | Date | string
    updatedAt?: DateTimeFilter<"TeamHint"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    alias?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teamId?: StringNullableFilter<"User"> | string | null
    isTeamLeader?: BoolFilter<"User"> | boolean
    isAdmin?: BoolFilter<"User"> | boolean
  }

  export type TeamPointHistoryUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamPointHistoryWhereUniqueInput
    update: XOR<TeamPointHistoryUpdateWithoutTeamInput, TeamPointHistoryUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamPointHistoryCreateWithoutTeamInput, TeamPointHistoryUncheckedCreateWithoutTeamInput>
  }

  export type TeamPointHistoryUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamPointHistoryWhereUniqueInput
    data: XOR<TeamPointHistoryUpdateWithoutTeamInput, TeamPointHistoryUncheckedUpdateWithoutTeamInput>
  }

  export type TeamPointHistoryUpdateManyWithWhereWithoutTeamInput = {
    where: TeamPointHistoryScalarWhereInput
    data: XOR<TeamPointHistoryUpdateManyMutationInput, TeamPointHistoryUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamPointHistoryScalarWhereInput = {
    AND?: TeamPointHistoryScalarWhereInput | TeamPointHistoryScalarWhereInput[]
    OR?: TeamPointHistoryScalarWhereInput[]
    NOT?: TeamPointHistoryScalarWhereInput | TeamPointHistoryScalarWhereInput[]
    id?: StringFilter<"TeamPointHistory"> | string
    teamId?: StringFilter<"TeamPointHistory"> | string
    points?: IntFilter<"TeamPointHistory"> | number
    totalPoints?: IntFilter<"TeamPointHistory"> | number
    reason?: StringFilter<"TeamPointHistory"> | string
    metadata?: StringNullableFilter<"TeamPointHistory"> | string | null
    createdAt?: DateTimeFilter<"TeamPointHistory"> | Date | string
  }

  export type ChallengeFlagCreateWithoutChallengeInput = {
    id?: string
    flag: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutChallengeFlagInput
  }

  export type ChallengeFlagUncheckedCreateWithoutChallengeInput = {
    id?: string
    flag: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutChallengeFlagInput
  }

  export type ChallengeFlagCreateOrConnectWithoutChallengeInput = {
    where: ChallengeFlagWhereUniqueInput
    create: XOR<ChallengeFlagCreateWithoutChallengeInput, ChallengeFlagUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeFlagCreateManyChallengeInputEnvelope = {
    data: ChallengeFlagCreateManyChallengeInput | ChallengeFlagCreateManyChallengeInput[]
  }

  export type UnlockConditionCreateWithoutChallengeInput = {
    id?: string
    type: $Enums.UnlockConditionType
    requiredChallengeId?: string | null
    timeThresholdSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnlockConditionUncheckedCreateWithoutChallengeInput = {
    id?: string
    type: $Enums.UnlockConditionType
    requiredChallengeId?: string | null
    timeThresholdSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnlockConditionCreateOrConnectWithoutChallengeInput = {
    where: UnlockConditionWhereUniqueInput
    create: XOR<UnlockConditionCreateWithoutChallengeInput, UnlockConditionUncheckedCreateWithoutChallengeInput>
  }

  export type UnlockConditionCreateManyChallengeInputEnvelope = {
    data: UnlockConditionCreateManyChallengeInput | UnlockConditionCreateManyChallengeInput[]
  }

  export type ChallengeFileCreateWithoutChallengeInput = {
    id?: string
    name: string
    path: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeFileUncheckedCreateWithoutChallengeInput = {
    id?: string
    name: string
    path: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeFileCreateOrConnectWithoutChallengeInput = {
    where: ChallengeFileWhereUniqueInput
    create: XOR<ChallengeFileCreateWithoutChallengeInput, ChallengeFileUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeFileCreateManyChallengeInputEnvelope = {
    data: ChallengeFileCreateManyChallengeInput | ChallengeFileCreateManyChallengeInput[]
  }

  export type HintCreateWithoutChallengeInput = {
    id?: string
    content: string
    cost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teamHints?: TeamHintCreateNestedManyWithoutHintInput
  }

  export type HintUncheckedCreateWithoutChallengeInput = {
    id?: string
    content: string
    cost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teamHints?: TeamHintUncheckedCreateNestedManyWithoutHintInput
  }

  export type HintCreateOrConnectWithoutChallengeInput = {
    where: HintWhereUniqueInput
    create: XOR<HintCreateWithoutChallengeInput, HintUncheckedCreateWithoutChallengeInput>
  }

  export type HintCreateManyChallengeInputEnvelope = {
    data: HintCreateManyChallengeInput | HintCreateManyChallengeInput[]
  }

  export type SubmissionCreateWithoutChallengeInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutSubmissionsInput
    user: UserCreateNestedOneWithoutSubmissionsInput
    challengeFlag?: ChallengeFlagCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutChallengeInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    flagId?: string | null
    teamId: string
  }

  export type SubmissionCreateOrConnectWithoutChallengeInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput>
  }

  export type SubmissionCreateManyChallengeInputEnvelope = {
    data: SubmissionCreateManyChallengeInput | SubmissionCreateManyChallengeInput[]
  }

  export type ScoreCreateWithoutChallengeInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutScoresInput
    user: UserCreateNestedOneWithoutScoresInput
  }

  export type ScoreUncheckedCreateWithoutChallengeInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    teamId: string
  }

  export type ScoreCreateOrConnectWithoutChallengeInput = {
    where: ScoreWhereUniqueInput
    create: XOR<ScoreCreateWithoutChallengeInput, ScoreUncheckedCreateWithoutChallengeInput>
  }

  export type ScoreCreateManyChallengeInputEnvelope = {
    data: ScoreCreateManyChallengeInput | ScoreCreateManyChallengeInput[]
  }

  export type ChallengeFlagUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeFlagWhereUniqueInput
    update: XOR<ChallengeFlagUpdateWithoutChallengeInput, ChallengeFlagUncheckedUpdateWithoutChallengeInput>
    create: XOR<ChallengeFlagCreateWithoutChallengeInput, ChallengeFlagUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeFlagUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeFlagWhereUniqueInput
    data: XOR<ChallengeFlagUpdateWithoutChallengeInput, ChallengeFlagUncheckedUpdateWithoutChallengeInput>
  }

  export type ChallengeFlagUpdateManyWithWhereWithoutChallengeInput = {
    where: ChallengeFlagScalarWhereInput
    data: XOR<ChallengeFlagUpdateManyMutationInput, ChallengeFlagUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ChallengeFlagScalarWhereInput = {
    AND?: ChallengeFlagScalarWhereInput | ChallengeFlagScalarWhereInput[]
    OR?: ChallengeFlagScalarWhereInput[]
    NOT?: ChallengeFlagScalarWhereInput | ChallengeFlagScalarWhereInput[]
    id?: StringFilter<"ChallengeFlag"> | string
    flag?: StringFilter<"ChallengeFlag"> | string
    points?: IntFilter<"ChallengeFlag"> | number
    challengeId?: StringFilter<"ChallengeFlag"> | string
    createdAt?: DateTimeFilter<"ChallengeFlag"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengeFlag"> | Date | string
  }

  export type UnlockConditionUpsertWithWhereUniqueWithoutChallengeInput = {
    where: UnlockConditionWhereUniqueInput
    update: XOR<UnlockConditionUpdateWithoutChallengeInput, UnlockConditionUncheckedUpdateWithoutChallengeInput>
    create: XOR<UnlockConditionCreateWithoutChallengeInput, UnlockConditionUncheckedCreateWithoutChallengeInput>
  }

  export type UnlockConditionUpdateWithWhereUniqueWithoutChallengeInput = {
    where: UnlockConditionWhereUniqueInput
    data: XOR<UnlockConditionUpdateWithoutChallengeInput, UnlockConditionUncheckedUpdateWithoutChallengeInput>
  }

  export type UnlockConditionUpdateManyWithWhereWithoutChallengeInput = {
    where: UnlockConditionScalarWhereInput
    data: XOR<UnlockConditionUpdateManyMutationInput, UnlockConditionUncheckedUpdateManyWithoutChallengeInput>
  }

  export type UnlockConditionScalarWhereInput = {
    AND?: UnlockConditionScalarWhereInput | UnlockConditionScalarWhereInput[]
    OR?: UnlockConditionScalarWhereInput[]
    NOT?: UnlockConditionScalarWhereInput | UnlockConditionScalarWhereInput[]
    id?: StringFilter<"UnlockCondition"> | string
    challengeId?: StringFilter<"UnlockCondition"> | string
    type?: EnumUnlockConditionTypeFilter<"UnlockCondition"> | $Enums.UnlockConditionType
    requiredChallengeId?: StringNullableFilter<"UnlockCondition"> | string | null
    timeThresholdSeconds?: IntNullableFilter<"UnlockCondition"> | number | null
    createdAt?: DateTimeFilter<"UnlockCondition"> | Date | string
    updatedAt?: DateTimeFilter<"UnlockCondition"> | Date | string
  }

  export type ChallengeFileUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeFileWhereUniqueInput
    update: XOR<ChallengeFileUpdateWithoutChallengeInput, ChallengeFileUncheckedUpdateWithoutChallengeInput>
    create: XOR<ChallengeFileCreateWithoutChallengeInput, ChallengeFileUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeFileUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeFileWhereUniqueInput
    data: XOR<ChallengeFileUpdateWithoutChallengeInput, ChallengeFileUncheckedUpdateWithoutChallengeInput>
  }

  export type ChallengeFileUpdateManyWithWhereWithoutChallengeInput = {
    where: ChallengeFileScalarWhereInput
    data: XOR<ChallengeFileUpdateManyMutationInput, ChallengeFileUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ChallengeFileScalarWhereInput = {
    AND?: ChallengeFileScalarWhereInput | ChallengeFileScalarWhereInput[]
    OR?: ChallengeFileScalarWhereInput[]
    NOT?: ChallengeFileScalarWhereInput | ChallengeFileScalarWhereInput[]
    id?: StringFilter<"ChallengeFile"> | string
    name?: StringFilter<"ChallengeFile"> | string
    path?: StringFilter<"ChallengeFile"> | string
    size?: IntFilter<"ChallengeFile"> | number
    createdAt?: DateTimeFilter<"ChallengeFile"> | Date | string
    updatedAt?: DateTimeFilter<"ChallengeFile"> | Date | string
    challengeId?: StringFilter<"ChallengeFile"> | string
  }

  export type HintUpsertWithWhereUniqueWithoutChallengeInput = {
    where: HintWhereUniqueInput
    update: XOR<HintUpdateWithoutChallengeInput, HintUncheckedUpdateWithoutChallengeInput>
    create: XOR<HintCreateWithoutChallengeInput, HintUncheckedCreateWithoutChallengeInput>
  }

  export type HintUpdateWithWhereUniqueWithoutChallengeInput = {
    where: HintWhereUniqueInput
    data: XOR<HintUpdateWithoutChallengeInput, HintUncheckedUpdateWithoutChallengeInput>
  }

  export type HintUpdateManyWithWhereWithoutChallengeInput = {
    where: HintScalarWhereInput
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyWithoutChallengeInput>
  }

  export type HintScalarWhereInput = {
    AND?: HintScalarWhereInput | HintScalarWhereInput[]
    OR?: HintScalarWhereInput[]
    NOT?: HintScalarWhereInput | HintScalarWhereInput[]
    id?: StringFilter<"Hint"> | string
    content?: StringFilter<"Hint"> | string
    cost?: IntFilter<"Hint"> | number
    challengeId?: StringFilter<"Hint"> | string
    createdAt?: DateTimeFilter<"Hint"> | Date | string
    updatedAt?: DateTimeFilter<"Hint"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutChallengeInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutChallengeInput, SubmissionUncheckedUpdateWithoutChallengeInput>
    create: XOR<SubmissionCreateWithoutChallengeInput, SubmissionUncheckedCreateWithoutChallengeInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutChallengeInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutChallengeInput, SubmissionUncheckedUpdateWithoutChallengeInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutChallengeInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ScoreUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ScoreWhereUniqueInput
    update: XOR<ScoreUpdateWithoutChallengeInput, ScoreUncheckedUpdateWithoutChallengeInput>
    create: XOR<ScoreCreateWithoutChallengeInput, ScoreUncheckedCreateWithoutChallengeInput>
  }

  export type ScoreUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ScoreWhereUniqueInput
    data: XOR<ScoreUpdateWithoutChallengeInput, ScoreUncheckedUpdateWithoutChallengeInput>
  }

  export type ScoreUpdateManyWithWhereWithoutChallengeInput = {
    where: ScoreScalarWhereInput
    data: XOR<ScoreUpdateManyMutationInput, ScoreUncheckedUpdateManyWithoutChallengeInput>
  }

  export type TeamCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogCreateNestedManyWithoutTeamInput
    scores?: ScoreCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintCreateNestedManyWithoutTeamInput
    members?: UserCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogUncheckedCreateNestedManyWithoutTeamInput
    scores?: ScoreUncheckedCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintUncheckedCreateNestedManyWithoutTeamInput
    members?: UserUncheckedCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutSubmissionsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutSubmissionsInput, TeamUncheckedCreateWithoutSubmissionsInput>
  }

  export type ChallengeCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagCreateNestedManyWithoutChallengeInput
    unlockConditions?: UnlockConditionCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileCreateNestedManyWithoutChallengeInput
    hints?: HintCreateNestedManyWithoutChallengeInput
    scores?: ScoreCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagUncheckedCreateNestedManyWithoutChallengeInput
    unlockConditions?: UnlockConditionUncheckedCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileUncheckedCreateNestedManyWithoutChallengeInput
    hints?: HintUncheckedCreateNestedManyWithoutChallengeInput
    scores?: ScoreUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutSubmissionsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutSubmissionsInput, ChallengeUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    alias: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isTeamLeader?: boolean
    isAdmin?: boolean
    scores?: ScoreCreateNestedManyWithoutUserInput
    team?: TeamCreateNestedOneWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    alias: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId?: string | null
    isTeamLeader?: boolean
    isAdmin?: boolean
    scores?: ScoreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type ChallengeFlagCreateWithoutSubmissionsInput = {
    id?: string
    flag: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutFlagsInput
  }

  export type ChallengeFlagUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    flag: string
    points: number
    challengeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeFlagCreateOrConnectWithoutSubmissionsInput = {
    where: ChallengeFlagWhereUniqueInput
    create: XOR<ChallengeFlagCreateWithoutSubmissionsInput, ChallengeFlagUncheckedCreateWithoutSubmissionsInput>
  }

  export type TeamUpsertWithoutSubmissionsInput = {
    update: XOR<TeamUpdateWithoutSubmissionsInput, TeamUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<TeamCreateWithoutSubmissionsInput, TeamUncheckedCreateWithoutSubmissionsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutSubmissionsInput, TeamUncheckedUpdateWithoutSubmissionsInput>
  }

  export type TeamUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUpdateManyWithoutTeamNestedInput
    scores?: ScoreUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUpdateManyWithoutTeamNestedInput
    members?: UserUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUncheckedUpdateManyWithoutTeamNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUncheckedUpdateManyWithoutTeamNestedInput
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type ChallengeUpsertWithoutSubmissionsInput = {
    update: XOR<ChallengeUpdateWithoutSubmissionsInput, ChallengeUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ChallengeCreateWithoutSubmissionsInput, ChallengeUncheckedCreateWithoutSubmissionsInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutSubmissionsInput, ChallengeUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ChallengeUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUpdateManyWithoutChallengeNestedInput
    unlockConditions?: UnlockConditionUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUpdateManyWithoutChallengeNestedInput
    hints?: HintUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUncheckedUpdateManyWithoutChallengeNestedInput
    unlockConditions?: UnlockConditionUncheckedUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUncheckedUpdateManyWithoutChallengeNestedInput
    hints?: HintUncheckedUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    scores?: ScoreUpdateManyWithoutUserNestedInput
    team?: TeamUpdateOneWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    scores?: ScoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeFlagUpsertWithoutSubmissionsInput = {
    update: XOR<ChallengeFlagUpdateWithoutSubmissionsInput, ChallengeFlagUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ChallengeFlagCreateWithoutSubmissionsInput, ChallengeFlagUncheckedCreateWithoutSubmissionsInput>
    where?: ChallengeFlagWhereInput
  }

  export type ChallengeFlagUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ChallengeFlagWhereInput
    data: XOR<ChallengeFlagUpdateWithoutSubmissionsInput, ChallengeFlagUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ChallengeFlagUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type ChallengeFlagUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    challengeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateWithoutActivityLogInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    submissions?: SubmissionCreateNestedManyWithoutTeamInput
    scores?: ScoreCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintCreateNestedManyWithoutTeamInput
    members?: UserCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutActivityLogInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTeamInput
    scores?: ScoreUncheckedCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintUncheckedCreateNestedManyWithoutTeamInput
    members?: UserUncheckedCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutActivityLogInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutActivityLogInput, TeamUncheckedCreateWithoutActivityLogInput>
  }

  export type TeamUpsertWithoutActivityLogInput = {
    update: XOR<TeamUpdateWithoutActivityLogInput, TeamUncheckedUpdateWithoutActivityLogInput>
    create: XOR<TeamCreateWithoutActivityLogInput, TeamUncheckedCreateWithoutActivityLogInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutActivityLogInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutActivityLogInput, TeamUncheckedUpdateWithoutActivityLogInput>
  }

  export type TeamUpdateWithoutActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUpdateManyWithoutTeamNestedInput
    scores?: ScoreUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUpdateManyWithoutTeamNestedInput
    members?: UserUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutActivityLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUncheckedUpdateManyWithoutTeamNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUncheckedUpdateManyWithoutTeamNestedInput
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type ChallengeCreateWithoutFilesInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagCreateNestedManyWithoutChallengeInput
    unlockConditions?: UnlockConditionCreateNestedManyWithoutChallengeInput
    hints?: HintCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionCreateNestedManyWithoutChallengeInput
    scores?: ScoreCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutFilesInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagUncheckedCreateNestedManyWithoutChallengeInput
    unlockConditions?: UnlockConditionUncheckedCreateNestedManyWithoutChallengeInput
    hints?: HintUncheckedCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutChallengeInput
    scores?: ScoreUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutFilesInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutFilesInput, ChallengeUncheckedCreateWithoutFilesInput>
  }

  export type ChallengeUpsertWithoutFilesInput = {
    update: XOR<ChallengeUpdateWithoutFilesInput, ChallengeUncheckedUpdateWithoutFilesInput>
    create: XOR<ChallengeCreateWithoutFilesInput, ChallengeUncheckedCreateWithoutFilesInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutFilesInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutFilesInput, ChallengeUncheckedUpdateWithoutFilesInput>
  }

  export type ChallengeUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUpdateManyWithoutChallengeNestedInput
    unlockConditions?: UnlockConditionUpdateManyWithoutChallengeNestedInput
    hints?: HintUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUncheckedUpdateManyWithoutChallengeNestedInput
    unlockConditions?: UnlockConditionUncheckedUpdateManyWithoutChallengeNestedInput
    hints?: HintUncheckedUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateWithoutHintsInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagCreateNestedManyWithoutChallengeInput
    unlockConditions?: UnlockConditionCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionCreateNestedManyWithoutChallengeInput
    scores?: ScoreCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutHintsInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagUncheckedCreateNestedManyWithoutChallengeInput
    unlockConditions?: UnlockConditionUncheckedCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileUncheckedCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutChallengeInput
    scores?: ScoreUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutHintsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutHintsInput, ChallengeUncheckedCreateWithoutHintsInput>
  }

  export type TeamHintCreateWithoutHintInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutTeamHintsInput
  }

  export type TeamHintUncheckedCreateWithoutHintInput = {
    id?: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamHintCreateOrConnectWithoutHintInput = {
    where: TeamHintWhereUniqueInput
    create: XOR<TeamHintCreateWithoutHintInput, TeamHintUncheckedCreateWithoutHintInput>
  }

  export type TeamHintCreateManyHintInputEnvelope = {
    data: TeamHintCreateManyHintInput | TeamHintCreateManyHintInput[]
  }

  export type ChallengeUpsertWithoutHintsInput = {
    update: XOR<ChallengeUpdateWithoutHintsInput, ChallengeUncheckedUpdateWithoutHintsInput>
    create: XOR<ChallengeCreateWithoutHintsInput, ChallengeUncheckedCreateWithoutHintsInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutHintsInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutHintsInput, ChallengeUncheckedUpdateWithoutHintsInput>
  }

  export type ChallengeUpdateWithoutHintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUpdateManyWithoutChallengeNestedInput
    unlockConditions?: UnlockConditionUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutHintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUncheckedUpdateManyWithoutChallengeNestedInput
    unlockConditions?: UnlockConditionUncheckedUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUncheckedUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type TeamHintUpsertWithWhereUniqueWithoutHintInput = {
    where: TeamHintWhereUniqueInput
    update: XOR<TeamHintUpdateWithoutHintInput, TeamHintUncheckedUpdateWithoutHintInput>
    create: XOR<TeamHintCreateWithoutHintInput, TeamHintUncheckedCreateWithoutHintInput>
  }

  export type TeamHintUpdateWithWhereUniqueWithoutHintInput = {
    where: TeamHintWhereUniqueInput
    data: XOR<TeamHintUpdateWithoutHintInput, TeamHintUncheckedUpdateWithoutHintInput>
  }

  export type TeamHintUpdateManyWithWhereWithoutHintInput = {
    where: TeamHintScalarWhereInput
    data: XOR<TeamHintUpdateManyMutationInput, TeamHintUncheckedUpdateManyWithoutHintInput>
  }

  export type HintCreateWithoutTeamHintsInput = {
    id?: string
    content: string
    cost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    challenge: ChallengeCreateNestedOneWithoutHintsInput
  }

  export type HintUncheckedCreateWithoutTeamHintsInput = {
    id?: string
    content: string
    cost?: number
    challengeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HintCreateOrConnectWithoutTeamHintsInput = {
    where: HintWhereUniqueInput
    create: XOR<HintCreateWithoutTeamHintsInput, HintUncheckedCreateWithoutTeamHintsInput>
  }

  export type TeamCreateWithoutTeamHintsInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogCreateNestedManyWithoutTeamInput
    submissions?: SubmissionCreateNestedManyWithoutTeamInput
    scores?: ScoreCreateNestedManyWithoutTeamInput
    members?: UserCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutTeamHintsInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogUncheckedCreateNestedManyWithoutTeamInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTeamInput
    scores?: ScoreUncheckedCreateNestedManyWithoutTeamInput
    members?: UserUncheckedCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutTeamHintsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeamHintsInput, TeamUncheckedCreateWithoutTeamHintsInput>
  }

  export type HintUpsertWithoutTeamHintsInput = {
    update: XOR<HintUpdateWithoutTeamHintsInput, HintUncheckedUpdateWithoutTeamHintsInput>
    create: XOR<HintCreateWithoutTeamHintsInput, HintUncheckedCreateWithoutTeamHintsInput>
    where?: HintWhereInput
  }

  export type HintUpdateToOneWithWhereWithoutTeamHintsInput = {
    where?: HintWhereInput
    data: XOR<HintUpdateWithoutTeamHintsInput, HintUncheckedUpdateWithoutTeamHintsInput>
  }

  export type HintUpdateWithoutTeamHintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutHintsNestedInput
  }

  export type HintUncheckedUpdateWithoutTeamHintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    challengeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpsertWithoutTeamHintsInput = {
    update: XOR<TeamUpdateWithoutTeamHintsInput, TeamUncheckedUpdateWithoutTeamHintsInput>
    create: XOR<TeamCreateWithoutTeamHintsInput, TeamUncheckedCreateWithoutTeamHintsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeamHintsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeamHintsInput, TeamUncheckedUpdateWithoutTeamHintsInput>
  }

  export type TeamUpdateWithoutTeamHintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUpdateManyWithoutTeamNestedInput
    submissions?: SubmissionUpdateManyWithoutTeamNestedInput
    scores?: ScoreUpdateManyWithoutTeamNestedInput
    members?: UserUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeamHintsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUncheckedUpdateManyWithoutTeamNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutTeamNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutTeamNestedInput
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateWithoutScoresInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogCreateNestedManyWithoutTeamInput
    submissions?: SubmissionCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintCreateNestedManyWithoutTeamInput
    members?: UserCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutScoresInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogUncheckedCreateNestedManyWithoutTeamInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintUncheckedCreateNestedManyWithoutTeamInput
    members?: UserUncheckedCreateNestedManyWithoutTeamInput
    pointHistory?: TeamPointHistoryUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutScoresInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutScoresInput, TeamUncheckedCreateWithoutScoresInput>
  }

  export type ChallengeCreateWithoutScoresInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagCreateNestedManyWithoutChallengeInput
    unlockConditions?: UnlockConditionCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileCreateNestedManyWithoutChallengeInput
    hints?: HintCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutScoresInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagUncheckedCreateNestedManyWithoutChallengeInput
    unlockConditions?: UnlockConditionUncheckedCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileUncheckedCreateNestedManyWithoutChallengeInput
    hints?: HintUncheckedCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutScoresInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutScoresInput, ChallengeUncheckedCreateWithoutScoresInput>
  }

  export type UserCreateWithoutScoresInput = {
    id?: string
    alias: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isTeamLeader?: boolean
    isAdmin?: boolean
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    team?: TeamCreateNestedOneWithoutMembersInput
  }

  export type UserUncheckedCreateWithoutScoresInput = {
    id?: string
    alias: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId?: string | null
    isTeamLeader?: boolean
    isAdmin?: boolean
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
  }

  export type TeamUpsertWithoutScoresInput = {
    update: XOR<TeamUpdateWithoutScoresInput, TeamUncheckedUpdateWithoutScoresInput>
    create: XOR<TeamCreateWithoutScoresInput, TeamUncheckedCreateWithoutScoresInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutScoresInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutScoresInput, TeamUncheckedUpdateWithoutScoresInput>
  }

  export type TeamUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUpdateManyWithoutTeamNestedInput
    submissions?: SubmissionUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUpdateManyWithoutTeamNestedInput
    members?: UserUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUncheckedUpdateManyWithoutTeamNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUncheckedUpdateManyWithoutTeamNestedInput
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput
    pointHistory?: TeamPointHistoryUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type ChallengeUpsertWithoutScoresInput = {
    update: XOR<ChallengeUpdateWithoutScoresInput, ChallengeUncheckedUpdateWithoutScoresInput>
    create: XOR<ChallengeCreateWithoutScoresInput, ChallengeUncheckedCreateWithoutScoresInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutScoresInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutScoresInput, ChallengeUncheckedUpdateWithoutScoresInput>
  }

  export type ChallengeUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUpdateManyWithoutChallengeNestedInput
    unlockConditions?: UnlockConditionUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUpdateManyWithoutChallengeNestedInput
    hints?: HintUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUncheckedUpdateManyWithoutChallengeNestedInput
    unlockConditions?: UnlockConditionUncheckedUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUncheckedUpdateManyWithoutChallengeNestedInput
    hints?: HintUncheckedUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type UserUpsertWithoutScoresInput = {
    update: XOR<UserUpdateWithoutScoresInput, UserUncheckedUpdateWithoutScoresInput>
    create: XOR<UserCreateWithoutScoresInput, UserUncheckedCreateWithoutScoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScoresInput, UserUncheckedUpdateWithoutScoresInput>
  }

  export type UserUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    team?: TeamUpdateOneWithoutMembersNestedInput
  }

  export type UserUncheckedUpdateWithoutScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallengeCreateWithoutUnlockConditionsInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileCreateNestedManyWithoutChallengeInput
    hints?: HintCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionCreateNestedManyWithoutChallengeInput
    scores?: ScoreCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutUnlockConditionsInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: ChallengeFlagUncheckedCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileUncheckedCreateNestedManyWithoutChallengeInput
    hints?: HintUncheckedCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutChallengeInput
    scores?: ScoreUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutUnlockConditionsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutUnlockConditionsInput, ChallengeUncheckedCreateWithoutUnlockConditionsInput>
  }

  export type ChallengeUpsertWithoutUnlockConditionsInput = {
    update: XOR<ChallengeUpdateWithoutUnlockConditionsInput, ChallengeUncheckedUpdateWithoutUnlockConditionsInput>
    create: XOR<ChallengeCreateWithoutUnlockConditionsInput, ChallengeUncheckedCreateWithoutUnlockConditionsInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutUnlockConditionsInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutUnlockConditionsInput, ChallengeUncheckedUpdateWithoutUnlockConditionsInput>
  }

  export type ChallengeUpdateWithoutUnlockConditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUpdateManyWithoutChallengeNestedInput
    hints?: HintUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutUnlockConditionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: ChallengeFlagUncheckedUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUncheckedUpdateManyWithoutChallengeNestedInput
    hints?: HintUncheckedUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeCreateWithoutFlagsInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unlockConditions?: UnlockConditionCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileCreateNestedManyWithoutChallengeInput
    hints?: HintCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionCreateNestedManyWithoutChallengeInput
    scores?: ScoreCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeUncheckedCreateWithoutFlagsInput = {
    id?: string
    title: string
    description: string
    points: number
    flag?: string | null
    multipleFlags?: boolean
    category: string
    difficulty: string
    isActive?: boolean
    isLocked?: boolean
    link?: string | null
    solveExplanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unlockConditions?: UnlockConditionUncheckedCreateNestedManyWithoutChallengeInput
    files?: ChallengeFileUncheckedCreateNestedManyWithoutChallengeInput
    hints?: HintUncheckedCreateNestedManyWithoutChallengeInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutChallengeInput
    scores?: ScoreUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ChallengeCreateOrConnectWithoutFlagsInput = {
    where: ChallengeWhereUniqueInput
    create: XOR<ChallengeCreateWithoutFlagsInput, ChallengeUncheckedCreateWithoutFlagsInput>
  }

  export type SubmissionCreateWithoutChallengeFlagInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutSubmissionsInput
    challenge: ChallengeCreateNestedOneWithoutSubmissionsInput
    user: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutChallengeFlagInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    challengeId: string
    teamId: string
  }

  export type SubmissionCreateOrConnectWithoutChallengeFlagInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutChallengeFlagInput, SubmissionUncheckedCreateWithoutChallengeFlagInput>
  }

  export type SubmissionCreateManyChallengeFlagInputEnvelope = {
    data: SubmissionCreateManyChallengeFlagInput | SubmissionCreateManyChallengeFlagInput[]
  }

  export type ChallengeUpsertWithoutFlagsInput = {
    update: XOR<ChallengeUpdateWithoutFlagsInput, ChallengeUncheckedUpdateWithoutFlagsInput>
    create: XOR<ChallengeCreateWithoutFlagsInput, ChallengeUncheckedCreateWithoutFlagsInput>
    where?: ChallengeWhereInput
  }

  export type ChallengeUpdateToOneWithWhereWithoutFlagsInput = {
    where?: ChallengeWhereInput
    data: XOR<ChallengeUpdateWithoutFlagsInput, ChallengeUncheckedUpdateWithoutFlagsInput>
  }

  export type ChallengeUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unlockConditions?: UnlockConditionUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUpdateManyWithoutChallengeNestedInput
    hints?: HintUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUpdateManyWithoutChallengeNestedInput
  }

  export type ChallengeUncheckedUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    multipleFlags?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isLocked?: BoolFieldUpdateOperationsInput | boolean
    link?: NullableStringFieldUpdateOperationsInput | string | null
    solveExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unlockConditions?: UnlockConditionUncheckedUpdateManyWithoutChallengeNestedInput
    files?: ChallengeFileUncheckedUpdateManyWithoutChallengeNestedInput
    hints?: HintUncheckedUpdateManyWithoutChallengeNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutChallengeNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutChallengeFlagInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutChallengeFlagInput, SubmissionUncheckedUpdateWithoutChallengeFlagInput>
    create: XOR<SubmissionCreateWithoutChallengeFlagInput, SubmissionUncheckedCreateWithoutChallengeFlagInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutChallengeFlagInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutChallengeFlagInput, SubmissionUncheckedUpdateWithoutChallengeFlagInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutChallengeFlagInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutChallengeFlagInput>
  }

  export type TeamCreateWithoutPointHistoryInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogCreateNestedManyWithoutTeamInput
    submissions?: SubmissionCreateNestedManyWithoutTeamInput
    scores?: ScoreCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintCreateNestedManyWithoutTeamInput
    members?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutPointHistoryInput = {
    id?: string
    name: string
    code: string
    icon?: string
    color?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    score?: number
    ActivityLog?: ActivityLogUncheckedCreateNestedManyWithoutTeamInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTeamInput
    scores?: ScoreUncheckedCreateNestedManyWithoutTeamInput
    teamHints?: TeamHintUncheckedCreateNestedManyWithoutTeamInput
    members?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutPointHistoryInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPointHistoryInput, TeamUncheckedCreateWithoutPointHistoryInput>
  }

  export type TeamUpsertWithoutPointHistoryInput = {
    update: XOR<TeamUpdateWithoutPointHistoryInput, TeamUncheckedUpdateWithoutPointHistoryInput>
    create: XOR<TeamCreateWithoutPointHistoryInput, TeamUncheckedCreateWithoutPointHistoryInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPointHistoryInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPointHistoryInput, TeamUncheckedUpdateWithoutPointHistoryInput>
  }

  export type TeamUpdateWithoutPointHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUpdateManyWithoutTeamNestedInput
    submissions?: SubmissionUpdateManyWithoutTeamNestedInput
    scores?: ScoreUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUpdateManyWithoutTeamNestedInput
    members?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPointHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    score?: IntFieldUpdateOperationsInput | number
    ActivityLog?: ActivityLogUncheckedUpdateManyWithoutTeamNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutTeamNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutTeamNestedInput
    teamHints?: TeamHintUncheckedUpdateManyWithoutTeamNestedInput
    members?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    challengeId: string
    flagId?: string | null
    teamId: string
  }

  export type ScoreCreateManyUserInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId: string
    challengeId: string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutSubmissionsNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutSubmissionsNestedInput
    challengeFlag?: ChallengeFlagUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: StringFieldUpdateOperationsInput | string
    flagId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeId?: StringFieldUpdateOperationsInput | string
    flagId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutScoresNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogCreateManyTeamInput = {
    id?: string
    type: string
    description: string
    createdAt?: Date | string
  }

  export type SubmissionCreateManyTeamInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    challengeId: string
    flagId?: string | null
  }

  export type ScoreCreateManyTeamInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    challengeId: string
  }

  export type TeamHintCreateManyTeamInput = {
    id?: string
    hintId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyTeamInput = {
    id?: string
    alias: string
    password: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isTeamLeader?: boolean
    isAdmin?: boolean
  }

  export type TeamPointHistoryCreateManyTeamInput = {
    id?: string
    points: number
    totalPoints: number
    reason: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutSubmissionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    challengeFlag?: ChallengeFlagUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    flagId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    flagId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ScoreUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ChallengeUpdateOneRequiredWithoutScoresNestedInput
    user?: UserUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamHintUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hint?: HintUpdateOneRequiredWithoutTeamHintsNestedInput
  }

  export type TeamHintUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    hintId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamHintUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    hintId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    scores?: ScoreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    scores?: ScoreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTeamLeader?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeamPointHistoryUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamPointHistoryUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamPointHistoryUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeFlagCreateManyChallengeInput = {
    id?: string
    flag: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnlockConditionCreateManyChallengeInput = {
    id?: string
    type: $Enums.UnlockConditionType
    requiredChallengeId?: string | null
    timeThresholdSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallengeFileCreateManyChallengeInput = {
    id?: string
    name: string
    path: string
    size: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HintCreateManyChallengeInput = {
    id?: string
    content: string
    cost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyChallengeInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    flagId?: string | null
    teamId: string
  }

  export type ScoreCreateManyChallengeInput = {
    id?: string
    points: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    teamId: string
  }

  export type ChallengeFlagUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutChallengeFlagNestedInput
  }

  export type ChallengeFlagUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutChallengeFlagNestedInput
  }

  export type ChallengeFlagUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockConditionUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUnlockConditionTypeFieldUpdateOperationsInput | $Enums.UnlockConditionType
    requiredChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeThresholdSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockConditionUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUnlockConditionTypeFieldUpdateOperationsInput | $Enums.UnlockConditionType
    requiredChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeThresholdSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnlockConditionUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUnlockConditionTypeFieldUpdateOperationsInput | $Enums.UnlockConditionType
    requiredChallengeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeThresholdSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeFileUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeFileUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeFileUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HintUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamHints?: TeamHintUpdateManyWithoutHintNestedInput
  }

  export type HintUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamHints?: TeamHintUncheckedUpdateManyWithoutHintNestedInput
  }

  export type HintUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutSubmissionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    challengeFlag?: ChallengeFlagUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    flagId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    flagId?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutScoresNestedInput
    user?: UserUpdateOneRequiredWithoutScoresNestedInput
  }

  export type ScoreUncheckedUpdateWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreUncheckedUpdateManyWithoutChallengeInput = {
    id?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamHintCreateManyHintInput = {
    id?: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamHintUpdateWithoutHintInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutTeamHintsNestedInput
  }

  export type TeamHintUncheckedUpdateWithoutHintInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamHintUncheckedUpdateManyWithoutHintInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyChallengeFlagInput = {
    id?: string
    flag: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    challengeId: string
    teamId: string
  }

  export type SubmissionUpdateWithoutChallengeFlagInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutSubmissionsNestedInput
    challenge?: ChallengeUpdateOneRequiredWithoutSubmissionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutChallengeFlagInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutChallengeFlagInput = {
    id?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
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