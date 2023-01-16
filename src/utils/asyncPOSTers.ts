import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function postPage(database_id: string, data?: any) {
  const result = await notion.pages.create({
    cover: null,
    icon: { type: "emoji", emoji: "🕓" },
    parent: {
      type: "database_id",
      database_id: database_id,
    },
    properties: {
      Name: {
        id: "title",
        title: [
          {
            text: {
              content: "Fun",
            },
          },
        ],
      },
      Person: {
        id: "people",
        people: [
          {
            id: "45fff0d2-8a59-4b5b-9909-f5df28f5bc1a",
            person: {
              email: "jbp13@uw.edu",
            },
          },
        ],
      },
      Rating: {
        id: "rich_text",
        rich_text: [
          {
            text: {
              content: "⭐️⭐️⭐️",
            },
          },
        ],
      },
      Genre: {
        id: "select",
        select: {
          name: "Action",
        },
      },
      Author: {
        id: "rich_text",
        rich_text: [
          {
            text: {
              content: "John Bon Jovi",
            },
          },
        ],
      },
    },
  });
  console.log(result);
  return result;
}
