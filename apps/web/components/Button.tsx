import { cn } from "@workspace/ui/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "icon";
    disabled?: boolean;
    isLoading?: boolean;
    
}

const baseClasses = "inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variantClasses = {
    primary: "bg-[#426FC9] text-white hover:bg-[#365FAF] focus:ring-[#365FAF]",
    outline: "border border-[#426FC9] text-[#426FC9] hover:bg-[#F0F4FF] focus:ring-[#426FC9]",
    ghost: "text-[#426FC9] hover:bg-[#ACB5C7] focus:ring-[#426FC9]",
}

const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
    icon: "p-2",
}

export default function Button({ 
    children,
    onClick,
    className,
    variant = "primary",
    size = "md",
    disabled,
    isLoading = false,
    ...props
     }: ButtonProps){
    return (<button 
    onClick={onClick}
    className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    disabled={isLoading || disabled}
    {...props}
    >
        {children}
    </button>)
}