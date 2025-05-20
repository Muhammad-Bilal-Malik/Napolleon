import card1 from "../Assets/Images/card1.svg";
import pic02 from "../Assets/Images/pic02.svg";
import pic03 from "../Assets/Images/pic03.svg";
import pic04 from "../Assets/Images/pic04.svg";
import uparrowgreen from "../Assets/Images/uparrowgreen.svg";
import uparrowred from "../Assets/Images/uparrowred.svg";
import TrandingCard from "./Trandingcard01";

const AllCards = () => {
  return (
    <div className="flex justify-center gap-2.5  mb-8">
      <div>
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Buy Yes",
              style: "bg-[#00D094]/30 rounded-sm text-[#00D094]",
              icon: uparrowgreen,
            },
            {
              id: 2,
              text: "Buy Yes",
              style: "bg-[#FF0000]/28 text-[#D1141E]/74",
              icon: uparrowred,
            },
          ]}
          headingText="Trump ends Ukraine war in first 90 days?"
          picture={card1}
        />
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Christchurch",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Linacre",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Balliol",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
            {
              id: 1,
              text: "Brasenose",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
          ]}
          headingText="Torpids 2025 Day 1 Men's?"
          picture={pic03}
        />
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Christchurch",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Linacre",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Balliol",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
            {
              id: 1,
              text: "Brasenose",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
          ]}
          headingText="Global Maternity Care Standards Quiz"
          picture={pic04}
        />
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Buy Yes",
              style: "bg-[#00D094]/30 rounded-sm text-[#00D094]",
              icon: uparrowgreen,
            },
            {
              id: 2,
              text: "Buy Yes",
              style: "bg-[#FF0000]/28 text-[#D1141E]/74",
              icon: uparrowred,
            },
          ]}
          headingText="Trump ends Ukraine war in first 90 days?"
          picture={card1}
        />
      </div>
      <div>
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Christchurch",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Linacre",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Balliol",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
            {
              id: 1,
              text: "Brasenose",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
          ]}
          headingText="Who won the first boat race between colleges on the Isis?
"
          picture={pic02}
        />
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Buy Yes",
              style: "bg-[#00D094]/30 rounded-sm text-[#00D094]",
              icon: uparrowgreen,
            },
            {
              id: 2,
              text: "Buy Yes",
              style: "bg-[#FF0000]/28 text-[#D1141E]/74",
              icon: uparrowred,
            },
          ]}
          headingText="Trump ends Ukraine war in first 90 days?"
          picture={pic04}
        />
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Buy Yes",
              style: "bg-[#00D094]/30 rounded-sm text-[#00D094]",
              icon: uparrowgreen,
            },
            {
              id: 2,
              text: "Buy Yes",
              style: "bg-[#FF0000]/28 text-[#D1141E]/74",
              icon: uparrowred,
            },
          ]}
          headingText="Trump ends Ukraine war in first 90 days?"
          picture={card1}
        />
        <TrandingCard
          cardButton1={[
            {
              id: 1,
              text: "Christchurch",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Linacre",
              style: "bg-[#EEEEEE] text-[#162F42] mb-2",
            },
            {
              id: 1,
              text: "Balliol",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
            {
              id: 1,
              text: "Brasenose",
              style: "bg-[#EEEEEE] text-[#162F42]",
            },
          ]}
          headingText="Torpids 2025 Day 1 Men's"
          picture={pic03}
        />
      </div>
    </div>
  );
};

export default AllCards;
