// @ts-nocheck

import HomePhonePlanCard from "./HomePhonePlanCard";

export default function HomePhonePlanCardList(props) {
  let phonePlans = props.phonePlans;

  return (
    <ul className="list-group list-group-horizontal justify-content-center">
      {phonePlans.map((phonePlan) => (
        <li className="list-group-item" key={phonePlan.id}>
          <HomePhonePlanCard phonePlan={phonePlan} />
        </li>
      ))}
    </ul>
  );
}