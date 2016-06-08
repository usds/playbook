---
play_number: 12
title: Use data to drive decisions
---

At every stage of a project, we should measure how well our service is working for our users. This includes measuring how well a system performs and how people are interacting with it in real-time. Our teams and agency leadership should carefully watch these metrics to find issues and identify which bug fixes and improvements should be prioritized. Along with monitoring tools, a feedback mechanism should be in place for people to report issues directly.

### Checklist
1. Monitor system-level resource utilization in real time
2. Monitor system performance in real-time (e.g. response time, latency, throughput, and error rates)
3. Ensure monitoring can measure median, 95th percentile, and 98th percentile performance
4. Create automated alerts based on this monitoring
5. Track concurrent users in real-time, and monitor user behaviors in the aggregate to determine how well the service meets user needs
6. Publish metrics internally
7. Publish metrics externally
8. Use an experimentation tool that supports multivariate testing in production


### Key Questions
- What are the key metrics for the service?
- How have these metrics performed over the life of the service?
- Which system monitoring tools are in place?
- What is the targeted average response time for your service? What percent of requests take more than 1 second, 2 seconds, 4 seconds, and 8 seconds?
- What is the average response time and percentile breakdown (percent of requests taking more than 1s, 2s, 4s, and 8s) for the top 10 transactions?
- What is the volume of each of your service’s top 10 transactions? What is the percentage of transactions started vs. completed?
- What is your service’s monthly uptime target?
- What is your service’s monthly uptime percentage, including scheduled maintenance? Excluding scheduled maintenance?
- How does your team receive automated alerts when incidents occur?
- How does your team respond to incidents? What is your post-mortem process?
- Which tools are in place to measure user behavior?
- What tools or technologies are used for A/B testing?
- How do you measure customer satisfaction?
