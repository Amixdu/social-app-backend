import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

console.log(process.env.DATABASE_HOST);
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: [join(__dirname, '../', 'migrations/*{.ts,.js}')],
  entities: [join(__dirname, '../', '**/*.schema{.ts,.js}')],
};

export const dataSource = new DataSource(dataSourceOptions);
