"use strict"

const fs = require("fs")
const { parse: parseToml } = require("@iarna/toml")

const assertString = value => {
	if (typeof value !== "string") {
		throw new TypeError(`Expected a string, got ${typeof value}`)
	}
}

module.exports = async filename => {
	assertString(filename)

	return parseToml(await fs.promises.readFile(filename, "utf8"))
}

module.exports.sync = filename => {
	assertString(filename)

	return parseToml(fs.readFileSync(filename, "utf8"))
}
