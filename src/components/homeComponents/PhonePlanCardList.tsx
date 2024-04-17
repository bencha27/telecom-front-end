// @ts-nocheck

import PhonePlanCard from "./PhonePlanCard";

export default function PhonePlanCardList(props) {
  let phonePlans = props.phonePlans;

  return (
    <ul className="list-group list-group-horizontal justify-content-center">
      {phonePlans.map((phonePlan) => (
        <li className="list-group-item" key={phonePlan.id}>
          <PhonePlanCard phonePlan={phonePlan} />
        </li>
      ))}
    </ul>
  );
}