import {
  toTimestamp,
  fromTimestamp,
  fromJsonTimestamp,
} from "./internalTimestampBigint";

describe("Timestamp Utilities", () => {
  describe("toTimestamp", () => {
    it("should convert a date to a Timestamp", () => {
      const date = new Date("2000-01-01T00:00:00Z");
      const result = toTimestamp(date);
      expect(result.seconds).toBe(BigInt(946684800)); // 2000-01-01T00:00:00Z in Unix time
      expect(result.nanos).toBe(0);
    });

    it("should handle nanosecond conversion correctly", () => {
      const date = new Date(946684800001); // 1 millisecond after 2000-01-01T00:00:00Z
      const result = toTimestamp(date);
      expect(result.seconds).toBe(BigInt(946684800));
      expect(result.nanos).toBe(1000000); // 1 millisecond is 1,000,000 nanoseconds
    });
  });

  describe("fromTimestamp", () => {
    it("should convert a Timestamp to a date", () => {
      const timestamp = { seconds: BigInt(946684800), nanos: 0 };
      const result = fromTimestamp(timestamp);
      expect(result.getTime()).toBe(946684800000); // 2000-01-01T00:00:00Z in Unix time
    });

    it("should handle nanosecond conversion correctly", () => {
      const timestamp = { seconds: BigInt(946684800), nanos: 1000000 };
      const result = fromTimestamp(timestamp);
      expect(result.getTime()).toBe(946684800001); // 1 millisecond after 2000-01-01T00:00:00Z
    });

    it("should handle negative seconds with positive nanoseconds", () => {
      const timestamp = { seconds: BigInt(-1), nanos: 1000000 };
      const result = fromTimestamp(timestamp);
      expect(result.getTime()).toBe(-999); // 1 millisecond before 1970-01-01T00:00:00Z
    });
  });

  describe("fromJsonTimestamp", () => {
    it("should convert a Date object to a Timestamp", () => {
      const date = new Date("2000-01-01T00:00:00Z");
      const result = fromJsonTimestamp(date);
      const expected = toTimestamp(date);
      expect(result.seconds).toBe(expected.seconds);
      expect(result.nanos).toBe(expected.nanos);
    });

    it("should convert a string date to a Timestamp", () => {
      const dateString = "2000-01-01T00:00:00Z";
      const result = fromJsonTimestamp(dateString);
      const expected = toTimestamp(new Date(dateString));
      expect(result.seconds).toBe(expected.seconds);
      expect(result.nanos).toBe(expected.nanos);
    });

    it("should convert a JSON object with string values to a Timestamp", () => {
      const json = {
        seconds: "946684800",
        nanos: "1000000",
      };
      const result = fromJsonTimestamp(json);
      expect(result.seconds).toBe(BigInt(json.seconds));
      expect(result.nanos).toBe(Number(json.nanos));
    });

    it("should handle JSON object with missing values", () => {
      const json = {};
      const result = fromJsonTimestamp(json);
      expect(result.seconds).toBe(BigInt(0));
      expect(result.nanos).toBe(0);
    });
  });
});
