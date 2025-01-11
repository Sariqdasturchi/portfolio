import React from 'react'
import { projects } from '../utils/constants'
import TagButton from './tagButton'
import { GoLinkExternal } from "react-icons/go";

const ProjectsCard = () => {
  return (
    <div className='grid  grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 mx-auto'>
      {projects.map(project => (
        <div key={project.id} className='bg-white shadow-lg rounded-lg p-6'>
          <img
            src={project.imageUrl}
            alt={project.name}
            className='w-full h-48 object-cover rounded-md mb-4'
          />
          <h3 className='text-xl font-bold mb-2'>{project.name}</h3>
          <p className='text-gray-600 mb-4'>{project.description}</p>
          <div className='flex flex-wrap gap-2 mb-4'>
            {project.tags.map((tag, index) => (
              <TagButton
                key={index}
                children={tag}
              />
            ))}
          </div>
          <a
            href={project.projectUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline text-sm'
          >
            View Project
            <GoLinkExternal className='inline-block ml-2' />
          </a>
        </div>
      ))}
    </div>
  )
}

export default ProjectsCard
