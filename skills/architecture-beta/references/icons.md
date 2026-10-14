# Icon ref constraint (paste into your Mermaid generator system prompt)

When emitting Mermaid `architecture-beta`, every `service`/`group` icon ref
MUST be one of the `provider:name` refs below. Do not invent names. If unsure,
pick the closest listed ref. Aliases shown in parentheses are also accepted.

Providers: `aws`, `azure`, `gcp`, `generic`.

Syntax reminder:
```
architecture-beta
  group net(generic:cloud)[VPC]
  service web(aws:amazon-ec2)[Web] in net
  service db(aws:amazon-rds)[DB] in net
  web:R --> L:db
```

The full machine-readable list is `icons/index.json`. Refs:

## generic

generic:cloud
generic:database
generic:disk
generic:internet
generic:server
generic:junction
generic:marketplace (saas)  — cloud Marketplace SaaS, hosted off-cloud; also azure:/aws:/gcp:marketplace
generic:thirdparty (external, vendor)  — third-party vendor service (Datadog, Cloudflare, …), not the cloud marketplace

## aws

aws:alert
aws:amazon-api-gateway (aws:api-gateway, aws:apigw)
aws:amazon-api-gateway-endpoint (aws:api-gateway-endpoint)
aws:amazon-appflow (aws:appflow)
aws:amazon-application-recovery-controller (aws:application-recovery-controller)
aws:amazon-athena (aws:athena)
aws:amazon-athena-data-source-connectors (aws:athena-data-source-connectors)
aws:amazon-augmented-ai-a2i (aws:augmented-ai-a2i)
aws:amazon-aurora (aws:aurora)
aws:amazon-aurora-amazon-aurora-instance-alternate (aws:aurora-amazon-aurora-instance-alternate)
aws:amazon-aurora-amazon-rds-instance (aws:aurora-amazon-rds-instance)
aws:amazon-aurora-amazon-rds-instance-aternate (aws:aurora-amazon-rds-instance-aternate)
aws:amazon-aurora-instance (aws:aurora-instance)
aws:amazon-aurora-mariadb-instance (aws:aurora-mariadb-instance)
aws:amazon-aurora-mariadb-instance-alternate (aws:aurora-mariadb-instance-alternate)
aws:amazon-aurora-mysql-instance (aws:aurora-mysql-instance)
aws:amazon-aurora-mysql-instance-alternate (aws:aurora-mysql-instance-alternate)
aws:amazon-aurora-oracle-instance (aws:aurora-oracle-instance)
aws:amazon-aurora-oracle-instance-alternate (aws:aurora-oracle-instance-alternate)
aws:amazon-aurora-piops-instance (aws:aurora-piops-instance)
aws:amazon-aurora-postgresql-instance (aws:aurora-postgresql-instance)
aws:amazon-aurora-postgresql-instance-alternate (aws:aurora-postgresql-instance-alternate)
aws:amazon-aurora-sql-server-instance (aws:aurora-sql-server-instance)
aws:amazon-aurora-sql-server-instance-alternate (aws:aurora-sql-server-instance-alternate)
aws:amazon-aurora-trusted-language-extensions-for-postgresql (aws:aurora-trusted-language-extensions-for-postgresql)
aws:amazon-bedrock (aws:bedrock)
aws:amazon-bedrock-agentcore (aws:bedrock-agentcore)
aws:amazon-braket (aws:braket)
aws:amazon-braket-chandelier (aws:braket-chandelier)
aws:amazon-braket-chip (aws:braket-chip)
aws:amazon-braket-embedded-simulator (aws:braket-embedded-simulator)
aws:amazon-braket-managed-simulator (aws:braket-managed-simulator)
aws:amazon-braket-noise-simulator (aws:braket-noise-simulator)
aws:amazon-braket-qpu (aws:braket-qpu)
aws:amazon-braket-simulator (aws:braket-simulator)
aws:amazon-braket-simulator-1 (aws:braket-simulator-1)
aws:amazon-braket-simulator-2 (aws:braket-simulator-2)
aws:amazon-braket-simulator-3 (aws:braket-simulator-3)
aws:amazon-braket-simulator-4 (aws:braket-simulator-4)
aws:amazon-braket-state-vector (aws:braket-state-vector)
aws:amazon-braket-tensor-network (aws:braket-tensor-network)
aws:amazon-chime (aws:chime)
aws:amazon-chime-sdk (aws:chime-sdk)
aws:amazon-cloud-directory (aws:cloud-directory)
aws:amazon-cloudfront (aws:cloudfront)
aws:amazon-cloudfront-download-distribution (aws:cloudfront-download-distribution)
aws:amazon-cloudfront-edge-location (aws:cloudfront-edge-location)
aws:amazon-cloudfront-functions (aws:cloudfront-functions)
aws:amazon-cloudfront-streaming-distribution (aws:cloudfront-streaming-distribution)
aws:amazon-cloudsearch (aws:cloudsearch)
aws:amazon-cloudsearch-search-documents (aws:cloudsearch-search-documents)
aws:amazon-cloudwatch (aws:cloudwatch)
aws:amazon-cloudwatch-alarm (aws:cloudwatch-alarm)
aws:amazon-cloudwatch-cross-account-observability (aws:cloudwatch-cross-account-observability)
aws:amazon-cloudwatch-data-protection (aws:cloudwatch-data-protection)
aws:amazon-cloudwatch-event-event-based (aws:cloudwatch-event-event-based)
aws:amazon-cloudwatch-event-time-based (aws:cloudwatch-event-time-based)
aws:amazon-cloudwatch-evidently (aws:cloudwatch-evidently)
aws:amazon-cloudwatch-logs (aws:cloudwatch-logs)
aws:amazon-cloudwatch-metrics-insights (aws:cloudwatch-metrics-insights)
aws:amazon-cloudwatch-rule (aws:cloudwatch-rule)
aws:amazon-cloudwatch-rum (aws:cloudwatch-rum)
aws:amazon-cloudwatch-synthetics (aws:cloudwatch-synthetics)
aws:amazon-codecatalyst (aws:codecatalyst)
aws:amazon-codeguru (aws:codeguru)
aws:amazon-codewhisperer (aws:codewhisperer)
aws:amazon-cognito (aws:cognito)
aws:amazon-comprehend (aws:comprehend)
aws:amazon-comprehend-medical (aws:comprehend-medical)
aws:amazon-connect (aws:connect)
aws:amazon-corretto (aws:corretto)
aws:amazon-data-firehose (aws:data-firehose)
aws:amazon-datazone (aws:datazone)
aws:amazon-datazone-business-data-catalog (aws:datazone-business-data-catalog)
aws:amazon-datazone-data-portal (aws:datazone-data-portal)
aws:amazon-datazone-data-projects (aws:datazone-data-projects)
aws:amazon-dcv (aws:dcv)
aws:amazon-detective (aws:detective)
aws:amazon-devops-guru (aws:devops-guru)
aws:amazon-devops-guru-insights (aws:devops-guru-insights)
aws:amazon-documentdb (aws:documentdb)
aws:amazon-documentdb-elastic-clusters (aws:documentdb-elastic-clusters)
aws:amazon-dynamodb (aws:dynamodb, aws:ddb, aws:dynamo)
aws:amazon-dynamodb-amazon-dynamodb-accelerator (aws:dynamodb-amazon-dynamodb-accelerator)
aws:amazon-dynamodb-attribute (aws:dynamodb-attribute)
aws:amazon-dynamodb-attributes (aws:dynamodb-attributes)
aws:amazon-dynamodb-global-secondary-index (aws:dynamodb-global-secondary-index)
aws:amazon-dynamodb-item (aws:dynamodb-item)
aws:amazon-dynamodb-items (aws:dynamodb-items)
aws:amazon-dynamodb-standard-access-table-class (aws:dynamodb-standard-access-table-class)
aws:amazon-dynamodb-standard-infrequent-access-table-class (aws:dynamodb-standard-infrequent-access-table-class)
aws:amazon-dynamodb-stream (aws:dynamodb-stream)
aws:amazon-dynamodb-table (aws:dynamodb-table)
aws:amazon-ec2 (aws:ec2)
aws:amazon-ec2-ami (aws:ec2-ami)
aws:amazon-ec2-auto-scaling (aws:ec2-auto-scaling)
aws:amazon-ec2-aws-microservice-extractor-for-net (aws:ec2-aws-microservice-extractor-for-net)
aws:amazon-ec2-db-instance (aws:ec2-db-instance)
aws:amazon-ec2-elastic-ip-address (aws:ec2-elastic-ip-address)
aws:amazon-ec2-image-builder (aws:ec2-image-builder)
aws:amazon-ec2-instance (aws:ec2-instance)
aws:amazon-ec2-instance-with-cloudwatch (aws:ec2-instance-with-cloudwatch)
aws:amazon-ec2-instances (aws:ec2-instances)
aws:amazon-ec2-rescue (aws:ec2-rescue)
aws:amazon-ec2-spot-instance (aws:ec2-spot-instance)
aws:amazon-ecs-anywhere (aws:ecs-anywhere)
aws:amazon-efs (aws:efs)
aws:amazon-eks-anywhere (aws:eks-anywhere)
aws:amazon-eks-distro (aws:eks-distro)
aws:amazon-elastic-block-store (aws:elastic-block-store)
aws:amazon-elastic-block-store-amazon-data-lifecycle-manager (aws:elastic-block-store-amazon-data-lifecycle-manager)
aws:amazon-elastic-block-store-multiple-volumes (aws:elastic-block-store-multiple-volumes)
aws:amazon-elastic-block-store-snapshot (aws:elastic-block-store-snapshot)
aws:amazon-elastic-block-store-volume (aws:elastic-block-store-volume)
aws:amazon-elastic-block-store-volume-gp3 (aws:elastic-block-store-volume-gp3)
aws:amazon-elastic-container-registry (aws:elastic-container-registry, aws:ecr)
aws:amazon-elastic-container-registry-image (aws:elastic-container-registry-image)
aws:amazon-elastic-container-registry-registry (aws:elastic-container-registry-registry)
aws:amazon-elastic-container-service (aws:elastic-container-service, aws:ecs)
aws:amazon-elastic-container-service-container-1 (aws:elastic-container-service-container-1)
aws:amazon-elastic-container-service-container-2 (aws:elastic-container-service-container-2)
aws:amazon-elastic-container-service-container-3 (aws:elastic-container-service-container-3)
aws:amazon-elastic-container-service-copiiot-cli (aws:elastic-container-service-copiiot-cli)
aws:amazon-elastic-container-service-ecs-service-connect (aws:elastic-container-service-ecs-service-connect)
aws:amazon-elastic-container-service-service (aws:elastic-container-service-service)
aws:amazon-elastic-container-service-task (aws:elastic-container-service-task)
aws:amazon-elastic-file-system-efs-intelligent-tiering (aws:elastic-file-system-efs-intelligent-tiering)
aws:amazon-elastic-file-system-efs-one-zone (aws:elastic-file-system-efs-one-zone)
aws:amazon-elastic-file-system-efs-one-zone-infrequent-access (aws:elastic-file-system-efs-one-zone-infrequent-access)
aws:amazon-elastic-file-system-efs-standard (aws:elastic-file-system-efs-standard)
aws:amazon-elastic-file-system-efs-standard-infrequent-access (aws:elastic-file-system-efs-standard-infrequent-access)
aws:amazon-elastic-file-system-elastic-throughput (aws:elastic-file-system-elastic-throughput)
aws:amazon-elastic-file-system-file-system (aws:elastic-file-system-file-system)
aws:amazon-elastic-inference (aws:elastic-inference)
aws:amazon-elastic-kubernetes-service (aws:elastic-kubernetes-service, aws:eks)
aws:amazon-elastic-kubernetes-service-eks-on-outposts (aws:elastic-kubernetes-service-eks-on-outposts)
aws:amazon-elastic-vmware-service (aws:elastic-vmware-service)
aws:amazon-elasticache (aws:elasticache)
aws:amazon-elasticache-cache-node (aws:elasticache-cache-node)
aws:amazon-elasticache-elasticache-for-memcached (aws:elasticache-elasticache-for-memcached)
aws:amazon-elasticache-elasticache-for-redis (aws:elasticache-elasticache-for-redis)
aws:amazon-elasticache-elasticache-for-valkey (aws:elasticache-elasticache-for-valkey)
aws:amazon-emr (aws:emr)
aws:amazon-emr-cluster (aws:emr-cluster)
aws:amazon-emr-emr-engine (aws:emr-emr-engine)
aws:amazon-emr-hdfs-cluster (aws:emr-hdfs-cluster)
aws:amazon-eventbridge (aws:eventbridge)
aws:amazon-eventbridge-custom-event-bus (aws:eventbridge-custom-event-bus)
aws:amazon-eventbridge-default-event-bus (aws:eventbridge-default-event-bus)
aws:amazon-eventbridge-event (aws:eventbridge-event)
aws:amazon-eventbridge-pipes (aws:eventbridge-pipes)
aws:amazon-eventbridge-rule (aws:eventbridge-rule)
aws:amazon-eventbridge-saas-partner-event (aws:eventbridge-saas-partner-event)
aws:amazon-eventbridge-scheduler (aws:eventbridge-scheduler)
aws:amazon-eventbridge-schema (aws:eventbridge-schema)
aws:amazon-eventbridge-schema-registry (aws:eventbridge-schema-registry)
aws:amazon-file-cache (aws:file-cache)
aws:amazon-file-cache-hybrid-nfs-linked-datasets (aws:file-cache-hybrid-nfs-linked-datasets)
aws:amazon-file-cache-on-premises-nfs-linked-datasets (aws:file-cache-on-premises-nfs-linked-datasets)
aws:amazon-file-cache-s3-linked-datasets (aws:file-cache-s3-linked-datasets)
aws:amazon-finspace (aws:finspace)
aws:amazon-forecast (aws:forecast)
aws:amazon-fraud-detector (aws:fraud-detector)
aws:amazon-fsx (aws:fsx)
aws:amazon-fsx-for-lustre (aws:fsx-for-lustre)
aws:amazon-fsx-for-netapp-ontap (aws:fsx-for-netapp-ontap)
aws:amazon-fsx-for-openzfs (aws:fsx-for-openzfs)
aws:amazon-fsx-for-wfs (aws:fsx-for-wfs)
aws:amazon-gamelift-servers (aws:gamelift-servers)
aws:amazon-gamelift-streams (aws:gamelift-streams)
aws:amazon-guardduty (aws:guardduty)
aws:amazon-inspector (aws:inspector)
aws:amazon-inspector-agent (aws:inspector-agent)
aws:amazon-interactive-video-service (aws:interactive-video-service)
aws:amazon-kendra (aws:kendra)
aws:amazon-keyspaces (aws:keyspaces)
aws:amazon-kinesis (aws:kinesis)
aws:amazon-kinesis-data-streams (aws:kinesis-data-streams)
aws:amazon-kinesis-video-streams (aws:kinesis-video-streams)
aws:amazon-lex (aws:lex)
aws:amazon-lightsail (aws:lightsail)
aws:amazon-lightsail-for-research (aws:lightsail-for-research)
aws:amazon-location-service (aws:location-service)
aws:amazon-location-service-geofence (aws:location-service-geofence)
aws:amazon-location-service-map (aws:location-service-map)
aws:amazon-location-service-place (aws:location-service-place)
aws:amazon-location-service-routes (aws:location-service-routes)
aws:amazon-location-service-track (aws:location-service-track)
aws:amazon-lookout-for-equipment (aws:lookout-for-equipment)
aws:amazon-lookout-for-vision (aws:lookout-for-vision)
aws:amazon-macie (aws:macie)
aws:amazon-managed-blockchain (aws:managed-blockchain)
aws:amazon-managed-blockchain-blockchain (aws:managed-blockchain-blockchain)
aws:amazon-managed-grafana (aws:managed-grafana)
aws:amazon-managed-service-for-apache-flink (aws:managed-service-for-apache-flink)
aws:amazon-managed-service-for-prometheus (aws:managed-service-for-prometheus)
aws:amazon-managed-streaming-for-apache-kafka (aws:managed-streaming-for-apache-kafka)
aws:amazon-managed-workflows-for-apache-airflow (aws:managed-workflows-for-apache-airflow)
aws:amazon-memorydb (aws:memorydb)
aws:amazon-monitron (aws:monitron)
aws:amazon-mq (aws:mq)
aws:amazon-mq-broker (aws:mq-broker)
aws:amazon-msk-amazon-msk-connect (aws:msk-amazon-msk-connect)
aws:amazon-neptune (aws:neptune)
aws:amazon-nova (aws:nova)
aws:amazon-opensearch-service (aws:opensearch-service)
aws:amazon-opensearch-service-cluster-administrator-node (aws:opensearch-service-cluster-administrator-node)
aws:amazon-opensearch-service-data-node (aws:opensearch-service-data-node)
aws:amazon-opensearch-service-index (aws:opensearch-service-index)
aws:amazon-opensearch-service-observability (aws:opensearch-service-observability)
aws:amazon-opensearch-service-opensearch-dashboards (aws:opensearch-service-opensearch-dashboards)
aws:amazon-opensearch-service-opensearch-ingestion (aws:opensearch-service-opensearch-ingestion)
aws:amazon-opensearch-service-traces (aws:opensearch-service-traces)
aws:amazon-opensearch-service-ultrawarm-node (aws:opensearch-service-ultrawarm-node)
aws:amazon-personalize (aws:personalize)
aws:amazon-pinpoint (aws:pinpoint)
aws:amazon-pinpoint-apis (aws:pinpoint-apis)
aws:amazon-pinpoint-journey (aws:pinpoint-journey)
aws:amazon-polly (aws:polly)
aws:amazon-q (aws:q)
aws:amazon-quick (aws:quick)
aws:amazon-rds (aws:rds)
aws:amazon-rds-blue-green-deployments (aws:rds-blue-green-deployments)
aws:amazon-rds-multi-az (aws:rds-multi-az)
aws:amazon-rds-multi-az-db-cluster (aws:rds-multi-az-db-cluster)
aws:amazon-rds-optimized-writes (aws:rds-optimized-writes)
aws:amazon-rds-proxy-instance (aws:rds-proxy-instance)
aws:amazon-rds-proxy-instance-alternate (aws:rds-proxy-instance-alternate)
aws:amazon-rds-trusted-language-extensions-for-postgresql (aws:rds-trusted-language-extensions-for-postgresql)
aws:amazon-redshift (aws:redshift)
aws:amazon-redshift-auto-copy (aws:redshift-auto-copy)
aws:amazon-redshift-data-sharing-governance (aws:redshift-data-sharing-governance)
aws:amazon-redshift-dense-compute-node (aws:redshift-dense-compute-node)
aws:amazon-redshift-dense-storage-node (aws:redshift-dense-storage-node)
aws:amazon-redshift-ml (aws:redshift-ml)
aws:amazon-redshift-query-editor-v2-0 (aws:redshift-query-editor-v2-0)
aws:amazon-redshift-ra3 (aws:redshift-ra3)
aws:amazon-redshift-streaming-ingestion (aws:redshift-streaming-ingestion)
aws:amazon-rekognition (aws:rekognition)
aws:amazon-rekognition-image (aws:rekognition-image)
aws:amazon-rekognition-video (aws:rekognition-video)
aws:amazon-route-53 (aws:route-53, aws:r53)
aws:amazon-route-53-hosted-zone (aws:route-53-hosted-zone)
aws:amazon-route-53-readiness-checks (aws:route-53-readiness-checks)
aws:amazon-route-53-resolver (aws:route-53-resolver)
aws:amazon-route-53-resolver-dns-firewall (aws:route-53-resolver-dns-firewall)
aws:amazon-route-53-resolver-query-logging (aws:route-53-resolver-query-logging)
aws:amazon-route-53-route-table (aws:route-53-route-table)
aws:amazon-route-53-routing-controls (aws:route-53-routing-controls)
aws:amazon-s3-on-outposts (aws:s3-on-outposts)
aws:amazon-sagemaker (aws:sagemaker)
aws:amazon-sagemaker-ai (aws:sagemaker-ai)
aws:amazon-sagemaker-ai-canvas (aws:sagemaker-ai-canvas)
aws:amazon-sagemaker-ai-geospatial-ml (aws:sagemaker-ai-geospatial-ml)
aws:amazon-sagemaker-ai-model (aws:sagemaker-ai-model)
aws:amazon-sagemaker-ai-notebook (aws:sagemaker-ai-notebook)
aws:amazon-sagemaker-ai-shadow-testing (aws:sagemaker-ai-shadow-testing)
aws:amazon-sagemaker-ai-train (aws:sagemaker-ai-train)
aws:amazon-sagemaker-ground-truth (aws:sagemaker-ground-truth)
aws:amazon-sagemaker-studio-lab (aws:sagemaker-studio-lab)
aws:amazon-security-lake (aws:security-lake)
aws:amazon-simple-email-service (aws:simple-email-service)
aws:amazon-simple-email-service-email (aws:simple-email-service-email)
aws:amazon-simple-notification-service (aws:simple-notification-service, aws:sns)
aws:amazon-simple-notification-service-email-notification (aws:simple-notification-service-email-notification)
aws:amazon-simple-notification-service-http-notification (aws:simple-notification-service-http-notification)
aws:amazon-simple-notification-service-topic (aws:simple-notification-service-topic)
aws:amazon-simple-queue-service (aws:simple-queue-service, aws:sqs)
aws:amazon-simple-queue-service-message (aws:simple-queue-service-message)
aws:amazon-simple-queue-service-queue (aws:simple-queue-service-queue)
aws:amazon-simple-storage-service (aws:simple-storage-service, aws:s3)
aws:amazon-simple-storage-service-bucket (aws:simple-storage-service-bucket)
aws:amazon-simple-storage-service-bucket-with-objects (aws:simple-storage-service-bucket-with-objects)
aws:amazon-simple-storage-service-directory-bucket (aws:simple-storage-service-directory-bucket)
aws:amazon-simple-storage-service-general-access-points (aws:simple-storage-service-general-access-points)
aws:amazon-simple-storage-service-glacier (aws:simple-storage-service-glacier)
aws:amazon-simple-storage-service-glacier-archive (aws:simple-storage-service-glacier-archive)
aws:amazon-simple-storage-service-glacier-vault (aws:simple-storage-service-glacier-vault)
aws:amazon-simple-storage-service-object (aws:simple-storage-service-object)
aws:amazon-simple-storage-service-s3-batch-operations (aws:simple-storage-service-s3-batch-operations)
aws:amazon-simple-storage-service-s3-express-one-zone (aws:simple-storage-service-s3-express-one-zone)
aws:amazon-simple-storage-service-s3-files (aws:simple-storage-service-s3-files)
aws:amazon-simple-storage-service-s3-glacier-deep-archive (aws:simple-storage-service-s3-glacier-deep-archive)
aws:amazon-simple-storage-service-s3-glacier-flexible-retrieval (aws:simple-storage-service-s3-glacier-flexible-retrieval)
aws:amazon-simple-storage-service-s3-glacier-instant-retrieval (aws:simple-storage-service-s3-glacier-instant-retrieval)
aws:amazon-simple-storage-service-s3-intelligent-tiering (aws:simple-storage-service-s3-intelligent-tiering)
aws:amazon-simple-storage-service-s3-multi-region-access-points (aws:simple-storage-service-s3-multi-region-access-points)
aws:amazon-simple-storage-service-s3-object-lambda (aws:simple-storage-service-s3-object-lambda)
aws:amazon-simple-storage-service-s3-object-lambda-access-points (aws:simple-storage-service-s3-object-lambda-access-points)
aws:amazon-simple-storage-service-s3-object-lock (aws:simple-storage-service-s3-object-lock)
aws:amazon-simple-storage-service-s3-on-outposts (aws:simple-storage-service-s3-on-outposts)
aws:amazon-simple-storage-service-s3-one-zone-ia (aws:simple-storage-service-s3-one-zone-ia)
aws:amazon-simple-storage-service-s3-replication (aws:simple-storage-service-s3-replication)
aws:amazon-simple-storage-service-s3-replication-time-control (aws:simple-storage-service-s3-replication-time-control)
aws:amazon-simple-storage-service-s3-select (aws:simple-storage-service-s3-select)
aws:amazon-simple-storage-service-s3-standard (aws:simple-storage-service-s3-standard)
aws:amazon-simple-storage-service-s3-standard-ia (aws:simple-storage-service-s3-standard-ia)
aws:amazon-simple-storage-service-s3-storage-lens (aws:simple-storage-service-s3-storage-lens)
aws:amazon-simple-storage-service-s3-tables (aws:simple-storage-service-s3-tables)
aws:amazon-simple-storage-service-s3-vectors (aws:simple-storage-service-s3-vectors)
aws:amazon-simple-storage-service-vpc-access-points (aws:simple-storage-service-vpc-access-points)
aws:amazon-textract (aws:textract)
aws:amazon-textract-analyze-lending (aws:textract-analyze-lending)
aws:amazon-timestream (aws:timestream)
aws:amazon-transcribe (aws:transcribe)
aws:amazon-translate (aws:translate)
aws:amazon-verified-permissions (aws:verified-permissions)
aws:amazon-virtual-private-cloud (aws:virtual-private-cloud, aws:vpc)
aws:amazon-vpc-carrier-gateway (aws:vpc-carrier-gateway)
aws:amazon-vpc-customer-gateway (aws:vpc-customer-gateway)
aws:amazon-vpc-elastic-network-adapter (aws:vpc-elastic-network-adapter)
aws:amazon-vpc-elastic-network-interface (aws:vpc-elastic-network-interface)
aws:amazon-vpc-endpoints (aws:vpc-endpoints)
aws:amazon-vpc-flow-logs (aws:vpc-flow-logs)
aws:amazon-vpc-internet-gateway (aws:vpc-internet-gateway)
aws:amazon-vpc-lattice (aws:vpc-lattice)
aws:amazon-vpc-nat-gateway (aws:vpc-nat-gateway)
aws:amazon-vpc-network-access-analyzer (aws:vpc-network-access-analyzer)
aws:amazon-vpc-network-access-control-list (aws:vpc-network-access-control-list)
aws:amazon-vpc-peering-connection (aws:vpc-peering-connection)
aws:amazon-vpc-reachability-analyzer (aws:vpc-reachability-analyzer)
aws:amazon-vpc-router (aws:vpc-router)
aws:amazon-vpc-traffic-mirroring (aws:vpc-traffic-mirroring)
aws:amazon-vpc-virtual-private-cloud-vpc (aws:vpc-virtual-private-cloud-vpc)
aws:amazon-vpc-vpn-connection (aws:vpc-vpn-connection)
aws:amazon-vpc-vpn-gateway (aws:vpc-vpn-gateway)
aws:amazon-workdocs (aws:workdocs)
aws:amazon-workdocs-sdk (aws:workdocs-sdk)
aws:amazon-workmail (aws:workmail)
aws:amazon-workspaces (aws:workspaces)
aws:aws-arch-category-analytics (aws:analytics, aws:arch-category-analytics)
aws:aws-apache-mxnet-on-aws (aws:apache-mxnet-on-aws)
aws:aws-arch-category-application-integration (aws:application-integration, aws:arch-category-application-integration)
aws:aws-arch-category-artificial-intelligence (aws:artificial-intelligence, aws:arch-category-artificial-intelligence)
aws:authenticated-user
aws:auto-scaling-group
aws:aws-account (aws:account)
aws:aws-activate (aws:activate)
aws:aws-amplify (aws:amplify)
aws:aws-amplify-aws-amplify-studio (aws:amplify-aws-amplify-studio)
aws:aws-app-mesh (aws:app-mesh)
aws:aws-app-mesh-mesh (aws:app-mesh-mesh)
aws:aws-app-mesh-virtual-gateway (aws:app-mesh-virtual-gateway)
aws:aws-app-mesh-virtual-node (aws:app-mesh-virtual-node)
aws:aws-app-mesh-virtual-router (aws:app-mesh-virtual-router)
aws:aws-app-mesh-virtual-service (aws:app-mesh-virtual-service)
aws:aws-app-runner (aws:app-runner)
aws:aws-app-studio (aws:app-studio)
aws:aws-appconfig (aws:appconfig)
aws:aws-appfabric (aws:appfabric)
aws:aws-application-auto-scaling (aws:application-auto-scaling)
aws:aws-application-discovery-service (aws:application-discovery-service)
aws:aws-application-discovery-service-aws-agentless-collector (aws:application-discovery-service-aws-agentless-collector)
aws:aws-application-discovery-service-aws-discovery-agent (aws:application-discovery-service-aws-discovery-agent)
aws:aws-application-discovery-service-migration-evaluator-collector (aws:application-discovery-service-migration-evaluator-collector)
aws:aws-application-migration-service (aws:application-migration-service)
aws:aws-appsync (aws:appsync)
aws:aws-artifact (aws:artifact)
aws:aws-audit-manager (aws:audit-manager)
aws:aws-auto-scaling (aws:auto-scaling)
aws:aws-b2b-data-interchange (aws:b2b-data-interchange)
aws:aws-backint-agent (aws:backint-agent)
aws:aws-backup (aws:backup)
aws:aws-backup-audit-manager (aws:backup-audit-manager)
aws:aws-backup-aws-backup-for-aws-cloudformation (aws:backup-aws-backup-for-aws-cloudformation)
aws:aws-backup-aws-backup-support-for-amazon-fsx-for-netapp-ontap (aws:backup-aws-backup-support-for-amazon-fsx-for-netapp-ontap)
aws:aws-backup-aws-backup-support-for-amazon-s3 (aws:backup-aws-backup-support-for-amazon-s3)
aws:aws-backup-aws-backup-support-for-vmware-workloads (aws:backup-aws-backup-support-for-vmware-workloads)
aws:aws-backup-backup-plan (aws:backup-backup-plan)
aws:aws-backup-backup-restore (aws:backup-backup-restore)
aws:aws-backup-backup-vault (aws:backup-backup-vault)
aws:aws-backup-compliance-reporting (aws:backup-compliance-reporting)
aws:aws-backup-compute (aws:backup-compute)
aws:aws-backup-database (aws:backup-database)
aws:aws-backup-gateway (aws:backup-gateway)
aws:aws-backup-legal-hold (aws:backup-legal-hold)
aws:aws-backup-recovery-point-objective (aws:backup-recovery-point-objective)
aws:aws-backup-recovery-time-objective (aws:backup-recovery-time-objective)
aws:aws-backup-storage (aws:backup-storage)
aws:aws-backup-vault-lock (aws:backup-vault-lock)
aws:aws-backup-virtual-machine (aws:backup-virtual-machine)
aws:aws-backup-virtual-machine-monitor (aws:backup-virtual-machine-monitor)
aws:aws-batch (aws:batch)
aws:aws-billing-conductor (aws:billing-conductor)
aws:aws-budgets (aws:budgets)
aws:aws-certificate-manager (aws:certificate-manager)
aws:aws-certificate-manager-certificate-authority (aws:certificate-manager-certificate-authority)
aws:aws-chatbot (aws:chatbot)
aws:aws-clean-rooms (aws:clean-rooms)
aws:aws-client-vpn (aws:client-vpn)
aws:aws-cloud (aws:cloud)
aws:aws-cloud-control-api (aws:cloud-control-api)
aws:aws-cloud-development-kit (aws:cloud-development-kit)
aws:aws-cloud-digital-interface (aws:cloud-digital-interface)
aws:aws-cloud-logo (aws:cloud-logo)
aws:aws-cloud-map (aws:cloud-map)
aws:aws-cloud-map-namespace (aws:cloud-map-namespace)
aws:aws-cloud-map-resource (aws:cloud-map-resource)
aws:aws-cloud-map-service (aws:cloud-map-service)
aws:aws-cloud-wan (aws:cloud-wan)
aws:aws-cloud-wan-core-network-edge (aws:cloud-wan-core-network-edge)
aws:aws-cloud-wan-segment-network (aws:cloud-wan-segment-network)
aws:aws-cloud-wan-transit-gateway-route-table-attachment (aws:cloud-wan-transit-gateway-route-table-attachment)
aws:aws-cloud9 (aws:cloud9)
aws:aws-cloud9-cloud9 (aws:cloud9-cloud9)
aws:aws-cloudformation (aws:cloudformation)
aws:aws-cloudformation-change-set (aws:cloudformation-change-set)
aws:aws-cloudformation-stack (aws:cloudformation-stack)
aws:aws-cloudformation-template (aws:cloudformation-template)
aws:aws-cloudhsm (aws:cloudhsm)
aws:aws-cloudshell (aws:cloudshell)
aws:aws-cloudtrail (aws:cloudtrail)
aws:aws-cloudtrail-cloudtrail-lake (aws:cloudtrail-cloudtrail-lake)
aws:aws-codeartifact (aws:codeartifact)
aws:aws-codebuild (aws:codebuild)
aws:aws-codecommit (aws:codecommit)
aws:aws-codedeploy (aws:codedeploy)
aws:aws-codepipeline (aws:codepipeline)
aws:aws-command-line-interface (aws:command-line-interface)
aws:aws-compute-optimizer (aws:compute-optimizer)
aws:aws-config (aws:config)
aws:aws-console-mobile-application (aws:console-mobile-application)
aws:aws-control-tower (aws:control-tower)
aws:aws-cost-and-usage-report (aws:cost-and-usage-report)
aws:aws-cost-explorer (aws:cost-explorer)
aws:aws-data-exchange (aws:data-exchange)
aws:aws-data-exchange-for-apis (aws:data-exchange-for-apis)
aws:aws-data-transfer-terminal (aws:data-transfer-terminal)
aws:aws-database-migration-service (aws:database-migration-service)
aws:aws-database-migration-service-database-migration-workflow-or-job (aws:database-migration-service-database-migration-workflow-or-job)
aws:aws-datasync (aws:datasync)
aws:aws-datasync-agent (aws:datasync-agent)
aws:aws-datasync-discovery (aws:datasync-discovery)
aws:aws-deadline-cloud (aws:deadline-cloud)
aws:aws-deep-learning-amis (aws:deep-learning-amis)
aws:aws-deep-learning-containers (aws:deep-learning-containers)
aws:aws-deepracer (aws:deepracer)
aws:aws-device-farm (aws:device-farm)
aws:aws-devops-agent (aws:devops-agent)
aws:aws-direct-connect (aws:direct-connect)
aws:aws-direct-connect-gateway (aws:direct-connect-gateway)
aws:aws-directory-service (aws:directory-service)
aws:aws-directory-service-ad-connector (aws:directory-service-ad-connector)
aws:aws-directory-service-aws-managed-microsoft-ad (aws:directory-service-aws-managed-microsoft-ad)
aws:aws-directory-service-simple-ad (aws:directory-service-simple-ad)
aws:aws-distro-for-opentelemetry (aws:distro-for-opentelemetry)
aws:aws-elastic-beanstalk (aws:elastic-beanstalk)
aws:aws-elastic-beanstalk-application (aws:elastic-beanstalk-application)
aws:aws-elastic-beanstalk-deployment (aws:elastic-beanstalk-deployment)
aws:aws-elastic-disaster-recovery (aws:elastic-disaster-recovery)
aws:aws-elemental-appliances-software (aws:elemental-appliances-software)
aws:aws-elemental-conductor (aws:elemental-conductor)
aws:aws-elemental-delta (aws:elemental-delta)
aws:aws-elemental-inference (aws:elemental-inference)
aws:aws-elemental-link (aws:elemental-link)
aws:aws-elemental-live (aws:elemental-live)
aws:aws-elemental-mediaconnect (aws:elemental-mediaconnect)
aws:aws-elemental-mediaconnect-mediaconnect-gateway (aws:elemental-mediaconnect-mediaconnect-gateway)
aws:aws-elemental-mediaconvert (aws:elemental-mediaconvert)
aws:aws-elemental-medialive (aws:elemental-medialive)
aws:aws-elemental-mediapackage (aws:elemental-mediapackage)
aws:aws-elemental-mediastore (aws:elemental-mediastore)
aws:aws-elemental-mediatailor (aws:elemental-mediatailor)
aws:aws-elemental-server (aws:elemental-server)
aws:aws-end-user-messaging (aws:end-user-messaging)
aws:aws-entity-resolution (aws:entity-resolution)
aws:aws-express-workflows (aws:express-workflows)
aws:aws-fargate (aws:fargate)
aws:aws-fault-injection-service (aws:fault-injection-service)
aws:aws-firewall-manager (aws:firewall-manager)
aws:aws-global-accelerator (aws:global-accelerator)
aws:aws-glue (aws:glue)
aws:aws-glue-aws-glue-for-ray (aws:glue-aws-glue-for-ray)
aws:aws-glue-crawler (aws:glue-crawler)
aws:aws-glue-data-catalog (aws:glue-data-catalog)
aws:aws-glue-data-quality (aws:glue-data-quality)
aws:aws-glue-databrew (aws:glue-databrew)
aws:aws-ground-station (aws:ground-station)
aws:aws-health-dashboard (aws:health-dashboard)
aws:aws-healthimaging (aws:healthimaging)
aws:aws-healthlake (aws:healthlake)
aws:aws-healthomics (aws:healthomics)
aws:aws-healthscribe (aws:healthscribe)
aws:aws-iam-identity-center (aws:iam-identity-center)
aws:aws-identity-access-management-add-on (aws:identity-access-management-add-on)
aws:aws-identity-access-management-aws-sts (aws:identity-access-management-aws-sts)
aws:aws-identity-access-management-aws-sts-alternate (aws:identity-access-management-aws-sts-alternate)
aws:aws-identity-access-management-data-encryption-key (aws:identity-access-management-data-encryption-key)
aws:aws-identity-access-management-encrypted-data (aws:identity-access-management-encrypted-data)
aws:aws-identity-access-management-iam-access-analyzer (aws:identity-access-management-iam-access-analyzer)
aws:aws-identity-access-management-iam-roles-anywhere (aws:identity-access-management-iam-roles-anywhere)
aws:aws-identity-access-management-long-term-security-credential (aws:identity-access-management-long-term-security-credential)
aws:aws-identity-access-management-mfa-token (aws:identity-access-management-mfa-token)
aws:aws-identity-access-management-permissions (aws:identity-access-management-permissions)
aws:aws-identity-access-management-role (aws:identity-access-management-role)
aws:aws-identity-access-management-temporary-security-credential (aws:identity-access-management-temporary-security-credential)
aws:aws-identity-and-access-management (aws:identity-and-access-management, aws:iam)
aws:aws-infrastructure-composer (aws:infrastructure-composer)
aws:aws-interconnect (aws:interconnect)
aws:aws-iot-action (aws:iot-action)
aws:aws-iot-actuator (aws:iot-actuator)
aws:aws-iot-alexa-enabled-device (aws:iot-alexa-enabled-device)
aws:aws-iot-alexa-skill (aws:iot-alexa-skill)
aws:aws-iot-alexa-voice-service (aws:iot-alexa-voice-service)
aws:aws-iot-certificate (aws:iot-certificate)
aws:aws-iot-core (aws:iot-core)
aws:aws-iot-core-device-advisor (aws:iot-core-device-advisor)
aws:aws-iot-core-device-location (aws:iot-core-device-location)
aws:aws-iot-desired-state (aws:iot-desired-state)
aws:aws-iot-device-defender (aws:iot-device-defender)
aws:aws-iot-device-defender-iot-device-jobs (aws:iot-device-defender-iot-device-jobs)
aws:aws-iot-device-gateway (aws:iot-device-gateway)
aws:aws-iot-device-management (aws:iot-device-management)
aws:aws-iot-device-management-fleet-hub (aws:iot-device-management-fleet-hub)
aws:aws-iot-device-tester (aws:iot-device-tester)
aws:aws-iot-echo (aws:iot-echo)
aws:aws-iot-events (aws:iot-events)
aws:aws-iot-expresslink (aws:iot-expresslink)
aws:aws-iot-fire-tv (aws:iot-fire-tv)
aws:aws-iot-fire-tv-stick (aws:iot-fire-tv-stick)
aws:aws-iot-fleetwise (aws:iot-fleetwise)
aws:aws-iot-greengrass (aws:iot-greengrass)
aws:aws-iot-greengrass-artifact (aws:iot-greengrass-artifact)
aws:aws-iot-greengrass-component (aws:iot-greengrass-component)
aws:aws-iot-greengrass-component-machine-learning (aws:iot-greengrass-component-machine-learning)
aws:aws-iot-greengrass-component-nucleus (aws:iot-greengrass-component-nucleus)
aws:aws-iot-greengrass-component-private (aws:iot-greengrass-component-private)
aws:aws-iot-greengrass-component-public (aws:iot-greengrass-component-public)
aws:aws-iot-greengrass-connector (aws:iot-greengrass-connector)
aws:aws-iot-greengrass-deployment (aws:iot-greengrass-deployment)
aws:aws-iot-greengrass-interprocess-communication (aws:iot-greengrass-interprocess-communication)
aws:aws-iot-greengrass-protocol (aws:iot-greengrass-protocol)
aws:aws-iot-greengrass-recipe (aws:iot-greengrass-recipe)
aws:aws-iot-greengrass-stream-manager (aws:iot-greengrass-stream-manager)
aws:aws-iot-hardware-board (aws:iot-hardware-board)
aws:aws-iot-http-protocol (aws:iot-http-protocol)
aws:aws-iot-http2-protocol (aws:iot-http2-protocol)
aws:aws-iot-lambda-function (aws:iot-lambda-function)
aws:aws-iot-lorawan-protocol (aws:iot-lorawan-protocol)
aws:aws-iot-mqtt-protocol (aws:iot-mqtt-protocol)
aws:aws-iot-over-air-update (aws:iot-over-air-update)
aws:aws-iot-policy (aws:iot-policy)
aws:aws-iot-reported-state (aws:iot-reported-state)
aws:aws-iot-rule (aws:iot-rule)
aws:aws-iot-sailboat (aws:iot-sailboat)
aws:aws-iot-sensor (aws:iot-sensor)
aws:aws-iot-servo (aws:iot-servo)
aws:aws-iot-shadow (aws:iot-shadow)
aws:aws-iot-simulator (aws:iot-simulator)
aws:aws-iot-sitewise (aws:iot-sitewise)
aws:aws-iot-sitewise-asset (aws:iot-sitewise-asset)
aws:aws-iot-sitewise-asset-hierarchy (aws:iot-sitewise-asset-hierarchy)
aws:aws-iot-sitewise-asset-model (aws:iot-sitewise-asset-model)
aws:aws-iot-sitewise-asset-properties (aws:iot-sitewise-asset-properties)
aws:aws-iot-sitewise-data-streams (aws:iot-sitewise-data-streams)
aws:aws-iot-thing-bank (aws:iot-thing-bank)
aws:aws-iot-thing-bicycle (aws:iot-thing-bicycle)
aws:aws-iot-thing-camera (aws:iot-thing-camera)
aws:aws-iot-thing-car (aws:iot-thing-car)
aws:aws-iot-thing-cart (aws:iot-thing-cart)
aws:aws-iot-thing-coffee-pot (aws:iot-thing-coffee-pot)
aws:aws-iot-thing-door-lock (aws:iot-thing-door-lock)
aws:aws-iot-thing-factory (aws:iot-thing-factory)
aws:aws-iot-thing-freertos-device (aws:iot-thing-freertos-device)
aws:aws-iot-thing-generic (aws:iot-thing-generic)
aws:aws-iot-thing-house (aws:iot-thing-house)
aws:aws-iot-thing-humidity-sensor (aws:iot-thing-humidity-sensor)
aws:aws-iot-thing-industrial-pc (aws:iot-thing-industrial-pc)
aws:aws-iot-thing-lightbulb (aws:iot-thing-lightbulb)
aws:aws-iot-thing-medical-emergency (aws:iot-thing-medical-emergency)
aws:aws-iot-thing-plc (aws:iot-thing-plc)
aws:aws-iot-thing-police-emergency (aws:iot-thing-police-emergency)
aws:aws-iot-thing-relay (aws:iot-thing-relay)
aws:aws-iot-thing-stacklight (aws:iot-thing-stacklight)
aws:aws-iot-thing-temperature-humidity-sensor (aws:iot-thing-temperature-humidity-sensor)
aws:aws-iot-thing-temperature-sensor (aws:iot-thing-temperature-sensor)
aws:aws-iot-thing-temperature-vibration-sensor (aws:iot-thing-temperature-vibration-sensor)
aws:aws-iot-thing-thermostat (aws:iot-thing-thermostat)
aws:aws-iot-thing-travel (aws:iot-thing-travel)
aws:aws-iot-thing-utility (aws:iot-thing-utility)
aws:aws-iot-thing-vibration-sensor (aws:iot-thing-vibration-sensor)
aws:aws-iot-thing-windfarm (aws:iot-thing-windfarm)
aws:aws-iot-topic (aws:iot-topic)
aws:aws-iot-twinmaker (aws:iot-twinmaker)
aws:aws-iq (aws:iq)
aws:aws-key-management-service (aws:key-management-service)
aws:aws-key-management-service-external-key-store (aws:key-management-service-external-key-store)
aws:aws-lake-formation (aws:lake-formation)
aws:aws-lake-formation-data-lake (aws:lake-formation-data-lake)
aws:aws-lambda (aws:lambda)
aws:aws-lambda-lambda-function (aws:lambda-lambda-function)
aws:aws-launch-wizard (aws:launch-wizard)
aws:aws-license-manager (aws:license-manager)
aws:aws-license-manager-application-discovery (aws:license-manager-application-discovery)
aws:aws-license-manager-license-blending (aws:license-manager-license-blending)
aws:aws-local-zones (aws:local-zones)
aws:aws-mainframe-modernization (aws:mainframe-modernization)
aws:aws-mainframe-modernization-analyzer (aws:mainframe-modernization-analyzer)
aws:aws-mainframe-modernization-compiler (aws:mainframe-modernization-compiler)
aws:aws-mainframe-modernization-converter (aws:mainframe-modernization-converter)
aws:aws-mainframe-modernization-developer (aws:mainframe-modernization-developer)
aws:aws-mainframe-modernization-runtime (aws:mainframe-modernization-runtime)
aws:aws-managed-services (aws:managed-services)
aws:aws-management-console (aws:management-console)
aws:aws-marketplace-dark (aws:marketplace-dark)
aws:aws-marketplace-light (aws:marketplace-light)
aws:aws-migration-evaluator (aws:migration-evaluator)
aws:aws-migration-hub (aws:migration-hub)
aws:aws-migration-hub-refactor-spaces-applications (aws:migration-hub-refactor-spaces-applications)
aws:aws-migration-hub-refactor-spaces-environments (aws:migration-hub-refactor-spaces-environments)
aws:aws-migration-hub-refactor-spaces-services (aws:migration-hub-refactor-spaces-services)
aws:aws-network-firewall (aws:network-firewall)
aws:aws-network-firewall-endpoints (aws:network-firewall-endpoints)
aws:aws-neuron (aws:neuron)
aws:aws-nitro-enclaves (aws:nitro-enclaves)
aws:aws-organizations (aws:organizations)
aws:aws-organizations-account (aws:organizations-account)
aws:aws-organizations-management-account (aws:organizations-management-account)
aws:aws-organizations-organizational-unit (aws:organizations-organizational-unit)
aws:aws-outposts-family (aws:outposts-family)
aws:aws-outposts-rack (aws:outposts-rack)
aws:aws-outposts-servers (aws:outposts-servers)
aws:aws-panorama (aws:panorama)
aws:aws-parallel-cluster (aws:parallel-cluster)
aws:aws-parallel-computing-service (aws:parallel-computing-service)
aws:aws-partner-central (aws:partner-central)
aws:aws-payment-cryptography (aws:payment-cryptography)
aws:aws-private-certificate-authority (aws:private-certificate-authority)
aws:aws-privatelink (aws:privatelink)
aws:aws-professional-services (aws:professional-services)
aws:aws-proton (aws:proton)
aws:aws-repost (aws:repost)
aws:aws-repost-private (aws:repost-private)
aws:aws-resilience-hub (aws:resilience-hub)
aws:aws-resource-access-manager (aws:resource-access-manager)
aws:aws-resource-explorer (aws:resource-explorer)
aws:aws-rtb-fabric (aws:rtb-fabric)
aws:aws-secrets-manager (aws:secrets-manager)
aws:aws-security-agent (aws:security-agent)
aws:aws-security-hub (aws:security-hub)
aws:aws-security-hub-finding (aws:security-hub-finding)
aws:aws-security-incident-response (aws:security-incident-response)
aws:aws-serverless-application-repository (aws:serverless-application-repository)
aws:aws-service-catalog (aws:service-catalog)
aws:aws-service-management-connector (aws:service-management-connector)
aws:aws-shield (aws:shield)
aws:aws-shield-aws-shield-advanced (aws:shield-aws-shield-advanced)
aws:aws-signer (aws:signer)
aws:aws-simspace-weaver (aws:simspace-weaver)
aws:aws-site-to-site-vpn (aws:site-to-site-vpn)
aws:aws-snowball (aws:snowball)
aws:aws-snowball-edge (aws:snowball-edge)
aws:aws-snowball-snowball-import-export (aws:snowball-snowball-import-export)
aws:aws-step-functions (aws:step-functions)
aws:aws-storage-gateway (aws:storage-gateway)
aws:aws-storage-gateway-amazon-fsx-file-gateway (aws:storage-gateway-amazon-fsx-file-gateway)
aws:aws-storage-gateway-amazon-s3-file-gateway (aws:storage-gateway-amazon-s3-file-gateway)
aws:aws-storage-gateway-cached-volume (aws:storage-gateway-cached-volume)
aws:aws-storage-gateway-file-gateway (aws:storage-gateway-file-gateway)
aws:aws-storage-gateway-noncached-volume (aws:storage-gateway-noncached-volume)
aws:aws-storage-gateway-tape-gateway (aws:storage-gateway-tape-gateway)
aws:aws-storage-gateway-virtual-tape-library (aws:storage-gateway-virtual-tape-library)
aws:aws-storage-gateway-volume-gateway (aws:storage-gateway-volume-gateway)
aws:aws-supply-chain (aws:supply-chain)
aws:aws-support (aws:support)
aws:aws-sustainability (aws:sustainability)
aws:aws-systems-manager (aws:systems-manager)
aws:aws-systems-manager-application-manager (aws:systems-manager-application-manager)
aws:aws-systems-manager-automation (aws:systems-manager-automation)
aws:aws-systems-manager-change-calendar (aws:systems-manager-change-calendar)
aws:aws-systems-manager-change-manager (aws:systems-manager-change-manager)
aws:aws-systems-manager-compliance (aws:systems-manager-compliance)
aws:aws-systems-manager-distributor (aws:systems-manager-distributor)
aws:aws-systems-manager-documents (aws:systems-manager-documents)
aws:aws-systems-manager-incident-manager (aws:systems-manager-incident-manager)
aws:aws-systems-manager-inventory (aws:systems-manager-inventory)
aws:aws-systems-manager-maintenance-windows (aws:systems-manager-maintenance-windows)
aws:aws-systems-manager-opscenter (aws:systems-manager-opscenter)
aws:aws-systems-manager-parameter-store (aws:systems-manager-parameter-store)
aws:aws-systems-manager-patch-manager (aws:systems-manager-patch-manager)
aws:aws-systems-manager-run-command (aws:systems-manager-run-command)
aws:aws-systems-manager-session-manager (aws:systems-manager-session-manager)
aws:aws-systems-manager-state-manager (aws:systems-manager-state-manager)
aws:aws-telco-network-builder (aws:telco-network-builder)
aws:aws-thinkbox-deadline (aws:thinkbox-deadline)
aws:aws-thinkbox-frost (aws:thinkbox-frost)
aws:aws-thinkbox-krakatoa (aws:thinkbox-krakatoa)
aws:aws-thinkbox-stoke (aws:thinkbox-stoke)
aws:aws-thinkbox-xmesh (aws:thinkbox-xmesh)
aws:aws-tools-and-sdks (aws:tools-and-sdks)
aws:aws-training-certification (aws:training-certification)
aws:aws-transfer-family (aws:transfer-family)
aws:aws-transfer-family-aws-as2 (aws:transfer-family-aws-as2)
aws:aws-transfer-family-aws-ftp (aws:transfer-family-aws-ftp)
aws:aws-transfer-family-aws-ftps (aws:transfer-family-aws-ftps)
aws:aws-transfer-family-aws-sftp (aws:transfer-family-aws-sftp)
aws:aws-transform (aws:transform)
aws:aws-transit-gateway (aws:transit-gateway)
aws:aws-transit-gateway-attachment (aws:transit-gateway-attachment)
aws:aws-trusted-advisor (aws:trusted-advisor)
aws:aws-trusted-advisor-checklist (aws:trusted-advisor-checklist)
aws:aws-trusted-advisor-checklist-cost (aws:trusted-advisor-checklist-cost)
aws:aws-trusted-advisor-checklist-fault-tolerant (aws:trusted-advisor-checklist-fault-tolerant)
aws:aws-trusted-advisor-checklist-performance (aws:trusted-advisor-checklist-performance)
aws:aws-trusted-advisor-checklist-security (aws:trusted-advisor-checklist-security)
aws:aws-user-notifications (aws:user-notifications)
aws:aws-verified-access (aws:verified-access)
aws:aws-waf (aws:waf)
aws:aws-waf-bad-bot (aws:waf-bad-bot)
aws:aws-waf-bot (aws:waf-bot)
aws:aws-waf-bot-control (aws:waf-bot-control)
aws:aws-waf-filtering-rule (aws:waf-filtering-rule)
aws:aws-waf-labels (aws:waf-labels)
aws:aws-waf-managed-rule (aws:waf-managed-rule)
aws:aws-waf-rule (aws:waf-rule)
aws:aws-wavelength (aws:wavelength)
aws:aws-well-architected-tool (aws:well-architected-tool)
aws:aws-wickr (aws:wickr)
aws:aws-x-ray (aws:x-ray)
aws:aws-arch-category-blockchain (aws:blockchain, aws:arch-category-blockchain)
aws:aws-bottlerocket (aws:bottlerocket)
aws:aws-arch-category-business-applications (aws:business-applications, aws:arch-category-business-applications)
aws:camera
aws:chat
aws:client
aws:aws-arch-category-cloud-financial-management (aws:cloud-financial-management, aws:arch-category-cloud-financial-management)
aws:cold-storage
aws:aws-arch-category-compute (aws:compute, aws:arch-category-compute)
aws:aws-arch-category-containers (aws:containers, aws:arch-category-containers)
aws:corporate-data-center
aws:credentials
aws:aws-arch-category-customer-enablement (aws:customer-enablement, aws:arch-category-customer-enablement)
aws:customer-experience
aws:data-stream
aws:data-table
aws:database
aws:databases
aws:aws-arch-category-developer-tools (aws:developer-tools, aws:arch-category-developer-tools)
aws:disk
aws:document
aws:documents
aws:ec2-instance-contents
aws:aws-elastic-fabric-adapter (aws:elastic-fabric-adapter)
aws:aws-elastic-load-balancing (aws:elastic-load-balancing, aws:elb)
aws:aws-elastic-load-balancing-application-load-balancer (aws:elastic-load-balancing-application-load-balancer)
aws:aws-elastic-load-balancing-classic-load-balancer (aws:elastic-load-balancing-classic-load-balancer)
aws:aws-elastic-load-balancing-gateway-load-balancer (aws:elastic-load-balancing-gateway-load-balancer)
aws:aws-elastic-load-balancing-network-load-balancer (aws:elastic-load-balancing-network-load-balancer)
aws:email
aws:aws-arch-category-end-user-computing (aws:end-user-computing, aws:arch-category-end-user-computing)
aws:firewall
aws:folder
aws:folders
aws:forums
aws:aws-freertos (aws:freertos)
aws:aws-arch-category-front-end-web-mobile (aws:front-end-web-mobile, aws:arch-category-front-end-web-mobile)
aws:aws-arch-category-games (aws:games, aws:arch-category-games)
aws:gear
aws:generic-application
aws:git-repository
aws:globe
aws:internet
aws:internet-alt1
aws:internet-alt2
aws:aws-arch-category-internet-of-things (aws:internet-of-things, aws:arch-category-internet-of-things)
aws:json-script
aws:logs
aws:magnifying-glass
aws:management-tools
aws:aws-arch-category-media-services (aws:media-services, aws:arch-category-media-services)
aws:metrics
aws:aws-arch-category-migration-modernization (aws:migration-modernization, aws:arch-category-migration-modernization)
aws:mobile-client
aws:multicloud-and-hybrid
aws:multimedia
aws:aws-arch-category-networking-content-delivery (aws:networking-content-delivery, aws:arch-category-networking-content-delivery)
aws:office-building
aws:aws-open-3d-engine (aws:open-3d-engine)
aws:aws-oracle-database-at-aws (aws:oracle-database-at-aws)
aws:private-subnet
aws:programming-language
aws:public-subnet
aws:aws-pytorch-on-aws (aws:pytorch-on-aws)
aws:aws-arch-category-quantum-technologies (aws:quantum-technologies, aws:arch-category-quantum-technologies)
aws:question
aws:recover
aws:aws-red-hat-openshift-service-on-aws (aws:red-hat-openshift-service-on-aws)
aws:region
aws:aws-reserved-instance-reporting (aws:reserved-instance-reporting)
aws:saml-token
aws:aws-arch-category-satellite (aws:satellite, aws:arch-category-satellite)
aws:aws-savings-plans (aws:savings-plans)
aws:sdk
aws:security-identity
aws:server
aws:server-contents
aws:aws-arch-category-serverless (aws:serverless, aws:arch-category-serverless)
aws:servers
aws:shield
aws:source-code
aws:spot-fleet
aws:ssl-padlock
aws:aws-arch-category-storage (aws:storage, aws:arch-category-storage)
aws:tape-storage
aws:aws-tensorflow-on-aws (aws:tensorflow-on-aws)
aws:toolkit
aws:user
aws:users
aws:virtual-private-cloud-vpc

## azure

azure:abs-member
azure:active-directory-connect-health
azure:activity-log
azure:administrative-units
azure:advisor
azure:ai-at-edge
azure:ai-studio
azure:aks-automatic
azure:aks-istio
azure:aks-network-policy
azure:alerts
azure:all-resources
azure:analysis-services
azure:anomaly-detector
azure:api-center
azure:api-connections
azure:api-management-services
azure:api-proxy
azure:app-compliance-automation
azure:app-configuration
azure:app-registrations
azure:app-service-certificates
azure:app-service-domains
azure:app-service-environments
azure:app-service-plans
azure:app-services
azure:app-space
azure:app-space-component
azure:applens
azure:application-gateway-containers
azure:application-gateways
azure:application-group
azure:application-insights
azure:application-security-groups
azure:aquila
azure:arc-data-services
azure:arc-kubernetes
azure:arc-machines
azure:arc-postgresql
azure:arc-sql-managed-instance
azure:arc-sql-server
azure:atm-multistack
azure:auto-scale
azure:automanaged-vm
azure:automation-accounts
azure:availability-sets
azure:avs-vm
azure:azure-a (azure:a)
azure:azure-ad-b2c (azure:ad-b2c)
azure:azure-api-for-fhir (azure:api-for-fhir)
azure:azure-app-testing (azure:app-testing)
azure:azure-applied-ai-services (azure:applied-ai-services)
azure:azure-arc (azure:arc)
azure:azure-backup-center (azure:backup-center)
azure:azure-blockchain-service (azure:blockchain-service)
azure:azure-center-for-sap (azure:center-for-sap)
azure:azure-chaos-studio (azure:chaos-studio)
azure:azure-cloud-shell (azure:cloud-shell)
azure:azure-communication-services (azure:communication-services)
azure:azure-communications-gateway (azure:communications-gateway)
azure:azure-compute-galleries (azure:compute-galleries)
azure:azure-consumption-commitment (azure:consumption-commitment)
azure:azure-container-storage (azure:container-storage)
azure:azure-cosmos-db (azure:cosmos-db, azure:cosmos, azure:cosmosdb)
azure:azure-data-catalog (azure:data-catalog)
azure:azure-data-explorer-clusters (azure:data-explorer-clusters)
azure:azure-database-mariadb-server (azure:database-mariadb-server)
azure:azure-database-migration-services (azure:database-migration-services)
azure:azure-database-mysql-server (azure:database-mysql-server)
azure:azure-database-postgresql-server (azure:database-postgresql-server)
azure:azure-database-postgresql-server-group (azure:database-postgresql-server-group)
azure:azure-databox-gateway (azure:databox-gateway)
azure:azure-databricks (azure:databricks)
azure:azure-deployment-environments (azure:deployment-environments)
azure:azure-dev-tunnels (azure:dev-tunnels)
azure:azure-devops (azure:devops)
azure:azure-edge-hardware-center (azure:edge-hardware-center)
azure:azure-experimentation-studio (azure:experimentation-studio)
azure:azure-fileshares (azure:fileshares)
azure:azure-firewall-manager (azure:firewall-manager)
azure:azure-firewall-policy (azure:firewall-policy)
azure:azure-hcp-cache (azure:hcp-cache)
azure:azure-hpc-workbenches (azure:hpc-workbenches)
azure:azure-hybrid-center (azure:hybrid-center)
azure:azure-information-protection (azure:information-protection)
azure:azure-iot-operations (azure:iot-operations)
azure:azure-lighthouse (azure:lighthouse)
azure:azure-linux (azure:linux)
azure:azure-load-testing (azure:load-testing)
azure:azure-local (azure:local)
azure:azure-managed-grafana (azure:managed-grafana)
azure:azure-managed-redis (azure:managed-redis)
azure:azure-maps-accounts (azure:maps-accounts)
azure:azure-media-service (azure:media-service)
azure:azure-migrate (azure:migrate)
azure:azure-monitor-dashboard (azure:monitor-dashboard)
azure:azure-monitor-pipeline (azure:monitor-pipeline)
azure:azure-monitors-for-sap-solutions (azure:monitors-for-sap-solutions)
azure:azure-netapp-files (azure:netapp-files)
azure:azure-network-function-manager (azure:network-function-manager)
azure:azure-network-function-manager-functions (azure:network-function-manager-functions)
azure:azure-object-understanding (azure:object-understanding)
azure:azure-openai (azure:openai)
azure:azure-operator-5g-core (azure:operator-5g-core)
azure:azure-operator-insights (azure:operator-insights)
azure:azure-operator-nexus (azure:operator-nexus)
azure:azure-operator-service-manager (azure:operator-service-manager)
azure:azure-orbital (azure:orbital)
azure:azure-programmable-connectivity (azure:programmable-connectivity)
azure:azure-quotas (azure:quotas)
azure:azure-red-hat-openshift (azure:red-hat-openshift)
azure:azure-sentinel (azure:sentinel)
azure:azure-service-bus (azure:service-bus)
azure:azure-sphere (azure:sphere)
azure:azure-spring-apps (azure:spring-apps)
azure:azure-sql (azure:sql)
azure:azure-sql-edge (azure:sql-edge)
azure:azure-sql-server-stretch-databases (azure:sql-server-stretch-databases)
azure:azure-sql-vm (azure:sql-vm)
azure:azure-stack (azure:stack)
azure:azure-stack-edge (azure:stack-edge)
azure:azure-stack-hci-sizer (azure:stack-hci-sizer)
azure:azure-storage-mover (azure:storage-mover)
azure:azure-support-center-blue (azure:support-center-blue)
azure:azure-sustainability (azure:sustainability)
azure:azure-synapse-analytics (azure:synapse-analytics)
azure:azure-token-service (azure:token-service)
azure:azure-video-indexer (azure:video-indexer)
azure:azure-virtual-desktop (azure:virtual-desktop)
azure:azure-vmware-solution (azure:vmware-solution)
azure:azure-workbooks (azure:workbooks)
azure:azureattestation
azure:azurite
azure:backlog
azure:backup-vault
azure:bare-metal-infrastructure
azure:bastions
azure:batch-accounts
azure:batch-ai
azure:biz-talk
azure:blob-block
azure:blob-page
azure:blockchain-applications
azure:blueprints
azure:bonsai
azure:bot-services
azure:branch
azure:breeze
azure:browser
azure:bug
azure:builds
azure:business-process-tracking
azure:cache
azure:cache-redis
azure:capacity
azure:capacity-reservation-groups
azure:cdn-profiles
azure:central-service-instance-for-sap
azure:ceres
azure:change-analysis
azure:client-apps
azure:cloud-services-classic
azure:cloud-services-extended-support
azure:cloudtest
azure:code
azure:code-optimization
azure:cognitive-search
azure:cognitive-services
azure:cognitive-services-decisions
azure:collaborative-service
azure:commit
azure:community-images
azure:compliance
azure:compliance-center
azure:compute-fleet
azure:computer-vision
azure:conditional-access
azure:confidential-ledgers
azure:connected-cache
azure:connected-vehicle-platform
azure:connections
azure:consortium
azure:container-apps-environments
azure:container-instances
azure:container-registries
azure:container-services-deprecated
azure:content-moderators
azure:content-safety
azure:controls
azure:controls-horizontal
azure:cost-alerts
azure:cost-analysis
azure:cost-budgets
azure:cost-export
azure:cost-management
azure:cost-management-and-billing
azure:counter
azure:cubes
azure:custom-ip-prefix
azure:custom-vision
azure:customer-lockbox-for-microsoft-azure
azure:dashboard
azure:dashboard-hub
azure:data-box
azure:data-collection-rules
azure:data-factories
azure:data-lake-analytics
azure:data-lake-storage-gen1
azure:data-lake-store-gen1
azure:data-share-invitations
azure:data-shares
azure:data-virtualization
azure:database-instance-for-sap
azure:ddos-protection-plans
azure:dedicated-hsm
azure:defender-cm-local-manager
azure:defender-dcs-controller
azure:defender-distributer-control-system
azure:defender-engineering-station
azure:defender-external-management
azure:defender-freezer-monitor
azure:defender-historian
azure:defender-hmi
azure:defender-industrial-packaging-system
azure:defender-industrial-printer
azure:defender-industrial-robot
azure:defender-industrial-scale-system
azure:defender-marquee
azure:defender-meter
azure:defender-plc
azure:defender-pneumatic-device
azure:defender-programable-board
azure:defender-relay
azure:defender-robot-controller
azure:defender-rtu
azure:defender-sensor
azure:defender-slot
azure:defender-web-guiding-system
azure:detonation
azure:dev-console
azure:device-compliance
azure:device-configuration
azure:device-enrollment
azure:device-provisioning-services
azure:device-security-apple
azure:device-security-google
azure:device-security-windows
azure:device-update-iot-hub
azure:devices
azure:devops-starter
azure:devtest-labs
azure:diagnostics-settings
azure:digital-twins
azure:disk-encryption-sets
azure:disk-pool
azure:disks
azure:disks-classic
azure:disks-snapshots
azure:dns-multistack
azure:dns-private-resolver
azure:dns-security-policy
azure:dns-zones
azure:download
azure:ebooks
azure:edge-actions
azure:edge-management
azure:edge-storage-accelerator
azure:education
azure:elastic-job-agents
azure:elastic-san
azure:endpoint-analytics
azure:engage-center-connect
azure:enterprise-applications
azure:entra-connect
azure:entra-connect-health
azure:entra-connect-sync
azure:entra-domain-services
azure:entra-global-secure-access
azure:entra-id-protection
azure:entra-identity-custom-roles
azure:entra-identity-licenses
azure:entra-identity-risky-signins
azure:entra-identity-risky-users
azure:entra-identity-roles-and-administrators
azure:entra-internet-access
azure:entra-managed-identities
azure:entra-private-access
azure:entra-privleged-identity-management
azure:entra-verified-id
azure:error
azure:event-grid-domains
azure:event-grid-subscriptions
azure:event-grid-topics
azure:event-hub-clusters
azure:event-hubs
azure:exchange-access
azure:exchange-on-premises-access
azure:express-route-traffic-collector
azure:expressroute-circuits
azure:expressroute-direct
azure:extendedsecurityupdates
azure:extensions
azure:external-id
azure:external-id-modified
azure:external-identities
azure:face-apis
azure:feature-previews
azure:fhir-service
azure:fiji
azure:file
azure:files
azure:firewalls
azure:folder-blank
azure:folder-website
azure:form-recognizers
azure:frd-qa
azure:free-services
azure:front-door-and-cdn-profiles
azure:ftp
azure:function-apps (azure:functions)
azure:gear
azure:genomics
azure:genomics-accounts
azure:globe-error
azure:globe-success
azure:globe-warning
azure:groups
azure:guide
azure:hd-insight-clusters
azure:hdi-aks-cluster
azure:heart
azure:help-and-support
azure:host-groups
azure:host-pools
azure:hosts
azure:hybrid-connectivity-hub
azure:icm-troubleshooting
azure:identity-governance
azure:identity-secure-score
azure:image
azure:image-definitions
azure:image-templates
azure:image-versions
azure:images
azure:immersive-readers
azure:import-export-jobs
azure:industrial-iot
azure:information
azure:infrastructure-backup
azure:input-output
azure:instance-pools
azure:integration-accounts
azure:integration-environments
azure:integration-service-environments
azure:internet-analyzer-profiles
azure:intune
azure:intune-app-protection
azure:intune-for-education
azure:intune-trends
azure:iot-central-applications
azure:iot-edge
azure:iot-hub
azure:ip-address-manager
azure:ip-groups
azure:journey-hub
azure:key-vaults (azure:keyvault)
azure:keys
azure:kubernetes-fleet-manager
azure:kubernetes-hub
azure:kubernetes-services (azure:aks)
azure:lab-accounts
azure:lab-services
azure:landing-zone
azure:language
azure:language-understanding
azure:launch-portal
azure:learn
azure:load-balancer-hub
azure:load-balancers (azure:lb)
azure:load-test
azure:load-testing
azure:local-network-gateways
azure:location
azure:log-analytics-query-pack
azure:log-analytics-workspaces
azure:log-streaming
azure:logic-apps
azure:logic-apps-custom-connector
azure:logic-apps-template
azure:machine-learning
azure:machine-learning-studio-classic-web-services
azure:machine-learning-studio-web-service-plans
azure:machine-learning-studio-workspaces
azure:machinesazurearc
azure:maintenance-configuration
azure:managed-applications-center
azure:managed-database
azure:managed-desktop
azure:managed-devops-pools
azure:managed-file-shares
azure:managed-identities
azure:managed-instance-apache-cassandra
azure:managed-service-fabric
azure:management-groups
azure:management-portal
azure:marketplace
azure:marketplace-management
azure:media
azure:media-file
azure:medtech-service
azure:mesh-applications
azure:metrics
azure:metrics-advisor
azure:microsoft-defender-easm (azure:defender-easm)
azure:microsoft-defender-for-cloud (azure:defender-for-cloud)
azure:microsoft-defender-for-iot (azure:defender-for-iot)
azure:microsoft-dev-box (azure:dev-box)
azure:microsoft-discovery (azure:discovery)
azure:mindaro
azure:mission-landing-zone
azure:mobile
azure:mobile-engagement
azure:mobile-networks
azure:modular-data-center
azure:module
azure:monitor
azure:monitor-health-models
azure:monitor-issues
azure:multi-factor-authentication
azure:multi-tenancy
azure:multifactor-authentication
azure:my-customers
azure:nat
azure:network-foundation-hub
azure:network-interfaces
azure:network-managers
azure:network-security-groups
azure:network-security-hub
azure:network-security-perimeters
azure:network-watcher
azure:notification-hub-namespaces
azure:notification-hubs
azure:offers
azure:on-premises-data-gateways
azure:open-supply-chain-platform
azure:operation-center
azure:operation-log-classic
azure:oracle-database
azure:os-images-classic
azure:osconfig
azure:outbound-connection
azure:partner-namespace
azure:partner-registration
azure:partner-topic
azure:peering-service
azure:peerings
azure:personalizers
azure:planetary-computer-pro
azure:plans
azure:policy
azure:power
azure:power-bi-embedded
azure:power-platform
azure:power-up
azure:powershell
azure:preview-features
azure:private-endpoints
azure:private-link
azure:private-link-service
azure:private-link-services
azure:process-explorer
azure:production-ready-database
azure:promethus
azure:proximity-placement-groups
azure:public-ip-addresses
azure:public-ip-addresses-classic
azure:public-ip-prefixes
azure:pubsub
azure:qna-makers
azure:quickstart-center
azure:recent
azure:recovery-services-vaults
azure:region-management
azure:relays
azure:remote-rendering
azure:reservations
azure:reserved-capacity
azure:reserved-ip-addresses-classic
azure:resource-explorer
azure:resource-graph-explorer
azure:resource-group-list
azure:resource-groups
azure:resource-guard
azure:resource-linked
azure:resource-management-private-link
azure:resource-mover
azure:resources-provider
azure:restore-points
azure:restore-points-collections
azure:route-filters
azure:route-tables
azure:rtos
azure:savings-plans
azure:scheduled-actions
azure:scheduler
azure:scheduler-job-collections
azure:scvmm-management-servers
azure:search
azure:search-grid
azure:security
azure:security-baselines
azure:sendgrid-accounts
azure:server-farm
azure:serverless-search
azure:service-catalog-mad
azure:service-endpoint-policies
azure:service-fabric-clusters
azure:service-group-relationships
azure:service-groups
azure:service-health
azure:service-providers
azure:shared-image-galleries
azure:signalr
azure:software-as-a-service
azure:software-updates
azure:solutions
azure:sonic-dash
azure:spatial-anchor-accounts
azure:speech-services
azure:spot-vm
azure:spot-vmss
azure:sql-data-warehouses
azure:sql-database
azure:sql-database-fleet-manager
azure:sql-elastic-pools
azure:sql-managed-instance
azure:sql-server
azure:sql-server-registries
azure:ssd
azure:ssh-keys
azure:ssis-lift-and-shift-ir
azure:stack-hci-premium
azure:stage-maps
azure:static-apps
azure:storage-accounts (azure:storage)
azure:storage-accounts-classic
azure:storage-actions
azure:storage-azure-files
azure:storage-container
azure:storage-explorer
azure:storage-functions
azure:storage-hubs
azure:storage-queue
azure:storage-sync-services
azure:storsimple-data-managers
azure:storsimple-device-managers
azure:stream-analytics-jobs
azure:subnet
azure:subscriptions
azure:system-topic
azure:table
azure:tag
azure:tags
azure:targets-management
azure:template-specs
azure:templates
azure:tenant-properties
azure:tenant-status
azure:test-base
azure:tfs-vc-repository
azure:time-series-data-sets
azure:time-series-insights-access-policies
azure:time-series-insights-environments
azure:time-series-insights-event-sources
azure:toolbox
azure:toolchain-orchestrator
azure:traffic-manager-profiles
azure:translator-text
azure:troubleshoot
azure:universal-print
azure:update-management-center
azure:updates
azure:user-privacy
azure:user-settings
azure:user-subscriptions
azure:users
azure:verifiable-credentials
azure:verification-as-a-service
azure:versions
azure:video-analyzers
azure:virtual-clusters
azure:virtual-enclaves
azure:virtual-instance-for-sap
azure:virtual-machine (azure:vm)
azure:virtual-machines-classic
azure:virtual-network-gateways
azure:virtual-networks
azure:virtual-networks-classic
azure:virtual-router
azure:virtual-visits-builder
azure:virtual-wan-hub
azure:virtual-wans
azure:vm-app-definitions
azure:vm-app-versions
azure:vm-image-version
azure:vm-images-classic
azure:vm-scale-sets
azure:vnet-appliance
azure:vpnclientwindows
azure:wac
azure:wac-installer
azure:web-app-database
azure:web-application-firewall-policieswaf (azure:web-application-firewall-policies-waf)
azure:web-jobs
azure:web-slots
azure:web-test
azure:website-power
azure:website-staging
azure:windows-notification-services
azure:windows10-core-services
azure:workbooks
azure:worker-container-app
azure:workflow
azure:workload-orchestration
azure:workspace-gateway
azure:workspaces

## gcp

gcp:agents
gcp:ai-hypercomputer (gcp:aihypercomputer)
gcp:ai-machine-learning (gcp:aimachinelearning)
gcp:alloy-db (gcp:alloydb)
gcp:anthos
gcp:apigee
gcp:big-query (gcp:bigquery)
gcp:business-intelligence (gcp:businessintelligence)
gcp:cloud-run (gcp:run, gcp:cloudrun)
gcp:cloud-spanner (gcp:spanner, gcp:cloudspanner)
gcp:cloud-sql (gcp:sql, gcp:cloudsql)
gcp:cloud-storage (gcp:storage, gcp:cloudstorage)
gcp:collaboration
gcp:compute
gcp:compute-engine (gcp:computeengine)
gcp:containers
gcp:data-analytics (gcp:dataanalytics)
gcp:databases
gcp:dev-ops (gcp:devops)
gcp:developer-tools (gcp:developertools)
gcp:distributed-cloud (gcp:distributedcloud)
gcp:gke
gcp:hybrid-multicloud (gcp:hybridmulticloud)
gcp:hyperdisk
gcp:integration-services (gcp:integrationservices)
gcp:looker
gcp:management-tools (gcp:managementtools)
gcp:mandiant
gcp:maps-geospatial (gcp:mapsgeospatial)
gcp:marketplace
gcp:media-services (gcp:mediaservices)
gcp:migration
gcp:mixed-reality (gcp:mixedreality)
gcp:networking
gcp:observability
gcp:operations
gcp:sec-ops (gcp:secops)
gcp:security-command-center (gcp:securitycommandcenter)
gcp:security-identity (gcp:securityidentity)
gcp:serverless-computing (gcp:serverlesscomputing)
gcp:storage
gcp:threat-intelligence (gcp:threatintelligence)
gcp:vertex-ai (gcp:vertexai)
gcp:web-mobile (gcp:webmobile)
gcp:web3

