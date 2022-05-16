## About This Project

TBA

## We Want Your Feedback
We encourage your feedback and suggestions on these documents. Content and feature suggestions and discussions are welcome via [GitHub Issues](https://github.com/publiccodenet/process-code/issues). You may also propose changes to the content directly by submitting a [pull request](https://help.github.com/articles/creating-a-pull-request "More Information on Submitting Pull Requests").

You don't need to install any software to suggest a change. To propose a change from your browser, [select a play in the `_plays` folder](https://github.com/usds/playbook/tree/gh-pages/_plays "Link to the Plays Markdown files"). You can use GitHub's in-browser editor to edit files and submit a "pull request" for your changes to be merged into the document.

If you would like to see and discuss the changes that other people have proposed, [visit the "Pull Requests" section](https://github.com/publiccodenet/process-code/pulls "Link to the Pull Requests Section of GitHub") and [browse the issues](https://github.com/publiccodenet/process-code/issues "Link to the Issues Section of GitHub").

## Technical Details

The Playbook is compiled from [Markdown](https://help.github.com/articles/github-flavored-markdown "Link to More Information About Markdown") files using [Jekyll](https://github.com/jekyll/jekyll "Link to More Information about Jekyll"). To propose a specific change, you can submit a [pull request](https://help.github.com/articles/creating-a-pull-request "More Information on Submitting Pull Requests") with your change to one of these source Markdown files. The Plays from the Playbook are [available in the `_plays` folder](https://github.com/publiccodenet/process-code/tree/gh-pages/_plays "Link to the Plays Markdown files").

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

We waive copyright and related rights in the work worldwide through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
