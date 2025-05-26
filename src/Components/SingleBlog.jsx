import singleblogimage from "../Assets/Images/singleblogimage.svg";
import calendaricon from "../Assets/Images/calendaricon.svg";
import iconcatagory from "../Assets/Images/iconcatagory.svg";
import NewsCard from "./NewsCard";
import napic2 from "../Assets/Images/napic2.svg";
import napic3 from "../Assets/Images/napic3.svg";
import napic4 from "../Assets/Images/napic4.svg";
import Button from "./Button";
import name from "../Assets/Images/name.svg";
import email from "../Assets/Images/email.svg";
import messageIcon from "../Assets/Images/messageIcon.svg";
import CommentCard from "./CommentCard";
import PopularArticlesCard from "./PopularArticlesCard";
import ArticlesCategoriesCard from "./ArticlesCategoriesCard";

const SingleBlog = () => {
  return (
    <div className="page-wraper max-w-[1366px] w-[86.31%] pb-5 mx-auto">
      <div className="flex justify-between">
        <div className="left-side">
          <ArticlesCategoriesCard />
          <PopularArticlesCard />
        </div>
        <div className="right-side w-[867px]">
          <h1 className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <span className="w-full bg-[#D3D3D3] h-[1px] block"></span>
          <div className="py-3.5 flex gap-3">
            <div className="flex items-center gap-1">
              <img src={calendaricon} alt="" />
              <span className="pt-[1px]">Date: 2024/05/01</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={iconcatagory} alt="" />
              <span className="pt-[1px]">Category: laborum</span>
            </div>
          </div>
          <img src={singleblogimage} alt="" />
          <p className="pt-2.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
            est odio, tempore dolorem doloremque placeat dolor vero. Commodi et
            ducimus fugit. Cupiditate repellendus, voluptatibus hic dolorum
            quibusdam molestias inventore? Quas nam sapiente voluptas similique,
            cum quisquam eligendi architecto ullam nulla? Incidunt molestias
            suscipit atque, minima repellat asperiores dolores provident magnam
            exercitationem, est eligendi, temporibus voluptatem dignissimos?
            Modi, at sit! Architecto, temporibus quos? Distinctio molestiae
            labore fugiat autem sequi nihil eos neque! Esse suscipit, dolore
            maiores, saepe ut ad quaerat accusantium, quis eum incidunt minima
            ipsum? Adipisci distinctio ab iure! Optio,
            <ul className="list-disc pl-5">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
              <li>Lorem ipsum dolor sit amet consectetur</li>
              <li>Lorem ipsum dolor sit amet </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
              <li>Lorem ipsum dolor sit </li>
            </ul>
            similique? Quae dolorum inventore, repudiandae aliquid pariatur
            provident unde repellat eum facere dolore, magnam culpa alias totam
            cumque vel sint laboriosam voluptatem cupiditate officia eveniet,
            adipisci deserunt delectus corrupti? Quas, dignissimos. Accusamus
            officiis inventore ex non eum quisquam repellat dolore blanditiis
            cum esse quos odio eius mollitia, repudiandae nobis! Placeat
            mollitia minus dolore deserunt corrupti voluptatum, minima dolor
            accusamus? Reiciendis sequi laboriosam labore sint architecto nulla
            obcaecati consequuntur quibusdam magni veniam? Perferendis, minus.
            Blanditiis eaque laudantium, voluptatem ad necessitatibus delectus
            nam molestias est ut corrupti quaerat hic voluptate nostrum. Nihil
            dolores at, vero, veritatis animi earum tenetur eligendi tempora,
            odit dolor reiciendis. Perferendis eum mollitia, facilis quaerat
            deleniti, repudiandae, nostrum ipsa atque aliquam fugiat rerum est
            praesentium molestias aspernatur! Alias exercitationem possimus
            dicta porro nobis aperiam voluptatibus magni similique quibusdam
            tenetur laborum eligendi laudantium, vero impedit. Beatae quos
            excepturi rem sunt ullam, fugit ipsa quas, neque delectus totam
            ducimus. Obcaecati nostrum suscipit corporis eaque reiciendis iste
            qui non, ipsam a deserunt. Soluta voluptate tempora praesentium quia
            perferendis iure quam, nam nobis, porro sequi a sint explicabo quo
            tenetur ipsa. Veniam sint quibusdam molestias sed reprehenderit
            dolore eos deleniti, voluptatum placeat exercitationem at ipsam quas
            enim nesciunt assumenda porro minus ut eveniet modi eius non
            dolorem! Vel beatae reprehenderit necessitatibus.
          </p>
          <span className="w-full bg-[#D3D3D3] mt-4 h-[1px] block"></span>
          <p className="mt-3 text-[#808080]">
            Tags:
            <span className="border border-[#808080] p-1 rounded-md text-[12px]">
              petrochemical
            </span>
            <span className="border border-[#808080] p-1 rounded-md ml-2 text-[12px]">
              laborum
            </span>
          </p>
          <h1 className="font-bold text-[35px] text-center">Similar article</h1>
          <div className="flex gap-5">
            <NewsCard width="w-[276px]" topic="predictions" picture={napic2} />
            <NewsCard width="w-[276px]" topic="Surveys" picture={napic3} />
            <NewsCard width="w-[276px]" topic="predictions" picture={napic4} />
          </div>
          <h1 className="font-bold text-[35px] text-[#162F42] text-center mt-20">
            User comments
          </h1>
          <form action="">
            <div className="flex gap-[19px] mb-6">
              <div className="flex flex-col  gap-3">
                <div className="flex gap-0.5">
                  <img className=" pr-1 " src={name} alt="" />
                  <label htmlFor="">Full Name</label>
                </div>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-white rounded-lg pl-5 py-4 w-80 focus:outline-none"
                />
              </div>
              <div className="flex flex-col  gap-3">
                <div className="flex gap-0.5">
                  <img className="pr-1 " src={email} alt="" />
                  <label htmlFor="">Email</label>
                </div>

                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="bg-white rounded-lg pl-5 py-4 w-80 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <div className="flex gap-1 mb-3.5">
                <img className="h-6 w-6" src={messageIcon} alt="" />
                <label htmlFor="">Message</label>
              </div>
              <textarea
                className="w-full h-64 bg-white rounded-lg pl-6 pt-5 mb-7 focus:outline-none "
                placeholder="Enter your message here"
                type="text"
              />
            </div>
            <Button btntext="Send" style="bg-[#162F42] w-[148px] text-white" />
          </form>
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
