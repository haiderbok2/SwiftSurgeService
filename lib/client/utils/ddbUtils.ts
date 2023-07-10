import { 
    QueryCommand,
    UpdateCommand,
    GetCommand,
    PutCommand,
    PutCommandInput

} from "@aws-sdk/lib-dynamodb"
import { KeyCondition } from "aws-cdk-lib/aws-appsync";

export function buildPutCommand(tableName: string, entry: any): PutCommand {
    const putRequest: PutCommandInput = { Item: entry, TableName: tableName};
    return new PutCommand(putRequest);
}

export function buildQueryCommand(
    params: {[k: string]: any}, 
    tableName: string,
    keyConditionExpression: string,
    expressionAttributeNames?: {[k: string]: any},
    indexName?: string,
    filterExpression?: string,
) {
    return new QueryCommand({
        TableName: tableName,
        IndexName: indexName,
        KeyConditionExpression: keyConditionExpression,
        ExpressionAttributeNames: expressionAttributeNames,
        FilterExpression: filterExpression,
        ExpressionAttributeValues: buildExpressionAttributeValues(params)
    }) 

 }

const buildExpressionAttributeValues = (fieldsToQuery: {[k: string]: any}) => {
    const expressionAttributeValues: any = {};
    for(const [key, value] of Object.entries(fieldsToQuery)) {
        expressionAttributeValues[`:${key}`] = value
    } 

    return expressionAttributeValues;
}