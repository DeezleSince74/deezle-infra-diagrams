// src/infra/mapping.ts
import { findRef } from "../icons/iconIndex.mjs";
import { isMarketplaceSaaS, vendorKeyOf } from "./marketplace.mjs";
var TF_SEED = {
  // AWS
  aws_instance: "aws:amazon-ec2",
  aws_s3_bucket: "aws:amazon-simple-storage-service",
  aws_lambda_function: "aws:aws-lambda",
  aws_db_instance: "aws:amazon-rds",
  aws_rds_cluster: "aws:amazon-rds",
  aws_dynamodb_table: "aws:amazon-dynamodb",
  aws_eks_cluster: "aws:amazon-elastic-kubernetes-service",
  aws_ecs_cluster: "aws:amazon-elastic-container-service",
  aws_ecr_repository: "aws:amazon-elastic-container-registry",
  aws_vpc: "aws:amazon-virtual-private-cloud",
  aws_subnet: "aws:amazon-virtual-private-cloud",
  aws_lb: "aws:aws-elastic-load-balancing",
  aws_alb: "aws:aws-elastic-load-balancing",
  aws_cloudfront_distribution: "aws:amazon-cloudfront",
  aws_route53_zone: "aws:amazon-route-53",
  aws_sns_topic: "aws:amazon-simple-notification-service",
  aws_sqs_queue: "aws:amazon-simple-queue-service",
  aws_api_gateway_rest_api: "aws:amazon-api-gateway",
  aws_apigatewayv2_api: "aws:amazon-api-gateway",
  aws_cloudwatch_metric_alarm: "aws:amazon-cloudwatch",
  aws_iam_role: "aws:aws-identity-and-access-management",
  // Azure
  azurerm_linux_virtual_machine: "azure:virtual-machine",
  azurerm_windows_virtual_machine: "azure:virtual-machine",
  azurerm_virtual_machine: "azure:virtual-machine",
  azurerm_kubernetes_cluster: "azure:kubernetes-services",
  azurerm_storage_account: "azure:storage-accounts",
  azurerm_function_app: "azure:function-apps",
  azurerm_linux_function_app: "azure:function-apps",
  azurerm_app_service: "azure:app-services",
  azurerm_cosmosdb_account: "azure:azure-cosmos-db",
  azurerm_mssql_server: "azure:azure-sql",
  azurerm_sql_server: "azure:azure-sql",
  azurerm_key_vault: "azure:key-vaults",
  azurerm_lb: "azure:load-balancers",
  // GCP
  google_compute_instance: "gcp:compute-engine",
  google_cloud_run_service: "gcp:cloud-run",
  google_cloud_run_v2_service: "gcp:cloud-run",
  google_storage_bucket: "gcp:cloud-storage",
  google_sql_database_instance: "gcp:cloud-sql",
  google_container_cluster: "gcp:gke",
  google_bigquery_dataset: "gcp:big-query"
};
var PULUMI_SEED = {
  "aws:ec2/instance:Instance": "aws:amazon-ec2",
  "aws:s3/bucket:Bucket": "aws:amazon-simple-storage-service",
  "aws:s3/bucketV2:BucketV2": "aws:amazon-simple-storage-service",
  "aws:lambda/function:Function": "aws:aws-lambda",
  "aws:rds/instance:Instance": "aws:amazon-rds",
  "aws:dynamodb/table:Table": "aws:amazon-dynamodb",
  "azure-native:compute:VirtualMachine": "azure:virtual-machine",
  "azure-native:storage:StorageAccount": "azure:storage-accounts",
  "azure-native:containerservice:ManagedCluster": "azure:kubernetes-services",
  "gcp:cloudrun/service:Service": "gcp:cloud-run",
  "gcp:storage/bucket:Bucket": "gcp:cloud-storage",
  "gcp:compute/instance:Instance": "gcp:compute-engine"
};
var ARM_SEED = {
  "Microsoft.Compute/virtualMachines": "azure:virtual-machine",
  "Microsoft.Storage/storageAccounts": "azure:storage-accounts",
  "Microsoft.ContainerService/managedClusters": "azure:kubernetes-services",
  "Microsoft.Web/sites": "azure:app-services",
  "Microsoft.DocumentDB/databaseAccounts": "azure:azure-cosmos-db",
  "Microsoft.Sql/servers": "azure:azure-sql",
  "Microsoft.KeyVault/vaults": "azure:key-vaults",
  "Microsoft.Network/loadBalancers": "azure:load-balancers"
};
var CFN_SEED = {
  "AWS::EC2::Instance": "aws:amazon-ec2",
  "AWS::S3::Bucket": "aws:amazon-simple-storage-service",
  "AWS::Lambda::Function": "aws:aws-lambda",
  "AWS::RDS::DBInstance": "aws:amazon-rds",
  "AWS::RDS::DBCluster": "aws:amazon-rds",
  "AWS::DynamoDB::Table": "aws:amazon-dynamodb",
  "AWS::EKS::Cluster": "aws:amazon-elastic-kubernetes-service",
  "AWS::ECS::Cluster": "aws:amazon-elastic-container-service",
  "AWS::ECS::Service": "aws:amazon-elastic-container-service",
  "AWS::ECR::Repository": "aws:amazon-elastic-container-registry",
  "AWS::EC2::VPC": "aws:amazon-virtual-private-cloud",
  "AWS::EC2::Subnet": "aws:amazon-virtual-private-cloud",
  "AWS::ElasticLoadBalancingV2::LoadBalancer": "aws:aws-elastic-load-balancing",
  "AWS::ElasticLoadBalancing::LoadBalancer": "aws:aws-elastic-load-balancing",
  "AWS::CloudFront::Distribution": "aws:amazon-cloudfront",
  "AWS::Route53::HostedZone": "aws:amazon-route-53",
  "AWS::SNS::Topic": "aws:amazon-simple-notification-service",
  "AWS::SQS::Queue": "aws:amazon-simple-queue-service",
  "AWS::ApiGateway::RestApi": "aws:amazon-api-gateway",
  "AWS::ApiGatewayV2::Api": "aws:amazon-api-gateway",
  "AWS::CloudWatch::Alarm": "aws:amazon-cloudwatch",
  "AWS::IAM::Role": "aws:aws-identity-and-access-management"
};
var SEEDS = {
  terraform: TF_SEED,
  pulumi: PULUMI_SEED,
  arm: ARM_SEED,
  cfn: CFN_SEED
};
function allSeedRefs() {
  return Object.values(SEEDS).flatMap((m) => Object.values(m));
}
function deriveName(platform, type) {
  let raw = type;
  if (platform === "pulumi") {
    raw = type.slice(type.lastIndexOf(":") + 1);
  } else if (platform === "arm") {
    raw = type.slice(type.lastIndexOf("/") + 1);
  } else if (platform === "cfn") {
    raw = type.replace(/^AWS::/, "").replace(/::/g, "-");
  } else {
    raw = type.replace(/^(aws_|azurerm_|azuread_|azapi_|google_)/, "");
  }
  return raw.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/[^A-Za-z0-9]+/g, "-").toLowerCase();
}
function mapResourceType(platform, provider, type) {
  if (isMarketplaceSaaS(type)) return `${provider}:marketplace`;
  const vendorKey = vendorKeyOf(type);
  if (vendorKey) return `generic:thirdparty:${vendorKey}`;
  const seed = SEEDS[platform]?.[type];
  if (seed) return seed;
  return findRef(provider, deriveName(platform, type));
}
export {
  allSeedRefs,
  mapResourceType
};
