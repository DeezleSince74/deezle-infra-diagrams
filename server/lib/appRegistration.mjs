// scripts/lib/appRegistration.ts
var RESOURCE_MIME_TYPE = "text/html;profile=mcp-app";
var RESOURCE_URI_META_KEY = "ui/resourceUri";
function registerAppTool(server, name, config, callback) {
  const meta = config._meta;
  const uiUri = meta.ui?.resourceUri;
  const flatUri = meta[RESOURCE_URI_META_KEY];
  let next = meta;
  if (uiUri && !flatUri) next = { ...meta, [RESOURCE_URI_META_KEY]: uiUri };
  else if (flatUri && !uiUri) next = { ...meta, ui: { ...meta.ui, resourceUri: flatUri } };
  return server.registerTool(name, { ...config, _meta: next }, callback);
}
function registerAppResource(server, name, uri, config, callback) {
  return server.registerResource(name, uri, { mimeType: RESOURCE_MIME_TYPE, ...config }, callback);
}
export {
  RESOURCE_MIME_TYPE,
  registerAppResource,
  registerAppTool
};
