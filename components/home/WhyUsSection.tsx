import { WhyUsContentData, WhyUsFeatures } from '@/lib/data/home';
import { cn } from '@/lib/utils';
import { FeatureItem, WhyUsContent } from '@/types/site'
import Image from 'next/image';
import React from 'react'
import { SectionHeading } from '../shared/SectionHeading';
import QuoteDialog from '../layout/QuoteDialog';
import { ArrowRight } from 'lucide-react';
interface WhyUsSectionProps {
    content?:WhyUsContent;
    features?:FeatureItem[];
    className?:string;
}

const WhyUsSection = ({content = WhyUsContentData, features = WhyUsFeatures, className,}:WhyUsSectionProps) => {
  return (
    <section className={cn("flex min-h-0 flex-col lg:flex-row",className)}>
        <div className='relative min-h-80 w-full overflow-hidden sm:min-h-96 lg:min-h-150 lg:w-1/2'>
        <Image
            src={content.imageSrc}
            alt="LED wall hire and video wall rent on concert stage, Sri Lanka by YC Events"
            fill
            className='object-cover'
            sizes='(max-width:1024px) 100ve, 50vw'
        />
        <div className='absolute bottom-6 left-6 rounded-sm bg-brand px-5 py-4 sm:bottom-10 sm:left-10 sm:px-6 sm:py-5'>
            <div className='text-4xl leading-none font-black text-white sm:text-5xl'>
                {content.yearsBadge}
            </div>
            <div className='mt-1 max-w-40 text-xs text-white/80 sm:text-sm'>
            {content.yearsLabel}
            </div>
        </div>
        </div>

        <div className='flex w-full flex-col justify-center bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-12 lg:w-1/2'>
            <SectionHeading
                eyebrow={content.eyebrow}
                title={
                    <>
                        {content.titleLine1}
                        <br/>
                        {content.titleLine2}
                    </>
                }
                description={content.description}
            />

            <div className='mt-8 space-y-4 sm:mt-9 sm:space-y-5'>
                {features.map((feature) =>{
                    const Icon = feature.icon;
                    return(
                        <div key={feature.title} className='flex gap-3.5'>
                            <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10'>
                                 <Icon className='size-4 text-brand'/>
                            </div>
                            <div>
                                <div className='text-sm font-semibold text-ink sm:text-base'>
                                    {feature.title}
                                </div>
                                <div className='mt-0.5 text-xs text-muted-yc sm:text-sm'>
                                    {feature.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <QuoteDialog triggerClassName="mt-8 h-11 w-fit rounded bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark sm:h-12">
                {content.ctaLabel}<ArrowRight className='size-3.5'/>
            </QuoteDialog>
        </div>
    </section>
  )
}

export default WhyUsSection
