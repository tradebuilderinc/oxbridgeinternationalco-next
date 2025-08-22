import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Footer } from "@layouts/Footer";
import { useWindowSize } from "@hooks/useWindowSizeNew";
import LeftArrow from "@components/Slider/LeftArrowNew";
import RightArrow from "@components/Slider/RightArrowNew";
import { HeaderInner } from "@layouts/HeaderInner";
import Team from "@components/Team";

export default function Home({ ...props }) {
  const { widthType } = useWindowSize();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/contact.js";
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => setIsLoaded(false);
    script.onerror = () => setError(true);
    return () => {
      document.head.removeChild(script);
    };
  }, ["/js/contact.js"]);

  return (
    <>
      <HeaderInner></HeaderInner>

      <section className="team">
        <div className="min-container">
          <h5 className="main-title">MEET OUR TEAM</h5>
          <h6 className="main-describ">
            Our focus is always on quality over quantity. It shows in our choice
            of people too. They are experienced, enthusiastic, and so much more.
            Meet our team, who make Oxbridge what it is.
          </h6>

          <div className="mainpageteam">
            <Team id="8JruLKu6eTqyc6ZH7" />

            {/* <div className="teammember2">
              <div className="row">
                <div className="col-md-6">
                  <div className="inner text-right">
                    <h5>Steve Becerra / Founder &amp; CEO</h5>

                    <div className="custom-readmore">
                      <p></p>
                      <p>
                        A trusted name in the Silicon Valley Commercial Real
                        Estate market and development arena, Steve Becerra
                        brings over forty years of solid experience to the table
                        for every client and every negotiation. Professionally
                        trained and certified as an expert negotiator, Steve
                        brings a wealth of knowledge and experience to the
                        transactions for each and everyone of his clients.
                        Totaling over $2 billion of closed real estate
                        transactions that Steve has successfully closed. Steve
                        has a vast wide variety of clientele that range from
                        domestic to interna ...
                      </p>
                      <a href="javascript:void(0)" className="readmore">
                        Read more{" "}
                      </a>
                    </div>

                    <ul>
                      <li>LICENSE NUMBER #00838722</li>
                      <li>
                        EMAIL <span>sbecerra@oxbridgeinternationalco.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://imk.storage.googleapis.com/file/STfP6amrXCQrctzSX/file_file_1615467990069"
                    className="img-fluid user-width"
                  />
                </div>
                <div className="col-md-12">
                  <div className="custom-readless">
                    <p></p>
                    <p>
                      A trusted name in the Silicon Valley Commercial Real
                      Estate market and development arena, Steve Becerra brings
                      over forty years of solid experience to the table for
                      every client and every negotiation. Professionally trained
                      and certified as an expert negotiator, Steve brings a
                      wealth of knowledge and experience to the transactions for
                      each and everyone of his clients. Totaling over $2 billion
                      of closed real estate transactions that Steve has
                      successfully closed. Steve has a vast wide variety of
                      clientele that range from domestic to international
                      clients. He has been the exclusive Broker for multiple
                      international companies in the acquisition of major
                      Investments that include hospitality, office, land and
                      development. His scope involves acquisitions,
                      negotiations, analyst of due diligence and all closing
                      aspects.{" "}
                    </p>
                    <br />
                    <p>
                      Steve was the founding broker and General Manager for a
                      commercial brokerage wholly owned by Berkshire Hathaway.
                      The firm was recognized by Costar as one of the most
                      successful commercial real estate division in Silicon
                      Valley. Steve led the division to be ranked number 10
                      commercial real estate firms by Costar in 2017 and in 2018
                      was ranked number 5 in the Bay Area. He personally was
                      recognized as a Power Broker by Costar in 2018.{" "}
                    </p>
                    <br />
                    <p>
                      It is his vast experience and knowledge in commercial real
                      estate that it has placed Steve as the Chief Executive
                      Officer for Oxbridge International Co. As the driving
                      force in Oxbridge International Co., it is quickly
                      becoming the new wave of commercial brokerage combining
                      technological marketing, global contacts and deep
                      experienced and knowledgeable commercial agents. It is
                      becoming the power behind this new age commercial
                      brokerage.{" "}
                    </p>
                    <br />
                    <p>
                      Steve also leverages his strong background in real estate
                      development. This includes over twenty five years of
                      experience building luxury custom homes for all kinds of
                      clientele. He also has a background in land sales and
                      acquisitions for national and local builders -- with a
                      scope of experience ranging from site analysis and
                      entitlement processing to land planning. It is his
                      knowledge of what constitutes a truly quality project,
                      combined with what buyers need in a negotiation that makes
                      Steve a valued partner in the acquisition process.
                    </p>
                    <br />
                    <p>
                      On a professional level, Steve has served on seventeen
                      committees and task-forces for boards ranging from the
                      Santa Clara Valley Board of Realtors (formerly known as
                      the San Jose Real Estate Board) to the Silicon Valley
                      Association of Realtors (formerly Los Gatos-Saratoga Board
                      of Realtors). His membership list includes professional
                      organizations such as the National Association of
                      Realtors, California Association of Realtors, ISIS (Japan
                      Association of Brokers) Farm and Ranchers Association of
                      Brokers, and South County Association of Manager Brokers.{" "}
                    </p>
                    <br />
                    <p>
                      As an active member in his community, Steve has served on
                      several non profit boards. Most recently he was appointed
                      and served as Chairman of the Board of Directors for
                      Family Supportive Housing, a homeless shelter catering
                      exclusively to families. As Chairman of the Board, he led
                      the drive on a $16 million dollar Capital Campaign to fund
                      and develop a new 35,000 square foot family shelter. The
                      project was a Leed Silver Certified Building and has
                      become a model across the nation.{" "}
                    </p>
                    <br />
                    <p>
                      Steve enjoys spending time with his family and grandkids.
                      His passions include hunting and fishing, which has taken
                      him to all corners of the globe.{" "}
                    </p>
                    <p></p>
                    <a href="javascript:void(0)" className="readless">
                      Read less
                    </a>
                  </div>
                </div>
              </div>

              <div className="team-list">
                <h5>SPECIALITIES</h5>
                <ul>
                  <li>Commercial</li>
                  <li>Luxury Residential</li>
                </ul>
              </div>

              <div className="team-list">
                <h5>Asset Type</h5>
                <ul>
                  <li>Hospitality</li>
                  <li>Office</li>
                  <li>Land sales, acquisitions, and development</li>
                  <li>Multifamily</li>
                  <li>Industrial</li>
                </ul>
              </div>

              <div className="team-list">
                <h5>ACCREDITATIONS</h5>
                <ul>
                  <li>Certified Negotiator</li>
                  <li>Closed over 200 REO transactions</li>
                  <li>Costar Powerbroker 2018</li>
                </ul>
              </div>

              <div className="team-list border-none">
                <h5>EDUCATION</h5>
                <ul>
                  <li>
                    Bachelor of Business Administration from San Jose State
                    University
                  </li>
                </ul>
              </div>
              <div className="custom-show-link">
                <h5 className="available-txt">properties available</h5>
                <a href="/" className="show-link">
                  show
                </a>
              </div>
            </div>

            <div className="teammember1">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://imk.storage.googleapis.com/file/rFbv8364wyXCthuZS/file_file_1613768785731"
                    className="img-fluid user-width"
                  />
                </div>
                <div className="col-md-6">
                  <div className="inner">
                    <h5>Rachel Becerra / President</h5>

                    <div className="custom-readmore">
                      <p></p>
                      <p>
                        Rachel Becerra is a Bay Area native, who grew up in the
                        real estate development and brokerage industry. At a
                        young age she was exposed to the processes of project
                        analysis, budgeting, entitlement and developments of
                        real estate projects throughout the Bay Area. Being
                        engaged in this real estate industry, it was only a
                        natural course for her to pursue as a career. Rachel has
                        expanded her knowledge through her technology experience
                        at Cisco and real estate finance background with Wells
                        Fargo. As a mortgage consultant, Rachel was the
                        preferred ...
                      </p>
                      <a href="javascript:void(0)" className="readmore">
                        Read more
                      </a>
                    </div>
                    <ul>
                      <li>LICENSE NUMBER #02051870</li>
                      <li>
                        EMAIL <span>rbecerra@oxbridgeinternationalco.com</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="custom-readless">
                    <p></p>
                    <p>
                      Rachel Becerra is a Bay Area native, who grew up in the
                      real estate development and brokerage industry. At a young
                      age she was exposed to the processes of project analysis,
                      budgeting, entitlement and developments of real estate
                      projects throughout the Bay Area. Being engaged in this
                      real estate industry, it was only a natural course for her
                      to pursue as a career. Rachel has expanded her knowledge
                      through her technology experience at Cisco and real estate
                      finance background with Wells Fargo. As a mortgage
                      consultant, Rachel was the preferred lender for a domestic
                      home builder and her team was ranked top team in the U.S.
                    </p>
                    <br />
                    <p>
                      These skills have proven to be invaluable to all of
                      Rachel's clients. Her attention to detail ensures that a
                      thorough due diligence of any project will be completed on
                      each transaction. As being a part of a top commercial team
                      in Silicon Valley, Rachel has gained experience and
                      exposure in every asset className. She has assisted both
                      international and domestic clients and continues to build
                      her long list of satisfied clients.{" "}
                    </p>
                    <br />
                    <p>
                      As President and Co-Founder of Oxbridge International Co.,
                      Rachel's vision is to expand international and domestic
                      clients. To make all global markets accessible to
                      Oxbridge's cliental. She continues to evaluate and
                      innovate new technologies and data sources to deeper
                      analyzation of their client's portfolios or anticipated
                      acquisitions.{" "}
                    </p>
                    <br />
                    <p>
                      Rachel shares her father's dream of creating a company
                      that provides top tier service and tools to all their
                      clients seeking to maximize their real estate portfolio in
                      all global markets. She is committed to continuing the
                      legacy of her father which includes integrity, knowledge,
                      and discipline in servicing their clients at the highest
                      level.{" "}
                    </p>
                    <p></p>
                    <a href="javascript:void(0)" className="readless">
                      Read less
                    </a>
                  </div>
                </div>
              </div>

              <div className="team-list">
                <h5>SPECIALITIES</h5>
                <ul>
                  <li>Commercial</li>
                  <li>Luxury Residential</li>
                </ul>
              </div>

              <div className="team-list">
                <h5>Asset Type</h5>
                <ul>
                  <li>Hospitality</li>
                  <li>Office</li>
                  <li>Retail</li>
                  <li>Multifamily</li>
                  <li>Industrial</li>
                  <li>Land sales, acquisitions, and development</li>
                </ul>
              </div>

              <div className="team-list">
                <h5>ACCREDITATIONS</h5>
                <ul>
                  <li>Top national mortgage consultant for Wells Fargo</li>
                </ul>
              </div>

              <div className="team-list border-none">
                <h5>EDUCATION</h5>
                <ul>
                  <li>
                    Bachelor of Arts from Saint Mary's College of California
                  </li>
                </ul>
              </div>
              <div className="custom-show-link">
                <h5 className="available-txt">properties available</h5>
                <a
                  href="https://www.oxbridgeinternationalco.com/"
                  className="show-link"
                >
                  show
                </a>
              </div>
            </div>

            <div className="teammember2">
              <div className="row">
                <div className="col-md-6">
                  <div className="inner text-right">
                    <h5>Jeffory J Scharff / Senior Broker Associate</h5>

                    <div className="custom-readmore">
                      <p></p>
                      <p>
                        {" "}
                        Jeffory J Scharff, Esq. (Jeff) brings more than 30
                        years' experience as an attorney to Oxbridge
                        International. His work involved land and natural
                        resources including the acquisition and divestment of
                        agricultural, commercial, industrial, and residential
                        properties. He has represented and negotiated the
                        purchase and sale of properties for individual property
                        owners, farmers and ranchers, businesses, developers and
                        Fortune 500 companies.&nbsp; This included the
                        resolution of regulatory compliance issues to facilitate
                        transactions. &nbsp; Th ...
                      </p>
                      <a href="javascript:void(0)" className="readmore">
                        Read more{" "}
                      </a>
                    </div>

                    <ul>
                      <li>LICENSE NUMBER DRE#: 001993612</li>
                      <li>
                        EMAIL <span>jscharff@oxbridgeint.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://imk.storage.googleapis.com/file/STfP6amrXCQrctzSX/file_file_1671627741083"
                    className="img-fluid user-width"
                  />
                </div>
                <div className="col-md-12">
                  <div className="custom-readless">
                    <p></p>
                    <p>
                      {" "}
                      Jeffory J Scharff, Esq. (Jeff) brings more than 30 years'
                      experience as an attorney to Oxbridge International. His
                      work involved land and natural resources including the
                      acquisition and divestment of agricultural, commercial,
                      industrial, and residential properties. He has represented
                      and negotiated the purchase and sale of properties for
                      individual property owners, farmers and ranchers,
                      businesses, developers and Fortune 500 companies.&nbsp;
                      This included the resolution of regulatory compliance
                      issues to facilitate transactions. &nbsp; Those issues
                      ranged from zoning and land use to environmental impacts
                      and impairment.&nbsp; Today, Jeff brings this expertise
                      and experience to his commercial real estate clients.
                    </p>
                    <p></p>
                    <a href="javascript:void(0)" className="readless">
                      Read less
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-show-link">
                <h5 className="available-txt">properties available</h5>
                <a
                  href="https://www.oxbridgeinternationalco.com/"
                  className="show-link"
                >
                  show
                </a>
              </div>
            </div>

            <div className="teammember1">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://imk.storage.googleapis.com/file/STfP6amrXCQrctzSX/file_file_1621285475151"
                    className="img-fluid user-width"
                  />
                </div>
                <div className="col-md-6">
                  <div className="inner">
                    <h5>David Fissel / Charter Member</h5>

                    <div className="custom-readmore">
                      <p>
                        A San Jose native for over 60 years, real estate has
                        been part of David's life from the very beginning. His
                        father was a spec builder and real estate agent. As a
                        son of an agent, he grew up understanding what it takes
                        to be successful in this industry. Hard work, integrity
                        and respect. He has over 15 years in the real estate
                        business with experience in multi-family investments,
                        office and industrial. ...
                      </p>
                      <a href="javascript:void(0)" className="readmore">
                        Read more
                      </a>
                    </div>
                    <ul>
                      <li>LICENSE NUMBER Lic#: 00772947</li>
                      <li>
                        EMAIL <span>dfissel@oxbridgeint.com</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="custom-readless">
                    <p>
                      A San Jose native for over 60 years, real estate has been
                      part of David's life from the very beginning. His father
                      was a spec builder and real estate agent. As a son of an
                      agent, he grew up understanding what it takes to be
                      successful in this industry. Hard work, integrity and
                      respect. He has over 15 years in the real estate business
                      with experience in multi-family investments, office and
                      industrial.{" "}
                    </p>
                    <a href="javascript:void(0)" className="readless">
                      Read less
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-show-link">
                <h5 className="available-txt">properties available</h5>
                <a
                  href="https://www.oxbridgeinternationalco.com/"
                  className="show-link"
                >
                  show
                </a>
              </div>
            </div>

            <div className="teammember2">
              <div className="row">
                <div className="col-md-6">
                  <div className="inner text-right">
                    <h5>Jordan Shields / Charter Member</h5>

                    <div className="custom-readmore">
                      <p></p>
                      <p>
                        <br />
                      </p>{" "}
                      ...<p></p>
                      <a href="javascript:void(0)" className="readmore">
                        Read more{" "}
                      </a>
                    </div>

                    <ul>
                      <li>LICENSE NUMBER 02006566</li>
                      <li>
                        EMAIL <span>jshields@oxbridgeint.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://imk.storage.googleapis.com/file/STfP6amrXCQrctzSX/file_file_1634948578992"
                    className="img-fluid user-width"
                  />
                </div>
                <div className="col-md-12">
                  <div className="custom-readless">
                    <p></p>
                    <p>
                      <br />
                    </p>
                    <p></p>
                    <a href="javascript:void(0)" className="readless">
                      Read less
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-show-link">
                <h5 className="available-txt">properties available</h5>
                <a
                  href="https://www.oxbridgeinternationalco.com/"
                  className="show-link"
                >
                  show
                </a>
              </div>
            </div>

            <div className="teammember1">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://imk.storage.googleapis.com/file/STfP6amrXCQrctzSX/file_file_1621286160070"
                    className="img-fluid user-width"
                  />
                </div>
                <div className="col-md-6">
                  <div className="inner">
                    <h5>Joseph Mello / Charter Member</h5>

                    <div className="custom-readmore">
                      <p>
                        Joseph Mello is a Bay Area native who has spent his
                        whole life exploring. He was brought up in a family that
                        has been in Santa Clara Valley for well over 100 years.
                        Joseph began in the real estate business 5 years ago
                        specializing in land and agricultural properties
                        throughout California. He specializes in partnering
                        private landowners with trusts, open space authorities,
                        conservation groups, and government agencies. Joseph
                        also understands how critical water and habitat are to
                        these kinds of properties. Joseph has a Bachelor of
                        Science in ...
                      </p>
                      <a href="javascript:void(0)" className="readmore">
                        Read more
                      </a>
                    </div>
                    <ul>
                      <li>LICENSE NUMBER </li>
                      <li>
                        EMAIL <span>jmello@oxbridgeint.com</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="custom-readless">
                    <p>
                      Joseph Mello is a Bay Area native who has spent his whole
                      life exploring. He was brought up in a family that has
                      been in Santa Clara Valley for well over 100 years. Joseph
                      began in the real estate business 5 years ago specializing
                      in land and agricultural properties throughout California.
                      He specializes in partnering private landowners with
                      trusts, open space authorities, conservation groups, and
                      government agencies. Joseph also understands how critical
                      water and habitat are to these kinds of properties. Joseph
                      has a Bachelor of Science in Biology from Santa Clara
                      University. Before commercial real estate he spent most of
                      his career at a local government agency managing and
                      planning work related to flood control and drinking water
                      infrastructure. He brings intimate knowledge of how water
                      and environmental concerns can play a critical role in
                      land use. Joseph is honored to be one of the Charter
                      Members of Oxbridge International Co. He has known and
                      worked with both Steve and Rachel for many years. He
                      shares their vision of making Oxbridge International Co. a
                      global powerhouse in the real estate industry.
                    </p>
                    <a href="javascript:void(0)" className="readless">
                      Read less
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-show-link">
                <h5 className="available-txt">properties available</h5>
                <a
                  href="https://www.oxbridgeinternationalco.com/"
                  className="show-link"
                >
                  show
                </a>
              </div>
            </div>

            <div className="teammember2">
              <div className="row">
                <div className="col-md-6">
                  <div className="inner text-right">
                    <h5>Angela Wu / Senior Sales Associate</h5>

                    <div className="custom-readmore">
                      <p></p>
                      <p>
                        Angela Wu provides every client with her knowledge,
                        professionalism, and local expertise. Her solid track
                        record in commercial real estate has earned her a
                        superior reputation in the Bay Area. As a small business
                        entrepreneur for over 15 years, Angela knows that real
                        estate investment creates financial independence, and
                        she provides expert advice to further her clients
                        financial futures.
                        <br />
                        Angela helps build her clients real estate portfolio,
                        she finds the right property for their unique needs and
                        goals. She provides detailed proper ...
                      </p>
                      <a href="javascript:void(0)" className="readmore">
                        Read more{" "}
                      </a>
                    </div>

                    <ul>
                      <li>LICENSE NUMBER DRE#01999079</li>
                      <li>
                        EMAIL <span>angelawurealty@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://imk.storage.googleapis.com/file/STfP6amrXCQrctzSX/file_file_1675381284999"
                    className="img-fluid user-width"
                  />
                </div>
                <div className="col-md-12">
                  <div className="custom-readless">
                    <p></p>
                    <p>
                      Angela Wu provides every client with her knowledge,
                      professionalism, and local expertise. Her solid track
                      record in commercial real estate has earned her a superior
                      reputation in the Bay Area. As a small business
                      entrepreneur for over 15 years, Angela knows that real
                      estate investment creates financial independence, and she
                      provides expert advice to further her clients financial
                      futures.
                      <br />
                      Angela helps build her clients real estate portfolio, she
                      finds the right property for their unique needs and goals.
                      She provides detailed property analysis reports and
                      consultations. For investors, Angela leverages her
                      business background to build portfolios, provide
                      comprehensive property analysis reports, and give custom
                      evaluations and consultations. Angela's scope includes
                      acquisitions, negotiations, and coordination of due
                      diligence and all closing aspects.
                      <br />
                      An active member of her Bay Area community, Angela is the
                      President of the Chinese American Real Estate Association
                      in Silicon Valley. She has also served as a commercial
                      committee member and board advisor in the Silicon Valley
                      chapter of the Asian Real Estate Association of America.
                      Angela holds a Bachelor of Science degree in business
                      administration and computer information systems from
                      California State University. She speaks fluent English,
                      Mandarin, and Cantonese.
                    </p>
                    <p></p>
                    <a href="javascript:void(0)" className="readless">
                      Read less
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-show-link">
                <h5 className="available-txt">properties available</h5>
                <a
                  href="https://www.oxbridgeinternationalco.com/"
                  className="show-link"
                >
                  show
                </a>
              </div>
            </div>

            <div className="teammember1">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://imk.storage.googleapis.com/file/STfP6amrXCQrctzSX/file_file_1704432578985"
                    className="img-fluid user-width"
                  />
                </div>
                <div className="col-md-6">
                  <div className="inner">
                    <h5>Linda Marcella Oleson / Senior Sales Associate </h5>

                    <div className="custom-readmore">
                      <p></p>
                      <p>
                        <br />
                      </p>{" "}
                      ...<p></p>
                      <a href="javascript:void(0)" className="readmore">
                        Read more
                      </a>
                    </div>
                    <ul>
                      <li>LICENSE NUMBER </li>
                      <li>
                        EMAIL <span>lmoleson@oxbridgeint.com</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="custom-readless">
                    <p></p>
                    <p>
                      <br />
                    </p>
                    <p></p>
                    <a href="javascript:void(0)" className="readless">
                      Read less
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-show-link">
                <h5 className="available-txt">properties available</h5>
                <a
                  href="https://www.oxbridgeinternationalco.com/"
                  className="show-link"
                >
                  show
                </a>
              </div>
            </div>

            <div className="teammember2">
              <div className="row">
                <div className="col-md-6">
                  <div className="inner text-right">
                    <h5>Tsovo Massena / Sales Associate</h5>

                    <div className="custom-readmore">
                      <p></p>
                      <p>Tsovo Massena, MBA </p>
                      <p>
                        Former marketing executive distinguished for her work
                        with multiple Fortune 500 companies, including
                      </p>
                      <p>
                        PepsiCo, American Express, P&amp;G, and Ferrero.
                        Currently, she serves as a specialized Commercial Real
                        Estate
                      </p>
                      <p>
                        Investment Advisor at Oxbridge International. Massena is
                        skilled in guiding both buyers and sellers, helping
                      </p>
                      <p>
                        investors navigate every aspect of the real estate
                        market to meet their diverse investment objectives.
                      </p>
                      <p>
                        Her comprehensive services extend beyond transaction
                        coordination to enco ...
                      </p>
                      <a href="javascript:void(0)" className="readmore">
                        Read more{" "}
                      </a>
                    </div>

                    <ul>
                      <li>LICENSE NUMBER 02179615</li>
                      <li>
                        EMAIL <span>tmassena@oxbridgeint.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="https://imk.storage.googleapis.com/file/STfP6amrXCQrctzSX/file_file_1658961641170"
                    className="img-fluid user-width"
                  />
                </div>
                <div className="col-md-12">
                  <div className="custom-readless">
                    <p></p>
                    <p>Tsovo Massena, MBA </p>
                    <p>
                      Former marketing executive distinguished for her work with
                      multiple Fortune 500 companies, including
                    </p>
                    <p>
                      PepsiCo, American Express, P&amp;G, and Ferrero.
                      Currently, she serves as a specialized Commercial Real
                      Estate
                    </p>
                    <p>
                      Investment Advisor at Oxbridge International. Massena is
                      skilled in guiding both buyers and sellers, helping
                    </p>
                    <p>
                      investors navigate every aspect of the real estate market
                      to meet their diverse investment objectives.
                    </p>
                    <p>
                      Her comprehensive services extend beyond transaction
                      coordination to encompass valuation analysis,
                    </p>
                    <p>
                      market trend assessments, and risk evaluation. Massena's
                      tailored approach to each unique investment
                    </p>
                    <p>
                      scenario involves the assembly of specialized teams,
                      including industry experts such as lenders, lawyers,
                    </p>
                    <p>
                      architects, and contractors. This customized strategy not
                      only facilitates smoother transaction processes but
                    </p>
                    <p>
                      also aims to maximize returns, whether in acquiring,
                      disposing of, or managing real estate assets. In the
                    </p>
                    <p>
                      complexities of today's market, Tsovo Massena stands as a
                      trusted advisor, providing the necessary
                    </p>
                    <p>
                      analytical insights and hands-on expertise for investors
                      to achieve their multifaceted real estate goals.
                    </p>
                    <p></p>
                    <a href="javascript:void(0)" className="readless">
                      Read less
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-show-link">
                <h5 className="available-txt">properties available</h5>
                <a
                  href="https://www.oxbridgeinternationalco.com/"
                  className="show-link"
                >
                  show
                </a>
              </div>
            </div> */}


          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
