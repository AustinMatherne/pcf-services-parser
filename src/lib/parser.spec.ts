import * as cfenv from "cfenv";
import { mocked } from "ts-jest/utils";
import { getPcfServiceCredentials } from "./parser";
const mockCfenv = mocked(cfenv, true);
jest.mock("cfenv");

describe("getPcfServiceCredentials", () => {
  let stubServices: Record<string, any>;

  beforeEach(() => {
    mockCfenv.getAppEnv.mockReturnValue({
      getServiceCreds: jest.fn(
        (service: keyof typeof stubServices) =>
          stubServices[service].credentials
      ),
      getServices: jest.fn(() => stubServices)
    });
  });

  it("should format credential keys", () => {
    stubServices = {
      "awesome- % service": {
        credentials: {
          "awesome   key with Improper FORMATTING%1": "awesome value"
        }
      }
    };

    const expectedResults = {
      AWESOME_SERVICE_AWESOME_KEY_WITH_IMPROPER_FORMATTING_1: "awesome value"
    };

    const result = getPcfServiceCredentials();
    expect(result).toEqual(expectedResults);
  });

  it("should handle multiple services", () => {
    stubServices = {
      "service-1": {
        credentials: {
          key: "value"
        }
      },
      "service-2": {
        credentials: {
          key: "value"
        }
      }
    };

    const expectedResults = {
      SERVICE_1_KEY: "value",
      SERVICE_2_KEY: "value"
    };

    const result = getPcfServiceCredentials();
    expect(result).toEqual(expectedResults);
  });

  it("should handle nested credentials", () => {
    stubServices = {
      "nested-service": {
        credentials: {
          "child-key": "child-value",
          "nested-key": {
            "grandchild-key": "grandchild-value"
          }
        }
      }
    };

    const expectedResults = {
      NESTED_SERVICE_CHILD_KEY: "child-value",
      NESTED_SERVICE_NESTED_KEY_GRANDCHILD_KEY: "grandchild-value"
    };
    const result = getPcfServiceCredentials();
    expect(result).toEqual(expectedResults);
  });

  it("should handle assortment of value types", () => {
    const stubSymbol = Symbol();
    stubServices = {
      service: {
        credentials: {
          array: ["array-value"],
          boolean: true,
          null: null,
          number: 1,
          string: "string",
          symbol: stubSymbol,
          undefined
        }
      }
    };

    const expectedResults = {
      SERVICE_ARRAY: ["array-value"],
      SERVICE_BOOLEAN: true,
      SERVICE_NULL: null,
      SERVICE_NUMBER: 1,
      SERVICE_STRING: "string",
      SERVICE_SYMBOL: stubSymbol,
      SERVICE_UNDEFINED: undefined
    };
    const result = getPcfServiceCredentials();
    expect(result).toEqual(expectedResults);
  });

  it("should handle nested assortment of value types", () => {
    const stubSymbol = Symbol();
    stubServices = {
      service: {
        credentials: {
          nested: {
            array: ["array-value"],
            boolean: true,
            null: null,
            number: 1,
            string: "string",
            symbol: stubSymbol,
            undefined
          }
        }
      }
    };

    const expectedResults = {
      SERVICE_NESTED_ARRAY: ["array-value"],
      SERVICE_NESTED_BOOLEAN: true,
      SERVICE_NESTED_NULL: null,
      SERVICE_NESTED_NUMBER: 1,
      SERVICE_NESTED_STRING: "string",
      SERVICE_NESTED_SYMBOL: stubSymbol,
      SERVICE_NESTED_UNDEFINED: undefined
    };
    const result = getPcfServiceCredentials();
    expect(result).toEqual(expectedResults);
  });
});
