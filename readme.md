## installation requirements

- node > 18

## docs

[link to api docs, replace the host if need](${host}/docs)

- located ${host}/docs/static/index.html

## useful links

- postgresql search nearby query https://github.com/lib/pq/issues/733
- postgresql command line https://stackoverflow.com/questions/19674456/run-postgresql-queries-from-the-command-line
- knex https://knexjs.org/guide/#configuration-options

## commands

- create a file migration `npx knex migrate:make init --migrations-directory .\server\api\v1\config\db\migrations\`
- shortcut (`yarn run knex:latest`) create a migration on db `npx knex migrate:latest --knexfile .\server\api\v1\shared\db.js `
- shortcut (`yarn run knex:down`) remove migrtions

## checks before run scripts

- if you want to create a migration check if `package.json` file is a \*_commonjs_ type
- if you want to run the server then `package.json` file must have type as a \*_module_
