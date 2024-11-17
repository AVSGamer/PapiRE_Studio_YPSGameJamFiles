export const _Plugin = {}

const pluginName = document.currentScript.src.match(/.+\/(.+).js/)[1]

export const rawParameters = PluginManager.parameters(pluginName)
