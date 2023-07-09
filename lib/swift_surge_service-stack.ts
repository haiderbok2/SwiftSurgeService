import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SwiftSurgeLambda } from "./constructs/lambda-construct";
import path  from "path";
import { DynamoDbUserTable } from './constructs/dynamo-db-user-construct';


export class SwiftSurgeServiceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new SwiftSurgeLambda(this, "location", {
      funcitonName: "update-user-location",
      entry: path.join(__dirname, "handlers/location-handler.ts")
    });

    new DynamoDbUserTable(this, "table", {})

  }
}
