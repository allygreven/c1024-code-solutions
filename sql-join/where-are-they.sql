select "a"."line1" as "address",
      "a"."district",
      "c"."name" as "city",
      "d"."name" as "country"
from "cities" as "c"
join "addresses" as "a" using ("cityId")
join "countries" as "d" using ("countryId")
