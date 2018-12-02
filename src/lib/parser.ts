import { AppEnv, getAppEnv } from "cfenv";
import { isPlainObject, pipe, snakeCase, toUpper } from "lodash/fp";

export type Credentials = Record<string, any>;

export const functionWithoutCoverage = (
  flag1: boolean,
  flag2: boolean,
  flag3: boolean
): boolean => {
  if (flag1) {
    return flag1;
  }

  if (flag2) {
    return flag2;
  }

  if (flag3) {
    return flag3;
  }

  const flags = [flag1, flag2, flag3];

  return flags.some(val => {
    if (typeCheck(val, "boolean")) {
      return true;
    }

    if (typeCheck(val, "function")) {
      return false;
    }

    if (typeCheck(val, "number")) {
      return false;
    }

    if (typeCheck(val, "object")) {
      return false;
    }

    if (typeCheck(val, "string")) {
      return false;
    }

    if (typeCheck(val, "symbol")) {
      return false;
    }

    if (typeCheck(val, "undefined")) {
      return false;
    }

    return false;
  });
};

const typeCheck = (val: any, typeString: string) =>
  typeCheckWrapper(val, typeString);

const typeCheckWrapper = (val: any, typeString: string) =>
  typeCheckWrapper2(val, typeString);

const typeCheckWrapper2 = (val: any, typeString: string) =>
  typeCheckWrapper3(val, typeString);

const typeCheckWrapper3 = (val: any, typeString: string) =>
  typeCheckWrapper4(val, typeString);

const typeCheckWrapper4 = (val: any, typeString: string) =>
  typeCheckWrapper5(val, typeString);

const typeCheckWrapper5 = (val: any, typeString: string) =>
  typeCheckWrapper6(val, typeString);

const typeCheckWrapper6 = (val: any, typeString: string) =>
  typeCheckWrapper7(val, typeString);

const typeCheckWrapper7 = (val: any, typeString: string) =>
  typeCheckWrapper8(val, typeString);

const typeCheckWrapper8 = (val: any, typeString: string) =>
  typeCheckWrapper9(val, typeString);

const typeCheckWrapper9 = (val: any, typeString: string) =>
  typeCheckImpl(val, typeString);

const typeCheckImpl = (val: any, typeString: string) =>
  typeof val === typeString;

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
