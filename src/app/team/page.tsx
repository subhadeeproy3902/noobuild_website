import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { fetchTeamMembers, fetchOrganizers, fetchLead } from "../../../sanity/lib/fetchTeamMembers";
import { urlFor } from "../../../sanity/lib/image";
import { FaLinkedin } from "react-icons/fa";
import { TeamMember, Organizers, Lead } from "../../../sanity/lib/type";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import {client} from "../../../sanity/lib/client"

export const revalidate = 10; //seconds

export default async function Team() {
  const teamMembers: TeamMember[] = await fetchTeamMembers();
  const organizers: Organizers[] = await fetchOrganizers();
  const lead: Lead[] = await fetchLead();


  return (
    <>
      <h2 className="text-center font-bold text-4xl my-3 underline">Organizers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-8 place-items-center">
        {organizers.map((member) => (
          <NeonGradientCard
            key={member._id}
            className="max-w-sm items-center justify-center text-center"
          >
            <Image src={urlFor(member.image).width(100).url()} alt={member.name} className="mx-auto mb-4 rounded-full w-28 h-auto" width={100} height={100} />
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              {member.name}
            </span>
            <p className="mt-2 text-lg font-medium text-gray-600">{member.post}</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
            </div>
          </NeonGradientCard>
        ))}
      </div>
      <h2 className="text-center font-bold text-4xl my-3 underline">Lead</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 place-items-center">
        {lead.map((member) => (
          <NeonGradientCard
            key={member._id}
            className="max-w-sm items-center justify-center text-center"
          >
            <Image src={urlFor(member.image).width(100).url()} alt={member.name} className="mx-auto mb-4 rounded-full w-28 h-auto" width={100} height={100} />
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              {member.name}
            </span>
            <p className="mt-2 text-lg font-medium text-gray-600">{member.post}</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
            </div>
          </NeonGradientCard>
        ))}
      </div>
      <h2 className="text-center font-bold text-4xl my-3 underline">Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 place-items-center">
        {teamMembers.map((member) => (
          <NeonGradientCard
            key={member._id}
            className="max-w-sm items-center justify-center text-center"
          >
            <Image src={urlFor(member.image).width(100).url()} alt={member.name} className="mx-auto mb-4 rounded-full w-28 h-auto" width={100} height={100} />
            <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              {member.name}
            </span>
            <p className="mt-2 text-lg font-medium text-gray-600">{member.post}</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
            </div>
          </NeonGradientCard>
        ))}
      </div>
    </>
  );
}
