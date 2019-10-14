import { get } from "request-promise-native";
import { StatusCodeError } from "request-promise-native/errors";
import { expect } from "chai";

describe("calculator server", function() {
  this.timeout(5000);
  this.slow(5000);

  describe("add service", function() {
    it("harusnya bisa melakukan operasi pertambahan", async function() {
      const result = await get("http://localhost:3000/add?n1=4&n2=3", {
        json: true
      });
      expect(result).to.be.deep.eq({
        result: 7
      });
    });

    it("harusnya error ketika input bukan angka", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/add?n1=4&n2=hahaha", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });

    it("harusnya error ketika input tidak ada", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/add", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });
  });
  describe("minus service", function() {
    it("harusnya bisa melakukan operasi pengurangan", async function() {
      const result = await get("http://localhost:3000/minus?n1=4&n2=2", {
        json: true
      });
      expect(result).to.be.deep.eq({
        result: 2
      });
    });

    it("harusnya error ketika input bukan angka", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/minus?n1=4&n2=hahaha", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });

    it("harusnya error ketika input tidak ada", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/minus", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });
  });
  describe("multiply service", function() {
    it("harusnya bisa melakukan operasi pekalian", async function() {
      const result = await get("http://localhost:3000/multiply?n1=4&n2=3", {
        json: true
      });
      expect(result).to.be.deep.eq({
        result: 12
      });
    });

    it("harusnya error ketika input bukan angka", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/multiply?n1=4&n2=hahaha", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });

    it("harusnya error ketika input tidak ada", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/multiply", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });
  });
  describe("division service", function() {
    it("harusnya bisa melakukan operasi pembagian", async function() {
      const result = await get("http://localhost:3000/division?n1=4&n2=2", {
        json: true
      });
      expect(result).to.be.deep.eq({
        result: 2
      });
    });

    it("harusnya error ketika input bukan angka", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/division?n1=4&n2=hahaha", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });

    it("harusnya error ketika input tidak ada", async function() {
      let error = null;
      try {
        await get("http://localhost:3000/division", { json: true });
      } catch (err) {
        error = err;
      }
      expect(error).to.be.exist;
      expect(error).to.be.instanceOf(StatusCodeError);
      expect(error.statusCode).to.be.eq(400);
    });
  });

  it("harusnya error ketika akses endpoint yang tidak ada", async function() {
    let error = null;
    try {
      await get("http://localhost:3000/ajduaquajfkjabfka", { json: true });
    } catch (err) {
      error = err;
    }
    expect(error).to.be.exist;
    expect(error).to.be.instanceOf(StatusCodeError);
    expect(error.statusCode).to.be.eq(404);
  });
});
