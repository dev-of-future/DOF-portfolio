import { HomeHeading } from "../../pages";
import Link from "next/link";
import Image from "next/image";
import AnimatedDiv from "../FramerMotion/AnimatedDiv";
import { popUpFromBottomForText } from "../../content/FramerMotionVariants";
import Blog from "../Blog";
import AnimatedButton from "../FramerMotion/AnimatedButton";
import AnimatedText from "../FramerMotion/AnimatedText";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function BlogsSection({ blogs }) {
  return (
    <section className="mx-4">
      <HomeHeading title="Recent Posts" />

      <div className="flex flex-col gap-2 w-full">
        {blogs.map((blog) => {
          return (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} passHref>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
                <AnimatedDiv
                  variants={popUpFromBottomForText}
                  className="relative hidden md:inline-flex max-w-xs rounded-xl overflow-hidden"
                >
                  <Image
                    className="rounded-xl cursor-pointer select-none"
                    src={blog?.cover_image}
                    alt={blog.title}
                    width={500}
                    height={207}
                    quality={25}
                    placeholder="blur"
                    blurDataURL={blog?.cover_image}
                  />
                </AnimatedDiv>

                <Blog blog={blog} className="active:!scale-100" />
              </div>
            </Link>
          );
        })}

        <Link href="/blogs">
          <div
            variants={popUpFromBottomForText}
            className="font-inter font-medium border-transparent border-b-2 lg:hover:border-black transform duration-200 active:scale-90 active:border-black w-fit"
          >
            <motion.a href="/blogs" className="flex items-center gap-1 ">
              Read all posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                ></path>
              </svg>
            </motion.a>
          </div>
        </Link>
      </div>
    </section>
  );
}
