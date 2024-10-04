import keystatic from "@keystatic/astro";
import webmanifest from "astro-webmanifest";
const webmanifestConfig = {
  config: {
    iconPurpose: ["maskable"],
    // default - undefined
    createFavicon: true,
    // default - true
    insertFaviconLinks: true,
    // default - true
    insertManifestLink: true,
    // default - true
    // crossOrigin: "use-credentials", // default - 'anonymus'
    insertThemeColorMeta: true,
    // default - true
    insertAppleTouchLinks: true,
    // default - false
    indent: "    ",
    // default - '    '
    eol: "\n",
    // default - '\n'
    outfile: "manifest.webmanifest" // default - 'manifest.webmanifest'
  },
  icon: "./public/favicon.svg",
  name: "Webmanifest test",
  short_name: "Test",
  description: "It's a basic test of the `astro-webmanifest` integration",
  categories: ["category first", "category second"],
  lang: "ru-RU",
  dir: "auto",
  // iarc_rating_id: "e84b072d-71b3-4d3e-86ae-31a8ce4e53b7",

  // id: "id",
  start_url: "/",
  scope: "/",
  theme_color: "#fff",
  background_color: "#fff",
  display: "standalone",
  display_override: ["browser", "fullscreen"],
  orientation: "portrait-primary",
  // protocol_handlers: [
  // 	{
  // 		protocol: "web+jngl",
  // 		url: "/lookup?type=%s",
  // 	},
  // 	{
  // 		protocol: "web+jnglstore",
  // 		url: "/shop?for=%s",
  // 	},
  // ],

  // prefer_related_applications: true,
  // related_applications: [
  // 	{
  // 		platform: "play",
  // 		url: "https://play.google.com/store/apps/details?id=com.example.app1",
  // 		id: "com.example.app1",
  // 	},
  // 	{
  // 		platform: "itunes",
  // 		url: "https://itunes.apple.com/app/example-app1/id123456789",
  // 	},
  // ],

  screenshots: [{
    src: "./public/default-ogImage.png",
    sizes: "1280x630",
    type: "image/png",
    platform: "wide",
    label: "Homescreen of Awesome App"
  }, {
    src: "./public/default-ogImage.png",
    sizes: "1280x630",
    type: "image/png",
    platform: "wide",
    label: "List of Awesome Resources available in Awesome App"
  }],
  shortcuts: [{
    name: "Today's agenda",
    url: "/posts",
    description: "List of events planned for today"
  }
  // {
  // 	name: "",
  // 	url: "/",
  // 	description: "",
  // },
  ]
};
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";
import metaTags from "astro-meta-tags";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";
import { config } from "/src/settings";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: `${config.site.base.url}`,
  rewriting: true,
  build: {
    format: "file"
  },
  integrations: [keystatic(),
  // cloudflare(),
  // vercel(),
  sitemap({
    filter: page => page !== `${config.site.base.url}/keystatic`
  }), tailwind({
    applyBaseStyles: false
  }), compress(), mdx(), react(), markdoc(), metaTags(), pagefind(), icon({
    include: {
      mdi: ["*"],
      ic: ["*"],
      "material-symbols": ["*"]
    }
  }), webmanifest(webmanifestConfig)],
  output: "hybrid"
  // adapter: cloudflare(),
  // УДАЛИТЬ после тестов!
  // adapter: vercel(),
  ,
  adapter: netlify()
});