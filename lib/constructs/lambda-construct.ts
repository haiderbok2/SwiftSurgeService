import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs"
import { Construct } from "constructs";
import { Effect, Policy, PolicyStatement } from "aws-cdk-lib/aws-iam";

export interface SwiftSurgeLambdaProps {
    funcitonName: string,
    entry: string
}


export class SwiftSurgeLambda extends Construct {
    public readonly lambda: NodejsFunction;
    constructor(scope: Construct, id: string, props: SwiftSurgeLambdaProps, tableARN: string ) {
        super(scope, id);
        this.lambda =  new NodejsFunction(scope, 'function', {
            functionName: props.funcitonName,
            entry: props.entry,
        });

        const lambdaDDBPolicy = new PolicyStatement({
                actions: [
                    "dynamodb:BatchGetItem",
                    "dynamodb:DescribeTable",
                    "dynamodb:Update*",
                    "dynamodb:Get*",
                    "dynamodb:Query",
                    "dynamodb:PutItem"
                ],
                resources: [
                    tableARN
                ],
                effect: Effect.ALLOW
                

            });

        this.lambda.addToRolePolicy(lambdaDDBPolicy);



    }
}

