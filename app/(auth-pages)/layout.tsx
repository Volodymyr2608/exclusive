import Image from "next/image";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-16 mb-36 w-full flex justify-start items-center gap-x-32">
      <div className="relative w-[805px] h-[781px] flex items-center justify-center bg-blue-50 p-8">
        <Image src="/images/auth.jpg" alt="Shopping cart and smartphone" fill className="w-full h-full" />
      </div>  
      {children}
    </div>
  );
}
