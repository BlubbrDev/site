import ReplitLogo from "../components/icons/replit";
import IPOLogo from "../components/icons/ipo";
import InstitutionIcon from "../components/icons/institution";
import MergerIcon from "../components/icons/merger";
import BlubbrReplitIcon from "../components/icons/blubbr_replit";
import NewsScrapingIcon from "../components/icons/news_scraping";
import GuyHoldingCheckIcon from "../components/icons/guy_holding_check";
import DiamondHand from "../components/icons/DiamondHand";
import Icon1 from "../components/icons/Icon-1";
import Icon2 from "../components/icons/Icon-2";
import Icon3 from "../components/icons/Icon-3";
import Icon4 from "../components/icons/Icon-4";
import Icon5 from "../components/icons/Icon-5";
import Icon6 from "../components/icons/Icon-6";
import Icon7 from "../components/icons/Icon-7";
import Icon8 from "../components/icons/Icon-8";
import Icon9 from "../components/icons/Icon-9";
import Icon10 from "../components/icons/Icon-10";
import Icon11 from "../components/icons/Icon-11";
import Icon12 from "../components/icons/Icon-12";
import Icon13 from "../components/icons/Icon-13";

const data = [
  {
    title: "What is a SPAC?",
    image: "/assets/images/base_whale_460_200.png",
    content: [
      {
        body:
          "SPAC stands for Special Purpose Acquisition Company or Special Purpose Acquisition Corporation.",
        icon: <Icon5 />,
      },
      {
        body:
          "SPACs are publically traded companies with only cash and no operations.",
        icon: <InstitutionIcon />,
      },
      {
        body:
          "Their sole purpose is to raise money, search for a revolutionary private company, and take them public.",
        icon: <GuyHoldingCheckIcon />,
      },
    ],
  },
  {
    title: "If Blubbr was a SPAC",
    image: "/assets/images/around_the_world_460_200.png",
    content: [
      {
        body:
          "We would IPO our SPAC, Blubbr A, under the ticker BLBA with a share price of $10.",
        icon: <IPOLogo />,
      },
      {
        body:
          "If we started with $100 million in our bank account, we could issue 100,000 shares of BLBA.",
        icon: <Icon1 />,
      },
      {
        body:
          "Our management team would be seeking to acquire a company worth around $100M.",
        icon: <Icon3 />,
      },
    ],
  },
  {
    title: "SPAC Patrol Bot",
    image: "/assets/images/alert_whale_460_200.png",
    content: [
      {
        body:
          "When a SPAC files for an IPO with the SEC it files a registration form and a S-1 form.",
        icon: <Icon4 />,
      },
      {
        body:
          "Our SPAC Patrol bot immediately identifies the new registration and S-1 filings and notifies our community.",
        icon: <NewsScrapingIcon />,
      },
      {
        body:
          "Our community members read our SPAC summary and decide if they want to invest.",
        icon: <Icon13 />,
      },
    ],
  },
  {
    title: "Media Coverage",
    image: "/assets/images/tv_news_460_200.png",
    content: [
      {
        body:
          "Before the merger is announced, media companies might release articles about potential targets for BLBA.",
        icon: <Icon12 />,
      },
      {
        body:
          "For example, BLBA might be looking to acquire a company such as Replit.",
        icon: <ReplitLogo />,
      },
      {
        body:
          "If the market thinks this is a good acquisition, the BLBA share price will increase above $10 a share.",
        icon: <Icon7 />,
      },
    ],
  },
  {
    title: "NotiFi News Bot",
    image: "/assets/images/news_whale_460_200.png",
    content: [
      {
        body:
          "Monitors news for all SPACs and instantly notifies our community regarding potential mergers.",
        icon: <Icon8 />,
      },
      {
        body:
          "We instantly notify our community when news articles are released that detail information about SPAC mergers.",
        icon: <Icon11 />,
      },
      {
        body:
          "Our community is then able to open positions in the SPACs before the merger news is reflected in their share prices.",
        icon: <DiamondHand />,
      },
    ],
  },
  {
    title: "Blubbr Strikes Back",
    image: "/assets/images/paper_charts_460_200.png",
    content: [
      {
        body:
          "SPAC issuers will often create subsequent SPACs after finding acquisitions for their current SPACs.",
        icon: <Icon6 />,
      },
      {
        body:
          "If the Blubbr team believes BLBA is close to finalizing a deal, Blubbr may file for a second SPAC, BLBB.",
        icon: <Icon9 />,
      },
      {
        body:
          "This indicates BLBA is likely to merge soon and will likely see a price increase.",
        icon: <Icon7 />,
      },
    ],
  },
  {
    title: "Whale Watcher Bot",
    image: "/assets/images/whale_watch_460_200.png",
    content: [
      {
        body:
          "Watches for instances where the parent company of a current SPAC files for a second SPAC IPO.",
        icon: <Icon10 />,
      },
      {
        body:
          "Instant notifications following subsequent filings mean our community members can buy shares before the new filing is priced in.",
        icon: <Icon8 />,
      },
      {
        body:
          "Instant notifications following subsequent filings mean our community members can get in before the new filing is priced in.",
        icon: <Icon2 />,
      },
    ],
  },
  {
    title: "The Merger",
    image: "/assets/images/to_the_moon_460_200.png",
    content: [
      {
        body:
          "Blubbr and Replit file with the SEC to officially announce they are merging.",
        icon: <BlubbrReplitIcon />,
      },
      {
        body:
          "In 3 months, the BLBR ticker will change to REPL and all Blubbr shares become Replit shares.",
        icon: <MergerIcon />,
      },
      {
        body:
          "BLBR price will likely have strong price movements to reflect the merger confirmation.",
        icon: <Icon7 />,
      },
    ],
  },
  {
    title: "SPAC Merger Bot",
    image: "/assets/images/whale_fam_460_200.png",
    content: [
      {
        body:
          "Prior to announcing their mergers, the SEC requires SPACs to file a 425 form detailing their mergers.",
        icon: <Icon9 />,
      },
      {
        body:
          "The SPAC Merger Bot instantly notifies our community upon new 425 filings. ",
        icon: <Icon8 />,
      },
      {
        body: "Blubbr members are the first to hear when SPACs finally merge!",
        icon: <Icon11 />,
      },
    ],
  },
];

export default data;
