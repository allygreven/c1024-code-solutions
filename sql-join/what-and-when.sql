select "f"."releaseYear" as "filmReleaseYear",
      "f"."title",
      "g"."name" as "genre",
      "fg"."filmId" as "id"
from "films" as "f"
join "filmGenre" as "fg" using ("filmId")
join "genres" as "g" using ("genreId")
where "title" = 'Boogie Amelie'
