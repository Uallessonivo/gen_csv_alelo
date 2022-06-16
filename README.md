<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Stack

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. </br>
[Prisma](https://www.prisma.io/) ORM for database

## Problem

We need to send a monthly CSV report to the ALELO portal containing data from our employees so that we can deposit the values ​​​​of transportation and food. But we need to automate this process as much as possible.

## How do I intend to solve

With this application I intend to open routes for registering employees in a database. With the employees registered in the database, I want the system to generate this CSV file with employee data and format it so that it can be sent to the ALELO portal

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
# gen_csv_alelo
