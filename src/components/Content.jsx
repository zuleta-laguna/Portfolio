import React from "react";

import ProjectsCard from "./ProjectsCard";
import ReactIcon from "../Svg/ReactIcon";
import SvgTailwind from "../Svg/SvgTailwind";
import Form from "./Form";

function Content() {
  return (
    <section id="ContentSection" className="flex flex-col justify-around  mt-48 p-10">
      <div id="About_Section" className="flex justify-between items-center">
        <div id="About" className="">
          <h2 className=" text-3xl font-medium">
            <span className="text-yellow-400">ABOUT</span> ME
          </h2>
          <br />
          <p className=" text-xl">
            ever since i was a child i've been fascinated with the technologies
            and computer this fascination drove me to learn software developer I
            aspire to grow my skill and knowledge as software developer
          </p>
        </div>
      </div>
      <div id="Project" className=" mt-9 ">
      <h2 className=" text-4xl font-medium">
        <span className="text-yellow-400">Pro</span>ject
      </h2>
      <ProjectsCard>
        <h2 className="text-xl font-bold">RICK AND MORTY API</h2>
        <p className=" mt-3 text-lg">This is a project of rick and morty api, i build this website with:
          <ul className=" mt-3 flex flex-col gap-3">
            <li ><ReactIcon/> React</li>
            <li ><SvgTailwind/> Tailwind</li>
          </ul>
        </p>
        <a className="text-yellow-500 absolute right-3 text-xl font-medium" href="https://zuleta-laguna.github.io/Rick-and-morty-API/">See project </a>
      </ProjectsCard>
      </div>
      <div id="Contact" className="mt-9">
      <h2 className=" text-4xl font-medium">
        <span className="text-yellow-400">Cont</span>act
      </h2>
      <div className="flex justify-center mt-9">
        <Form/>
      </div>
      </div>
    </section>
  );
}

export default Content;
