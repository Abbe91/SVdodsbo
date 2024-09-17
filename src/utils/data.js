import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineCalculator } from "react-icons/ai";
import { FaTruckMoving } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";
import { AiOutlineCreditCard } from "react-icons/ai";

export const navlinks = [
  {
    id: 2,
    label: "Tömning",
    path: "/tomma-bohag",
  },
  {
    id: 3,
    label: "Värdering",
    path: "/vardera-dodsbo",
  },
  {
    id: 4,
    label: "Städning",
    path: "/stadning-av-dodsbo",
  },
  {
    id: 5,
    label: "Flytt",
    path: "/bohagsflytt",
  },
  {
    id: 6,
    label: "Uppköp",
    path: "/uppkop-av-dodsbo",
  },
  {
    id: 7,
    label: "Bortforsling",
    path: "/bortforsling-dodsbo",
  },
  {
    id: 8,
    label: "Återvinning",
    path: "/atervinning",
  },
  {
    id: 9,
    label: "Avfallshantering",
    path: "/avfallshantering",
  },
  {
    id: 10,
    label: "Återvinningsstation",
    path: "/atervinningsstation",
  },
  {
    id: 11,
    label: "Återvinningscentral",
    path: "/atervinningscentral",
  },
];
export const erbjuder = [
  {
    id: 22,
    title: "Dödsbo Hantering",
    icon: <BiHomeAlt />,
  },
  {
    id: 55,
    title: "Värdering av Dödsbo och Bohag",
    icon: <AiOutlineCalculator />,
  },
  {
    id: 33,
    title: "Flytt & Packning",
    icon: <FaTruckMoving />,
  },
  {
    id: 43,
    title: "Städning, Flyttstäd & Sanering",
    icon: <MdCleaningServices />,
  },
  {
    id: 51,
    title: "Uppköp & Försäljning",
    icon: <AiOutlineCreditCard />,
  },
];

export const customerReviews = [
  {
    id: 144444,
    service: "Tömning av dödsbo",
    kund: "Anna Johansson",
    path: "/tomning-av-dodsbo",
    comment:
      "Döddsbo Sv gjorde ett fantastiskt jobb med att tömma och städa efter mammas bortgång. Deras kompletta lösning överträffade våra förväntningar.",
  },
  {
    id: 221,
    service: "Uppköp av dödsbo",
    kund: "Erik Nilsson",
    path: "/uppkop-av-dodsbo",
    comment:
      "Vi fick en kostnadsfri värdering och sedan ett rättvist erbjudande för vårt dödsbo. Döddsbo Sv hanterade det överblivna materialet professionellt genom att donera det.",
  },
  {
    id: 222,
    service: "Försäljning av dödsbo",
    kund: "Sofia Larsson",
    path: "/salja-dodsbo-goteborg",
    comment:
      "Sälja lösöre från mitt dödsbo gick smidigt och enkelt. Döddsbo Sv levererade en utmärkt service genom att också städa efteråt.",
  },
  {
    id: 243,
    service: "Bohagsflytt",
    kund: "Magnus Svensson",
    path: "/bohagsflytt",
    comment:
      "Flytten av vårt bohag var problemfri tack vare Döddsbo Sv. De tog hand om allt från packning till flyttstädning effektivt och kostnadseffektivt.",
  },
  {
    id: 435,
    service: "Flyttstädning",
    kund: "Elin Karlsson",
    path: "/flyttstadning",
    comment:
      "Döddsbo Sv utförde en grundlig flyttstädning och tog också bort några gamla möbler från vårt förråd. Mycket bekvämt och prisvärt.",
  },
  {
    id: 5777,
    service: "Bortforsling av dödsbo",
    kund: "Johan Eriksson",
    path: "/bortforsling-dodsbo-goteborg",
    comment:
      "De sorterade och transporterade vårt dödsbo med stor professionalism. Vi fick en rabatt för det material de köpte, vilket var en fin bonus.",
  },
  {
    id: 6777775,
    service: "Städning av dödsbo",
    kund: "Linda Andersson",
    path: "/stadning-av-dodsbo",
    comment:
      "Städningen av vårt dödsbo blev mycket bra. Döddsbo Sv erbjöd ett rimligt pris och tog även bort några gamla saker. Mycket nöjd med deras arbete.",
  },
  {
    id: 7456,
    service: "Sälja dödsbo Göteborg",
    kund: "Oskar Johansson",
    path: "/salja-dodsbo-goteborg",
    comment:
      "Vi använde Döddsbo Sv för att sälja vårt dödsbo i Göteborg och de hanterade allt från inköp till städning med stor effektivitet och noggrannhet.",
  },
  {
    id: 8688,
    service: "Tömma dödsbo Göteborg",
    kund: "Elisabeth Nilsson",
    path: "/tomma-dodsbo-goteborg",
    comment:
      "Tömningen av vårt dödsbo i Göteborg var utmärkt. Döddsbo Sv gjorde en uppskattad insats och vi fick även ett extra bidrag för våra gamla föremål.",
  },
  {
    id: 996986,
    service: "Städning av dödsbo Göteborg",
    kund: "Fredrik Larsson",
    path: "/stada-dodsbo-goteborg",
    comment:
      "Vi är mycket nöjda med städningen av vårt dödsbo i Göteborg. Personalens vänlighet och professionalism gjorde hela processen smidig.",
  },
  {
    id: 15460,
    service: "Uppköp av dödsbo Göteborg",
    kund: "Sara Andersson",
    path: "/uppkop-dodsbo-goteborg",
    comment:
      "Döddsbo Sv erbjöd en kostnadsfri värdering och ett bra pris för vårt dödsbo. Deras service var snabb och effektiv.",
  },
  {
    id: 146461,
    service: "Dödsbo uppköpare",
    kund: "Jens Karlsson",
    path: "/uppkop-dodsbo-goteborg",
    comment:
      "De köpte upp det mesta av lösöret i vårt dödsbo. Vi blev nöjda med både processen och det erbjudande vi fick.",
  },
  {
    id: 166462,
    service: "Köper dödsbo Göteborg",
    kund: "Anna Eriksson",
    path: "/uppkop-dodsbo-goteborg",
    comment:
      "Ett pålitligt företag i Göteborg som hanterar dödsbo på ett professionellt sätt. Deras tjänster inkluderade både uppköp och städning.",
  },
  {
    id: 166463,
    service: "Flyttstädning i Göteborg",
    kund: "Karin Svensson",
    path: "/flyttstadning-i-goteborg",
    comment:
      "Döddsbo Sv skötte flyttstädningen av vårt dödsbo utan några problem. Kommunikationen var enkel och tjänsten var snabb och effektiv.",
  },
  {
    id: 166466868,
    service: "Röja dödsbo i Göteborg",
    kund: "Mikael Johansson",
    path: "/roja-dodsbo-goteborg",
    comment:
      "Röjningen av vårt dödsbo genomfördes på ett mycket bra sätt. Döddsbo Sv tog hand om allt, även när vi inte kunde vara närvarande.",
  },
];
