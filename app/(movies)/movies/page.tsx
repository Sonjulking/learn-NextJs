/*
export default function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const hello = searchParams.hell
    return <div>ID: {hello}</div>;
}*/
interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({searchParams}: PageProps) {
    const params = await searchParams;
    const hello = params.hell;
    return <div>ID: {hello}</div>;
}