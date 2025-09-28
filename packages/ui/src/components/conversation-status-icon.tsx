import { ArrowRightIcon, CheckIcon, ArrowUpIcon } from 'lucide-react';
import { cn } from '@workspace/ui/lib/utils';


interface ConversationStatusIconProps {
    status: "unresolved" | "escalated" | "resolved",
    className?: string
}

const statusConfig = {
    resolved: {
        icon: CheckIcon,
        bgColor: "bg-[#D1FAE5] text-[#065F46]",  
    },
    escalated: {
        icon: ArrowUpIcon,
        bgColor: "bg-[#FEF3C7] text-[#9A3412]",  
    },
    unresolved: {
        icon: ArrowRightIcon,
        bgColor: "bg-[#FEE2E2] text-[#9B1C1C]",  
    }
} as const;

export const ConversationStatusIcon = ({ status, className}: ConversationStatusIconProps) => {
    const config = statusConfig[status];
    const Icon = config.icon;
  return (
    <div className={cn("flex items-center justify-center rounded-full size-5", className, config.bgColor)}>
        <Icon className='size-3 stroke-3 ' />
    </div>
  )
}