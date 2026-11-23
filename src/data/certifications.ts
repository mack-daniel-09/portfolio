// ---------------------------------------------------------------------------
// Certifications
//
// HOW TO ADD A CERTIFICATE
//   1. Save the certificate image in:  public/certificates/
//      Use a short lowercase name with dashes, e.g. "meta-frontend-developer.jpg".
//      JPG, PNG, or WebP all work. A landscape image around 1600px wide looks best.
//   2. Replace one of the placeholder entries below (or add a new one) and set
//      `image` to the path WITHOUT "public", e.g. "/certificates/meta-frontend-developer.jpg".
//   3. Optional: add `credentialUrl` (the verify link from the issuer) to show a
//      "Verify credential" button.
//   4. Remove the `placeholder: true` line.
//
// Entries with `placeholder: true` show a "Coming soon" card on the site.
// Delete all placeholders when you have real certificates, or keep them as
// a sign that more are on the way.
// ---------------------------------------------------------------------------

export type Certification = {
  name: string;
  issuer: string;
  /** e.g. "March 2027" */
  date: string;
  /** Path inside /public, e.g. "/certificates/my-cert.jpg" */
  image?: string;
  /** Link to verify the certificate on the issuer's site. */
  credentialUrl?: string;
  /** Shows a "Coming soon" card instead of a real certificate. */
  placeholder?: boolean;
};

export const certifications: Certification[] = [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    placeholder: true,
  },
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    placeholder: true,
  },
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    placeholder: true,
  },
];
