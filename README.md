## About This Project

This *Playbook* is intended to help users in their quest to create or enhance an effective and efficient Information Sharing and Safeguarding (IS&S) Environment, and can be used at any point in the environment’s lifecycle.

One way to advance the IS&S Environment is by putting the right processes and practices in place to drive outcomes and accountability and allow people and companies to do their best work. The IS&S Playbook documents these best practices and processes.

[**The IS&S Playbook**](http://www.standardscoordination.org/iss-playbook "Link to the IS&S Playbook") has been designed with the following principles in mind:

- Information sharing and safeguarding environments are built on a set of capabilities and services that provide ways to exchange information for better decision making, across systems, organizations, jurisdictions, and domains. 
- Taking the if-you-build-it-they-will-come approach often does not work – it can be a costly failure and it can result in irreversible damage to trust in the project goals. The continuous engagement of the end user throughout the entire process will increase the probability of IS&S Environment success.
- IS&S Standards are the lifeblood of information sharing and safeguarding and considered and used in every project. If there is a technological reason that will not currently allow for the use of standards, these standards should be a part of the future planning process for enhancements/upgrades.
- Automation is essential in IS&S testing; it significantly speeds the development and deployment of IS&S Environments and improves process and system replication.
- Throughout the lifecycle, decisions are coordinated and made at the lowest possible level of organizational competency.
- It pays to use advanced program and development methodologies where the users are intimately involved in making incremental and iterative progress (e.g., Agile development process) rather than the traditional system development life cycle (e.g., waterfall).
- Almost every play is iterative, in that initial trials often lead to repetition but at a higher scale of implementation. For example, initial start-up funding will be easier to acquire than whole project funding at the outset of the project.  

There are also a few key principles that will help guide the use of this Playbook:

- The Playbook is meant to be functional at a starting-from-scratch level, however, we know that many different types of organizations at varying levels of experience will access these plays. For beginning users, consider the plays as a suggested roadmap and incorporate the tried and tested processes of your more experienced team members. For more advanced users, take an opportunity to view these plays and see if there is anything you are missing in your current process.
- There are plenty of tricky spots that users will encounter along the road towards an IS&S Environment, and one of the most tricky can be the interaction between government and solution providers in the context of procurement. In the pre-procurement phase, there is a low risk for open discussions between government and industry, but as the procurement phase evolves, the risk increases and many limitations may be introduced. We recognize the difficulty in walking this fine line, and the plays try to speak at a very general level so many different agencies can adapt them as needed.
- When you discover a resource that others can use in their quest for an IS&S Environment, share it with us! Become a part of the collaborative community by contributing your experience and artifacts for the benefit of future projects. (We think this is so important, we included sharing as a play in the Playbook!)

## We Want Your Feedback
The IS&S Playbook was developed by the IJIS Institute for the Standards Coordinating Council using the U.S. Digital Services Playbook as the foundational framework. This is a draft version and user feedback is always welcome. We are especially interested in hearing from the community of interest about additional resources for the plays. 

We encourage your feedback and suggestions on these documents. Content and feature suggestions and discussions are welcome via [GitHub Issues](https://github.com/Project-Interoperability/playbook/issues). You may also propose changes to the content directly by submitting a [pull request](https://help.github.com/articles/creating-a-pull-request "More Information on Submitting Pull Requests"). Or if you prefer, you can just email us at info@standardscoordination.org. 

You don't need to install any software to suggest a change. To propose a change from your browser, [select a play in the `_plays` folder](https://github.com/Project-Interoperability/playbook/tree/gh-pages/_plays "Link to the Plays Markdown files"). You can use GitHub's in-browser editor to edit files and submit a "pull request" for your changes to be merged into the document. 

If you would like to see and discuss the changes that other people have proposed, [visit the "Pull Requests" section](https://github.com/Project-Interoperability/playbook/pulls "Link to the Pull Requests Section of GitHub") and [browse the issues](https://github.com/Project-Interoperability/playbook/issues "Link to the Issues Section of GitHub").

## Standards Coordinating Council (SCC)
To learn more about the SCC, visit us at [**standardscoordination.org**](http://www.standardscoordination.org "Link to Standards Coordinating Countil homepage") or email us at info@standardscoordination.org. 

## Technical Details
The Playbook is compiled from [Markdown](https://help.github.com/articles/github-flavored-markdown "Link to More Information About Markdown") files using [Jekyll](https://github.com/jekyll/jekyll "Link to More Information about Jekyll"). To propose a specific change, you can submit a [pull request](https://help.github.com/articles/creating-a-pull-request "More Information on Submitting Pull Requests") with your change to one of these source Markdown files. The Plays from the Playbook are [available in the `_plays` folder](https://github.com/Project-Interoperability/playbook/tree/gh-pages/_plays "Link to the Plays Markdown files"), while the [TechFAR is contained in this markdown file](https://github.com/Project-Interoperability/playbook/blob/gh-pages/_includes/techfar-online.md "Link to the TechFAR Markdown File").

You can also use Github's in-browser editing feature to make an edit to one of these Markdown files and submit your change for consideration without needing to install any additional software.

### Running the Site Locally

To run the site locally on your own computer (most helpful for previewing your own changes), you will need to install Jekyll and other dependencies:

If you don't already have Ruby and Bundler installed, follow [the first two steps in these Jekyll installation instructions](https://help.github.com/articles/using-jekyll-with-pages#installing-jekyll "Installation instructions for Jekyll").

Next, [fork this repository](http://help.github.com/fork-a-repo/ "Instructions for Forking Your Repository") and clone it on your computer.

Navigate to the folder on your computer, and run the command `$ bundle install` at the command line prompt.

To run the site locally, run `jekyll serve --watch`, then visit `http://localhost:4000/` in your browser to preview the site.

### Editing the Stylesheets

This project uses [Sass](http://sass-lang.com/ "Link to Learn More About Sass") for managing its style sheets. These styles are defined in the [`styles.scss` file](assets/_sass/styles.scss). We use [Jekyll's native SASS support](http://jekyllrb.com/docs/assets/) to auto-generates the required CSS when you run the site locally, as described above.

## License
As a work of the United States Government, this project is in the public domain within the United States.

Additionally, we waive copyright and related rights in the work worldwide through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
