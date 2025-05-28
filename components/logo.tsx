import { CreditCard } from "lucide-react"

interface LogoProps {
  variant?: "default" | "white"
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export default function Logo({ variant = "default", showText = true, size = "md" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-gray-900"
  const primaryColor = variant === "white" ? "text-white" : "text-primary"

  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  }

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  return (
    <div className="flex items-center">
      <div className="relative">
        <div className={`${primaryColor} ${sizeClasses[size]}`}>
          <div className="relative">
            <CreditCard size={iconSize[size]} className="stroke-current" strokeWidth={2.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-1/2 h-1 bg-current rounded-full transform -rotate-45 translate-y-0.5`}></div>
            </div>
          </div>
        </div>
      </div>

      {showText && (
        <div
          className={`ml-2 font-bold ${textColor} ${sizeClasses[size] === "h-6" ? "text-lg" : sizeClasses[size] === "h-8" ? "text-xl" : "text-2xl"}`}
        >
          <span className={primaryColor}>Stripe</span>Gate
        </div>
      )}
    </div>
  )
}
