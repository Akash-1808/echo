"use client"

import { useAtomValue } from "jotai";
// import { WidgetFooter } from "../components/widget-footer";
import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";
import { screenAtom } from "@/modules/widget/atoms/widget-atoms";
import { error } from "console";
import { WidgetErrorScreen } from "@/modules/widget/ui/screens/widget-error-screen";
import { WidgeLoadingScreen } from "@/modules/widget/ui/screens/widget-loading-screen";
// import { WidgetHeader } from "../components/widget-header";


interface Props {
    organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
    const screen = useAtomValue(screenAtom);

    const screenComponent = {
        error: <WidgetErrorScreen />,
        loading: <WidgeLoadingScreen organizationId={organizationId} />,
        selection: <p>TODO: Selection </p>,
        voice: <p>TODO: Voice </p>,
        auth: <WidgetAuthScreen />,
        chat: <p>TODO: Chat </p>,
        inbox: <p>TODO: Inbox </p>,
        contact: <p>TODO: Contact </p>,
    }
    return (
        //TODO: Confirm whether or not "min-h-screen" and "min-w-screen" is needed
        <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
            {screenComponent[screen]}
        </main>
    )
}