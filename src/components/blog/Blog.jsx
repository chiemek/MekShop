import Heading from "../shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cumque!",
    Published: "May 10, 2024 by emeka",
    image: Img1,
    aosDelay: "100",
  },
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cumque!",
    Published: "May 10, 2024 by emeka",
    image: Img2,
    aosDelay: "100",
  },
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cumque!",
    Published: "May 10, 2024 by emeka",
    image: Img3,
    aosDelay: "100",
  },
];
const Blog = () => {
  return (
    <div className="my-12">
      <div className="container">
        <Heading title={"Recent News"} subtitle={"Explore Our Blog"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 md:gap-7 sm-gap-4">
          {BlogData.map((data, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={index}
              className="bg-white dark:bg-gray-900"
            >
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              <div className="space-y-2">
                <p className="text-gray-500 text-xs">{data.Published}</p>
                <p className="font-bold line-clamp-1 ">{data.title}</p>
                <p className="text-gray-600 line-clamp-2 text-sm dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
