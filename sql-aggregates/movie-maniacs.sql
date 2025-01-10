select "c"."firstName" as "firstName",
  "c"."lastName" as "lastName",
  sum("p"."amount") as "totalSpent"
  from "customers" as "c"
  join "payments" as "p" on "c"."customerId" = "p"."customerId"
  group by "c"."customerId", "c"."firstName", "c"."lastName"
  order by "totalSpent" desc;
