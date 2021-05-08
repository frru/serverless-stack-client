const config = {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'notes-app-uploads-fr',
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://6yavfm50m7.execute-api.us-east-2.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_aqKn06m3y',
    APP_CLIENT_ID: '5o5s9bob0tv1ga9ldj55da1fsh',
    IDENTITY_POOL_ID: 'us-east-2:f61e3b85-b9d7-4775-aff7-142428a546f2',
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};
export default config;