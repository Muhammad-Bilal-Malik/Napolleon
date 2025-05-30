import NewsCard from "./NewsCard";
import NApic1 from "../Assets/Images/NApic1.svg";
import napic2 from "../Assets/Images/napic2.svg";
import napic3 from "../Assets/Images/napic3.svg";
import napic4 from "../Assets/Images/napic4.svg";
import previous from "../Assets/Images/previous.svg";
import next from "../Assets/Images/next.svg";
import ArticlesCategoriesCard from "./ArticlesCategoriesCard";
import PopularArticlesCard from "./PopularArticlesCard";
const Blog = () => {
  return (
    <div className="max-w-[1366px]  mx-auto">
      <div className="w-[85.36%] mx-auto">
        <h1 className="font-bold text-[40px] mx-auto text-center mb-7">Blog</h1>
        <div className="main-screen flex gap-5">
          <div className="left-side">
            <ArticlesCategoriesCard />

            <PopularArticlesCard />
          </div>
          <div className="article-cards flex flex-wrap justify-center items-center gap-3 mb-16 relative">
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={NApic1}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={napic2}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={napic3}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={napic4}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={NApic1}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={napic4}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={napic3}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={napic2}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={napic3}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={napic4}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={NApic1}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={napic3}
            />
            <NewsCard
              width="w-[276px]"
              textSize="text-[11px]"
              topic="Predictions"
              picture={napic3}
            />
            <div className="pages mt-16 flex items-center justify-center gap-2 absolute -bottom-20">
              <span className="bg-white px-[18px] py-2.5 rounded-md text-[#162F42]">
                <img src={previous} alt="" />
              </span>
              <span className="bg-white px-[18px] py-2.5 rounded-md text-[#162F42]">
                1
              </span>
              <span className="bg-white px-[18px] py-2.5 rounded-md text-[#162F42]">
                2
              </span>
              <span className="bg-[#162F42] px-[18px] py-2.5 rounded-md text-[#FFFFFF]">
                3
              </span>
              <span className="bg-white px-[18px] py-2.5 rounded-md text-[#162F42]">
                4
              </span>
              <span className="bg-white px-[18px] py-2.5 rounded-md text-[#162F42]">
                <img src={next} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
