/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_n3JVDSCR1fbi@ep-empty-night-a16xdsp2-pooler.ap-southeast-1.aws.neon.tech/ai-interview?sslmode=require&channel_binding=require',
  }
};