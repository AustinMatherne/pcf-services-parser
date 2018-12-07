# Contributing

✨ Thank you for contributing! ✨

As a contributor, here are the guidelines we would like you to follow:

- [Code of conduct](#code-of-conduct)
- [How to contribute?](#how-to-contribute)
- [Using the issue tracker](#using-the-issue-tracker)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Coding rules](#coding-rules)
- [Development](#development)

We also recommend that you read
[How to Contribute to Open Source](https://opensource.guide/how-to-contribute).

## Code of Conduct

Help us be open and inclusive.
Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Improve documentation

As a user, you are the perfect candidate to help us improve our documentation:
typo corrections, clarifications, more examples, etc.

### Give feedback on issues

Some issues are created without information requested in the
[bug report](#bug-report) template. Help make them easier to resolve by adding
any relevant information.

### Fix bugs and implement features

Post a comment on an issue to indicate you would like to work on it and to
request help from the community.

## Using the issue tracker

The issue tracker is the channel for [bug reports](#bug-report),
[feature requests](#feature-request) and
[submitting pull requests](#submitting-a-pull-request) only.

Before opening an issue or a pull request, please search to make sure the bug
or feature request hasn't already been reported or fixed.

### Bug report

A good bug report shouldn't leave others needing to chase you for additional
information. Please try to be as detailed as possible in your report and fill
the information requested in the bug report template.

### Feature request

Feature requests are welcome, but take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to you to make a strong
case to convince the project's developers of the merits of this feature.
Please provide as much detail and context as possible and fill the information
requested in the request template.

## Submitting a Pull Request

Good pull requests, whether patches, improvements, or new features, are a
fantastic help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull requests (e.g.
implementing features, refactoring code), otherwise you risk working on
something that the project's developers might not want to merge into the
project. For ambitious tasks, open a Pull Request as soon as possible with the
`[WIP]` prefix in the title, in order to get feedback and help from the
community.

If you have never created a pull request before, welcome 🎉 😄.
[Here is a great tutorial](https://opensource.guide/how-to-contribute/#opening-a-pull-request)
on how to send one :)

Here is a summary of the steps to follow:

- [Set up the workspace](#workspace)
- If you cloned a while ago, pull the latest from upstream and update dependencies:

```bash
git checkout master
git pull upstream master
yarn install
```

- Create a new topic branch to contain your feature, change, or fix:

```bash
git checkout -b <topic-branch-name>
```

- Make your code changes, following the [Coding rules](#coding-rules)
- Push your topic branch up to your fork:

```bash
git push origin <topic-branch-name>
```

- [Open a Pull Request](https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request)

## Coding rules

### Source code

To ensure consistency and quality throughout the source code, all code
modifications must have:

- No [linting](#lint) errors
- A [test](#test) for every case introduced by your code change
- [Valid commit message(s)](#commit-message-guidelines)
- Documentation for new features
- Updated documentation for modified features

### Commit message guidelines

Commit message formatting is enforced by [commitlint](https://github.com/marionebl/commitlint)
and follows the [Conventional Commits spec](https://www.conventionalcommits.org).
Commits which signal Major, Minor, and Patch [SemVer](https://semver.org/)
changes automatically trigger a new npm release when merged into the master branch.

This project is a [Commitizen](https://github.com/commitizen/cz-cli) friendly repository.
You can optionally use Commitizen `npx git-cz` to help you create valid commit messages.

## Development

### Workspace

We use [Yarn](https://github.com/yarnpkg/yarn) to manage dependencies and scripts.
Make sure to install Yarn before proceeding.

[Fork](https://guides.github.com/activities/forking/#fork) the project,
[clone](https://guides.github.com/activities/forking/#clone) your fork,
add this [upstream remote](https://help.github.com/articles/configuring-a-remote-for-a-fork/),
and install the dependencies with Yarn:

```bash
yarn install
```

### Lint

We use [TSLint](https://github.com/palantir/tslint) for linting and [Prettier](https://github.com/prettier/prettier)
for formatting. Prettier formatting is automatically verified and fixed by git hooks.

Before pushing your code changes make sure there are no linting errors:

```bash
yarn lint
```

### Test

This repository uses [Jest](https://github.com/facebook/jest) for writing and
running tests and [Stryker](https://github.com/stryker-mutator/stryker) for
mutation testing.

Before pushing your code changes make sure all **tests pass**:

```bash
yarn test
yarn test:mutations
```

During development you can run tests in watch mode. Optionally filtering tests
by regex or status.

```bash
yarn test:watch
```
