
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";


export const products = [
  {
    href: "https://gomoonbeam.com",
    title: "Moonbeam",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
         Writing brilliant long form content doesn't have to feel like a chore
        </p>
        <p>
          Moonbeam is the only AI writing assistant specifically trained to help you write essays, stories, articles, blogs, and other long form content.
          Where other AI writing tools trail off into meaningless nonsense, Moonbeam shines
        </p>{" "}
      </div>
    ),
  },
];
