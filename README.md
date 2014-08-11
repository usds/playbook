## About This Project

The American people expect to interact with government through digital channels such as websites, email, and mobile applications. By building better digital services that meet the needs of the people that use our services, we can make the delivery of our policy and programs more effective.

One way to advance smarter digital service delivery is by putting the right processes and practices in place to drive outcomes and accountability and allow people and companies to do their best work.  The Digital Services Playbook and the TechFAR Handbook document these best practices and processes: 

- [**The Digital Services Playbook**](http://playbook.cio.gov "Link to the Digital Services Playbook") identifies a series of “plays” drawn from successful best practices from the private sector and government that, if followed together, will help government build effective digital services.  The plays outline an approach to delivering services that increases our ability to be flexible, iterative and, most importantly, to focus on the needs of the people that use our services.
- [**The TechFAR Handbook**](http://playbook.cio.gov/techfar "Link to the TechFAR Handbook") highlights the flexibilities in the Federal Acquisition Regulation (FAR) that can help agencies implement “plays” from the Playbook that would be accomplished with acquisition support – with a particular focus on how to use contractors to support an iterative, customer-driven software development process, as is routinely done in the private sector.

## We Want Your Feedback
We encourage your feedback and suggestions on these documents. Content and feature suggestions and discussions are welcome via [GitHub Issues](https://github.com/WhiteHouse/playbook/issues). You may also propose changes to the content directly by submitting a [pull request](https://github.com/WhiteHouse/playbook/pulls).

## Technical Details

The Playbook and the TechFAR Handbook are compiled from Markdown files using Jekyll. To propose a specific change, you can submit a [pull request](https://github.com/WhiteHouse/playbook/pulls) with your change to one of these source Markdown files, [available in the `_includes` folder](https://github.com/WhiteHouse/playbook/pulls "Link to the Markdown files"). 

### Running the Site Locally

To run the site locally on your own computer (most helpful for previewing your own changes), you will need to install Jekyll and other dependencies:

If you don't already have Ruby and Bundler installed, follow [the first two steps in these Jekyll installation instructions](https://help.github.com/articles/using-jekyll-with-pages#installing-jekyll "Installation instructions for Jekyll").

Next, [fork this repository](http://help.github.com/fork-a-repo/ "Instructions for Forking Your Repository") and clone it on your computer.

Navigate to the folder on your computer, and run the command `$ bundle install` at the command line prompt.

To run the site locally, run `jekyll serve --watch`, then visit `http://localhost:4000/` in your browser to preview the site.

### Editing the Stylesheets

This project uses [SASS](http://sass-lang.com/ "Link to Learn More About SASS") for managing its style sheets. If you would like to make changes to the site's styles, you should edit the `assets/sass/styles.css.scss` file.

To compile this file into a CSS in the correct location, you can run: `sass --watch assets/sass/styles.css.scss:assets/css/styles.css` 

## License
As a work of the United States Government, this project is in the public domain within the United States.

Additionally, we waive copyright and related rights in the work worldwide through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
