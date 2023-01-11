import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import { parseDBInfo } from "./resultParsers";

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getDBInfo(database_id: string) {
  const result = await notion.databases.query({
    database_id: database_id,
  });
  return parseDBInfo(result.results);
}

export async function getBlockInfo(pageID: string) {
  const { results: blockInfo } = await notion.blocks.children.list({
    block_id: pageID,
  });
  return blockInfo;
}
