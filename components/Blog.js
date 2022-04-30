import React from "react";
import AnimatedText from "../components/FramerMotion/AnimatedText";
import { popUpFromBottomForText } from "../content/FramerMotionVariants";
import Link from "next/link";
import AnimatedHeading from "./FramerMotion/AnimatedHeading";

export default function Blog({ blog, className }) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const bDate = new Date(Date.parse(blog.published_at));
  const blogDate =
    monthNames[bDate.getMonth()] +
    " " +
    bDate.getDate() +
    ", " +
    bDate.getFullYear();

  return (
    <Link passHref href={`/blogs/${blog?.slug}`}>
      <div
        className={`relative lg:p-3 w-full flex flex-col gap-2 font-inter rounded-md transition-all cursor-pointer select-none transform duration-200 active:scale-95 lg:hover:bg-neutral-100 dark:lg:hover:bg-darkSecondary  ${className}`}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <AnimatedHeading
            variants={popUpFromBottomForText}
            className="font-semibold text-neutral-900 dark:text-neutral-200 sm:text-xl"
          >
            {blog?.title}
          </AnimatedHeading>
          <AnimatedText
            variants={popUpFromBottomForText}
            className="text-gray-500 text-sm sm:text-base"
          >
            {blog?.page_views_count} views
          </AnimatedText>
        </div>
        <AnimatedText
          variants={popUpFromBottomForText}
          className="text-gray-500 text-xs sm:text-sm"
        >
          {blogDate}
        </AnimatedText>

        <AnimatedText
          variants={popUpFromBottomForText}
          className="font-medium sm:font-normal text-gray-500 sm:text-lg"
        >
          {blog?.description}
        </AnimatedText>
      </div>
    </Link>
  );
}
