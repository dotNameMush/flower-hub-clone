const Footer = () => {
  return (
    <footer
      className="section -mt-12 rounded-t-[32px] border-t bg-black py-16 md:-mt-16 md:rounded-t-[32px] lg:py-28 xl:py-36"
      data-bg="#ffffff"
    >
      <div className="container flex min-h-[600px] flex-col lg:flex-row">
        <div className="flex w-full flex-col justify-between lg:w-1/2">
          <h3 className="text-52 max-w-[552px] pb-12 leading-[55px] text-white lg:text-[4.125rem] lg:leading-[66px]">
            Energizing tomorrow
          </h3>
          <img
            src="https://www.flower.se/wp-content/themes/flowertech/img/logo_neg_white.svg"
            className="hidden max-w-[376px] lg:block"
            alt="Flowertech"
          />
        </div>
        <div className="flex w-full flex-col pb-10 md:flex-row lg:w-1/2 lg:pb-0">
          <div className="flex w-full flex-col justify-between md:w-1/2">
            <ul className="flex flex-col gap-4">
              <h4 className="pb-2 pt-10 text-gray-500 lg:pt-0">Our services</h4>
              <a
                href="https://www.flower.se/energy-storage/"
                className="text-white hover:underline"
              >
                Energy storage
              </a>
              <a
                href="https://www.flower.se/solar-power/"
                className="text-white hover:underline"
              >
                Solar power
              </a>
              <a
                href="https://www.flower.se/wind-power/"
                className="text-white hover:underline"
              >
                Wind power
              </a>
              <a
                href="https://www.flower.se/demand-response/"
                className="text-white hover:underline"
              >
                Demand response
              </a>
              <a
                href="https://www.flower.se/residential/"
                className="text-white hover:underline"
              >
                Residential
              </a>
            </ul>
            <ul className="flex flex-col gap-4">
              <h4 className="pb-2 pt-10 text-gray-500 lg:pt-0">
                Navigate website
              </h4>
              <a
                href="http://www.flower.se"
                className="text-white hover:underline"
              >
                Flower.se
              </a>
              <a
                href="https://www.flower.se/our-services/"
                className="text-white hover:underline"
              >
                Our services
              </a>
              <a
                href="https://www.flower.se/about-us/"
                className="text-white hover:underline"
              >
                About us
              </a>
              <a
                href="https://www.mynewsdesk.com/se/flower"
                className="text-white hover:underline"
              >
                News
              </a>
              <a
                href="https://www.flower.se/careers/"
                className="text-white hover:underline"
              >
                Careers
              </a>
              <a
                href="https://www.flower.se/contact-us/"
                className="text-white hover:underline"
              >
                Contact us
              </a>
            </ul>
          </div>
          <div className="flex w-full flex-col justify-between md:w-1/2">
            {/* <ul class="flex flex-col gap-4">
              <h4 class="text-gray-500 pb-2 pt-10 lg:pt-0">Langaue</h4>
              <span class="text-white">SV | EN</span>
          </ul> */}
            <ul className="flex flex-col gap-4">
              <h4 className="pb-2 text-gray-500">Social media</h4>
              <a
                href="https://www.linkedin.com/company/flowertechnologies/"
                className="text-white hover:underline"
              >
                LinkedIn
              </a>
            </ul>
            {/* <ul class="flex flex-col gap-4">
              <h4 class="text-gray-500 pb-2 pt-10 lg:pt-0">Cookies</h4>
              <a href="#" class="text-white hover:underline">Cookiesettings</a>
          </ul> */}
            <span className="pb-2 pt-10 text-gray-500 lg:pt-0">
              ©Flower 2024
            </span>
          </div>
        </div>
        <img
          src="https://www.flower.se/wp-content/themes/flowertech/img/logo_neg_white.svg"
          className="max-w-[365px] lg:hidden"
          alt="Flower logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
