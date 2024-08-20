import { contentAtom } from "@/providers/content";
import { useAtom } from "jotai";
import FaqSection from "./faq";
import QuoteSlider from "./quotes";

const HomePage = () => {
  const [content, _] = useAtom(contentAtom);
  return (
    <>
      <header className="flex h-full flex-col justify-center" data-bg="#FFEBDB">
        <div className="relative flex h-screen min-h-[650px] flex-col justify-center pt-16 md:pt-0 lg:min-h-[900px]">
          <picture className="h-full">
            <source
              media="(min-width: 1900px)"
              srcSet={"/flower-hub-clone/svg/Union.svg"}
            />
            <source
              media="(min-width: 651px)"
              srcSet={"/flower-hub-clone/svg/Union.svg"}
            />
            <source
              media="(max-width: 650px)"
              srcSet={"/flower-hub-clone/svg/Union.svg"}
            />
            <img
              decoding="async"
              src={"/flower-hub-clone/svg/Union.svg"}
              className="h-full w-full object-cover object-center"
              loading="lazy"
              alt=""
            />
          </picture>
          <div className="left-0 top-0 flex h-full w-full flex-col py-6 md:absolute md:py-16 lg:py-28">
            <div className="container flex h-full w-full flex-col justify-end">
              <h1 className="heading-xl max-w-[552px]">
                {content.home.header.heading}
              </h1>
              <p className="body max-w-[552px] pt-5">
                {content.home.header.description}
              </p>
              <a href="/">
                <button className="btn-dark mt-6">
                  {content.home.header.button.text}
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="container flex flex-col py-12 md:py-16 lg:py-28 xl:py-36">
        <div className="grid grid-cols-1 justify-between pb-16 md:grid-cols-3">
          <h2 className="heading-lg pb-3 pr-8">
            Låt ditt villabatteri tjäna pengar åt dig
          </h2>
          <p className="body col-span-2 w-full max-w-[700px] pt-2 md:pl-12 md:pt-0">
            Dryga ut din sparkassa och bidra till att stärka elsystemet. Få
            samtidigt tillgång till ett smart elhandelsavtal utan månadsavgift
            eller extra påslag.{" "}
          </p>
        </div>
        <div className="pt-10">
          <div className="-mx-2 flex flex-wrap items-stretch pt-6 md:mx-0 md:flex-row md:gap-4">
            <div className="w-full p-2 md:w-1/2 md:shrink-0 md:grow md:basis-0 md:p-0">
              <div className="bg-sky flex h-full min-h-[372px] flex-col justify-between rounded-md px-6 pt-6 md:min-h-[487px] md:rounded-lg">
                <picture>
                  <img
                    decoding="async"
                    src="https://www.flower.se/wp-content/uploads/2024/06/icon.svg"
                    className="max-w-[100px]"
                    loading="lazy"
                    alt=""
                  />
                </picture>
                <div>
                  <h4 className="heading-md pb-6 pt-12 md:pt-16">
                    Ett system i balans
                  </h4>
                  <div>
                    <p className="pb-[1.5rem] text-[1.25rem]">
                      Med Flower Hub kopplas ditt batteri upp så att det är med
                      och balanserar elnätet samtidigt som det tillgängliggör
                      mer förnybar energi i elsystemet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/2 md:shrink-0 md:grow md:basis-0 md:p-0">
              <div className="bg-clay flex h-full min-h-[372px] flex-col justify-between rounded-md px-6 pt-6 md:min-h-[487px] md:rounded-lg">
                <picture>
                  <img
                    decoding="async"
                    src="https://www.flower.se/wp-content/uploads/2024/06/icon-1.svg"
                    className="max-w-[100px]"
                    loading="lazy"
                    alt=""
                  />
                </picture>
                <div>
                  <h4 className="heading-md pb-6 pt-12 md:pt-16">
                    Få ersättning
                  </h4>
                  <div>
                    <p className="pb-[1.5rem] text-[1.25rem]">
                      Stötta elsystemet med ditt batterisystem och få betalt i
                      samma veva. Som batteriägare får du en fast ersättning per
                      månad som dras direkt på din elhandelsfaktura.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/2 md:shrink-0 md:grow md:basis-0 md:p-0">
              <div className="bg-grass flex h-full min-h-[372px] flex-col justify-between rounded-md px-6 pt-6 md:min-h-[487px] md:rounded-lg">
                <picture>
                  <img
                    decoding="async"
                    src="https://www.flower.se/wp-content/uploads/2024/06/icon-2.svg"
                    className="max-w-[100px]"
                    loading="lazy"
                    alt=""
                  />
                </picture>
                <div>
                  <h4 className="heading-md pb-6 pt-12 md:pt-16">
                    Ett flexibelt elavtal
                  </h4>
                  <div>
                    <p className="pb-[1.5rem] text-[1.25rem]">
                      Vårt elhandelsavtal baseras på timpris utan månadsavgift
                      eller extra påslag. Timpris är en smart avtalsform där du
                      får det pris som el handlas till på den nordiska elbörsen.{" "}
                      <a href="https://www.flower.se/hub/elavtal/">Läs mer.</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hub Section */}
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 md:py-16 lg:py-28 xl:py-36">
          <div>
            <p className="text-24 leading-[26px] lg:text-[3rem] lg:leading-[48px]">
              <span className="md:px-16">
                Plug and Play.
                <br />
                Utan krångel.
              </span>
            </p>
            <p className="body pt-8 md:pl-40">
              Flower Hubs kompakta enhet kopplas enkelt upp till din hemmarouter
              och börjar stötta elnätet på nolltid.
            </p>
            <a
              className="md:ml-40"
              href="https://www.flower.se/hub/sa-funkar-flower-hub/"
            >
              <button className="btn-dark mt-4">Så funkar det</button>
            </a>
          </div>
          <div className="md:pl-6">
            <picture>
              <source
                media="(min-width: 1900px)"
                srcSet="https://images.ohmyhosting.se/7qjVYTrbUv_FdJKN0GWa_eJmiBk=/1152x1400/smart/filters:quality(85)/https%3A%2F%2Fwww.flower.se%2Fwp-content%2Fuploads%2F2024%2F06%2FHighRes_FlowerHub2160x2160-2.png"
              />
              <source
                media="(min-width: 651px)"
                srcSet="https://images.ohmyhosting.se/7qjVYTrbUv_FdJKN0GWa_eJmiBk=/1152x1400/smart/filters:quality(85)/https%3A%2F%2Fwww.flower.se%2Fwp-content%2Fuploads%2F2024%2F06%2FHighRes_FlowerHub2160x2160-2.png"
              />
              <source
                media="(max-width: 650px)"
                srcSet="https://images.ohmyhosting.se/HIsb6WaRctYd3WYZmW-ugVvL7l8=/780x840/smart/filters:quality(85)/https%3A%2F%2Fwww.flower.se%2Fwp-content%2Fuploads%2F2024%2F06%2FHighRes_FlowerHub2160x2160-2.png"
              />
              <img
                decoding="async"
                src="https://images.ohmyhosting.se/7qjVYTrbUv_FdJKN0GWa_eJmiBk=/1152x1400/smart/filters:quality(85)/https%3A%2F%2Fwww.flower.se%2Fwp-content%2Fuploads%2F2024%2F06%2FHighRes_FlowerHub2160x2160-2.png"
                className="w-full max-w-[576px] rounded-lg"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
      <section className="relative w-full">
        <picture className="w-full max-w-[257px] lg:max-w-[373px]">
          <source
            media="(min-width: 1900px)"
            srcSet="https://images.ohmyhosting.se/GricGVuFheXJMS_htaaedicSG9s=/2160x1200/smart/filters:quality(85)/https%3A%2F%2Fwww.flower.se%2Fwp-content%2Fuploads%2F2023%2F11%2F68e21221ebe7616904c433b87ccaec0a-scaled.jpeg"
          />
          <source
            media="(min-width: 651px)"
            srcSet="https://images.ohmyhosting.se/t1qTfwzZRviiwNL5UgQXPW5byfc=/1440x800/smart/filters:quality(85)/https%3A%2F%2Fwww.flower.se%2Fwp-content%2Fuploads%2F2023%2F11%2F68e21221ebe7616904c433b87ccaec0a-scaled.jpeg"
          />
          <source
            media="(max-width: 650px)"
            srcSet="https://images.ohmyhosting.se/Hh8rstK_dEiwZg_hEg-lVupABoo=/390x620/smart/filters:quality(85)/https%3A%2F%2Fwww.flower.se%2Fwp-content%2Fuploads%2F2023%2F11%2F68e21221ebe7616904c433b87ccaec0a-scaled.jpeg"
          />
          <img
            decoding="async"
            src="https://images.ohmyhosting.se/t1qTfwzZRviiwNL5UgQXPW5byfc=/1440x800/smart/filters:quality(85)/https%3A%2F%2Fwww.flower.se%2Fwp-content%2Fuploads%2F2023%2F11%2F68e21221ebe7616904c433b87ccaec0a-scaled.jpeg"
            className="w-full"
            loading="lazy"
          />
        </picture>
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="container flex h-full w-full flex-col justify-end py-4 md:py-16 lg:py-28 xl:py-36">
            <div className="bg-sky max-w-[574px] rounded-md px-8 py-9 lg:rounded-lg">
              <h4 className="heading-lg md:pb-6">Få betalt varje månad</h4>
              <p className="body">
                Som batteriägare får du en fast ersättning per månad då ditt
                batteri är med och bidrar med stödtjänster till elnätet.
                Ersättningen dras direkt på din elhandelsfaktura.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" data-bg="#FFEBDB">
        <div className="container grid grid-cols-12 pb-16 pt-16 md:pt-24">
          <div className="col-span-12 pb-6 md:col-span-4 md:pb-0">
            <h2 className="heading-lg pr-12">Upp till 310 kr/kW/mån</h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-0 lg:pl-28">
            <div className="wysiwyg-list max-w-[611px]">
              <p>
                Varje månad som ditt batteri är med och stöttar elnätet får du
                betalt. Hur mycket beror på ditt batteris aktiva effekt.
                Ersättningen uppdateras kvartalsvis och baseras på ett index av
                marknaderna för stödtjänster det senaste kvartalet. Ersättningen
                dras direkt från din elhandelsfaktura varje månad.
              </p>
              <p>
                Ett typiskt hemmabatterisystem med aktiv effekt om{" "}
                <strong>10 kW</strong> genererar <strong>37 200 kr</strong> på
                ett år.
              </p>
            </div>
            <p className="body pt-6 font-bold">Aktuella ersättningsnivåer</p>
            <div className="body mt-4 rounded-lg bg-white">
              <div className="md:body chart-line border-peach-900 grid grid-cols-7 gap-2 border-b p-4 text-[16px] md:gap-0">
                <p className="col-span-3">Växelriktare</p>
                <p className="col-span-3 pl-2 md:pl-0">Ersättning</p>
                <p className="col-span-1 text-end">Q3</p>
              </div>
              <div className="md:body chart-line border-peach-900 grid grid-cols-7 gap-2 border-b p-4 text-[16px] md:gap-0">
                <p className="col-span-3">Huawei SUN2000 KTL-M1*</p>
                <p className="col-span-3 pl-2 md:pl-0">310 kr/kW/mån</p>
                <p className="col-span-1 text-end" />
              </div>
              <div className="md:body chart-line border-peach-900 grid grid-cols-7 gap-2 border-b p-4 text-[16px] md:gap-0">
                <p className="col-span-3">SAJ H2</p>
                <p className="col-span-3 pl-2 md:pl-0">310 kr/kW/mån</p>
                <p className="col-span-1 text-end" />
              </div>
              <div className="md:body chart-line border-peach-900 grid grid-cols-7 gap-2 border-b p-4 text-[16px] md:gap-0">
                <p className="col-span-3">Sungrow SH RT</p>
                <p className="col-span-3 pl-2 md:pl-0">310 kr/kW/mån</p>
                <p className="col-span-1 text-end" />
              </div>
            </div>
            <p className="md:body pb-12 pt-2 text-[14px] md:pt-6">
              *Under förutsättning att Huawei's senaste uppdatering till sina
              växelriktare finns tillgänglig och är installerad på systemet.
              Annars ligger ersättningen något lägre då systemet inte är
              tillräckligt snabbt för alla relevanta marknader. Prislista för Q4
              läggs upp på denna sida senast 1 september 2024.
            </p>
            <a href="https://www.flower.se/hub/elavtal/">
              <button className="btn-dark mb-6">Läs mer</button>
            </a>
          </div>
        </div>
      </section>
      <FaqSection />
      <QuoteSlider />
    </>
  );
};

export default HomePage;
