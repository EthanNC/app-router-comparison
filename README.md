## Next.js App Router Comparison

As I was reading [Everything About SvelteKit Routing](https://joyofcode.xyz/sveltekit-routing), I came to conclusion that Next.js App router has many similarities with SvelteKit's router. So I decided to implement the same app from the article in Next.js and compare the two.

These are my opinions and I'm not trying to be objective. I'm just trying to see how Next.js compares to SvelteKit and what I like and dislike between the two.

| Feature         | Next.js App Router | SvelteKit          | Same/Very Similar  |
| :-------------- | :----------------- | :----------------- | ------------------ |
| Pages           |                    |                    | :white_check_mark: |
| Layouts         |                    |                    | :white_check_mark: |
| Error           |                    | :white_check_mark: |
| Links           |                    | :white_check_mark: |                    |
| Dynamic Routes  |                    |                    | :white_check_mark: |
| Mutiple Params  |                    |                    | :white_check_mark: |
| Optional Params | :x:                | :white_check_mark: |                    |

### Next.js wins

- JSX is just better than Svelte's template syntax.
- File naming is more natural. Use .tsx instead of .svelte and a preappended "+"

### SvelteKit wins

- It's more natural (traditional) to add a css preset from a cdn in the `app.html` file than the RootLayout component.
- CSS styles are scoped to the component by default. In Next.js, you have to use CSS modules (or css-in-js/tailwind) to achieve the same.
- SvelteKit Error page seems more robust. Next.js App router convention splits the error page into two files. `not-found.tsx` and `error.tsx`. SvelteKit has a single `error.svelte` file that handles both cases.
- Can use `<a>` to get preloaded links. In Next.js, you have to use `<Link>` to get preloaded links.
- [[lang]] is a valid optional parameter, whereas with Next.js Optional route parameters are not yet supported
