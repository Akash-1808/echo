import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

interface InfiniteScrollTriggerProps {
    canLoadmore: boolean;
    isLodingMore: boolean;
    onLoadMore: () => void;
    loadmoreText?: string;
    noMoreText?: string;
    className?: string;
    ref?: React.Ref<HTMLDivElement>
};

export const InfiniteScrollTrigger = ({
    canLoadmore,
    isLodingMore,
    onLoadMore,
    loadmoreText = "load more",
    noMoreText = "No more items",
    className,
    ref,
}: InfiniteScrollTriggerProps) => {
    let text = loadmoreText;


    if(isLodingMore) {
        text = "loading...";
    } else if (!canLoadmore) {
        text = noMoreText;
    }

    return(
        <div className={cn("flex w-full justify-center py-2", className)} ref={ref}>
            <Button
            disabled={!canLoadmore || isLodingMore}
            onClick={onLoadMore}
            size={"sm"}
            variant={"ghost"}
            >
                {text}
            </Button>

        </div>
    )
}