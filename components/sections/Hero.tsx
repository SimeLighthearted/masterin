"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRightCircleIcon } from "@/components/icons";
import { useContactModal } from "@/components/ui/ContactModalContext";

export function Hero() {
  const { openContactModal } = useContactModal();

  return (
    <section className="pt-28 md:pt-36 xl:pt-40 pb-12 md:pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1786px] mx-auto">
        <div className="bg-white rounded-[30px] md:rounded-[50px] shadow-[var(--shadow-card-lg)] p-6 md:p-10 lg:p-12 xl:p-16 relative overflow-hidden">
          {/* Decorative gradient blob */}
          <div 
            className="absolute hidden xl:block pointer-events-none z-0"
            style={{
              top: '-100px',
              right: '-160px',
              width: '700px',
              height: '900px',
            }}
          >
            <Image
              src="/decorative-blob.svg"
              alt=""
              fill
              className="object-contain"
              style={{ transform: 'rotate(-0deg)' }}
              priority
            />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h1 className="font-[family-name:var(--font-unbounded)] font-medium text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight mb-6">
                <span className="text-[var(--color-primary-blue)]">МАСТЕР РИТЕЙЛ </span>
                <span className="text-black">БРЕНДИРОВАНИЕ И ОФОРМЛЕНИЕ ТОРГОВЫХ ПРОСТРАНСТВ</span>
              </h1>
              
              <p className="font-[family-name:var(--font-inter)] font-normal text-base md:text-lg xl:text-xl text-black mb-8 max-w-xl">
                Мы создаём качественные проекты с полным циклом услуг:
                от дизайна и печати до профессионального монтажа
                любой сложности
              </p>
              
              <div>
                <Button variant="primary" size="lg" onClick={openContactModal}>
                  Связаться с нами
                </Button>
              </div>
            </div>

            {/* Right Content - Info Cards */}
            <div className="flex flex-col gap-4 xl:pl-8 items-end">
              {/* Card 1: Speed */}
              <div className="bg-[var(--color-background)] w-108 rounded-[50px] shadow-[var(--shadow-card)] p-6 md:p-8 relative overflow-hidden">
                {/* Decorative dots pattern */}
                <div 
                  className="absolute pointer-events-none hidden md:block"
                  style={{
                    top: '10px',
                    right: '20px',
                    width: '140px',
                    height: '140px',
                  }}
                >
                  <Image
                    src="/dots-pattern.svg"
                    alt=""
                    fill
                    className="object-contain"
                    style={{ transform: 'rotate(-25deg)' }}
                  />
                </div>
                <h3 className="font-[family-name:var(--font-unbounded)] font-medium text-xl md:text-2xl text-black leading-tight relative z-10">
                  От макета
                  <br />
                  до монтажа
                  <br />
                  <span className="text-[var(--color-primary-blue)]">48 часов</span>
                </h3>
              </div>

              {/* Card 2: Services */}
              <div className="bg-[var(--color-background)] w-108 rounded-[50px] shadow-[var(--shadow-card)] p-6 md:p-8">
                <p className="font-[family-name:var(--font-unbounded)] font-medium text-xl text-[var(--color-primary-blue)] mb-4">
                  Оформляем
                </p>
                <ul className="space-y-3">
                  {["Точки продаж", "Торговые сети", "Торговые центры"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <ArrowRightCircleIcon className="w-6 h-6 text-[var(--color-primary-blue)]" />
                      <span className="font-[family-name:var(--font-unbounded)] font-medium text-base text-black uppercase">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

