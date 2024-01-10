# Demo of hmr issue with Next.js + prisma

## Requirements

Node 18+, pnpm 8+

## Instructions

1. Run:

   ```
   pnpm install
   pnpm prisma db push
   pnpm next dev
   ```
2. Edit `src/db.ts` file 10 times. It has to be an actual change, not just re-saving same file. Easiest way is to increment `ID` variable in that file.
3. In next.js server logs, you would see Prisma's warning about too many clients being instantiated.
4. Go to `src/page.tsx` and replace `db` import with `ds-singleton`. 
5. Restart next dev server.
6. Repeat the same editing process for `db-singleton.ts` file. Warning will not appear.