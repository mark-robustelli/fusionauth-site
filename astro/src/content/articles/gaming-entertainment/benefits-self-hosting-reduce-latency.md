---
title: The Benefits of Self-Hosting Critical Infrastructure to Reduce Latency in Gaming
description: While esports competitions are high skill cap events, both hobby gamers and elite professionals alike expect optimal network conditions when they play games. A suboptimal network can turn an enjoyable event into an infuriating one that drives players away.
section: Gaming & Entertainment
author: Kealan Parr
icon: /img/icons/self-hosting-reduce-latency-gaming.svg
# date: 2022-07-19
# dateModified: 2022-07-19
---

While esports competitions are high skill cap events, both hobby gamers and elite professionals alike expect optimal network conditions when they play games. A suboptimal network can turn an enjoyable event into an infuriating one that drives players away.

With [tens of thousands of games](https://www.statista.com/statistics/552623/number-games-released-steam/) released annually, it’s important to keep your players happy, and that involves making the right technical decisions. This is even more important in professional tournaments, where [millions of dollars](https://www.esportsearnings.com/tournaments) are on the line.

One of the biggest decisions you’ll need to make is choosing between self-hosting critical infrastructure or using third-party [infrastructure-as-a-service](https://en.wikipedia.org/wiki/Infrastructure_as_a_service) (IaaS) or [software-as-a-service](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) providers. What you choose will directly affect latency and playability for your end users.

This article will take a closer look at critical infrastructure and demonstrate why self-hosted infrastructure may be a better, faster choice than third-party options for your gaming service.

## What Is Critical Infrastructure?

Critical infrastructure is what’s essential for your system to run correctly, whether it’s virtual or physical. This includes:

- Servers that process game logic
- Servers that send data to other players (if multiplayer)
- Authentication servers responsible for login
- Servers that allow your game to be downloaded

All software systems are planned and developed with the idea of [redundancy](https://sg.atsg.net/blog/redundancy-in-cloud-computing-means-checking-four-areas), or ensuring your system can survive if services go down. But there are normally more important and less important parts to your system. For example, the part of your system that processes your game logic will likely be more critical than a store that allows users to change their cosmetic skins in-game.

The way you host this infrastructure will affect multiple aspects of your system:

- Its [availability](https://en.wikipedia.org/wiki/High_availability_software)
- Its ability to [recover from disaster](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html)
- Its scalability

A key factor, though, is the latency of your network.

## Why Is Network Latency Important?

In order to ensure good gameplay, the critical infrastructure for your game needs to be hosted in a way that optimizes latency.

If your game is single-player, decreasing network latency won’t significantly increase the game’s quality. But many competitive games rely on fast reflexes. Genres like multiplayer shooters, [real-time strategy](https://en.wikipedia.org/wiki/Real-time_strategy) (RTS) games, and [multiplayer online battle arena](https://en.wikipedia.org/wiki/Multiplayer_online_battle_arena) (MOBA) games require their network latency to be as small as possible. The difference between winning and losing in these games can come down to milliseconds.

For example, professional esports teams worldwide are currently competing for the number one position in the Rocket League Championship Series, which boasts a [$6 million USD prize pool](https://esports.rocketleague.com/news/announcing-the-rlcs-202122-season/) for 2021-2022. However, Psyonix, the company behind Rocket League, has had issues with lag during past competitions. In 2021, a [lag spike](https://diamondlobby.com/tech-guides/how-to-fix-lag-spikes-on-pc) caused a player to [disconnect and concede a goal](https://www.ginx.tv/en/rocket-league/psyonix-lambasted-for-refusing-to-restart-rlcs-match-after-player-disconnected) during a game that decided which team would move into the finals—which is an incredibly high-stakes place to suffer this type of error.

As for shooter games, the community around Apex Legends has for years complained about the game’s [server tick rate being too low](https://www.ea.com/en-gb/games/apex-legends/news/servers-netcode-developer-deep-dive). This can lead to scenarios in which players are shooting opponents, but due to network latency, those opponents are in a different place and the bullets will not register. The player can’t do anything about it.

The network essentially needs to send data from the player to the server, and then on to their opponents. This becomes more difficult with geographically separate players. Because of this, some tournaments will only take place as [LAN](https://en.wikipedia.org/wiki/Local_area_network) events, such as world championships for the [Apex Legends Global Series](https://dotesports.com/apex-legends/news/apexs-2-5-million-algs-championship-lan-kicks-off-in-july). Most games do their best to match players located close together to stop this problem from happening.

## What Are Your Options for Hosting Critical Infrastructure?

With infrastructure, hosting is normally split into three categories:

- Public cloud
- Hybrid cloud
- Private cloud/self-hosting

Each option offers its own benefits and challenges, but ultimately the greater control provided by self-hosting may be the deciding factor.

### Public Cloud

In a public cloud model, the infrastructure is hosted by third-party providers over the internet. This is generally handled by the three biggest cloud service providers (CSPs): Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).

Public cloud is a [shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/) in which some of the responsibility for your system or network lies with you and some with the CSP.

It’s a common choice for hosting your infrastructure because its costs are lower. But it also has some drawbacks, such as availability or latency issues, that might make you choose one of the other models.

It’s hard to know what might be happening on the underlying hosts or networks on the public cloud. The system next door might be getting DDOSed and your site might be negatively impacted. This can be a compliance or business issue when you need absolute clarity on your infrastructure and the movement of your and your customers’ data.

Certain cloud providers also appear to have [different standards](https://twitter.com/mike_julian/status/1520845744365735936) on the quality of their customer service—and you may feel like you’re locked into a CSP that won’t handle something you could take care of yourself (if you owned your own hardware).

### Hybrid Cloud

You can keep certain parts of your system in the public cloud and host the most critical components privately. Companies use this option to capitalize on the benefits of both options, such as:

- The [elasticity](https://wa.aws.amazon.com/wellarchitected/2020-07-02T19-33-23/wat.concept.elasticity.en.html) provided by the public cloud
- The lower costs of trialing a service
- The customizability of using their own hardware

However, a hybrid model comes with some downsides as well.

First, it’s quite difficult to manage and set up compared to other hosting models. A lot of professionals are skilled in cloud services, but handling both on-site and cloud services is a more niche skill set and thus harder to hire for.

You also increase your attack vectors in this model. You have to make sure that you secure your public cloud *and* your on-premise servers—which can double the [attack surface](https://www.fortinet.com/resources/cyberglossary/attack-vector) of your network.

### Private Cloud/Self-Hosting

In the self-hosting model, you own the hardware that makes up your infrastructure.

This option requires the most work and the most physical equipment. You need a physical place to put the servers, for one. You also need to be able to cool the server room, replace servers if they fail, and update and patch servers as needed.

This generally has the highest up-front cost and is the hardest to set up, especially for smaller teams. But self-hosting offers benefits that the other options don’t.

## Why Should You Self-Host?

There are several reasons why self-hosting might be the best solution for your game projects.

### Self-Hosting Is Faster

As noted earlier, problematic network latency can damage the game experience for your users, and a CSP might not have infrastructure nearby.

For example, South Africa routes most of its international traffic to the UK. If South African teams play with American teams on American servers, the Americans will have a massive advantage. This can be the difference between a 220 ms delay and a 5 ms delay, which in network terms is incredibly slow.

This concept is known as [ping](https://en.wikipedia.org/wiki/Ping_(networking_utility)), or how long it takes for a packet to go from the user’s computer to the server. An average reaction time is [around 250 ms](https://humanbenchmark.com/tests/reactiontime). In the above example, an American would be able to get in two “clicks” on average reaction speed time, while players who are further away would likely only get in one. In game terms, this could mean a player losing to an opponent of similar skill level solely because of their network latency.

If you’re self-hosting, though, you can build local infrastructure in countries where the userbase is big enough to warrant it. Maintaining a server nearby helps ensure fast performance; you can’t beat the speed of light.

### Self-Hosting Offers More Control and Customizability

CSPs offer a more generic approach to appeal to their millions of customers. If you need a specific type of customization, you generally can’t do that with a CSP.

In order to run your unique network and ensure you have the oversight you need, you’ll have to host your own infrastructure, hire your own network engineers, and build it yourself. This also helps you ensure that your network’s security is up to your desired standards. For instance, you can remove any protocols your company deems unsafe, and take steps like only allowing [SSH](https://en.wikipedia.org/wiki/Secure_Shell).

Self-hosting also allows you to do a few other things to increase the speed of your network: 

- **Use a custom network topology tuned to your needs:** Network topologies used inside a data center often impact its efficiency. Three-tier, [fat-tree](https://www.sciencedirect.com/topics/computer-science/fat-tree-topology), and [DCell](http://metro.cs.ucla.edu/papers/dcell.pdf) are a few prominent network topologies used in data centers. They each have pros and cons, so you need to identify which one gives you the best speed to cost optimization.
- **Co-locate in a data center that is peered with a backbone provider:** Backbone providers have access to direct connections with ISPs and across international borders. The closer your data center is to the backbone provider, [the faster it’ll become](https://ieeexplore.ieee.org/document/9200935).
- **Upgrade your networking hardware:** Your networking hardware plays a large role in determining the output speed for your data center. Consider switching to [SSDs](https://www.techtarget.com/searchstorage/definition/SSD-solid-state-drive) if you haven’t already. Implement redundancies and revisit your cabling strategies to check for opportunities for optimization. Things as small as switch connectors might turn out to be the bottleneck for your data center speeds. Make sure to do a thorough assessment of your current hardware before moving ahead with other areas for improvement.
- **Customize settings such as MTU size:** You could also experiment with the configuration to find opportunities for optimization. The maximum transmission unit (MTU) size puts a cap on the size of the frame or packet that can be sent across a network. If your hosts can use jumbo frames and your switches support it, you should consider using 9000 MTU for best results.
- **Implement effective thermal management:** Heat management and hardware cooling have come a long way, but they still have an impact on the performance of hardware devices. Make sure your data center operates at an optimal temperature and you have enough constructs in place to handle cases of irregular heating.

### Self-Hosting Means More Control over Outages

In the public cloud model, you can only be as good as your CSP. If it suffers an outage, you’re stuck waiting for the CSP to fix it.

Every major cloud service provider has had some form of service outage, including Google, Microsoft, and Amazon. You can read their [publicly accessible postmortems](https://github.com/danluu/post-mortems) across a range of companies.

It can be frustrating to be left at the mercy of your third-party providers. For instance, the identity provider service [Auth0](https://auth0.com/) powers a massive number of websites. [It went down](https://status.auth0.com/incidents/zvjzyc7912g5?u=3qykby4vypfp) for a few hours in 2021 and caused major outages across the internet.

[Heroku](https://www.heroku.com/), which allows you to deploy and scale websites, is dealing with an [unauthorized access incident](https://status.heroku.com/incidents/2413) that has been ongoing since early April. It was resolved at the end of May.

If you own your service, though, you have more control and can address outages more quickly and effectively. 

### Self-Hosting Helps You Enforce Compliance

If you’re relying on a CSP, you also don’t control whether or how well it’s following the compliance rules in your region. That means your company could be out of compliance with data privacy and security laws and regulations, and you might not know or be able to prevent it, potentially leading to technical or legal difficulties later on.

When you own the data center and hardware, and your team is doing all the work, you can better ensure that your organization stays in compliance.

## Conclusion

Users need to know that they can play your game without fear of delays or outages at crucial moments. This means that providing a high-quality, low-latency network to your users can make the difference between the success or the failure of your product.

If you have the resources and capability to self-host your critical infrastructure, you’ll be better able to ensure latency and reliability for your game, potentially giving yourself the advantage over your competition.

