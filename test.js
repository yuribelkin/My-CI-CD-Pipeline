const message=require("./app");
test("check my message", () => {
 expect(message()).toBe("Hello, world");
})