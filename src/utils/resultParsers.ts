import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function parseDBInfo(result: PageObjectResponse[]) {
  return result.map(({ properties, id, icon, created_time, archived, url }) => {
    let title, emoji, user, rating, image, genre, color, cover;
    if (properties.Name.type === "title") {
      title = properties.Name.title[0].plain_text;
    }

    if (icon?.type === "emoji") {
      emoji = icon.emoji;
    }

    if (properties.Rating.type === "rich_text") {
      rating = properties.Rating.rich_text[0].plain_text;
    }

    if (properties.Person.type === "people") {
      user = properties.Person.people[0].name;
      if (properties.Person.people[0].avatar_url !== null) {
        image = properties.Person.people[0].avatar_url;
      } else {
        image =
          "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png";
      }
    }

    if (properties.BookCover.type === "files") {
      if (properties.BookCover.files[0].type === "file") {
        cover = properties.BookCover.files[0].file.url;
      } else if (properties.BookCover.files[0].type === "external") {
        cover = properties.BookCover.files[0].name;
      }
    }

    if (properties.Genre.type === "multi_select") {
      genre = properties.Genre.multi_select[0].name;
      color = properties.Genre.multi_select[0].color;
    }

    return {
      properties,
      title,
      id,
      emoji,
      user,
      archived,
      created_time,
      url,
      rating,
      image,
      genre,
      color,
      cover,
    };
  });
}
