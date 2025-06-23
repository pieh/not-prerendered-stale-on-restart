# Not prerendered page gets stale on server restart

Steps:

1. Clone the repository.
2. Install deps, build and start the server:
   ```bash
   npm install
   npm run build
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Hit not-prerendered page (using example URL, but any will work as there is cacheable catch-all page)

   ```bash
   curl --head http://localhost:3000/not-prerendered
   ```

   Notice the response header: `x-nextjs-cache: MISS` (expected, this page was not prerendered)

   Hit it again:

   ```bash
   curl --head http://localhost:3000/not-prerendered
   ```

   Notice the response header: `x-nextjs-cache: HIT` (expected, this page was generated with previous request and now cached response is served)

5. Kill / interrupt the next server and start it again.
6. Hit the same page again:
   ```bash
   curl --head http://localhost:3000/not-prerendered
   ```
   Notice the response header: `x-nextjs-cache: STALE` (unexpected, this page should be fresh for a year, but it is stale now)
