/**
 * Renders a JSON-LD structured-data <script>. The payload is stringified and
 * `<` is escaped to `<` to prevent breaking out of the script context.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
