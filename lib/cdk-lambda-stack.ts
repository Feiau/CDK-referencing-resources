import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class lambdaStack extends cdk.Stack {

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler'
    })
    console.log("=========Created in CDK project============")
    for (const child in hello.node.findAll()) {
      const obj = hello.node.findAll()[child].node.id
      console.log(obj)
    }

    const importedLambda = lambda.Function.fromFunctionName(this, 'function', 'shixiang0714-3-us-east-1-lambda')

    console.log("=========fromLookUp============")
    for (const child in importedLambda.node.findAll()) {
      const obj = importedLambda.node.findAll()[child].node.id
      console.log(obj)
    }
    console.log("=========End============")
  }
}

   

