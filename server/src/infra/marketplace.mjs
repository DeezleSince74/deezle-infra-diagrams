// src/infra/marketplace.ts
function isMarketplaceSaaS(type) {
  if (!type) return false;
  return /(^|[:._/-])saas([:._/-]|$)/.test(type.toLowerCase());
}
var THIRD_PARTY = {
  datadog: "Datadog",
  cloudflare: "Cloudflare",
  pagerduty: "PagerDuty",
  auth0: "Auth0",
  okta: "Okta",
  snowflake: "Snowflake",
  mongodbatlas: "MongoDB Atlas",
  confluent: "Confluent",
  confluentcloud: "Confluent",
  newrelic: "New Relic",
  fastly: "Fastly",
  github: "GitHub",
  gitlab: "GitLab",
  bitbucket: "Bitbucket",
  twilio: "Twilio",
  sendgrid: "SendGrid",
  stripe: "Stripe",
  cloudamqp: "CloudAMQP",
  vercel: "Vercel",
  netlify: "Netlify",
  grafana: "Grafana",
  launchdarkly: "LaunchDarkly",
  sentry: "Sentry",
  algolia: "Algolia",
  databricks: "Databricks",
  elastic: "Elastic",
  elasticstack: "Elastic",
  ec: "Elastic Cloud",
  mailgun: "Mailgun",
  honeycombio: "Honeycomb",
  spacelift: "Spacelift",
  tfe: "Terraform Cloud",
  vault: "HashiCorp Vault"
};
function providerPrefix(type) {
  const t = type.toLowerCase();
  if (t.includes(":")) return t.slice(0, t.indexOf(":"));
  if (t.includes("_")) return t.slice(0, t.indexOf("_"));
  return t;
}
function vendorOf(type) {
  if (!type || isMarketplaceSaaS(type)) return void 0;
  return THIRD_PARTY[providerPrefix(type)];
}
function vendorKeyOf(type) {
  if (!type || isMarketplaceSaaS(type)) return void 0;
  const prefix = providerPrefix(type);
  return THIRD_PARTY[prefix] ? prefix : void 0;
}
function isThirdParty(type) {
  return !!vendorOf(type);
}
var str = (v) => typeof v === "string" && v.trim() ? v.trim() : void 0;
function marketplaceLabel(props, fallback) {
  const p = props ?? {};
  const offer = str(p.offerName) ?? str(p.planName) ?? str(p.offerId) ?? str(p.productName) ?? str(p.product);
  const publisher = str(p.publisherId) ?? str(p.publisher);
  const base = offer ?? fallback;
  if (publisher && !base.toLowerCase().includes(publisher.toLowerCase())) return `${base} (${publisher})`;
  return base;
}
function displayLabel(type, name, props) {
  if (isMarketplaceSaaS(type)) return marketplaceLabel(props, name);
  const vendor = vendorOf(type);
  if (vendor && !name.toLowerCase().includes(vendor.toLowerCase())) return `${name} (${vendor})`;
  return name;
}
export {
  displayLabel,
  isMarketplaceSaaS,
  isThirdParty,
  marketplaceLabel,
  vendorKeyOf,
  vendorOf
};
