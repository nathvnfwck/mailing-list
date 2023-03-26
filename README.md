<p align="center">
  <img src="https://i.ibb.co/sgbNMDV/8232051640-140bf61c-232d-4fad-b991-0b3615d37c40-1.png" alt="mailing list" />
</p>

This project is a prototype of a "mailing list". Made to register, store and list users (which contains name and email).

## Install

Clone the application with [gitscm](https://git-scm.com/).

```bash
  git clone https://github.com/nathvnfwck/mailing-list.git
  cd mailing-list
```

## Running locally

Install the dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Executing tests

To run the tests, run the following command

```bash
  npm run test
```

## Documentation

#### Get all users

```http
  GET /users
```

| Parameter   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `format` | `string` | **Optional**. Must be 'CSV'. Return Type |

#### Create an user

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Required**. The username |
| `email`      | `string` | **Required**. The user's email |

## Author

- [@nathvnfwck](https://www.github.com/nathvnfwck)
