## 0x Contribution Guide

Thank you for your interest in contributing to 0x protocol! We welcome contributions from anyone on the internet, and are grateful for even the smallest of fixes!

### How to contribute

If you'd like to contribute to 0x protocol, please fork the repo, fix, commit and send a pull request against the `development` branch for the maintainers to review and merge into the main code base. If you wish to submit more complex changes though, please check with a core dev first on [our RocketChat #dev channel](http://chat.0xproject.com) to ensure those changes are in-line with the general philosophy of the project and/or to get some early feedback which can make both your efforts easier as well as our review and merge procedures quick and simple.

We encourage a “PR early” approach so create the PR as early as possible even without the fix/feature ready, so that devs and other contributors know you have picked up the issue. These early PRs should indicate an 'in progress' status by adding the '[WIP]' prefix to the PR title. Please make sure your contributions adhere to our coding guidelines:

* Pull requests adding features or refactoring should be opened against the `development` branch
* Pull requests fixing bugs in the latest release version should be opened again the `master` branch
* Write [good commit messages](https://chris.beams.io/posts/git-commit/)

### Code quality

Because 0x.js is used by multiple relayers in production and their businesses depend on it, we strive for exceptional code quality. Please follow the existing code standards and conventions. `tslint` and `prettier` (described below) will help you.

If you're adding functionality, please also add tests and make sure they pass. We have an automatic coverage reporting tool, so we'll see it if they are missing ;)
If you're adding a new public function/member, make sure you document it with Java doc-style comments. We use typedoc to generate [awesome documentation](https://0xproject.com/docs/0xjs) from the comments within our source code.

If the sub-package you are modifying has a `CHANGELOG.md` file, make sure to add an entry in it for the change made to the package. For published packages, only changes that modify the public interface or behavior of the package need a CHANGELOG entry.

### Styleguide

We use [TSLint](https://palantir.github.io/tslint/) with [custom configs](https://github.com/0xProject/0x.js/tree/development/packages/tslint-config) to keep our code style consistent.

To lint your code just run: `yarn lint`

We also use [Prettier](https://prettier.io/) to auto-format our code. Be sure to either add a [text editor integration](https://prettier.io/docs/en/editors.html) or a [pre-commit hook](https://prettier.io/docs/en/precommit.html) to properly format your code changes.

If using the Atom text editor, we recommend you install the following packages:

* [atom-typescript](https://atom.io/packages/atom-typescript)
* [linter-tslint](https://atom.io/packages/linter-tslint)
* [prettier-atom](https://atom.io/packages/prettier-atom)
* [language-ethereum](https://atom.io/packages/language-ethereum)

Our CI will also run TSLint and Prettier as a part of the test run when you submit your PR. Make sure that the CI tests pass for your contribution.

### Branch structure & versioning

We use [semantic versioning](http://semver.org/), but before a package reaches v1.0.0 all breaking changes as well as new features will be minor version bumps.

We have two main branches: `master` and `development`.

`master` represents the most recent released (published on npm) version.

`development` represents the development state and is a default branch to which you will submit a PR. We use this structure so that we can push hotfixes to the currently released version without needing to publish all the changes made towards the next release. If a hotfix is implemented on `master`, it is back-ported to `development`.
