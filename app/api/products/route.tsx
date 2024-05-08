
const knex = require('knex');
const knexConfig = require('@/knexfile');
const sql = knex(knexConfig['development']);

export async function GET() {
    try {
        const data = await sql('products').select();
        return Response.json(data)
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch products data.');
    }
}

//github
// https://github.com/narongsak-dev/nextjs-basic/