import React, { useEffect } from "react";
import useFetch from "../util/useFetch";
import { DEFAULT_ROLES } from "../constants";

const mockData = [
  {
    title: "Support",
    links: [
      { display_name: "Manage User Accounts", url: "www.manage.com" },
      { display_name: "Assign Roles", url: "www.assign.com" },
      { display_name: "Help Desk", url: "www.help.com" },
    ],
  },

  {
    title: "Finance",
    links: [
      { display_name: "Finance Reports", url: "www.reports.com" },
      { display_name: "Accounts Payable", url: "www.payable.com" },
      { display_name: "Accounts Payable", url: "www.receivable.com" },
      { display_name: "Tax", url: "www.tax.com" },
    ],
  },
  {
    title: "Sales",
    links: [
      { display_name: "Sales Reports", url: "www.salesReports.com" },
      { display_name: "Sales Leads", url: "www.leads.com" },
      { display_name: "Sales Demo", url: "www.demo.com" },
    ],
  },
  {
    title: "HR",
    links: [
      { display_name: "New Hire On-boarding", url: "www.onboarding.com" },
      { display_name: "Benefits", url: "www.benefits.com" },
      { display_name: "Payroll", url: "www.payroll.com" },
      { display_name: "Off-boarding", url: "www.offboarding.com" },
      { display_name: "HR Reports", url: "www.hr.com" },
    ],
  },
  {
    title: "Technology",
    links: [
      { display_name: "Application Monitoring", url: "www.monitoring.com" },
      { display_name: "Tech Support", url: "www.support.com" },
      { display_name: "App Development", url: "www.development.com" },
      { display_name: "App Admin", url: "www.admin.com" },
      { display_name: "Release Management", url: "www.release.com" },
    ],
  },
];

const getLinks = role => {
  return mockData.filter(
    element => DEFAULT_ROLES.includes(element.title) || element.title === role
  );
};

const Requester = ({ setLinkData, role }) => {
  const url = `http://localhost:${3001}/`;
  const body = {
    role: role,
  };
  const [response, loading, hasError] = useFetch(url, body);

  useEffect(() => {
    //setLinkData(response);
    setLinkData(getLinks(role));
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occurred.</div>
      ) : (
        <div> Server response: {JSON.stringify(response)}</div>
      )}
    </div>
  );
};

export default Requester;
