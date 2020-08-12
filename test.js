const test = require("ava")
const importToml = require(".")

test("main", async t => {
	const expectedResult = {
		example: 12345
	}

	t.deepEqual(await importToml("fixture.toml"), expectedResult)
	t.deepEqual(importToml.sync("fixture.toml"), expectedResult)
})
