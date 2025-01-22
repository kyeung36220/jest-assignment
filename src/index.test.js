import { hello } from "./index.js"

test("Says hello", () => {
    expect(hello()).toBe("hello")
})
