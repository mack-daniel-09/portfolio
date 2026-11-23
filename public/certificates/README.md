# Certificates

Save your certificate images in this folder.

1. Use a short lowercase name with dashes, for example `meta-frontend-developer.jpg`.
   JPG, PNG, or WebP all work. A landscape image around 1600px wide looks best.
2. Open `src/data/certifications.ts` and replace a placeholder entry:

```ts
{
  name: "Meta Front-End Developer",
  issuer: "Coursera",
  date: "March 2027",
  image: "/certificates/meta-frontend-developer.jpg",
  credentialUrl: "https://www.coursera.org/verify/XXXX", // optional
},
```

The `image` path starts with `/certificates/`, without `public`.
Remove `placeholder: true` from any entry you fill in.
