import { Protect } from "@clerk/nextjs"
import { FilesView } from "@/modules/files/ui/views/files-view"
import { PremiumFeatureOverLay } from "@/modules/billing/ui/components/premium-feature-overlay"


const Page = () => {
  return (
    <Protect
     condition={
      (has) => has({ plan: "pro"})
     }
     fallback={
      <PremiumFeatureOverLay >
        <FilesView />
        </PremiumFeatureOverLay>
     }>
    <FilesView />
    </Protect>
  )
}

export default Page