"use client";
import React, { useEffect, useState } from 'react'
import { getProjects } from '../api/projects/project';
import ProjectCard from "@/components/ProjectCard"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Catogories = () => {
    const [category, setCategory] = useState([])
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProjectsFromDB = async () => {
            try {
                const projectsFromDB = await getProjects();
                setProjects(projectsFromDB?.results);
            } catch (error) {
                console.error("Error fetching projects", error);
            } finally {
                setLoading(false);
            }
        };

        if (!projects?.length && loading) {
            fetchProjectsFromDB();
        }
    }, [projects?.length, loading]);

    return (
        <div>

{/* <Tabs>
          <TabList className={"mb-8 flex gap-14 text-[#4F4F4F]"}>
            <Tab className={"cursor-pointer md:text-[32px] text-sm font-bold"}>
            Все проекты
            </Tab>
            <Tab className={"cursor-pointer md:text-[32px] text-sm font-bold"}>FAQ</Tab>
            <Tab className={"cursor-pointer md:text-[32px] text-sm font-bold"}>
            Технологии  
            </Tab>
          </TabList>
            <Tab className={"cursor-pointer md:text-[32px] text-sm font-bold"}>
            Инвестиции
            </Tab>

          <TabPanel>
           
          </TabPanel>
          
        
        </Tabs> */}

            {!loading && projects && (
                <div className="max-container my-[60px] grid grid-cols-12 gap-[8px] md:my-[30px] md:gap-[20px]">
                    {projects?.map((card, index) => (
                        <div className="lg:col-span-3 sm:col-span-4 col-span-6">

                            <ProjectCard key={index} card={card} isGrid={false} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Catogories