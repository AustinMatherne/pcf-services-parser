declare module "cfenv" {
  function getAppEnv(options?: AppEnvOptions): AppEnv;

  interface AppEnvOptions {
    name?: string;
    protocol?: string;
    vcap?: any;
    vcapFile?: string;
  }

  interface AppEnv {
    app: Record<string, any>;
    services: Record<string, any>;
    name: string;
    port: number;
    bind: string;
    urls: string[];
    url: string;
    isLocal: boolean;
    getServices<T extends Record<string, any>>(): T;
    getService<T extends Record<string, any>>(spec: string | RegExp): T;
    getServiceURL(
      spec: string | RegExp,
      replacements: Record<any, any>
    ): string;
    getServiceCreds<T extends Record<string, string>>(spec: string | RegExp): T;
  }
}
