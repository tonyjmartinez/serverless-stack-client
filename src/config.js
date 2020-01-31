export default {
  STRIPE_KEY: "pk_test_fubM7gUZUUtwBedN1dACYzPR",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-bucket-tony-m"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ivtb1b5pnf.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ca-central-1",
    USER_POOL_ID: "ca-central-1_py7b6V72w",
    APP_CLIENT_ID: "4b2d3mukq02l7e4g2p1qc5jmor",
    IDENTITY_POOL_ID: "ca-central-1:27d81374-030d-431b-918d-8dd7f11f87af"
  }
};
