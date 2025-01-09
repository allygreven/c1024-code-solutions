select "p"."amount" as "payment",
      "c"."firstName" as "customer",
      "c"."lastName"
from "payments" as "p"
join "customers" as "c" using ("customerId")
