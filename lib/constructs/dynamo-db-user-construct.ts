import { Table, AttributeType } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export interface DynamoDbUserTableProps {

}

export class DynamoDbUserTable extends Construct {
    public readonly userTable: Table;
    
    constructor(scope: Construct, id: string, props: DynamoDbUserTableProps) {
        super(scope, id);

        this.userTable = new Table(scope, 'Table', {
            partitionKey: { name: "uuid", type: AttributeType.STRING }
        })
    }
}