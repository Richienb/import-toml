declare const importToml: {
	/**
	Import a TOML file.
	@param filename The file to import.
	@example
	```
	const importToml = require("import-toml");

	(async () => {
		const data = await importToml("file.toml");

		console.log(data.value);
	})();
	```
	*/
	(filename: string): Promise<object>

	/**
	Synchronously import a TOML file.
	@param filename The file to import.
	@example
	```
	const importToml = require("import-toml");

	const data = importToml.sync("file.toml");

	console.log(data.value);
	```
	*/
	sync(filename: string): object
}

export = importToml
