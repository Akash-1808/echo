import { Button } from "@workspace/ui/components/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle,
} from "@workspace/ui/components/dialog"
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

export const IntegrationsDialog = ({
    open,
    onOpenChange,
    snippet,
}: {
    open: boolean;
    onOpenChange: (value: boolean) => void;
    snippet: string;
}) => {

    const handleCopyCode = async() => {
        try{
            await navigator.clipboard.writeText(snippet);
            toast.success("Code copied Successfully");
        }catch{
            toast.error("Failed to copy code");
        }
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Integrate with your website</DialogTitle>
                    <DialogDescription>
                        Follow these steps to add the chatbox to you website
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="rounded-md bg-accent p-2 text-sm">
                            1. Copy the following code 
                        </div>
                        <div className="group relative">
                            <pre className="max-h-[300px] overflow-x-auto overflow-y-auto whitespace-pre-wrap
                            break-all rounded-md bg-foreground p-2 font-mono text-sm text-secondary">
                                {snippet}
                            </pre>
                            <Button className="absolute top-4 right-6 opacity-0 transition-opacity
                            group-hover:opacity-100"
                            onClick={handleCopyCode}
                            size={"icon"}
                            variant={"secondary"}>
                                <CopyIcon className="size-3"/>
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="rounded-md bg-accent p-2 text-sm">
                            2. Add the code in your page 
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Paste the chatbox code above in your page. You can add it in the HTML head section.
                        </p>
                        </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}