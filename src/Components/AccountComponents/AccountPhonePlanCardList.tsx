// @ts-nocheck

import AccountPhonePlanCard from "./AccountPhonePlanCard";

export default function AccountPhonePlanCardList(props) {
  let phonePlans = props.phonePlans;

  return (
    <ul className="list-group list-group-horizontal justify-content-center">
      {phonePlans.map((phonePlan) => (
        <li className="list-group-item" key={phonePlan.id}>
          <AccountPhonePlanCard phonePlan={phonePlan} />
        </li>
      ))}
    </ul>
  );
}