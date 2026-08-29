const DEFAULT_WORDPRESS_URL = "https://cms.nationalengrs.com";

export const WORDPRESS_URL = (
  process.env.WORDPRESS_URL || DEFAULT_WORDPRESS_URL
).replace(/\/$/, "");
