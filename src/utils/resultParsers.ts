import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function parseDBInfo(result: PageObjectResponse[]) {
  console.log(result[0].properties.Genre);
  return result.map(({ properties, id, icon, created_time, archived, url }) => {
    let title, emoji, user, rating, image, genre, color, author;

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

    if (properties.Genre.type === "select") {
      genre = properties.Genre.select.name;
      color = properties.Genre.select.color;
    }

    if (properties.Author.type === "rich_text") {
      author = properties.Author.rich_text[0].plain_text;
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
      author,
    };
  });
}
