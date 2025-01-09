select "c"."firstName" as "firstName",
      "c". "lastName" as "lastName"
from "inventory"
join "films" using ("filmId")
join "stores" using ("storeId")
join "customers" as "c" using ("storeId")
where "films"."title" = 'Magic Mallrats'
