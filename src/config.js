const dev = {
  STRIPE_KEY: "pk_test_fubM7gUZUUtwBedN1dACYzPR",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-s84vq1ntaszk"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.blogplusminus.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_nMPBxIMMo",
    APP_CLIENT_ID: "5p9tnib8nml9t881717np4neln",
    IDENTITY_POOL_ID: "us-east-1:b913e60d-fc31-42ff-86f1-e4a13121ff01"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_fubM7gUZUUtwBedN1dACYzPR",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1xs2y6hc90k56"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.blogplusminus.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_1iVf9mSC2",
    APP_CLIENT_ID: "6r5v5p6gaadgd2hgnpvbjc3haf",
    IDENTITY_POOL_ID: "us-east-1:b1decc58-47ed-4ac7-941b-eb9b304c7e2d"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
