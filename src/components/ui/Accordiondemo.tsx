import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '../core/Accordion';
import { ChevronRight } from 'lucide-react';

export function AccordionVariant() {
    return (
        <div className='bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] pt-32 pb-10 space-y-5'>
            <h2 className='items-center flex justify-center underline font-bold text-white text-2xl text-center'>Frequently Asked Questions(FAQ)</h2>
            <Accordion
                className='flex w-full flex-col items-center space-y-4 gap-2'
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                variants={{
                    expanded: {
                        opacity: 1,
                        scale: 1,
                    },
                    collapsed: {
                        opacity: 0,
                        scale: 0.7,
                    },
                }}
            >
                <AccordionItem value='getting-started' className='py-2'>
                    <AccordionTrigger className='w-full py-0.5 text-left text-white'>
                        <div className='flex items-center'>
                            <ChevronRight className='h-4 w-4 text-white transition-transform duration-200 group-data-[expanded]:rotate-90' />
                            <div className='ml-2 text-white'>
                                Who can join NooBuild?
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='origin-center max-w-xs'>
                        <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400 items-center flex justify-center'>
                            NooBuild is open to all Students and Professionals interested in technology, from beginners to experienced enthusiasts, who are eager to learn, share knowledge, and collaborate on projects.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='animation-properties' className='py-2'>
                    <AccordionTrigger className='w-full py-0.5 text-left text-white'>
                        <div className='flex items-center'>
                            <ChevronRight className='h-4 w-4 text-white transition-transform duration-200 group-data-[expanded]:rotate-90' />
                            <div className='ml-2 text-white'>
                                What activities and events does NooBuild organize?
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='origin-center max-w-xs'>
                        <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400 flex justify-center items-center'>
                            NooBuild organizes hackathons, workshops, webinars, coding challenges, meetups, and offers collaborative project opportunities, mentorship, and community-led initiatives.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='advanced-features' className='py-2'>
                    <AccordionTrigger className='w-full py-0.5 text-left text-white'>
                        <div className='flex items-center'>
                            <ChevronRight className='h-4 w-4 text-white transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
                            <div className='ml-2 text-white'>
                                Is there any membership fee?
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='origin-center max-w-xs'>
                        <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400 flex items-center justify-center'>
                            No, joining NooBuild is completely free, making technology accessible to everyone.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='community-support' className='py-2'>
                    <AccordionTrigger className='w-full py-0.5 text-left text-white'>
                        <div className='flex items-center'>
                            <ChevronRight className='h-4 w-4 text-white transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50' />
                            <div className='ml-2 text-white'>
                                What are the benefits of joining NooBuild?
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='origin-center max-w-xs'>
                        <p className='pl-6 pr-2 text-zinc-500 dark:text-zinc-400 flex items-center justify-center'>
                            Joining NooBuild gives you access to a supportive network, events, learning resources, project opportunities, and connections with industry professionals.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
