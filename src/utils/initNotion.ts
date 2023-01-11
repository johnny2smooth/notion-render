import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

export default function initNotion() {
  return new Client({
    auth: process.env.NOTION_TOKEN,
  });
}
