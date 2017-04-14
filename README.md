## About This Project

The American people expect to interact with government through digital channels such as websites, email, and mobile applications. By building better digital services that meet the needs of the people that use our services, we can make the delivery of our policy and programs more effective.

One way to advance smarter digital service delivery is by putting the right processes and practices in place to drive outcomes and accountability and allow people and companies to do their best work.  The Digital Services Playbook and the TechFAR Handbook document these best practices and processes: 

- [**The Digital Services Playbook**](https://playbook.cio.gov "Link to the Digital Services Playbook") identifies a series of “plays” drawn from successful best practices from the private sector and government that, if followed together, will help government build effective digital services.  The plays outline an approach to delivering services that increases our ability to be flexible, iterative and, most importantly, to focus on the needs of the people that use our services.
- [**The TechFAR Handbook**](https://playbook.cio.gov/techfar "Link to the TechFAR Handbook") highlights the flexibilities in the Federal Acquisition Regulation (FAR) that can help agencies implement “plays” from the Playbook that would be accomplished with acquisition support – with a particular focus on how to use contractors to support an iterative, customer-driven software development process, as is routinely done in the private sector.

## We Want Your Feedback
We encourage your feedback and suggestions on these documents. Content and feature suggestions and discussions are welcome via [GitHub Issues](https://github.com/WhiteHouse/playbook/issues). You may also propose changes to the content directly by submitting a [pull request](https://help.github.com/articles/creating-a-pull-request "More Information on Submitting Pull Requests").

You don't need to install any software to suggest a change. To propose a change from your browser, [select a play in the `_plays` folder](https://github.com/WhiteHouse/playbook/tree/gh-pages/_plays "Link to the Plays Markdown files"), or open the [TechFAR file](https://github.com/WhiteHouse/playbook/blob/gh-pages/_includes/techfar-online.md "Link to the TechFAR Markdown File"). You can use GitHub's in-browser editor to edit files and submit a "pull request" for your changes to be merged into the document. 

If you would like to see and discuss the changes that other people have proposed, [visit the "Pull Requests" section](https://github.com/WhiteHouse/playbook/pulls "Link to the Pull Requests Section of GitHub") and [browse the issues](https://github.com/WhiteHouse/playbook/issues "Link to the Issues Section of GitHub").

Feedback collected before September 1, 2014 will be considered for inclusion in the next release of the Digital Services Playbook and the TechFAR Handbook.

## Technical Details

The Playbook and the TechFAR Handbook are compiled from [Markdown](https://help.github.com/articles/github-flavored-markdown "Link to More Information About Markdown") files using [Jekyll](https://github.com/jekyll/jekyll "Link to More Information about Jekyll"). To propose a specific change, you can submit a [pull request](https://help.github.com/articles/creating-a-pull-request "More Information on Submitting Pull Requests") with your change to one of these source Markdown files. The Plays from the Playbook are [available in the `_plays` folder](https://github.com/WhiteHouse/playbook/tree/gh-pages/_plays "Link to the Plays Markdown files"), while the [TechFAR is contained in this markdown file](https://github.com/WhiteHouse/playbook/blob/gh-pages/_includes/techfar-online.md "Link to the TechFAR Markdown File").

You can also use Github's in-browser editing feature to make an edit to one of these Markdown files and submit your change for consideration without needing to install any additional software.

### Running the Site Locally

To run the site locally on your own computer (most helpful for previewing your own changes), you will need to install Jekyll and other dependencies:

1. If you don't already have Ruby and Bundler installed, follow [the first two steps in these Jekyll installation instructions](https://help.github.com/articles/using-jekyll-with-pages#installing-jekyll "Installation instructions for Jekyll").
2. Next, [fork this repository](https://help.github.com/articles/fork-a-repo/ "Instructions for Forking Your Repository") and clone it on your computer.
3. Navigate to the folder on your computer, and run the command `bundle install` at the command line prompt.

To run the site locally, run `jekyll serve --watch`, then visit `http://localhost:4000/` in your browser to preview the site.

### Editing the Stylesheets

This project uses [Sass](http://sass-lang.com/ "Link to Learn More About Sass") for managing its style sheets. These styles are defined in the [`styles.scss` file](assets/_sass/styles.scss). We use [Jekyll's native SASS support](https://jekyllrb.com/docs/assets/) to auto-generate the required CSS when you run the site locally, as described above.

## License
As a work of the United States Government, this project is in the public domain within the United States.

Additionally, we waive copyright and related rights in the work worldwide through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
