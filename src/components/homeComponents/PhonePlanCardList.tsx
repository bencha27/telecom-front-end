// @ts-nocheck

import PhonePlanCard from "./PhonePlanCard";

let phonePlans = [
  {
    "PhonePlanId": "1",
    "PlanName": "Basic Plan",
    "DeviceLimit": 1,
    "Price": 25,
    "PlanDetails": "500 minutes, 500 texts, and 1GB of data"
  },
  {
    "PhonePlanId": "2",
    "PlanName": "Unlimited Everything",
    "DeviceLimit": 2,
    "Price": 75,
    "PlanDetails": "Unlimited talk, text, and data"
  },
  {
    "PhonePlanId": "3",
    "PlanName": "Family Plan",
    "DeviceLimit": 4,
    "Price": 100,
    "PlanDetails": "Unlimited talk, text, and data for 4 devices"
  }
];

export default function PhonePlanCardList() {
  return (
    <ul className="list-group list-group-horizontal justify-content-center">
      {phonePlans.map((phonePlan) => (
        <li className="list-group-item" key={phonePlan.PhonePlanId}>
          <PhonePlanCard phonePlan={phonePlan} />
        </li>
      ))}
    </ul>
  );
}