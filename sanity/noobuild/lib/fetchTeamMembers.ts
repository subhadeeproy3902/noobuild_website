import { client } from './client';
import { groq } from "next-sanity";
import { TeamMember, Organizers, Lead, Event} from './type';

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  const query = `*[_type == "teamMember"]`;
  return await client.fetch(query);
}

export async function fetchOrganizers(): Promise<Organizers[]> {
  const query = `*[_type == "organizers"]`;
  return await client.fetch(query);
}

export async function fetchLead(): Promise<Lead[]> {
  const query = `*[_type == "lead"]`;
  return await client.fetch(query);
}

export async function fetchEvent(): Promise<Event[]> {
  const query = groq`*[_type == "event"] | order(startTime asc)`;
  const events = await client.fetch(query);

  return await events;
}

