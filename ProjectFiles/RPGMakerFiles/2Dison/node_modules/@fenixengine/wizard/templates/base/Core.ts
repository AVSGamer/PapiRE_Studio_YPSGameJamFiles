export const Plugin = {};

const script: HTMLScriptElement = document.currentScript as HTMLScriptElement
const pluginName: string = script.src.match(/.+\/(.+).js/)[1]

const rawParameters = PluginManager.parameters('pluginName');
