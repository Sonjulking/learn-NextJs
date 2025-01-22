export default function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const hello = searchParams.hell
    return <div>ID: {hello}</div>;
}