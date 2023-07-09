import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs"
import { Construct } from "constructs";

export interface SwiftSurgeLambdaProps {
    funcitonName: string,
    entry: string
}


export class SwiftSurgeLambda extends Construct {
    public readonly lambda: NodejsFunction;
    constructor(scope: Construct, id: string, props: SwiftSurgeLambdaProps) {
        super(scope, id);
        this.lambda =  new NodejsFunction(scope, 'function', {
            functionName: props.funcitonName,
            entry: props.entry
        })
    }
}

