
## 1) install serverless
## 2) connect serverless with aws
  cmd: `serverless config credentials --provider aws --key <key> --secret <secret-key>`

## 3) create serverless templete
  -  cmd : `serverless create -t projectName`
  - it give files: 1) serverless.yml

----------------------
# `Every serverless templete:`
```
1] org:                   //Specifies the organization name
2] app:                   //Defines the application name
3] service:               // The service name is crucial for deployment and is used to
                           // create and manage AWS resources related to the service.
4] plugin :                // Lists the plugins used for the Serverless Framework.
5] provider:
    1) name                // name of provider  ex. aws
    2) runtime             // runtime environment ex. node
    3) region               // region where it will be deployed
    4) iam :                //Configures the IAM (Identity and Access Management) role
                            // used by the ALL Lambda functions.
        1) role:            //This IAM role determines what permissions the Lambda functions have.
    5) vpc:                 //Configures the Virtual Private Cloud (VPC) settings for the Lambda functions  
                            
        1) securityGroupIds: //Specifies the IDs of the security groups associated with the Lambda functions.//
                            //They control inbound and outbound traffic,
                             allowing you to define what type of traffic is 
                             allowed to access your instances and 
                             what traffic is restricted.
                             //Security groups allow you to specify the source IP addresses or 
                             other security groups that are allowed to access your EC2 instances. 
                             You can define rules to permit specific ports and protocols, such as
                              HTTP (port 80), HTTPS (port 443), SSH (port 22), etc. This helps to
                               ensure that only authorized users and services can access your instances.
        2) subnetIds :       //: Lists the IDs of the private subnets in the VPC where the Lambda functions will be deployed
    6) environment :         //for variables
6] custom:
7] functions:   // can give IAM role access for resources to each lambda function seperately as well
8] resources:
    1) Resources:
    -----------------------------------------------------
        1) DynamoDB table def Ex:
        PlaylistsDynamoDBTable:
            Type: AWS::DynamoDB::Table
            Properties:
               TableName: ExampletableName
                AttributeDefinitions:
                  - AttributeName: id
                    AttributeType: S
                  - AttributeName: key_2
                    AttributeType: S
                  - AttributeName: key_3
                    AttributeType: S
                  - AttributeName: key_4
                    AttributeType: N
                 
                KeySchema:
                  - AttributeName: id
                    KeyType: HASH
                  - AttributeName: key_2
                    KeyType: RANGE
                BillingMode: PAY_PER_REQUEST
                
                GlobalSecondaryIndexes:
                  - IndexName: key_3-index
                    KeySchema:
                      - AttributeName: key_3
                        KeyType: HASH
                    Projection:
                      ProjectionType: ALL
                   
                    
                  - IndexName: key_4-index
                    KeySchema:
                      - AttributeName: key_4
                        KeyType: HASH
                    Projection:
                      ProjectionType: ALL
                 
                  - IndexName: prescribe_date-index
                    KeySchema:
                      - AttributeName: key_4
                        KeyType: HASH
                    Projection:
                      ProjectionType: ALL
 
        
        --------------------------------------------
        2) RDSProxy:
                Type: AWS::RDS::DBProx
        -------------------------------------------
        3)security groups
                    
            LambdaSecurityGroup:
              Type: AWS::EC2::SecurityGroup
              Properties:
                VpcId: ${self:custom.SERV_VPC_ID}
                SecurityGroupIngress:
                 IpProtocol: -1
                 CidrIp: "0.0.0.0/0"
                 Description: Allow all outbound traffic
                            GroupDescription: "Security group for Lambdas"
                Tags:
                  - Key: "Name"
                    Value: "LambdaSecurityGroup"
                    
            RDSSecurityGroup:
              Type: AWS::EC2::SecurityGroup
              Properties:
                GroupDescription: "Security group for RDS"
                VpcId: ${self:custom.SERV_VPC_ID}
                SecurityGroupIngress:
                  - IpProtocol: tcp
                    FromPort: 0
                    ToPort: 3306
                    CidrIp: "0.0.0.0/0"
                Tags:
                  - Key: "Name"
                    Value: "RDSSecurityGroup"
        ----------------------------------------------
        4) for QUEUE:
                receiverQueue:
                    Type: AWS::SQS::Queue
                    Properties:
                      QueueName: ${self:custom.SQS_MENTOR_QUEUE_NAME}
                      VisibilityTimeout: 900
                      MaximumMessageSize: 2048
                      RedrivePolicy: 
                        deadLetterTargetArn: 
                          Fn::GetAtt: 
                            - "deadLetterQueue"
                            - "Arn"
                        maxReceiveCount: 5

//--------------------------------------------------------
      Every Lambda Fucntion needs IAM Role
----------------------------------------------------------
Example for inline IAM role:

        functions:
          myLambdaFunction:
            handler: handler.myFunction
            events:
              - http:
                  path: /myendpoint
                  method: get
        
            # Inline IAM policy for the Lambda function
            iamRoleStatements:
              - Effect: Allow
                Action:
                  - dynamodb:GetItem
                  - dynamodb:PutItem
                Resource: "arn:aws:dynamodb:us-east-1:123456789012:table/MyTable"
```