select "a"."firstName" as "firstName",
      "a"."lastName" as "lastName"
from "castMembers" as "c"
join "films" using ("filmId")
join "actors" as "a" using ("actorId")
where "films"."title" = 'Jersey Sassy'
