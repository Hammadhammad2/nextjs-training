import { getDictionary } from "../../[lang]/dictionaries.js";

export default async function Page({ params: { language } }) {
  const dict = await getDictionary(language);
  return (
    <div>
      <h1>{dict.products.cart}</h1>{" "}
    </div>
  );
}
