module.exports = {
	git: {
		tagName: "v${version}"
	},
	yarn: true,
	plugins: {
		"@release-it/conventional-changelog": {
			preset: "angular"
		}
	},
	// Другие настройки, если требуется
};
