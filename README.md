hackforsavannah.org - event landing page w/ eventbrite integration
=================
** NOTE: All members of the Open Savannah GH org. have direct edit privileges. It's recommended that you first fork your own copy of this repo, however, make your changes, then submit a PR to ensure nothing gets out of whack with the YAML data files.**

### Making content updates

1. All content for the landing page is found in the `_data/` subfolder as `.yml` data files.
2. To edit any of the `.yml` files, simply click on them and you can edit them directly in GitHub.

---


## Local Development
If you want to make significant changes to the site, it's recommended you do so on your local machine first so as to speed up the development process. Here's how to do that.

### Requirements
* [Ruby 1.9.3 or later](https://www.ruby-lang.org/en/documentation/installation/)
* [Bundler](http://bundler.io/)
* [Git](https://git-scm.com/downloads)
* Text Editor

### Installation

#### Clone the Repository
`git clone https://github.com/opensavannah/hackforsavannah.org`

#### Install Dependencies
`bundle`

#### Build the Pages
`jekyll build`

#### Serve the Pages
`jekyll serve --watch`

### Hack Away

With `jekyll serve --watch` running, you should be able to access the site on [http://localhost:4000](http://localhost:4000)! Thanks to the `--watch` flag, any changes you make to the markdown (md) files will update automatically!

For reference, here's an [awesome markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Contribute, change things, submit a pull request! We will all contribute.
