import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import React from "react";
import { fetchEvent } from "../../../sanity/lib/fetchTeamMembers";
import type { Event } from "../../../sanity/lib/type";
import TiltCard from "./Tiltcard";
import { client } from "../../../sanity/lib/client"
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import Link from "next/link";

export const revalidate = 0; //seconds


export default async function EventsPage() {
  const events: Event[] = await fetchEvent();
  const now = new Date();

  // Filter events into categories
  const upcomingEvents = events.filter((event) => new Date(event.startTime) > now);
  const liveEvents = events.filter(
    (event) =>
      new Date(event.startTime) <= now && new Date(event.endTime) >= now
  );
  const pastEvents = events.filter((event) => new Date(event.endTime) < now);

  // Helper function to format date and time
  const formatDate = (dateString: string) => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Local time zone of the client
    const zonedDate = toZonedTime(dateString, timeZone);
  
    // Format the zoned date to show only the date in 'yyyy-MM-dd' format
    return format(zonedDate, 'yyyy-MM-dd');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <Tabs
        defaultValue="upcoming"
        className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-4"
      >
        <TabsList className="flex justify-center mb-6">
          <TabsTrigger
            value="upcoming"
            className="px-6 py-2 font-semibold text-lg text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-purple-100"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger
            value="live"
            className="ml-4 px-6 py-2 font-semibold text-lg text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-purple-100"
          >
            Live
          </TabsTrigger>
          <TabsTrigger
            value="past"
            className="ml-4 px-6 py-2 font-semibold text-lg text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-purple-100"
          >
            Past
          </TabsTrigger>
        </TabsList>

        {/* Upcoming Events */}
        <TabsContent value="upcoming" className="space-y-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <TiltCard key={event._id}>
                <div className="p-6 gap-2.5">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">{event.description}</p>
                  <Link
                    href={event.url}
                    target="_blank"
                    className="inline-block my-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Click Here
                  </Link>
                  <p className="text-sm text-gray-500">{formatDate(event.startTime)}</p>
                </div>
              </TiltCard>
            ))
          ) : (
            <p className="text-center text-gray-700">No Upcoming events.</p>
          )}
        </TabsContent>

        {/* Live Events */}
        <TabsContent value="live" className="space-y-6">
          {liveEvents.length > 0 ? (
            liveEvents.map((event) => (
              <TiltCard key={event._id}>
                <div className="p-6 gap-2.5">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">{event.description}</p>
                  <Link
                    href={event.url}
                    target="_blank"
                    className="inline-block my-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Click Here
                  </Link>
                  <p className="text-sm text-gray-500">
                    {formatDate(event.startTime)} - {formatDate(event.endTime)}
                  </p>
                </div>
              </TiltCard>
            ))
          ) : (
            <p className="text-center text-gray-700">No Live events.</p>
          )}
        </TabsContent>

        {/* Past Events */}
        <TabsContent value="past" className="space-y-6">
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => (
              <TiltCard key={event._id}>
                <div className="p-6 gap-2.5">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm">{event.description}</p>
                  <Link
                    href={event.url}
                    target="_blank"
                    className="inline-block my-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Click Here
                  </Link>
                  <p className="text-sm text-gray-500">
                    {formatDate(event.startTime)} - {formatDate(event.endTime)}
                  </p>
                </div>
              </TiltCard>
            ))
          ) : (
            <p className="text-center text-gray-700">No Past events.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
