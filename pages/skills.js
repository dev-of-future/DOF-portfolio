import Skill from "../components/Skill";
import LazyLoad from "react-lazyload";
import { getSkills } from "../lib/dataFetch";
import Metadata from "../components/MetaData";
import VideoCover from "../components/VideoCover";


export default function Skills({ skills }) {
  return (
    <>
      <Metadata title="Skills 🤹" />

      <div className="dark:bg-darkPrimary">
        <VideoCover
          title="Skills & Experience"
          // buttonText="view in details"
          videoUrl="https://imgur.com/GoHeE7r.mp4"
        />

        <div id="view" className="page_container pt-10">
          {skills.map((skill) => {
            return (
              // <LazyLoad key={skill.id} className="h-full w-full">
              <Skill key={skill.id} data={skill} />
              // </LazyLoad>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const skills = getSkills();
  return {
    props: {
      skills,
    },
  };
}
