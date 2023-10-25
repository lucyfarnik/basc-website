"use strict";(self.webpackChunkbasc_website=self.webpackChunkbasc_website||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"starc","metadata":{"permalink":"/blog/starc","source":"@site/blog/2023-09-26-starc.md","title":"STARC: A General Framework For Quantifying Differences Between Reward Functions","description":"In order to solve a task using reinforcement learning, it is necessary to first formalise the goal of that task as a reward function. However, for many real-world tasks, it is very difficult to manually specify a reward function that never incentivises undesirable behaviour. As a result, it is increasingly popular to use reward learning algorithms, which attempt to learn a reward function from data. However, the theoretical foundations of reward learning are not yet well-developed. In particular, it is typically not known when a given reward learning algorithm with high probability will learn a reward function that is safe to optimise. This means that reward learning algorithms generally must be evaluated empirically, which is expensive, and that their failure modes are difficult to predict in advance. One of the roadblocks to deriving better theoretical guarantees is the lack of good methods for quantifying the difference between reward functions. In this paper we provide a solution to this problem, in the form of a class of pseudometrics on the space of all reward functions that we call STARC (STAndardised Reward Comparison) metrics. We show that STARC metrics induce both an upper and a lower bound on worst-case regret, which implies that our metrics are tight, and that any metric with the same properties must be bilipschitz equivalent to ours. Moreover, we also identify a number of issues with reward metrics proposed by earlier works. Finally, we evaluate our metrics empirically, to demonstrate their practical efficacy. STARC metrics can be used to make both theoretical and empirical analysis of reward learning algorithms both easier and more principled.","date":"2023-09-26T00:00:00.000Z","formattedDate":"September 26, 2023","tags":[{"label":"Safe RL","permalink":"/blog/tags/safe-rl"}],"readingTime":1.46,"hasTruncateMarker":true,"authors":[{"name":"Lucy Farnik","title":"Research Lead & Co-Founder","url":"https://www.linkedin.com/in/lucy-farnik/","imageURL":"https://media.licdn.com/dms/image/D4E03AQFjPP8Z2krXgw/profile-displayphoto-shrink_800_800/0/1675185850759?e=1701907200&v=beta&t=gkbOKuWdeQ1eureEkn9CoptxxXWRWeROkV83JlCFWBI","key":"lucy"}],"frontMatter":{"slug":"starc","title":"STARC: A General Framework For Quantifying Differences Between Reward Functions","authors":["lucy"],"tags":["Safe RL"]},"nextItem":{"title":"Sparse Autoencoders Find Highly Interpretable Features in Language Models","permalink":"/blog/autoencoders"}},"content":"In order to solve a task using reinforcement learning, it is necessary to first formalise the goal of that task as a reward function. However, for many real-world tasks, it is very difficult to manually specify a reward function that never incentivises undesirable behaviour. As a result, it is increasingly popular to use reward learning algorithms, which attempt to learn a reward function from data. However, the theoretical foundations of reward learning are not yet well-developed. In particular, it is typically not known when a given reward learning algorithm with high probability will learn a reward function that is safe to optimise. This means that reward learning algorithms generally must be evaluated empirically, which is expensive, and that their failure modes are difficult to predict in advance. One of the roadblocks to deriving better theoretical guarantees is the lack of good methods for quantifying the difference between reward functions. In this paper we provide a solution to this problem, in the form of a class of pseudometrics on the space of all reward functions that we call STARC (STAndardised Reward Comparison) metrics. We show that STARC metrics induce both an upper and a lower bound on worst-case regret, which implies that our metrics are tight, and that any metric with the same properties must be bilipschitz equivalent to ours. Moreover, we also identify a number of issues with reward metrics proposed by earlier works. Finally, we evaluate our metrics empirically, to demonstrate their practical efficacy. STARC metrics can be used to make both theoretical and empirical analysis of reward learning algorithms both easier and more principled.\\n\\n\x3c!--truncate--\x3e\\n\\nThis was authored by Joar Skalse, Lucy Farnik (BASC), Sumeet Ramesh Motwani, Erik Jenner, Adam Gleave, Alessandro Abate.\\n\\nYou can read the full paper [here](https://arxiv.org/abs/2309.15257)."},{"id":"autoencoders","metadata":{"permalink":"/blog/autoencoders","source":"@site/blog/2023-09-19-autoencoders.md","title":"Sparse Autoencoders Find Highly Interpretable Features in Language Models","description":"One of the roadblocks to a better understanding of neural networks\u2019 internals is polysemanticity, where neurons appear to activate in multiple, semantically distinct contexts. Polysemanticity prevents us from identifying concise, human understandable explanations for what neural networks are doing internally. One hypothesised cause of polysemanticity is superposition, where neural networks represent more features than they have neurons by assigning features to an overcomplete set of directions in activation space, rather than to individual neurons. Here, we attempt to identify those directions, using sparse autoencoders to reconstruct the internal activations of a language model. These autoencoders learn sets of sparsely activating features that are more interpretable and monosemantic than directions identified by alternative approaches, where interpretability is measured by automated methods. Moreover, we show that with our learned set of features, we can pinpoint the features that are causally responsible for counterfactual behaviour on the indirect object identification task (Wang et al., 2022) to a finer degree than previous decompositions. This work indicates that it is possible to resolve superposition in language models using a scalable, unsupervised method. Our method may serve as a foundation for future mechanistic interpretability work, which we hope will enable greater model transparency and steerability.","date":"2023-09-19T00:00:00.000Z","formattedDate":"September 19, 2023","tags":[{"label":"Interpretability","permalink":"/blog/tags/interpretability"}],"readingTime":1.115,"hasTruncateMarker":true,"authors":[{"name":"Aidan Ewert","title":"Research Lead & Co-Founder","url":"https://www.linkedin.com/in/aidan-ewart-648a30204/","imageURL":"https://media.licdn.com/dms/image/D4E03AQH7DsgUq4aFWg/profile-displayphoto-shrink_800_800/0/1697468770646?e=1703116800&v=beta&t=IUcocG6Yog7VcEBJeviXrs80tr0sUSyMeLePtM8Z7lo","key":"aidan"}],"frontMatter":{"slug":"autoencoders","title":"Sparse Autoencoders Find Highly Interpretable Features in Language Models","authors":["aidan"],"tags":["Interpretability"]},"prevItem":{"title":"STARC: A General Framework For Quantifying Differences Between Reward Functions","permalink":"/blog/starc"},"nextItem":{"title":"How long will reaching a Risk Awareness Moment and CHARTS agreement take?","permalink":"/blog/risk-awareness-moment"}},"content":"One of the roadblocks to a better understanding of neural networks\u2019 internals is polysemanticity, where neurons appear to activate in multiple, semantically distinct contexts. Polysemanticity prevents us from identifying concise, human understandable explanations for what neural networks are doing internally. One hypothesised cause of polysemanticity is superposition, where neural networks represent more features than they have neurons by assigning features to an overcomplete set of directions in activation space, rather than to individual neurons. Here, we attempt to identify those directions, using sparse autoencoders to reconstruct the internal activations of a language model. These autoencoders learn sets of sparsely activating features that are more interpretable and monosemantic than directions identified by alternative approaches, where interpretability is measured by automated methods. Moreover, we show that with our learned set of features, we can pinpoint the features that are causally responsible for counterfactual behaviour on the indirect object identification task (Wang et al., 2022) to a finer degree than previous decompositions. This work indicates that it is possible to resolve superposition in language models using a scalable, unsupervised method. Our method may serve as a foundation for future mechanistic interpretability work, which we hope will enable greater model transparency and steerability.\\n\\n\x3c!--truncate--\x3e\\n\\nThis was authored by Hoagy Cunningham, Aidan Ewart (BASC), Logan Riggs, Robert Huben and Lee Sharkey.\\n\\nYou can read the full paper [here](https://arxiv.org/abs/2309.08600)."},{"id":"risk-awareness-moment","metadata":{"permalink":"/blog/risk-awareness-moment","source":"@site/blog/2023-09-06-risk-awareness.md","title":"How long will reaching a Risk Awareness Moment and CHARTS agreement take?","description":"This report aims to develop a forecast to an open question from the analysis, \u2018Prospects for AI safety agreements between countries\u2019 (Guest, 2023): Is there sufficient time to have a \u2018risk awareness moment\u2019 in either the US (along with its allies) and China in place before an international AI safety agreement can no longer meaningfully reduce extinction risks from AI?","date":"2023-09-06T00:00:00.000Z","formattedDate":"September 6, 2023","tags":[{"label":"Governance","permalink":"/blog/tags/governance"}],"readingTime":0.535,"hasTruncateMarker":true,"authors":[{"name":"Gaurav Yadav","title":"Research Lead & Co-Founder","url":"https://www.linkedin.com/in/gaurayadav/","imageURL":"https://media.licdn.com/dms/image/D4D03AQGRWSI_qmKhUg/profile-displayphoto-shrink_800_800/0/1667520413208?e=1703116800&v=beta&t=yRnZPHZAF3yPHy6GOxwSLic-zSGMPL1Yix93bkDuze0","key":"gaurav"}],"frontMatter":{"slug":"risk-awareness-moment","title":"How long will reaching a Risk Awareness Moment and CHARTS agreement take?","authors":["gaurav"],"tags":["Governance"]},"prevItem":{"title":"Sparse Autoencoders Find Highly Interpretable Features in Language Models","permalink":"/blog/autoencoders"}},"content":"This report aims to develop a forecast to an open question from the analysis, \u2018Prospects for AI safety agreements between countries\u2019 (Guest, 2023): Is there sufficient time to have a \u2018risk awareness moment\u2019 in either the US (along with its allies) and China in place before an international AI safety agreement can no longer meaningfully reduce extinction risks from AI?\\n\\nBottom line: My overall estimate/best guess is that there is at least a 40% chance there will be adequate time to implement a CHARTS agreement before it ceases to be relevant.\\n\\n\x3c!--truncate--\x3e\\n\\nYou can read the report in full [here](https://docs.google.com/document/d/1MLmzULVrksH8IwAmH7wBpOTyU_7BjBAVl6N63v2vvhM/edit). A short summary can be found below."}]}')}}]);