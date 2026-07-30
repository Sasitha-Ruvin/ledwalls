import { DistrictPills } from "@/components/shared/DistrictPills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CoverageContent } from "@/lib/data/services";
import type { CoverageSectionContent } from "@/types/site";

interface CoverageSectionProps {
  content?: CoverageSectionContent;
}

export function CoverageSection({
  content = CoverageContent,
}: CoverageSectionProps) {
  return (
    <section
      aria-labelledby="coverage-heading"
      className="bg-brand px-4 py-14 text-center sm:px-8 sm:py-16 lg:px-16"
    >
      <SectionHeading
        eyebrow={content.eyebrow}
        title={
          <h2 id="coverage-heading" className="text-3xl sm:text-4xl">
            {content.title}
          </h2>
        }
        tone="brand"
        className="mx-auto mb-8 max-w-3xl"
      />
      <DistrictPills
        districts={content.districts}
        highlightLabel={content.highlightLabel}
      />
    </section>
  );
}