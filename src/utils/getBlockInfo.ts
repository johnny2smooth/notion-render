import initNotion from "./initNotion";
let notion = initNotion();
export default async function getBlockInfo(pageID: string) {
  const { results: blockInfo } = await notion.blocks.children.list({
    block_id: pageID,
  });
  return blockInfo;
}

// export const { results: dbResults } = await notion.databases.query({
//   database_id: "be4a562f25864a6c99b89b9baab56055",
// });

// const { results: blockResult } = await notion.blocks.children.list({
//   block_id: dbInfo[1].id,
// });

// console.log(blockResult);

// const blocks = await Promise.all(
//   pageIDs.map(async (pageId) => {
//     const blockChildren = await notion.blocks.children.list({
//       block_id: pageId,
//     });
//     return blockChildren.results;
//   })
// );

// console.log(blocks);

// const blocks = await notion.blocks.retrieve({
//   block_id: response.results[0].id,
// });

// console.log(testPageContents)

// const blockChildren = await notion.blocks.children.list({
// 	block_id: pageId
// })

// let image;

// const blockTypes = blockChildren.results.map((block) => block.type);

// console.log(blockTypes)

// let blockArray: string[] = [];

// blockChildren.results.forEach((block) => {
// 	let type = block.type;
// 	console.log(type)
// 	if(block.type ===  'heading_1') {
// 		let title = block.heading_1.rich_text[0].plain_text;
// 		blockArray.push(title);
// 	}
// 	if(block.type === 'paragraph') {
// 		let paragraph = block.paragraph.rich_text[0].plain_text;
// 		blockArray.push(paragraph);
// 	}
// 	if(block.type === 'bulleted_list_item') {
// 		let bullet = block.bulleted_list_item.rich_text[0].plain_text;
// 		blockArray.push(bullet);
// 	}
// 	if(block.type === "image"){
// 		image = block["image"].type === "external" ? block["image"].external.url : block["image"].file.url;
// 	}
// })
