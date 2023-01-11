import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import initNotion from "./initNotion";

let notion = initNotion();

export default async function getAsyncDBInfo(database_id: string) {
  const result = await notion.databases.query({
    database_id: database_id,
  });
  return { notion, results: parseDBInfo(result.results) };
}

function parseDBInfo(result: PageObjectResponse[]) {
  return result.map(
    ({ properties, id, icon, created_time, created_by, archived, url }) => {
      let title, emoji, user;
      if (properties.Name.type === "title") {
        title = properties.Name.title[0].plain_text;
      }
      if (icon?.type === "emoji") {
        emoji = icon.emoji;
      }
      if (created_by.object === "user") {
        user = created_by.id;
      }
      return { title, id, emoji, created_by, archived, created_time, url };
    }
  );
}
