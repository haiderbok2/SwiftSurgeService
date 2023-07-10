import { 
    QueryCommand,
    UpdateCommand,
    UpdateCommandInput,
    GetCommand,
    GetCommandInput,
    PutCommand,
    PutCommandInput

} from "@aws-sdk/lib-dynamodb"

export function buildPutCommand(tableName: string, entry: any): PutCommand {
    const putRequest: PutCommandInput = { Item: entry, TableName: tableName};
    return new PutCommand(putRequest);
}

export function buildGetCommand(tableName: string, entry: any): GetCommand {
    const getRequest: GetCommandInput = {Key: entry, TableName: tableName};
    return new GetCommand(getRequest);
}

export function buildUpdateCommand(tableName: string, entry: any, updateExpression: string, expressionAttributeValues: any): UpdateCommand{
    const updateRequest: UpdateCommandInput = {
        Key: entry,
        TableName: tableName,
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: expressionAttributeValues
    };

    return new UpdateCommand(updateRequest);
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