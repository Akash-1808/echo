"use client"

import { useAtomValue } from "jotai";
// import { WidgetFooter } from "../components/widget-footer";
import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";
import { screenAtom } from "@/modules/widget/atoms/widget-atoms";
import { WidgetErrorScreen } from "@/modules/widget/ui/screens/widget-error-screen";
import { WidgeLoadingScreen } from "@/modules/widget/ui/screens/widget-loading-screen";
import { WidgetSelectionScreen } from "@/modules/widget/ui/screens/widget-selection-screen";
import { WidgetChatScreen } from "@/modules/widget/ui/screens/widget-chat-screen";
import { WidgetInboxScreen } from "@/modules/widget/ui/screens/widget-inbox-screen";
import { WidgetVoiceScreen } from "../screens/widget-voice-screen";
import { WidgetContactScreen } from "../screens/widget-contact-screen";
// import { WidgetHeader } from "../components/widget-header";


interface Props {
    organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
    const screen = useAtomValue(screenAtom);

    const screenComponent = {
        error: <WidgetErrorScreen />,
        loading: <WidgeLoadingScreen organizationId={organizationId} />,
        selection: <WidgetSelectionScreen />,
        voice: <WidgetVoiceScreen />,
        auth: <WidgetAuthScreen />,
        chat: <WidgetChatScreen />,
        inbox: <WidgetInboxScreen />,
        contact: <WidgetContactScreen />,
    }
    return (
        //TODO: Confirm whether or not "min-h-screen" and "min-w-screen" is needed
        <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
            {screenComponent[screen]}
        </main>
    )
}