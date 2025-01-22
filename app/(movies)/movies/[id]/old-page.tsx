type Props = {
    params: { id: string };
    searchParams: { region: string; page: string };
};

export default async function MovieDetails({params, searchParams}: Props) {
    const {id} = await params;
    const {region, page} = await searchParams;

    console.log(id, region, page);
    return <h1>Movie {id}</h1>;
}
/*const ComponentName = async () => {

}*/
/*
export default function MovieDetail({
    params: {id},
}: {
    params: { id: string };
}) {
    return <h1>Movie {id}</h1>;
}*/
