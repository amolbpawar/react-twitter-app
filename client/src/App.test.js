
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SearchUsersTweets from "./components/SearchUsersTweets";
import Tweets from "./components/Tweets";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with default name 'Platform9Sys'", () => {
  act(() => {
    render(<SearchUsersTweets />, container);
  });
  expect(container.querySelector("[name='username']").getAttribute("value")).toBe("Platform9Sys");
});

it("renders tweets list", () => {
  let recentTweets = { "data": [{ "id": "1375958564985012227", "text": "Complete our step-by-step deployment tutorial to set up your first Kubernetes cluster using pure open source Kubernetes by March 31st, 2021, and earn a free limited edition Platform9 shirt.\n\nhttps://t.co/VyDMC2ycx0" }, { "id": "1375173246522429440", "text": "Kubernetes Cloud Services: Compare Amazon Elastic Kubernetes Service (EKS), Azure Kubernetes Service (AKS), and Google Kubernetes Engine (GKE). Criteria include price, scalability, standardization, update frequency, recovery, service mesh, and more.\nhttps://t.co/UCH7GgEsRG" }, { "id": "1374507760415510528", "text": "The growth of edge computing and the rise of 5G is driving new models of data distribution and delivery. Check out our discussion on\n5G Telco Edge use cases, implementation best practices, and the implications of Kubernetes in the telco edge environment.\nhttps://t.co/AYMNtJu6cN" }], "meta": { "newest_id": "1375958564985012227", "oldest_id": "1374507760415510528", "result_count": 3 } };
  act(() => {
    render(<Tweets recentTweets={recentTweets} />, container);
  });

  expect(container.textContent).toContain(recentTweets.data[0].text);
  expect(container.textContent).toContain(recentTweets.data[1].text);
  expect(container.textContent).toContain(recentTweets.data[2].text);
});

