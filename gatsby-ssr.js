const { createElement } = require(`react`);

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  
  if (pluginOptions.domains === undefined || pluginOptions.domains.length === 0) {
    const error = 'You are misusing the plugin Gatsby DNS Prefetch, please provide domains in the plugin options.';
    console.error(error);
    throw new Error(error);
  }
	
  const metas = pluginOptions.domains.map(domain => createElement(`link`, { rel: `dns-prefetch`, href: domain }));
  setHeadComponents([metas]);
}
