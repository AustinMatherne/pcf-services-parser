import { AppEnv, getAppEnv } from "cfenv";
import { isPlainObject, pipe, snakeCase, toUpper } from "lodash/fp";

export type Credentials = Record<string, any>;

export const getPcfServiceCredentials = (pcfEnv: AppEnv = getAppEnv()) =>
  pipe(
    getServiceNames,
    getServiceCredentials(pcfEnv),
    flattenCredentials,
    formatCredentials
  )(pcfEnv);

const getServiceNames = (pcfEnv: AppEnv): string[] =>
  Object.keys(pcfEnv.getServices());

const getServiceCredentials = (pcfEnv: AppEnv) => (
  services: string[]
): Record<string, string> =>
  services.reduce(
    (acc, service) => ({ ...acc, [service]: pcfEnv.getServiceCreds(service) }),
    {}
  );

const flattenCredentials = (
  credentials: Credentials,
  prefix?: string
): Credentials =>
  Object.entries(credentials).reduce(
    (acc, [key, value]) =>
      isPlainObject(value)
        ? { ...acc, ...flattenCredentials(value, prefixKey(key, prefix)) }
        : { ...acc, [prefixKey(key, prefix)]: value },
    {}
  );

const prefixKey = (key: string, prefix: string = ""): string =>
  prefix ? `${prefix}-${key}` : key;

const formatCredentials = (credentials: Credentials): Credentials =>
  Object.entries(credentials)
    .map(([key, value]) => [formatCredentialString(key), value])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

const formatCredentialString = pipe(
  snakeCase,
  toUpper
);
