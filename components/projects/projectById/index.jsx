"use client";
import React, { useEffect, useState } from "react";
import ProjectTabs from "@/components/projects/projectById/tabs";
import Rewards from "@/components/projects/projectById/rewards";
import ProjectOverview from "@/components/projects/projectById/overview";
import { useParams } from "next/navigation";
import { getProject } from "@/app/api/projects/project";
import Spinner from "@/components/Spinner";

const ProjectByIdComponent = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  const fetchProjectsWithIdFromAPI = () => {
    getProject(id)
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        router.push("/not-found");
        console.log(error);
      })
  
  };

  useEffect(() => {
    fetchProjectsWithIdFromAPI();
  }, [id]);

if(!project) return <Spinner/>

  return (
    <section className="md:mv-[150px] mb-[100px] mt-[70px] sm:mt-[80px]">
      <div className="pt-[60px] md:pt-[100px]">
        <ProjectOverview data={project} />

        <div className="max-container">
          <div className="flex flex-col-reverse justify-between gap-x-7 gap-y-[100px] lg:flex-row">
            <ProjectTabs data={project} />
            {/* rewards */}
            <Rewards data={project?.reward} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectByIdComponent;
