import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

class DynamoDbClientWrapper{
    dynamoDbDocumentClient: DynamoDBDocumentClient;
    
    constructor() {
        const client = new DynamoDBClient({})
        this.dynamoDbDocumentClient =  DynamoDBDocumentClient.from(client);
     }

     public queryUser() {
        this.dynamoDbDocumentClient.send
     }

}