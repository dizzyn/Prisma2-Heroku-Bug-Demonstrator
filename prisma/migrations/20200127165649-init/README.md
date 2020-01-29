# Migration `20200127165649-init`

This migration has been generated by Tom Randus at 1/27/2020, 4:56:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Apple" (
    "color" TEXT NOT NULL DEFAULT '' ,
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "id" TEXT NOT NULL  ,
    "updatedAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200127165649-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,23 @@
+datasource prod {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+  enabled  = env("DATASOURCE_PROD")
+}
+
+datasource dev {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+  enabled  = env("DATASOURCE_DEV")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Apple {
+  id            String  @default(uuid()) @id
+  createdAt     DateTime @default(now())
+  updatedAt     DateTime @updatedAt
+  color         String
+}
+
```

