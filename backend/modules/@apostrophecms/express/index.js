export default {
  options: {
    session: {
      secret: process.env.APOS_SESSION_SECRET || "cms-astro-v1-dev-session-secret"
    }
  }
};
