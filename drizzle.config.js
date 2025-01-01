/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:9xtfGTDn1mQb@ep-silent-hill-a15bqnyx.ap-southeast-1.aws.neon.tech/ai-interview-mock?sslmode=require',
  }
};