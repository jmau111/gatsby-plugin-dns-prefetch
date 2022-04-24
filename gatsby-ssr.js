const { createElement } = require(`react`)

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (pluginOptions.domains !== false) {
		const metas = pluginOptions.domains.map(domain => createElement(`link`, { rel: `dns-prefetch`, href: domain }))
		setHeadComponents([metas])
  }
}
