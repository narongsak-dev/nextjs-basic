export async function GET()
{
    // const products = [
    //     {
    //         id:1,
    //         name:'Computer'
    //     },
    //     {
    //         id:2,
    //         name:'Smart-Phone'
    //     }
    // ]

    // return Response.json(products)
    return Response.json(
        {
            msg: 'api method GET'
        }
    )
}


export async function POST()
{
    return Response.json(
        {
            msg: 'api method POST'
        }
    )
}

export async function PUT()
{
    return Response.json(
        {
            msg: 'api method PUT'
        }
    )
}

export async function DELETE()
{
    return Response.json(
        {
            msg: 'api method DELETE'
        }
    )
}
