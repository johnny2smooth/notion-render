import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function parseDBInfo(result: PageObjectResponse[]) {
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
