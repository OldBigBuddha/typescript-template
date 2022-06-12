import add from "libs/add";

function testAdd() {
  test("1 + 1 = 2", () => {
    expect(add(1, 1)).toBe(2);
  });
}

{
  describe("加算", testAdd);
}
