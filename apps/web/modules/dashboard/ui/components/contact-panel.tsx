"use client"

import Bowser from "bowser";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@workspace/ui/components/accordion";
import { getCountryFlagUrl, getCountryFromTimezone } from "@/lib/country-utils";
import { api } from "@workspace/backend/_generated/api";
import { Id } from "@workspace/backend/_generated/dataModel";
import { Button } from "@workspace/ui/components/button";
import { DicebearAvatar } from "@workspace/ui/components/dicebear-avatar"
import { useQuery } from "convex/react";
import { ClockIcon, GlobeIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { userAgent } from "next/server";

type InfoItem = {
    label: string;
    value: string | React.ReactNode;
    className?: string;
}

type InfoSection = {
    id: string;
    icon: React.ComponentType<{ className?: string}>;
    title: string;
    items: InfoItem[];
}

export const ContactPanel = () => {
    const params = useParams();
    const conversationId = params.conversationId as (Id<"conversations"> | null);

    const contactSession = useQuery(api.private.contactSession.getOneByConversationId,
        conversationId ?{
        conversationId,
        }: "skip"
    );

    const parserUserAgent = useMemo(() => {
        return (userAgent?: string) => { 
            if(!userAgent) {
                return { browser: "Unkown", os: "Unknown" };
            }

            const browser = Bowser.getParser(userAgent);
            const result = browser.getResult();

            return {
                browser: result.browser.name || "Unknown",
                os: result.os.name || "Unknown",
                browserVersion: result.browser.version || "",
                osVersion: result.os.version || "",
                device: result.platform.type || "",
                deviceVendor: result.platform.vendor || "",
                deviceModel: result.platform.model || "",
            }
         }
    }, []);

    const userAgentInfo = useMemo(()=> parserUserAgent(contactSession?.metadata?.userAgent), 
    [contactSession?.metadata?.userAgent, parserUserAgent])


    const countryInfo = useMemo(() => {
       return getCountryFromTimezone(contactSession?.metadata?.timezone);
    },[contactSession?.metadata?.timezone]);

    const accordionSections = useMemo<InfoSection[]>(() => {
        if(!contactSession) {
            return [];
        }

        return [
            {
                id: "device-info",
                icon: MailIcon,
                title: "Device Information",
                items: [
                    {
                        label: "Browser",
                        value: 
                           userAgentInfo.browser + 
                            (userAgentInfo.browserVersion
                                ? ` ${userAgentInfo.browserVersion}`
                                : ""
                            ),
                            
                    },
                    {
                        label: "Operating System",
                        value: 
                           userAgentInfo.os +
                            (userAgentInfo.osVersion
                                ? ` ${userAgentInfo.osVersion}`
                                : ""
                            ),
                            className: "capitalize",
                    },
                    {
                        label: "Screen",
                        value: contactSession.metadata?.screenResolution,
                    },
                    {
                        label: "Viewport",
                        value: contactSession.metadata?.viewportSize,
                    },
                    {
                        label: "Cookies",
                        value: contactSession.metadata?.cookieEnabled ? "Enabled" : "Disabled",
                    }
                ]
            },
            {
                id: "location-info",
                icon: GlobeIcon,
                title: "Location & Language",
                items: [
                    ...(countryInfo
                     ? [{
                        label: "Country",
                        value: (
                            <span>
                                {countryInfo.name}
                            </span>
                        )
                     }]
                     : []
                    ),
                    {
                        label: "Language",
                        value: contactSession.metadata?.language,
                    },
                    {
                        label: "Timezone",
                        value: contactSession.metadata?.timezone,
                    }
                ],
                
            },
            {
                id: "section-details",
                title: "Section details",
                icon: ClockIcon,
                items: [
                    {
                        label: "Session started",
                        value: new Date(contactSession._creationTime).toLocaleString(),
                    }
                ]
            }
        ]
    },[contactSession, userAgentInfo, countryInfo])

    if(contactSession === undefined || contactSession === null) {
        return null;
    }

    return (
        <div className="flex h-full w-full flex-col bg-background text-foreground">
            <div className="flex flex-col gap-y-4 p-4">
                <div className="flex items-center gap-x-2">
                    <DicebearAvatar 
                     badgeImageUrl={
                         countryInfo?.code
                            ? getCountryFlagUrl(countryInfo.code)
                            : undefined
                     }
                     seed={contactSession._id}
                     size={42}
                    />
                    <div className="flex-1 overflow-hidden">
                        <div className="flex items-center gap-x-2">
                            <h4 className="line-clamp-1">
                                {contactSession.name}
                            </h4>
                        </div>
                        <p className="line-clamp-1 text-muted-foreground text-sm">
                            {contactSession.email}
                        </p>
                    </div>
                </div>
                     <Button asChild className="w-full" size={"lg"}>
                        <Link href={`mailto:${contactSession.email}`}>
                        <MailIcon />
                        <span>Send email</span>
                        </Link>
                     </Button>
            </div>
            <div>
                {contactSession && (
                    <Accordion 
                    className="w-full rounded-none border-y"
                    collapsible
                    type="multiple"
                    >
                    {accordionSections.map((section)=>(
                        <AccordionItem
                         key={section.id}
                         value={section.id}>
                           <AccordionTrigger>
                            <div className="flex items">

                            </div>
                            </AccordionTrigger> 
                        </AccordionItem>
                    ))}
                    </Accordion>
                )}
            </div>
        </div>
    )
}