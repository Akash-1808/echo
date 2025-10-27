"use client"
import { useAtomValue, useSetAtom } from "jotai";
import { LoaderIcon } from "lucide-react";
import { contactSessionIdAtomFamily, errorMessageAtom, LoadingMessageAtom, OrganizationIdAtom, screenAtom, widgetSettingsAtom } from "@/modules/widget/atoms/widget-atoms";
import { WidgetHeader } from "../components/widget-header";
import { useEffect, useState } from "react";
import { useAction, useMutation, useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
 

type InitStep = "storage" | "org" | "user" | "session" | "settings" | "vapi" | "done";

export const WidgeLoadingScreen = ({ organizationId } : { organizationId : string | null}) => {
    console.log("Render Loading Screen")

    const [step, setStep] = useState<InitStep>("org");
    const [sessionValid, setSessionValid] = useState<boolean>(false);
    const loadingMessage = useAtomValue(LoadingMessageAtom);
    const setOrganizationId = useSetAtom(OrganizationIdAtom)
    const setErrorMessage = useSetAtom(errorMessageAtom);
    const setLoadingMessage = useSetAtom(LoadingMessageAtom);
    const setScreen = useSetAtom(screenAtom)
    const setWidgetSettings = useSetAtom(widgetSettingsAtom)

    const contactSessionId = useAtomValue(contactSessionIdAtomFamily(organizationId || ""))

    // Step 1: Validate organization
    const validateOrganization = useAction(api.public.organizations.validate)
    useEffect(()=>{
        if(step !== "org"){
            return;
        }

        setLoadingMessage("Finding organization ID...");
        if(!organizationId){
            setErrorMessage("Organization ID is requires")
            setScreen("error")
            return;
        }

        setLoadingMessage("Verifying organization...")

        validateOrganization({organizationId})
        .then((result)=>{
            if(result.valid){
                setOrganizationId(organizationId);
                setStep("session")
            } else {
                setErrorMessage(result.reason || "Invalid Organization")
                setScreen("error");
            }

        }).catch((e)=>{
            setErrorMessage("Unable to verify organization");
            setScreen("error")
        })
    },[
        step,
        organizationId,
        setErrorMessage,
        setScreen,
        setOrganizationId,
        setLoadingMessage,
        validateOrganization,
        setStep,
        validateOrganization,
        setLoadingMessage
        ]);

        //Step 2: Validate session
        const validateContactSession = useMutation(api.public.contactSession.validate)
    useEffect(()=>{
        console.log("INSIDE STEP 2")
        if(step !== "session"){
            return;
        }

        setLoadingMessage("Finding contact session ID...");

        if(!contactSessionId){
            setSessionValid(false);
            setStep("settings");
            return;
        }

        setLoadingMessage("Validating session...");

        validateContactSession({ contactSessionId }).then((result) => {
            console.log(result.valid)
            setSessionValid(result.valid);
            setStep("settings");
        }).catch(() => {
            setSessionValid(false);
            setStep("settings");
        })
    },[
        step,
        contactSessionId,
        validateContactSession,
        setLoadingMessage,
        setStep,
    ])

    /** Step 3: Load widget settings */

    const widgetSettings = useQuery(api.public.widgetSettings.getByOrganizationId, 
       organizationId ? {
        organizationId,
        } : "skip",
)

    useEffect(()=>{
        if(step !== "settings"){
            return;
        }
         
        setLoadingMessage("Loading widget settings...");
        if(widgetSettings !== undefined && organizationId){
            setWidgetSettings(widgetSettings);
            setStep("done");
        }
    },[
        step,
        widgetSettings,
        setStep,
        setWidgetSettings,
        setLoadingMessage
    ])


    useEffect(()=>{
        if(step !== "done"){
            return;
        }
        const hasValidSession = contactSessionId && sessionValid;
        setScreen(hasValidSession ? "selection" : "auth" );

    },[sessionValid, contactSessionId, step, setScreen])
    return (
        <>
        <WidgetHeader >
            <div className="flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold">
                    <p className=" text-3xl">
                        Hi there! 👋
                    </p>
                    <p className="text-lg">
                        Let&apos;s get you started 
                    </p>
                </div>
        </WidgetHeader>
        <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-4 text-muted-foreground">
            <LoaderIcon className="animate-spin" />
            <p className="text-sm">
                {loadingMessage ||  'Loading...'}
            </p>
        </div>
        </>
    )
}