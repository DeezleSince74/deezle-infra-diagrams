// src/icons/refMatch.ts
function canonKey(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}
function normName(s) {
  return s.toLowerCase().trim().replace(/[_\s]+/g, "-").replace(/-+/g, "-");
}
var VENDOR_PREFIXES = {
  aws: ["amazon-", "aws-"],
  azure: ["azure-", "microsoft-"],
  gcp: ["google-cloud-", "google-", "gcp-", "cloud-"],
  generic: []
};
function candidateCanonKeys(provider, rawName) {
  const name = normName(rawName);
  const keys = [canonKey(name)];
  for (const pre of VENDOR_PREFIXES[provider]) {
    keys.push(canonKey(pre + name));
    if (name.startsWith(pre)) keys.push(canonKey(name.slice(pre.length)));
  }
  return keys;
}
export {
  VENDOR_PREFIXES,
  candidateCanonKeys,
  canonKey,
  normName
};
