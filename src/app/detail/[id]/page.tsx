
import RootLayout from "@/app/layout";
import HomeDetail from "@/app/components/detail/homeDetail";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params

  return (
    <RootLayout>
      <div className="bg-gray-900">
        <HomeDetail id={id}></HomeDetail>
      </div>

    </RootLayout>
  );
}