import { PremiumFeatureOverLay } from "@/modules/billing/ui/components/premium-feature-overlay"
import { CustomizationView } from "@/modules/customization/ui/view/customizeation-view"
import { Protect } from "@clerk/nextjs"


const Page = () => {
  return (
    <Protect
     condition={(has)=> has({ plan: "pro"})}
     fallback={
      <PremiumFeatureOverLay>
        <CustomizationView />
      </PremiumFeatureOverLay>
     }>
          <CustomizationView />
    </Protect>
  )
}

export default Page